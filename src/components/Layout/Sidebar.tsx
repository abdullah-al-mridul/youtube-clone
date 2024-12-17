import React from "react";
import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Film,
  Gamepad,
  Music2,
  Newspaper,
  Trophy,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: PlaySquare, label: "Subscriptions", path: "/subscriptions" },
  { icon: Clock, label: "History", path: "/history" },
  { icon: ThumbsUp, label: "Liked Videos", path: "/liked" },
  { icon: Film, label: "Movies", path: "/movies" },
  { icon: Gamepad, label: "Gaming", path: "/gaming" },
  { icon: Music2, label: "Music", path: "/music" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Trophy, label: "Sports", path: "/sports" },
];

export default function Sidebar() {
  const location = useLocation();
  const { isOpen } = useSidebar();

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-0 z-40 bg-black/60 pt-3 backdrop-blur-lg md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="h-full pt-16 p-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-4 px-3 py-2.5 rounded-lg transition-all group ${
                  isActive ? "bg-gray-800/50" : "hover:bg-gray-800/50"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass-effect-default border-r border-gray-800 overflow-y-auto hidden md:block">
        <nav className="p-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex mb-2 items-center gap-4 px-3 bg-blur-css-2 py-2.5 rounded-lg transition-all group ${
                  isActive ? "bg-blur-css" : ""
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
