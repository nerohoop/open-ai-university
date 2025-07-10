import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Book} from "lucide-react";

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
      <section className="relative w-full max-w-6xl flex flex-col items-start text-left gap-6 mb-20 pt-8 pb-16 overflow-hidden px-6">
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
          The Product Hunt for<br />AI Education
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mb-2">
          A curated directory to discover top AI courses, trending GitHub repositories, upcoming events, and practical AI tools.
        </p>
        {/* Newsletter subscribe input */}
        <form className="flex w-full max-w-md mt-4 gap-4">
          <Input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="flex-[2] text-base bg-white"
            style={{minHeight: '48px'}}
          />
          <Button
            type="button"
            className="flex-1 bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-900 transition"
            style={{height: '48px'}}
          >
            Subscribe
          </Button>
        </form>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Card className="bg-white border-black border text-black">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Curated AI Courses</h2>
            <p className="text-gray-700">Discover top-quality courses from leading platforms.</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-black border text-black">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Trending GitHub Repos</h2>
            <p className="text-gray-700">Stay updated with the latest open-source AI projects.</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-black border text-black">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-gray-700">Find AI conferences, workshops, and meetups.</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-black border text-black">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Practical AI Tools</h2>
            <p className="text-gray-700">Explore tools to accelerate your AI journey.</p>
          </CardContent>
        </Card>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-2xl flex flex-col items-center text-center gap-6 mb-20">
        <h2 className="text-2xl font-bold mb-2">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">1</div>
            <div className="font-semibold mb-1">Browse curated resources</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">2</div>
            <div className="font-semibold mb-1">Save your favorites</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">3</div>
            <div className="font-semibold mb-1">Stay ahead in AI</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-2xl flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-2xl font-bold">Start Exploring AI Resources Today</h2>
        <Button className="bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-900 transition">Browse Directory</Button>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 text-sm py-4 border-t border-gray-200">
        © 2024 Open AI University Directory
      </footer>
    </main>
  );
} 