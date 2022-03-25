import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {openedEl: []}

  onbuttonClick = id => {
    const {openedEl} = this.state
    if (openedEl.includes(id)) {
      this.setState({openedEl: openedEl.filter(arg => arg !== id)})
    } else {
      this.setState(prevValue => ({
        openedEl: [...prevValue.openedEl, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {openedEl} = this.state
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
                isQuestionOpen={openedEl.includes(item.id)}
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
