import React from "react";

const getDescriptionFor = (book) => {
  return book.description ? book.description : book.name;
};

export default function BookDetail({ book }) {
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{getDescriptionFor(book)}</p>
    </div>
  );
}
