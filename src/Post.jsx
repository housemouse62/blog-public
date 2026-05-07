import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatData";
import "./Post.css";

function Post() {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {
      const url = `http://localhost:3000/posts/${params.postID}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setPost(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchposts();
  }, []);

  return (
    <>
      <main className="post-div">
        <h1 className="post-title">{post.title}</h1>
        <p>{post.postbody}</p>
        <div className="date-div">
          <p>{formatDate(post.posttime)}</p>
        </div>
        <div className="comments-div">
          <h2 className="comments-title">Comments:</h2>
          {post.comments?.map((comment) => (
            <div className="comment-div">
              <p>{comment.commentbody}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Post;
