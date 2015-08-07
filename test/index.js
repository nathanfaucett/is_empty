var tape = require("tape"),
    isEmpty = require("..");


tape("isEmpty(value) should return true when the value is empty", function(assert) {
    assert.equal(isEmpty(null), true);
    assert.equal(isEmpty([]), true);
    assert.equal(isEmpty({}), true);
    assert.equal(isEmpty([0, 1]), false);
    assert.equal(isEmpty({
        key: "value"
    }), false);
    assert.end();
});
