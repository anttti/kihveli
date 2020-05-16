import Layout from "../../components/layout";
import Recipe from "../../components/recipe";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";

export default function RecipePage({ recipeData }) {
  return (
    <Layout>
      <Recipe recipe={recipeData} />
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
