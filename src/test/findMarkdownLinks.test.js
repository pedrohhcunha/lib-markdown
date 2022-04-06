const findMarkdownLinks = require('../utils/findMarkdownLinks')

const textToTest = 'São geralmente recuperados a partir de um objeto [linkA](https://www.google.com/) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [linkB](https://www.google.com/)'

describe('findMarkdownLinks::', () => {
    it('should return an array if send a string', () => {
        const result = findMarkdownLinks(textToTest)
        expect(Array.isArray(result)).toBe(true)
    })
    it('should return two links in text', () => {
        const result = findMarkdownLinks(textToTest)
        expect(result.length).toBe(2)
    })
    it('should return two objects in array', () => {
        const result = findMarkdownLinks(textToTest)
        expect(result).toEqual(expect.arrayContaining([
            {
                name: 'linkA',
                link: 'https://www.google.com/'
            },
            {
                name: 'linkB',
                link: 'https://www.google.com/'
            }
        ]))
    })
    it('should return an error if not send a string', () => {
        expect(() => {
            findMarkdownLinks(123)
        }).toThrowError('Text must be a string')
    })
});
