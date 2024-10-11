"use client";

import { useState } from "react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Getting Started with Machine Learning",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    category: "Technology",
    tags: ["ML", "AI", "Programming"],
    summary:
      "An introduction to machine learning concepts and their practical applications in today's world.",
    featured: true,
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "James Wilson",
    date: "2024-03-10",
    category: "Programming",
    tags: ["React", "JavaScript", "Web Development"],
    summary:
      "Deep dive into React Hooks and how they revolutionize state management in functional components.",
    featured: true,
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 3,
    title: "The Future of Sustainable Energy",
    author: "Emma Rodriguez",
    date: "2024-03-08",
    category: "Science",
    tags: ["Environment", "Technology", "Energy"],
    summary:
      "Exploring upcoming sustainable energy solutions and their impact on climate change.",
    featured: false,
    imageUrl: "https://placehold.co/400",
  },
];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(articles.map((article) => article.category))];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Educational Articles
          </h1>
          <p className="mt-2 text-gray-600">
            Explore our collection of educational resources
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 text-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    <Link
                      href={`/articles/${article.id}`}
                      className="hover:text-blue-600"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray-600">{article.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {article.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    <Link
                      href={`/articles/${article.id}`}
                      className="hover:text-blue-600"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {article.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
