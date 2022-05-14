import { Blog } from "src/pages";
import { client } from "src/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  const data = await client.getList<Blog>({
    endpoint: "blog",
    queries: { q: req.body.q },
  });
  res.status(200).json(data);
};

export default handler;
