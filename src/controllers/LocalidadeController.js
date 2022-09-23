const Localidade = require('../models/Localidade')


module.exports = {

    async store(req, res) {
        const { nome, distancia } = req.body;

        try {
            const localidade = await Localidade.create({ nome, distancia });
            return res.status(200).json(localidade);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async index(req, res) {
        try {
            const localidades = await Localidade.findAll();
            return res.status(200).json(localidades);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async findByID(req,res){

        try {

            const { id } = req.params;
            const localidade = await Localidade.findByPk(id);
            return res.status(200).json(localidade);
            
        } catch (error) {
            res.status(400).json({error})
        }
    },
}