import { Provider } from "overmind-react";
import { useOvermindFromPageProps } from "../overmind";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  const overmind = useOvermindFromPageProps(pageProps);

  // Need to null-check Overmind, otherwise useOvermind-hook will crash when
  // Overmind is null on the initial render
  if (overmind) {
    return (
      <Provider value={overmind}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return null;
}
