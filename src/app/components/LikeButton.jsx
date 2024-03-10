"use client";
import { HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { handleSaveLikes } from "./serverFunctions";

export default function LikeButton({ post }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleCountingLikes = () => setLikeCount(likeCount + 1);

  return (
    <div>
      <button
        onClick={() => {
          handleCountingLikes();
          handleSaveLikes(post, likeCount);
        }}
      >
        <HeartIcon />
      </button>
    </div>
  );
}
