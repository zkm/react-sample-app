const React = require("react");

const ApplicationHeader = require("./ApplicationHeader.react");
const TodoList = require("./TodoList.react");
const ItemForm = require("./ItemForm.react");

function ApplicationContainer() {
  const [items, setItems] = React.useState([]);

  const addItem = (itemText, isPriority) => {
    const priorityClass = isPriority ? "high-priority" : "normal-priority";
    const newItem = { text: itemText, styleClass: priorityClass };
    setItems(prevItems => prevItems.concat(newItem));
  };

  const removeItem = (item) => {
    setItems(prevItems => prevItems.filter(i => i !== item));
  };

  return (
    <div className="react-sample-container" data-testid="app-container">
      <ApplicationHeader />
      <TodoList items={items} onRemoveItem={removeItem} />
      <ItemForm addItem={addItem} />
    </div>
  );
}

module.exports = ApplicationContainer;
