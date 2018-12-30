import React, { Component } from "react";
import "../styles/Navmenu.scss";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

class Navmenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClass: false
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    toggleItemClass = () => {
        this.setState((prevState) => ({
            showClass: !prevState.showClass
        }))
    }

    render() {

        const ulClass = this.state.showClass ? ["showing"] : [];

        return (
            <Headroom>
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x" onClick={this.toggleItemClass}></i>
                        </div>
                        <div className="title">
                            <Link onClick={this.scrollToTop} to="/">Michael Chi</Link>
                        </div>
                        <div className="menu-items">
                            <ul className={ulClass}>
                                {/* <li><Link to="#work">Work</Link></li>
                                <li><Link to="#projects">Projects</Link></li>
                                <li><Link to="#contact">Contact</Link></li> */}
                                <li><a className="navlinks" onClick={this.toggleItemClass} href="#work">Work</a></li>
                                <li><a className="navlinks" onClick={this.toggleItemClass} href="#projects">Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Headroom>
        )
    }
}

export default Navmenu;