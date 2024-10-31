export const selectCharacters = state => state.characters.items;

export const selectPage = state => state.characters.page;

export const selectPerPage = state => state.characters.perPage;

export const selectTotalItems = state => state.characters.totalItems;

export const selectTotalPages = state => state.characters.totalPages;

export const selectHasNextPage = state => state.characters.hasNextPage;

export const selectHasPreviousPage = state => state.characters.hasPreviousPage;

export const selectLoading = state => state.characters.loading;

export const selectError = state => state.characters.error;
