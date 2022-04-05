const checkLinkStatus  = require('../utils/checkLinkStatus')

describe('checkLinkStatus::', () => {
    it('should return 404 if link not exists', async () => {
        const result = await checkLinkStatus('https://developer.mozilla.org/pt-BR/docs/pedrohhcunha')
        expect(result).toBe(404)
    })
    it('should return 200 if link exists', async () => {
        const result = await checkLinkStatus('https://www.google.com/')
        expect(result).toBe(200)
    })
    it('should return error if link is not a string', async () => {
        try {
            await checkLinkStatus(123)
        } catch (error) {
            expect(error.message).toBe('O Parâmetro informado não é uma string')
        }  
    })
})