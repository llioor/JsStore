var JsStore =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./codes/main/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./codes/main/config.ts":
/*!******************************!*\
  !*** ./codes/main/config.ts ***!
  \******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config._isLogEnabled = false;
    return Config;
}());



/***/ }),

/***/ "./codes/main/enums.ts":
/*!*****************************!*\
  !*** ./codes/main/enums.ts ***!
  \*****************************/
/*! exports provided: Error_Type, WebWorker_Status, Data_Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error_Type", function() { return Error_Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebWorker_Status", function() { return WebWorker_Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data_Type", function() { return Data_Type; });
var Error_Type;
(function (Error_Type) {
    Error_Type["WorkerNotSupplied"] = "worker_not_supplied";
    Error_Type["IndexedDbUndefined"] = "indexeddb_undefined";
})(Error_Type || (Error_Type = {}));
var WebWorker_Status;
(function (WebWorker_Status) {
    WebWorker_Status["Registered"] = "registerd";
    WebWorker_Status["Failed"] = "failed";
    WebWorker_Status["NotStarted"] = "not_started";
})(WebWorker_Status || (WebWorker_Status = {}));
var Data_Type;
(function (Data_Type) {
    Data_Type["String"] = "string";
    Data_Type["Object"] = "object";
    Data_Type["Array"] = "array";
    Data_Type["Number"] = "number";
    Data_Type["Boolean"] = "boolean";
    Data_Type["Null"] = "null";
})(Data_Type || (Data_Type = {}));


/***/ }),

/***/ "./codes/main/helper.ts":
/*!******************************!*\
  !*** ./codes/main/helper.ts ***!
  \******************************/
/*! exports provided: enableLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLog", function() { return enableLog; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./codes/main/config.ts");

/**
 * Enable log
 *
 */
var enableLog = function () {
    _config__WEBPACK_IMPORTED_MODULE_0__["Config"]._isLogEnabled = true;
};


/***/ }),

/***/ "./codes/main/index.ts":
/*!*****************************!*\
  !*** ./codes/main/index.ts ***!
  \*****************************/
/*! exports provided: Instance, Error_Type, WebWorker_Status, Data_Type, Config, enableLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./codes/main/instance.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instance", function() { return _instance__WEBPACK_IMPORTED_MODULE_0__["Instance"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./codes/main/enums.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error_Type", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["Error_Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebWorker_Status", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["WebWorker_Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Data_Type", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["Data_Type"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./codes/main/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["Config"]; });

/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./codes/main/helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableLog", function() { return _helper__WEBPACK_IMPORTED_MODULE_3__["enableLog"]; });







/***/ }),

/***/ "./codes/main/instance.ts":
/*!********************************!*\
  !*** ./codes/main/instance.ts ***!
  \********************************/
/*! exports provided: Instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instance", function() { return Instance; });
/* harmony import */ var _instance_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance_helper */ "./codes/main/instance_helper.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./codes/main/config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance(worker) {
        return _super.call(this, worker) || this;
    }
    /**
     *  open database
     *
     * @param {string} dbName
     * @returns
     * @memberof Instance
     */
    Instance.prototype.openDb = function (dbName) {
        return this.pushApi({
            name: 'open_db',
            query: dbName
        });
    };
    /**
     * creates DataBase
     *
     * @param {IDataBase} dataBase
     * @returns
     * @memberof Instance
     */
    Instance.prototype.createDb = function (dataBase) {
        return this.pushApi({
            name: 'create_db',
            query: dataBase
        });
    };
    /**
     * drop dataBase
     *
     * @returns
     * @memberof Instance
     */
    Instance.prototype.dropDb = function () {
        return this.pushApi({
            name: 'drop_db',
            query: null
        });
    };
    /**
     * select data from table
     *
     * @template T
     * @param {ISelect} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.select = function (query) {
        return this.pushApi({
            name: 'select',
            query: query
        });
    };
    /**
     * get no of record from table
     *
     * @param {ICount} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.count = function (query) {
        return this.pushApi({
            name: 'count',
            query: query
        });
    };
    /**
     * insert data into table
     *
     * @param {IInsert} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.insert = function (query) {
        return this.pushApi({
            name: 'insert',
            query: query
        });
    };
    /**
     * update data into table
     *
     * @param {IUpdate} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.update = function (query) {
        return this.pushApi({
            name: 'update',
            query: query
        });
    };
    /**
     * remove data from table
     *
     * @param {IRemove} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.remove = function (query) {
        return this.pushApi({
            name: 'remove',
            query: query
        });
    };
    /**
     * delete all data from table
     *
     * @param {string} tableName
     * @returns
     * @memberof Instance
     */
    Instance.prototype.clear = function (tableName) {
        return this.pushApi({
            name: 'clear',
            query: tableName
        });
    };
    /**
     * insert bulk amount of data
     *
     * @param {IInsert} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.bulkInsert = function (query) {
        return this.pushApi({
            name: 'bulk_insert',
            query: query
        });
    };
    /**
     *  export the result in json file
     *
     * @param {ISelect} query
     * @returns
     * @memberof Instance
     */
    Instance.prototype.exportJson = function (query) {
        var _this = this;
        var onSuccess = function (url) {
            var link = document.createElement("a");
            link.href = url;
            link.download = query.from + ".json";
            link.click();
        };
        return new Promise(function (resolve, reject) {
            _this.pushApi({
                name: 'export_json',
                query: query
            }).then(function (url) {
                onSuccess(url);
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * set log status
     *
     * @param {boolean} status
     * @memberof Instance
     */
    Instance.prototype.setLogStatus = function (status) {
        _config__WEBPACK_IMPORTED_MODULE_1__["Config"]._isLogEnabled = status ? status : _config__WEBPACK_IMPORTED_MODULE_1__["Config"]._isLogEnabled;
        this.pushApi({
            name: 'enable_log',
            query: _config__WEBPACK_IMPORTED_MODULE_1__["Config"]._isLogEnabled
        });
    };
    /**
     * get version of database
     *
     * @param {(string | IDbInfo)} dbName
     * @returns
     * @memberof Instance
     */
    Instance.prototype.getDbVersion = function (dbName) {
        return this.pushApi({
            name: 'get_db_version',
            query: dbName
        });
    };
    /**
     * is database exist
     *
     * @param {(IDbInfo | string)} dbInfo
     * @returns
     * @memberof Instance
     */
    Instance.prototype.isDbExist = function (dbInfo) {
        return this.pushApi({
            name: 'is_db_exist',
            query: dbInfo
        });
    };
    /**
     * returns list of database created
     *
     * @returns
     * @memberof Instance
     */
    Instance.prototype.getDbList = function () {
        return this.pushApi({
            name: 'get_db_list',
            query: null
        });
    };
    /**
     * get Database Schema
     *
     * @param {string} dbName
     * @returns
     * @memberof Instance
     */
    Instance.prototype.getDbSchema = function (dbName) {
        return this.pushApi({
            name: 'get_db_schema',
            query: dbName
        });
    };
    return Instance;
}(_instance_helper__WEBPACK_IMPORTED_MODULE_0__["InstanceHelper"]));



/***/ }),

/***/ "./codes/main/instance_helper.ts":
/*!***************************************!*\
  !*** ./codes/main/instance_helper.ts ***!
  \***************************************/
/*! exports provided: InstanceHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceHelper", function() { return InstanceHelper; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log_helper */ "./codes/main/log_helper.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./codes/main/enums.ts");


var InstanceHelper = /** @class */ (function () {
    function InstanceHelper(worker) {
        this.isDbOpened = false;
        this.requestQueue = [];
        this.isCodeExecuting = false;
        this.whiteListApi = ['create_db', 'is_db_exist', 'get_db_version', 'get_db_list', 'open_db'];
        if (worker) {
            this._worker = worker;
            this._worker.onmessage = this.onMessageFromWorker.bind(this);
        }
        else {
            var err = new _log_helper__WEBPACK_IMPORTED_MODULE_0__["LogHelper"](_enums__WEBPACK_IMPORTED_MODULE_1__["Error_Type"].WorkerNotSupplied);
            err.throw();
        }
    }
    InstanceHelper.prototype.onMessageFromWorker = function (msg) {
        this.processFinishedQuery(msg.data);
    };
    InstanceHelper.prototype.processFinishedQuery = function (message) {
        var finishedRequest = this.requestQueue.shift();
        if (finishedRequest) {
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["LogHelper"].log("request finished : " + finishedRequest.name);
            if (message.errorOccured) {
                if (finishedRequest.onError) {
                    finishedRequest.onError(message.errorDetails);
                }
            }
            else {
                if (finishedRequest.onSuccess) {
                    var openDbQueries = ['open_db', 'create_db'];
                    if (openDbQueries.indexOf(finishedRequest.name) >= 0) {
                        this.isDbOpened = true;
                    }
                    finishedRequest.onSuccess(message.returnedValue);
                }
            }
            this.isCodeExecuting = false;
            this.executeQry();
        }
    };
    InstanceHelper.prototype.pushApi = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request.onSuccess = function (result) {
                resolve(result);
            };
            request.onError = function (error) {
                reject(error);
            };
            _this.prcoessExecutionOfQry(request);
        });
    };
    InstanceHelper.prototype.prcoessExecutionOfQry = function (request) {
        this.requestQueue.push(request);
        this.executeQry();
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["LogHelper"].log("request pushed: " + request.name);
    };
    InstanceHelper.prototype.executeQry = function () {
        var _this = this;
        if (!this.isCodeExecuting && this.requestQueue.length > 0) {
            if (this.isDbOpened) {
                this.sendRequestToWorker(this.requestQueue[0]);
                return;
            }
            var allowedQueryIndex_1 = -1;
            this.requestQueue.every(function (item, index) {
                if (_this.whiteListApi.indexOf(item.name) >= 0) {
                    allowedQueryIndex_1 = index;
                    return false;
                }
                return true;
            });
            // shift allowed query to zeroth index
            if (allowedQueryIndex_1 >= 0) {
                this.requestQueue.splice(0, 0, this.requestQueue.splice(allowedQueryIndex_1, 1)[0]);
                this.sendRequestToWorker(this.requestQueue[0]);
            }
        }
    };
    InstanceHelper.prototype.sendRequestToWorker = function (firstRequest) {
        this.isCodeExecuting = true;
        var request = {
            name: firstRequest.name,
            query: firstRequest.query
        };
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["LogHelper"].log("request executing : " + firstRequest.name);
        this._worker.postMessage(request);
    };
    return InstanceHelper;
}());



/***/ }),

/***/ "./codes/main/log_helper.ts":
/*!**********************************!*\
  !*** ./codes/main/log_helper.ts ***!
  \**********************************/
/*! exports provided: LogHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return LogHelper; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./codes/main/enums.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./codes/main/config.ts");


var LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        if (info === void 0) { info = null; }
        this.type = type;
        this._info = info;
        this.message = this.getMsg();
    }
    LogHelper.prototype.throw = function () {
        throw this.get();
    };
    LogHelper.log = function (msg) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["Config"]._isLogEnabled) {
            console.log(msg);
        }
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.logWarning = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.getMsg = function () {
        var errMsg;
        switch (this.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__["Error_Type"].WorkerNotSupplied:
                errMsg = "Worker object is not passed in instance constructor";
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["Error_Type"].IndexedDbUndefined:
                errMsg = "Browser does not support indexeddb";
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());



/***/ })

/******/ });
//# sourceMappingURL=jsstore.js.map