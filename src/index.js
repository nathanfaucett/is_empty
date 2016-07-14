var isString = require("@nathanfaucett/is_string"),
    has = require("@nathanfaucett/has"),
    isArrayLike = require("@nathanfaucett/is_array_like"),
    isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined");


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
