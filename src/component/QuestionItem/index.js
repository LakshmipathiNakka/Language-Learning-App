import './index.css'

const QuestionItem = props => {
  const {questionDetails} = props
  const {Question, answers, id} = questionDetails
  return (
    <li className="question-list">
      <p>{Question}</p>
      <div>
        <input className="option1" type="radio" value={1} name={id} />
        {answers[0].answer1}
        <br />
        <input className="option1" type="radio" value={2} name={id} />
        {answers[0].answer2}
      </div>
    </li>
  )
}

export default QuestionItem
