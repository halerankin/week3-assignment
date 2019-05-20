import React from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart';
import HouseListings from './HouseListings';
import _listingData from './airbnbs.json';

class App extends React.Component {
  state = {
    houses: _listingData,
    selectedHouses: [],
    totalCost: 0
  }

  addHouse = (idx) => {
    const selectedHouse = this.state.houses[idx];
    const selectedCost = this.state.houses[idx].payment.cost;
    
    if (this.state.selectedHouses.includes(selectedHouse)){
      return;
    }

    this.setState(prevState => {
      return {
        totalCost: (this.state.totalCost + selectedCost),
        selectedHouses: [...prevState.selectedHouses, selectedHouse]
      };
    });
  }
  
  removeHouse = (idx) => {
    const selectedCost = this.state.houses[idx].payment.cost;

    this.setState(prevState => {
      const selectedHouses = [...prevState.selectedHouses];
      selectedHouses.splice(idx, 1);

      return {
        totalCost: (this.state.totalCost - selectedCost),
        selectedHouses
      };
    });
  }
 
  render() {
    return (
      <div className="App">
        <ShoppingCart 
          houses={this.state.selectedHouses}
          onRemoveHouse={this.removeHouse} 
          totalCost={this.state.totalCost}
        />
        <HouseListings 
          houses={this.state.houses}
          onAddHouse={this.addHouse}
        />
      </div>
    );
  }
}

export default App;
