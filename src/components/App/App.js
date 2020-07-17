import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// The business object contains multiple key/value pairs that form the individual business cards on the home page of the Ravenous App.
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddignton Way',
  city: 'Flavortown',
  state: 'NC',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// The purpose of the businesses array is to simulate a list of businesses (multiple instances of the business object).
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business, 
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
};

export default App;
