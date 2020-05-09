import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Haarukka";

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Reseptit" />
      </Head>

      <header>
        {home ? (
          <h1>{siteTitle}</h1>
        ) : (
          <h2>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </h2>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <footer>
          <Link href="/">
            <a>← Etusivulle</a>
          </Link>
        </footer>
      )}
    </div>
  );
}
