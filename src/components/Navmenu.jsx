import React, { Component } from "react";
import "../styles/Navmenu.scss";

class Navmenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClass: false
        }
    }


    toggleItemClass = () => {
        this.setState((prevState) => ({
            showClass: !prevState.showClass
        }))
    }

    render() {

        const ulClass = this.state.showClass ? ["showing"]: [];

        return(
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x" onClick={this.toggleItemClass}></i>
                        </div>
                        <div className="title">
                            <a href="/">Michael Chi</a>
                        </div>
                        <div className="menu-items">
                            <ul className={ulClass}>
                                {/* <li><a href="#about">About</a></li> */}
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default Navmenu;