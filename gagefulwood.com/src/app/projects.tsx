"use client";
import React, { useState } from "react";
import GlassCard from "./components/glass-card";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiHtml5, SiJavascript, SiTypescript, SiPostgresql, SiPython, SiSwift, SiFirebase, SiNextdotjs } from "react-icons/si";

// Define the ProjectItem interface
interface ProjectItem {
  title: string;
  description: string;
  githubUrl: string;
  status: "deployed" | "development" | "offline";
  color: string;
  techTags: {
    name: string,
    icon: JSX.Element;
    color: string;
  }[];
}

const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "deployed":
        return { text: "Deployed", bg: "bg-green-600" };
      case "development":
        return { text: "Development", bg: "bg-indigo-600" };
      case "offline":
        return { text: "Offline", bg: "bg-red-600" };
      default:
        return { text: "Unknown", bg: "bg-gray-600" };
    }
  };

const projectItems: ProjectItem[] = [
    {
        title: "Portfolio Website",
        description: "Personal project, used to learn more about React and TailwindCSS.",
        githubUrl: "https://github.com/citlalih1421/Group3-SE",
        status: "deployed",
        color: "#ffffff",
        techTags: [
            {
                name: 'React',
                icon: <FaReact size={16} className="text-blue-500"/>,
                color: "#61dafb",
            },
            {
                name: 'HTML5',
                icon: <SiHtml5 size={16} className="text-orange-500"/>,
                color: "#f97316",
            },
            {
                name: 'TypeScript',
                icon: <SiTypescript size={16} className="text-blue-400"/>,
                color: "#60a5fa",
            },
            {
                name: 'Node.js',
                icon: <FaNodeJs size={16} className="text-green-500"/>,
                color: "#22c55e",
            },
            {
                name: 'Next.js',
                icon: <SiNextdotjs size={16} className="text-black"/>,
                color: "#808080",
            },
        ]
      },
  {
    title: "ShoeBae",
    description: "Capstone Eccommerce Website for Intro to Software Engineering at MSU.",
    githubUrl: "https://github.com/citlalih1421/Group3-SE",
    status: "offline",
    color: "#61dafb",
    techTags: [
        {
            name: 'Django',
            icon: <SiDjango size={16} className="text-green-700"/>,
            color: "#15803d",
        },
        {
            name: 'HTML5',
            icon: <SiHtml5 size={16} className="text-orange-500"/>,
            color: "#f97316",
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript size={16} className="text-yellow-500"/>,
            color: "#eab308",
        },
        {
            name: 'Python',
            icon: <SiPython size={16} className="text-green-300"/>,
            color: "#86efac",
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={16} className="text-blue-800"/>,
            color: "#1E40AF",
        },
    ]
  },
  {
    title: "Kovaaks Scenario Editor",
    description: "This project is still in development.",
    githubUrl: "https://github.com/gagefulwood/kovaaks-scenario-editor",
    status: "development",
    color: "#22c55e",
    techTags: [
    {
        name: 'Python',
        icon: <SiPython size={16} className="text-green-300"/>,
        color: "#86efac",
    },

    ]
  },
  {
    title: "Authentic",
    description: "This project is still in development and private.",
    githubUrl: "https://github.com/SChristenson24/Authentic",
    status: "development",
    color: "#FFA3FD",
    techTags: [
        {
            name: 'Swift',
            icon: <SiSwift size={16} className="text-orange-400"/>,
            color: "#FB923C",
        },
        {
            name: 'Firebase',
            icon: <SiFirebase size={16} className="text-yellow-600"/>,
            color: "#D98806",
        },
    ]
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query
  const filteredProjects = projectItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center p-6 about-bg"
    >
      {/* Page Header */}
      <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>

      {/* Search Bar */}
      <div className="mb-6 w-full flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search projects..."
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {filteredProjects.map((item, index) => (
          <GlassCard
            key={index}
            size="small"
            // Use the project color to tint the card background and create a matching box shadow
            style={{
              backgroundColor: item.color + "20",
              boxShadow: `0 0 8px ${item.color}`,
            }}
            // Align items to start for left alignment
            className="w-[300px] flex flex-col items-start text-left transition transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-white mb-2 line-clamp-1">
              {item.title}
            </h3>
            {/* Container for GitHub Link and Deployment Status */}
            <div className="flex items-center space-x-2 mb-2">
              {/* GitHub Link */}
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              {/* Deployment Status Badge */}
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getStatusBadge(item.status).bg
                    } text-white`}
                >
                {getStatusBadge(item.status).text}
            </span>
            </div>
            {/* Project Description */}
            <p className="text-sm text-gray-300 line-clamp-2 h-10">{item.description}</p>
            {/* Project Tech Tags */}
            {item.techTags && (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2 mt-2 w-full">
                {item.techTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white"
                    style={{
                      backgroundColor: tag.color + "20",
                      boxShadow: `0 0 4px ${tag.color}`,
                    }}
                  >
                    {tag.icon}
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}