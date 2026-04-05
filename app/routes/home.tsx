import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NLP Researcher - Home" },
    {
      name: "description",
      content:
        "Exploring natural language processing and machine learning research",
    },
  ];
}

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to My NLP Research Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Exploring the intersection of natural language processing, machine
          learning, and artificial intelligence to advance human-computer
          understanding.
        </p>
        <div className="flex gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Research Focus */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Research Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Language Models",
              description:
                "Investigating transformer architectures and pre-training methodologies",
            },
            {
              title: "Text Understanding",
              description:
                "Semantic analysis and information extraction from unstructured text",
            },
            {
              title: "Multilingual NLP",
              description:
                "Cross-lingual transfer learning and low-resource language processing",
            },
          ].map((focus, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {focus.title}
              </h3>
              <p className="text-gray-600">{focus.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
        <p className="text-gray-600">
          Check out my recent blog posts and research updates.
        </p>
        <Link
          to="/blog"
          className="inline-block px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition"
        >
          View All Articles →
        </Link>
      </section>
    </div>
  );
}
