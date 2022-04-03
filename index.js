//Importando a função principal da nossa aplicação
const checkLinks = require('./src/utils/checkLinks')

//Importando o pathname passado via cli
const pathName = process.argv[2]

//Executando a função para checar os links passando o pathName
checkLinks(pathName)