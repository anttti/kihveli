import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedRecipesData } from "../lib/recipes";
import { useOvermind } from "../overmind";

export default function Home() {
  const overmind = useOvermind();
  const { allRecipesData } = overmind.state;

  return (
    <Layout home>
      <section>
        <ul>
          {allRecipesData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/recipes/[id]" as={`/recipes/${id}`}>
                <a>{title}</a>
              </Link>
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
