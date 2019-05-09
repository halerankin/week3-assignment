import React from 'react';
import PropTypes from 'prop-types';

export default class House extends React.Component {
    static propTypes = {
        house: PropTypes.object
    }

    render() {

        return (
            <article className="house clearfix">
                <img src={this.props.house.image} alt="{this.props.house.title}" />
                <h2>{this.props.house.title} <sup>{this.props.house.rating.reviews} reviews</sup></h2>
                                
                <p>This is an {this.props.house.houseType.toLowerCase()} located in {this.props.house.location.city}, {this.props.house.location.country}, costing ${this.props.house.payment.cost}/night.</p>
                <p>Your host is {this.props.house.host.name}, with a host rating of {this.props.house.rating.stars} stars</p>

                
            </article>
        );
    }
}