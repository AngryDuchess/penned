import Image from "next/image";
import { Polkadot } from "iconsax-react";
import { blogs } from "@/lib/misc.data";
import Link from "next/link";

export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
            {blogs.map((data, index) => (
              <article
                key={index}
                className="flex w-full md:flex-col gap-3 hover:bg-pink-400/20 rounded-2xl px-4 py-4 md:w-[220px]"
              >
                <div className="w-32 h-32 md:w-[180px] md:h-[180px] ">
                  <Image
                    className="rounded-lg w-full h-full object-cover"
                    alt="blog image"
                    width={200}
                    height={200}
                    src={data.image}
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <div className="flex flex-col gap-1 text-sm w-40">
                    <p className="font-bold  ">{data.title}</p>
                    <caption className="text-xs font-bold text-[#555555] text-left">
                      {data.date_created}
                    </caption>
                    <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-gray-400">
                      {data.details}{" "}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/blog/${data.id}`}
                      className="py-2 px-3 bg-gray-900 rounded-lg font-semibold text-sm text-center w-24 hover:bg-gray-900/80 hover:underline"
                    >
                      Read
                    </Link>
                    <button className="py-2 px-3 rounded-lg font-semibold text-sm w-24 text-gray-400 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
