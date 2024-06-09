import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

//This is the file preview component
//Id is written in dollar read documnetation i preview we write id in dollar
function PostCard({ $id, title, featuredImage }) {
  return (
    // By clicking on the post it will take u to the full content of the post
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            // Featured image is also the unique id of the image to get acess of
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        {/* Show the heaading as it is  */}
      </div>
    </Link>
  );
}
export default PostCard;
