
import './App.css';
import Textwrite from './components/textwrite';
import Hideshow from './components/hideshow';
import Multiply from './components/multiply';




function App() {
  return (
    <div className="App">
      <div className="head">1. This is basic example in Javascript</div>
       <Textwrite />
      <div className="head">2. Show / Hide HTML tag on button click.</div>
       <Hideshow />
      <div className="head">3. Show result of Price into Quantity.</div>
       <Multiply />
    </div>
  );
}

export default App;
