"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { createStartup } from "@/app/(root)/action/createStartup/page";

const createform = () => {
  const router = useRouter();

  const [startups, setStartups] = useState({
    title: "",
    category: "",
    imageUrl: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStartups((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await createStartup({
      ...startups,
    });
    if (res.success) {
      setStartups({ title: "", category: "", imageUrl: "", bio: "" });
      router.push("/");
    } else {
      alert("Something went wrong 😓");
    }
  };

  return (
    <>
      <div className="w-screen  flex items-center p-5 md:p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
          <h1 className="text-2xl font-bold">Create Post</h1>
          <Input
            type="text"
            placeholder="Title"
            name="title"
            value={startups.title}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Category"
            name="category"
            value={startups.category}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            value={startups.imageUrl}
            onChange={handleChange}
          />
          <textarea
            placeholder="Bio"
            className="border p-2 rounded h-32"
            name="bio"
            value={startups.bio}
            onChange={handleChange}
          />
          <Button type="submit" className="bg-blue-500 text-white">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default createform;
