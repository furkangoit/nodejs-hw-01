import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error(' Kontaklar okunamadı:', error.message);
    return [];
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const contacts = await getAllContacts();

  if (contacts.length === 0) {
    console.log(' Rehber boş!');
  } else {
    console.log(' Tüm kontaklar:');
    contacts.forEach((contact, index) => {
      console.log(
        `${index + 1}. ${contact.name} | ${contact.phone} | ${
          contact.email
        } | ${contact.job}`,
      );
    });
  }
}