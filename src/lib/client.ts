import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "katayama-blog",
  apiKey: process.env.API_KEY,
});
