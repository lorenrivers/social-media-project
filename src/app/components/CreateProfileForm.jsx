"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { handleSaveProfile } from "./serverFunctions";

const FormDemo = () => (
  <Form.Root className="w-[260px]" action={handleSaveProfile}>
    <Form.Field className="grid mb-[10px]">
      <div className="flex items-baseline justify-between">
        <Form.Label
          className="text-[15px] font-medium leading-[35px] text-indigo11 ml-2"
          htmlFor="location"
        >
          Where do you live?
        </Form.Label>
        <Form.Message
          className="text-[13px] text-indigo11 opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your details.
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-slate2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-indigo12 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 ml-2"
          id="location"
          name="location"
          type="text"
          placeholder="Location"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="grid mb-[10px]">
      <div className="flex items-baseline justify-between ml-2">
        <Form.Label
          className="text-[15px] font-medium leading-[35px] text-indigo11"
          htmlFor="bio"
        >
          Write a short bio about yourself!
        </Form.Label>
        <Form.Message
          className="text-[13px] text-indigo11 opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your details. All users need to submit a bio.
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-slate2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-indigo12 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none ml-2"
          id="bio"
          name="bio"
          placeholder="What do you want other people to know about you? Hobbies? Interests? Favourite movies or music? Write it here!"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Submit asChild>
      <button
        className="box-border w-full text-indigo12 shadow-indigo5 hover:bg-indigo2 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-indigo2 focus:outline-none mt-[10px] ml-2"
        type="submit"
      >
        Save Profile
      </button>
    </Form.Submit>
  </Form.Root>
);

export default FormDemo;
