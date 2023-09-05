import React from 'react';
import './Form.css';
import { useState } from 'react'

const Form = () => {
    const [nome, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulário");
        console.log(nome, email, mensagem);

        setName("");
        setEmail("");
        setMensagem("");
    }
  return (
    <div>
      <form onSubmit= { handleSubmit } >
        <label>
            <span>Nome: </span>
            <input type="text" name='nome' id='nome' placeholder='Insira seu nome' onChange={(e)=> setName(e.target.value)} value={nome}/>
        </label>

        <label>
            <span>Email: </span>
            <input type="email" name='email' id='email' placeholder='Insira seu email' onChange={(e)=> setEmail(e.target.value)} value={email} />
        </label>

        <label>
            <span>Mensagem: </span>
            <textarea name="mensagem" id="mensagem" cols="30" rows="10" onChange={(e)=> setMensagem(e.target.value)} value={mensagem}></textarea>
        </label>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Form
