import React from 'react';
import NewPlaylist from '../components/NewPlaylist'
import SinglePlaylist from '../components/SinglePlaylist'
import {initialInputValue} from '../utils'
import axios from 'axios';

class PlaylistContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {inputValue: initialInputValue, btnSwitch: true}
    this.inputOnChange = this.inputOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  inputOnChange (value) {
    this.setState({
      inputValue: value
    })
  }

  toggleButton (value) {
      this.setState({
        btnSwitch: (value.length > 16 || value.length < 1)
      })
  }

  handleSubmit () {
    console.log(this.props)
    this.props.savePlaylist(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render () {
// <SinglePlaylist playlist = {this.props.playlists}/>
    return (
      <div>
        <div>
          <NewPlaylist
            btnSwitch = {this.state.btnSwitch}
            inputValue = {this.state.inputValue}
            inputOnChange = {this.inputOnChange}
            handleSubmit = {this.handleSubmit}
            toggleButton = {this.toggleButton}
          />
        </div>
      </div>
    )
  }
}

export default PlaylistContainer;
