import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import StyledList from './ContactList.styled';
export function ContactList({ contacts, handleDelete }) {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
          btnId={id}
        />
      ))}
    </StyledList>
  );
}

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
