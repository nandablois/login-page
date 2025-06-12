
import LoginForm from "./components/loginForm"
import WelcomeMessages from "./components/welcomeMessages"

export default function App() {
  const backgroundImage = "https://picsum.photos/1600/900"

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        
      <div className="flex rounded-xl overflow-hidden w-full max-w-4xl shadow-lg">
        <WelcomeMessages />
        <LoginForm />
      </div>
    </div>

  )
}

