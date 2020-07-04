var CoAnMoPluginFoo = /** @class */ (function () {
    function CoAnMoPluginFoo(foo) {
        if (foo === void 0) { foo = 'foo'; }
        console.log("CoAnMoPluginFoo() is " + foo);
        this.foo = foo;
    }
    CoAnMoPluginFoo.prototype.getFoo = function () {
        return this.foo + "!";
    };
    return CoAnMoPluginFoo;
}());
export { CoAnMoPluginFoo };
//# sourceMappingURL=coanmo-plugin-foo.js.map