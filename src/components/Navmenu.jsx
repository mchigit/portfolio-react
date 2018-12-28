import React, { Component } from "react";
import "../styles/Navmenu.scss";
import { Link } from "react-router-dom";

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
                            <Link to="/">Michael Chi</Link>
                        </div>
                        <div className="menu-items">
                            <ul className={ulClass}>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default Navmenu;