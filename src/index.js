var isString = require("is_string"),
    has = require("has"),
    isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined");


module.exports = isEmpty;


function isEmpty(value) {
    return (
        isNullOrUndefined(value) ? true : (
            isString(value) || isArrayLike(value) ? value.length === 0 : isObjectEmpty(value)
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
