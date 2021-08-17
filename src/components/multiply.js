import React from 'react';
import './Common.css';

class Multiply extends React.Component {
    constructor( props ){
        super( props )
        this.priceChange = this.priceChange.bind(this);
        this.qtyChange = this.qtyChange.bind(this);
        this.state = {price: 0,qty: 0};
    }
    priceChange(e) {
        this.setState({ price: e.target.value });
    }
    qtyChange(e) {
        this.setState({ qty: e.target.value });
    }
    render() {
        const multi = this.state.price  * this.state.qty;
        return (
            <div>
                <div className="d-flex">
                Price:<input type="number" className="text-box" onChange={this.priceChange} />
                Qty:<input type="number" className="text-box" onChange={this.qtyChange} />
                </div>
                <p className="color-orange">{ multi }</p>
            </div>
        )
    }
}
export default Multiply