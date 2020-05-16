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
      <section>
        <ul>
          {allRecipesData.map((recipe) => (
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={onToggleRecipe.bind(null, recipe.slug)}
                />
                {" " + recipe.title}
                <Link href="/recipes/[id]" as={`/recipes/${recipe.slug}`}>
                  <a>&nbsp;(resepti)</a>
                </Link>
              </label>
            </li>
          ))}
        </ul>
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
