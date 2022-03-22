import React from "react";

class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        let counter = 0;
        if (props.initial < 0 && props.initial > props.stock) {
            counter = props.initial;
        }
        this.state = {
            counter
        }
    }

    addCounter = () => {
        let newCounter;
        if(this.state.counter + 1 <= this.props.stock) {
            newCounter = this.state.counter + 1;
        } else {
            newCounter = this.state.counter
        }
        this.setState({
            counter: newCounter
        });
    }

    decreaseCounter = () => {
        let newCounter;
        if(this.state.counter - 1 >= 0) {
            newCounter = this.state.counter - 1;
        } else {
            newCounter = this.state.counter;
        }
        this.setState({
            counter: newCounter
        });
    }

    addToCart = () => {
        if(this.state.counter !== 0) {
            this.props.onAdd(this.state.counter);
        }
        return;
    }

    render() {
        return (
            <div>
                <div className="top mb-2">
                    <button className="btn btn-primary" onClick={this.addCounter}>+</button>
                    <span className="mx-2">{this.state.counter}</span>
                    <button className="btn btn-primary" onClick={this.decreaseCounter}>-</button>
                </div>
                <div className="bottom">
                    <button className="btn btn-outline-primary" onClick={this.addToCart}>Añadir al carrito</button>
                </div>
            </div>
        );
    }
}

export default ItemCount;