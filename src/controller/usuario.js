const knex = require('../conexao');
const trasportador = require('../email')
const compiladorHtml = require('../ultils/compiladorHtml')

const cadastroUsuario = async (req, res) => {
    const {nome, email} = req.body

    if(!email){
       return res.status(400).json({mensagem: "Email ou nome incorreto" })
    }

    if(!nome){
        return res.status(400).json({mensagem: "Email ou nome incorreto" })
    }

    try {

        const usuarioEmail = await knex('usuarios').where({email}).first()
        
        console.log(usuarioEmail);
        if(usuarioEmail) {
            return res.status(400).json("O email já existe");
        }

        const usuario = await knex('usuarios').insert({nome, email}).returning('*').debug()

        if (!usuario) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        const html = await compiladorHtml('./src/templates/login.html', {
            nomeusuario: nome,
        });

        await trasportador.sendMail({
            from: `julio soares <${process.env.EMAIL_USER}>`, // sender address
            to: `${nome} <${email}>`, // list of receivers
            subject: "Testando envio", // Subject line
            html
          });
        
        
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastroUsuario,
}