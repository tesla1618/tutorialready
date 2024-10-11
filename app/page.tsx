"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Users,
  ArrowRight,
  Play,
  BookOpen,
  Calendar,
  Award,
  Clock,
} from "lucide-react";

import landing from "./public/images/landing.png";
import Image from "next/image";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "John Doe",
      rating: 4.8,
      students: 1234,
      price: "$49.99",
      image: "https://placehold.co/400",
      category: "Programming",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 2345,
      price: "$59.99",
      image: "https://placehold.co/400",
      category: "Data Science",
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 1876,
      price: "$39.99",
      image: "https://placehold.co/400",
      category: "Marketing",
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Wilson",
      date: "2024-10-15",
      time: "10:00 AM EST",
      image: "https://placehold.co/400",
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      instructor: "David Chen",
      date: "2024-10-16",
      time: "2:00 PM EST",
      image: "https://placehold.co/400",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Emily Thompson",
      role: "Student",
      image: "/api/placeholder/80/80",
      content:
        "TutorialReady has transformed my learning journey. The quality of instruction and the interactive platform make learning enjoyable and effective.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Professional Developer",
      image: "/api/placeholder/80/80",
      content:
        "The live classes and community support have helped me stay motivated and achieve my learning goals. Highly recommended!",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      role: "Career Switcher",
      image: "/api/placeholder/80/80",
      content:
        "Thanks to TutorialReady, I successfully transitioned into tech. The structured curriculum and hands-on projects were invaluable.",
    },
  ];

  const handleNewsletterSubmit = (e: any) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Unlock Your Learning Potential
              </h1>
              <p className="text-xl text-blue-100">
                Access high-quality courses, join live classes, and connect with
                a supportive learning community to achieve your educational
                goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/live-classes"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Join Live Classes
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src={landing}
                alt="Online learning illustration"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Online Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Courses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Start your learning journey with our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Instructor: {course.instructor}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="ml-1 text-gray-600">
                        {course.students} students
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      {course.price}
                    </span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Classes Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Upcoming Live Classes
            </h2>
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl text-gray-600">
              Join interactive sessions with expert instructors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {upcomingClasses.map((class_) => (
              <div
                key={class_.id}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={class_.image}
                      alt={class_.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {class_.title}
                    </h3>
                    <p className="text-gray-600">
                      Instructor: {class_.instructor}
                    </p>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {class_.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {class_.time}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/live-classes/${class_.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center sm:text-left"
                  >
                    Join Class
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/live-classes"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Live Classes <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Student Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              See what our students have to say about their learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest courses and updates
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
