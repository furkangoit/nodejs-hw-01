import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(' Tüm kontaklar silindi!');
  } catch (error) {
    console.error(' Kontaklar silinemedi:', error.message);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  await removeAllContacts();
}