module.exports = {
    index(req,res){
        return res.status(200).send({ message: "Testa"});
    }
}