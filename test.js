var strAllow = require('str-allow'),
    filter = strAllow('1234567890');

console.log(filter('a1bc2de3f'));