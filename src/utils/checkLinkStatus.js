//Importando módulo para executar a solicitação HTTP
const fetch = require("node-fetch-commonjs")

//Criando função para verificar o status da URL
module.exports = async function checkLinkStatus(link) {
    
    try{
    
        //Executando a solicitação HTTP
        let response = await fetch(link);

        //Retornando o status da resposta
        return response.status

    //Executando o catch caso ocorra um erro
    } catch(error){
            
        //Disparando erro
        throw error
    }
}