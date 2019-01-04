import React, { Component } from "react";
import "../styles/Footer.scss";
import EmailModal from "./EmailModal";

class Footer extends Component {

	constructor(props) {
		super(props);
		this.child = React.createRef();
	}

	onEmailClicked = (e) => {
		e.preventDefault()
		this.child.current.showModal();
	}

    render() {
        return (
            <div>
				<EmailModal ref={this.child} />
                <footer className="footer">
                    <span>
                        <a href="https://github.com/michaelchi1997" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/michael-chi/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </span>
                    <span>
                        <a onClick={this.onEmailClicked}><i className="far fa-envelope" ></i></a>
                    </span>
                </footer>
            </div>
        );
    }
}

export default Footer;