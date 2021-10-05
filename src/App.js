import React from "react";
import { useSelector, useDispatch } from "react-redux";
import changeNumber from "./reducers/upDown";
import { incNumber, decNumber } from "./actions/index";
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  // const my5State = useSelector((state) => state.more5Number);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>INCREMENT?DECREMENT COUNTER</h1>

        <div class="qyantity">
          <a
            className="quanity-minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input name="quantity" type="text" value={myState} />
          <a
            className="quanity-minus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
