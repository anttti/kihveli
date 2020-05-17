export const recipesToIngredients = (recipes) => {
  const ingredients = recipes.map((recipe) => recipe.ingredients).flat();
  return ingredients
    .reduce((acc, curr) => {
      // Check if a matching ingredient & unit exists already
      const match = acc.find((ingr) => {
        return ingr.ingredient === curr.ingredient && ingr.unit === curr.unit;
      });
      // Found a match, increase the amount
      if (match) {
        // Filter out the old amount
        acc = acc.filter(
          (ingr) =>
            !(ingr.ingredient === curr.ingredient && ingr.unit === curr.unit)
        );
        // Increase & insert the new
        acc.push({
          ...match,
          quantity: match.quantity + parseFloat(curr.quantity),
        });
      } else {
        // No match, add a new ingredient to the list
        acc.push({ ...curr, quantity: parseFloat(curr.quantity) });
      }
      return acc;
    }, [])
    .sort((a, b) => (a.ingredient > b.ingredient ? 1 : -1));
};
