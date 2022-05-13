import type { GetStaticProps, NextPage } from "next";
import { BlogComponent } from "@component/BlogComponent";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";

export type Blog = {
  title: string;
  body: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <div className="mx-auto max-w-prose">
      {props.contents.map((content) => {
        return (
          <div key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a>
                <BlogComponent title={content.title} content="ぶらぶらぶら" />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<Blog>
> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  console.log(data);
  return { props: data };
};

export default Home;
