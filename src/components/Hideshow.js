import React from 'react';
import './Common.css';

class Hideshow extends React.Component {
    constructor( props ){
        super( props )
        this.hideText = this.hideText.bind(this);
        this.showText = this.showText.bind(this);
        this.state = {show: true};
    }

    hideText() {
        this.setState({show: false});
    }
    showText(){
        this.setState({show: true});
    }
    
    render() {
        const isShow = this.state.show;
        let content;
        if (isShow) {
          content = "You can show and hide me with this button";
        } else {
          content = " ";
        }
        return (
          <div>
              <p className="hide-show">{content}</p>
              <button onClick={this.hideText}>Hide the text above</button>
              <button onClick={this.showText}>Show the text above</button>
          </div>
        );
    }

}
export default Hideshow