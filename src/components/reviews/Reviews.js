import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId } = this.props;
    const filteredList = reviews.filter(review => review.restaurantId === restaurantId);
    const reviewList = filteredList.map(review => {
      return (
        <Review
          review={review}
          key={review.id}
        />
      );
    });
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;