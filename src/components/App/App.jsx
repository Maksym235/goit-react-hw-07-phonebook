//--------------REACT--------------
import { useEffect } from 'react';

//--------------REDUX--------------
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

//--------------COMPONENTS---------
import { Form } from 'components/FormToAddContact/FormToAddContact';
import { Input } from '../FindInput/FindInput';
import { ContactList } from '../ContactsList/ContactsList';

//--------------ICONS-------------
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';

//--------------STYLES------------
import { Conteiner, Title, ContactsTitle } from './appConteiner.styled';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);

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
      {isLoading && !isError && <b>Loading contacts...</b>}
      <ContactList />
    </Conteiner>
  );
}
