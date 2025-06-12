
import LoginForm from "./components/loginForm"
import WelcomeMessages from "./components/welcomeMessages"

export default function App() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300 ">
      <div className="flex rounded-xl bg-white/60 backdrop-blur-md overflow-hidden w-full max-w-4xl shadow-lg">
        <WelcomeMessages />
        <LoginForm />
      </div>
    </div>
  )
}
