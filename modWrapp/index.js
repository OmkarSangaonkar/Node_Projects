console.log("hello");

//  Wrapper funcion is simply imidiatly invoked function which is private, we cant call values outside this function

//  SAMPLE FORMAT OF WRAPPER FUNCTON : OUR code has run with this function at back side

// (function (exports, require, module, __filename, __dirname){
//    for example
//     const a= require("fs")
//     const name= 'omkar'
//     console.log(name)
//     module.exports= {name}
// })

//  This is Imidiate invoke function example
(function () {
  var a = "omkar sangaonkar";
  console.log(a);
})();

console.log(__dirname);
console.log(__filename);

const chalk = require("chalk");

console.log(chalk.blueBright("Hello Chalk"));
