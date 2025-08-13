var React = require("react");
var ReactDOM = require("react-dom/client");

var ApplicationContainer = require("./components/ApplicationContainer.react");

require("../public/css/base.less");

const root = ReactDOM.createRoot(document.getElementById("application"));
root.render(<ApplicationContainer />);
