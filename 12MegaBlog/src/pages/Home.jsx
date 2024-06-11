import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  const [Loader, setLoader] = useState(true);

  //const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    appwriteService
      .getallPost([])
      .then((posts) => {
        if (posts) {
          const filtered = posts.documents.filter(
            (post) => post.userId === userData.$id
          );
          setPosts(filtered);
        }
      })

      .finally(() => setLoader(false));
  }, []);

  if (posts.length === 0 && !Loader && userData != null) {
    return (
      <div className="text-4xl font-bold">
        {" "}
        <h1>You haven't posted anything yet</h1>
      </div>
    );
  } else if (userData == null) {
    return <div>Login or Refresh to see your post</div>;
  } else if (Loader) {
    return (
      <div
        className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {
              // .filter((post) => post.userId === userData.$id)
              posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))
            }
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
