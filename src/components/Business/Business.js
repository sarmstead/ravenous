import React from 'react';
import './Business.css';


// The purpose of the <Business /> component is to represent how an individual business (a restaurant) in Ravenous will be formatted and styled
class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='' />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.name.replace('+', ' ')}+${this.props.business.address.replace('+', ' ')}+${this.props.business.city.replace('+', ' ')}+${this.props.business.state}+${this.props.business.zipCode}`} target="_blank" rel="noopener noreferrer"><p>{this.props.business.address}</p></a>
                        <p>{this.props.business.city}</p>
                        <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category.toUpperCase()}</h3>
                        <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
                        <p>{`${this.props.business.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Business;