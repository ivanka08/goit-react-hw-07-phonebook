import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../../redux/contacts-operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, (store) => {
        store.loading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, (store) => {
        store.loading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
  }
})

export default contactSlice.reducer;