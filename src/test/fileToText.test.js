const fileToText = require('../utils/fileToText')

describe('fileToText::', () => {
    it('should return a string if pathName is valid', async () => {
        const result = await fileToText('./src/files/post.md')
        expect(typeof result).toBe('string')
    })
    it('should return error if pathName is not a string', async () => {
        try {
            await fileToText(123)
        } catch (error) {
            expect(error.message).toBe("Houve uma falha ao ler o arquivo!")
        }  
    })
    it('should return error if file does not exist', async () => {
        try{
            await fileToText('../fil')
        } catch(error) {
            expect(error.message).toBe("Houve uma falha ao ler o arquivo!")
        }
    })
    it('should return error if pathName is a folder', async () => {
        try {
            await fileToText('../files')
        } catch(error){
            expect(error.message).toBe("Houve uma falha ao ler o arquivo!")
        }
    })
})