/*
This file demonstrates Incremental Static Generation.

When you visit "http://localhost:3000/post-isr/1" for the first time, the page will show "Loading..."
Then show title of post 1 which is rendered on client side.

Meanwhile Next.js app will generate static HTML files for that in background.
And from your second visit (refresh the page), it will show generated static HTML files. 🎉
*/

import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const post = await fetcher(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return { props: { post } };
}

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <div>Title: {post.title}</div>;
};

export default Post;
