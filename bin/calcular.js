#! /usr/local/bin/node
let Shape = require("../lib/shape")

let argument = process.argv.splice(2);


let type  = argument[0];


let a = new Shape([type],{width:100});
let result = a.getArea();

console.log(result);
