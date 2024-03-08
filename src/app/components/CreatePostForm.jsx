"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { handleSavePost } from "./functions";

const FormDemo = () => (
  <Form.Root className="w-[260px]" action={handleSavePost}>
    <Form.Field className="grid mb-[10px]">
      <div className="flex items-baseline justify-between">
        <Form.Label
          className="text-[15px] font-medium leading-[35px] text-indigo11"
          htmlFor="post"
        >
          What&apos;s on your mind?
        </Form.Label>
      </div>

      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-slate2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-indigo12 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
          id="post"
          name="post"
          placeholder="Share your thoughts..."
        />
      </Form.Control>
    </Form.Field>

    <Form.Submit asChild>
      <button
        className="box-border w-full text-indigo12 shadow-indigo5 hover:bg-indigo2 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-indigo2 focus:outline-none mt-[10px]"
        type="submit"
      >
        Save Post
      </button>
    </Form.Submit>
  </Form.Root>
);

export default FormDemo;
