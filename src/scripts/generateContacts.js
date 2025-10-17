import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number = 5) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${number} tane yeni sahte kişi oluşturuldu.`);
  } catch (error) {
    console.error('Kontaklar oluşturulamadı:', error.message);
  }
};

// Execute when run directly
await generateContacts(5);