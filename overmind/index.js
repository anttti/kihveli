import { useEffect, useState } from "react";
import { createOvermind, createOvermindSSR } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";

export const useOvermind = createHook();

// State structure TODO:
const state = {
  recipes: [],
  selectedRecipes: [], // list of ids
};

export const useOvermindFromPageProps = (pageProps) => {
  const [overmind, setOvermind] = useState(null);

  useEffect(() => {
    const config = {
      state: pageProps,
      actions,
    };
    if (typeof window !== "undefined") {
      setOvermind(createOvermind(config));
    } else {
      setOvermind(createOvermindSSR(config));
    }
  }, []);

  return overmind;
};
