const ViewArea = ({ count }) => {
  return <div>{count}</div>;
};

const Button = ({ onClick }) => {
  return <button onClick={onClick}>click me</button>;
};

const App = () => {
  const [state, setState] = React.useState(0);

  return (
    <div>
      <ViewArea count={state} />
      <Button
        onClick={() => {
          setState(state + 1);
        }}
      />
    </div>
  );
};

const domContainer = document.getElementById("body");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
