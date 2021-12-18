import React from 'react';
import Axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialogUpdate extends React.Component {
    state = {
        open: false,
        id:this.props.id,
        name: this.props.name,
        price: this.props.price,
        category:this.props.category
    };

    handleChange = (value) => {
        this.setState(prevState => {
            return {...prevState, [value.target.id]:value.target.value}
        });
        
    }
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUpdate = () => {
    console.log(this.state)
    
    Axios.put("http://localhost:3001/products", {
        id:this.state.id,
        name:this.state.name,
        price:this.state.price,
        category:this.state.category
    })
    .then((response)=>{
        console.log(response)
    })
  }


  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Update
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update product</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Here's the place to change everything you want from said product!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              defaultValue={this.props.name}
              onChange={this.handleChange}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Price"
              type="number"
              defaultValue={this.props.price}
              onChange={this.handleChange}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="category"
              label="Category"
              defaultValue={this.props.category}
              onChange={this.handleChange}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate}color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}