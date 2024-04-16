import React from 'react'; // import ядра React
import ReactDOM from 'react-dom/client'; // для монтирования нашего приложения
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> // компонент App отрисовывается в блоке root.
);


