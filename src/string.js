function esPalindromo(cadena) {
  const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return cadenaLimpia === cadenaLimpia.split('').reverse().join('')
}   

module.exports = { esPalindromo };
