import { Conteiner, Title, ContactsTitle } from './appConteiner.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { Form } from 'components/FormToAddContact/FormToAddContact';
import { Input } from '../FindInput/FindInput';
import { ContactList } from '../ContactsList/ContactsList';

export function App() {
  return (
    <Conteiner>
      <Title>
        PHONEBOOK
        <BsFillTelephonePlusFill />
      </Title>
      <Form />
      <ContactsTitle>
        Contacts <IoMdContact />
      </ContactsTitle>
      <Input />
      <ContactList />
    </Conteiner>
  );
}
