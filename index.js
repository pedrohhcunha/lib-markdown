//Importando o módulo fs, para lidar com arquivos
const fs = require('fs')

//Criando função para ler o arquivode um post
const getFile = (fileName) => {

    //Lendo arquivo de um post no diretório posts
    fs.readFile(fileName, 'utf8', (error, data) => {

        //Se houver erro, retorna o erro
        if (error) throw new Error(error)
        
        console.log("Texto do post: ", data)
    })
}

//Executando a função de busca do arquivo
getFile('./files/post.md')