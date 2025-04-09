import React from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from "@tabler/icons-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold text-white">aloshy.🅰🅸</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Empowering users to monetize their data while maintaining privacy and control.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#stats" className="text-gray-400 hover:text-white transition">
                  Stats
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} aloshy.🅰🅸. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 