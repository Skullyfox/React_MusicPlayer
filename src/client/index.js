/**
 * Bundle entry point for the app.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import "babel-polyfill";

import React            from "react";
import ReactDOM         from "react-dom";

import AppContainer     from "./containers/AppContainer.jsx";

window.FontAwesomeConfig={searchPseudoElements:true}
ReactDOM.render(<AppContainer />, document.getElementById("app"));
