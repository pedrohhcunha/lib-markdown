//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

//Exportando a função que le o arquivo e retorna o texto
module.exports = async function fileToText(fileName) {
    try{
        //Lendo o arquivo
        const data = await fs.promises.readFile(fileName, 'utf8')

        return data
    }
    
    //Executando o catch caso ocorra um erro
    catch(error){
        console.log(error)
    }
}