
import './App.css';
import Textwrite from './components/Textwrite';
import Hideshow from './components/Hideshow';
import Multiply from './components/Multiply';
import Converter from './components/Converter';
import Dropdown from './components/Dropdown';
import Color from './components/Color';
import Clone from './components/Clone';
import Increment from './components/Increment';
import Cloneincrement from './components/Cloneincrement';


function App() {
  return (
    <div className="App">
      <div className="head">1. This is basic example in Javascript</div>
       <Textwrite />
       <hr></hr>
      <div className="head">2. Show / Hide HTML tag on button click.</div>
       <Hideshow />
       <hr></hr>
      <div className="head">3. Show result of Price into Quantity.</div>
       <Multiply />
       <hr></hr>
      <div className="head">4. Celsius to Fahrenheit converter.</div>
       <Converter />
       <hr></hr>
      <div className="head">5. Add Dropdown menu and make Time Converter.</div>
       <Dropdown />
       <hr></hr>
      <div className="head">6. RGB Color Chooser.</div>
       <Color />
       <hr></hr>
      <div className="head">7. Clone HTML & Append To Body on Click.</div>
       <Clone />
       <hr></hr>
      <div className="head">8. Increment Decrement Value.</div>
       <Increment />
       <hr></hr>
      <div className="head">9. Clone Increment Decrement Div on Click.</div>
       <Cloneincrement />
    </div>
  );
}

export default App;
