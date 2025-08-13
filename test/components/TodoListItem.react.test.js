import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoListItem from "../../src/components/TodoListItem.react";

describe("<TodoListItem />", () => {
  it("displays the text of an item", () => {
    const item = { text: "sample-text" };
    render(<TodoListItem item={item} />);
    expect(screen.getByTestId("item-text")).toHaveTextContent("sample-text");
  });

  it("applies the styling class of an item", () => {
    const item = { text: "sample-text", styleClass: "sample-style" };
    render(<TodoListItem item={item} />);
    const todoItem = screen.getByTestId("todo-item");
    expect(todoItem).toHaveClass("todo-item", "sample-style");
  });

  it("marks items as done", () => {
    const fakeItem = { text: "fake-text", styleClass: "fake-style" };
    const onRemoveItem = jest.fn();
    
    render(<TodoListItem item={fakeItem} onRemoveItem={onRemoveItem} />);
    
    const doneForm = screen.getByTestId("done-form");
    fireEvent.submit(doneForm);

    expect(onRemoveItem).toHaveBeenCalledWith(fakeItem);
  });
});
