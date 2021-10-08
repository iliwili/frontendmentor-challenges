function App(props) {
  return (
    <div
      className={`skeleton${props.img !== undefined ? "-image" : ""} ${
        props.width !== undefined ? "w-" + props.width : ""
      } ${props.right ? "right" : ""}`}
    ></div>
  );
}

export default App;
