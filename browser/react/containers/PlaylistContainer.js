import React from 'react';
import NewPlaylist from '../components/NewPlaylist'

class PlaylistContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {inputValue: ''}
    this.inputOnChange = this.inputOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  inputOnChange (value) {
    console.log(value)
    this.setState({
      inputValue: value
    })
  }

  handleSubmit (value) {
    console.log("submitted val", value)
  }

  render () {

    return (
      <div>
        <NewPlaylist
          inputValue = {this.state.inputValue}
          inputOnChange = {this.inputOnChange}
          handleSubmit = {this.handleSubmit}
        />
      </div>
    )
  }
}

export default PlaylistContainer;
