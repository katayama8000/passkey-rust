import type { GetStaticProps, NextPage } from "next";
import { BlogComponent } from "@component/BlogComponent";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Badge, Grid, Image } from "@mantine/core";
import { Profile } from "@component/Profile";
import { ComponentProps, useEffect, useState } from "react";

export type Blog = {
  title: string;
  body: string;
  description: string;
  image?: { url: string; height: number; width: number };
  tag: string[];
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();
  const [allTags, setAlltags] = useState<string[]>([]);

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
  console.log("全データ", props);

  const handleClick: ComponentProps<"button">["onClick"] = async () => {
    setSearch(undefined);
  };

  useEffect(() => {
    let array: string[] = [];
    for (let i = 0; i < props.contents.length; i++) {
      console.log("useEffect", props.contents[i].tag);
      array.push(...props.contents[i].tag);
    }
    console.log("array", array);
    const filteredArray = array.filter(function (ele, pos) {
      return array.indexOf(ele) == pos;
    });

    console.log("The filtered array ", filteredArray);
    setAlltags(filteredArray);
  }, []);

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
          <div>
            <Image
              src="img/gollira.jpeg"
              alt="image"
              className="p-8"
              radius="md"
              fit="contain"
            />
          </div>
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
          <Profile padding={2} />
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
