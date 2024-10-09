import React from 'react'

const hola = ({name, lastName = "Valor por defecto"}) => {
        
    return (
        <h1>hola {name} {lastName}</h1>
    )
}

export default hola