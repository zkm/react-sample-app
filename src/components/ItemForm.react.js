
const React = require("react");

function ItemForm({ addItem }) {
  const [text, setText] = React.useState("");
  const [isPriority, setIsPriority] = React.useState(false);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onPriorityChange = (event) => {
    setIsPriority(event.target.checked);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      return;
    }
    if (addItem) {
      addItem(text, isPriority);
    }
    setText("");
    setIsPriority(false);
  };

  return (
    <div className="item-form">
      <form onSubmit={onFormSubmit} data-testid="todo-form">
        <div className="input-group">
          <label htmlFor="text">Todo Text</label>
          <input
            type="text"
            id="text"
            className="todo-input"
            value={text}
            onChange={onTextChange}
            data-testid="text-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="priority">High Priority</label>
          <input
            type="checkbox"
            id="priority"
            className="todo-priority"
            checked={isPriority}
            onChange={onPriorityChange}
            data-testid="priority-checkbox"
          />
        </div>

        <input type="submit" className="todo-submit" value="Add Item" />
      </form>
    </div>
  );
}

module.exports = ItemForm;
