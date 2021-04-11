import React from 'react';
import ReactDOM from 'react-dom';
// import './style/style.css';
import './style/style.scss';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!../public/index.html');

// const template = React.createElement('h1', {className: 'title'}, 'Hello World!');
const App = () => {
    return (<h1>Hello World!</h1>)
}

ReactDOM.render(<App/>, document.getElementById('root'));