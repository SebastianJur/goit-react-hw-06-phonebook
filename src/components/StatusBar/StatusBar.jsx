import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { sortContacts, deleteAllContacts } from '../../redux/contactsSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';

export const StatusBar = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDeleteAllContacts = () => {
    dispatch(deleteAllContacts());
  };
  const handleSortContacts = () => {
    dispatch(sortContacts());
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__header}>You have</p>
          <p className={css.counter__data}>
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {contacts.length > 0 && (
          <div className={css.buttons}>
            <button
              className={css.button}
              type="button"
              onClick={handleSortContacts}
            >
              Sort Contacts
            </button>
            <button
              className={css.button}
              type="button"
              onClick={handleDeleteAllContacts}
            >
              Remove All Contact
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
