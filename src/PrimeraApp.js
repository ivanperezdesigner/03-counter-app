import React from 'react'
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react' // Fragment se usa para no generar un div vacio adicional


// const PrimeraApp = ({saludo='Hola'}) => { // Se pueden poner valores por defecto en caso de no enviar ningún valor
const PrimeraApp = ({saludo, subtitulo}) => {
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    ); 
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired // Tipo y obligatoriedad de las props
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtítulo por defecto' // Poner propiedades por defecto
}

export default PrimeraApp