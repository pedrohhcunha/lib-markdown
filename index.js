//Importando função para transforma arquivo em texto
const fileToText = require('./utils/fileToText')

//Importando função para buscar links
const findMarkdownLinks = require('./utils/findMarkdownLinks')

const checkLinks  = async () => {
    let text = await fileToText('./files/post.md')
    let links = findMarkdownLinks(text)
    console.log("Links", links)
}

checkLinks()