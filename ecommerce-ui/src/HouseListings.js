import React from 'react';
import _listingData from './airbnbs.json';
import House from './House';


export default class HouseListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: _listingData
        };
    }

    render() {
        const bookingList = this.props.houses.map(
        (house, idx) => {
            return (
                <article key={idx} className="house clearfix">
                    <House house={house} key={idx}/>  
                    <button onClick={() => this.props.onAddHouse(idx)}>Book now!</button>
                </article>
            );
        })
        return (
            <div className="wrapper listings">
                <section>
                    <h1>House listings:</h1>
                    {bookingList}
                </section>
            </div>
        );
    }
}