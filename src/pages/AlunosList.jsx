import React from 'react'

const AlunosList = ({nome, idade, email}) => {
  return (
    <tr>
        
            <td>{nome}</td>
            <td>{idade}</td>
            <td>{email}</td>
    </tr>
  )
}

export default AlunosList
