import React from "react";
import { useParams } from "react-router";
import { useRemoteService } from "../hooks";
import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "../redux/actions/actions";

export default function BookDetailContainer({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchABook(id));
  }, []);

  const book = useSelector((state) => state.book);

  //const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});

  return <BookDetail book={book} />;
}
