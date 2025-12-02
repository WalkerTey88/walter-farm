// components/Footer.tsx
// A simple footer component for the Walter Farm website.
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Walter Farm, Segamat. All rights reserved.
        </p>
        <div className="flex gap-4">
          {/* TODO: Replace with actual social media links and address */}
          <Link href="https://www.facebook.com" target="_blank" className="hover:text-green-700">
            Facebook
          </Link>
          <span>Johor · Segamat · Malaysia</span>
        </div>
      </div>
    </footer>
  );
}