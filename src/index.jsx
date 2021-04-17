import "./index.css"
import React from "react"
import {render} from "react-dom"
import App from "./components/App/index.jsx";
import {store} from "./reducers/index"
import {Provider} from "react-redux";

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)