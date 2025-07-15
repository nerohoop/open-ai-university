"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "./checkbox";
import { dummyCourses, Course, CourseType, Difficulty } from "@/types/course";

export interface SidebarFilterProps {
  onFilterChange?: (filtered: Course[]) => void;
}

const LEVELS = [Difficulty.Beginner, Difficulty.Intermediate, Difficulty.Advanced] as const;
const COURSE_TYPES = [CourseType.Course, CourseType.Repository, CourseType.Event, CourseType.Tool] as const;

export function SidebarFilter({ onFilterChange }: SidebarFilterProps) {
  const [search, setSearch] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<Difficulty[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<CourseType[]>([]);

  useEffect(() => {
    const filtered = dummyCourses.filter((course) => {
      // Search filter (title, subtitle, description, tags, topics)
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        (course.subtitle?.toLowerCase().includes(q) ?? false) ||
        course.description.toLowerCase().includes(q) ||
        course.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        course.topics.some((topic) => topic.toLowerCase().includes(q));
      // Level filter
      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.difficulty);
      // Course type filter
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(course.type);
      return matchesSearch && matchesLevel && matchesType;
    });
    onFilterChange?.(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedLevels, selectedTypes]);

  // Handlers
  const handleLevelChange = (level: Difficulty) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };
  const handleTypeChange = (type: CourseType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleClear = () => {
    setSearch("");
    setSelectedLevels([]);
    setSelectedTypes([]);
  };

  return (
    <aside className="w-72 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 flex flex-col gap-6 text-left">
      {/* Search */}
      <div className="mb-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6z"/></svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters Title and Clear All */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-gray-600">Filters</span>
        <button
          className="text-sky-600 font-semibold text-base hover:underline disabled:text-gray-300"
          onClick={handleClear}
          disabled={search === "" && selectedLevels.length === 0 && selectedTypes.length === 0}
        >
          Clear All
        </button>
      </div>

      {/* Course Type */}
      <div>
        <div className="flex items-center gap-1 mb-2">
          <span className="text-base font-semibold text-gray-600">Course Type</span>
        </div>
        <div className="flex flex-col gap-2">
          {COURSE_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-2 text-base text-gray-900 font-normal">
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
                className="border-gray-300"
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Level */}
      <div>
        <div className="text-base font-semibold text-gray-600 mb-2">Level</div>
        <div className="flex flex-col gap-2">
          {LEVELS.map((level) => (
            <label key={level} className="flex items-center gap-2 text-base text-gray-900 font-normal">
              <Checkbox
                checked={selectedLevels.includes(level)}
                onCheckedChange={() => handleLevelChange(level)}
                className="border-gray-300"
              />
              {level}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
} 