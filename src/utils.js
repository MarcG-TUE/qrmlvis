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

function autoLayout(layout) {
    window.QrmlVisGraphComponent.autoLayout(layout)
}


function applyLayout(layout) {
    return window.QrmlVisGraphComponent.applyLayout(layout)
}

function getHierarchy(layout) {
    return window.QrmlVisGraphComponent.getHierarchy(layout)
}


// external interface to the library
export default {
    doRunOn: (elementID, model) => runOn(elementID, model),
    getLayout: () => getLayout(),
    applyLayout: (layout) => applyLayout(layout),
    autoLayout: (layout) => autoLayout(layout),
    getHierarchy: (layout) => getHierarchy(layout)
}