import { Contact } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

//-----------REDUX---------------
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </List>
  );
}
