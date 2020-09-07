describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los strings', () => {
    
        // 1. Inizialización
        const mensaje = 'hola mundo'
    
        // 2. Estímulo
        const mensaje2 = `hola mundo`
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
    
    })
})



