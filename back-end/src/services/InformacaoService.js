const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM evento', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

alterar:(texto, eventoId)=> {

    return new Promise((aceito, rejeitado)=> {
        db.query('UPDATE informacoes SET texto = ? WHERE id_evento = ?',
            [texto, eventoId],
            (error, results) => {
                if(error){ rejeitado(error); return; }
                aceito(results);
            }
        );
    });
},

};


