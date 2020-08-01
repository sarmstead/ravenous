import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../../../private/util/Yelp';

// The business object contains multiple key/value pairs that form the individual business cards on the home page of the Ravenous App.


// The purpose of the businesses array is to simulate a list of businesses (multiple instances of the business object).


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses } );
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
};

export default App;
