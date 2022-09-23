const Caminhao = require('../models/Caminhao');
const {Op} = require('sequelize')

module.exports = {

    async findByID(req, res) {

        try {

            const { id } = req.params;
            const caminhao = await Caminhao.findByPk(id);
            return res.status(200).json(caminhao);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async show(req, res) {

        try {

            const { placa } = req.params;
            const caminhao = await Caminhao.findAll({
                attributes: ["placa"],
                where:{
                    placa:placa
                }
            });
            return res.status(200).json(caminhao);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    

    async index(req, res) {
        try {
            const caminhoes = await Caminhao.findAll();
            return res.status(200).json(caminhoes);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async store(req, res) {
        const { placa, apelido, ano, cor, rendimento } = req.body;
        try {
            const caminhao = await Caminhao.create({ placa, apelido, ano, cor, rendimento });
            return res.status(200).json(caminhao);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { placa, apelido, ano, cor, rendimento } = req.body;
            const caminhao = await Caminhao.findByPk(id);

            if (!caminhao) {
                res.status(401).json({ message: 'Caminhao não encontrado' })
            } else {
                const caminhao = await Caminhao.update({ placa, apelido, ano, cor, rendimento }, { where: { id } })

                res.status(200).json({ caminhao });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const caminhao = await Caminhao.findByPk(id);

            if (!caminhao) {
                res.status(401).json({ message: 'Caminhão não encontrado' })
            } else {

                const caminhao = Caminhao.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    }
}