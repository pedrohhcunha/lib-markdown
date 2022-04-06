const main = require('../utils/main')

describe('main::', () => {
    it('should return true if pahtName is a file', async () => {
       expect(await main('./src/files/test.md')).toBe(true)
    })
});
