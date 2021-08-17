
import './App.css';
import Textwrite from './components/textwrite';
import Hideshow from './components/hideshow';
import Multiply from './components/multiply';
import Converter from './components/converter';
import Dropdown from './components/dropdown';

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
    </div>
  );
}

export default App;
