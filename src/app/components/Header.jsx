"use client";
import React from "react";
import UserAndSignInButtons from "./UserAndSignInButtons";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

const SeparatorDemo = () => (
  <div className="w-full max-w-[300px] mx-[15px]">
    <div className="text-indigo12 text-[15px] leading-5 font-medium">
      <h1>The Social Network</h1>
    </div>
    <Separator.Root className="bg-iris8 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
    <div className="flex h-5 items-center">
      <div className="text-indigo11 text-[15px] leading-5">
        <Link href="/">Home</Link>
      </div>
      <Separator.Root
        className="bg-iris8 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-indigo11 text-[15px] leading-5">
        <Link href="/timeline">Timeline</Link>
      </div>
      <Separator.Root
        className="bg-iris8 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-indigo11 text-[15px] leading-5">
        <Link href="/my-profile">My Profile</Link>
      </div>
      <Separator.Root
        className="bg-iris8 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-indigo11 text-[15px] leading-5">
        <Link href="/find-a-user">Find a User</Link>
      </div>
      <Separator.Root
        className="bg-iris8 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <UserAndSignInButtons />
    </div>
  </div>
);

export default SeparatorDemo;
