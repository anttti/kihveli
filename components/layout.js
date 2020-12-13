import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Kihveli";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta name="description" content="Reseptit" />
        <title>{siteTitle}</title>
      </Head>

      <header className="py-8 border-b border-gray-300 border-solid">
        <div className="container mx-auto px-4">
          <h1 className="text-base leading-none">
            <Link href="/">
              <a className="text-gray-600 font-black no-underline uppercase tracking-wider">
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
