import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {value: false}

  onClickingEmoji = () => {
    this.setState({value: true})
  }

  render() {
    const {value} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let replyPage
    let homePage
    if (value === true) {
      replyPage = (
        <div className="reply-container">
          <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
          <h1 className="reply">Thank You!</h1>
          <p className="reply-message">
            We will use your feedback to improve out customer support
            performance.
          </p>
        </div>
      )
    } else {
      homePage = (
        <div>
          <h1 className="main-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="ul-container">
            <ul>
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <div>
                    <img
                      src={eachEmoji.imageUrl}
                      className="emoji"
                      onClick={this.onClickingEmoji}
                      alt={eachEmoji.name}
                    />
                    <p className="emoji-name">{eachEmoji.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="main-container">
        <div className="sub-container">
          {homePage}
          {replyPage}
        </div>
      </div>
    )
  }
}

export default Feedback
