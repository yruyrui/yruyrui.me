import { Link, Outlet } from "react-router";
import type { Route } from "../+types/root";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <nav className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            NLP Researcher
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          <p>&copy; 2026 NLP Researcher. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
