import React, { Component } from 'react';
import StyledContainer from './General.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: savedContacts });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = contact => {
    const isExist = this.state.contacts.some(({ name }) => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };
  deleteItem = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== event.target.id
        ),
      };
    });
  };
  handleFilterChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <StyledContainer>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter
            onChange={this.handleFilterChange}
            value={this.state.filter}
          />
          <ContactList
            contacts={filteredContacts}
            handleDelete={this.deleteItem}
          />
        </StyledContainer>
      </>
    );
  }
}
