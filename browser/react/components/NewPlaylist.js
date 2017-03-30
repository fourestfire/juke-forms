import React from 'react';

const NewPlaylist = (props) => {

return (
    <div className="well">
      <form
        onSubmit={((event) => {
          console.log('we clicked submit')
          event.preventDefault();
          props.handleSubmit(props.inputValue)
        })}
        className="form-horizontal">
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                onChange={((event) => props.inputOnChange(event.target.value))}
                className="form-control" type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewPlaylist;
