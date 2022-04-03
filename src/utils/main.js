//Importando função para transforma arquivo em texto
const fileToText = require('./fileToText')

//Importando função para buscar links
const findMarkdownLinks = require('./findMarkdownLinks')

//Importando função para validar link
const checkLinkStatus = require('./checkLinkStatus')

module.exports = async function main (pathName) {
    //Busca o texto do arquivo
    let text = await fileToText(pathName)

    //Busca os links do texto
    let links = findMarkdownLinks(text)
    
    //Verifica o status de cada link na lista de links
    for await (let link of links) {
        link.status = await checkLinkStatus(link.link)
    }
    console.table(links)
}