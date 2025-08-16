const { esPalindromo } = require('../../src/string')

describe('esPalindromo', () => {
  it('debería retornar true para un palíndromo', () => {
    expect(esPalindromo('anilina')).toBe(true)
  })

  it('debería retornar false para una cadena que no es un palíndromo', () => {
    expect(esPalindromo('hola')).toBe(false)
  })
})
