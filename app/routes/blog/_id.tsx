import { Link, useParams } from "react-router";
import type { Route } from "./+types/_id";
import { getBlogPost, getAllBlogPosts } from "../../data/blog";

export function meta({ params }: Route.MetaArgs) {
  const post = getBlogPost(params.id);
  return [
    { title: post ? `${post.title} - NLP Researcher` : "Blog Post Not Found" },
    {
      name: "description",
      content: post?.excerpt || "Blog post not found",
    },
  ];
}

export default function BlogPost() {
  const params = useParams<{ id: string }>();
  const post = getBlogPost(params.id!);

  if (!post) {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
        <p className="text-gray-600">
          Sorry, the blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="text-gray-900 font-semibold hover:text-gray-600">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="space-y-12">
      {/* Header */}
      <article className="space-y-4">
        <Link
          to="/blog"
          className="text-gray-600 hover:text-gray-900 transition inline-block mb-4"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-5xl font-bold text-gray-900">{post.title}</h1>

        <div className="flex items-center gap-4 text-gray-600">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

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
      </article>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-6 text-gray-800">
          {post.content.split("\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("# ")) {
              return (
                <h1
                  key={i}
                  className="text-4xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {trimmed.replace("# ", "")}
                </h1>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-6 mb-3"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-xl font-semibold text-gray-900 mt-4 mb-2"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <ul key={i} className="list-disc list-inside space-y-2 ml-4">
                  {post.content
                    .split("\n")
                    .filter((line) => line.trim().startsWith("- "))
                    .map((line, idx) => (
                      <li key={idx}>{line.replace("- ", "").trim()}</li>
                    ))}
                </ul>
              );
            }
            if (trimmed.startsWith("1.") || trimmed.match(/^\d+\./)) {
              return (
                <ol key={i} className="list-decimal list-inside space-y-2 ml-4">
                  {post.content
                    .split("\n")
                    .filter((line) => line.trim().match(/^\d+\./))
                    .map((line, idx) => (
                      <li key={idx}>{line.replace(/^\d+\.\s*/, "").trim()}</li>
                    ))}
                </ol>
              );
            }

            return (
              <p key={i} className="leading-relaxed text-gray-800">
                {trimmed}
              </p>
            );
          })}
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.id}`}
              className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition"
            >
              <p className="text-sm text-gray-600">← Previous</p>
              <p className="font-semibold text-gray-900 line-clamp-2">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.id}`}
              className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition text-right"
            >
              <p className="text-sm text-gray-600">Next →</p>
              <p className="font-semibold text-gray-900 line-clamp-2">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
