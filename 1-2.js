console.time('small loop');
var user = new Object();
user.name = "Lulingniu";
user.getName = function () {
    return this.name;
};
user.setName = function (name) {
    this.name = name;
};
console.dir(user);
for (var i = 0; i < 100000; i++) {
    ;
}
console.trace('trace');
console.time('small loop');