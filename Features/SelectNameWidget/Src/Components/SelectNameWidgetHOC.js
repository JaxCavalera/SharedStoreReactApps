import React, { Component } from 'react';

// import child Container components
import ShowNameContainer from './ShowName/ShowNameContainer.js';
import NameDropdownListContainer from './NameDropdownList/NameDropdownListContainer.js';

export default class SelectNameWidgetHOC extends Component {
    render () {
        return (
            <div className="selectNameWidgetHOC">
                <NameDropdownListContainer />
                <ShowNameContainer />
            </div>
        );
    }
}
