import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      counter: {counter}
      <button onClick={() => dispatch(increment(5))}>inc</button>
      <button onClick={() => dispatch(decrement(5))}>dec</button>
    </>
  );
}

export default App;
