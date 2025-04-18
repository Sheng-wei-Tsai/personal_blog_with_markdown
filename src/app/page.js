import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div>
      <h2>HenryTech Blog</h2>
      <ul>
        {" "}
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`src/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
