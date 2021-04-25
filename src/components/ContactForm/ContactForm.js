import React, { Component } from 'react';
import './ContactForm.css';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form
          className="ContactForm__form"
          action="URL"
          onSubmit={this.submitHandler}
        >
          <label className="ContactForm__label" htmlFor="nameId">
            Name:
          </label>
          <input
            className="ContactForm__input"
            id="nameId"
            name="name"
            type="text"
            autoComplete="off"
            required
            value={name}
            onChange={this.changeHandler}
          ></input>
          <label className="ContactForm__label" htmlFor="telId">
            Number:
          </label>
          <input
            className="ContactForm__input"
            id="telId"
            name="number"
            type="tel"
            autoComplete="off"
            required
            value={number}
            onChange={this.changeHandler}
          ></input>
          <button className="ContactForm__button" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(contactActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
