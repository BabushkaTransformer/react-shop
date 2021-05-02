import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./store";
import "./scss/app.scss";
import App from "./containers/App";

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
