import './index.css'

const FaqItem = props => {
  const {faqsList, isQuestionOpen, onbuttonClick} = props
  const {questionText, answerText} = faqsList
  const answerContainerEl = (
    <div className="answerContainer">
      <hr className="linecss" />
      <p className="answercss">{answerText}</p>
    </div>
  )
  let imgUrl
  let altText
  if (isQuestionOpen) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    altText = 'minus'
  } else {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    altText = 'plus'
  }

  const onclickingPlus = () => {
    onbuttonClick()
  }

  return (
    <li className="faqItem">
      <div className="questionContainer">
        <p className="question">{questionText}</p>
        <button className="buttoncss" type="button" onClick={onclickingPlus}>
          <img alt={altText} className="imgcss" src={imgUrl} />
        </button>
      </div>
      {isQuestionOpen && answerContainerEl}
    </li>
  )
}

export default FaqItem
