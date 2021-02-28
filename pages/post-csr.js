import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Post = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher);
  
  if (error) return <h1>Error</h1>
  if (!data) return <h1>Loading...</h1>

  return <div>Title: {data.title}</div>
};

export default Post;
