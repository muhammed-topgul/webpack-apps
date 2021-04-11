import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');

const appElement = document.getElementById('app');

ReactDOM.render(<App/>, appElement);
