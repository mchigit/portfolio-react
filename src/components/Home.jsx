import React, { Component } from "react";
import "../styles/Home.scss";
import ReactFullpage from '@fullpage/react-fullpage';


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
            <ReactFullpage
            licenseKey="asd"
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    {this.homeSection()}
                  </div>
                  <div className="section">
                    <p>Section 2</p>
                  </div>
                    
                </ReactFullpage.Wrapper>
              );
            }}
          />
        );
    }
}

export default Home;