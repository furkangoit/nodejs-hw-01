import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();

    contacts.push(newContact);

    await writeContacts(contacts);

    console.log(' 1 tane yeni kişi eklendi:');
    console.log(newContact);
  } catch (error) {
    console.error('Kişi eklenemedi:', error.message);
  }
};

// Execute when run directly
await addOneContact();