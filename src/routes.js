const express = require('express');
const routes = express.Router();
const LocalidadeController = require('./controllers/LocalidadeController')
const CaminhaoController = require('./controllers/CaminhaoController');
const ViagemController = require('./controllers/ViagemController');
const fs = require('fs');
const csv = require('fast-csv');
const multer = require('multer')
const path = require('path')
const Localidade = require('./models/Localidade')




var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});


function UploadCsvDataSQL(filePath){
    let stream = fs.createReadStream(filePath);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            csvData.shift();
            Localidade.createReadStream(csvData);
            fs.unlinkSync(filePath)
        });
  
    stream.pipe(csvStream);
}

  routes.post('/uploadfile', upload.single("file"), (req, res) =>{
      UploadCsvDataSQL(__dirname + '/uploads/' + req.file.filename);
      console.log('erro');
  });





routes.post('/api/localidade', LocalidadeController.store);
routes.get('/api/localidades/list', LocalidadeController.index);
routes.get('/api/localidade/:id', LocalidadeController.findByID);


routes.post('/api/caminhao', CaminhaoController.store);
routes.get('/api/caminhoes/list', CaminhaoController.index);
routes.put('/api/caminhoes/update/:id', CaminhaoController.update);
routes.delete('/api/caminhoes/delete/:id', CaminhaoController.delete);
routes.post('/caminhoes/:caminhao_id/:localidade_id/viagens', ViagemController.store);
routes.get('/api/caminhao/list/:id', CaminhaoController.findByID);
//busca placa
routes.get('/api/caminhao/placa/:placa', CaminhaoController.show);

routes.get('/viagens/list', ViagemController.index );
routes.put('viagens/:id/update', ViagemController.update);
routes.delete('viagens/:id/delete', ViagemController.delete);


module.exports = routes;
