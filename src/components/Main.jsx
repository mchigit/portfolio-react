import React, { Component } from "react";

import AppRouter from './Router'
import Footer from './Footer';


class Main extends Component {
    render() {
        return(
            <div>
                <AppRouter />
                <Footer />
            </div>
        )
    }
}

export default Main;