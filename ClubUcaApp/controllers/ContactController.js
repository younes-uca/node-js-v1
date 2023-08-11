const db = require('../models')

const createContact = async (req,res)=>{
    try {
        const { nom, prenom, numeroTelephone, email, question } = req.body;

        // Créer un nouveau contact dans la base de données
        const newContact = await db.Contact.create({
            nom,
            prenom,
            numeroTelephone,
            email,
            question
        });

        res.status(201).json({ contact: newContact });
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const getAllContacts = async (req,res) => {
    try {
        const contacts = await db.Contact.findAll();
        res.status(200).json({ contacts });
    }catch (error) {
        res.status(500).json({error:error.message});
    }
}
const getContactById = async (req,res) => {
    try {
        const contactId = req.params.id;

        const contact = await db.Contact.findByPk(contactId);

        if (!contact) {
            return res.status(404).json({ message: 'Contact non trouvé.' });
        }

        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    createContact,
    getAllContacts,
    getContactById
}