import {Component} from 'react'

import {CustomButton, MemeContainer, Para} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    memeVisible: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
  }

  onChangeImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onGenerateMeme = () => {
    this.setState({memeVisible: true})
  }

  render() {
    const {memeVisible, imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <>
        <h1 className="heading">Meme Generator</h1>
        <div className="bg-container">
          <form className="form">
            <label htmlFor="image">Image Url</label>
            <input
              type="text"
              id="image"
              value={topText}
              onChange={this.onChangeImage}
            />

            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              id="topText"
              value={topText}
              onChange={this.onChangeBottomText}
            />

            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />

            <label htmlFor="font">Font Size</label>
            <select value={fontSize} onChange={this.onChangeFontSize} id="font">
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>

            <CustomButton type="button" onClick={this.onGenerateMeme}>
              Generate
            </CustomButton>
            <MemeContainer visible={memeVisible} data-test-id="meme">
              <Para size={`${fontSize}px`}>{topText}</Para>
              <Para size={`{fontSize}px`}>{bottomText}</Para>
            </MemeContainer>
          </form>
        </div>
      </>
    )
  }
}

export default MemeGenerator
