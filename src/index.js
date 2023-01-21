const domContainer = document.querySelector("#body");
const root = ReactDOM.crateRoot(domContainer);
root.render(React.createElement("p", {}, "a"));
alert("e");
