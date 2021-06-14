import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { renderWithProvider } from "../utils/index";
import BookDetailContainer from "./BookDetailConainer";

describe("BookDetailContainer", () => {
  it("render", async () => {
    const props = {
      match: {
        params: {
          id: 2,
        },
      },
    };

    const mock = new MockAdapter(axios);
    mock.onGet("http://localhost:8080/books/2").reply(200, {
      description: "AbaAba",
      name: "Acceptance tests driven development with React",
      id: 2,
    });

    const { findByText } = renderWithProvider(
      <BookDetailContainer {...props} />
    );

    const book = await findByText(
      "Acceptance tests driven development with React"
    );
    expect(book).toBeInTheDocument();
  });
});
