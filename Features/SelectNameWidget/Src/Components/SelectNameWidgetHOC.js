import React, { Component } from 'react';

// import child view components
import ShowNameView from './ShowName/ShowNameView.js';
import NameDropdownListView from './NameDropdownList/NameDropdownListView.js';

export default class SelectNameWidgetHOC extends Component {
    render () {
        return (
            <div className="selectNameWidgetHOC">
                <NameDropdownListView />
                <ShowNameView />
            </div>
        );
    }
}
