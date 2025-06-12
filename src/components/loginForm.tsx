import { useState } from "react"
import EmailForm from "./form/emailForm"
import PasswordForm from "./form/passwordForm"


export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError("Preencha todos os campos")
            return
        }
    }

    return (
    <div className="md:w-1/2 font-sans flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="p-10 bg-pink-400 backdrop-blur-md bg-white/10 font-quicksand w-full space-y-8 text-white">
            <h1 className="text-2xl font-bold text-center">Página de Login</h1>
            <EmailForm email={email} setEmail={setEmail} />
            <PasswordForm password={password} setPassword={setPassword} />
            {error && (<p className="text-red-600 text-center font-bold">
                {error}
            </p>)}
            <button type="submit" className="w-full bg-pink-600 py-2 rounded-lg hover:bg-pink-200 hover:text-black transition duration-300 cursor-pointer">
                Entrar
            </button>
            <p className="text-sm text-center">
                Não tem conta? <a href="#" className="font-bold hover:underline">Cadastra-se</a>
            </p>
        </form>
    </div>
    )
}