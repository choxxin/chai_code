//Props is a special keyword in React that stands for properties and is used for passing data from one component to another
import React from "react";
// cointaing some bydefau;t value and if value given its chose that one , to inject js we use {}
function Card({ description = "EMPTY", username = "ansh", post = "anime" }) {
  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl"> meow </h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWemhOs7BBiXrE4yT6Ya3A_aDbTfNcIlEZc_qdCa4Tg&s"
          alt="f"
          width="384"
          height="512"
        ></img>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
export default Card;
