import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  let [textvalue, setTextValue] = useState();
  var a = 1;

  function clicked() {
    console.log("test");
    a++;
    console.log("Current value: " + a)
  }
  return (

    <div className="App">
      <header className="App-header">
       { a === 1  && ( 
         <label>
         testing!! <input name="testinput" />

        </label>
        )}
        <button className="cheese" type="submit" onClick={clicked} > click me daddy </button>
      </header>
    </div>
  );
}

export default App;
