import React, { Component } from "react";
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import "../styles/ModalContent.scss";
import Button from '@material-ui/core/Button';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

const DialogActions = withStyles(theme => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit,
    },
  }))(MuiDialogActions);

class ModalContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <DialogTitle onClose={this.props.handleClose} id="form-dialog-title">Send me an email!</DialogTitle>
                <DialogContent>
                    <div className="email-dialog">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            className="text-fields"
                            placeholder="please enter your name :D"
                            required={true}
                        />
                        <TextField
                            id="outlined-name"
                            label="Email Address"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            variant="outlined"
                            className="text-fields"
                            placeholder="how you prefer to be contacted"
                            required={true}
                        />
                        <TextField
                            id="outlined-name"
                            label="Message"
                            value={this.state.message}
                            onChange={this.handleChange('message')}
                            margin="normal"
                            variant="outlined"
                            className="text-fields"
                            multiline={true}
                            required={true}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button className="send-email" variant="outlined" color="default">Send Email</Button>
                </DialogActions>
            </div>
        );
    }
}

export default ModalContent;