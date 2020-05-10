import { useEffect, useState } from "react";
import { createOvermind, createOvermindSSR } from "overmind";
import { createHook } from "overmind-react";

export const useOvermind = createHook();

export const useOvermindFromPageProps = (pageProps) => {
  const [overmind, setOvermind] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOvermind(createOvermind({ state: pageProps }));
    } else {
      setOvermind(createOvermindSSR({ state: pageProps }));
    }
  }, []);

  return overmind;
};
