const Viagem  = require('../models/Viagem');
const Caminhao = require('../models/Caminhao')
const Localidade = require('../models/Localidade');


module.exports = {
    async store(req,res){

        try {
            const { caminhao_id } = req.params;
            const { localidade_id } = req.params;
            
    
            const { data } = req.body;
            const caminhao = await Caminhao.findByPk(caminhao_id);
            const localidade = await Localidade.findByPk(localidade_id);
    
            if(!caminhao && !localidade){
                return res.status(400).json({ error:'Caminhao or localidade not found' })
            }
    
            const viagens = await Viagem.create({
                data,
                caminhao_id,
                localidade_id
            })
    
            return res.status(200).json(viagens);
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async index(req,res){

        try {
            const viagens = await Viagem.findAll();
            return res.status(200).json(viagens);
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async update(req,res){
        try {
            const { id } = req.params;
            const { data } = req.body;
            const viagem = await Viagem.findByPk(id);
            
            if(!viagem){
                res.status(401).json({message: 'Viagem não encontrada'})
            }else{
                const viagem = await Viagem.update({ data }, {where:{id}})

                res.status(200).json({viagem});
            }
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async delete(req,res){

        try {
            const { id } = req.params;
            const viagem = await Viagem.findByPk(id);

            if(!viagem){
                res.status(401).json({message: 'Viagem não encontrada'})
            }else{

                const viagem = Viagem.destroy({where: { id }})
                res.status(200).json({ok: true})
            }
            
        } catch (error) {
            res.status(400).json({error});
        }
    }
}