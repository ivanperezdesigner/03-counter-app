// const { render } = require("@testing-library/react")
const { default: PrimeraApp } = require("../PrimeraApp")
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp /> ', () => {
    // test('Debe mostrar el mensaje "Hola"', () => {
    //     const saludo = 'Hola'
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument()
    // })
    
    test('Debe mostrar el componente <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola'
        const wraper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wraper).toMatchSnapshot()
    })
    
    test('Debe mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola'
        const subTitulo = 'Subtítulo de ejemplo'
        const wraper = shallow(<PrimeraApp saludo={saludo} subtitulo={subTitulo}/>)
        
        const textoParrafo = wraper.find('p').text()
        expect(textoParrafo).toBe(subTitulo)
    })
    
    
})
