import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Course } from "@/types/course";
import {getDifficultyColor, getTypeColor} from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/home/${course.id}`} className="block">
      <Card className="w-full max-w-sm bg-white border shadow flex flex-col transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
        {course.image_url && (
          <Image
            src={course.image_url}
            alt={course.title}
            width={400}
            height={160}
            className="w-full h-40 object-cover rounded-t-xl"
            priority
          />
        )}
        <CardHeader className="pb-2">
          <div className="flex flex-col gap-1 mb-2">
            <CardTitle className="text-xl font-extrabold text-black">
              {course.title}
            </CardTitle>
            {course.subtitle && (
              <div className="text-sm text-gray-600">
                {course.subtitle}
              </div>
            )}
          </div>

          <div className="flex gap-2 mb-3">
            <Badge
              variant="outline"
              className={clsx(getDifficultyColor(course.difficulty))}
            >
              {course.difficulty}
            </Badge>
            <Badge
              variant="outline"
              className={clsx(getTypeColor(course.type))}
            >
              {course.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-700 text-sm line-clamp-3">{course.description}</p>
          <div className="mt-4 space-y-2">

            <div className="flex items-center justify-between text-gray-500 text-base">
              <Badge
                variant="outline"
                className={clsx(getTypeColor(course.type))}
              >
                {course.source_platform}
              </Badge>
              {course.updated_at && (
                <div className="flex items-center gap-1 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {new Date(course.updated_at).toISOString().slice(0, 10).replace(/-/g, "/")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 