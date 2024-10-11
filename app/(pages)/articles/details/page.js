"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data - replace with your actual data fetching logic
const article = {
  id: 1,
  title: "Getting Started with Machine Learning",
  content: `
    <p class="mb-4">Machine learning is revolutionizing the way we approach problem-solving in technology. This comprehensive guide will walk you through the fundamental concepts and practical applications of machine learning in today's world.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Understanding the Basics</h2>
    <p class="mb-4">At its core, machine learning is about creating systems that can learn from data. Rather than being explicitly programmed to perform a task, these systems improve their performance through experience.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Key Concepts</h2>
    <p class="mb-4">Before diving deep into machine learning algorithms, it's essential to understand several fundamental concepts that form the backbone of this field.</p>
  `,
  author: {
    id: 1,
    name: "Dr. Sarah Chen",
    bio: "Dr. Sarah Chen is a leading expert in Machine Learning with over 10 years of experience in both academia and industry. She holds a Ph.D. in Computer Science from Stanford University.",
    imageUrl: "https://placehold.co/400",
    otherArticles: [
      {
        id: 2,
        title: "Deep Learning Fundamentals",
        summary:
          "An introduction to neural networks and deep learning architectures.",
      },
      {
        id: 3,
        title: "Natural Language Processing Basics",
        summary: "Understanding the core concepts of NLP and its applications.",
      },
    ],
  },
  publishedDate: "2024-03-15",
  category: "Technology",
  tags: ["ML", "AI", "Programming"],
  imageUrl: "https://placehold.co/400",
};

const relatedArticles = [
  {
    id: 4,
    title: "Introduction to Neural Networks",
    author: "James Wilson",
    summary: "Learn about the building blocks of deep learning.",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 5,
    title: "Python for Data Science",
    author: "Emma Rodriguez",
    summary: "Essential Python concepts for data science and ML.",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 6,
    title: "Understanding Data Preprocessing",
    author: "Michael Chang",
    summary: "Best practices for preparing your data for ML models.",
    imageUrl: "https://placehold.co/400",
  },
];

export default function ArticlePage({ params }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Very informative.",
      date: "2024-03-16",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "This helped me understand ML concepts better. Thanks!",
      date: "2024-03-16",
    },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: "Current User", // Replace with actual user data
      content: comment,
      date: new Date().toISOString().split("T")[0],
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 text-gray-700 pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              {article.category}
            </span>
            <span className="inline-block px-2 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              {article.publishedDate}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4">
            <img
              src={article.author.imageUrl}
              alt={article.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{article.author.name}</p>
              <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                Author
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-start gap-6">
            <img
              src={article.author.imageUrl}
              alt={article.author.name}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {article.author.name}
              </h3>
              <p className="text-gray-600 mb-4">{article.author.bio}</p>

              <h4 className="font-semibold mb-2">
                Other articles by {article.author.name}:
              </h4>
              <ul className="space-y-2">
                {article.author.otherArticles.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={`/articles/${article.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {article.title}
                    </Link>
                    <p className="text-sm text-gray-600">{article.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Discussion</h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border-b border-gray-200 last:border-0 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{comment.author}</h3>
                  <time className="text-sm text-gray-600">{comment.date}</time>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">
                    <Link
                      href={`/articles/${article.id}`}
                      className="hover:text-blue-600"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {article.summary}
                  </p>
                  <p className="text-sm text-gray-500">By {article.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
