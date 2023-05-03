import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <>
      counter: {counter}
      <button onClick={() => dispatch(increment(5))}>inc</button>
      <button onClick={() => dispatch(decrement(5))}>dec</button>
      {isLogged && <h3>See after login</h3>}
    </>
  );
}

export default App;
