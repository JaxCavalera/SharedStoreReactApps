import React, { Component } from 'react';
import { observer } from 'mobx-react';

// import Logic file for interfacing with the store
import { buildStore, cleanStore, getSelectedDropdownName } from './ShowNameLogic.js';

// import View components
import ShowNameView from './ShowNameView.js';

/**
 * wrapping the component in the observer function causes a
 * re-render when an observable prop value changes
 */
export default observer(class ShowNameContainer extends Component {
    componentWillMount() {
        buildStore();
    };

    componentWillUnmount() {
        cleanStore();
    };

    render () {

        let nameValue = getSelectedDropdownName();

        return (
            <div className="showNameContainer">
                <ShowNameView selectedName={nameValue} />
            </div>
        );
    }
});
