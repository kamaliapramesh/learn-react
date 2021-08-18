import React from 'react';
import './Common.css';

class Clone extends React.Component {
    state = {
      rows: 0
    };
  
    addRow = () => {
      this.setState(({ rows }) => ({ rows: rows + 1 }));
    };
  
    render() {
      return (
        <div>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            {Array.from({ length: this.state.rows }, (_, index) => (
            <div key={index}>
              <li>Milk</li>
            </div>
          ))}
        </ul>
        <ul>
            <li>Water</li>
            <li>Milk</li>
        </ul>
          <button className="mb" onClick={this.addRow}>Try it</button>
        </div>
      );
    }
  }

  export default Clone