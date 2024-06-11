import React, { useState, useEffect } from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    appwriteService
      .getallPost([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          // console.log(posts.documents);
        }
      })
      .finally(() => setLoader(false));
  }, []);

  return !Loader ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {/* Loop in to the post array */}
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div
      className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default AllPosts;
