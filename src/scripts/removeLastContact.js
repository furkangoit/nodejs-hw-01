import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log(' Rehber zaten boş!');
      return;
    }

    const removed = contacts.pop();

    await writeContacts(contacts);

    console.log(' Son kontak silindi:');
    console.log(removed);
  } catch (error) {
    console.error(' Son kontak silinemedi:', error.message);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  await removeLastContact();
}