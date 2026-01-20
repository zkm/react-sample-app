import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../../src/components/TodoList.react";

describe("<TodoList />", () => {
  it("renders a todo item", () => {
    const fakeItems = [{ id: 1, text: "fake-text" }];
    render(<TodoList items={fakeItems} />);

    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    expect(screen.getByTestId("item-text")).toHaveTextContent("fake-text");
  });
});
