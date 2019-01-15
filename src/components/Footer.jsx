import React, { Component } from "react";
import "../styles/Footer.scss";
import Dialog from '@material-ui/core/Dialog';
import ModalContent from './ModalContent';
import Snackbar from '@material-ui/core/Snackbar';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            showNoti: false,
            notiMessage: ''
        };
    }

    onContactClicked = (e) => {
        e.preventDefault();
        this.setState({
            modalOpen: true
        });
    }

    onModalClose = () => {
        this.setState({
            modalOpen: false
        });
    }

    showNotification = (isSuccess) => {
        if (isSuccess) {
            this.setState({
                showNoti: true,
                notiMessage: "Email Sent!"
            });
        } else {
            this.setState({
                showNoti: true,
                notiMessage: "Sorry, there was an error. Please try again later."
            });
        }
    }

    closeNoti = () => {
        this.setState({
            showNoti: false
        })
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span>
                        <a href="https://github.com/michaelchi1997" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/michael-chi/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </span>
                    <span>
                        <a href="#" onClick={this.onContactClicked}><i className="far fa-envelope"></i></a>
                    </span>
                </footer>
                <Dialog open={this.state.modalOpen} onClose={this.onModalClose}>
                    <ModalContent handleClose={this.onModalClose} showNotification={this.showNotification} />
                </Dialog>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    message={<span id="message-id">{this.state.notiMessage}</span>}
                    open={this.state.showNoti}
                    autoHideDuration={4000}
                    onClose={this.closeNoti}
                    />
            </div>
        );
    }
}

export default Footer;