const Iten = require('../models/Itens');

module.exports = {
    async add(req,res) {
        const { name, price, amount, path} = req.body;
        
       const iten = await Iten.create({ name, price, amount, path});

       return res.status(200).json(iten);
    }
}