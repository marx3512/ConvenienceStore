const Iten = require("../models/Itens");

module.exports = {
    async del(req,res){

        await Iten.destroy({
            where: {
                name: req.params.name,//Delete/Bolacha -> /Delete/:name
            }
        });
        return res.status(200).json({ message: "Delete success"});
    }
}