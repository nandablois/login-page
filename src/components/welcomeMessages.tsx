import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeMessages() {
    const [currentMessage, setCurrentMessage] = useState(0)

    const messages = ["Seja bem-vindo(a) ! ",
        "Faça login para continuar"]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev === 0 ? 1 : 0))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-1/2 hidden md:flex items-center backdrop-blur-xl bg-white/30 font-sans justify-center bg-pink-400">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center p-10"
                >
                    <h2 className="text-3xl font-bold font-quicksand text-pink-500">
                        {messages[currentMessage]}
                    </h2>
                </motion.div>
            </AnimatePresence>
        </div>

    )
}