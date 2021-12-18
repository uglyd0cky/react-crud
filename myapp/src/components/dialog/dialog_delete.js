import React from 'react';
import Axios from "axios";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialogDelete extends React.Component {
    state = {
        open: false,
        id:this.props.id
    };

  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
      console.log(this.state.id)
    Axios.delete("http://localhost:3001/products", { data:{
        id:this.state.id
    }
        
    })
    .then((response)=>{
        console.log(response)
    })
  }


  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Delete
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete product</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Are you sure you want to delete this product?!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete}color="primary">
              Yes please
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}