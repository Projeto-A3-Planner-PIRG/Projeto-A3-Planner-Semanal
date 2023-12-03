const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM informacoes', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    inserir: (id_evento, texto)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO informacoes (id_evento, texto) VALUES (?, ?)',
                [id_evento, texto],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId);
                }
            );
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
    }

};


