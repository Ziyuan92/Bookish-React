import React from "react";
import { useEffect } from "react";
import BookList from "./BookList";
import { useRemoteService } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../SearchBox/SearchBox";
import bookListSelector from "../redux/selectors/selector";
import { termSelector } from "../redux/selectors/selector";
import * as actions from "../redux/actions/actions";

const BookListContainer = () => {
  //const url = "http://localhost:8080/books";
  // const { data, loading, error, setUrl } = useRemoteService(url, []);
  const dispatch = useDispatch();
  const { termState } = useSelector(termSelector);

  const onSearch = (event) => {
    dispatch(actions.setSearchTerm(event.target.value));
    dispatch(actions.fetchBooks());
  };

  useEffect(() => {
    dispatch(actions.fetchBooks());
  }, [termState, dispatch]);

  const { books, loading, error } = useSelector(bookListSelector);

  return (
    <>
      <SearchBox term={termState} onSearch={onSearch} />
      <BookList books={books} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
