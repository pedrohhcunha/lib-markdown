module.exports = function findMarkdownLinks(text){
	try{
		const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
		const links = []
		let temp
		while((temp = regex.exec(text)) !== null) {
			links.push({
				name: temp[1],
				link: temp[2]
			})
		}
		return links
	} catch(error){
		console.log(error)
	}
}