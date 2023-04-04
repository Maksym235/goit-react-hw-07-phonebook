import { Contact } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

//-----------REDUX---------------
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filtredContacts = getFilteredContacts(contacts, filter);
  return (
    <List>
      {filtredContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </List>
  );
}
