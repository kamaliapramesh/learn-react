import React from 'react';
import './Common.css';

class Textwrite extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '' };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
      return (
        <div className="MarkdownEditor">
            <input type="text" className="text-box" onChange={this.handleChange} />
            <div className="content">{this.state.value}</div>
        </div>
        );
    }
}
export default Textwrite