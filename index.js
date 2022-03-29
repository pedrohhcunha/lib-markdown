//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

//Criando função sncrona para ler o arquivo de um post
const getFileSync = (fileName) => {

    //Lendo arquivo de um post no diretório posts
    fs.readFile(fileName, 'utf8', (error, data) => {

        //Se houver erro, retorna o erro
        if (error) throw new Error(error)
        
        console.log("Texto do post: ", data)
    })
}

//Executando a função de busca do arquivo
getFileSync('./files/post.md')