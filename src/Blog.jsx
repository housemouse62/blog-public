import { useEffect } from "react";

function Blog() {
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
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchposts();
  }, []);
}

export default Blog;
