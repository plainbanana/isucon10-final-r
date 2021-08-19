/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"audience": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./javascript/packs/audience.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/AudienceApp.tsx":
/*!************************************!*\
  !*** ./javascript/AudienceApp.tsx ***!
  \************************************/
/*! exports provided: AudienceApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceApp", function() { return AudienceApp; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./javascript/Navbar.tsx");
/* harmony import */ var _TeamList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeamList */ "./javascript/TeamList.tsx");
/* harmony import */ var _AudienceDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceDashboard */ "./javascript/AudienceDashboard.tsx");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Registration */ "./javascript/Registration.tsx");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logout */ "./javascript/Logout.tsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login */ "./javascript/Login.tsx");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Signup */ "./javascript/Signup.tsx");










class AudienceApp extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], { session: this.props.session, client: this.props.client }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container mt-5" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.session.contest.status ==
                                _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.FINISHED ||
                                this.props.session.contest.status ==
                                    _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.STARTED ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AudienceDashboard__WEBPACK_IMPORTED_MODULE_5__["AudienceDashboard"], { session: this.props.session, client: this.props.client })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamList__WEBPACK_IMPORTED_MODULE_4__["TeamList"], { session: this.props.session, client: this.props.client }))));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/teams", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TeamList__WEBPACK_IMPORTED_MODULE_4__["TeamList"], { session: this.props.session, client: this.props.client })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/registration", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Registration__WEBPACK_IMPORTED_MODULE_6__["Registration"], { session: this.props.session, client: this.props.client })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/login", render: ({ location }) => {
                            const params = new URLSearchParams(location.search);
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_8__["Login"], { client: this.props.client, redirect: params.get("redirect") })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/logout", render: () => {
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logout__WEBPACK_IMPORTED_MODULE_7__["Logout"], { session: this.props.session, client: this.props.client })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/signup", render: () => {
                            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_9__["Signup"], { client: this.props.client })));
                        } })))));
    }
}


/***/ }),

/***/ "./javascript/AudienceDashboard.tsx":
/*!******************************************!*\
  !*** ./javascript/AudienceDashboard.tsx ***!
  \******************************************/
/*! exports provided: AudienceDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceDashboard", function() { return AudienceDashboard; });
/* harmony import */ var _TeamPins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamPins */ "./javascript/TeamPins.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");
/* harmony import */ var _ReloadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReloadButton */ "./javascript/ReloadButton.tsx");
/* harmony import */ var _ContestClock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContestClock */ "./javascript/ContestClock.tsx");
/* harmony import */ var _ScoreGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScoreGraph */ "./javascript/ScoreGraph.tsx");
/* harmony import */ var _Leaderboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Leaderboard */ "./javascript/Leaderboard.tsx");







const AudienceDashboard = ({ session, client }) => {
    var _a;
    const [requesting, setRequesting] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
    const [dashboard, setDashboard,] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [teamPins, setTeamPins] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new _TeamPins__WEBPACK_IMPORTED_MODULE_0__["TeamPins"]());
    const [teamPinsMap, setTeamPinsMap] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(teamPins.all());
    teamPins.onChange = setTeamPinsMap;
    const refresh = () => {
        if (requesting)
            return;
        setRequesting(true);
        client
            .getAudienceDashboard()
            .then((db) => {
            setDashboard(db);
            setError(null);
            setRequesting(false);
        })
            .catch((e) => {
            setError(e);
            setRequesting(false);
        });
    };
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        if (!dashboard)
            refresh();
    }, [dashboard]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        const timer = setInterval(() => refresh(), 10000);
        return () => clearInterval(timer);
    }, []);
    if (!dashboard)
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: error }) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...")));
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: error }) : null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level-left" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContestClock__WEBPACK_IMPORTED_MODULE_4__["ContestClock"], { contest: session.contest })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level-right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReloadButton__WEBPACK_IMPORTED_MODULE_3__["ReloadButton"], { requesting: requesting, onClick: refresh })))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "is-fullwidth py-5 is-hidden-touch" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScoreGraph__WEBPACK_IMPORTED_MODULE_5__["ScoreGraph"], { teams: (_a = dashboard === null || dashboard === void 0 ? void 0 : dashboard.leaderboard) === null || _a === void 0 ? void 0 : _a.teams, contest: session.contest, teamPins: teamPinsMap })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "columns" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column is-12" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "py-5" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "title" }, " Leaderboard "),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Leaderboard__WEBPACK_IMPORTED_MODULE_6__["Leaderboard"], { leaderboard: dashboard === null || dashboard === void 0 ? void 0 : dashboard.leaderboard, teamPins: teamPinsMap, onPin: teamPins.set }))))));
};


/***/ }),

/***/ "./javascript/Login.tsx":
/*!******************************!*\
  !*** ./javascript/Login.tsx ***!
  \******************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");




class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            session: null,
            contestantId: "",
            password: "",
            requesting: false,
            registrationSession: null,
        };
    }
    async componentDidMount() {
        this.setState({
            registrationSession: await this.props.client.getRegistrationSession(),
        });
    }
    render() {
        var _a, _b;
        const currentContestant = (_a = this.state.session) === null || _a === void 0 ? void 0 : _a.contestant;
        if (currentContestant) {
            if (this.props.redirect) {
                console.log("redirect: ", this.props.redirect.toString());
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: this.props.redirect.toString() });
            }
            else {
                if (currentContestant.isStaff) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/admin" });
                }
                else if (((_b = this.state.registrationSession) === null || _b === void 0 ? void 0 : _b.status) ==
                    _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration.GetRegistrationSessionResponse
                        .Status.JOINED) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/contestant" });
                }
                else {
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", { className: "message is-success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message-header" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u53C2\u52A0\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044")),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message-body" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                                    "\u53C2\u52A0\u767B\u9332\u3059\u308B\u306B\u306F\u3001",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: "/registration" }, "\u30C1\u30FC\u30E0\u3092\u65B0\u3057\u304F\u4F5C\u6210\u3059\u308B"),
                                    "\u304B\u3001\u62DB\u5F85URL\u304B\u3089\u65E2\u5B58\u30C1\u30FC\u30E0\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))));
                }
            }
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "title is-1" }, "\u30ED\u30B0\u30A4\u30F3")),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null,
                    this.renderError(),
                    this.renderForm())));
        }
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: this.state.error });
    }
    renderForm() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "columns mt-2" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { className: "column is-half", onSubmit: this.onSubmit.bind(this) }, this.renderFormFields()))));
    }
    renderFormFields() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldContestantId" }, "\u30ED\u30B0\u30A4\u30F3ID"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", type: "text", required: true, id: "fieldContestantId", name: "contestantId", autoComplete: "username", onChange: this.onChange.bind(this) }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldPassword" }, "\u30D1\u30B9\u30EF\u30FC\u30C9"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", type: "password", required: true, id: "fieldPassword", name: "password", autoComplete: "current-password", onChange: this.onChange.bind(this) }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "button is-primary" }, "\u30ED\u30B0\u30A4\u30F3")))));
    }
    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    async onSubmit(event) {
        event.preventDefault();
        if (this.state.requesting)
            return;
        try {
            this.setState({ requesting: true });
            await this.props.client.login({
                contestantId: this.state.contestantId,
                password: this.state.password,
            });
            const session = await this.props.client.getCurrentSession();
            const registrationSession = await this.props.client.getRegistrationSession();
            this.setState({
                error: null,
                requesting: false,
                session: session,
                registrationSession: registrationSession,
            });
            location.reload();
        }
        catch (err) {
            this.setState({ error: err, requesting: false });
        }
        try {
        }
        catch (err) {
            this.setState({ error: err, requesting: false });
        }
    }
}


/***/ }),

/***/ "./javascript/Logout.tsx":
/*!*******************************!*\
  !*** ./javascript/Logout.tsx ***!
  \*******************************/
/*! exports provided: Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");



class Logout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: this.props.session,
            error: null,
            requesting: false,
            logoutSucceeded: false,
        };
    }
    async componentDidMount() {
        if (this.state.requesting)
            return;
        try {
            this.setState({ requesting: true });
            await this.logout();
            const session = await this.props.client.getCurrentSession();
            this.setState({
                session: session,
                error: null,
                requesting: false,
            });
            location.reload();
        }
        catch (err) {
            this.setState({ error: err, requesting: false });
        }
    }
    render() {
        const currentContestant = this.state.session.contestant;
        if (!currentContestant) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/" })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title is-1" }, "\u30ED\u30B0\u30A2\u30A6\u30C8")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, this.renderError())));
        }
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: this.state.error });
    }
    logout() {
        return this.props.client.logout({});
    }
}


/***/ }),

/***/ "./javascript/Navbar.tsx":
/*!*******************************!*\
  !*** ./javascript/Navbar.tsx ***!
  \*******************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



class Navbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", { className: "navbar is-dark", role: "navigation", "aria-label": "main navigation" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "navbar-brand" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "navbar-item", to: "/" }, "XSUCON Portal")),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "navbar-menu is-active" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "navbar-start" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "navbar-item", to: "/teams" }, "\u30C1\u30FC\u30E0\u4E00\u89A7")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "navbar-end" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "navbar-item" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "buttons" },
                                this.renderNavbarContestButton(),
                                this.renderNavbarLoginButtons())))))));
    }
    renderNavbarContestButton() {
        var _a, _b;
        if (this.props.session.contestant) {
            switch ((_a = this.props.session.contest) === null || _a === void 0 ? void 0 : _a.status) {
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.REGISTRATION:
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.STANDBY:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "button is-light", to: "/registration" }, "\u53C2\u52A0\u767B\u9332/\u4FEE\u6B63"));
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.STARTED:
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.FINISHED:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "button is-light", href: "/contestant" }, "\u7AF6\u6280\u53C2\u52A0\u8005\u5411\u3051\u30DA\u30FC\u30B8"));
            }
        }
        else {
            if (((_b = this.props.session.contest) === null || _b === void 0 ? void 0 : _b.status) ===
                _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.Contest.Status.REGISTRATION) {
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "button is-light", to: "/registration" }, "\u53C2\u52A0\u767B\u9332"));
            }
            else {
                return null;
            }
        }
    }
    renderNavbarLoginButtons() {
        if (this.props.session.contestant) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "button is-light", to: "/logout" }, "\u30ED\u30B0\u30A2\u30A6\u30C8"));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "button is-light", to: "/signup" }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "button is-light", to: "/login" }, "\u30ED\u30B0\u30A4\u30F3")));
        }
    }
}


/***/ }),

/***/ "./javascript/Registration.tsx":
/*!*************************************!*\
  !*** ./javascript/Registration.tsx ***!
  \*************************************/
/*! exports provided: Registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistrationForm */ "./javascript/RegistrationForm.tsx");
/* harmony import */ var _RegistrationStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegistrationStatus */ "./javascript/RegistrationStatus.tsx");





class Registration extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(document.location.search);
        this.state = {
            session: this.props.session,
            registrationSession: null,
            teamId: parseInt(params.get("team_id") || "0", 10),
            inviteToken: params.get("invite_token"),
            edit: false,
            error: null,
        };
    }
    componentDidMount() {
        this.updateRegistrationSession();
    }
    async updateRegistrationSession() {
        try {
            const registrationSession = await this.props.client.getRegistrationSession({
                teamId: this.state.teamId,
                inviteToken: this.state.inviteToken,
            });
            let session = this.state.session;
            if (this.state.registrationSession) {
                // XXX: Contestant name might be updated inside the registration page, and it is only included in GetCurrentSession response, not available in GetRegistrationSession.
                session = await this.props.client.getCurrentSession();
            }
            this.setState({ session, registrationSession, edit: false });
        }
        catch (err) {
            this.setState({ error: err });
        }
    }
    enableEdit() {
        this.setState({ edit: true });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "title is-1" }, "\u53C2\u52A0\u767B\u9332")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null,
                this.renderError(),
                this.renderPhase())));
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: this.state.error });
    }
    renderPhase() {
        if (this.state.registrationSession) {
            const login = this.renderTeam();
            switch (this.state.registrationSession.status) {
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.NOT_LOGGED_IN:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message is-danger" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message-body" }, "\u53C2\u52A0\u767B\u9332\u3092\u3059\u308B\u306B\u306F\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044")),
                        login));
                    break;
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.CLOSED:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message is-danger" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message-body" }, "\u53C2\u52A0\u767B\u9332\u3092\u73FE\u5728\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u305B\u3093 (\u5B9A\u54E1\u5230\u9054\u3001\u7DE0\u5207\u5F8C\u3001\u3082\u3057\u304F\u306F\u53D7\u4ED8\u958B\u59CB\u524D)")),
                        login));
                    break;
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.NOT_JOINABLE:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message is-danger" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "message-body" }, "\u62DB\u5F85\u5143\u306E\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u6570\u304C\u4E0A\u9650\u306B\u9054\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u62DB\u5F85\u3092\u5229\u7528\u3057\u3066\u53C2\u52A0\u767B\u9332\u3092\u9032\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002")),
                        login));
                    break;
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.CREATABLE:
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.JOINABLE:
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                        login,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["RegistrationForm"], { client: this.props.client, session: this.state.session, inviteToken: this.state.inviteToken, registrationSession: this.state.registrationSession, updateRegistrationSession: this.updateRegistrationSession.bind(this) })));
                    break;
                case _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration
                    .GetRegistrationSessionResponse.Status.JOINED:
                    if (this.state.edit) {
                        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["RegistrationForm"], { client: this.props.client, session: this.state.session, inviteToken: null, registrationSession: this.state.registrationSession, updateRegistrationSession: this.updateRegistrationSession.bind(this) }));
                    }
                    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegistrationStatus__WEBPACK_IMPORTED_MODULE_4__["RegistrationStatus"], { client: this.props.client, session: this.state.session, registrationSession: this.state.registrationSession, updateRegistrationSession: this.updateRegistrationSession.bind(this), enableEdit: this.enableEdit.bind(this) }));
                    break;
            }
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...");
        }
        const err = new Error("[BUG] undeterminable state");
        throw err;
    }
    renderTeam() {
        if (!this.state.registrationSession || !this.state.registrationSession.team)
            return;
        const team = this.state.registrationSession.team;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "mt-3" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", { className: "title is-3" }, "\u30C1\u30FC\u30E0\u304B\u3089\u62DB\u5F85\u3055\u308C\u3066\u3044\u307E\u3059"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                    team.leader.name,
                    " \u306E\u30C1\u30FC\u30E0 ",
                    team.name,
                    " ",
                    "\u304B\u3089\u306E\u62DB\u5F85\u3092\u53D7\u8AFE\u3057\u3066\u53C2\u52A0\u767B\u9332\u3057\u307E\u3059\u3002"))));
    }
}


/***/ }),

/***/ "./javascript/RegistrationForm.tsx":
/*!*****************************************!*\
  !*** ./javascript/RegistrationForm.tsx ***!
  \*****************************************/
/*! exports provided: RegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationForm", function() { return RegistrationForm; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");



class RegistrationForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super(props);
        this.state = {
            teamName: (_b = (_a = this.props.registrationSession.team) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "",
            name: (_d = (_c = this.props.session.contestant) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "",
            emailAddress: (_g = (_f = (_e = this.props.registrationSession.team) === null || _e === void 0 ? void 0 : _e.detail) === null || _f === void 0 ? void 0 : _f.emailAddress) !== null && _g !== void 0 ? _g : "",
            isStudent: (_j = (_h = this.props.session.contestant) === null || _h === void 0 ? void 0 : _h.isStudent) !== null && _j !== void 0 ? _j : false,
            requesting: false,
            requestError: null,
        };
    }
    async onSubmit(event) {
        event.preventDefault();
        if (this.state.requesting)
            return;
        try {
            this.setState({ requesting: true });
            if (this.isEditing()) {
                await this.updateRegistration();
            }
            else {
                if (this.props.registrationSession.team) {
                    await this.joinTeam();
                }
                else {
                    await this.createTeam();
                }
            }
            this.setState({ requestError: null, requesting: false });
            this.props.updateRegistrationSession();
        }
        catch (err) {
            this.setState({ requestError: err, requesting: false });
        }
    }
    onChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    createTeam() {
        return this.props.client.createTeam({
            teamName: this.state.teamName,
            emailAddress: this.state.emailAddress,
            name: this.state.name,
            isStudent: this.state.isStudent,
        });
    }
    joinTeam() {
        return this.props.client.joinTeam({
            inviteToken: this.props.inviteToken,
            teamId: this.props.registrationSession.team.id,
            name: this.state.name,
            isStudent: this.state.isStudent,
        });
    }
    updateRegistration() {
        return this.props.client.updateRegistration({
            teamName: this.state.teamName,
            emailAddress: this.state.emailAddress,
            name: this.state.name,
            isStudent: this.state.isStudent,
        });
    }
    isEditing() {
        return (this.props.registrationSession.status ==
            _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.registration.GetRegistrationSessionResponse
                .Status.JOINED);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "mt-2" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", { className: "title is-3" }, "\u6CE8\u610F\u4E8B\u9805"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "XSUCON \u3078\u306E\u53C2\u52A0\u306B\u306F\u53C2\u52A0\u898F\u7D04\u3078\u306E\u540C\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u53C2\u52A0\u767B\u9332\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u4ED6\u306E\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0\u306F\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "1\u4EBA\u76EE (\u30C1\u30FC\u30E0\u4EE3\u8868\u8005) \u306E\u767B\u9332\u5F8C\u3001\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u3092\u62DB\u5F85\u3059\u308B\u305F\u3081\u306E URL \u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u62DB\u5F85 URL \u3092\u5171\u6709\u3057\u3001\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u5168\u54E1\u306E\u767B\u9332\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u30C1\u30FC\u30E0\u540D\u30FB\u4EE3\u8868\u8005\u540D\u306B\u516C\u5E8F\u826F\u4FD7\u306B\u53CD\u3059\u308B\u540D\u524D\u306F\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u30C1\u30FC\u30E0\u540D\u30FB\u4EE3\u8868\u8005\u540D\u306B\u6A5F\u7A2E\u4F9D\u5B58\u6587\u5B57\u30FB\u7D75\u6587\u5B57\u30FBHTML\u30BF\u30B0\u306A\u3069\u304C\u5165\u3063\u3066\u3044\u305F\u5834\u5408\u3001\u30B5\u30A4\u30C8\u3078\u306E\u8868\u793A\u6642\u306B\u8868\u73FE\u3092\u5909\u3048\u3055\u305B\u3066\u3044\u305F\u3060\u304F\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "mt-2" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", { className: "title is-3" }, this.isEditing() ? "編集" : "詳細の入力"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { onSubmit: this.onSubmit.bind(this) },
                    this.renderTeamFormFields(),
                    this.renderContestantFormFields(),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "button is-primary", disabled: this.state.requesting }, this.isEditing() ? "保存" : "参加規約に同意して登録"))),
                    this.renderError()))));
    }
    renderTeamFormFields() {
        var _a;
        if (this.props.registrationSession.team &&
            this.props.registrationSession.team.leaderId != ((_a = this.props.session.contestant) === null || _a === void 0 ? void 0 : _a.id)) {
            const leader = this.props.registrationSession.team.leader;
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldTeamName" }, "\u30C1\u30FC\u30E0\u540D"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", disabled: true, id: "fieldTeamName", value: this.props.registrationSession.team.name || "" })),
                    this.isEditing() ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" },
                        "\u4EE3\u8868\u8005 ",
                        leader.name,
                        " ",
                        "\u306E\u30C1\u30FC\u30E0\u3078\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u30C1\u30FC\u30E0\u540D\u30FB\u4EE3\u8868\u8005\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u4EE3\u8868\u8005\u306E\u307F\u304C\u5909\u66F4\u53EF\u80FD\u3067\u3059\u3002")) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" },
                        "\u62DB\u5F85\u3092\u5229\u7528\u3057\u3001\u4EE3\u8868\u8005 ",
                        leader.name,
                        " \u306E\u30C1\u30FC\u30E0\u3078\u53C2\u52A0\u3057\u307E\u3059\u3002")))));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldTeamName" }, "\u30C1\u30FC\u30E0\u540D"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", required: true, id: "fieldTeamName", name: "teamName", value: this.state.teamName, onChange: this.onChange.bind(this) })),
                    this.isEditing() ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" }, "\u73FE\u5728\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3044\u308B\u65B9\u3092\u4EE3\u8868\u3068\u3059\u308B\u30C1\u30FC\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u4EE3\u8868\u8005\u306F\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002\u65E2\u5B58\u306E\u30C1\u30FC\u30E0\u3078\u53C2\u52A0\u3059\u308B\u5834\u5408\u3001\u4EE3\u8868\u8005\u3082\u3057\u304F\u306F\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u306E\u65B9\u3088\u308A\u62DB\u5F85 URL \u3092\u53D7\u3051\u53D6\u3063\u3066\u304F\u3060\u3055\u3044\u3002"))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldEmailAddress" }, "\u4EE3\u8868\u8005\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", type: "email", autoComplete: "email", spellCheck: false, required: true, id: "fieldEmailAddress", name: "emailAddress", value: this.state.emailAddress, onChange: this.onChange.bind(this) })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" }, "\u78BA\u8A8D\u30E1\u30FC\u30EB\u306A\u3069\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002"))));
        }
    }
    renderContestantFormFields() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label", htmlFor: "fieldName" }, !this.props.registrationSession.team ? "代表者名" : "参加者名"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", required: true, id: "fieldName", name: "name", value: this.state.name, onChange: this.onChange.bind(this) })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "help" }, "\u516C\u958B\u3055\u308C\u307E\u3059\u3002\u672C\u540D\u3067\u306A\u304F\u3066\u69CB\u3044\u307E\u305B\u3093 (id, HN, \u305D\u306E\u4ED6\u533F\u540D\u306A\u8A18\u5165\u3067\u3082\u554F\u984C\u3042\u308A\u307E\u305B\u3093)\u3002\u8907\u6570\u540D\u306E\u540D\u524D\u3092\u8A18\u8F09\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 (2 \u4EBA\u76EE\u4EE5\u964D\u306E\u767B\u9332\u306F\u3001\u767B\u9332\u5F8C\u78BA\u8A8D\u3067\u304D\u308B\u62DB\u5F85URL\u3092\u5229\u7528\u3057\u3066\u3001\u305D\u308C\u305E\u308C\u500B\u5225\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044)\u3002")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u5B66\u751F\u3067\u3059\u304B?"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "checkbox", type: "checkbox", name: "isStudent", checked: this.state.isStudent, onChange: this.onChange.bind(this) })))));
    }
    renderError() {
        if (!this.state.requestError)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: this.state.requestError });
    }
}


/***/ }),

/***/ "./javascript/RegistrationStatus.tsx":
/*!*******************************************!*\
  !*** ./javascript/RegistrationStatus.tsx ***!
  \*******************************************/
/*! exports provided: RegistrationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStatus", function() { return RegistrationStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");


class RegistrationStatus extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }
    onEditButtonClick(event) {
        event.preventDefault();
        this.props.enableEdit();
    }
    async onWithdrawButtonClick(event) {
        event.preventDefault();
        if (!confirm("本当にキャンセルしてよろしいですか? この操作は元に戻すことができません。"))
            return;
        try {
            await this.props.client.deleteRegistration();
            alert("参加をキャンセルしました。");
            document.location.href = "/";
        }
        catch (error) {
            this.setState({ error });
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "mt-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "title is-3" }, "\u767B\u9332\u5B8C\u4E86"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u5FC5\u8981\u306B\u5FDC\u3058\u3001\u4E0B\u8A18\u3088\u308A\u62DB\u5F85 URL \u3092\u30B3\u30D4\u30FC & \u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u3078\u5171\u6709\u3057\u3001\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u306E\u53C2\u52A0\u767B\u9332\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044 (\u4EE3\u8868\u8005\u3092\u542B\u3081 3 \u4EBA\u307E\u3067)\u3002"))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "mt-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "columns" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "column" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "title is-4" },
                            "\u30C1\u30FC\u30E0: ",
                            this.props.registrationSession.team.name),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                            "\u62DB\u5F85URL:",
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: this.props.registrationSession.memberInviteUrl }, this.props.registrationSession.memberInviteUrl))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", { className: "title is-5 mt-3" }, "\u30E1\u30F3\u30D0\u30FC\u30EA\u30B9\u30C8"),
                        this.renderTeamMembers()))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "mt-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "title is-4" }, "\u767B\u9332\u5185\u5BB9\u306E\u7DE8\u96C6"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-info", onClick: this.onEditButtonClick.bind(this) }, "\u7DE8\u96C6"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\u53C2\u52A0\u8005\u540D\u30FB\u5B66\u751F\u7533\u544A\u3068\u3044\u3063\u305F\u767B\u9332\u5185\u5BB9\u306E\u4FEE\u6B63\u304C\u3067\u304D\u307E\u3059\u3002\u30C1\u30FC\u30E0\u540D\u306F\u4EE3\u8868\u8005\u306E\u307F\u304C\u5909\u66F4\u53EF\u80FD\u3067\u3059\u3002"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-danger", onClick: this.onWithdrawButtonClick.bind(this) }, "\u8F9E\u9000"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\u53C2\u52A0\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002",
                    this.props.registrationSession.team.leaderId ==
                        this.props.session.contestant.id ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u4EE3\u8868\u8005\u306E\u305F\u3081\u3001\u8F9E\u9000\u3059\u308B\u3068\u30C1\u30FC\u30E0\u3068\u3057\u3066\u53C2\u52A0\u8F9E\u9000\u3068\u306A\u308A\u307E\u3059\u3002")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u3067\u3042\u308B\u305F\u3081\u3001\u30C1\u30FC\u30E0\u304B\u3089\u96E2\u8131\u3057\u307E\u3059 (\u4ED6\u306E\u30E1\u30F3\u30D0\u30FC\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093)\u3002"))),
                this.renderError())));
    }
    renderTeamMembers() {
        return this.props.registrationSession.team.members.map((member) => this.renderTeamMember(member));
    }
    renderTeamMember(member) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-2", key: member.id.toString() },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media-left" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "material-icons" }, "person")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "title is-5" }, member.name),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "subtitle is-6" },
                            this.props.registrationSession.team.leaderId == member.id ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-danger" }, "\u4EE3\u8868\u8005")) : null,
                            member.isStudent ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-info" }, "\u5B66\u751F")) : null))))));
    }
    renderError() {
        if (!this.state.error)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], { error: this.state.error });
    }
}


/***/ }),

/***/ "./javascript/Signup.tsx":
/*!*******************************!*\
  !*** ./javascript/Signup.tsx ***!
  \*******************************/
/*! exports provided: Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");


class Signup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            contestantId: "",
            password: "",
            requesting: false,
            signupSucceeded: false,
        };
    }
    componentDidMount() { }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title is-1" }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
                this.renderError(),
                this.renderForm(),
                this.renderFinishMessage())));
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], { error: this.state.error });
    }
    renderForm() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "columns mt-2", style: { display: this.state.signupSucceeded ? "none" : "" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { className: "column is-half", onSubmit: this.onSubmit.bind(this) }, this.renderFormFields()))));
    }
    renderFormFields() {
        if (this.state.signupSucceeded) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u53C2\u52A0\u767B\u9332\u3059\u308B\u306B\u306F\u3001\u30C1\u30FC\u30E0\u3092\u65B0\u3057\u304F\u4F5C\u6210\u3059\u308B\u304B\u3001\u62DB\u5F85URL\u304B\u3089\u65E2\u5B58\u30C1\u30FC\u30E0\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "fieldContestantId" }, "\u30ED\u30B0\u30A4\u30F3ID"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "input", type: "text", required: true, id: "fieldContestantId", name: "contestantId", autoComplete: "username", onChange: this.onChange.bind(this) }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "fieldPassword" }, "\u30D1\u30B9\u30EF\u30FC\u30C9"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "input", type: "password", required: true, id: "fieldPassword", name: "password", autoComplete: "current-password", onChange: this.onChange.bind(this) }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-primary" }, "\u9001\u4FE1")))));
        }
    }
    renderFinishMessage() {
        if (this.state.signupSucceeded) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", { className: "message is-success" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "message-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "message-body" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                            "\u53C2\u52A0\u767B\u9332\u3059\u308B\u306B\u306F\u3001",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "/registration" }, "\u30C1\u30FC\u30E0\u3092\u65B0\u3057\u304F\u4F5C\u6210\u3059\u308B"),
                            "\u304B\u3001\u62DB\u5F85 URL \u304B\u3089\u65E2\u5B58\u30C1\u30FC\u30E0\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))));
        }
    }
    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    async onSubmit(event) {
        event.preventDefault();
        if (this.state.requesting)
            return;
        try {
            await this.signup();
            this.setState({ requesting: true });
            this.setState({
                signupSucceeded: true,
                error: null,
                requesting: false,
            });
            // this.props.root.setState({ loggedin: true });
            // location.reload();
            location.href = "/";
        }
        catch (err) {
            this.setState({ error: err });
        }
    }
    signup() {
        return this.props.client.signup({
            contestantId: this.state.contestantId,
            password: this.state.password,
        });
    }
}


/***/ }),

/***/ "./javascript/TeamList.tsx":
/*!*********************************!*\
  !*** ./javascript/TeamList.tsx ***!
  \*********************************/
/*! exports provided: TeamList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return TeamList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage */ "./javascript/ErrorMessage.tsx");


class TeamList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(document.location.search);
        this.state = {
            teamList: null,
            error: null,
        };
    }
    componentDidMount() {
        this.updateTeamList();
    }
    async updateTeamList() {
        try {
            const teamList = await this.props.client.listTeams();
            this.setState({ teamList });
        }
        catch (error) {
            this.setState({ error });
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title is-1" }, "\u53C2\u52A0\u30C1\u30FC\u30E0\u30EA\u30B9\u30C8")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
                this.renderError(),
                this.renderTeamList())));
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], { error: this.state.error });
    }
    renderTeamList() {
        if (!this.state.teamList)
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.teamList.teams.map((team, i) => this.renderTeam(team, i))));
    }
    renderTeam(team, i) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-4", key: i },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "title is-5" }, team.name),
                team.isStudent ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "subtitle" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-info" }, "\u5B66\u751F\u30C1\u30FC\u30E0"))) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, team.memberNames.map((name, j) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: j }, name)))))));
    }
}


/***/ }),

/***/ "./javascript/packs/audience.tsx":
/*!***************************************!*\
  !*** ./javascript/packs/audience.tsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.scss */ "./javascript/packs/application.scss");
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiClient */ "./javascript/ApiClient.ts");
/* harmony import */ var _NavbarSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavbarSession */ "./javascript/NavbarSession.ts");
/* harmony import */ var _AudienceApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AudienceApp */ "./javascript/AudienceApp.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);






(async function () {
    const client = new _ApiClient__WEBPACK_IMPORTED_MODULE_1__["ApiClient"]();
    const session = await client.getCurrentSession();
    Object(_NavbarSession__WEBPACK_IMPORTED_MODULE_2__["updateNavBarSession"])(session);
    const elem = document.getElementById("app");
    react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AudienceApp__WEBPACK_IMPORTED_MODULE_3__["AudienceApp"], { session: session, client: client }), elem);
})();


/***/ })

/******/ });
//# sourceMappingURL=audience.js.map