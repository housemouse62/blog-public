import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import { useAuth } from "./AuthContext";
import "./Post.css";

function Post() {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [commentState, setCommentState] = useState([]);
  const { userState, tokenState } = useAuth();
  const [refresh, setRefresh] = useState(0);

  console.log(userState);
  useEffect(() => {
    const fetchposts = async () => {
      const url = `${import.meta.env.VITE_API_URL}/posts/${params.postID}`;
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
  }, [refresh]);

  function handleSubmit(e) {
    e.preventDefault();

    const fetchComment = async () => {
      const url = `${import.meta.env.VITE_API_URL}/posts/${params.postID}/comments/`;
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenState}`,
          },
          body: JSON.stringify({
            commentbody: commentState,
            postID: params.postID,
            authorID: userState.id,
          }),
        });
        const nextresponse = await response.json();
        if (nextresponse.id) {
          alert("Comment Posted");
          setRefresh((prev) => prev + 1);
          setCommentState("");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchComment();
  }

  function handleDeleteComment(e, commentID) {
    e.preventDefault();

    const deleteComment = async () => {
      const url = `${import.meta.env.VITE_API_URL}/posts/${params.postID}/comments/${commentID}`;
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${tokenState}`,
          },
        });
        const nextresponse = await response.json();
        if (nextresponse.id) {
          alert("Comment Deleted");
          setRefresh((prev) => prev + 1);
        }
      } catch (error) {
        console.error(error);
      }
    };
    deleteComment();
  }

  return (
    <>
      <main className="post-div">
        <h1 className="post-title">{post.title}</h1>
        <p>{post.postbody}</p>
        <div className="date-div">
          <p>{formatDate(post.posttime)}</p>
        </div>
        {userState ? (
          <form onSubmit={handleSubmit}>
            <div className="post-comments-div">
              <label htmlFor="post-comment">
                <textarea
                  className="post-comment-box"
                  name="commentbody"
                  placeholder=" "
                  id="post-comment"
                  value={commentState}
                  onChange={(e) => setCommentState(e.target.value)}
                />
                <span>Have a comment? Let's hear it.</span>
              </label>
              <button className="form-button" type="submit">
                Submit Comment
              </button>
            </div>
          </form>
        ) : (
          <div>
            <p>
              Want to comment? <Link to="/login">Login</Link>or{" "}
              <Link to="/createUser">Register</Link>
            </p>
          </div>
        )}
        <div className="comments-div">
          <h2 className="comments-title">Comments:</h2>
          {post.comments?.map((comment) => (
            <div key={comment.id} className="comment-div">
              <div className="comment-wrapper">
                <p className="comment-author">
                  {comment.author.screenname
                    ? comment.author.screenname
                    : "anonymous"}
                </p>
                <div className="comment-body">
                  <p>&ldquo;{comment.commentbody}&rdquo;</p>
                </div>
                <p className="comment-time">
                  {formatDate(comment.commenttime)}
                </p>
              </div>
              {comment.authorID === userState.id && (
                <div className="delete-div">
                  <Link
                    onClick={(e) => {
                      handleDeleteComment(e, comment.id);
                    }}
                  >
                    Delete
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Post;
