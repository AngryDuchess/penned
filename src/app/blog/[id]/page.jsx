"use client";
import { useBlog } from "@/context/blog-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Twitter, Linkedin } from "@/assets/icons";
import { getDateCreated } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "iconsax-react";

export default function BlogDetails() {
  const { selectedBlog } = useBlog();
  const router = useRouter();
  useEffect(() => {
    if (!selectedBlog) {
      router.push("/");
    }
  }, [selectedBlog, router]);

  const handleEdit = () => {
    router.push(`/blog/edit-post?id=${selectedBlog.id}`);
  };

  if (!selectedBlog) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: selectedBlog.title,
    image: selectedBlog.image,
    description: selectedBlog.blogdetails,
  }
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex justify-between">
        <Link
          href="/"
          className="mx-4 md:mx-40  flex gap-3 py-2 px-3 rounded-lg font-semibold text-sm w-24 text-gray-400 hover:text-pink-500"
        >
          <ArrowLeft size={20} />
          Back
        </Link>
        <button
          onClick={handleEdit}
          className="mx-4 md:mx-40 py-2 px-3  bg-violet-800  rounded-lg font-semibold text-sm text-center w-24 hover:bg-violet-800/80 hover:underline"
        >
          Edit
        </button>
      </div>
      <div className="px-4 md:px-40 py-8 flex flex-col justify-center items-center  gap-8">
        <div className="flex flex-col gap-3 items-center">
          <p>{getDateCreated()}</p>
          <h1 className="text-4xl text-center mb-4">{selectedBlog.title}</h1>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/in/hamidamahama/">
              <Linkedin />
            </Link>
            <Link href="https://x.com/hamida_mahama">
              <Twitter />
            </Link>
          </div>
        </div>
        {selectedBlog.blogImage && (
          <div className="flex flex-col gap-6 justify-center items-start max-w-3xl w-full">
            <div
              className="w-full h-96 bg-center rounded-2xl"
              style={{ backgroundImage: `url(${selectedBlog.blogImage})` }}
            ></div>
            <p className="text-left items-start">{selectedBlog.blogdetails}</p>
          </div>
        )}
      </div>
    </>
  );
}
