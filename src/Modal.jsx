import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {

  const { id, title, state, url, createdAt, updatedAt } = props.formData;

  //*useState only sets default once
  const [titleValue, setTitleValue] = React.useState(title);
  const [stateValue, setStateValue] = React.useState(state);
  const [urlValue, setUrlValue] = React.useState(url);
  const [createdValue, setCreatedValue] = React.useState(createdAt);
  const [updatedValue, setUpdatedValue] = React.useState(updatedAt);

  const save = () => {
    // 1. validation

    console.log({
      title: titleValue,
      state: stateValue,
      url: urlValue,
      createdAt: createdValue,
      updatedAt: updatedValue
    });
    // 2. save data to redux
  }

  return (
    <div>
      <Dialog open={true} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new issue</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              required={true}
              id="standard-required"
              label="Title"
              className=""
              margin="normal"
              fullWidth={true}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
             <TextField
              required={true}
              id="standard-required"
              label="State"
              className=""
              margin="normal"
              fullWidth={true}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
            <TextField
              id="standard-name"
              label="Url"
              className=""
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="standard-name"
              label="Created At"
              className=""
              value={createdValue}
              onChange={(e) => setCreatedValue(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="standard-name"
              label="Updated At"
              className=""
              value={updatedValue}
              onChange={(e) => setUpdatedValue(e.target.value)}
              margin="normal"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions className="Modal-DialogActions">
          <Button color="primary" onClick={save}>
            Save
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}