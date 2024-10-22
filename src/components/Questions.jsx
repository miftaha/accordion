/* eslint-disable react/prop-types */
import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <section className="w-[90vw] mx-0 my-[5rem] rounded-md max-w-[800px] p-[3rem] bg-white">
      <h1 className="text-4xl font-normal text-center tracking-wide">
        Questions
      </h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />
      })}
    </section>
  )
}

export default Questions
