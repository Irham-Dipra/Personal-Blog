import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { BLOG_SECTIONS } from "@/config";

export default function NavBar() {
  const sections = BLOG_SECTIONS;

  return (
    <nav className="w-full border-y border-border py-4 mb-10 sticky top-0 bg-background/95 backdrop-blur z-10">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight hover:text-muted-foreground transition-colors">
          Personal Blog
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-muted-foreground transition-colors">All</Link>
            {sections.map(section => (
              <Link 
                key={section} 
                href={`/${section.toLowerCase()}`} 
                className="hover:text-muted-foreground transition-colors"
              >
                {section}
              </Link>
            ))}
          </div>
          <div className="border-l border-border pl-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
