import React from 'react';
import './Common.css';

class Increment extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
    }

    decrement = () => {
        let counterdecrement = this.state.counter -1;
        this.setState({ counter : counterdecrement })
    }

    increment = () => {
        let counterincrement = this.state.counter +1;
        this.setState({ counter: counterincrement })
    }
  
    render() {
      return (
        <div className="d-flex m-10">
            <button onClick={this.decrement}>-</button>
            <div  className="m-10">{ this.state.counter }</div>
            <button onClick={this.increment}>+</button>
        </div>
      );
    }
}

export default Increment