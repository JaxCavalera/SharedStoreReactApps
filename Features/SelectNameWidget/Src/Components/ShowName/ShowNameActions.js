import {extendObservable} from 'mobx';

/**
 * Shared Helper Functions
 * =======================
 * functions in this section should be extricated to a separate module as outlined
 * in the Readme file under "Extended Objectives"
 */

/**
 * checks the store for a specific property
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the store to see if this property exists
 * @return {bool}                 - returns true if the property exists in the store
 */
export let checkStoreForProp = (storeLocation, propName) => {
    return (storeLocation[propName] ? true : false);
};

/**
 * checks if the given component is using a specific property
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the "inUse" value for this prop
 * @param  {string} componentName - value to check for
 * @return {bool}                 - returns true if the property is being used
 */
export let checkIsPropInUseByComponent = (storeLocation, propName, componentName) => {
    let result = storeLocation[propName].inUse.filter((i) => {
        return i == componentName;
    });

    return result.length > 0;
};

/**
 * checks if a specific property is in use by any components
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the "inUse" value for this prop
 * @return {bool}                 - returns true if the property is being used
 */
export let checkIsPropInUse = (storeLocation, propName) => {
    return Object.keys(storeLocation[propName].inUse).length > 0;
};

export let setPropInUse = (storeLocation, propName, componentName) => {

};

export let fetchUsersList = () => {
    // only create the users property if it doesn't exist in the store
    if (checkStoreForProp(mobXGlobalStore, 'users')) {
        // do stuff since the prop already exists in the store
    } else {
        // get data and add it to the store

        // ==== async api call would go here ====
        let data = mockRemote.users;

        // add state to the store and set "prop in use" flag for this component
        mobXGlobalStore = extendObservable(mobXGlobalStore, {'users': data});

    }
};

export let checkNameValue = (nameToCheck) => {
    return (mobXGlobalStore.users).find(function(i) {
        return i.name === nameToCheck;
    });
};
