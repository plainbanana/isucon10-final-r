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
/******/ 		"admin": 0
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
/******/ 	deferredModules.push(["./javascript/packs/admin.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/AdminApp.tsx":
/*!*********************************!*\
  !*** ./javascript/AdminApp.tsx ***!
  \*********************************/
/*! exports provided: AdminApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminApp", function() { return AdminApp; });
/* harmony import */ var _admin_AdminApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/AdminApiClient */ "./javascript/admin/AdminApiClient.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _admin_AdminNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/AdminNavbar */ "./javascript/admin/AdminNavbar.tsx");
/* harmony import */ var _admin_AdminClarificationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/AdminClarificationList */ "./javascript/admin/AdminClarificationList.tsx");
/* harmony import */ var _admin_AdminClarificationDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/AdminClarificationDetail */ "./javascript/admin/AdminClarificationDetail.tsx");






class AdminApp extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminClient: new _admin_AdminApiClient__WEBPACK_IMPORTED_MODULE_0__["AdminApiClient"](this.props.client),
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_admin_AdminNavbar__WEBPACK_IMPORTED_MODULE_3__["AdminNavbar"], { session: this.props.session, client: this.state.adminClient }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container mt-5" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "columns" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column is-3" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", { className: "menu" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "menu-label" }, "Contest"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", { className: "menu-list" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/admin/clarifications", activeClassName: "is-active" }, "Clarifications"))))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column is-9" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/admin/clarifications", render: ({ match }) => {
                                        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_admin_AdminClarificationList__WEBPACK_IMPORTED_MODULE_4__["AdminClarificationList"], { session: this.props.session, client: this.state.adminClient }));
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/admin/clarifications/:id", render: ({ match }) => {
                                        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_admin_AdminClarificationDetail__WEBPACK_IMPORTED_MODULE_5__["AdminClarificationDetail"], { session: this.props.session, client: this.state.adminClient, id: match.params.id }));
                                    } }))))))));
    }
}


/***/ }),

/***/ "./javascript/admin/AdminApiClient.ts":
/*!********************************************!*\
  !*** ./javascript/admin/AdminApiClient.ts ***!
  \********************************************/
/*! exports provided: AdminApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminApiClient", function() { return AdminApiClient; });
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pb */ "./javascript/pb.js");
/* harmony import */ var _pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pb__WEBPACK_IMPORTED_MODULE_0__);

class AdminApiClient {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.baseUrl = this.apiClient.baseUrl;
    }
    async listClarifications(teamId) {
        const klass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.ListClarificationsResponse;
        const resp = await this.request(`${this.baseUrl}/api/admin/clarifications?team_id=${encodeURIComponent(teamId || "")}`, "GET", null, null);
        return klass.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async getClarification(id) {
        const klass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.GetClarificationResponse;
        const resp = await this.request(`${this.baseUrl}/api/admin/clarifications/${encodeURIComponent(id.toString())}`, "GET", null, null);
        return klass.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async respondClarification(payload) {
        const responseClass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.RespondClarificationResponse;
        const payloadClass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.RespondClarificationRequest;
        const payloadMessage = payload
            ? payloadClass.encode(payloadClass.fromObject(payload)).finish()
            : null;
        const resp = await this.request(`${this.baseUrl}/api/admin/clarifications/${encodeURIComponent(payload.id.toString())}`, "PUT", null, payloadMessage);
        return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async createClarification(payload) {
        const responseClass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.CreateClarificationResponse;
        const payloadClass = _pb__WEBPACK_IMPORTED_MODULE_0__["xsuportal"].proto.services.admin.CreateClarificationRequest;
        const payloadMessage = payload
            ? payloadClass.encode(payloadClass.fromObject(payload)).finish()
            : null;
        const resp = await this.request(`${this.baseUrl}/api/admin/clarifications`, "POST", null, payloadMessage);
        return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    request(path, method, query, payload) {
        return this.apiClient.request(path, method, query, payload);
    }
}


/***/ }),

/***/ "./javascript/admin/AdminClarificationDetail.tsx":
/*!*******************************************************!*\
  !*** ./javascript/admin/AdminClarificationDetail.tsx ***!
  \*******************************************************/
/*! exports provided: AdminClarificationDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClarificationDetail", function() { return AdminClarificationDetail; });
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
            question: props.clarification.question,
            answer: props.clarification.answer,
            disclose: props.clarification.disclosed,
        },
    });
    const onSubmit = handleSubmit(async (data, e) => {
        try {
            setRequesting(true);
            console.log(data);
            const resp = await props.client.respondClarification({
                id: props.clarification.id,
                answer: data.answer,
                question: data.question,
                disclose: data.disclose,
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Response")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: onSubmit },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "columns" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "column field is-6" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "AdminClarificationDetail-question" }, "Question"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "textarea", name: "question", id: "AdminClarificationDetail-question", ref: register, placeholder: "", autoFocus: true, disabled: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "column field is-6" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "AdminClarificationDetail-answer" }, "Answer"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "textarea", name: "answer", id: "AdminClarificationDetail-answer", ref: register, placeholder: "" }))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "checkbox" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", name: "disclose", ref: register }),
                            "Disclose (Visible to all teams)"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-primary", type: "submit", disabled: requesting }, "Respond"))),
                error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null))));
};
const AdminClarificationDetail = (props) => {
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    const [clar, setClar,] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        props.client
            .getClarification(parseInt(props.id, 10))
            .then((resp) => setClar(resp.clarification))
            .catch((e) => setError(e));
    }, []);
    const onClarSubmit = (clar) => {
        setClar(clar);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null,
        clar ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clarification__WEBPACK_IMPORTED_MODULE_2__["Clarification"], { clarification: clar, admin: true })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..")),
        clar ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClarForm, { session: props.session, client: props.client, onSubmit: onClarSubmit, clarification: clar })) : null));
};


/***/ }),

/***/ "./javascript/admin/AdminClarificationList.tsx":
/*!*****************************************************!*\
  !*** ./javascript/admin/AdminClarificationList.tsx ***!
  \*****************************************************/
/*! exports provided: AdminClarificationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClarificationList", function() { return AdminClarificationList; });
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
            answer: "",
            question: "",
            teamId: "",
        },
    });
    const onSubmit = handleSubmit(async (data, e) => {
        try {
            setRequesting(true);
            console.log(data);
            const resp = await props.client.createClarification({
                answer: data.answer,
                question: data.question,
                teamId: data.teamId !== "" ? parseInt(data.teamId, 10) : 0,
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "is-4 card-header-title" }, "Create a clarification")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: onSubmit },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "columns" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "column field is-6" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "AdminClarificationListForm-question" }, "Question"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "textarea", name: "question", id: "AdminClarificationListForm-question", ref: register, placeholder: "", autoFocus: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "column field is-6" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "AdminClarificationListForm-answer" }, "Answer"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "textarea", name: "answer", id: "AdminClarificationListForm-answer", ref: register, placeholder: "" }))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "label", htmlFor: "AdminClarificationListForm-teamId" }, "Team ID"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "input", type: "text", id: "AdminClarificationListForm-teamId", name: "teamId", ref: register, placeholder: "optional; disclosed to the all teams if not set" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "button is-primary", type: "submit", disabled: requesting }, "Send"))),
                error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null))));
};
const AdminClarificationList = (props) => {
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
    const renderList = () => {
        if (!list)
            return null;
        return list.map((clar) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clarification__WEBPACK_IMPORTED_MODULE_2__["Clarification"], { clarification: clar, admin: true, key: clar.id.toString() }));
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], { error: error }) : null,
        list ? renderList() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading..")));
};


/***/ }),

/***/ "./javascript/admin/AdminNavbar.tsx":
/*!******************************************!*\
  !*** ./javascript/admin/AdminNavbar.tsx ***!
  \******************************************/
/*! exports provided: AdminNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbar", function() { return AdminNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


class AdminNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: "navbar is-light", role: "navigation", "aria-label": "main navigation" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "navbar-brand" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "navbar-item", to: "/admin/" }, "XSUCON Admin")))));
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

/***/ "./javascript/packs/admin.tsx":
/*!************************************!*\
  !*** ./javascript/packs/admin.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.scss */ "./javascript/packs/application.scss");
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiClient */ "./javascript/ApiClient.ts");
/* harmony import */ var _AdminApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AdminApp */ "./javascript/AdminApp.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);





(async function () {
    var _a;
    const client = new _ApiClient__WEBPACK_IMPORTED_MODULE_1__["ApiClient"]();
    const session = await client.getCurrentSession();
    const elem = document.getElementById("app");
    if ((_a = session.contestant) === null || _a === void 0 ? void 0 : _a.isStaff) {
        react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AdminApp__WEBPACK_IMPORTED_MODULE_2__["AdminApp"], { session: session, client: client }), elem);
    }
    else {
        location.href = "/";
    }
})();


/***/ })

/******/ });
//# sourceMappingURL=admin.js.map