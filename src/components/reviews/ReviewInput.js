import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId,
  }

  handleOnChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state)
    this.setState({ text:'' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' value={this.state.text} name ='text' id='text' onChange={this.handleOnChange} />
          <input type='submit' value="submit Comment" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
