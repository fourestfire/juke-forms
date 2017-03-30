import React from 'react';
import Songs from './Songs'

class SinglePlaylist extends React.Component {

  componentDidMount () {
    const selectPlaylist = this.props.selectPlaylist;
    const playlistId = this.props.routeParams.playlistId;

    selectPlaylist(playlistId);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.playlistId !== this.props.routeParams.playlistId) {
      const selectPlaylist = this.props.selectPlaylist;
      const playlistId = nextProps.routeParams.playlistId;
      selectPlaylist(playlistId);
    }
  }

  render () {

    const playlist = this.props.selectedPlaylist
    console.log(playlist)
    return (
          <div>
            <h3>{ playlist.name }</h3>
            <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
              { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
            <hr />
          </div>
      )
  }
}

export default SinglePlaylist;
