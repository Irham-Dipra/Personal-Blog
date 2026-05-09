import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

// Ensure the page gets the correct params correctly typed for Next 15+
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <article className="max-w-2xl mx-auto px-6 w-full pb-10">
        <header className="mb-10 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {post.metadata.section}
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.metadata.title}</h1>
          <div className="text-muted-foreground">
            <time dateTime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>
        
        <div className="prose prose-neutral max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </>
  );
}
