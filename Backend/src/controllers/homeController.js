const Iten = require('../models/Itens');

module.exports = {
    /*render(iten){
        return{
            url: `http://localhost:3333/${iten.path}`
        } 
    },*/

    async index(req,res){
        const itens = await Iten.findAll();

        function render(Image) {
            return{
                id: Image.id,
                name: Image.name,
                price: Image.price,
                amount: Image.amount,
                url: `http://localhost:3333/uploads/${Image.path}`
            };
        }

        const ItensConvert = itens.map(item => render(item));


        return res.status(200).send(ItensConvert);
    }
}