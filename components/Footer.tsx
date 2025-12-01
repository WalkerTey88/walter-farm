import Link from "next/link";

/**
 * Footer component for the Walter Farm website.
 * Displays copyright information and simple navigation links.
 */
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Walter Farm, Segamat. All rights reserved.</p>
        <div className="flex gap-4">
          {/* Replace with the real Facebook URL when available */}
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-green-700"
          >
            Facebook
          </Link>
          <span>Johor · Segamat · Malaysia</span>
        </div>
      </div>
    </footer>
  );
}