"use client";
import { HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { handleSaveLikes } from "./serverFunctions";

export default function LikeButton({ post }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleCountingLikes = () => setLikeCount(likeCount + 1);

  return (
    <div className="flex gap-x-2 m-2">
      <button
        onClick={() => {
          handleCountingLikes();
          handleSaveLikes(post, likeCount);
        }}
      >
        <HeartIcon />
      </button>
      <p>{likeCount}</p>
    </div>
  );
}
