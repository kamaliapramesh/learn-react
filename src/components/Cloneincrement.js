import React from 'react';
import './Common.css';
import Increment from './Increment';

class Cloneincrement extends React.Component {
    state = {
        rows: 0
    };
    
    addRow = () => {
        this.setState(({ rows }) => ({ rows: rows + 1 }));
    };
    
    render() {
        return (
            <div className="d-flex">
                <button className="mb" onClick={this.addRow}>New</button>
                {Array.from({ length: this.state.rows }, (_, index) => (
                    <div key={index}>
                        <Increment />
                    </div>
                ))}
            </div>
        )
    }
}

export default Cloneincrement