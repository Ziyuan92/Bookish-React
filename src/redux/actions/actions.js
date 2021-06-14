import axios from "axios";
import * as types from "../types";

export const fetchBooks = () => (dispatch, getState) => {
  dispatch({ type: types.FETCH_BOOKS_PENDING });
  const state = getState();
  return axios
    .get(`http://localhost:8080/books?q=${state.term || ""}`)
    .then((res) => {
      dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_BOOKS_FAILED, err: err.message });
    });
};

export const fetchABook = (id) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_BOOK_PENDING });
    return axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        dispatch({ type: types.FETCH_BOOK_SUCCESS, book: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_BOOK_FAILED, err: err.message });
      });
  };
};

export const setSearchTerm = (term) => {
  return { type: types.SET_SEARCH_TERM, term };
};
