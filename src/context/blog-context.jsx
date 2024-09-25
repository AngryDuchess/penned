"use client"
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}