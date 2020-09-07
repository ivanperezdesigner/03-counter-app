const { default: CounterApp } = require("../CounterApp")
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Pruebas para CounterApp', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('Debe mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)
        const initialValue = wrapper.find('h2').text().trim()
        expect(initialValue).toBe('100')
    })
    
    test('Debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click')
        const initialValue = wrapper.find('h2').text().trim()
        expect(initialValue).toBe('1')
    })

    test('Debe decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click')
        const initialValue = wrapper.find('h2').text().trim()
        expect(initialValue).toBe('-1')
    })

    test('Debe colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click') // Referencia al boton reset
        const initialValue = wrapper.find('h2').text().trim()
        expect(initialValue).toBe('105')
    })
    
})