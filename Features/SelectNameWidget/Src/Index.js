import React from 'react';
import ReactDOM, {render} from 'react-dom';

// import HOC for the SelectNameWidget application
import SelectNameWidgetHOC from './Components/SelectNameWidgetHOC.js';

// locate all DOM nodes with the class "selectNameWidgetContainer"
// render a copy of the react application inside each of them
let injectShowNameWidget = function() {
    let containerDiv = document.getElementsByClassName('selectNameWidgetContainer');

    for (let i = 0; containerDiv.length > i; i++) {
        render(<SelectNameWidgetHOC />, containerDiv[i]);
    }
};

// run the react app injection once the DOM has finished loading
window.addEventListener('load', () => {
    injectShowNameWidget();
});
