import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type PostMetadata = {
  title: string;
  date: string;
  description?: string;
  slug: string;
  section: string;
  highlighted?: boolean;
};

export function getPostSlugs() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
    return [];
  }
  return fs.readdirSync(contentDirectory).filter(path => path.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as Omit<PostMetadata, 'slug'>,
    content,
  };
}

export function getAllPosts(): PostMetadata[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      return {
        ...post.metadata,
        slug: post.slug,
      };
    })
    // Sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  return posts;
}

export function getPostsBySection(section: string): PostMetadata[] {
  return getAllPosts().filter((post) => post.section.toLowerCase() === section.toLowerCase());
}

export function getHighlightedPosts(): PostMetadata[] {
  return getAllPosts().filter((post) => post.highlighted);
}
