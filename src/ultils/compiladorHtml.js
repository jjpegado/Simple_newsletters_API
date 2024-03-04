const fs = require('fs/promises')

const handlebars = require('handlebars')

const compiladorHtml = async (arquivo, contexto) => {
    const html = await fs.readFile(arquivo);
    const compilador = handlebars.compile(html.toString());
    const htmlString = compilador(contexto)
    return htmlString
}

module.exports = compiladorHtml


//const arquivo = await fs.readFile('./src/templates/login.html')      './src/templates/login.html') => arquiivo

// const compilador = handlebars.compile(
//     '<h1>Você fez Login na {{api}} da Aula de Envio de E-mails {{nomeusuario}}?</h1>' => leitura do contexto
// )

// const htmlString = compilador ({  => contexto!
//     nomeusuario: usuario.nome,
//     api: 'API'
// })
 // resposta ...arquivo.toString() 
