import { dummyCourses } from "@/types/course";
import Image from "next/image";

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const course = dummyCourses.find((c) => c.id === params.courseId);

  if (!course) {
    return <div className="p-8 text-center text-red-500">Course not found.</div>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black py-12 px-4">
      <div className="max-w-2xl w-full bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center">
        {course.image_url && (
          <Image
            src={course.image_url}
            alt={course.title}
            width={600}
            height={240}
            className="w-full h-60 object-cover rounded-lg mb-6"
            priority
          />
        )}
        <h1 className="text-3xl font-extrabold mb-2">{course.title}</h1>
        {course.subtitle && <h2 className="text-lg text-gray-600 mb-4">{course.subtitle}</h2>}
        <p className="text-gray-800 text-base mb-6">{course.description}</p>
        <div className="flex gap-4">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">{course.difficulty}</span>
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">{course.type}</span>
        </div>
      </div>
    </main>
  );
} 