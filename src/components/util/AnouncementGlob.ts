import type { MDXInstance } from "astro";

export const postFilter = (
  post: MDXInstance<Record<string, any>>[]
): MDXInstance<Record<string, any>>[] => {
  return post
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    })
    .filter((post) => {
      return !post.frontmatter.hidden;
    });
};
