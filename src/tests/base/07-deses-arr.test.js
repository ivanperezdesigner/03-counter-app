import {retornaArreglo} from '../../base/07-deses-arr'
import '@testing-library/jest-dom'

describe('Pruebas en desestructuración', () => {
    test('retornaArreglo() debe retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo() // ['ABC', 123]

        expect(letras).toEqual('ABC') // Para confirmar el valor
        expect(typeof letras).toEqual('string') // Para confirmar el tipo de argumneto 
        
        expect(numeros).toEqual(123)
        expect(typeof numeros).toEqual('number')
    })
})
