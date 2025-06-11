import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLock, FaUser } from "react-icons/fa"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev === 0 ? 1 : 0))
    }, 4000) 
    return () => clearInterval(interval)
  }, [])

  const messages = [
    "Bem-vindo(a) de volta!",
    "Faça login para continuar sua jornada conosco."
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("Preencha todos os campos")
      return
    }
    console.log("dados enviados com sucesso")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300 ">
      <div className="flex rounded-xl bg-white/20 backdrop-blur-md overflow-hidden w-full max-w-4xl shadow-lg">
        <div className="w-1/2 hidden md:flex items-center justify-center bg-pink-400">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center p-10"
            >
              <h2 className="text-3xl font-bold text-white">{messages[currentMessage]}</h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="p-10 bg-pink-400 w-full space-y-8 text-white">
            <h1 className="text-2xl font-bold text-center">Página de Login</h1>

            <div className="relative">
              <FaUser className="absolute top-3 right-3" />
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="pl-2 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 right-3" />
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="pl-2 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <div>
                <a href="#" className="text-sm hover:underline">Esqueceu a senha?</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-pink-600 py-2 rounded-lg hover:bg-pink-200 hover:text-black transition duration-300 cursor-pointer">
              Entrar
            </button>

            <p className="text-sm text-center">
              Não tem conta? <a href="#" className="font-bold hover:underline">Cadastra-se</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
