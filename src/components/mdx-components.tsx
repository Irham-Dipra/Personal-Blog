import { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-6 mb-4 text-xl font-semibold tracking-tight text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground/90" {...props} />
  ),
  a: (props) => (
    <a
      className="font-medium underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props) => <li className="text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-border pl-6 italic text-muted-foreground" {...props} />
  ),
  hr: (props) => <hr className="my-8 border-border" {...props} />,
  code: (props) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg bg-foreground p-4 text-background" {...props} />
  ),
};
