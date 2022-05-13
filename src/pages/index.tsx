import type { NextPage } from "next";
import { Button } from "src/lib/mantine/Button";
import { Sample } from "@component/Sample";
import { BlogComponent } from "@component/BlogComponent";

const handleClick = () => {
  console.log("Hello!");
};

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
    </div>
  );
};

export default Home;
