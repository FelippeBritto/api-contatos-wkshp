const { formatarResposta } = require("../utils/response-utils");
const Usuario = require('../models/user/user-model');

exports.ping = (req, res) => {
    res.send({ message: 'Pong' });
}

exports.novoUsuario = async (req, res) => {
    const { nomeUsuario, dadosUsuario } = req.body;
    if(!nomeUsuario || nomeUsuario == '' || !dadosUsuario || dadosUsuario.emailUsuario == '' || 
        dadosUsuario.senhaUsuario == '') {
        res.status(500).send(formatarResposta(null, 'Todos os campos são de preenchimento obrigatório.'));
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioCriado = await usuario.save();
        res.send(formatarResposta(usuarioCriado, 'Usuario criado com sucesso.', 200));
    } catch (error) {
        res.status(500).send(formatarResposta(null, 'Erro ao criar o usuário.', 500));
    }
}

exports.loginUsuario = async (req, res) => {
    const { emailUsuario, senhaUsuario } = req.body;
    if(!emailUsuario || emailUsuario == '' || !senhaUsuario || senhaUsuario == '') {
        res.status(500).send(formatarResposta(null, 'Todos os campos são de preenchimento obrigatório.'));
    }
    try {
        const usuarioLogado = await Usuario.findOne({ 'dadosUsuario.emailUsuario': emailUsuario,
        'dadosUsuario.senhaUsuario': senhaUsuario });
        usuarioLogado ? res.send(formatarResposta(usuarioLogado, 'Login realizado', 200))
        : res.status(404).send(formatarResposta(null, 'Usuário não encontrado', 404));
    } catch (error) {
        res.status(500).send(formatarResposta(null, 'Erro ao logar o usuário.', 500));
    }
}
