"use client";

import { useState } from "react";
import Link from "next/link";
import sidebarLinks from "@/data/sidebarlinks.json";

interface SidebarLink {
  title: string;
  path: string;
  icon?: string;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-gray-800 text-white touch-manipulation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/25 z-10 lg:hidden touch-manipulation
          transition-opacity duration-75 ease-in
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
                    fixed top-0 left-0 h-full w-64 bg-gray-800 text-white
                    transform transition-transform duration-200 ease-in-out
                    lg:translate-x-0 z-20
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
      >
        <nav className="p-4 mt-16 lg:mt-4">
          <ul className="space-y-2">
            {sidebarLinks.sidebarLinks.map((link: SidebarLink) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {/*link.icon && <span className="mr-2">{link.icon}</span>*/}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
