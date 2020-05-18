import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedRecipesData } from "../lib/recipes";
import { useOvermind } from "../overmind";

export default function Home() {
  const { state, actions } = useOvermind();
  const { allRecipesData } = state;

  const onToggleRecipe = (id, event) => {
    actions.toggleRecipe({ id, isSelected: event.target.checked });
  };

  return (
    <Layout home>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        <div className="mt-4">
          <h2 className="mb-4">Reseptit</h2>

          <ul>
            {allRecipesData.map((recipe) => (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={state.selectedRecipeSlugs.find(
                      (r) => r === recipe.slug
                    )}
                    onChange={onToggleRecipe.bind(null, recipe.slug)}
                  />
                  {" " + recipe.title + " "}
                </label>
                <Link href="/recipes/[id]" as={`/recipes/${recipe.slug}`}>
                  <a>(resepti)</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="mb-4">Ruokalista</h2>
          {state.selectedRecipes.length === 0 &&
            "Valitse reseptejä ruokalistalta!"}
          <ul>
            {state.selectedRecipes.map((recipe) => (
              <li key={recipe.slug}>{recipe.title}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="mb-4">Ostoslista</h2>
          {state.selectedRecipes.length === 0 &&
            "Ostoslista täyttyy, kun valitset reseptejä."}
          <ul>
            {state.selectedIngredients.map((ingr) => (
              <li>{`${ingr.quantity || ""} ${ingr.unit || ""} ${
                ingr.ingredient
              }`}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allRecipesData = getSortedRecipesData();
  return {
    props: {
      allRecipesData,
    },
  };
}
