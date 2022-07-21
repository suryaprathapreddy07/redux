import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const isCounterShown = useSelector((state) => state.counter.isCounterShown);
  // console.log(isCounterShown);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementButtonHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementButtonHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseButtonHandler = () => {
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && <div className={classes.value}>{count}</div>}
      <div className={classes.counterActions}>
        <button onClick={incrementButtonHandler}>+</button>
        <button onClick={increaseButtonHandler}>Increase by 10</button>
        <button onClick={decrementButtonHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
