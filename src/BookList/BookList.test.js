import BookList from "./BookList";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading");
  });

  it("error", () => {
    const props = {
      error: true,
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error");
  });

  it("render books", () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };

    const { container } = render(
      <MemoryRouter>
        <BookList {...props} />
      </MemoryRouter>
    );
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
