import React from 'react';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

class FilterableArtistsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {inputValue: ''}
    this.inputOnChange = this.inputOnChange.bind(this)
    this.filterArtists = this.filterArtists.bind(this)
  }

  inputOnChange (value) {
    this.setState({
      inputValue: value
    })
  }

  filterArtists (string) {
    return this.props.artists.filter((artist) => {
      return artist.name.match(new RegExp(string, 'i'));
    })
  }

  render () {

    let filteredArtistsList = this.filterArtists(this.state.inputValue)
    return (
      <div>
        <FilterInput inputOnChange = {this.inputOnChange} />
        <Artists artists = {filteredArtistsList} />
      </div>
    )
  }
}

export default FilterableArtistsContainer;
