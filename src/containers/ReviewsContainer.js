import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addReview: (obj) => dispatch({type:"ADD_REVIEW", text:obj.text, restaurantId: obj.restaurantId},),
    deleteReviews: id => dispatch({ type: "DELETE_REVIEW", id },)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    restaurantId:  ownProps.restaurant.id,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

