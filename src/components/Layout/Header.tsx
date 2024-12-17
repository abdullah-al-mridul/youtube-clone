import React, { useState } from "react";
import { Menu, Search, Bell, User, Video, Mic } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toggle } = useSidebar();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect-default border-b border-gray-800">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 hover:bg-gray-800 rounded-full inline md:hidden transition-all"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <Link to="/" className="flex items-center gap-1">
            <Video className="w-8 h-8 text-red-600" />
            <span className="text-white text-xl font-semibold">YouTube</span>
          </Link>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-2xl hidden xs:block mx-4"
        >
          <div className="flex items-center">
            <div className="flex-1 flex items-center bg-gray-900/50 backdrop-blur-md rounded-l-full border border-gray-700">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-transparent text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 h-[42px] bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-md rounded-r-full border border-l-0 border-gray-700"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              className="ml-4 p-2 hover:bg-gray-800/50 hidden md:inline rounded-full"
            >
              <Mic className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-800/50 transition-all hidden md:inline rounded-full">
            <Video className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 hover:bg-gray-800/50 transition-all hidden md:inline rounded-full">
            <Bell className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 hover:bg-gray-800/50 transition-all rounded-full hidden md:inline">
            <User className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
