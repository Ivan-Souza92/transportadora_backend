const { Model, DataTypes } = require('sequelize');

class Viagem extends Model{
    static init(sequelize) {
        super.init({
            data: DataTypes.DATE,
        }, {
            sequelize,
        })
    }

    static associate(models){
        this.belongsTo(models.Localidade, {foreignKey: 'localidade_id', as: 'viagem'});
        this.belongsTo(models.Caminhao, { foreignKey: 'caminhao_id', as: 'caminhao' });
    }
}

module.exports = Viagem;