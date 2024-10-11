"use client";
import { useState } from "react";
import {
  Star,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  Play,
  User,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import instructor from "../../../public/images/ins.jpeg";

// Mock data for demonstration
const COURSE_DATA = {
  id: 1,
  title: "Complete Web Development Bootcamp 2024",
  description:
    "Learn web development from scratch with this comprehensive bootcamp. Master HTML, CSS, JavaScript, React, Node.js, and more to become a full-stack developer.",
  instructor: {
    id: 1,
    name: "John Doe",
    image:
      "https://www.harvestworks.org/wp-content/uploads/2024/03/Tommy-Martinez.png",
    title: "Senior Web Developer",
    bio: "John is a senior web developer with over 10 years of experience in full-stack development. He has worked with major tech companies and has helped hundreds of students start their development careers.",
    totalStudents: 15000,
    totalCourses: 12,
    rating: 4.9,
  },
  rating: 4.8,
  totalRatings: 1234,
  totalStudents: 5000,
  lastUpdated: "2024-09-15",
  language: "English",
  duration: "40 hours",
  level: "Beginner",
  price: 49.99,
  thumbnail:
    "https://www.upshottechnologies.in/images/course/web-designing-web-development-training-in-salem.jpg",
  features: [
    "Lifetime access",
    "Certificate of completion",
    "40 hours of video content",
    "Downloadable resources",
    "Access on mobile and TV",
    "30-day money-back guarantee",
  ],
  syllabus: [
    {
      id: 1,
      title: "Introduction to Web Development",
      duration: "2 hours",
      lessons: [
        { id: 1, title: "Course Overview", duration: "10 min" },
        {
          id: 2,
          title: "Setting Up Your Development Environment",
          duration: "20 min",
        },
        { id: 3, title: "Understanding Web Technologies", duration: "30 min" },
      ],
    },
    // Add more modules
  ],
  reviews: [
    {
      id: 1,
      user: "Sarah Wilson",
      rating: 5,
      date: "2024-09-10",
      comment:
        "Excellent course! The instructor explains everything clearly and the projects really help reinforce the concepts.",
      userImage: "/api/placeholder/40/40",
    },
    // Add more reviews
  ],
  relatedCourses: [
    {
      id: 2,
      title: "Advanced JavaScript Masterclass",
      instructor: "Jane Smith",
      rating: 4.7,
      students: 3000,
      price: 59.99,
      image:
        "https://ultimatecourses.com/assets/share/learn/javascript-masterclass-0048c30e380eae59d3b62e3e9986133f072e9b4447c6a62b16a080e8c6b5e546.png",
    },
    // Add more related courses
  ],
};

export default function CourseDetailPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");

  const handleModuleToggle = (moduleId) => {
    setSelectedModule(selectedModule === moduleId ? null : moduleId);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle review submission
    console.log({ rating: reviewRating, comment: reviewComment });
    setReviewRating(0);
    setReviewComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Course Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {COURSE_DATA.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {COURSE_DATA.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold text-gray-800">
                    {COURSE_DATA.rating}
                  </span>
                  <span className="ml-1 text-gray-500">
                    ({COURSE_DATA.totalRatings} ratings)
                  </span>
                </div>
                <div className="text-gray-500">
                  {COURSE_DATA.totalStudents} students enrolled
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  {COURSE_DATA.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" />
                  {COURSE_DATA.level}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  {COURSE_DATA.language}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll Now - ${COURSE_DATA.price}
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Preview Course
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={COURSE_DATA.thumbnail}
                alt={COURSE_DATA.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                {COURSE_DATA.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Content
              </h2>
              <div className="space-y-4 text-gray-900">
                {COURSE_DATA.syllabus.map((module) => (
                  <div key={module.id} className="border rounded-lg">
                    <button
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                      onClick={() => handleModuleToggle(module.id)}
                    >
                      <div className="flex items-center">
                        <span className="font-semibold">{module.title}</span>
                        <span className="ml-2 text-gray-500">
                          ({module.duration})
                        </span>
                      </div>
                      {selectedModule === module.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {selectedModule === module.id && (
                      <div className="px-4 py-2 space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded"
                          >
                            <div className="flex items-center">
                              <Play className="h-4 w-4 text-gray-500 mr-2" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-gray-500">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Student Reviews
              </h2>

              {/* Review Statistics */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  {COURSE_DATA.rating}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= COURSE_DATA.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-500">
                    Course Rating • {COURSE_DATA.totalRatings} Reviews
                  </div>
                </div>
              </div>

              {/* Leave a Review */}
              <div className="border-t border-b py-6 mb-6 text-gray-800">
                <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= reviewRating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                  <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {COURSE_DATA.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-center space-x-4 mb-2">
                      <img
                        src={review.userImage}
                        alt={review.user}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">
                          {review.user}
                        </div>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm">{review.date}</div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Instructor
              </h2>
              <div className="flex items-center space-x-4 mb-4 text-gray-800">
                <img
                  src={COURSE_DATA.instructor.image}
                  alt={COURSE_DATA.instructor.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">
                    {COURSE_DATA.instructor.name}
                  </h3>
                  <p className="text-gray-600">
                    {COURSE_DATA.instructor.title}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center text-gray-800">
                  <div className="font-semibold">
                    {COURSE_DATA.instructor.totalStudents}
                  </div>
                  <div className="text-sm text-gray-500">Students</div>
                </div>
                <div className="text-center text-gray-800">
                  <div className="font-semibold">
                    {COURSE_DATA.instructor.totalCourses}
                  </div>
                  <div className="text-sm text-gray-500">Courses</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {COURSE_DATA.instructor.bio}
              </p>
              <Link
                href={`/instructor/${COURSE_DATA.instructor.id}`}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                View Profile
              </Link>
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Related Courses
              </h2>

              <div className="grid grid-cols-1 gap-4 text-gray-800">
                {COURSE_DATA.relatedCourses.map((course) => (
                  <div key={course.id} className="flex items-center space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-10 rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-gray-600">{course.instructor}</p>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="text-gray-500">
                        {course.students} students
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
