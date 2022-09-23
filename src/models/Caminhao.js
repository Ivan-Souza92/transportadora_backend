const { Model, DataTypes } = require('sequelize');

class Caminhao extends Model{
    static init(sequelize) {
        super.init({
            placa: DataTypes.STRING,
            apelido: DataTypes.STRING,
            ano: DataTypes.INTEGER,
            cor: DataTypes.INTEGER,
            rendimento: DataTypes.INTEGER
        }, {
            sequelize,
            
        })
    }
}

module.exports = Caminhao;