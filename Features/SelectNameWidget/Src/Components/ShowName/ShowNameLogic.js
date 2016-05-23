import { extendObservable } from 'mobx';

import {
    checkStoreForProp,
    checkIsPropInUseByComponent,
    checkIsPropInUse,
    setPropInUseForComponent,
    addPropToStore,
    removePropFromStore
} from 'mobXStoreHelpers';

// populate the store with a list of users from a remote source
// could be turned into a more generic helper function
export let fetchUsersList = () => {

    // does the 'users' prop exist in the global store?
    if (checkStoreForProp(mobXGlobalStore, 'users')) {

        // is the ShowName component listed as using the prop?
        if (!checkIsPropInUseByComponent(mobXGlobalStore, 'users', 'ShowName')) {

            // component was not listed and needs to be added
            setPropInUseForComponent(mobXGlobalStore, 'users', 'ShowName');
        }
    } else {

        // get data and add it to the store
        // ==== async api call would go here ====
        let data = mockRemote.users;

        addPropToStore(mobXGlobalStore, 'users', data, 'ShowName');
    }
};

export let buildStore = () => {
    fetchUsersList();
};

export let cleanStore = () => {
    unsetPropInUseForComponent(mobXGlobalStore, 'users', 'ShowName');

    // only delete the 'users' prop from the store if it's no longer in use
    if (!checkIsPropInUse(mobXGlobalStore, 'users')) {
        removePropFromStore(mobXGlobalStore, 'users');
    }
};


export let getSelectedDropdownName = () => {
    if (checkStoreForProp(mobXGlobalStore, 'selectedDropdownName')) {
        return mobXGlobalStore.selectedDropdownName;
    }

    // if the prop doesn't exist it means no name has been selected
    mobXGlobalStore = extendObservable(mobXGlobalStore, {selectedDropdownName: 'Please select a name from the dropdown list'});

    return mobXGlobalStore.selectedDropdownName;
};
