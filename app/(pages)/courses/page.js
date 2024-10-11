"use client";
import { useState, useEffect } from "react";
import { Search, Filter, Star, ChevronDown, X } from "lucide-react";

// Mock data for demonstration
const COURSES_DATA = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    rating: 4.8,
    totalRatings: 1234,
    description:
      "Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js",
    image: "https://placehold.co/400",
    category: "Web Development",
    level: "Beginner",
    price: 49.99,
    enrollments: 5000,
    lastUpdated: "2024-09-15",
  },

  {
    id: 2,
    title: "Complete Data Science Course",
    instructor: "Jane Doe",
    rating: 4.9,
    totalRatings: 987,
    description:
      "Master data science concepts and tools with Python, NumPy, Pandas, and Matplotlib",
    image: "https://placehold.co/400",
    category: "Data Science",
    level: "Intermediate",
    price: 59.99,
    enrollments: 3000,
    lastUpdated: "2024-09-15",
  },

  {
    id: 3,
    title: "iOS App Development with Swift",
    instructor: "Alice Smith",
    rating: 4.7,
    totalRatings: 845,
    description:
      "Build iOS apps from scratch using Swift and Xcode, perfect for beginners",
    image: "https://placehold.co/400",
    category: "Mobile Development",
    level: "Beginner",
    price: 69.99,
    enrollments: 4000,
    lastUpdated: "2024-08-22",
  },
  {
    id: 4,
    title: "Advanced Machine Learning with TensorFlow",
    instructor: "Bob Johnson",
    rating: 4.6,
    totalRatings: 620,
    description:
      "Master advanced machine learning concepts using TensorFlow and Keras",
    image: "https://placehold.co/400",
    category: "Machine Learning",
    level: "Advanced",
    price: 79.99,
    enrollments: 3500,
    lastUpdated: "2024-07-10",
  },
  {
    id: 5,
    title: "Complete Graphic Design Masterclass",
    instructor: "Cathy Lee",
    rating: 4.9,
    totalRatings: 1530,
    description:
      "Learn Photoshop, Illustrator, and InDesign to create stunning designs",
    image: "https://placehold.co/400",
    category: "Design",
    level: "Beginner",
    price: 49.99,
    enrollments: 4500,
    lastUpdated: "2024-09-01",
  },
  {
    id: 6,
    title: "Python for Data Science and Machine Learning",
    instructor: "Daniel Kim",
    rating: 4.8,
    totalRatings: 1280,
    description:
      "Leverage Python, Pandas, and Scikit-Learn for data science and machine learning tasks",
    image: "https://placehold.co/400",
    category: "Data Science",
    level: "Intermediate",
    price: 59.99,
    enrollments: 6000,
    lastUpdated: "2024-06-28",
  },
  {
    id: 7,
    title: "Ultimate Digital Marketing Bootcamp",
    instructor: "Emily Clark",
    rating: 4.7,
    totalRatings: 765,
    description:
      "Master SEO, content marketing, email marketing, and Google Ads",
    image: "https://placehold.co/400",
    category: "Digital Marketing",
    level: "Beginner",
    price: 39.99,
    enrollments: 5000,
    lastUpdated: "2024-08-12",
  },
  {
    id: 8,
    title: "Business Analytics for Decision Making",
    instructor: "Frank Harris",
    rating: 4.8,
    totalRatings: 930,
    description:
      "Understand business data and make data-driven decisions with Excel and Power BI",
    image: "https://placehold.co/400",
    category: "Business",
    level: "Intermediate",
    price: 79.99,
    enrollments: 5500,
    lastUpdated: "2024-09-20",
  },
  {
    id: 9,
    title: "Full Stack Web Development with MERN",
    instructor: "Grace Miller",
    rating: 4.6,
    totalRatings: 690,
    description:
      "Learn to build full-stack web applications using MongoDB, Express, React, and Node.js",
    image: "https://placehold.co/400",
    category: "Web Development",
    level: "Advanced",
    price: 69.99,
    enrollments: 4800,
    lastUpdated: "2024-08-05",
  },
  {
    id: 10,
    title: "Android Development for Beginners",
    instructor: "Hannah Roberts",
    rating: 4.5,
    totalRatings: 420,
    description:
      "Create Android apps using Java and Kotlin with Android Studio",
    image: "https://placehold.co/400",
    category: "Mobile Development",
    level: "Beginner",
    price: 59.99,
    enrollments: 3700,
    lastUpdated: "2024-09-10",
  },
  {
    id: 11,
    title: "Mastering Data Visualization with D3.js",
    instructor: "Ian Baker",
    rating: 4.7,
    totalRatings: 580,
    description:
      "Create stunning data visualizations with D3.js from basic charts to complex visuals",
    image: "https://placehold.co/400",
    category: "Data Science",
    level: "Advanced",
    price: 74.99,
    enrollments: 3200,
    lastUpdated: "2024-06-14",
  },
  {
    id: 12,
    title: "Digital Marketing Strategy for Small Businesses",
    instructor: "Jessica Turner",
    rating: 4.6,
    totalRatings: 490,
    description:
      "Grow your small business with effective digital marketing strategies",
    image: "https://placehold.co/400",
    category: "Business",
    level: "Beginner",
    price: 44.99,
    enrollments: 2800,
    lastUpdated: "2024-09-07",
  },
  {
    id: 13,
    title: "Complete UI/UX Design for Web & Mobile",
    instructor: "Kelly Adams",
    rating: 4.9,
    totalRatings: 1700,
    description:
      "Learn the principles of UI/UX design with Figma, Sketch, and Adobe XD",
    image: "https://placehold.co/400",
    category: "Design",
    level: "Intermediate",
    price: 89.99,
    enrollments: 6000,
    lastUpdated: "2024-07-20",
  },
  {
    id: 14,
    title: "Master SQL for Data Analysis",
    instructor: "Leo Watson",
    rating: 4.8,
    totalRatings: 1100,
    description:
      "Become an SQL expert for analyzing large datasets and running complex queries",
    image: "https://placehold.co/400",
    category: "Data Science",
    level: "Intermediate",
    price: 49.99,
    enrollments: 4600,
    lastUpdated: "2024-08-30",
  },
  {
    id: 15,
    title: "Facebook and Instagram Ads Mastery",
    instructor: "Megan Hughes",
    rating: 4.7,
    totalRatings: 750,
    description:
      "Grow your business by mastering Facebook and Instagram ad campaigns",
    image: "https://placehold.co/400",
    category: "Digital Marketing",
    level: "Intermediate",
    price: 59.99,
    enrollments: 4200,
    lastUpdated: "2024-08-05",
  },
  {
    id: 16,
    title: "The Ultimate Python Programming Course",
    instructor: "Nathan Scott",
    rating: 4.9,
    totalRatings: 2000,
    description:
      "Master Python programming, from basics to advanced techniques, with hands-on projects",
    image: "https://placehold.co/400",
    category: "Web Development",
    level: "Beginner",
    price: 34.99,
    enrollments: 9000,
    lastUpdated: "2024-09-18",
  },
  {
    id: 17,
    title: "Deep Learning with PyTorch",
    instructor: "Olivia Wright",
    rating: 4.7,
    totalRatings: 850,
    description:
      "Learn deep learning fundamentals and advanced techniques using PyTorch",
    image: "https://placehold.co/400",
    category: "Machine Learning",
    level: "Advanced",
    price: 69.99,
    enrollments: 3700,
    lastUpdated: "2024-07-22",
  },
  {
    id: 18,
    title: "Shopify Store Creation & Optimization",
    instructor: "Paul Green",
    rating: 4.6,
    totalRatings: 530,
    description: "Set up and optimize a profitable Shopify store from scratch",
    image: "https://placehold.co/400",
    category: "Business",
    level: "Beginner",
    price: 39.99,
    enrollments: 2500,
    lastUpdated: "2024-09-04",
  },
  {
    id: 19,
    title: "R Programming for Data Analysis",
    instructor: "Quincy Phillips",
    rating: 4.7,
    totalRatings: 740,
    description:
      "Master R programming for statistical analysis and data science",
    image: "https://placehold.co/400",
    category: "Data Science",
    level: "Intermediate",
    price: 54.99,
    enrollments: 3800,
    lastUpdated: "2024-08-18",
  },
  {
    id: 20,
    title: "Agile Project Management with Scrum",
    instructor: "Rachel Fisher",
    rating: 4.9,
    totalRatings: 1050,
    description:
      "Learn Agile project management using Scrum methodology for team success",
    image: "https://placehold.co/400",
    category: "Business",
    level: "Advanced",
    price: 69.99,
    enrollments: 3200,
    lastUpdated: "2024-07-25",
  },
  {
    id: 21,
    title: "Complete Marketing Automation with HubSpot",
    instructor: "Sarah Thompson",
    rating: 4.6,
    totalRatings: 670,
    description:
      "Automate your marketing workflows using HubSpot CRM and marketing tools",
    image: "https://placehold.co/400",
    category: "Digital Marketing",
    level: "Intermediate",
    price: 79.99,
    enrollments: 3300,
    lastUpdated: "2024-06-12",
  },
  {
    id: 22,
    title: "React Native for Cross-Platform Apps",
    instructor: "Tom Harris",
    rating: 4.7,
    totalRatings: 920,
    description:
      "Build cross-platform mobile apps using React Native with hands-on examples",
    image: "https://placehold.co/400",
    category: "Mobile Development",
    level: "Intermediate",
    price: 64.99,
    enrollments: 4100,
    lastUpdated: "2024-09-01",
  },
];

const CATEGORIES = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Machine Learning",
  "Digital Marketing",
  "Design",
  "Business",
];

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  // State management
  const [courses, setCourses] = useState(COURSES_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [sortOption, setSortOption] = useState("popular");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Filter and sort handlers
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterCourses(query, selectedCategories, selectedLevels, sortOption);
  };

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    filterCourses(searchQuery, updatedCategories, selectedLevels, sortOption);
  };

  const handleLevelToggle = (level) => {
    const updatedLevels = selectedLevels.includes(level)
      ? selectedLevels.filter((l) => l !== level)
      : [...selectedLevels, level];
    setSelectedLevels(updatedLevels);
    filterCourses(searchQuery, selectedCategories, updatedLevels, sortOption);
  };

  const handleSort = (option) => {
    setSortOption(option);
    filterCourses(searchQuery, selectedCategories, selectedLevels, option);
  };

  const filterCourses = (query, categories, levels, sort) => {
    let filtered = [...COURSES_DATA];

    // Apply search filter
    if (query) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filter
    if (categories.length > 0) {
      filtered = filtered.filter((course) =>
        categories.includes(course.category)
      );
    }

    // Apply level filter
    if (levels.length > 0) {
      filtered = filtered.filter((course) => levels.includes(course.level));
    }

    // Apply sorting
    switch (sort) {
      case "popular":
        filtered.sort((a, b) => b.enrollments - a.enrollments);
        break;
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
        );
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    setCourses(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Courses</h1>
          <p className="mt-2 text-gray-600">
            Discover our wide range of courses and start learning today
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-16 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="md:hidden px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
                className="appearance-none bg-gray-100 text-black px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden md:block w-64 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Levels */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Level</h3>
              <div className="space-y-2">
                {LEVELS.map((level) => (
                  <label key={level} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(level)}
                      onChange={() => handleLevelToggle(level)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-600">
                          {course.rating}
                        </span>
                        <span className="ml-1 text-gray-400">
                          ({course.totalRatings})
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        ${course.price}
                      </span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Instructor: {course.instructor}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {courses.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  No courses found
                </h3>
                <p className="text-gray-600 mt-2">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Modal (Mobile) */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsFilterModalOpen(false)}
            />

            <div className="relative bg-white rounded-lg max-w-lg w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setIsFilterModalOpen(false)}>
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Level</h4>
                <div className="space-y-2">
                  {LEVELS.map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleLevelToggle(level)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
