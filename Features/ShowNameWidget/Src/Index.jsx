import React from 'react';
import ReactDOM, {render} from 'react-dom';

// import HOC for ShowNameWidget application
import ShowNameWidgetHOC from './Components/ShowNameWidgetHOC.jsx';

// locate all DOM nodes with the class "ShowNameWidgetContainer"
let injectShowNameWidget = function() {
    let containerDiv = document.getElementsByClassName('ShowNameWidgetContainer');

    // scan for all instances of the target class name and render a copy of the
    // react application inside each of them
    for (let i = 0; containerDiv.length > i; i++) {
        render(<ShowNameWidgetHOC />, containerDiv[i]);
    }
};

// run the react app injection once the DOM has finished loading
window.addEventListener('load', () => {
    injectShowNameWidget();
});
