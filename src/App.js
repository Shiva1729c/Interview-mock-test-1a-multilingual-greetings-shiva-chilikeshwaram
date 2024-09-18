import {Component} from 'react'
import TabItem from './components/TabItem'
import LanguageCard from './components/LanguageCard'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeImageUrl: languageGreetingsList[0].imageUrl,
    activeImageAltText: languageGreetingsList[0].imageAltText,
  }

  setActiveImage = (imageUrl, imageAltText) => {
    this.setState({activeImageUrl: imageUrl, activeImageAltText: imageAltText})
  }

  renderTabItem = () => {
    const {activeImageUrl} = this.state
    return (
      <ul className="tab-item-container">
        {languageGreetingsList.map(eachGreeting => (
          <TabItem
            tabDetails={eachGreeting}
            key={eachGreeting.id}
            setActiveImage={this.setActiveImage}
            isActive={activeImageUrl === eachGreeting.imageUrl}
          />
        ))}
      </ul>
    )
  }

  renderLanguageCard = () => {
    const {activeImageUrl, activeImageAltText} = this.state
    return (
      <div className="language-card-container">
        <LanguageCard
          activeImageUrl={activeImageUrl}
          activeImageAltText={activeImageAltText}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="main-heading">Multilingual Greetings</h1>
          {this.renderTabItem()}
          {this.renderLanguageCard()}
        </div>
      </div>
    )
  }
}

export default App
