const ATTRIBUTESYMBOL = Symbol('attribute');
const PROPERTYSYMBOL = Symbol('property');
const StATESYMBOL = Symbol("state");
const EVENTSYMBOL = Symbol("event");

import css from '../css/header.css';

let styleElement = document.createElement('style');
styleElement.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(styleElement);

export default class Header {
    constructor() {
        this[ATTRIBUTESYMBOL] = Object.create(null);
        this[PROPERTYSYMBOL] = Object.create(null);
        this[StATESYMBOL] = Object.create(null);
        this[EVENTSYMBOL] = Object.create(null);

        this.create();

    }
    

    create() {
        this.root = document.createElement('div');
        this.root.classList.add("header");
        this.root.classList.add("root");

        // this.root.
    }

    appendTo(ele) {
        ele.appendChild(this.root);
        this.mounted();
    }

    appendChild(child){
		child.appendTo(this.root);
	}

    mounted() {

    }

    update() {

    }

    unmounted() {

    }






}