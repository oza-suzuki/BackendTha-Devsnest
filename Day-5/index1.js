/****** Using modules********/
var Test = require("./require_test");
var obj = new Test();
var returned_val = obj.print();
console.log(returned_val);

