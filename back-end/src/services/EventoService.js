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

    buscarUm: (semana) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM evento WHERE semana = ?', [semana], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ 
                    aceito(results);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome, data, categoria, concluido, semana)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO evento (nome, data, categoria, concluido, semana) VALUES (?, ?, ?, ?, ?)',
                [nome, data, categoria, concluido, semana],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    },
    alterar:(id, nome, data, categoria, concluido, semana)=> {

        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE evento SET nome = ?, data = ?, categoria = ?, concluido = ?, semana = ? WHERE id = ?',
                [nome, data, categoria, concluido, semana, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM evento WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


