export const selectCharacters = state => state.characters.items;

export const selectCharacter = state => state.characters.item;

export const selectTotalPages = state => state.characters.totalPages;

export const selectLoading = state => state.characters.loading;

export const selectError = state => state.characters.error;
