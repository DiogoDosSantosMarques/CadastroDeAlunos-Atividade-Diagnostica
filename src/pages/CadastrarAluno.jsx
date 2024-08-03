import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListarAluno from './ListarAluno';



const CadastrarAluno = () => {


    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

   


    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        
        const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    
        
        alunos.push({ nome, idade, email });
    
       
        localStorage.setItem('alunos', JSON.stringify(alunos));
    
        
        
    
        
        resetCampos();
      };


    const resetCampos = () => {

        setNome("");
        setIdade("");
        setEmail("");

    }


  return (
    <>
    <Form className="centralizar" onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="coloque seu nome: " onChange={(e) => setNome(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Idade</Form.Label>
      <Form.Control type="number" placeholder="coloque sua idade"  onChange={(e) => setIdade(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="coloque seu email"  onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>


    <Button variant="dark" type="submit">
      Enviar
    </Button>
  </Form>

  <ListarAluno />

  </>
  )
}

export default CadastrarAluno
