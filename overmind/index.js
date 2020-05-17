import { useEffect, useState } from "react";
import { createOvermind, createOvermindSSR } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";
import { recipesToIngredients } from "../lib/ingredients";

export const useOvermind = createHook();

export const useOvermindFromPageProps = (pageProps) => {
  const [overmind, setOvermind] = useState(null);
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    const config = {
      state: {
        selectedRecipes: [],
        selectedIngredients: (state) =>
          recipesToIngredients(
            state.selectedRecipes.map((slug) =>
              state.allRecipesData.find((recipe) => recipe.slug === slug)
            )
          ),
        ...pageProps,
      },
      actions,
    };
    if (typeof window !== "undefined") {
      setOvermind(
        createOvermind(config, {
          devtools: isDev,
        })
      );
    } else {
      setOvermind(createOvermindSSR(config));
    }
  }, []);

  return overmind;
};
