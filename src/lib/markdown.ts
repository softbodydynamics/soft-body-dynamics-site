import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "src/content");

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data,
    contentHtml,
    rawContent: content,
  };
}
