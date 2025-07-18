import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Difficulty, CourseType } from "../types/course";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const getDifficultyColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case Difficulty.Beginner:
      return 'bg-green-100 text-green-800 border-green-200';
    case Difficulty.Intermediate:
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case Difficulty.Advanced:
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getTypeColor = (type: CourseType) => {
  switch (type) {
    case CourseType.Course:
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case CourseType.Repository:
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case CourseType.Event:
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case CourseType.Tool:
      return 'bg-teal-100 text-teal-800 border-teal-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};
