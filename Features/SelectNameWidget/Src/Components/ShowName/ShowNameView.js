import React, { Component } from 'react';
import { observer } from 'mobx-react';

// import actions file for interfacing with the store
import { buildStore, cleanStore, getSelectedDropdownName } from './ShowNameActions.js';

// import display components
import ShowNameDisplay from './ShowNameDisplay.js';

/**
 * wrapping the component in the observer function causes a
 * re-render when an observable prop value changes
 */
export default observer(class ShowNameView extends Component {
    componentWillMount() {
        buildStore();
    };

    componentWillUnmount() {
        cleanStore();
    };

    render () {

        let nameValue = getSelectedDropdownName();

        return (
            <div className="showNameView">
                <ShowNameDisplay selectedName={nameValue} />
            </div>
        );
    }
});
