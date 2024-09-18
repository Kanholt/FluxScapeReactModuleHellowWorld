// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import MyCustomComponent from './MyCustomComponent';

const MyCustomElement = reactToWebComponent(MyCustomComponent, React, ReactDOM);

customElements.define('my-custom-element', MyCustomElement);
