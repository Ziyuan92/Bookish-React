import { createSelector } from "reselect";

const bookListSelector = createSelector(
  [(state) => state.books, (state) => state.loading, (state) => state.error],
  (books, loading, error) => ({ books, loading, error })
);

export const termSelector = createSelector([(state) => state.term], (term) => ({
  term,
}));

export default bookListSelector;
