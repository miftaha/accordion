import { useState } from 'react'
import data from './data'
import Questions from './components/Questions'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className="min-h-screen bg-blue-200 flex justify-center items-center py-6">
      <Questions questions={questions} />
    </main>
  )
}

export default App
