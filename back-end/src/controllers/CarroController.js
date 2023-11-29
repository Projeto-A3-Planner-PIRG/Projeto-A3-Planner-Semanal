const CarroService = require('../services/CarroService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let semana = req.query.semana;

        if (semana) {
            let evento = await CarroService.buscarUm(semana);

            if(evento){
                json.result = evento; //se tiver nota ele joga no json
            }

            res.json(json);
            return
        }

        let eventos = await CarroService.buscarTodos();

        for(let i in eventos){
            json.result.push({
                id: eventos[i].id,
                nome: eventos[i].nome,
                data: eventos[i].data,
                categoria: eventos[i].categoria,
                concluido: eventos[i].concluido,
                semana: eventos[i].semana
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let semana = req.query.semana; //para pegar o parametro
        let evento = await CarroService.buscarUm(semana);

        if(evento){
            json.result = evento; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let data = req.body.data;
        let categoria = req.body.categoria;
        let concluido = req.body.concluido;
        let semana = req.body.semana;
        console.log(nome)
        if (nome && data && categoria && concluido && semana){
            let eventoId = await CarroService.inserir(nome, data, categoria, concluido, semana);
            json.result = {
                id: eventoId,
                nome,
                data,
                categoria,
                concluido,
                semana
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        
        try {
            const json = { error: '', result: {} };
    
            const { id } = req.params;
            const { nome, data, categoria, concluido, semana } = req.body;
    
            if (!id) {
                throw new Error('Campos não enviados');
            }
    
            await CarroService.alterar(id, nome, data, categoria, concluido, semana);
    
            json.result = { id, nome, data, categoria, concluido, semana };
            console.log('Alteração bem-sucedida');
            res.json(json);
        } catch (error) {
            console.error('Erro ao tentar alterar o evento:', error.message);
            res.status(400).json({ error: error.message });
        }
    },
    
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
        await CarroService.excluir(req.params.id);
        
        res.json(json);
    },
}


