import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error(' Kontaklar sayılamadı:', error.message);
    return 0;
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const total = await countContacts();
  console.log(`Toplam kontak sayısı: ${total}`);
}