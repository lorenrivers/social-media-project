"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export async function handleSaveProfile(formData) {
  const user = await currentUser();
  const location = formData.get("location");
  const bio = formData.get("bio");

  const postResult =
    await sql`INSERT INTO user_info (user_id, first_name, last_name, location, bio) VALUES (${user.id}, ${user.firstName}, ${user.lastName}, ${location}, ${bio})`;

  revalidatePath("/find-a-user");
  redirect("/my-profile");
}

export async function handleSavePost(formData) {
  const user = await currentUser();
  const post = formData.get("post");

  const insertPost =
    await sql`INSERT INTO posts (user_id, post_content) VALUES (${user.id}, ${post})`;

  // const insertInitialLikes =
  //   await sql`INSERT INTO likes_junction (post_liked, like_count) VALUES ( ${post.id}, 0)`;

  revalidatePath("/timeline", "/my-profile");
  redirect("/timeline");
}

// export async function insertInitialLikesData(userInfo, postId) {
//   const insertInitialLikes =
//     await sql`INSERT INTO likes_junction (user_id, post_liked, like_count) VALUES (${userInfo.id} , ${postId.id}, 0)`;
//   revalidatePath("/timeline", "/my-profile");
//   redirect("/timeline");
// }

export async function handleSaveLikes(post, likeCount) {
  const postLikes =
    await sql`UPDATE likes_junction SET like_count = ${likeCount} WHERE post_liked = ${post}`;

  revalidatePath("/timeline", "/my-profile");
  redirect("/timeline");
}
