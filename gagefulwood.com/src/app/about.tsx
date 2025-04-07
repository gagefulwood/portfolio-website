"use client";
import React, { JSX, useState } from "react";
import GlassCard from "./components/glass-card";
import { FaReact, FaNodeJs} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiDjango,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiSwift,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
} from "react-icons/si";

// TechItem interface
interface TechItem {
  title: string;
  description: string;
  category:
    | "fullstack"
    | "frontend"
    | "backend"
    | "language"
    | "database"
    | "hobby";
  icon: JSX.Element;
  color: string;
}

const ICON_SIZE = 80;

// Data for tech items, including icon colors and hex values
const techItems: TechItem[] = [
  {
    title: "React",
    description: "",
    category: "frontend",
    icon: <FaReact size={ICON_SIZE} className="text-blue-500" />,
    color: "#61dafb",
  },
  {
    title: "Node.js",
    description: "",
    category: "backend",
    icon: <FaNodeJs size={ICON_SIZE} className="text-green-500" />,
    color: "#22c55e",
  },
  {
    title: "TailwindCSS",
    description: "",
    category: "frontend",
    icon: <SiTailwindcss size={ICON_SIZE} className="text-teal-500" />,
    color: "#14b8a6",
  },
  {
    title: "HTML5",
    description: "",
    category: "frontend",
    icon: <SiHtml5 size={ICON_SIZE} className="text-orange-500" />,
    color: "#f97316",
  },
  {
    title: "Django",
    description: "",
    category: "fullstack",
    icon: <SiDjango size={ICON_SIZE} className="text-green-700" />,
    color: "#15803d",
  },
  {
    title: "Next.JS",
    description: "",
    category: "fullstack",
    icon: <SiNextdotjs size={ICON_SIZE} className="text-black" />,
    color: "#808080",
  },
  {
    title: "TypeScript",
    description: "",
    category: "language",
    icon: <SiTypescript size={ICON_SIZE} className="text-blue-400" />,
    color: "#60a5fa",
  },
  {
    title: "JavaScript",
    description: "",
    category: "language",
    icon: <SiJavascript size={ICON_SIZE} className="text-yellow-500" />,
    color: "#eab308",
  },
  {
    title: "Python",
    description: "",
    category: "language",
    icon: <SiPython size={ICON_SIZE} className="text-green-300" />,
    color: "#86efac",
  },
  {
    title: "C++",
    description: "",
    category: "language",
    icon: <SiCplusplus size={ICON_SIZE} className="text-blue-700" />,
    color: "#1d4ed8",
  },
  {
    title: "C",
    description: "",
    category: "language",
    icon: <SiC size={ICON_SIZE} className="text-gray-700" />,
    color: "#808080",
  },
  {
    title: "Swift",
    description: "",
    category: "language",
    icon: <SiSwift size={ICON_SIZE} className="text-orange-400" />,
    color: "#FB923C",
  },
  {
    title: "PostgreSQL",
    description: "",
    category: "database",
    icon: <SiPostgresql size={ICON_SIZE} className="text-blue-800" />,
    color: "#1E40AF",
  },
  {
    title: "SQLite",
    description: "",
    category: "database",
    icon: <SiSqlite size={ICON_SIZE} className="text-green-600" />,
    color: "#16A34A",
  },
  {
    title: "Firebase",
    description: "",
    category: "backend",
    icon: <SiFirebase size={ICON_SIZE} className="text-yellow-600" />,
    color: "#D97706",
  },
  {
    title: "CSS3",
    description: "",
    category: "frontend",
    icon: <SiCss3 size={ICON_SIZE} className="text-blue-600" />,
    color: "#264de4",
  },
];

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "fullstack" | "frontend" | "backend" | "language" | "database" | "hobby"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tech items based on selected category and search query
  const filteredItems = techItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    "all",
    "fullstack",
    "frontend",
    "backend",
    "language",
    "database",
    "hobby",
  ] as const;

  return (
    <section id="about" className="min-h-screen flex flex-col items-center p-6 about-bg">
      <h2 className="text-4xl font-bold mb-8 text-white">Skills & Interests</h2>

      {/* Search Bar */}
      <div className="mb-6 w-full flex justify-center">
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search skills..."
                    className="w-full rounded-full bg-white/20 border border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 px-4 py-2 transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
            />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                            clipRule="evenodd"
                        />
                </svg>
                </div>
            </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-4 py-2 rounded-full font-medium shadow transition transform duration-300 hover:scale-105"
                    style={{
                        backgroundColor:
                            selectedCategory === category
                                ? "var(--color-deep-indigo)"  // deep indigo (blue tone)
                                : "var(--color-dark-charcoal)", // dark charcoal for unselected tabs
                        color:
                            selectedCategory === category
                            ? "#FFFFFF"
                            : "var(--foreground)",
                        border:
                            selectedCategory === category
                            ? "none"
                            : "1px solid var(--color-muted-charcoal)",
                    }}
                >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>

        {/* Tech Items Grid (centered with a fixed max width) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
            {filteredItems.map((item, index) => (
            <GlassCard
                key={index}
                size="card"
                style={{ 
                    backgroundColor: item.color + "20",
                }}
                className="flex flex-col items-center text-center"
            >
                {/* Icon with Tooltip */}
                <div className="relative group flex justify-center items-center">
                    {item.icon}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
                    {item.title}
                </span>
                </div>
            </GlassCard>
            ))}
        </div>
    </section>
  );
}