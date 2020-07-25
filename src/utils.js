import React from 'react';
import ReactDOM from "react-dom";
import { Graph } from "../src/index.js";

function runOn(elementID, model) {
    let container = document.getElementById(elementID);
    ReactDOM.render(<Graph model={model} />, container);    
}


export default {doRunOn: (elementID, model)=> runOn(elementID, model)}