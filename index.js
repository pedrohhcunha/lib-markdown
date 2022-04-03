//Importando a função principal da nossa aplicação
const main = require('./src/utils/main')

//Importando o pathname passado via cli
const pathName = process.argv[2]

//Executando a função para checar os links passando o pathName
main(pathName)