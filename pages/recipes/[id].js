import Layout from "../../components/layout";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <h1>{recipeData.title}</h1>
      <p>Kesto: {recipeData.duration} min</p>
      <p>Haaste: {recipeData.complexity}</p>
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />

      <pre className="mt-8">{JSON.stringify(recipeData, null, 2)}></pre>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.id);
  return {
    props: {
      recipeData,
    },
  };
}
