import {extendObservable} from 'mobx';

/**
 * Shared Helper Functions
 * =======================
 * functions in this section should be extricated to a separate module as outlined
 * in the Readme file under "Extended Objectives"
 * in a production implementation of this it might be nice to include
 * some error handling on the helper functions where appropriate
 * try catch might be sufficient
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

/**
 * add the component to the "inUse" array
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the "inUse" value for this prop
 * @param  {string} componentName - value to check for
 */
export let setPropInUseForComponent = (storeLocation, propName, componentName) => {
    storeLocation[propName].inUse.push(componentName);
};

/**
 * removes the component from the "inUse" array
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the "inUse" value for this prop
 * @param  {string} componentName - value to remove
 */
export let unsetPropInUseForComponent = (storeLocation, propName, componentName) => {
    let componentPos = storeLocation[propName].inUse.indexOf(componentName);
    storeLocation[propName].inUse.splice(componentPos, 1);
};

/**
 * adds a new state property (object) to the MobX Store
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - name used to reference state being added
 * @param  {object} propValue     - state object being added
 * @param  {string} componentName - first component using the new state object
 */
export let addPropToStore = (storeLocation, propName, propValue, componentName) => {
    extendObservable(storeLocation, {[propName] : propValue});
    storeLocation[propName].inUse = [];
    setPropInUseForComponent(storeLocation, propName, componentName);
};

// needs cleaning up as a lot of this functionality is handled by helper
// functions now
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
