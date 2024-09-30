import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quizz from './quizz'
import 'tailwindcss/tailwind.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="quizz-container bg-quizz-white text-quizz-black p-quizz-padding rounded-quizz-radius">
        <Quizz />
      </div>
    </div>
  )
}

export default App