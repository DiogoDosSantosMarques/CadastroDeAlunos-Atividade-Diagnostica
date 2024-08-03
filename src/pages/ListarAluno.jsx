import React from 'react'

import Table from 'react-bootstrap/Table';

import { useState, useEffect } from 'react';
import AlunosList from './AlunosList';

const ListarAluno = () => {

    const [alunos, setAlunos] = useState([])


    const getAlunos = () => {
      try {
       
        const alunosString = localStorage.getItem('alunos');
        
        
        if (alunosString) {
         
          const alunosData = JSON.parse(alunosString);
        
          setAlunos(alunosData);
        } else {
          
          setAlunos([]);
        }
      } catch (error) {
        
        console.error('Erro ao obter os dados dos alunos:', error);
        setAlunos([]); 
      }
    };


    useEffect(() => {

        getAlunos()

    }, [])
  

  return (

    <div className='centralizar'>
    <Table striped bordered hover >
      <thead>
        <tr>
         
          <th>Nome</th>
          <th>Idade</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        
    {alunos.map((aluno) => (

      <AlunosList key={aluno.id} nome={aluno.nome} idade={aluno.idade} email={aluno.email} />

    ))}
        
      </tbody>
    </Table>
    </div>
  )
}

export default ListarAluno
