import React from 'react'
import Hola from './components/hola.jsx'
import './App.css'

function App() {
  const nombre = 'Nico'
  const usuarios = [
    { id: 1, nombre: 'Juan', mail: 'juan@example.com' },
    { id: 2, nombre: 'Ana', mail: 'ana@example.com' },
    { id: 3, nombre: 'Pedro', mail: 'pedro@example.com' }
  ]

  return (
    <>
      <Hola name={nombre} lastName="firpo"/>
      <div>     
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre} - {usuario.mail}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
