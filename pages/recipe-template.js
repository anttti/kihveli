import Link from "next/link";
import Layout from "../components/layout";
import Recipe from "../components/recipe";
import recipes from "../recipes/recipes.json";
import { useOvermind } from "../overmind";

export default function RecipeTemplate() {
  const { state, actions } = useOvermind();

  const onToggleRecipe = (id, event) => {
    actions.toggleRecipe({ id, isSelected: event.target.checked });
  };

  return (
    <Layout>
      <ul>
        {state.recipes.map((recipe) => (
          <li>
            <label>
              <input
                type="checkbox"
                onChange={onToggleRecipe.bind(null, recipe.id)}
              />
              {" " + recipe.name}
              <Link href="/recipes/[id]" as={`/recipes/${recipe.slug}`}>
                <a>&nbsp;(resepti)</a>
              </Link>
            </label>
          </li>
        ))}
      </ul>
      {/*state.recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))*/}
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
