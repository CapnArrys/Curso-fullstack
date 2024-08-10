import React from 'react'
import axios from 'axios'

const AdicionarAluno = () => {


        const urlBase = "http://localhost:3000"

        const addAluno = async () => {

            const response = await axios.post(`${urlBase}/alunos`, {
                nome: "fulano",
                email: "fulano@gmail.com"
            })
            console.log("Aluno adicionado com sucesso")
            alert("Aluno cadastrado com sucesso")

        }

    

  return (
    <div>
        <button onClick={addAluno}>adicionar fulano</button>
    </div>
  )
}

export default AdicionarAluno