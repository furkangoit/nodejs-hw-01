import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readContacts } from './utils/readContacts.js';
import { generateContacts } from './scripts/generateContacts.js';
import { addOneContact } from './scripts/addOneContact.js';
import { removeLastContact } from './scripts/removeLastContact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// API Routes
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await readContacts();
        res.json(contacts);
    } catch (error) {
        console.error('Kişiler alınırken hata:', error);
        res.status(500).json({ error: 'Kişiler alınamadı' });
    }
});

app.post('/api/generate', async (req, res) => {
    try {
        await generateContacts();
        res.json({ success: true, message: 'Yeni kişiler oluşturuldu' });
    } catch (error) {
        console.error('Kişiler oluşturulurken hata:', error);
        res.status(500).json({ error: 'Kişiler oluşturulamadı' });
    }
});

app.post('/api/add-one', async (req, res) => {
    try {
        await addOneContact();
        res.json({ success: true, message: 'Yeni kişi eklendi' });
    } catch (error) {
        console.error('Kişi eklenirken hata:', error);
        res.status(500).json({ error: 'Kişi eklenemedi' });
    }
});

app.post('/api/remove-last', async (req, res) => {
    try {
        await removeLastContact();
        res.json({ success: true, message: 'Son kişi silindi' });
    } catch (error) {
        console.error('Kişi silinirken hata:', error);
        res.status(500).json({ error: 'Kişi silinemedi' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server çalışıyor: http://localhost:${PORT}`);
    console.log(`📱 Contact Manager: http://localhost:${PORT}`);
});
