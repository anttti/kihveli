import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "overmind-react";
import { useOvermindFromPageProps } from "../overmind";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  const overmind = useOvermindFromPageProps(pageProps);

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  // Need to null-check Overmind, otherwise useOvermind-hook will crash when
  // Overmind is null on the initial render
  if (overmind) {
    return (
      <Provider value={overmind}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return null;
}
