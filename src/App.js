import React from "react";
import { Typography } from "@material-ui/core";
import BookListContainer from "./BookList/BookListContainer.js";
import { Route, Switch } from "react-router-dom";
import BookDetailContainer from "./BookDetail/BookDetailConainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer} />
        <Route exact path="/books/:id" component={BookDetailContainer} />
      </Switch>
    </div>
  );
};

export default App;
