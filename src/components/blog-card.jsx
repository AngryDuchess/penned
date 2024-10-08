"use client"
import { useState } from "react";
import { getDateCreated } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useBlog } from "@/context/blog-context";
import Modal from "./modal";

export default function BlogCard({ blog, onDelete }) {
    const { setSelectedBlog} = useBlog();
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(blog.id);
  };

  const handleRead = () => {
    setSelectedBlog(blog)
  }
  return (
    <>
    <article className="flex w-full md:flex-col gap-3 bg-[#131313]/60 shadow-[0_0_0_0.5px_rgba(150,150,150,1)] rounded-2xl px-4 py-4 md:w-[220px]">
      <div className="w-32 h-32 md:w-[180px] md:h-[180px] ">
        <Image
          className="rounded-lg w-full h-full object-cover"
          alt="blog image"
          width={200}
          height={200}
          src={blog.blogImage}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-1 text-sm w-40">
          <p className="font-bold  ">{blog.title}</p>
          <caption className="text-xs font-bold text-[#555555] text-left">
            {getDateCreated()}
          </caption>
          <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-gray-400">
            {blog.blogdetails}{" "}
          </p>
        </div>
        <div className="flex gap-4">
        <Link
            href={`/blog/${blog.id}`}
            onClick={handleRead}
            className="py-2 px-3 bg-violet-800  rounded-lg font-semibold text-sm text-center w-24 hover:bg-violet-800/80 hover:underline"
          >
            Read
          </Link>
          <button
            onClick={openModal}
            className="py-2 px-3 rounded-lg font-semibold text-sm w-24 text-gray-400 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
    <Modal isOpen={isModalOpen} onClose={closeModal} deletPost={handleDelete} />
    </>
  );
}
