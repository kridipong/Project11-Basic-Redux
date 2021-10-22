import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import {counterActions} from '../store/counter';

const Counter = () => {
  // const [type, setType] = useState('INCREMENT');
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state)=> state.counter.show);
  const dispatch = useDispatch();


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler =() =>{
    dispatch(counterActions.increase(10)); // when you put value the object/value would be pass as 
    //{type:SOME_UNIQUE_IDENTIFIER, payload:10} so we have to extract the payload in reducer

  };

  // setTimeout(()=> {
  //   dispatch({type:type});
  //   console.log(type);
  //   },1000);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
       {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick = {toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
