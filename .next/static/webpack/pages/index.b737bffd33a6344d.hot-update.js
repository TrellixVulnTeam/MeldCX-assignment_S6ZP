"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx":
/*!*******************************************************************!*\
  !*** ./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NotifyDeviceOnlineComponent = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        'user'\n    ]), 3), cookies = ref[0], setCookie = ref[1], removeCookie = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), devices = ref1[0], setDevices = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getDataAfterFiveSecond();\n    }, [\n        devices.length\n    ]);\n    var logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    removeCookie('user');\n                    _ctx.next = 3;\n                    return router.push('/login');\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var getDataAfterFiveSecond = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return setInterval(function() {\n                        axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://35.201.2.209:8000/devices').then(function(r) {\n                            return setDevices(r.data.devices);\n                        }).catch(function(e) {\n                            return console.log(e);\n                        });\n                    }, 5000);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        devices.length\n    ]);\n    var randomNumber = Math.random();\n    var ConnectDevice = function(param) {\n        var item = param.item, l = param.l;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: 'ConnectDevice device_1',\n            style: {\n                top: \"\".concat(50 / l + item.id + 10 + l, \"%\"),\n                left: \"\".concat(100 / l + item.id + 10 + l, \"%\"),\n                transform: 'translate(-50%, -0%)'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"ConnectDeviceInner\",\n                children: 1\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 34,\n                columnNumber: 21\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'NotifyDeviceOnlineWrap',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"NotifyDeviceOnlineInner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"round\"\n                    }, void 0, false, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this),\n                    devices.length > 0 && devices.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ConnectDevice, {\n                            item: item,\n                            l: devices.length\n                        }, i, false, {\n                            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"CountOfDevices\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: devices.length\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Devices \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, _this),\n                                    \" Online\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"notifyBottom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"notifyBottomInner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"notifyBtn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn notify\",\n                                children: \"Notify\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn logout\",\n                                onClick: function() {\n                                    return logout();\n                                },\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this));\n};\n_s(NotifyDeviceOnlineComponent, \"nhWSDhupDGf7K/4XxVoO6kKEQxA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NotifyDeviceOnlineComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotifyDeviceOnlineComponent);\nvar _c;\n$RefreshReg$(_c, \"NotifyDeviceOnlineComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL05vdGlmeURpc3BsYXkvTm90aWZ5RGV2aWNlT25saW5lLkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBRXRCO0FBQ0Y7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ08sMkJBQTJCLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUV2QyxHQUFLLENBQUNDLE1BQU0sR0FBR0gsc0RBQVM7SUFDeEIsR0FBSyxDQUFzQ0QsR0FBb0Isa0JBQXBCQSx3REFBVSxDQUFDLENBQUM7UUFBQSxDQUFNO0lBQUEsQ0FBQyxPQUF2REssT0FBTyxHQUE2QkwsR0FBb0IsS0FBL0NNLFNBQVMsR0FBa0JOLEdBQW9CLEtBQXBDTyxZQUFZLEdBQUlQLEdBQW9CO0lBQy9ELEdBQUssQ0FBeUJELElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENTLE9BQU8sR0FBZ0JULElBQVksS0FBMUJVLFVBQVUsR0FBSVYsSUFBWTtJQUMxQ0QsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiWSxzQkFBc0I7SUFDMUIsQ0FBQyxFQUFFLENBQUNGO1FBQUFBLE9BQU8sQ0FBQ0csTUFBTTtJQUFBLENBQUM7SUFDbkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdmLGtEQUFXLHdLQUFDLFFBQVEsV0FBSSxDQUFDOzs7O29CQUNwQ1UsWUFBWSxDQUFDLENBQU07OzJCQUNiSCxNQUFNLENBQUNTLElBQUksQ0FBQyxDQUFROzs7Ozs7SUFDOUIsQ0FBQyxJQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0gsc0JBQXNCLEdBQUdiLGtEQUFXLHdLQUFDLFFBQVEsV0FBSSxDQUFDOzs7OzsyQkFDOUNpQixXQUFXLENBQUMsUUFBUSxHQUFJLENBQUM7d0JBQzNCWixnREFBUyxDQUFDLENBQWtDLG1DQUFFYyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSVIsTUFBTSxDQUFOQSxVQUFVLENBQUNRLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPOzJCQUFHVyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQzs7b0JBQ2hILENBQUMsRUFBRSxJQUFJOzs7Ozs7SUFDWCxDQUFDLElBQUUsQ0FBQ1o7UUFBQUEsT0FBTyxDQUFDRyxNQUFNO0lBQUEsQ0FBQztJQUNuQixHQUFLLENBQUNZLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxNQUFNO0lBRWhDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVFDLFFBQVksQ0FBQztZQUFuQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVELENBQUMsU0FBREEsQ0FBQztRQUMzQixNQUFNLDZFQUNERSxDQUFHO1lBQUNDLFNBQVMsRUFBRSxDQUF3QjtZQUNuQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ0pDLEdBQUcsRUFBRyxHQUE0QixNQUFDLENBQTFCLEVBQUUsR0FBQ0wsQ0FBQyxHQUFJQyxJQUFJLENBQUNLLEVBQUUsR0FBRyxFQUFFLEdBQUdOLENBQUMsRUFBQyxDQUFDO2dCQUNuQ08sSUFBSSxFQUFHLEdBQTZCLE1BQUMsQ0FBM0IsR0FBRyxHQUFDUCxDQUFDLEdBQUlDLElBQUksQ0FBQ0ssRUFBRSxHQUFHLEVBQUUsR0FBR04sQ0FBQyxFQUFDLENBQUM7Z0JBQ3JDUSxTQUFTLEVBQUUsQ0FBc0I7WUFDckMsQ0FBQztrR0FBR04sQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW9COzBCQUFFLENBQUM7Ozs7Ozs7Ozs7O0lBRXRELENBQUM7SUFDRCxNQUFNLDZFQUNERCxDQUFHO1FBQUNDLFNBQVMsRUFBRSxDQUF3Qjs7d0ZBQ25DRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBeUI7O2dHQUNuQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87Ozs7OztvQkFHckJ0QixPQUFPLENBQUNHLE1BQU0sR0FBRyxDQUFDLElBQUlILE9BQU8sQ0FBQzRCLEdBQUcsQ0FBQyxRQUFRLENBQVBSLElBQUksRUFBRVMsQ0FBQztzQ0FDdkMsTUFBTSwrREFBTFgsYUFBYTs0QkFBQ0UsSUFBSSxFQUFFQSxJQUFJOzRCQUFFRCxDQUFDLEVBQUVuQixPQUFPLENBQUNHLE1BQU07MkJBQU8wQixDQUFDOzs7Ozs7Z0dBRXZEUixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O3dHQUMxQlEsQ0FBRTswQ0FBRTlCLE9BQU8sQ0FBQ0csTUFBTTs7Ozs7O3dHQUNsQjRCLENBQUU7O29DQUFDLENBQVE7Z0hBQUNDLENBQUU7Ozs7O29DQUFFLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBRy9CWCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYztzR0FDeEJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFtQjswR0FDN0JELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFXOzt3R0FDckJXLENBQU07Z0NBQUNYLFNBQVMsRUFBQyxDQUFZOzBDQUFDLENBQU07Ozs7Ozt3R0FDcENXLENBQU07Z0NBQUNYLFNBQVMsRUFBQyxDQUFZO2dDQUFDWSxPQUFPLEVBQUUsUUFBUTtvQ0FBRjlCLE1BQU0sQ0FBTkEsTUFBTTs7MENBQUksQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RixDQUFDO0dBdERLVCwyQkFBMkI7O1FBRWRGLGtEQUFTO1FBQ21CRCxvREFBVTs7O0tBSG5ERywyQkFBMkI7QUF1RGpDLCtEQUFlQSwyQkFBMkIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL05vdGlmeURpc3BsYXkvTm90aWZ5RGV2aWNlT25saW5lLkNvbXBvbmVudC50c3g/OTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBOb3RpZnlEZXZpY2VPbmxpbmVDb21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbZGV2aWNlcywgc2V0RGV2aWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGFBZnRlckZpdmVTZWNvbmQoKVxyXG4gICAgfSwgW2RldmljZXMubGVuZ3RoXSlcclxuICAgIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBhd2FpdCByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGdldERhdGFBZnRlckZpdmVTZWNvbmQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8zNS4yMDEuMi4yMDk6ODAwMC9kZXZpY2VzJykudGhlbihyID0+IHNldERldmljZXMoci5kYXRhLmRldmljZXMpKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfSwgW2RldmljZXMubGVuZ3RoXSlcclxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgY29uc3QgQ29ubmVjdERldmljZSA9ICh7aXRlbSwgbH06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ29ubmVjdERldmljZSBkZXZpY2VfMSd9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHsoNTAvbCkgKyBpdGVtLmlkICsgMTAgKyBsfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHsoMTAwL2wpICsgaXRlbS5pZCArIDEwICsgbH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC0wJSknXHJcbiAgICAgICAgICAgICAgICAgfX0+PGRpdiBjbGFzc05hbWU9XCJDb25uZWN0RGV2aWNlSW5uZXJcIj57MX08L2Rpdj48L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnTm90aWZ5RGV2aWNlT25saW5lV3JhcCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeURldmljZU9ubGluZUlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGV2aWNlcy5sZW5ndGggPiAwICYmIGRldmljZXMubWFwKChpdGVtLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25uZWN0RGV2aWNlIGl0ZW09e2l0ZW19IGw9e2RldmljZXMubGVuZ3RofSBrZXk9e2l9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvdW50T2ZEZXZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntkZXZpY2VzLmxlbmd0aH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5EZXZpY2VzIDxici8+IE9ubGluZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZ5Qm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmeUJvdHRvbUlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZnlCdG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbm90aWZ5XCI+Tm90aWZ5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ291dFwiIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5Mb2cgb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5RGV2aWNlT25saW5lQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiYXhpb3MiLCJOb3RpZnlEZXZpY2VPbmxpbmVDb21wb25lbnQiLCJyb3V0ZXIiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiZGV2aWNlcyIsInNldERldmljZXMiLCJnZXREYXRhQWZ0ZXJGaXZlU2Vjb25kIiwibGVuZ3RoIiwibG9nb3V0IiwicHVzaCIsInNldEludGVydmFsIiwiZ2V0IiwidGhlbiIsInIiLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJDb25uZWN0RGV2aWNlIiwibCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvcCIsImlkIiwibGVmdCIsInRyYW5zZm9ybSIsIm1hcCIsImkiLCJoMiIsImg0IiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\n");

/***/ })

});