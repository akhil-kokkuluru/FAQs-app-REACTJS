import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isQuestionOpen: true}

  onbuttonClick = () => {
    this.setState(prevValue => ({
      isQuestionOpen: !prevValue.isQuestionOpen,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isQuestionOpen} = this.state
    console.log(faqsList)
    return (
      <div className="totalBG">
        <div className="contentBG">
          <h1 className="heading">FAQs</h1>
          <ul className="faqlistItems">
            {faqsList.map(item => (
              <FaqItem
                key={item.id}
                faqsList={item}
                isQuestionOpen={isQuestionOpen}
                onbuttonClick={this.onbuttonClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
