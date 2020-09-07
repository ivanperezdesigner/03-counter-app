const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp")
const { default: heroes } = require("../../data/heroes")
import '@testing-library/jest-dom'

describe('Pruebas en funciones de Héroes', () => {
    // Validar en los heroes existentes
    test('Debe retornar un héroe por id', () => {
        const id = 1
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })
    // Validar en caso que no exista el id
    test('Debe retornar undefined si el id no existe en la data', () => {
        const id = 100
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC'
        const byOwner = getHeroesByOwner(owner)
        const ownerData = heroes.filter(h => h.owner === owner)

        expect(byOwner).toEqual(ownerData)
    })

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel'
        const byOwner = getHeroesByOwner(owner).length
        const ownerLength = 2

        expect(byOwner).toBe(ownerLength)
    })
    
})
