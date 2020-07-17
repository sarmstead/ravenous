import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

/* 
The businesses array (in App.js) contains a list of businesses. 
The businesses array is accessed through the businesses prop in the Business List component. 
BusinessList will iterate (map) through this list to render a list of businesses. 
*/

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                { 
                    this.props.businesses.map(business => {
                            return <Business business={business} />;
                        }) 
                }
            </div>
        );
    }
};

export default BusinessList;