import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import grey from '@material-ui/core/colors/grey';

export default class FormDialog extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      color: grey[900]
    }
  }
  
  render(){
    return (
      <div>
        <Button variant="outlined" color={this.color} onClick={this.props.ClickOpen}>
          Add To Do List
        </Button>
        <Dialog open={this.props.show_dialog} onClose={this.props.ClickClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{this.props.method} to do list</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              onChange={this.props.UpdateForm}
              value={this.props.form.text}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.ClickAdd} color={this.color}>
              {this.props.method}
            </Button>
            <Button onClick={this.props.ClickClose} color={this.color}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}