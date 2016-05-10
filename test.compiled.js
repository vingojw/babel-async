'use strict';
require('babel-polyfill');
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var fs = require('fs');

var readFile = function readFile(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};
var asyncReadFile = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var f1, f2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile('./a.txt');

          case 2:
            f1 = _context.sent;
            _context.next = 5;
            return readFile('./b.txt');

          case 5:
            f2 = _context.sent;

            console.log(f1.toString());
            console.log(f2.toString());

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncReadFile() {
    return ref.apply(this, arguments);
  };
}();

asyncReadFile();
