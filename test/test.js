var assert = require("assert"),
    isEmpty = require("../src/index");


describe("isEmpty", function() {
    it("should return true when the value is empty", function() {
        assert.equal(isEmpty(null), true);
        assert.equal(isEmpty([]), true);
        assert.equal(isEmpty({}), true);
        assert.equal(isEmpty([0, 1]), false);
        assert.equal(isEmpty({
            key: "value"
        }), false);
    });
});
