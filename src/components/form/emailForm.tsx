
import { FaUser } from "react-icons/fa"

type EmailFormProps = {
    email: string,
    setEmail: (email: string) => void
}

export default function EmailForm({ email, setEmail }: EmailFormProps) {
    return (
        <div className="relative">
            <FaUser className="absolute top-3 right-3" />
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="pl-2 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
        </div>
    )
}