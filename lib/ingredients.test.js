import { recipesToIngredients } from "./ingredients";

test("collects ingredients from recipes", () => {
  const recipes = [
    {
      title: "Lasagne",
      slug: "lasagne",
      duration: 60,
      complexity: 3,
      ingredients: [
        { ingredient: "Jalotofu", quantity: 1, unit: "pkt" },
        { ingredient: "Jalotofu", quantity: 1, unit: "pkt" },
        { ingredient: "porkkana", quantity: 3, unit: "kpl" },
      ],
    },
  ];
  const ingredients = recipesToIngredients(recipes);
  expect(ingredients).toEqual([
    { ingredient: "Jalotofu", quantity: 2, unit: "pkt" },
    { ingredient: "porkkana", quantity: 3, unit: "kpl" },
  ]);
});

test("works when some of the quantities are strings", () => {
  const recipes = [
    {
      title: "Lasagne",
      slug: "lasagne",
      duration: 60,
      complexity: 3,
      ingredients: [
        { ingredient: "Jalotofu", quantity: "1", unit: "pkt" },
        { ingredient: "Jalotofu", quantity: 1, unit: "pkt" },
        { ingredient: "porkkana", quantity: "3", unit: "kpl" },
      ],
    },
  ];
  const ingredients = recipesToIngredients(recipes);
  expect(ingredients).toEqual([
    { ingredient: "Jalotofu", quantity: 2, unit: "pkt" },
    { ingredient: "porkkana", quantity: 3, unit: "kpl" },
  ]);
});
