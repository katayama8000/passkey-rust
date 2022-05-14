import { ComponentProps, useEffect, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { client } from "src/lib/client";
//mantine
import { Badge, Grid } from "@mantine/core";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
//component
import { MainImageSwiper } from "@component/MainImageSwiper";
import { BlogComponent } from "@component/BlogComponent";
import { Profile } from "@component/Profile";
//hooks
import { useGetAllTags } from "src/hooks/useGetAllTags";

export type Blog = {
  title: string;
  body: string;
  description: string;
  image?: { url: string; height: number; width: number };
  tag: string[];
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();
  const allTags = useGetAllTags(props.contents);

  const handleSubmit = async (value: { search: string | number }) => {
    const q = value.search;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = async () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  const form = useForm({ initialValues: { search: "" } });

  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          className="mt-2 flex gap-x-2"
        >
          <TextInput
            placeholder="searching..."
            {...form.getInputProps("search")}
          />
          <Button type="submit">検索</Button>
          <Button type="reset" onClick={handleClick}>
            リセット
          </Button>
        </form>
      </div>
      <p className="my-3 py-3 text-gray-500">{`${
        search ? "検索結果" : "記事の総数"
      } : ${totalCount}件`}</p>
      <Grid>
        <Grid.Col span={9}>
          <div>
            <MainImageSwiper />
          </div>
          {contents.length === 0 ? (
            <div className="mt-5 flex w-full justify-center">
              <p className="align-center rounded border border-cyan-300 p-5 text-cyan-500">
                記事が見つかりませんでした。
              </p>
            </div>
          ) : (
            contents.map((content) => {
              return (
                <div key={content.id} className="pt-2">
                  <Link href={`/blog/${content.id}`}>
                    <a className="no-underline">
                      <BlogComponent
                        title={content.title}
                        content={content.description}
                        image={content.image}
                        tags={content.tag}
                      />
                    </a>
                  </Link>
                </div>
              );
            })
          )}
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="p-2">
            <Profile padding={0} />
            <div>
              <Grid>
                {allTags?.map((tag, index) => (
                  <Grid.Col key={index} span={3}>
                    <div className="px-1">
                      <Badge color="teal" size="xl">
                        {tag}
                      </Badge>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<Blog>
> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return { props: data };
};

export default Home;
