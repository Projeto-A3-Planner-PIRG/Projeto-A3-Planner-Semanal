const express = require('express');
const router = express.Router();

const EventoController = require('./controllers/EventoController');

router.get('/evento', EventoController.buscarTodos); 
router.post('/evento', EventoController.inserir);
router.put('/evento/:id', EventoController.alterar);
router.delete('/evento/del/:id', EventoController.excluir);

module.exports = router;

