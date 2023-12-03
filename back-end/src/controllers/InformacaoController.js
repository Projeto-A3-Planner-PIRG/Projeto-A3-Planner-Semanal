const InformacaoService = require('../services/InformacaoService');

module.exports = {

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let id_evento = req.body.id_evento;
        let texto = req.body.texto;
        console.log(req.body)
        if (Object.keys(req.body).length !== 0){
            await InformacaoService.inserir(id_evento, texto);
            json.result = {
                success: 'informação cadastrada com sucesso !'
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    
    // buscarTodos: async (req, res) => {
    //     let json = {error:'', result:[]};

    //     let semana = req.query.semana;

    //     if (semana) {
    //         let evento = await EventoService.buscarUm(semana);

    //         if(evento){
    //             json.result = evento; 
    //         }

    //         res.json(json);
    //         return
    //     }

    //     let eventos = await EventoService.buscarTodos();

    //     for(let i in eventos){
    //         json.result.push({
    //             id: eventos[i].id,
    //             nome: eventos[i].nome,
    //             data: eventos[i].data,
    //             categoria: eventos[i].categoria,
    //             concluido: eventos[i].concluido,
    //             semana: eventos[i].semana
    //         });
    //     }

    //     res.json(json);
    // },

    alterar: async(req, res) => {
        
        try {
            const json = { error: '', result: {} };
    
            const { id } = req.params;
            const {texto} = req.body;
    
            if (!id) {
                throw new Error('Campos não enviados');
            }
    
            await InformacaoService.alterar(texto, id);
    
            json.result = {texto};
            console.log('Alteração bem-sucedida');
            res.json(json);
        } catch (error) {
            console.error('Erro ao tentar alterar o evento:', error.message);
            res.status(400).json({ error: error.message });
        }
    },
}
