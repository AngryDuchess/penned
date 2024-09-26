"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, InfoCircle } from "iconsax-react";
import { BeatLoader } from "react-spinners";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogdetails, setBlogDetails] = useState("");
  const [blogImage, setBlogImage] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDetailsChange = (e) => setBlogDetails(e.target.value);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlogImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if (!title || !blogdetails) {
      setLoading(false);
      setError(true);
      return;
    }
    setLoading(true);
    setError(false);
    const existingPosts = JSON.parse(localStorage.getItem("blog_post")) || [];
    const id = Date.now();
    const newPost = { id, title, blogdetails, blogImage };
    const updatedPosts = [...existingPosts, newPost];


    setTimeout(() => {
      localStorage.setItem("blog_post", JSON.stringify(updatedPosts));
      router.push("/");
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Link
        href="/"
        className="mx-4 md:mx-40  flex gap-3 py-2 px-3 rounded-lg font-semibold text-sm w-24 text-gray-400 hover:text-pink-500"
      >
        <ArrowLeft size={20} />
        Back
      </Link>
      <form className="px-4 md:px-40 py-14" onSubmit={handlePublish}>
        {error && (
          <div className="w-full  mb-4 border border-red-500 rounded-lg p-2 py-2 bg-red-400/20">
            <div className="flex flex-row gap-2 items-center">
              <InfoCircle size="20" variant="Bold" />
              <p>All fields are required</p>
            </div>
          </div>
        )}
        <div className="flex justify-between py-4">
          <h1 className="text-2xl">Create a New Post</h1>

          <button
            type="submit"
            className="py-2 px-3 bg-pink-500 rounded-lg font-semibold text-sm text-center w-24 hover:bg-pink-500/80 hover:underline"
          >
            {loading ? (
              <BeatLoader
                color="#FFFFFF"
                size={8}
                aria-label="Loading Spinner"
              />
            ) : (
              "Publish"
            )}
          </button>
        </div>

        <hr className="py-4" />
        <main className="max-w-lg flex flex-col gap-6">
          <div>
            <label htmlFor="text" className="block mb-2 text-sm font-semibold">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
             
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="thumbnail"
              className="block mb-2 text-sm font-semibold"
            >
              Blog Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
            />
            <p className="text-xs">Maximum size of 5MB</p>
          </div>
          <div>
            <label htmlFor="text" className="block mb-2 text-sm font-semibold">
              Blog Details
            </label>
            <textarea
              type="text"
              id="details"
              value={blogdetails}
              onChange={handleDetailsChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              
            />
          </div>
        </main>
      </form>
    </>
  );
}
