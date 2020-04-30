import React from "react";
import logo from "../static/images/404.jpg";

class NotFoundPage extends React.Component {

    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
            </div>
        )
    }
}

export default NotFoundPage;