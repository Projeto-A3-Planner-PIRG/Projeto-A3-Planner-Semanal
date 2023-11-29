const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

// router.get('/evento', CarroController.buscarUm);
router.get('/evento', CarroController.buscarTodos); 
router.post('/evento', CarroController.inserir);
router.put('/evento/:id', CarroController.alterar);
router.delete('/evento/del/:id', CarroController.excluir);

module.exports = router;

