const React = require("react");

function ItemForm({ addItem }) {
  const [text, setText] = React.useState("");
  const [isPriority, setIsPriority] = React.useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setIsPriority(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }
    addItem(text, isPriority);
    setText("");
    setIsPriority(false);
  };

  return (
    <div className="item-form">
      <form onSubmit={handleFormSubmit} data-testid="todo-form" aria-label="Add new todo item">
        <div className="input-group">
          <label htmlFor="text">Todo Text</label>
          <input
            type="text"
            id="text"
            className="todo-input"
            placeholder="Enter a new todo item"
            value={text}
            onChange={handleTextChange}
            data-testid="text-input"
            aria-label="Todo item text"
            aria-required="true"
          />
        </div>

        <div className="input-group">
          <input
            type="checkbox"
            id="priority"
            className="todo-priority"
            checked={isPriority}
            onChange={handlePriorityChange}
            data-testid="priority-checkbox"
            aria-label="Mark as high priority"
          />
          <label htmlFor="priority">High Priority</label>
        </div>

        <input type="submit" className="todo-submit" value="Add Item" aria-label="Add new todo item to list" />
      </form>
    </div>
  );
}

module.exports = ItemForm;
