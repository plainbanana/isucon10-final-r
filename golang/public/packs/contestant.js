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
/******/ 		"contestant": 0
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
/******/ 	deferredModules.push(["./javascript/packs/contestant.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/BenchmarkJobDetail.tsx":
/*!*******************************************!*\
  !*** ./javascript/BenchmarkJobDetail.tsx ***!
  \*******************************************/
/*! exports provided: BenchmarkJobDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchmarkJobDetail", function() { return BenchmarkJobDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _BenchmarkJobStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BenchmarkJobStatus */ "./javascript/BenchmarkJobStatus.tsx");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timestamp */ "./javascript/Timestamp.tsx");




const renderJobSummary = (job, admin) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Summary")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "ID:"),
                " ",
                job.id),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Target:"),
                " ",
                job.targetHostname),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Status:"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BenchmarkJobStatus__WEBPACK_IMPORTED_MODULE_2__["BenchmarkJobStatus"], { status: job.status })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Enqueued At:"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: job.createdAt })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Updated At:"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: job.updatedAt })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Started At:"),
                " ",
                job.startedAt ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: job.startedAt }) : "N/A"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Finished At:"),
                " ",
                job.finishedAt ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: job.finishedAt }) : "N/A"))));
};
const renderTeam = (team) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Team")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/admin/teams/${encodeURIComponent(team.id.toString())}` },
                    team.name,
                    " (#",
                    team.id.toString(),
                    ")")))));
};
const renderJobResult = (job) => {
    if (!job.result)
        return;
    const { result } = job;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Result")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                result.finished ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-info" }, "Finished")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-warning" }, "In progress")),
                result.finished ? (result.passed ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-success ml-2" }, "Passed")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tag is-danger ml-2" }, "Failed"))) : null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Marked At:"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: result.markedAt })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Score:"),
                " ",
                result.score),
            result.scoreBreakdown ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Score Breakdown:"),
                " base=",
                result.scoreBreakdown.raw,
                ", deduction=",
                result.scoreBreakdown.deduction)) : null)));
};
const renderJobExecution = (job, admin) => {
    if (!job.result)
        return;
    const execution = job.result;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Conclusion")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Reason:"),
                " ",
                execution.reason))));
};
const BenchmarkJobDetail = (props) => {
    const { job } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null,
            renderJobSummary(job, !!props.admin),
            props.admin ? renderTeam(job.team) : null,
            renderJobResult(job),
            renderJobExecution(job, !!props.admin))));
};


/***/ }),

/***/ "./javascript/BenchmarkJobList.tsx":
/*!*****************************************!*\
  !*** ./javascript/BenchmarkJobList.tsx ***!
  \*****************************************/
/*! exports provided: BenchmarkJobList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchmarkJobList", function() { return BenchmarkJobList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _TimeDuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeDuration */ "./javascript/TimeDuration.tsx");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timestamp */ "./javascript/Timestamp.tsx");
/* harmony import */ var _BenchmarkJobStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BenchmarkJobStatus */ "./javascript/BenchmarkJobStatus.tsx");





const BenchmarkJobList = (props) => {
    const renderJob = (job, i) => {
        var _a;
        const id = job.id.toString();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: id },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/contestant/benchmark_jobs/${encodeURIComponent(id)}` },
                    "#",
                    id)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "has-text-right" }, (_a = job.result) === null || _a === void 0 ? void 0 : _a.score),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BenchmarkJobStatus__WEBPACK_IMPORTED_MODULE_4__["BenchmarkJobStatus"], { status: job.status })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: job.createdAt })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeDuration__WEBPACK_IMPORTED_MODULE_2__["TimeDuration"], { a: job.createdAt, b: job.finishedAt }))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Score"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Time"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Duration"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.list.map(renderJob))));
};


/***/ }),

/***/ "./javascript/BenchmarkJobStatus.tsx":
/*!*******************************************!*\
  !*** ./javascript/BenchmarkJobStatus.tsx ***!
  \*******************************************/
/*! exports provided: BenchmarkJobStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchmarkJobStatus", function() { return BenchmarkJobStatus; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const COLORS = {
    PENDING: "dark",
    RUNNING: "warning",
    CANCELLED: "info",
    FINISHED: "success",
    ERRORED: "danger",
};
const BenchmarkJobStatus = (props) => {
    const status = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.resources.BenchmarkJob.Status[props.status];
    const color = COLORS[status] || "light";
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: `tag is-${color}` }, status);
};


/***/ }),

/***/ "./javascript/ContestantApp.tsx":
/*!**************************************!*\
  !*** ./javascript/ContestantApp.tsx ***!
  \**************************************/
/*! exports provided: ContestantApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantApp", function() { return ContestantApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _contestant_ContestantNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contestant/ContestantNavbar */ "./javascript/contestant/ContestantNavbar.tsx");
/* harmony import */ var _contestant_ContestantBenchmarkJobList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contestant/ContestantBenchmarkJobList */ "./javascript/contestant/ContestantBenchmarkJobList.tsx");
/* harmony import */ var _contestant_ContestantBenchmarkJobDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contestant/ContestantBenchmarkJobDetail */ "./javascript/contestant/ContestantBenchmarkJobDetail.tsx");
/* harmony import */ var _contestant_ContestantClarificationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contestant/ContestantClarificationList */ "./javascript/contestant/ContestantClarificationList.tsx");
/* harmony import */ var _contestant_ContestantDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contestant/ContestantDashboard */ "./javascript/contestant/ContestantDashboard.tsx");
/* harmony import */ var _contestant_ContestantNotificationsObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contestant/ContestantNotificationsObserver */ "./javascript/contestant/ContestantNotificationsObserver.ts");








class ContestantApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        const notificationObserver = new _contestant_ContestantNotificationsObserver__WEBPACK_IMPORTED_MODULE_7__["ContestantNotificationsObserver"](this.props.client);
        notificationObserver.onLastAnsweredClarificationIdChange = this.onLastAnsweredClarificationIdChange.bind(this);
        notificationObserver.onNewNotifications = this.onNewNotifications.bind(this);
        this.state = {
            notificationObserver,
            lastAnsweredClarificationIdObserved: false,
            lastClarificationIdSeen: this.getLastClarificationIdSeen(),
            localNotificationEnabled: this.getLocalNotificationEnabled(),
            serviceWorker: null,
        };
    }
    getLastClarificationIdSeen() {
        const str = window.localStorage.getItem("xsuportal-contestantLastClarificationIdSeen");
        if (!str)
            return undefined;
        return parseInt(str, 10);
    }
    getLocalNotificationEnabled() {
        if (!("Notification" in window)) {
            console.warn("getLocalNotificationEnabled: No notification support");
            this.setLocalNotificationEnabled(false);
            return false;
        }
        if (window.Notification.permission === "denied") {
            console.warn("getLocalNotificationEnabled: Notification permission denied");
            this.setLocalNotificationEnabled(false);
            return false;
        }
        return (window.localStorage.getItem("xsuportal-contestantLocalNotificationEnabled") === "1");
    }
    setLocalNotificationEnabled(flag) {
        console.log("setLocalNotificationEnabled:", flag);
        try {
            if (flag) {
                window.localStorage.setItem("xsuportal-contestantLocalNotificationEnabled", "1");
            }
            else {
                window.localStorage.removeItem("xsuportal-contestantLocalNotificationEnabled");
            }
        }
        catch (e) {
            console.warn(e);
        }
        this.setState({ localNotificationEnabled: flag });
    }
    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .then((reg) => {
                console.log("SW:", reg);
                const lastServiceWorkerRelease = window.localStorage.getItem("xsuportal-swRelease");
                if (lastServiceWorkerRelease !== undefined &&
                    this.props.release !== lastServiceWorkerRelease) {
                    console.log("Attempt to update sw");
                    reg.update();
                }
                try {
                    window.localStorage.setItem("xsuportal-swRelease", this.props.release || "");
                }
                catch (e) {
                    console.warn(e);
                }
                this.setState({ serviceWorker: reg });
                this.state.notificationObserver.start();
            })
                .catch((e) => {
                console.warn("Cannot register SW: ", e);
                this.state.notificationObserver.start();
            });
        }
        else {
            this.state.notificationObserver.start();
        }
    }
    componentWillUnmount() {
        this.state.notificationObserver.shutdown();
    }
    onLastAnsweredClarificationIdChange(id) {
        this.setState({
            lastAnsweredClarificationIdObserved: true,
            lastAnsweredClarificationId: id,
            lastClarificationIdSeen: this.getLastClarificationIdSeen(),
        });
    }
    onLastClarificationIdSeenChange(id) {
        try {
            if (id) {
                window.localStorage.setItem("xsuportal-contestantLastClarificationIdSeen", id.toString());
            }
            else {
                window.localStorage.removeItem("xsuportal-contestantLastClarificationIdSeen");
            }
        }
        catch (e) {
            console.warn(e);
        }
        this.setState({ lastClarificationIdSeen: id });
    }
    onNewNotifications(notifications) {
        var _a;
        console.log({
            localNotificationEnabled: this.state.localNotificationEnabled,
        });
        if (!this.state.localNotificationEnabled)
            return;
        const worker = (_a = this.state.serviceWorker) === null || _a === void 0 ? void 0 : _a.active;
        console.log({ worker: worker });
        if (!worker)
            return;
        worker.postMessage({
            kind: "localNotification",
            notifications: notifications,
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestant_ContestantNavbar__WEBPACK_IMPORTED_MODULE_2__["ContestantNavbar"], { session: this.props.session, client: this.props.client, unreadNotificationExists: this.state.lastAnsweredClarificationIdObserved &&
                    this.state.lastClarificationIdSeen !==
                        this.state.lastAnsweredClarificationId }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container mt-5" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contestant", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestant_ContestantDashboard__WEBPACK_IMPORTED_MODULE_6__["ContestantDashboard"], { session: this.props.session, client: this.props.client, serviceWorker: this.state.serviceWorker, localNotificationEnabled: this.state.localNotificationEnabled, setLocalNotificationEnabled: this.setLocalNotificationEnabled.bind(this) }));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contestant/benchmark_jobs", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestant_ContestantBenchmarkJobList__WEBPACK_IMPORTED_MODULE_3__["ContestantBenchmarkJobList"], { session: this.props.session, client: this.props.client }));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/contestant/benchmark_jobs/:id", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestant_ContestantBenchmarkJobDetail__WEBPACK_IMPORTED_MODULE_4__["ContestantBenchmarkJobDetail"], { session: this.props.session, client: this.props.client, id: match.params.id }));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contestant/clarifications", render: ({ match }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestant_ContestantClarificationList__WEBPACK_IMPORTED_MODULE_5__["ContestantClarificationList"], { session: this.props.session, client: this.props.client, onLastClarificationIdSeenChange: this.onLastClarificationIdSeenChange.bind(this) }));
                        } })))));
    }
}


/***/ }),

/***/ "./javascript/TimeDuration.tsx":
/*!*************************************!*\
  !*** ./javascript/TimeDuration.tsx ***!
  \*************************************/
/*! exports provided: TimeDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDuration", function() { return TimeDuration; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);

const TimeDuration = (props) => {
    const tA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(props.a.seconds * 1000 + props.a.nanos / 1000000);
    const tB = props.b ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(props.b.seconds * 1000 + props.b.nanos / 1000000) : dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
    const d = dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.duration(tB.diff(tA));
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, d.humanize(false));
};


/***/ }),

/***/ "./javascript/contestant/ContestantBenchmarkJobDetail.tsx":
/*!****************************************************************!*\
  !*** ./javascript/contestant/ContestantBenchmarkJobDetail.tsx ***!
  \****************************************************************/
/*! exports provided: ContestantBenchmarkJobDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantBenchmarkJobDetail", function() { return ContestantBenchmarkJobDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BenchmarkJobDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BenchmarkJobDetail */ "./javascript/BenchmarkJobDetail.tsx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorMessage */ "./javascript/ErrorMessage.tsx");
/* harmony import */ var _ReloadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReloadButton */ "./javascript/ReloadButton.tsx");




class ContestantBenchmarkJobDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: null,
            error: null,
            requesting: false,
        };
    }
    componentDidMount() {
        this.updateJob();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props)
            this.updateJob();
    }
    async updateJob() {
        if (this.state.requesting)
            return;
        try {
            this.setState({ requesting: true });
            const resp = await this.props.client.getBenchmarkJob(this.props.id);
            this.setState({ job: resp.job, requesting: false, error: null });
        }
        catch (error) {
            this.setState({ error, requesting: false });
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level-left" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title is-1" },
                            "Job #",
                            this.props.id)),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level-right" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReloadButton__WEBPACK_IMPORTED_MODULE_3__["ReloadButton"], { requesting: this.state.requesting, onClick: this.updateJob.bind(this) })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
                this.renderError(),
                this.renderJob())));
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: this.state.error });
    }
    renderJob() {
        if (!this.state.job)
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BenchmarkJobDetail__WEBPACK_IMPORTED_MODULE_1__["BenchmarkJobDetail"], { job: this.state.job, admin: false })));
    }
}


/***/ }),

/***/ "./javascript/contestant/ContestantBenchmarkJobForm.tsx":
/*!**************************************************************!*\
  !*** ./javascript/contestant/ContestantBenchmarkJobForm.tsx ***!
  \**************************************************************/
/*! exports provided: ContestantBenchmarkJobForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantBenchmarkJobForm", function() { return ContestantBenchmarkJobForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage */ "./javascript/ErrorMessage.tsx");




const ContestantBenchmarkJobForm = (props) => {
    const [redirect, setRedirect] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    const [requesting, setRequesting] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    const { register, handleSubmit, watch, setValue, errors } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
        defaultValues: {
            targetHostname: window.localStorage.getItem("xsuportal-last-target-hostname") || "",
        },
    });
    const onSubmit = handleSubmit(async (data) => {
        try {
            setRequesting(true);
            const resp = await props.client.enqueueBenchmarkJob({
                targetHostname: data.targetHostname,
            });
            try {
                window.localStorage.setItem("xsuportal-last-target-hostname", data.targetHostname);
            }
            catch (e) {
                console.warn(e);
            }
            setRedirect(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { push: true, to: {
                    pathname: `/contestant/benchmark_jobs/${encodeURIComponent(resp.job.id.toString())}`,
                } }));
        }
        catch (e) {
            setError(e);
            setRequesting(false);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        redirect,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: onSubmit },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field has-addons" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control is-expanded" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "input is-fullwidth", type: "text", name: "targetHostname", placeholder: "target hostname", ref: register })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-primary", type: "submit", disabled: requesting }, "Enqueue"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "is-size-7" }, "\u30D9\u30F3\u30C1\u5BFE\u8C61\u30B5\u30FC\u30D0\u30FC\u3092\u9078\u629E\u3057\u3066 Enqueue \u3057\u3066\u304F\u3060\u3055\u3044\u3002\u6700\u7D42\u8A08\u6E2C\u306B\u306F\u6700\u5F8C\u306B\u5229\u7528\u3057\u305F\u30B5\u30FC\u30D0\u30FC\u304C\u5229\u7528\u3055\u308C\u307E\u3059\u3002"),
                error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null))));
};


/***/ }),

/***/ "./javascript/contestant/ContestantBenchmarkJobList.tsx":
/*!**************************************************************!*\
  !*** ./javascript/contestant/ContestantBenchmarkJobList.tsx ***!
  \**************************************************************/
/*! exports provided: ContestantBenchmarkJobList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantBenchmarkJobList", function() { return ContestantBenchmarkJobList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorMessage */ "./javascript/ErrorMessage.tsx");
/* harmony import */ var _BenchmarkJobList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BenchmarkJobList */ "./javascript/BenchmarkJobList.tsx");
/* harmony import */ var _ContestantBenchmarkJobForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContestantBenchmarkJobForm */ "./javascript/contestant/ContestantBenchmarkJobForm.tsx");





class ContestantBenchmarkJobList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            error: null,
        };
    }
    componentDidMount() {
        this.updateList();
    }
    async updateList() {
        try {
            const list = await this.props.client.listBenchmarkJobs();
            this.setState({ list });
        }
        catch (error) {
            this.setState({ error });
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contestant/benchmark_jobs" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title is-1" }, "Benchmark Jobs")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
                        this.renderForm(),
                        this.renderError(),
                        this.renderList())))));
    }
    renderError() {
        if (!this.state.error)
            return;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], { error: this.state.error });
    }
    renderForm() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContestantBenchmarkJobForm__WEBPACK_IMPORTED_MODULE_4__["ContestantBenchmarkJobForm"], { session: this.props.session, client: this.props.client }));
    }
    renderList() {
        if (!this.state.list)
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BenchmarkJobList__WEBPACK_IMPORTED_MODULE_3__["BenchmarkJobList"], { list: this.state.list.jobs });
    }
}


/***/ }),

/***/ "./javascript/contestant/ContestantClarificationList.tsx":
/*!***************************************************************!*\
  !*** ./javascript/contestant/ContestantClarificationList.tsx ***!
  \***************************************************************/
/*! exports provided: ContestantClarificationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantClarificationList", function() { return ContestantClarificationList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _Clarification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Clarification */ "./javascript/Clarification.tsx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage */ "./javascript/ErrorMessage.tsx");




const ClarForm = (props) => {
    const [requesting, setRequesting] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    const { reset, register, handleSubmit, watch, setValue, errors } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
        shouldUnregister: false,
        defaultValues: {
            question: "",
        },
    });
    const onSubmit = handleSubmit(async (data, e) => {
        try {
            setRequesting(true);
            const resp = await props.client.requestClarification({
                question: data.question,
            });
            props.onSubmit(resp.clarification);
            e.target.reset();
            setRequesting(false);
        }
        catch (e) {
            setError(e);
            setRequesting(false);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card mt-5" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "\u8CEA\u554F\u3082\u3057\u304F\u306F\u30B5\u30DD\u30FC\u30C8\u4F9D\u983C\u3092\u9001\u4FE1\u3059\u308B")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: onSubmit },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "ContestantClarificationList-question" }, "\u8CEA\u554F\u5185\u5BB9"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "textarea", name: "question", id: "ContestantClarificationList-question", ref: register, placeholder: "", autoFocus: true }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-primary", type: "submit", disabled: requesting }, "\u9001\u4FE1"))),
                error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null))));
};
const ContestantClarificationList = (props) => {
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        props.client
            .listClarifications()
            .then((resp) => setList(resp.clarifications))
            .catch((e) => setError(e));
    }, []);
    const onClarSubmit = (clar) => {
        setList(list ? [clar, ...list] : [clar]);
    };
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        var _a;
        if (!list)
            return;
        const clar = list.find((clar) => clar.answered);
        props.onLastClarificationIdSeenChange((_a = clar === null || clar === void 0 ? void 0 : clar.id) !== null && _a !== void 0 ? _a : undefined);
    }, [list]);
    const renderList = () => {
        if (!list)
            return null;
        return list.map((clar) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clarification__WEBPACK_IMPORTED_MODULE_2__["Clarification"], { clarification: clar, admin: false, key: clar.id.toString() }));
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClarForm, { session: props.session, client: props.client, onSubmit: onClarSubmit }),
        error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null,
        list ? renderList() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..")));
};


/***/ }),

/***/ "./javascript/contestant/ContestantDashboard.tsx":
/*!*******************************************************!*\
  !*** ./javascript/contestant/ContestantDashboard.tsx ***!
  \*******************************************************/
/*! exports provided: ContestantDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantDashboard", function() { return ContestantDashboard; });
/* harmony import */ var _TeamPins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TeamPins */ "./javascript/TeamPins.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage */ "./javascript/ErrorMessage.tsx");
/* harmony import */ var _ReloadButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReloadButton */ "./javascript/ReloadButton.tsx");
/* harmony import */ var _ContestClock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContestClock */ "./javascript/ContestClock.tsx");
/* harmony import */ var _ScoreGraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ScoreGraph */ "./javascript/ScoreGraph.tsx");
/* harmony import */ var _BenchmarkJobList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BenchmarkJobList */ "./javascript/BenchmarkJobList.tsx");
/* harmony import */ var _ContestantBenchmarkJobForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContestantBenchmarkJobForm */ "./javascript/contestant/ContestantBenchmarkJobForm.tsx");
/* harmony import */ var _Leaderboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Leaderboard */ "./javascript/Leaderboard.tsx");
/* harmony import */ var _ContestantNotificationSubscriptionPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContestantNotificationSubscriptionPanel */ "./javascript/contestant/ContestantNotificationSubscriptionPanel.tsx");











const ContestantDashboard = (props) => {
    var _a;
    const { session, client } = props;
    const [requestingDashboard, setRequestingDashboard] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
    const [requestingJobs, setRequestingJobs] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
    const [dashboard, setDashboard,] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [jobs, setJobs] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [teamPins, setTeamPins] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new _TeamPins__WEBPACK_IMPORTED_MODULE_0__["TeamPins"]());
    const [teamPinsMap, setTeamPinsMap] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(teamPins.all());
    teamPins.onChange = setTeamPinsMap;
    const refreshDashboard = () => {
        if (requestingDashboard)
            return;
        setRequestingDashboard(true);
        return client
            .getContestantDashboard()
            .then((db) => {
            setDashboard(db);
            setError(null);
            setRequestingDashboard(false);
        })
            .catch((e) => {
            setError(e);
            setRequestingDashboard(false);
        });
    };
    const refreshJobs = () => {
        if (requestingJobs)
            return;
        setRequestingJobs(true);
        return client
            .listBenchmarkJobs()
            .then((r) => {
            setJobs(r.jobs.slice(0, 5));
            setError(null);
            setRequestingJobs(false);
        })
            .catch((e) => {
            setError(e);
            setRequestingJobs(false);
        });
    };
    const refreshAll = () => {
        refreshDashboard();
        refreshJobs();
    };
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        if (!dashboard)
            refreshDashboard();
    }, [dashboard]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        if (!jobs)
            refreshJobs();
    }, [jobs]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        const timer = setInterval(() => refreshAll(), 10000);
        return () => clearInterval(timer);
    }, []);
    if (!dashboard || !jobs)
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...")));
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level-left" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContestClock__WEBPACK_IMPORTED_MODULE_5__["ContestClock"], { contest: session.contest })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "level-right has-text-right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mr-1" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContestantNotificationSubscriptionPanel__WEBPACK_IMPORTED_MODULE_10__["ContestantNotificationSubscriptionPanel"], { session: session, client: client, serviceWorker: props.serviceWorker, localNotificationEnabled: props.localNotificationEnabled, setLocalNotificationEnabled: props.setLocalNotificationEnabled })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReloadButton__WEBPACK_IMPORTED_MODULE_4__["ReloadButton"], { requesting: requestingDashboard || requestingJobs, onClick: refreshAll })))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "is-fullwidth py-5 is-hidden-touch" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScoreGraph__WEBPACK_IMPORTED_MODULE_6__["ScoreGraph"], { teams: (_a = dashboard === null || dashboard === void 0 ? void 0 : dashboard.leaderboard) === null || _a === void 0 ? void 0 : _a.teams, contest: session.contest, teamId: session.team.id, teamPins: teamPinsMap })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "columns" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column is-7 px-5" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "py-5" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "title" }, " Leaderboard "),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Leaderboard__WEBPACK_IMPORTED_MODULE_9__["Leaderboard"], { leaderboard: dashboard === null || dashboard === void 0 ? void 0 : dashboard.leaderboard, teamId: session.team.id, teamPins: teamPinsMap, onPin: teamPins.set }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column is-5 px-5" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "py-5" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "title" }, " Job Enqueue Form "),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContestantBenchmarkJobForm__WEBPACK_IMPORTED_MODULE_8__["ContestantBenchmarkJobForm"], { session: session, client: client })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "py-5" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "title" }, " Job List "),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/contestant/benchmark_jobs" }, "Show All")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BenchmarkJobList__WEBPACK_IMPORTED_MODULE_7__["BenchmarkJobList"], { list: jobs }))))));
};


/***/ }),

/***/ "./javascript/contestant/ContestantNavbar.tsx":
/*!****************************************************!*\
  !*** ./javascript/contestant/ContestantNavbar.tsx ***!
  \****************************************************/
/*! exports provided: ContestantNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantNavbar", function() { return ContestantNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


class ContestantNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: "navbar is-info", role: "navigation", "aria-label": "main navigation" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-brand" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "navbar-item", to: "/contestant" }, "XSUCON Contestant")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-menu is-active" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-start" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "navbar-item", to: "/contestant" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "material-icons", "aria-hidden": true }, "leaderboard"),
                            "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "navbar-item", to: "/contestant/benchmark_jobs" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "material-icons", "aria-hidden": true }, "local_fire_department"),
                            "\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "navbar-item", to: "/contestant/clarifications" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "material-icons", "aria-hidden": !this.props.unreadNotificationExists, "aria-label": this.props.unreadNotificationExists ? "未読あり" : "" }, this.props.unreadNotificationExists
                                ? "mark_email_unread"
                                : "email"),
                            "\u8CEA\u554F/\u30B5\u30DD\u30FC\u30C8"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-item has-dropdown is-hoverable" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "navbar-link" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "material-icons", "aria-hidden": true }, "sticky_note_2"),
                                "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "navbar-item", href: "/teams" }, "\u30C1\u30FC\u30E0\u4E00\u89A7"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "navbar-item", href: "/" }, "\u30D1\u30D6\u30EA\u30C3\u30AF\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-end" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media xsu-navbar-contestant" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media-left" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "material-icons" }, "person")),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "media-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "" }, this.props.session.contestant.name),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level is-size-7 is-mobile" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level-left" }, this.props.session.team.name),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "level-right" },
                                            "(\u30C1\u30FC\u30E0ID: ",
                                            this.props.session.team.id,
                                            ")"))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "buttons" })))))));
    }
    renderNavbarLoginButtons() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "button is-light", href: "/session", onClick: this.onLogout.bind(this) }, "\u30ED\u30B0\u30A2\u30A6\u30C8")));
    }
    onLogout(e) {
        e.preventDefault();
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "/session";
        document.body.appendChild(form);
        const method = document.createElement("input");
        method.type = "hidden";
        method.name = "_method";
        method.value = "delete";
        form.appendChild(method);
        form.submit();
    }
}


/***/ }),

/***/ "./javascript/contestant/ContestantNotificationSubscriptionPanel.tsx":
/*!***************************************************************************!*\
  !*** ./javascript/contestant/ContestantNotificationSubscriptionPanel.tsx ***!
  \***************************************************************************/
/*! exports provided: ContestantNotificationSubscriptionPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantNotificationSubscriptionPanel", function() { return ContestantNotificationSubscriptionPanel; });
/* harmony import */ var _ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiClient */ "./javascript/ApiClient.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContestantNotificationSubscriptionPanel = (props) => {
    const [sub, setSub] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined);
    if (!("serviceWorker" in navigator))
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    if (!("Notification" in window))
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    const sw = props.serviceWorker;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        if (!sw)
            return;
        sw.pushManager
            .getSubscription()
            .then((s) => setSub(s))
            .catch((e) => console.warn("getSubscription failed:", e));
    }, [sw]);
    if (!sw)
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    if (sub === undefined)
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContestantNotificationSubscriptionPanelInner, Object.assign({}, props, { serviceWorker: sw, pushSubscription: sub })));
};
const ContestantNotificationSubscriptionPanelInner = (props) => {
    const [pushSubscription, setPushSubscription] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.pushSubscription);
    if (pushSubscription || props.localNotificationEnabled) {
        const doUnsubscribe = async (e) => {
            e.preventDefault();
            if (pushSubscription) {
                try {
                    await props.client.unsubscribeNotification(pushSubscription);
                }
                catch (e) {
                    console.error("Unsubscribe API failed", e);
                }
                pushSubscription.unsubscribe();
                setPushSubscription(null);
            }
            props.setLocalNotificationEnabled(false);
        };
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "button is-small", onClick: doUnsubscribe },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "material-icons", "aria-label": "通知を無効にする" }, "notifications_active")));
    }
    else {
        const doSubscribe = async (e) => {
            e.preventDefault();
            try {
                const perm = await Notification.requestPermission();
                if (perm === "denied") {
                    alert("ブラウザで通知が拒否されているため有効にできません");
                    return;
                }
                if (perm === "default") {
                    alert("通知が許可されませんでした (有効にできません)");
                    return;
                }
            }
            catch (e) {
                console.error("requestPermission failure", e);
                alert("requestPermission failure");
            }
            props.setLocalNotificationEnabled(true);
            try {
                if (props.session.pushVapidKey && props.session.pushVapidKey.length > 0) {
                    const sub = await props.serviceWorker.pushManager.subscribe({
                        applicationServerKey: props.session.pushVapidKey,
                        userVisibleOnly: true,
                    });
                    await props.client.subscribeNotification(sub);
                    setPushSubscription(sub);
                }
            }
            catch (e) {
                console.error("Failed to subscribe", e);
                if (e instanceof _ApiClient__WEBPACK_IMPORTED_MODULE_0__["ApiError"]) {
                    if (e.status == 503)
                        return;
                }
                alert("Failed to subscribe");
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "button is-small", onClick: doSubscribe },
            "\u901A\u77E5\u3092\u6709\u52B9\u306B\u3059\u308B",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "material-icons", "aria-hidden": true }, "notifications_none")));
    }
};


/***/ }),

/***/ "./javascript/contestant/ContestantNotificationsObserver.ts":
/*!******************************************************************!*\
  !*** ./javascript/contestant/ContestantNotificationsObserver.ts ***!
  \******************************************************************/
/*! exports provided: ContestantNotificationsObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestantNotificationsObserver", function() { return ContestantNotificationsObserver; });
class ContestantNotificationsObserver {
    constructor(client) {
        this.client = client;
        this.last = undefined;
        this.requesting = false;
    }
    start() {
        if (this.timer)
            return;
        console.log("ContestantNotificationsObserver: start");
        this.poll();
        this.timer = window.setInterval(this.poll.bind(this), 20000);
    }
    shutdown() {
        if (!this.timer)
            return;
        console.log("ContestantNotificationsObserver: shutdown");
        window.clearInterval(this.timer);
    }
    async poll() {
        if (this.requesting)
            return;
        try {
            this.requesting = true;
            const resp = await this.client.listNotifications(this.last);
            const lastAnsweredClarificationId = resp.lastAnsweredClarificationId === 0
                ? undefined
                : resp.lastAnsweredClarificationId;
            if (lastAnsweredClarificationId !== this.lastAnsweredClarificationId &&
                this.onLastAnsweredClarificationIdChange) {
                console.log("ContestantNotificationsObserver: lastAnsweredClarificationId change", lastAnsweredClarificationId);
                this.onLastAnsweredClarificationIdChange(lastAnsweredClarificationId);
            }
            this.lastAnsweredClarificationId = lastAnsweredClarificationId;
            if (resp.notifications.length > 0 && this.onNewNotifications) {
                console.log("ContestantNotificationsObserver: observed newNotifications", resp.notifications);
                this.onNewNotifications(resp.notifications);
            }
            const last = resp.notifications[resp.notifications.length - 1];
            this.last = (last === null || last === void 0 ? void 0 : last.id) || this.last;
        }
        catch (e) {
            console.error("ContestantNotificationsObserver: error while polling", e);
            this.requesting = false;
        }
        this.requesting = false;
    }
}


/***/ }),

/***/ "./javascript/packs/contestant.tsx":
/*!*****************************************!*\
  !*** ./javascript/packs/contestant.tsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.scss */ "./javascript/packs/application.scss");
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiClient */ "./javascript/ApiClient.ts");
/* harmony import */ var _NavbarSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavbarSession */ "./javascript/NavbarSession.ts");
/* harmony import */ var _ContestantApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContestantApp */ "./javascript/ContestantApp.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);






(async function () {
    var _a;
    const client = new _ApiClient__WEBPACK_IMPORTED_MODULE_1__["ApiClient"]();
    const session = await client.getCurrentSession();
    const release = (_a = document.querySelector('meta[name="xsu:release"]')) === null || _a === void 0 ? void 0 : _a.content;
    Object(_NavbarSession__WEBPACK_IMPORTED_MODULE_2__["updateNavBarSession"])(session);
    const elem = document.getElementById("app");
    if (session.team) {
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ContestantApp__WEBPACK_IMPORTED_MODULE_3__["ContestantApp"], { session: session, client: client, release: release }), elem);
    }
    else {
        location.href = "/";
    }
})();


/***/ })

/******/ });
//# sourceMappingURL=contestant.js.map