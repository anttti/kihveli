import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Haarukka";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Reseptit" />
      </Head>

      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-base leading-none">
            <Link href="/">
              <a className="text-white no-underline uppercase tracking-wider">
                {siteTitle}
              </a>
            </Link>
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
