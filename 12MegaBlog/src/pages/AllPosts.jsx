import React, { useState, useEffect } from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  appwriteService.getallPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
      // console.log(posts.documents);
    }
  });

  return (
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
  );
}

export default AllPosts;
