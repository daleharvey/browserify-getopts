# browserify-getopts

Helper for options passing in browserified modules, uses process.argv in Node.js and the query string in the browser.

## Example

```` js
var opts = require('browserify-getopts');
console.log(opts);
```

In Node.js
```` js
$ node somescript --aflag=data
```
or in the browser @ http://url.com/?aflag=data

```
{aflag: 'data'}
```

## Install
```
$ npm install browserify-getopts
```
