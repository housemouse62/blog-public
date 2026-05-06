import { useEffect, useState } from "react";
import formatDate from "../utils/formatData";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {
      const url = "http://localhost:3000/posts/";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setPosts(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchposts();
  }, []);

  return (
    <>
      <main className="posts-main">
        <h1>The Blog</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.postbody.slice(0, 200)}...</p>
            <p className="post-time">{formatDate(post.posttime)}</p>
            <p className="post-comments">comments: {post._count.comments}</p>
            <Link to={`${post.id}`}>Read Post</Link>
          </div>
        ))}
      </main>
    </>
  );
}

export default Blog;
