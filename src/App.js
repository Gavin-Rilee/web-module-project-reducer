import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';

import { applyNumber, changeOperator, clearDisplay, resetMemory, setMemory, applyMemory} from "./actions/index";

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const applyNumbers = (num) => {
  dispatch(applyNumber(num));
  }
  const changeOperators = (operator) => {
  dispatch(changeOperator(operator));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(setMemory())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(applyMemory())}/>
              <CalcButton value={"MC"}onClick={() => dispatch(resetMemory())}/>
            </div>``

            <div className="row">
              <CalcButton value={1} onClick={() => applyNumbers(1)}/>
              <CalcButton value={2} onClick={() => applyNumbers(2)}/>
              <CalcButton value={3} onClick={() => applyNumbers(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyNumbers(4)}/>
              <CalcButton value={5} onClick={() => applyNumbers(5)}/>
              <CalcButton value={6} onClick={() => applyNumbers(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyNumbers(7)}/>
              <CalcButton value={8} onClick={() => applyNumbers(8)}/>
              <CalcButton value={9} onClick={() => applyNumbers(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperators("+")}/>
              <CalcButton value={"*"} onClick={() => changeOperators("*")}/>
              <CalcButton value={"-"} onClick={() => changeOperators("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
