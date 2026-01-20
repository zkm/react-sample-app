const React = require("react");
const TodoListItem = require("./TodoListItem.react");

function TodoList({ items, onRemoveItem }) {
  return (
    <div className="todo-list" data-testid="todo-list" role="list" aria-label="Todo items">
      {items.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", padding: "2rem 0" }}>No todos yet. Add one to get started!</p>
      ) : (
        items.map(item => (
          <TodoListItem 
            key={item.id} 
            item={item} 
            onRemoveItem={onRemoveItem}
          />
        ))
      )}
    </div>
  );
}

module.exports = TodoList;
