// components/Navbar.tsx
// A responsive navigation bar component. It highlights the current page and
// collapses into a mobile menu on smaller screens.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/activities", label: "Activities" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Walter Farm
        </Link>
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-2 py-1 rounded ${
                  pathname === item.href
                    ? "text-green-700 font-semibold"
                    : "text-neutral-700 hover:text-green-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded border px-2 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-2 rounded ${
                    pathname === item.href
                      ? "text-green-700 font-semibold bg-green-50"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}