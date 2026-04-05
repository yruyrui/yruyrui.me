import { Link } from "react-router";
import type { Route } from "./+types/index";
import { getAllBlogPosts } from "../../data/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - NLP Researcher" },
    { name: "description", content: "Read my latest research articles and insights" },
  ];
}

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-lg text-gray-600">
          Insights, research findings, and thoughts on NLP and machine learning
        </p>
      </section>

      {/* Blog Posts */}
      <section className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-gray-600">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-lg">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-gray-900 font-semibold hover:text-gray-600 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
