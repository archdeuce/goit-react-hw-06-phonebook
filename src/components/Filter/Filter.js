import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions';
import './Filter.css';

class Filter extends Component {
  inputHandler = e => {
    this.props.changeFilter(e.target.value);
  };

  render() {
    return (
      <div className="Filter__container">
        <label className="Filter__label" htmlFor="filterId">
          Find contacts by name:
        </label>
        <input
          className="Filter__input"
          id="filterId"
          type="text"
          autoComplete="off"
          onChange={this.inputHandler}
        ></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(contactActions.changeFilter(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
