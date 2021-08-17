import React from 'react';
import './Common.css';

class Dropdown extends React.Component {
    constructor( props ){
        super( props )
        this.textBox1Change = this.textBox1Change.bind(this);
        this.textBox2Change = this.textBox2Change.bind(this);
        this.typeChange = this.typeChange.bind(this);
        
        this.state = {textVal1: 0,textVal2: 0 ,type: "time",label1: "Second",label2: "Minute"};
    }
    textBox1Change(e) {
        this.setState({ textVal1: e.target.value });
        if(this.state.type==="time"){
            let minute = e.target.value / 60;
            this.setState({ textVal2: minute });
        }else{
            let fahr = (e.target.value * 9.0/5.0) + 32.0;
            this.setState({ textVal2: fahr });
        }
        
    }

    typeChange(e){
        this.setState({ type: e.target.value });
        if(e.target.value==="time"){
            this.setState({ label1: "Second" });
            this.setState({ label2: "Minute" });
            let minute = 1 / 60;
            this.setState({ textVal1: 1 });
            this.setState({ textVal2: minute });
        }else{
            this.setState({ label1: "Celsius" });
            this.setState({ label2: "Fahrenheit" });
            this.setState({ textVal1: 0 });
            let fahr = (0 * 9.0/5.0) + 32.0;
            this.setState({ textVal2: fahr });
        }
    }

    textBox2Change(e) {
        this.setState({ textVal2: e.target.value });
        if(this.state.type==="time"){
            let second = e.target.value * 60;
            this.setState({ textVal1: second });
        }else{
            let cels = (e.target.value - 32.0) * 5.0/9.0;
            this.setState({ textVal1: cels });
        }
    }
    render() {
        return (
            <div>
                <div>
                <select onChange={this.typeChange}>
                    <option value="time">Time</option>
                    <option value="temperature">Temperature</option>
                </select>
                </div>
                <div className="d-flex">
                {this.state.label1}:<input type="number" value={this.state.textVal1} className="text-box" onChange={this.textBox1Change} />
                {this.state.label2}:<input type="number" value={this.state.textVal2} className="text-box" onChange={this.textBox2Change} />
                </div>
            </div>
        )
    }
}
export default Dropdown