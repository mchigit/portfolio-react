import React, { Component } from "react";
import "../styles/Footer.scss";
import Dialog from '@material-ui/core/Dialog';
import ModalContent from './ModalContent';


class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true
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
                
                    <ModalContent handleClose={this.onModalClose} />
                </Dialog>
            </div>
        );
    }
}

export default Footer;