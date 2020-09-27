import React, { useState } from "react";
import "./posibility.css";

import { rootReducer } from "../../rootReducer/rootReducer.js";
import {createStore } from 'redux';
import {Increment, Decrement} from '../../action/action.js';
const PostAnotherPosibilites = (props) => {
  const [counter] = useState(createStore(rootReducer, 58));
  const [button, setButton] = useState(false);
  const pressButton = () => {
    setButton(!button);
    (button)? counter.dispatch(Decrement()) : counter.dispatch(Increment());
  }
  return (
    <button className="button-counter" onClick={pressButton}>
      <div className="another-possibility">
        <span className="icon-and-his-count">
          <img className="icon" src={props.img} alt={props.type} />
          <p className="amount">{counter.getState()}</p>
        </span>
      </div>
    </button>
  );
};
export default PostAnotherPosibilites;