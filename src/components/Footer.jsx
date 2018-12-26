import React, { Component } from "react";
import "../styles/Footer.scss";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <span>
                        <a href="https://github.com/michaelchi1997" target="_blank"><i className="fab fa-github"></i></a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/michael-chi/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                    </span>
                </footer>
            </div>
        );
    }
}

export default Footer;