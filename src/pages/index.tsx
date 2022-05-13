import type { GetStaticProps, NextPage } from "next";
import { BlogComponent } from "@component/BlogComponent";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Grid } from "@mantine/core";
import { Profile } from "@component/Profile";

export type Blog = {
  title: string;
  body: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <div className="mx-auto max-w-6xl">
      aaa
      <Grid>
        <Grid.Col span={9}>
          {props.contents.map((content) => {
            return (
              <div key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a>
                    <BlogComponent
                      title={content.title}
                      content="ぶらぶらぶら"
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </Grid.Col>
        <Grid.Col span={3}>
          <div>
            <Profile />
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
