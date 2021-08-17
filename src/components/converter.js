import React from 'react';
import './Common.css';

class Converter extends React.Component {
    constructor( props ){
        super( props )
        this.celsiusChange = this.celsiusChange.bind(this);
        this.fahrenheitChange = this.fahrenheitChange.bind(this);
        this.state = {celsius: 0,fahrenheit: 32};
    }
    celsiusChange(e) {
        this.setState({ celsius: e.target.value });
        let fahr = (e.target.value * 9.0/5.0) + 32.0;
        this.setState({ fahrenheit: fahr });
    }
    fahrenheitChange(e) {
        this.setState({ fahrenheit: e.target.value });
        let cels = (e.target.value - 32.0) * 5.0/9.0;
        this.setState({ celsius: cels });
        
    }
    render() {
        return (
            <div>
                <div className="d-flex">
                Celsius:<input type="number" value={this.state.celsius} className="text-box" onChange={this.celsiusChange} />
                Fahrenheit:<input type="number" value={this.state.fahrenheit} className="text-box" onChange={this.fahrenheitChange} />
                </div>
            </div>
        )
    }
}
export default Converter