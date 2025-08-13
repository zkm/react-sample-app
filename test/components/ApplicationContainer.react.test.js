import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ApplicationContainer from "../../src/components/ApplicationContainer.react";

describe("<ApplicationContainer />", () => {
  it("renders the application container", () => {
    render(<ApplicationContainer />);
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });

  it("starts with an empty todo list", () => {
    render(<ApplicationContainer />);
    const todoList = screen.getByTestId("todo-list");
    expect(todoList).toBeInTheDocument();
    expect(todoList.children).toHaveLength(0);
  });

  it("adds new items", () => {
    render(<ApplicationContainer />);
    
    const textInput = screen.getByTestId("text-input");
    const priorityCheckbox = screen.getByTestId("priority-checkbox");
    const form = screen.getByTestId("todo-form");
    
    fireEvent.change(textInput, { target: { value: "fake-text" } });
    fireEvent.click(priorityCheckbox);
    fireEvent.submit(form);
    
    expect(screen.getByTestId("item-text")).toHaveTextContent("fake-text");
    expect(screen.getByTestId("todo-item")).toHaveClass("high-priority");
  });

  it("removes items", () => {
    render(<ApplicationContainer />);
    
    // Add an item first
    const textInput = screen.getByTestId("text-input");
    const form = screen.getByTestId("todo-form");
    
    fireEvent.change(textInput, { target: { value: "fake-text" } });
    fireEvent.submit(form);
    
    // Verify it was added
    expect(screen.getByTestId("item-text")).toHaveTextContent("fake-text");
    
    // Remove the item
    const doneForm = screen.getByTestId("done-form");
    fireEvent.submit(doneForm);
    
    // Verify it was removed
    const todoList = screen.getByTestId("todo-list");
    expect(todoList.children).toHaveLength(0);
  });
});
