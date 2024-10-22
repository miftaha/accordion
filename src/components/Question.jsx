import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const Question = ({ title, info }) => {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <article className="rounded-lg shadow-lg border-2 m-3">
      <header className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        <button
          className="bg-blue-800 w-10 h-10 rounded-full text-xl flex justify-center items-center text-white"
          onClick={handleClick}
        >
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expand && <p className="pt-3 text-sm">{info}</p>}
    </article>
  )
}

export default Question
