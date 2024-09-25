"use client";
import { useBlog } from "@/context/blog-context";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogDetails() {
  const { selectedBlog } = useBlog();
  const router = useRouter();

  return (
    <div className="px-4 md:px-40 py-14">
      <h1 className="text-2xl mb-4">{selectedBlog.title}</h1>
      {selectedBlog.blogImage && (
        <Image
          src={selectedBlog.blogImage}
          alt="Blog Thumbnail"
          width={400}
          height={300}
          className="mb-4"
        />
      )}
      <p>{selectedBlog.blogdetails}</p>
    </div>
  );
}