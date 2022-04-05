//Importando módulo para executar a solicitação HTTP
const fetch = require("node-fetch-commonjs")

//Criando função para verificar o status da URL
module.exports = async function checkLinkStatus(link) {
    
    if(typeof link === 'string'){
        try{

            //Executando a solicitação HTTP
            const response = await fetch(link)

            //Retornando o status da resposta
            return response.status
        } catch(error){

            //Disparando erro caso ocorra algum problema
            throw new Error(error)
        }
    } else {
        
        //Disparando erro caso o parâmetro não seja uma string
        throw new Error('O Parâmetro informado não é uma string')
    }
}