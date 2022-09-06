import { createReducer } from "@reduxjs/toolkit";
import { deleteContact, saveContact } from "./contacts-actions";

const items = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];


const contactsReducer = createReducer(items, {
    [saveContact]: (store, { payload }) => [...store, payload],
    [deleteContact]: (store, { payload }) => store.filter(item => item.id !== payload)
});


export default contactsReducer;