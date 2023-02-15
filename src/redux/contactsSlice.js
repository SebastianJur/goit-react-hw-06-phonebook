import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Ken Kaneki', number: '111-111-111' },
  { id: '1', name: 'Oomori Yakumo', number: '222-222-222' },
  { id: '2', name: 'Kosaka Yoriko', number: '333-333-333' },
  { id: '3', name: 'Nishio Nishiki', number: '444-444-444' },
  { id: '4', name: 'Suzuya Juuzou', number: '555-555-555' },
  { id: '5', name: 'Kirishima Touka', number: '666-666-666' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const isContactExist = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isContactExist) {
          alert(`User with name ${action.payload.name} is already in contacts`);
          return;
        }
        const isNumberExist = state.find(
          contact =>
            contact.number.replace(/\D/g, '') ===
            action.payload.number.replace(/\D/g, '')
        );
        if (isNumberExist) {
          alert(`Number ${action.payload.number} is already in contacts`);
          return;
        }

        state.push(action.payload);
      },

      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

    deleteAllContacts: state => {
      state.splice(0, state.length);
    },

    sortContacts: state => {
      state.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts, sortContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;