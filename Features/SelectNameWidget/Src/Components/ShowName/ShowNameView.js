import React, { Component } from 'react';

// import actions file for interfacing with the store
import { CheckNameValue } from './ShowNameActions.js';

// import display components
import ShowNameDisplay from './ShowNameDisplay.js';

export default class ShowNameView extends Component {
    render () {
        // will replace 'nick' with a another action like SelectedDropdownName()
        let nameValue = CheckNameValue('nick').name;

        return (
            <div className="showNameView">
                <ShowNameDisplay selectedName={nameValue} />
            </div>
        );
    }
}
