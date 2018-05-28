let prototype_0 = require("./o3.js").o3;

function getPrototypes(sourcePrototype) {
    let newPrototype = Reflect.getPrototypeOf(sourcePrototype);
    let arr = [];
    
    while (newPrototype != null) {
        arr.push(newPrototype.name);
        newPrototype = Reflect.getPrototypeOf(newPrototype);
    }

    return arr;                      
}
console.log(getPrototypes(prototype_0));