const { Model, DataTypes } = require('sequelize');

class Iten extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.STRING,
            amount: DataTypes.STRING,
            path: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Iten;