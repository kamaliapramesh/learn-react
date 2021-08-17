import React from 'react';
import './Common.css';

class Color extends React.Component {
    constructor( props ){
        super( props )
        this.redChange = this.redChange.bind(this);
        this.greenChange = this.greenChange.bind(this);
        this.blueChange = this.blueChange.bind(this);
        this.state = {red: 0,green: 0,blue: 0};
    }

    redChange(e) {
        this.setState({ red: e.target.value });
    }
    greenChange(e) {
        this.setState({ green: e.target.value });
    }
    blueChange(e) {
        this.setState({ blue: e.target.value });
    }

    render() {
        return (
            <div>
                <div style={{padding:'10px', backgroundColor: 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')'}}></div>
                R: { this.state.red }  <input type="range" value={this.state.red} min="0" max="255" onChange={this.redChange} />
                <br></br>
                G : { this.state.green }  <input type="range" value={this.state.green} min="0" max="255" onChange={this.greenChange} />
                <br></br>
                B : { this.state.blue } <input type="range" value={this.state.blue} min="0" max="255" onChange={this.blueChange} />
            </div>
        )
    }
}
export default Color