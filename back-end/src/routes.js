const express = require('express');
const router = express.Router();

const EventoController = require('./controllers/EventoController');
const InformacaoController = require('./controllers/InformacaoController');

router.get('/evento', EventoController.buscarTodos); 
router.post('/evento', EventoController.inserir);
router.put('/evento/:id', EventoController.alterar);
router.delete('/evento/del/:id', EventoController.excluir);
router.get('/informacao', InformacaoController.buscarTodos); 
router.put('/informacao/:id', InformacaoController.alterar);

module.exports = router;

