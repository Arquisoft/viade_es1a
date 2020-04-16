import React, {  Suspense } from 'react'
import ReactDOM from "react-dom";
import "./static/css/index.css";
//import * as serviceWorker from "./serviceWorker";
import './i18next'

const Main = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(
      () => import("./components/Main")
    );
  });

ReactDOM.render(
    <Suspense fallback="Loading">

        <Main />
    </Suspense>, document.getElementById("root")

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
