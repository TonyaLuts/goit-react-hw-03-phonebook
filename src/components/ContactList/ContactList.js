import { ContactCard } from '../ContactCard/ContactCard';
import { ListCards } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListCards>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          card={contact}
          onDelete={onDelete}
        ></ContactCard>
      ))}
    </ListCards>
  );
};
