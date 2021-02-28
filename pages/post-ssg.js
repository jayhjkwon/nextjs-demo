import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps() {
  const post = await fetcher(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return { props: { post } };
}

const Post = ({ post }) => {
  return <div>Title: {post.title}</div>;
};

export default Post;
