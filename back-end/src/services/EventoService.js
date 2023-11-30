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
    inserir: (nome, data, categoria, concluido, semana, texto) => {
        return new Promise((aceito, rejeitado) => {
            db.beginTransaction((error) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                db.query(
                    'INSERT INTO evento (nome, data, categoria, concluido, semana) VALUES (?, ?, ?, ?, ?)',
                    [nome, data, categoria, concluido, semana],
                    (errorEvento, resultsEvento) => {
                        if (errorEvento) {
                            return db.rollback(() => {
                                rejeitado(errorEvento);
                            });
                        }
                        const eventoId = resultsEvento.insertId;
    
                        db.query(
                            'INSERT INTO informacoes (id_evento, texto) VALUES (?, ?)',
                            [eventoId, texto],
                            (errorInformacoes, resultsInformacoes) => {
                                if (errorInformacoes) {
                                    return db.rollback(() => {
                                        rejeitado(errorInformacoes);
                                    });
                                }
    
                                db.commit((commitError) => {
                                    if (commitError) {
                                        return db.rollback(() => {
                                            rejeitado(commitError);
                                        });
                                    }
                                    aceito(eventoId);
                                });
                            }
                        );
                    }
                );
            });
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


