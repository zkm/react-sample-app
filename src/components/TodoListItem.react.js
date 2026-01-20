const React = require("react");

function TodoListItem({ item, onRemoveItem }) {
  const handleMarkDone = (event) => {
    event.preventDefault();
    onRemoveItem(item.id);
  };

  return (
    <div className={`todo-item ${item.styleClass || ""}`} data-testid="todo-item" role="listitem">
      <span data-testid="item-text">{item.text}</span>
      <form onSubmit={handleMarkDone} data-testid="done-form">
        <input 
          type="submit" 
          value="Done" 
          data-testid="done-button"
          aria-label={`Mark ${item.text} as done`}
        />
      </form>
    </div>
  );
}

module.exports = TodoListItem;
