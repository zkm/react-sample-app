const React = require("react");
const TodoListItem = require("./TodoListItem.react");

function TodoList({ items, onRemoveItem }) {
  const renderTodoItem = (item, index) => {
    return (
      <TodoListItem 
        key={index} 
        item={item} 
        onRemoveItem={onRemoveItem}
      />
    );
  };

  return (
    <div className="todo-list" data-testid="todo-list">
      {items.map(renderTodoItem)}
    </div>
  );
}

module.exports = TodoList;
