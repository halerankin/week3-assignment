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
        const listing = this.state.houses.map( (item, idx) =>
         <House house={item} key={idx}/>
        );

        return (
            <div>
                <section>
                    <h1>House listings:</h1>
                    <hr />
                    {listing}
                </section>
            </div>

        );
    }
}