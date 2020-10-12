// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"UzxX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.doraemon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n}\n\n.face {\n    height: 230px;\n    width: 230px;\n    border: 2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.face>.head {\n    height: 200px;\n    width: 200px;\n    border: 2px solid black;\n    border-radius: 50%;\n    background: white;\n    z-index: 2;\n}\n\n.face>.head>.mouth {\n    width: 170px;\n    height: 85px;\n    border-radius: 0 0 170px 170px;\n    transform: translateY(100px) translateX(14px);\n    background: rgb(177, 22, 53);\n    position: relative;\n    overflow: hidden;\n}\n\n.face>.head>.mouth>.tongueLeft {\n    width: 50px;\n    height: 30px;\n    border-radius: 50px 50px 0px 0px;\n    transform: rotate(-45deg);\n    position: absolute;\n    bottom: 14px;\n    left: 31px;\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.mouth>.tongueRight {\n    width: 50px;\n    height: 30px;\n    border-radius: 50px 50px 0px 0px;\n    transform: rotate(45deg);\n    position: absolute;\n    bottom: 14px;\n    right: 32px;\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.mouth>.tongueMid {\n    position: absolute;\n    width: 43px;\n    height: 43px;\n    bottom: -14px;\n    right: 65px;\n    border-radius: 0 0 50px;\n    transform: rotate(45deg);\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.upper {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n\n.face>.head>.upper>.nose {\n    height: 35px;\n    width: 35px;\n    top: 45px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 50%;\n    background: rgb(177, 23, 53);\n}\n\n.face>.head>.upper>.nose>.noseWhite {\n    height: 10px;\n    width: 10px;\n    transform: translateX(6px) translateY(4px);\n    border-radius: 50%;\n    background: white;\n}\n\n.face>.head>.upper>.nose>.noseWhite::before {\n    content: \"\";\n    display: block;\n    border-left: 2px solid black;\n    height: 23px;\n    transform: translateX(9px) translateY(28px);\n}\n\n\n.face>.head>.upper>.beardLeft {\n    position: absolute;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: translateY(70px) translateX(-55px);\n}\n\n.face>.head>.upper>.beardLeft::before {\n    content: \"\";\n    display: block;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: rotate(21deg) translateY(-20px) translateX(-7px);\n}\n\n.face>.head>.upper>.beardLeft::after {\n    content: \"\";\n    display: block;\n    width: 81px;\n    border-bottom: 3px solid black;\n    transform: rotate(-9deg) translateY(14px) translateX(-11px);\n}\n\n.face>.head>.upper>.beardRight {\n    position: absolute;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: translateY(70px) translateX(55px);\n}\n\n.face>.head>.upper>.beardRight::before {\n    content: \"\";\n    display: block;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: rotate(-21deg) translateY(-20px) translateX(7px);\n}\n\n.face>.head>.upper>.beardRight::after {\n    content: \"\";\n    display: block;\n    width: 81px;\n    border-bottom: 3px solid black;\n    transform: rotate(9deg) translateY(14px) translateX(2px);\n}\n\n.face>.head>.upper>.leftEye {\n    position: absolute;\n    height: 52px;\n    width: 52px;\n    border-radius: 50%;\n    border: 1.5px solid black;\n    transform: translateX(-25px) translateY(-1px);\n    background: white;\n}\n\n.face>.head>.upper>.leftEye>.eye1 {\n    border: 1px solid black;\n    height: 20px;\n    width: 20px;\n    background: black;\n    transform: rotate(45deg) translateX(30px) translateY(-10px);\n    border-radius: 11px 28px 11px;\n    position: relative;\n}\n.face>.head>.upper>.leftEye>.eye1::before{\n    content:\"\";\n    display: block;\n    height: 5px;\n    width: 5px;\n    position: absolute;\n    top:7px;\n    left: 4px;\n    border-radius: 3px 10px 3px;\n    background:white;\n}\n\n.face>.head>.upper>.rightEye {\n    position: absolute;\n    height: 52px;\n    width: 52px;\n    border-radius: 50%;\n    border: 1.5px solid black;\n    transform: translateX(25px) translateY(-1px);\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    overflow: hidden;\n}\n.face>.head>.upper>.rightEye>.eye2{\n    height: 20px;\n    width:20px;\n    border-radius: 50%;\n    border:2px solid black;\n    transform: translateY(25px);\n}\n\n.body{\n    height: 150px;\n    width:150px;\n    border-radius: 50px 50px 120px 120px;\n    border:2px solid black;\n    transform: translateY(-50px);\n    background:rgb(53, 161, 201);\n    position: relative;\n    z-index:1;\n}\n.body>.armLeft{\n    transform: translateY(-44px) translateX(-43px)  rotate(-26deg);\n    height: 100px;\n    width: 100px;\n    border:2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 0 70px 20px 70px;\n}\n.body>.armRight{\n    transform: translateY(-142px) translateX(84px)  rotate(-58deg);\n    height: 100px;\n    width: 100px;\n    border:2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 0 70px 20px 70px;\n}\n.body>.armLeft::before{\n    content:\"\";\n    display: block;\n    height: 60px;\n    width: 60px;\n    border:2px solid black;\n    border-radius: 50%;\n    background:white;\n    transform: translateX(-15px) translateY(-20px);\n}\n.body>.armRight::after{\n    content:\"\";\n    display: block;\n    height: 60px;\n    width: 60px;\n    border:2px solid black;\n    border-radius: 50%;\n    background:white;\n    transform: translateX(63px) translateY(54px);\n}\n.body>.pocket{\n    position: absolute;\n    height: 70px;\n    width: 115px;\n    top: 51px;\n    left: 17px;\n    background:white;\n    border-radius: 50%/50%;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n}\n.foot>.footLeft{\n    width: 65px;\n    height: 100px;\n    border:2px solid black;\n    background:white;\n    border-radius: 50%/50%;\n}\n.foot>.footRight{\n    width: 65px;\n    height: 100px;\n    border:2px solid black;\n    background:white;\n    border-radius: 50%/50%;\n\n}\n.foot{\n    height: 120px;\n    width: 150px;\n    display: flex;\n    position: absolute;\n    bottom:0;\n    transform: translateX(11px);\n}\n.body>.redScarf{\n    position: absolute;\n    height: 50px;\n    width: 100px;\n    top:6px;\n    left: 23px;\n    border-radius: 50%/50%;\n    background:rgb(161, 23, 46);\n    z-index:1;\n}\n.body>.pocket>.bag{\n    height: 30px;\n    width: 65px;\n    border:2px solid black;\n    border-radius: 0 0 50px 50px;\n    margin-top: 5px;\n}\n.body>.bell{\n    position: absolute;\n    top:46px;\n    left: 56px;\n    height: 37px;\n    width: 37px;\n    border:2px solid black;\n    border-radius: 50%;\n    z-index:1;\n    background:rgb(241, 150, 41);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n}\n.body>.bell::before{\n    content:\"\";\n    display: block;\n    height: 10px;\n    width: 10px;\n    border:1px solid black;\n    background:black;\n    border-radius: 50%;\n    margin-top: 5px;\n}\n.body>.bell::after{\n    content:\"\";\n    display: block;\n    width: 20px;\n    border:1px solid black;\n    background:black;\n}\n.Dragonfly{\n    height: 50px;\n    width:50px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n}\n.Dragonfly>.sustain{\n    height: 13px;\n    width:9px;\n    border:2px solid rgb(0, 0, 0);\n    border-bottom:0px;\n    background:rgb(252, 193, 54);\n}\n.Dragonfly>.platform{\n    height: 15px;\n    width:30px;\n    border:3px solid black;\n    border-radius: 30px 30px 0 0;\n    background:rgb(252, 193, 54);\n    transform:translateY(10px);\n}\n.Dragonfly>.fly{\n    height: 7px;\n    width: 100px;\n    transform:translateY(5px) rotateY(45deg);\n    background:rgba(162, 171, 176,0.8);\n    border-radius: 10px;\n    animation:toFly linear 3s infinite;\n}\n@keyframes toFly{\n    0%{\n        transform:translateY(5px) rotateY(0deg);\n    }\n    100%{\n        transform:translateY(5px) rotateY(180deg);\n    }\n}";
var _default = string;
exports.default = _default;
},{}],"d6sW":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  n: 1,
  init: function init() {
    demo.innerText = _css.default.substr(0, player.n);
    demo2.innerText = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"UzxX"}]},{},["d6sW"], null)
//# sourceMappingURL=main.87557686.js.map