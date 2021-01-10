import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const recipesDirectory = path.join(process.cwd(), "content");

export function getSortedRecipesData() {
  const fileNames = fs.readdirSync(recipesDirectory);
  const allRecipesData = fileNames
    .filter((filename) => filename.indexOf(".md") > 0)
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(recipesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

  return allRecipesData;
  // Sort recipes by date
  // return allRecipesData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
}

export function getAllRecipeIds() {
  const fileNames = fs.readdirSync(recipesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getRecipeData(id) {
  const fullPath = path.join(recipesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(gfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
