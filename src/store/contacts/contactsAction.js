import contactApi from '@api/contacts';
import { contactsActionTypes } from '../constant'

export const initContacts = () => {
    return {
        type: contactsActionTypes.TYPE,
        payload: contactApi.getContactsData().then(result => result.data)
    }
}