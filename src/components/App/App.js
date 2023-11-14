import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContact } from '../Filter/Filter';
import { Container } from './App.styled.js';

const keyLS = 'contacts-items';

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
    const savedContacts = window.localStorage.getItem(keyLS);

    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');

    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(keyLS, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contactVerification = this.state.contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactVerification >= 0) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      };
    });
    return true;
  };

  deleteContact = idx => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== idx),
      };
    });
  };

  searchFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const newArrayContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return newArrayContacts;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact}></ContactForm>

          <h2>Contacts</h2>
          <FilterContact filter={filter} onSearch={this.searchFilter} />
          {contacts.length > 0 && (
            <ContactList
              contacts={this.getVisibleContacts()}
              onDelete={this.deleteContact}
            ></ContactList>
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
