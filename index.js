//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

//Criando função moderna assincrona para ler o arquivo de um post
const getFileAsyncModern = async (fileName) => {

    try{
        //Lendo o arquivo
        const data = await fs.promises.readFile(fileName, 'utf8')

        //Usando dados lidos do arquivo
        console.log("Texto do post: ", data)
    
    }
    //Executando o catch caso ocorra um erro
    catch(error){
        console.log(error)
    }
}

getFileAsyncModern('./files/post.md')