module.exports = {
    add(req,res) {
        const itemInformation = req.body;
        return res.status(200).json(itemInformation);
    }
}