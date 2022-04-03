//Importando função para transforma arquivo em texto
const fileToText = require('./fileToText')

//Importando função para buscar links
const findMarkdownLinks = require('./findMarkdownLinks')

module.exports = async function checkLinks (pathName) {
    let text = await fileToText(pathName)
    let links = findMarkdownLinks(text)
    console.log("Links", links)
}