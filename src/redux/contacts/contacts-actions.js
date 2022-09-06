import { createAction } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";


export const saveContact = createAction('contact/save', (data) => {
    return {
        payload: {
            ...data,
            id: nanoid()
        }
    }
});
export const deleteContact = createAction('contact/delete');
