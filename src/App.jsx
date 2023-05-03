import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
function App() {
  const dispatch = useDispatch();
  const { value: count } = useSelector((state) => state.counter);
  const { value: isLogged } = useSelector((state) => state.isLogged);
  return (
    <>
      counter: {count}
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      {isLogged && <h3>See after login</h3>}
    </>
  );
}

export default App;
