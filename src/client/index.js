/**
 * Bundle entry point for the app.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import "babel-polyfill";

import React            from "react";
import ReactDOM         from "react-dom";

import App     from "./App.jsx";

window.FontAwesomeConfig={searchPseudoElements:true}
ReactDOM.render(<App />, document.getElementById("app"));
