import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions';
import './ContactList.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div className="ContactList__container">
        <ul className="ContactList__list">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="ContactList__list_item">
              <button
                className="ContactList__delete_button"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                <span>Delete</span>
              </button>

              <span className="ContactList__name">{name}</span>
              <span className="ContactList__dash"> - </span>
              <span className="ContactList__number">{number}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
  // contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
