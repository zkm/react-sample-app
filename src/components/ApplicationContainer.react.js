const React = require("react");

const ApplicationHeader = require("./ApplicationHeader.react");
const TodoList = require("./TodoList.react");
const ItemForm = require("./ItemForm.react");

function ApplicationContainer() {
  const [items, setItems] = React.useState([]);

  const addItem = (itemText, isPriority) => {
    const priorityClass = isPriority ? "high-priority" : "normal-priority";
    const newItem = { id: Date.now(), text: itemText, styleClass: priorityClass };
    setItems(prevItems => prevItems.concat(newItem));
  };

  const removeItem = (itemId) => {
    setItems(prevItems => prevItems.filter(i => i.id !== itemId));
  };

  return (
    <div className="react-sample-container" role="main" aria-label="Todo application">
      <ApplicationHeader />
      <TodoList items={items} onRemoveItem={removeItem} />
      <ItemForm addItem={addItem} />
    </div>
  );
}

module.exports = ApplicationContainer;
