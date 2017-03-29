import React from 'react';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

class FilterableArtistsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {inputValue: '', filteredArtistList: this.props.artists}
    this.inputOnChange = this.inputOnChange.bind(this)
    this.filterArtists = this.filterArtists.bind(this)
  }

  componentWillReceiveProps () {
    console.log(this.props.artists)
    this.setState({filteredArtistList: this.props.artists})
  }

  inputOnChange (value) {
    console.log(value, this.state.filteredArtistList)
    this.setState({
      filteredArtistList: this.filterArtists(value)
    })
  }

  filterArtists (string) {
    console.log(this.state.filteredArtistList)
    this.state.filteredArtistList.filter((artist) => {
      return artist.match(string);
    })

  }

  render () {

    // const props = Object.assign({}, this.state, {
    //   toggleOne: this.toggleOne,
    //   toggle: this.toggle,
    //   selectAlbum: this.selectAlbum,
    //   selectArtist: this.selectArtist
    // });
    return (
      <div>
        <FilterInput inputOnChange = {this.inputOnChange}/>
        <Artists artists = {this.props.artists} />
      </div>
    )
  }
}

export default FilterableArtistsContainer;
