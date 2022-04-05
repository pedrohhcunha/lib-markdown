const checkLinkStatus  = require('../utils/checkLinkStatus');

describe('checkLinkStatus::', () => {
    it('should return 404 if link not exists', async () => {
        const result = await checkLinkStatus('https://developer.mozilla.org/pt-BR/docs/pedrohhcunha')
        expect(result).toBe(404)
    })
});