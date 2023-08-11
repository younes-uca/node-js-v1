const {Response,Contact} = require('../models');
const nodemailer = require('nodemailer');
const {response} = require("express");

const createResponse = async (req,res) => {
    try{
        const { contactId, content } = req.body;

        const newResponse = await Response.create({
            contactId,
            content,
        });
        const contact = await Contact.findByPk(contactId);
        await newResponse.setContact(contact);
        const contactEmail = contact.email;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'aymanenefdaoui03@gmail.com',
                pass: 'sddsyhfemvqmlosn',
            },
        });

        transporter.sendMail({
            from: 'aymanenefdaoui03@gmail.com',
            to: contactEmail,
            subject: 'Réponse à votre message',
            text: 'Votre message a été pris en compte et voici notre réponse : ' + content,
        }, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error);
            } else {
                console.log('E-mail envoyé avec succès', info.response);
            }
        });

        await contact.destroy();

        res.status(201).json({ response: newResponse });
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports = {
    createResponse
}