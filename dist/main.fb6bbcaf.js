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
})({"js/main.js":[function(require,module,exports) {
new Vue({
  el: "#app",
  data: {
    n: 0,
    template: "\n\n.doraemon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.face {\n    height: 230px;\n    width: 230px;\n    border: 2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.face>.head {\n    height: 200px;\n    width: 200px;\n    border: 2px solid black;\n    border-radius: 50%;\n    background: white;\n    z-index: 2;\n}\n\n.face>.head>.mouth {\n    width: 170px;\n    height: 85px;\n    border-radius: 0 0 170px 170px;\n    transform: translateY(100px) translateX(14px);\n    background: rgb(177, 22, 53);\n    position: relative;\n    overflow: hidden;\n}\n\n.face>.head>.mouth>.tongueLeft {\n    width: 50px;\n    height: 30px;\n    border-radius: 50px 50px 0px 0px;\n    transform: rotate(-45deg);\n    position: absolute;\n    bottom: 14px;\n    left: 31px;\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.mouth>.tongueRight {\n    width: 50px;\n    height: 30px;\n    border-radius: 50px 50px 0px 0px;\n    transform: rotate(45deg);\n    position: absolute;\n    bottom: 14px;\n    right: 32px;\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.mouth>.tongueMid {\n    position: absolute;\n    width: 43px;\n    height: 43px;\n    bottom: -14px;\n    right: 65px;\n    border-radius: 0 0 50px;\n    transform: rotate(45deg);\n    background: rgb(202, 37, 51);\n}\n\n.face>.head>.upper {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n\n.face>.head>.upper>.nose {\n    height: 35px;\n    width: 35px;\n    top: 45px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 50%;\n    background: rgb(177, 23, 53);\n}\n\n.face>.head>.upper>.nose>.noseWhite {\n    height: 10px;\n    width: 10px;\n    transform: translateX(6px) translateY(4px);\n    border-radius: 50%;\n    background: white;\n}\n\n.face>.head>.upper>.nose>.noseWhite::before {\n    content: \"\";\n    display: block;\n    border-left: 2px solid black;\n    height: 23px;\n    transform: translateX(9px) translateY(28px);\n}\n\n\n.face>.head>.upper>.beardLeft {\n    position: absolute;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: translateY(70px) translateX(-55px);\n}\n\n.face>.head>.upper>.beardLeft::before {\n    content: \"\";\n    display: block;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: rotate(21deg) translateY(-20px) translateX(-7px);\n}\n\n.face>.head>.upper>.beardLeft::after {\n    content: \"\";\n    display: block;\n    width: 81px;\n    border-bottom: 3px solid black;\n    transform: rotate(-9deg) translateY(14px) translateX(-11px);\n}\n\n.face>.head>.upper>.beardRight {\n    position: absolute;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: translateY(70px) translateX(55px);\n}\n\n.face>.head>.upper>.beardRight::before {\n    content: \"\";\n    display: block;\n    width: 70px;\n    border-bottom: 3px solid black;\n    transform: rotate(-21deg) translateY(-20px) translateX(7px);\n}\n\n.face>.head>.upper>.beardRight::after {\n    content: \"\";\n    display: block;\n    width: 81px;\n    border-bottom: 3px solid black;\n    transform: rotate(9deg) translateY(14px) translateX(2px);\n}\n\n.face>.head>.upper>.leftEye {\n    position: absolute;\n    height: 52px;\n    width: 52px;\n    border-radius: 50%;\n    border: 1.5px solid black;\n    transform: translateX(-25px) translateY(-1px);\n    background: white;\n}\n\n.face>.head>.upper>.leftEye>.eye1 {\n    border: 1px solid black;\n    height: 20px;\n    width: 20px;\n    background: black;\n    transform: rotate(45deg) translateX(30px) translateY(-10px);\n    border-radius: 11px 28px 11px;\n    position: relative;\n}\n.face>.head>.upper>.leftEye>.eye1::before{\n    content:\"\";\n    display: block;\n    height: 5px;\n    width: 5px;\n    position: absolute;\n    top:7px;\n    left: 4px;\n    border-radius: 3px 10px 3px;\n    background:white;\n}\n\n.face>.head>.upper>.rightEye {\n    position: absolute;\n    height: 52px;\n    width: 52px;\n    border-radius: 50%;\n    border: 1.5px solid black;\n    transform: translateX(25px) translateY(-1px);\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    overflow: hidden;\n}\n.face>.head>.upper>.rightEye>.eye2{\n    height: 20px;\n    width:20px;\n    border-radius: 50%;\n    border:2px solid black;\n    transform: translateY(25px);\n}\n\n.body{\n    height: 150px;\n    width:150px;\n    border-radius: 50px 50px 120px 120px;\n    border:2px solid black;\n    transform: translateY(-50px);\n    background:rgb(53, 161, 201);\n    position: relative;\n    z-index:1;\n}\n.body>.armLeft{\n    transform: translateY(-44px) translateX(-43px)  rotate(-26deg);\n    height: 100px;\n    width: 100px;\n    border:2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 0 70px 20px 70px;\n}\n.body>.armRight{\n    transform: translateY(-142px) translateX(84px)  rotate(-58deg);\n    height: 100px;\n    width: 100px;\n    border:2px solid black;\n    background: rgb(53, 161, 201);\n    border-radius: 0 70px 20px 70px;\n}\n.body>.armLeft::before{\n    content:\"\";\n    display: block;\n    height: 60px;\n    width: 60px;\n    border:2px solid black;\n    border-radius: 50%;\n    background:white;\n    transform: translateX(-15px) translateY(-20px);\n}\n.body>.armRight::after{\n    content:\"\";\n    display: block;\n    height: 60px;\n    width: 60px;\n    border:2px solid black;\n    border-radius: 50%;\n    background:white;\n    transform: translateX(63px) translateY(54px);\n}\n.body>.pocket{\n    position: absolute;\n    height: 70px;\n    width: 115px;\n    top: 51px;\n    left: 17px;\n    background:white;\n    border-radius: 50%/50%;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n}\n.foot>.footLeft{\n    width: 65px;\n    height: 100px;\n    border:2px solid black;\n    background:white;\n    border-radius: 50%/50%;\n    transform: translateX(5px);\n}\n.foot>.footRight{\n    width: 65px;\n    height: 100px;\n    border:2px solid black;\n    background:white;\n    border-radius: 50%/50%;\n\n}\n.foot{\n    height: 200px;\n    width: 150px;\n    display: flex;\n    transform: translateY(-127px) translateX(10px);\n}\n.body>.redScarf{\n    position: absolute;\n    height: 50px;\n    width: 100px;\n    top:6px;\n    left: 23px;\n    border-radius: 50%/50%;\n    background:rgb(161, 23, 46);\n    z-index:1;\n}\n.body>.pocket>.bag{\n    height: 30px;\n    width: 65px;\n    border:2px solid black;\n    border-radius: 0 0 50px 50px;\n    margin-top: 5px;\n}\n.body>.bell{\n    position: absolute;\n    top:46px;\n    left: 56px;\n    height: 37px;\n    width: 37px;\n    border:2px solid black;\n    border-radius: 50%;\n    z-index:1;\n    background:rgb(241, 150, 41);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n}\n.body>.bell::before{\n    content:\"\";\n    display: block;\n    height: 10px;\n    width: 10px;\n    border:1px solid black;\n    background:black;\n    border-radius: 50%;\n    margin-top: 5px;\n}\n.body>.bell::after{\n    content:\"\";\n    display: block; \n    width: 20px;\n    border:1px solid black;\n    background:black;\n}\n.Dragonfly{\n    height: 50px;\n    width:50px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n}\n.Dragonfly>.sustain{\n    height: 13px;\n    width:9px;\n    border:2px solid rgb(0, 0, 0);\n    border-bottom:0px;\n    background:rgb(252, 193, 54);\n}\n.Dragonfly>.platform{\n    height: 15px;\n    width:30px;\n    border:3px solid black;\n    border-radius: 30px 30px 0 0;\n    background:rgb(252, 193, 54);\n    transform:translateY(10px);\n}\n.Dragonfly>.fly{\n    height: 7px;\n    width: 100px;\n    transform:translateY(5px) rotateY(45deg);\n    background:rgba(162, 171, 176,0.8);\n    border-radius: 10px;\n   animation:toFly linear 3s infinite;\n}\n@keyframes toFly{\n    0%{\n        transform:translateY(5px) rotateY(0deg);\n    }\n    100%{\n        transform:translateY(5px) rotateY(180deg);\n    }\n}",
    t: ""
  },
  methods: {
    add: function add() {
      var _this = this;

      setInterval(function () {
        _this.n++;
        _this.t = _this.template.substr(1, _this.n);
      }, 10);
    }
  },
  created: function created() {
    this.add();
  }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51839" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map