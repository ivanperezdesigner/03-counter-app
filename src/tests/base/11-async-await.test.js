const { getImagen } = require("../../base/11-async-await")
import '@testing-library/jest-dom'

describe('Pruebas con async-await & Fetch', () => {
    test('debe retornar el url de la imagen', async() => {
        const url = await getImagen()
        console.log(url)
        expect(url.includes('https://')).toBe(true)
    })
    
})
