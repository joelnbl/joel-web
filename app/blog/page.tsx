"use client"
import React, { useEffect, useState } from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={post.cover_image} alt={post.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
          <p className="mt-2 text-gray-500">{post.description}</p>
          <div className="mt-4">
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=joelnbl')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-around">
        {posts.map(post => <BlogPostCard key={post.id} post={post} />)}
      </div>
    </section>
  )
}