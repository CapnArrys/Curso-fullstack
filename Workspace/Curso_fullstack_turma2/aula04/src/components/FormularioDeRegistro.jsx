import React from 'react'
import { useState } from 'react'

const FormularioDeRegistro = () => {
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")


    const validarSenha = (senha, confirmarSenha) => {
        if (senha !== confirmarSenha) {
            
            return false
        }
        return true   
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validarSenha(senha, confirmarSenha)) {
            alert("As senhas não correspondem!")
            return;
          }

        const dadosDoRegistro = {
            usuario: usuario,
            email: email,
            senha: senha,
            endereco: endereco,
            telefone: telefone
        }

        

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoRegistro)

        console.log(`O seguinte JSON será enviado via HTTP POST para o backend: ${jsonParaEnviarParaOBack}`)
    }

    

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usuario">Usuário</label>
                <input type='text' id='usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} ></input>

            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>

            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input type='password' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} ></input>
                

            </div>

            <div>
                <label htmlFor="confirmarsenha">Confirmar Senha</label>
                <input type='password' id='confirmarsenha' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} ></input>
                

            </div>

            <div>
                <label htmlFor="endereco">Endereço</label>
                <input type='text' id='endereco' value={endereco} onChange={(e) => setEndereco(e.target.value)} ></input>
                

            </div>

            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type='text' id='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} ></input>
                

            </div>

            
            <button type='submit' >Enviar</button>
        </form>
        
    </>
  )

}

export default FormularioDeRegistro