import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-between py-12">
      {/* Hero Section */}
      <section className="relative w-full max-w-2xl flex flex-col items-center text-center gap-6 mb-20 pt-8 pb-16 overflow-hidden">
        {/* Gradient background shape */}
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[300px] bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 rounded-full blur-2xl opacity-80"></div>
        </div>
        <Badge className="bg-black text-white font-semibold px-3 py-1 rounded-full mb-2 shadow-lg">The Product Hunt for AI Education</Badge>
        <div className="flex flex-col items-center gap-2">
          <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 mb-2 shadow-md">
            <Sparkles className="text-white w-8 h-8" />
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">
            <span className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Open AI University</span> Directory
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto mb-2">
          Discover, learn, and stay ahead with the best AI education resources, courses, trending GitHub repos, events, and tools.
        </p>
        <p className="text-base text-gray-500 mb-6">Your curated gateway to the future of AI learning.</p>
        <Button className="bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-gray-900 transition flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Explore Directory
        </Button>
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