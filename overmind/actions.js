export const toggleRecipe = (
  { state, effects, actions },
  { id, isSelected }
) => {
  if (isSelected) {
    state.selectedRecipeSlugs.push(id);
  } else {
    state.selectedRecipeSlugs = state.selectedRecipeSlugs.filter(
      (r) => r !== id
    );
  }
};
