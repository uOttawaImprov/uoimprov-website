import type { MDXInstance } from "astro";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const format = "MMMM D, YYYY";

export const postFilter = (
  post: MDXInstance<Record<string, any>>[]
): MDXInstance<Record<string, any>>[] => {
  return post
    .sort((a, b) => {
      return (
        +dayjs(b.frontmatter.date, format) - +dayjs(a.frontmatter.date, format)
      );
    })
    .filter((post) => {
      return !post.frontmatter.hidden;
    });
};
