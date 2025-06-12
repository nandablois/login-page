import { FaLock } from "react-icons/fa";

type passwordFormProps = {
    password: string
    setPassword: (password: string) => void
}
export default function PasswordForm({ password, setPassword }: passwordFormProps) {
    return (


        <div className="relative">
            <FaLock className="absolute top-3 right-3" />
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="pl-2 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <div>
                <a href="#" className="text-sm hover:underline">Esqueceu a senha?</a>
            </div>
        </div>

    )
}