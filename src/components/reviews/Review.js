import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;
    const handleClick = () => {
      this.props.deleteReview(review.id);
    }
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={()=>handleClick()}> X </button>
      </div>
    );
  }

};

export default Review;
