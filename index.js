//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

//Criando função sncrona para ler o arquivo de um post
const getFileSync = (fileName) => {

    //Lendo o arquivo
    fs.readFile(fileName, 'utf8', (error, data) => {

        //Se houver erro, retorna o erro
        if (error) throw new Error(error)
        
        console.log("Texto do post: ", data)
    })
}

//Criando função assincrona para ler o arquivo de um post
const getFileAsync = (fileName) => {

    //Lendo o arquivo
    fs.promises.readFile(fileName, 'utf8')

    //Usando dados lidos do arquivo
    .then(data => console.log("Texto do post: ", data))

    //Caso ocorra um erro, trata o erro
    .catch(error => console.log(error))
}

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

//Executando a função de busca do arquivo
getFileSync('./files/post.md')
//Executando a função de busca do arquivo assuncrona
getFileAsync('./files/post.md')
//Executando a função de busca do arquivo assuncrona moderna
getFileAsyncModern('./files/post.md')