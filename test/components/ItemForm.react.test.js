import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../../src/components/ItemForm.react";

describe("<ItemForm />", () => {
  it("has empty initial state", () => {
    render(<ItemForm />);
    expect(screen.getByTestId("text-input").value).toBe("");
    expect(screen.getByTestId("priority-checkbox").checked).toBe(false);
  });

  it("updates the text on form changes", () => {
    render(<ItemForm />);
    const textInput = screen.getByTestId("text-input");
    fireEvent.change(textInput, { target: { value: "new-text" } });
    expect(textInput.value).toBe("new-text");
  });

  it("updates the priority status of form changes", () => {
    render(<ItemForm />);
    const priorityCheckbox = screen.getByTestId("priority-checkbox");
    fireEvent.click(priorityCheckbox);
    expect(priorityCheckbox.checked).toBe(true);
  });

  it("invokes the given callback on form submission", () => {
    const fakeAddItem = jest.fn();
    render(<ItemForm addItem={fakeAddItem} />);
    const textInput = screen.getByTestId("text-input");
    fireEvent.change(textInput, { target: { value: "some-fake-text" } });
    const form = screen.getByTestId("todo-form");
    fireEvent.submit(form);
    expect(fakeAddItem).toHaveBeenCalledWith("some-fake-text", false);
  });

  it("resets state upon submission", () => {
    const fakeAddItem = jest.fn();
    render(<ItemForm addItem={fakeAddItem} />);
    const textInput = screen.getByTestId("text-input");
    const priorityCheckbox = screen.getByTestId("priority-checkbox");
    fireEvent.change(textInput, { target: { value: "some-fake-text" } });
    fireEvent.click(priorityCheckbox);
    const form = screen.getByTestId("todo-form");
    fireEvent.submit(form);
    expect(textInput.value).toBe("");
    expect(priorityCheckbox.checked).toBe(false);
  });

  it("does not submit when empty", () => {
    const fakeAddItem = jest.fn();
    render(<ItemForm addItem={fakeAddItem} />);
    const form = screen.getByTestId("todo-form");
    fireEvent.submit(form);
    expect(fakeAddItem).not.toHaveBeenCalled();
  });
});
