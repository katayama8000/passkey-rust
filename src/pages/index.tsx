import type { GetStaticProps, NextPage } from "next";
import { BlogComponent } from "@component/BlogComponent";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Grid } from "@mantine/core";
import { Profile } from "@component/Profile";
import { ComponentProps, useState } from "react";

export type Blog = {
  title: string;
  body: string;
  description: string;
  image?: { url: string; height: number; width: number };
  tag?: string[];
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
  };
  console.log(search);
  console.log(props);

  const handleClick: ComponentProps<"button">["onClick"] = async () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div className="mx-auto max-w-6xl">
      <form className="mt-2 flex gap-x-2" onSubmit={handleSubmit}>
        <input type="text" name="query" className="border border-black px-2" />
        <button className="border border-black px-2">検索</button>
        <button
          type="reset"
          className="border border-black px-2"
          onClick={handleClick}
        >
          リセット
        </button>
      </form>
      <p className="my-3 py-3 text-gray-500">{`${
        search ? "検索結果" : "記事の総数"
      }:${totalCount}件`}</p>
      <Grid>
        <Grid.Col span={9}>
          {contents.map((content) => {
            return (
              <div key={content.id}>
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
          })}
        </Grid.Col>
        <Grid.Col span={3}>
          <Profile padding="2" />
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
