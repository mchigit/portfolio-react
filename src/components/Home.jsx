import React, { Component } from "react";
import "../styles/Home.scss";


class Home extends Component {

    homeSection = () => {
        return (
            <div>
                <div className="container">
                     <div className="intro">
                         <h1>Hi, My name is Michael Chi</h1>
                         <p>I'm a full-stack software developer</p>
                     </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.homeSection()}
            </div>
        );
    }
}

export default Home;