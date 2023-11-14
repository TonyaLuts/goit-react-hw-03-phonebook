import { Card, BtnDel, ContactInfo } from './ContactCard.styled';

export const ContactCard = ({ card: { name, number, id }, onDelete }) => {
  return (
    <li>
      <Card>
        <ContactInfo>{name}:</ContactInfo>
        <ContactInfo>{number}</ContactInfo>
        <BtnDel onClick={() => onDelete(id)}>Delete</BtnDel>
      </Card>
    </li>
  );
};
