import Link from "next/link";
import { getPostsBySection } from "@/lib/mdx";
import NavBar from "@/components/NavBar";
import { notFound } from "next/navigation";
import { BLOG_SECTIONS } from "@/config";

export async function generateStaticParams() {
  return BLOG_SECTIONS.map((section) => ({
    section: section.toLowerCase(),
  }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const decodedSection = decodeURIComponent(section);
  
  const posts = getPostsBySection(decodedSection);
  
  const validSections = BLOG_SECTIONS.map(s => s.toLowerCase());
  if (posts.length === 0 && !validSections.includes(decodedSection.toLowerCase())) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <div className="max-w-2xl mx-auto px-6 w-full flex flex-col gap-8 pb-12">
        <header className="mb-8 border-b border-border pb-8">
          <h1 className="text-4xl font-bold tracking-tight capitalize">{decodedSection}</h1>
          <p className="text-muted-foreground mt-2">
            Posts written under the {decodedSection} category.
          </p>
        </header>

        <section>
          {posts.length === 0 ? (
            <p className="text-muted-foreground italic">No posts found in this section yet.</p>
          ) : (
            <div className="flex flex-col gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <h3 className="text-xl font-semibold group-hover:underline underline-offset-4 decoration-1">{post.title}</h3>
                    <time className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  {post.description && (
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                  )}
                  <span className="text-sm font-medium mt-1 underline underline-offset-4 decoration-border group-hover:decoration-foreground transition-colors">
                    Read more
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
