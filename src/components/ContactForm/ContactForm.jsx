import { Component } from 'react';
import { nanoid } from 'nanoid';
import {StyledBtn} from './contactForm.styled';
import {StyledForm} from './contactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            <span>Name  </span> 
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              required
            />
          </label>
          <label htmlFor={this.numberInputId}>
           <span> Number  </span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
              required
            />
          </label>
          <StyledBtn type="submit">Add contact</StyledBtn>
        </StyledForm>
      </>
    );
  }
}
