import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const FormularioDeContato = () => {

    const urlBase = "http://localhost:3000"

    const [nome, setNome] = useState("")
    const [contato, setContato] = useState("")
    const [mensagem, setMensagem] = useState("")

    const addContato = async (objetoParaEnviar) => {
        const response = await axios.post(`${urlBase}/contatos`, objetoParaEnviar)
        
        console.log("Contato adicionado com sucesso")
        alert("Contato adicionado com sucesso")
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const dadosDoForm = {
            nome: nome,
            contato: contato,
            mensagem: mensagem
        }

        addContato(dadosDoForm)

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        console.log(`O seguinte JSON será enviado via HTTP POST para o backend: ${jsonParaEnviarParaOBack}`)



    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type='text' id='nome' value={nome} onChange={(e) => setNome(e.target.value)} ></input>

            </div>

            <div>
                <label htmlFor="contato">Contato</label>
                <input type='text' id='contato' value={contato} onChange={(t) => setContato(t.target.value)} ></input>

            </div>

            <div>
                <label htmlFor="mensagem">mensagem</label>
                <textarea type='text' id='mensagem' value={mensagem} onChange={(s) => setMensagem(s.target.value)} ></textarea>

            </div>
            <button type='submit' >Enviar</button>
        </form>
        
    </>
  )
}

export default FormularioDeContato