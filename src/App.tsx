
import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('dados enviados com sucesso')
    if (!email || !password) {
      alert('Preencha todos os campos')
      return
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit} >
      <h1 className="text-2xl font-bold">Página de Login</h1>
        <div>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail" />

        </div>
        <div>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha" />
          <div>
            <a href="#">Esqueceu a senha?</a>
          </div>
        </div>
        <button type="submit">Entrar</button>
        <p>Não tem conta? <a href="#">Cadastra-se</a></p>
      </form>
    </div>
  )
}

export default App
