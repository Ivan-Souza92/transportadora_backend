const { Model, DataTypes } = require('sequelize');

class Localidade extends Model{
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            distancia: DataTypes.INTEGER,
        }, {
            sequelize,
        })
    }
}

module.exports = Localidade;