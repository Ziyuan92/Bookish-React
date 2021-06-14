import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BookListContainer from "./BookListContainer";
import { renderWithProvider } from "../utils/index";

describe("BookList", () => {
  it("renders", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("http://localhost:8080/books?q=").reply(200, [
      { name: "Refacotring", id: 1 },
      { name: "Acceptance", id: 2 },
    ]);

    const { findByText } = renderWithProvider(<BookListContainer />);
    const book1 = await findByText("Refacotring");
    const book2 = await findByText("Acceptance");

    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  });

  it("something went wrong", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("http://localhost:8080/books?q=").networkError();

    const { findByText } = renderWithProvider(<BookListContainer />);
    const error = await findByText("Error");
    expect(error).toBeInTheDocument();
  });
});
