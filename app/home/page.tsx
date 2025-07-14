import {Button} from "@/components/ui/button";
import {Book} from "lucide-react";
import {CourseCard} from "@/components/ui/course-card";
import {dummyCourses} from "@/types/course";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-between py-12">
      {/* Header */}
      <header className="w-full max-w-6xl flex items-center justify-between px-6 py-4 mb-8">
        <div className="flex items-center gap-2">
          <Book className="w-6 h-6 text-black" />
          <span className="text-xl font-bold tracking-tight">Open AI University</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-black transition">About</a>
          <a href="#" className="text-gray-700 hover:text-black transition">Contact</a>
          <Button className="ml-2 border border-gray-300 bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">+ Submit</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl flex flex-col items-center text-center gap-6 mb-20 pt-8 pb-16 overflow-hidden px-6">
        {/* Gradient background shape */}
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[300px] bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 rounded-full blur-2xl opacity-80"></div>
        </div>
        {/* Badge for tools added */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded shadow">2 courses added this week</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">
          OPEN AI University
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mb-2">
          A curated directory to discover top AI courses, trending GitHub repositories, upcoming events, and practical AI tools.
        </p>
      </section>

      {/* Courses Section */}
      <section className="w-full max-w-6xl mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured AI Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 text-sm py-4 border-t border-gray-200">
        © 2024 Open AI University Directory
      </footer>
    </main>
  );
}