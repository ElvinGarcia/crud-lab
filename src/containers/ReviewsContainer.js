import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addReview: (review) => dispatch({ type: "ADD_REVIEW", review: {text:review.text, restaurantId: review.restaurantId}},),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id },)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    restaurantId:  ownProps.restaurant.id,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
