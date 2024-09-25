"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Polkadot, Magicpen } from "iconsax-react";
import gif from "@/assets/writing.gif";
import Link from "next/link";
import BlogCard from "@/components/blog-card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("blog_post")) || [];
    setBlogs(storage);
  }, []);

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blog_post", JSON.stringify(updatedBlogs));
  }
  return (
    <>
      <header className="flex items-center justify-center py-14">
        <Polkadot size="32" color="#FF8A65" />
      </header>
      <main className="px-1 w-full">
        <div className="flex flex-col gap-6 items-center justify-center py-14">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-gradient text-3xl font-bold bg-gradient-to-r from-violet-800  via-pink-500 to-yellow-400">
              BLOG POSTS
            </h1>
            <p>While you're here, browse through my blog posts</p>
          </div>
          <Link
            href="/create-post"
            className="w-52 py-2 px-3 bg-gradient-to-r from-violet-800 to-pink-500 border-b-2 border-white rounded-lg font-semibold text-sm text-center hover:border-b-0 hover:border-t hover:underline flex gap-2 items-center justify-center"
          >
            <Magicpen size={16} />
            Write
          </Link>
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                className="rounded-2xl"
                src={gif}
                width={120}
                height={120}
                alt="an illustration of a hand writing"
              />
              <p>No blog posts available</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
