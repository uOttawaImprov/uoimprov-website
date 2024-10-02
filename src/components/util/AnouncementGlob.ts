import type { MarkdownInstance } from "astro";

export const postFilter = (
  post: MarkdownInstance<Record<string, any>>[]
): MarkdownInstance<Record<string, any>>[] => {
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
