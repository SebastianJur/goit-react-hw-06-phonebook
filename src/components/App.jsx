import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { Header } from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import { StatusBar } from './StatusBar/StatusBar';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <>
      <Header />
      <ContactForm handleSubmit={handleSubmit} />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default App;