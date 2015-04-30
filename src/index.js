var isString = require("is_string"),
    has = require("has"),
    isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined");


module.exports = isEmpty;


function isEmpty(obj) {
    return (
        isNullOrUndefined(obj) ? true : (
            isString(obj) || isArrayLike(obj) ? obj.length === 0 : isObjectEmpty(obj)
        )
    );
}

function isObjectEmpty(object) {
    var localHas = has,
        key;

    for (key in object) {
        if (localHas(object, key)) {
            return false;
        }
    }

    return true;
}
