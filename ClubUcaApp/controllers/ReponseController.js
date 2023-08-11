const { Reponse, User, Message, Adherent } = require('../models');


const createReponseForMessage = async function(req, res) {
    const { UserId, MessageId, contenu} = req.body;
    try {
    const reponse = await Reponse.create({
        UserId,
        MessageId,
        contenu
    });
        res.status(200).json({ reponse });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getReponsesForMessage = async (req, res) => {
    try {
        const reponses = await Reponse.findAll({
            where: { messageId: req.params.messageId },
            include: [
                { model: User, attributes: ['id', 'numero'],include: [
                        {
                            model: Adherent,
                            attributes: ['nom', 'prenom']
                        }
                    ] },
                { model: Message, attributes: ['id', 'titre', 'contenu'] }
            ]
        });

        res.status(200).json({ reponses });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const update = async (req, res) => {
    const { id } = req.params;
    const { contenu } = req.body;

    try {
        const reponse = await Reponse.findOne({ where: { id } });

        if (!reponse) {
            return res.status(404).json({ message: "Reponse introuvable" });
        }

        reponse.contenu = contenu;

        await reponse.save();

        res.status(200).json(reponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteReponse = async (req, res) => {
    const { id } = req.params;

    try {
        const reponse = await Reponse.findOne({ where: { id } });

        if (!reponse) {
            return res.status(404).json({ message: "Reponse introuvable" });
        }

        await reponse.destroy();

        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports= {
    getReponsesForMessage,
    createReponseForMessage,
    update,
    deleteReponse,
}
