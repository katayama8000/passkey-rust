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
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleClick: ComponentProps<"button">["onClick"] = async () => {
    setSearch(undefined);
  };

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
  console.log(props);

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
      <Grid>
        <Grid.Col span={9}>
          {props.contents.map((content) => {
            return (
              <div key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a className="no-underline">
                    <BlogComponent
                      title={content.title}
                      content={content.description}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </Grid.Col>
        <Grid.Col span={3}>
          <Profile padding="2" />
          <Profile />
          <Profile />
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
