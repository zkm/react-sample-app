const React = require("react");

function TodoListItem({ item, onRemoveItem }) {
  const getItemText = () => {
    return item.text;
  };

  const getItemClass = () => {
    return item.styleClass || "";
  };

  const onMarkDone = (event) => {
    event.preventDefault();
    if (onRemoveItem) {
      onRemoveItem(item);
    }
  };

  return (
    <div className={`todo-item ${getItemClass()}`} data-testid="todo-item">
      <span data-testid="item-text">{getItemText()}</span>
      <form onSubmit={onMarkDone} data-testid="done-form">
        <input type="submit" value="Done" data-testid="done-button" />
      </form>
    </div>
  );
}

module.exports = TodoListItem;
