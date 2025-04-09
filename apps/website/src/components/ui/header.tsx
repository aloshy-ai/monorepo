import React from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from "@tabler/icons-react";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold text-white">aloshy.🅰🅸</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </Link>
            <Link href="#stats" className="text-gray-300 hover:text-white transition">
              Stats
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition">
              FAQ
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/aloshy-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <IconBrandGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/aloshyai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <IconBrandTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/aloshy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <IconBrandDiscord className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 