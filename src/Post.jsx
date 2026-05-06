import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatData";

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
      <h1>Post: {post.title}</h1>
      <p>{post.postbody}</p>
      <p>{formatDate(post.posttime)}</p>
      <div className="comments-div">
        {post.comments?.map((comment) => (
          <p>{comment.commentbody}</p>
        ))}
      </div>
    </>
  );
}

export default Post;
