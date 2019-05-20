import React from 'react';

export default class ShoppingCart extends React.Component {

    render() {
        const totalCost = this.props.totalCost;
        const houseList = this.props.houses.map(
        (house, idx) => {
            return (
                <li key={idx}>
                    <span>{house.title}</span>
                    <button onClick={() => this.props.onRemoveHouse(idx)}>Remove</button>
                </li>
            );
        })

        return (
            <div className="wrapper shopping-cart">
                <p>Your cart: </p>
                <ul>
                   {houseList}
                </ul>
                <p>Total cost: {totalCost}</p>
                <hr />
            </div>
        );
    }
}