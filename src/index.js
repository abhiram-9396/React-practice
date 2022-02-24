//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
const React = require("react");
const ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1> my favourite places </h1>
    <ul>
      <li>Kailasagiri</li>
      <li>Beach</li>
      <li>Tenneti park</li>
    </ul>
  </div>,
  document.getElementById("root")
);
