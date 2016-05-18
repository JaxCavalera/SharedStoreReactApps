// functions in here are used to interface with the global MobX store and View components
let mockStore = {
    users : [
        {name : 'nick', age : 25},
        {name : 'bob', age : 32},
        {name : 'tim', age : 15}
    ]
}

export let CheckNameValue = (nameToCheck) => {
    return (mockStore.users).find(function(i) {
        return i.name === nameToCheck;
    });
};
