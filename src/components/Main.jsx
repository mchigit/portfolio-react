import React, { Component } from "react";
import Navmenu from "./Navmenu";
import AppRouter from './Router'
import Footer from './Footer';


class Main extends Component {
    render() {
        return(
            <div>
                <Navmenu />
                <AppRouter />
                <Footer />
            </div>
        )
    }
}

export default Main;