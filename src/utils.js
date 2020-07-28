import React from 'react';
import ReactDOM from "react-dom";
import { Graph } from "../src/index.js";

function runOn(elementID, model) {
    let container = document.getElementById(elementID);
    window.QrmlVisGraphComponent = ReactDOM.render(<Graph model={model} />, container);    
}

function getLayout() {
    // return window.QrmlVisGraphComponent.serializeLayout()
    return window.QrmlVisGraphComponent.getLayout()
}

function applyLayout(layout) {
    return window.QrmlVisGraphComponent.applyLayout(layout)
}


export default {
    doRunOn: (elementID, model) => runOn(elementID, model),
    getLayout: () => getLayout(),
    applyLayout: (layout) => applyLayout(layout)
}