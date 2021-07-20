const Iten = require('../models/Itens');

module.exports = {
    async add(req,res) {
        const { name, price, amount} = req.body;
        
        const requestImage = req.file;
        const path = requestImage.filename;

        const iten = await Iten.create({ name, price, amount, path});

        return res.status(200).json(iten);
    }
}