import type { NextPage } from "next";
import { Button } from "src/lib/mantine/Button";
import { Sample } from "@component/Sample";

const handleClick = () => {
  console.log("Hello!");
};

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <Sample />
      <Button dent onClick={handleClick} className="mt-4 block">
        Click me!
      </Button>
      <Button onClick={handleClick} className="mt-4 block">
        Click me!
      </Button>
    </div>
  );
};

export default Home;
