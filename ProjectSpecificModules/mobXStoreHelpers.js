import {extendObservable} from 'mobx';

/**
 * Shared Helper Functions
 * =======================
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
 * add a specific component to the "inUse" array
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - check the "inUse" value for this prop
 * @param  {string} componentName - value to push into the "inUse" array
 */
export let setPropInUseForComponent = (storeLocation, propName, componentName) => {
    storeLocation[propName].inUse.push(componentName);
};

/**
 * removes the component from the "inUse" array
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - target the "inUse" value for this prop
 * @param  {string} componentName - value to remove from the "inUse" array
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
    storeLocation = extendObservable(storeLocation, {[propName] : propValue});
    storeLocation[propName].inUse = [];
    setPropInUseForComponent(storeLocation, propName, componentName);
};

/**
 * removes an existing state property (object) from the MobX Store
 * @param  {object} storeLocation - object being used as the store
 * @param  {string} propName      - name used to reference state being removed
 */
export let removePropFromStore = (storeLocation, propName) => {
    delete storeLocation[propName];
};
