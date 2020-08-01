import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

/* 
The businesses array (in App.js) contains a list of businesses. 
The businesses array is accessed through the businesses prop in the Business List component. 
In BusinessList's render method, we iterate (map) through the businesses array (passed in a prop by the parent App component) to render a list of businesses. 
*/

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                { 
                    this.props.businesses.map(business => {
                            return <Business business={business} key={business.id} />;
                        }) 
                }
            </div>
        );
    }
};

export default BusinessList;