//Importando função para transforma arquivo em texto
const fileToText = require('./fileToText')

//Importando função para buscar links
const findMarkdownLinks = require('./findMarkdownLinks')

//Importando função para validar link
const checkLinkStatus = require('./checkLinkStatus')

//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

module.exports = async function main (pathName) {

    try{
        //Verifica se o pathName é valido
        if(fs.existsSync(pathName)){

            //Verifica se o pathName representa um arquivo
            if(fs.lstatSync(pathName).isFile()){

                //Busca o texto do arquivo
                let text = await fileToText(pathName)

                //Busca os links do texto
                let links = findMarkdownLinks(text)
                
                //Verifica o status de cada link na lista de links
                for await (let link of links) {
                    link.status = await checkLinkStatus(link.link)
                }
                console.table(links)
            } else {

                //Retornando erro
                throw new Error('Error: o PathName não representa um arquivo!')
            }
        } else {

            //Retornando erro
            throw new Error('Error: o PathName não existe!')
        }
    } catch(error){
            
        //Imprimindo mensagem de erro
        console.error(error)
    }
}