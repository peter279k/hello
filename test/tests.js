require("./hello.js")();

QUnit.test("hello test", function(assert) {
	var str = hello();
	assert.equal(str, "hello qunit", "expected string is 'hello qunit'");
});
