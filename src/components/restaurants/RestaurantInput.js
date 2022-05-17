import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
        text: ''
  }

  handleOnchange = (event) => {
    this.setState({text:event.target.value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text:''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleOnchange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
