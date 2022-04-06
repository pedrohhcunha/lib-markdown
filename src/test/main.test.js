const main = require('../utils/main')

describe('main::', () => {
    it('should return true if pahtName is a file', async () => {
       expect(await main('./src/files/test.md')).toBe(true)
    })
    it('should return error when pathName does not passed', async () => {
        try{
            await main()
        } catch(error){
            expect(error.message).toBe('O PathName não existe!')
        }
    })
    it('should return error when pathName is a folder', async () => {
        try{
            await main('./src/files/')
        } catch(error){
            expect(error.message).toBe('O PathName não representa um arquivo!')
        }
    })
});
