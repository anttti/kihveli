import Layout from "../components/layout";
import Recipe from "../components/recipe";
import recipes from "../recipes/recipes.json";
import { useOvermind } from "../overmind";

export default function RecipeTemplate() {
  const overmind = useOvermind();

  return (
    <Layout>
      {overmind.state.recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      recipes,
    },
  };
}
