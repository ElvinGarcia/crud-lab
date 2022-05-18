import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant} = this.props;

    const handleOnClick =()=> {
      deleteRestaurant(this.props.restaurant.id);
    }
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
