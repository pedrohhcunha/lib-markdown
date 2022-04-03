//Importando módulo para executar a solicitação HTTP
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

//Criando função para verificar o status da URL
module.exports = async function checkLinkStatus(link) {
    
    //Executando a solicitação HTTP
    let response = await fetch(link);

    //Retornando o status da resposta
    return response.status
}