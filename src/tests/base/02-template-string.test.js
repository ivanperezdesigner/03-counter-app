import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string.js'

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo() debe retornar Hola + nombre ', () => {
        const nombre = 'Ivan'
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola ' + nombre)
        console.log(saludo)
    })

    // GetSaludo() debe retornar Hola Luisa si no hay argumento en el nombre
    test('getSaludo() debe retornar Hola Luisa si no hay argumento en el nombre ', () => {
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Luisa')
        console.log(saludo)
    })
    
})
