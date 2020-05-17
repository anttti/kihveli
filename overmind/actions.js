export const toggleRecipe = (
  { state, effects, actions },
  { id, isSelected }
) => {
  if (isSelected) {
    state.selectedRecipes.push(id);
  } else {
    state.selectedRecipes = state.selectedRecipes.filter((r) => r !== id);
  }
};
