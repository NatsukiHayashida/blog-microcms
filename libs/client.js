import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "blog-microcms",
  apiKey: process.env.API_KEY,
})
