/*globals module, process, document */

'use strict';

module.exports = (function() {

  if (!process.argv.length) {
    // In the browser, parse the query string
    var qs = document.location.search.replace(/^\?/, '');
    return qs.split('&').reduce(function(acc, val) {
      var args = val.split('=');
      acc[args[0]] = args[1];
      return acc;
    }, {});
  }

  // In node, use process.argvt
  return process.argv.reduce(function(acc, val) {
    if (/^-/.test(val)) {
      var args = val.replace(/^-+/, '').split('=');
      acc[args[0]] = args[1];
    }
    return acc;
  }, {});

})();