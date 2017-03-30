import React from 'react';
import {initialInputValue} from '../utils'

const NewPlaylist = (props) => {
return (
    <div className="well">
      <form
        onSubmit={((event) => {
          console.log('we clicked submit')
          event.preventDefault();
          props.handleSubmit()
        })}
        className="form-horizontal">
        <fieldset>
          <legend>New Playlist</legend>
          {props.inputValue !== initialInputValue && props.btnSwitch ? <div className="alert alert-warning">Please enter a name</div> : null}
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                value = {props.inputValue === initialInputValue ? "" : props.inputValue}
                onChange={(event) => {
                  props.inputOnChange(event.target.value)
                  props.toggleButton(event.target.value)
                }}
                className="form-control" type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button disabled = {props.btnSwitch} type="submit" className="btn btn-success" id="submitBtn">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewPlaylist;
