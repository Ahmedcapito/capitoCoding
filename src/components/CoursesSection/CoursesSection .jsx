"use client"
import React from "react";
import Link from "next/link";
import { courses } from "@/data/courses";

const slugify = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

const CoursesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-600">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.desc}</p>
            <Link href={`/${slugify(course.title)}`}>
              <button className="mt-4 text-orange-500 font-bold cursor-pointer">
                Browse Courses
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
