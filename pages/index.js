import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedRecipesData } from "../lib/recipes";

export default function Home({ allRecipesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
