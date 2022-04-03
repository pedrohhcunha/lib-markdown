module.exports = function findMarkdownLinks(text){

	try{

		//Declara uma expressão regular para identificar links em texto markdown
		const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm

		//Cria variáveis de apoio
		const links = []
		let temp

		//Enquanto houver links no texto
		while((temp = regex.exec(text)) !== null) {

			//Identifica e adiciona o link na lista de links
			links.push({
				name: temp[1],
				link: temp[2]
			})
		}

		//Retorna a lista de links
		return links

	//Execta caso seja disparado algum erro
	} catch(error){

		//Disparando erro
		throw new Error("Houve uma falha ao buscar os links!")
	}
}