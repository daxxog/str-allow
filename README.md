str-allow
=========
Filter string characters.

Install
-------
stable
```bash
npm install str-allow
```
edge
```bash
npm install https://github.com/daxxog/str-allow/tarball/master
```

Example
-------
```javascript
var strAllow = require('str-allow'),
    filter = strAllow('1234567890');

console.log(filter('a1bc2de3f')); //outputs 123
```