webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR Module


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_models/backend_ip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var backend_ip_address = "http://192.168.60.103\u0E4D:80/";
/* harmony default export */ __webpack_exports__["a"] = (backend_ip_address);
//# sourceMappingURL=backend_ip.js.map

/***/ }),

/***/ "../../../../../src/app/alarm-history/alarm-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n    <!-- BEGIN FLEX-ITEM -->\r\n    <div class=\"flex-item\">\r\n      <!-- BEGIN TABLE-CONTAINER  -->\r\n      <div class=\"table-container\">\r\n        <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n          (keyup)='updateFilter($event)' />\r\n        <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n          <!-- BEGIN ALARM COLUMN  -->\r\n          <ngx-datatable-column name=\"Alarm\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END ALARM COLUMN -->\r\n          <!-- BEGIN DETAIL COLUMN  -->\r\n          <ngx-datatable-column name=\"Detail\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END DETAIL COLUMN -->\r\n          <!-- BEGIN TIME COLUMN -->\r\n          <ngx-datatable-column name=\"Time\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END TIME COLUMN -->\r\n          <!-- BEGIN SEVERITY COLUMN -->\r\n          <ngx-datatable-column name=\"Severity\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END SEVERITY COLUMN -->\r\n        </ngx-datatable>\r\n        <!-- END TABLE -->\r\n      </div>\r\n      <!-- END SEARCH FILTER -->\r\n    </div>\r\n    <!-- END FLEX-ITEM -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER -->\r\n  <!-- BEGIN FLEX-CONTAINER -->\r\n  <div class=\"flex-container\">\r\n    <!-- BEGIN FLEX-FOOTER -->\r\n    <div class=\"flex-fix-padding\" align=\"center\">\r\n      <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" onclick=\"location.href='http://localhost:8000/3'\"\r\n        type=\"button\">Save</button>\r\n    </div>\r\n    <!-- END FLEX-FOOTER -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER -->\r\n  "

/***/ }),

/***/ "../../../../../src/app/alarm-history/alarm-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: default; }\n  .flex-container .button-width {\n    min-width: 110px; }\n  .flex-container .flex-fix-padding {\n    padding: 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .red {\n    color: red; }\n  .flex-container .orange {\n    color: orange; }\n  .flex-container .blue {\n    color: blue; }\n  .flex-container .green {\n    color: #00C853; }\n  .flex-container .shadow {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.table-container {\n  background-color: transparent; }\n  .table-container input.fliter {\n    margin-left: 10px !important;\n    outline: none;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    transition: border-color 0.05s ease-in-out;\n    box-shadow: 0 10px 6px -6px #777; }\n    .table-container input.fliter:focus {\n      border-color: #1985A1; }\n\n:host /deep/ ngx-datatable {\n  background: #fff !important;\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n:host /deep/ datatable-header {\n  font-weight: 600; }\n  :host /deep/ datatable-header:hover span {\n    cursor: pointer; }\n  :host /deep/ datatable-header datatable-header-cell {\n    width: 100%;\n    text-align: center !important; }\n\n:host /deep/ datatable-body-cell {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alarm-history/alarm-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service



var AlarmHistoryComponent = (function () {
    function AlarmHistoryComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'Alarm' },
            { name: 'Detail' },
            { name: 'Time' },
            { name: 'Sererity' }
        ];
        this.temp = this.rows;
    }
    AlarmHistoryComponent.prototype.ngOnInit = function () {
        // CHECK SERVER STATUS
        this.check_server_status();
        // FETCH DATA
        this.fetchData();
    };
    // CHECK SERVER STATUS
    AlarmHistoryComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // FETCH DATA
    AlarmHistoryComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getAlarmHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](data, function (obj) {
                console.log(obj);
                _this.rows.push({ alarm: obj['alarm'], detail: obj['detail'], time: obj['timestamp'], severity: obj['severity'] });
            });
        });
    };
    // TEST FUNCTION
    AlarmHistoryComponent.prototype.clickme = function (row) {
        console.log(row);
    };
    // FILTER <-- Need to fix bug
    AlarmHistoryComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    return AlarmHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]) === "function" && _a || Object)
], AlarmHistoryComponent.prototype, "table", void 0);
AlarmHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alarm-history',
        template: __webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AlarmHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=alarm-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN TABLE-CONTAINER  -->\r\n    <div class=\"table-container\">\r\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n        (keyup)='updateFilter($event)' />\r\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n        <!-- BEGIN ALARM COLUMN  -->\r\n        <ngx-datatable-column name=\"Alarm\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END ALARM COLUMN -->\r\n        <!-- BEGIN DETAIL COLUMN  -->\r\n        <ngx-datatable-column name=\"Detail\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END DETAIL COLUMN -->\r\n        <!-- BEGIN TIME COLUMN -->\r\n        <ngx-datatable-column name=\"Time\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TIME COLUMN -->\r\n        <!-- BEGIN SEVERITY COLUMN -->\r\n        <ngx-datatable-column name=\"Severity\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END SEVERITY COLUMN -->\r\n      </ngx-datatable>\r\n      <!-- END TABLE -->\r\n    </div>\r\n    <!-- END SEARCH FILTER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" onclick=\"location.href='http://localhost:8000/2'\"\r\n      type=\"button\">Save</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: default; }\n  .flex-container .button-width {\n    min-width: 110px; }\n  .flex-container .flex-fix-padding {\n    padding: 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .red {\n    color: red; }\n  .flex-container .orange {\n    color: orange; }\n  .flex-container .blue {\n    color: blue; }\n  .flex-container .green {\n    color: #00C853; }\n  .flex-container .shadow {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.table-container {\n  background-color: transparent; }\n  .table-container input.fliter {\n    margin-left: 10px !important;\n    outline: none;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    transition: border-color 0.05s ease-in-out;\n    box-shadow: 0 10px 6px -6px #777; }\n    .table-container input.fliter:focus {\n      border-color: #1985A1; }\n\n:host /deep/ ngx-datatable {\n  background: #fff !important;\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n:host /deep/ datatable-header {\n  font-weight: 600; }\n  :host /deep/ datatable-header:hover span {\n    cursor: pointer; }\n  :host /deep/ datatable-header datatable-header-cell {\n    width: 100%;\n    text-align: center !important; }\n\n:host /deep/ datatable-body-cell {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service




var AlarmComponent = (function () {
    function AlarmComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.currentAlarmTime = new Date();
        this.patterns = [
            ['I', 'Robot standby', '1'],
            ['I', 'E1 connect to W7', '1'],
            ['I', 'E144 connect to W144', '1'],
            ['I', 'E20 connect to W50', '2'],
            ['I', 'E20 disconnect from W50', '2'],
            ['W', 'Arm slips 1 pulse', '2'],
            ['S', 'Arm slips 2 pulses', '3'],
            ['W', 'Rollback slips 2 pulses', '3'],
            ['S', 'Rollback slips 3 pulses', '3'],
            ['E', 'Gripper torque alarm', '4'],
            ['E', 'Power down', '4'],
            ['H', 'Missing connector', '4'],
        ];
        this.temp = [];
        this.rows = [];
        // { name: obj.alarm, gender: 'Male', company: 'Swimlane' },
        this.columns = [
            { prop: 'Alarm' },
            { name: 'Detail' },
            { name: 'Time' },
            { name: 'Severity' }
        ];
        this.temp = this.rows;
    }
    AlarmComponent.prototype.ngOnInit = function () {
        // CHECK SERVER STATUS
        this.check_server_status();
        // FEETCH DATA
        this.fetchData();
        // setInterval(this.randomAlert(), this.randomTime());
    };
    // CHECK SERVER STATUS
    AlarmComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // SET ALARM HISTORY DATA
    AlarmComponent.prototype.fetchData = function () {
        // this.currentAlarmTime.setMinutes(this.currentAlarmTime.getMinutes() - 1);
        var _this = this;
        // setInterval(function () {
        // console.log('polling', new Date())
        // let since = this.currentAlarmTime.getTime() / 1000
        this.ApiService.getAlarmHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](data, function (obj) {
                console.log(obj);
                _this.rows.push({ alarm: obj['alarm'], detail: obj['detail'], time: obj['timestamp'], severity: obj['severity'] });
            });
        });
        // }, 4000)
        // this.updateSaveUrl(this.currentAlarmTime.getTime())
        // this.randomAlert()
    };
    // SAVE TIME IN .crf FILE
    AlarmComponent.prototype.updateSaveUrl = function (time) {
        console.log('updateSaveUrl', time);
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#save').prop('href', '/2/' + time);
    };
    // CLEAR TABLE
    AlarmComponent.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#alarm').empty();
        this.currentAlarmTime = new Date();
        this.updateSaveUrl(this.currentAlarmTime.getTime());
    };
    // RANDOM MOCKUP DATA
    AlarmComponent.prototype.randomPattern = function () {
        var i = Math.floor(Math.random() * this.patterns.length);
        return this.patterns[i];
    };
    // RANDOM TIME
    AlarmComponent.prototype.randomTime = function () {
        /*return Math.floor((Math.random() * 5000) + 2000);*/
        return Math.floor((Math.random() * 10000) + 10000);
    };
    // RANDOM POST DATA
    AlarmComponent.prototype.randomAlert = function () {
        setTimeout(function () {
            var p = this.randomPattern();
            this.ApiService.connectPort(p[0], p[1], p[2]).then(function (data) {
                console.log('randomAlert Success', data);
                // createTable(data)
            });
            console.log('randomAlert', new Date(), p);
            this.randomAlert();
        }, this.randomTime());
    };
    // TEST FUNCTION
    AlarmComponent.prototype.clickme = function (row) {
        console.log(row);
    };
    AlarmComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    return AlarmComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]) === "function" && _a || Object)
], AlarmComponent.prototype, "table", void 0);
AlarmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alarm',
        template: __webpack_require__("../../../../../src/app/alarm/alarm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alarm/alarm.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AlarmComponent);

var _a, _b, _c;
//# sourceMappingURL=alarm.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarm_alarm_component__ = __webpack_require__("../../../../../src/app/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alarm_history_alarm_history_component__ = __webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_connection_current_connection_component__ = __webpack_require__("../../../../../src/app/current-connection/current-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__port_connection_port_connection_component__ = __webpack_require__("../../../../../src/app/port-connection/port-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__port_connection_mobile_port_connection_mobile_component__ = __webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__port_history_port_history_component__ = __webpack_require__("../../../../../src/app/port-history/port-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__server_status_error_server_status_error_component__ = __webpack_require__("../../../../../src/app/server-status-error/server-status-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__testing_mode_testing_mode_component__ = __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR MODULE


// COMPONENT











// GUARD

var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__port_connection_port_connection_component__["a" /* PortConnectionComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'port_connection_mobile',
        component: __WEBPACK_IMPORTED_MODULE_7__port_connection_mobile_port_connection_mobile_component__["a" /* PortConnectionMobileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'alarm',
        component: __WEBPACK_IMPORTED_MODULE_2__alarm_alarm_component__["a" /* AlarmComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'alarm_history',
        component: __WEBPACK_IMPORTED_MODULE_3__alarm_history_alarm_history_component__["a" /* AlarmHistoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'port_history',
        component: __WEBPACK_IMPORTED_MODULE_8__port_history_port_history_component__["a" /* PortHistoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'current_connection',
        component: __WEBPACK_IMPORTED_MODULE_4__current_connection_current_connection_component__["a" /* CurrentConnectionComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'testing_mode',
        component: __WEBPACK_IMPORTED_MODULE_11__testing_mode_testing_mode_component__["a" /* TestingModeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
    },
    // SERVER STATUS 500
    {
        path: '500',
        component: __WEBPACK_IMPORTED_MODULE_10__server_status_error_server_status_error_component__["a" /* ServerStatusErrorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    // OUT OF PATH LIST WILL REDIRECT TO 404
    {
        path: '**',
        // redirectTo: '/',
        // pathMatch: 'full'
        component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }) // <-- debugging purposes only
            // RouterModule.forRoot(appRoutes, { useHash: true }) // <-- if want to use #
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN CONTAINER -->\r\n<div class=\"main-container\">\r\n  <!-- BEGIN SIDENAV-FAB-CONTAINER -->\r\n  <md-sidenav-container class=\"sidenav-fab-container\">\r\n    <!-- BEGIN NAV BAR -->\r\n    <md-toolbar class=\"toolbar-container\" color=\"primary\" *ngIf=\"showNavbar()\">\r\n    <!-- attr.disabled]=\"this.disable_stops_input == true ? false : null\" -->\r\n      <!-- BEGIN MENU ICON -->\r\n      <div>\r\n        <button id=\"menu-icon\" type=\"button\" md-button class=\"div-icon-menu\" (click)=\"sidenav.toggle(); getUserName();\">\r\n           <md-icon >menu</md-icon>\r\n        </button>\r\n      </div>\r\n      <!-- END MENU ICON -->\r\n      <!-- BEGIN MORE-VERT ICON -->\r\n      <div class=\"warpper-right\">\r\n        <button md-icon-button>\r\n          <md-icon>mail</md-icon>\r\n        </button>\r\n        <button md-icon-button>\r\n          <md-icon>notifications</md-icon>\r\n        </button>\r\n        <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n          <md-icon >more_vert</md-icon>\r\n       </button>\r\n        <!-- BEGIN MENU-LIST -->\r\n        <md-menu #menu=\"mdMenu\">\r\n          <!-- BEGIN NOTIFICATION ICON -->\r\n          <button md-menu-item>\r\n            <md-icon>notifications_off</md-icon>\r\n            <span>Disable alerts</span>\r\n          </button>\r\n          <!-- END NOTIFICATION ICON -->\r\n          <!-- BEGIN CLEAR DATABASE ICON -->\r\n          <button md-menu-item (click)=\"clearDatabase()\">\r\n            <md-icon>delete</md-icon>\r\n            <span>Clear database</span>\r\n          </button>\r\n          <!-- END CLEAR DATABASE ICON -->\r\n        </md-menu>\r\n        <!-- END MENU-LIST -->\r\n      </div>\r\n      <!-- END MORE-VERT ICON -->\r\n    </md-toolbar>\r\n    <!-- END NAV BAR -->\r\n\r\n    <!-- OLD VERSION SIDENAV ! -->\r\n    <!-- <md-sidenav #sidenav mode=\"side\" opened=\"false\"> -->\r\n\r\n    <!-- NEW VERSION SIDENAV ! -->\r\n    <!-- BEGIN SIDENAV -->\r\n    <md-sidenav #sidenav opened=\"false\">\r\n      <!-- BEGIN SCROLLING-CONTENT -->\r\n      <div class=\"scrolling-content\">\r\n        <!-- BEGIN USER-CONTAINER -->\r\n        <header class=\"user-container\">\r\n          <!-- BEGIN AVATAR -->\r\n          <div class=\"avatar-container\">\r\n            <img src=\"../../../static/webapp/assets/user.jpg\" alt=\"Avatar\" class=\"avatar\">\r\n          </div>\r\n          <!-- END AVATAR -->\r\n          <!-- BEGIN NAME-AVATAR-CONTAINER -->\r\n          <div class=\"name-avatar-container\">\r\n            <p>{{ this.username }}</p>\r\n          </div>\r\n          <!-- END NAME-AVATAR-CONTAINER -->\r\n          <!-- BEGIN USER-DROPDOWN-MENU -->\r\n          <div class=\"user-dropdown-menu\">\r\n            <span>{{ this.username }}@xenoptics.com</span>\r\n            <div class=\"mdl-layout-spacer\"></div>\r\n            <button md-button class=\"div-icon\" [mdMenuTriggerFor]=\"menudrop\">\r\n              <md-icon >arrow_drop_down</md-icon>\r\n           </button>\r\n            <md-menu #menudrop=\"mdMenu\">\r\n              <button md-menu-item>\r\n                <md-icon>add</md-icon>\r\n                <span>Add another account...</span>\r\n              </button>\r\n              <button md-menu-item (click)=\"logOut()\">\r\n                <md-icon>remove</md-icon>\r\n                <span>Logout</span>\r\n              </button>\r\n            </md-menu>\r\n          </div>\r\n          <!-- END USER-DROPDOWN-MENU -->\r\n        </header>\r\n        <!-- END USER-CONTAINER -->\r\n        <!-- BEGIN MENU -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"menu-open\" class=\"menu\">\r\n            <div id=\"menu-drop-down\" (click)=\"toggleMenu();\" hidden>\r\n              <a>Menu  \r\n            <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n            </a>\r\n            </div>\r\n            <div id=\"menu-drop-up\" (click)=\"toggleMenu();\">\r\n              <a>Menu  \r\n            <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n          </a>\r\n            </div>\r\n          </div>\r\n          <div id=\"menu-list\" class=\"menu-container-height\">\r\n            <md-list>\r\n              <!-- IF WANT TO ADD LOGO -->\r\n              <!-- <h3 md-subheader><md-icon>home</md-icon> XENO</h3> -->\r\n              <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of links\">\r\n                <md-list-item>\r\n                  <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n                  <h4 md-line>{{ link.name }}</h4>\r\n                </md-list-item>\r\n              </a>\r\n            </md-list>\r\n          </div>\r\n        </div>\r\n        <!-- END MENU -->\r\n        <!-- BEGIN SETTINGS -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"settings-open\" class=\"settings\">\r\n            <div id=\"settings-drop-down\" (click)=\"toggleSettings();\">\r\n              <a>Settings  \r\n              <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n              </a>\r\n            </div>\r\n            <div id=\"settings-drop-up\" (click)=\"toggleSettings();\" hidden>\r\n              <a>Settings  \r\n              <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n            </a>\r\n            </div>\r\n          </div>\r\n          <div id=\"settings-list\" class=\"settings-container-height\" hidden>\r\n            <md-list>\r\n              <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of settinglinks\">\r\n                <md-list-item>\r\n                  <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n                  <h4 md-line>{{ link.name }}</h4>\r\n                </md-list-item>\r\n              </a>\r\n            </md-list>\r\n          </div>\r\n        </div>\r\n        <!-- END SETTINGS -->\r\n        <!-- BEGIN DOCUMENT LABEL -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"documents-open\" class=\"document\">\r\n            <div id=\"documents-drop-down\" (click)=\"toggleDocument();\">\r\n              <a>Document  \r\n                <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n                </a>\r\n            </div>\r\n            <div id=\"documents-drop-up\" (click)=\"toggleDocument();\" hidden>\r\n              <a>Document  \r\n                <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END DOCUMENT LABEL -->\r\n        <!-- BEGIN FOOTER-CONTAINER -->\r\n        <!-- <div class=\"footer-container\"> -->\r\n          <!-- <hr> -->\r\n          <!-- <div class=\"text-center\">\r\n            <span>Help & Feedback</span>\r\n          </div>\r\n        </div> -->\r\n        <!-- END FOOTER-CONTAINER -->\r\n      </div>\r\n      <!-- END SCROLLING-CONTENT -->\r\n    </md-sidenav>\r\n    <!-- END SIDENAV -->\r\n    <!-- BEGIN ROUTER-OUTLET -->\r\n    <router-outlet></router-outlet>\r\n    <!-- END ROUTER-OUTLET -->\r\n  </md-sidenav-container>\r\n  <!-- END SIDE NAV -->\r\n</div>\r\n<!-- END MAIN CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: default; }\n\nspan {\n  cursor: default; }\n\np {\n  cursor: default; }\n\nhr {\n  border: 0;\n  height: 0;\n  border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.hide {\n  visibility: hidden !important; }\n\n.main-container {\n  padding: 0;\n  margin: 0;\n  width: 100vw;\n  height: 100vh; }\n  .main-container .sidenav-fab-container {\n    width: 100%;\n    height: 100vh; }\n    .main-container .sidenav-fab-container .toolbar-container {\n      display: block;\n      padding: 0 10px; }\n      .main-container .sidenav-fab-container .toolbar-container .div-icon-menu {\n        border-radius: 50%;\n        font-size: 24px;\n        height: 34px;\n        margin-left: 0;\n        margin-right: 0;\n        min-width: 38px;\n        width: 32px;\n        padding: 0;\n        overflow: hidden;\n        color: inherit;\n        line-height: normal; }\n      .main-container .sidenav-fab-container .toolbar-container .warpper-right {\n        margin-left: auto;\n        margin-right: 0; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon-mail {\n          border-radius: 50%;\n          font-size: 22px;\n          height: 34px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 38px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon-notification {\n          border-radius: 50%;\n          font-size: 22px;\n          height: 34px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 38px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n    .main-container .sidenav-fab-container .scrolling-content {\n      overflow: auto;\n      width: 100%; }\n      .main-container .sidenav-fab-container .scrolling-content .user-container {\n        box-sizing: border-box;\n        display: -ms-flexbox;\n        display: -webkit-box;\n        display: flex;\n        -ms-flex-direction: column;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -ms-flex-pack: end;\n        -webkit-box-pack: end;\n                justify-content: flex-end;\n        padding: 16px;\n        height: 170px;\n        background: #303F9F;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .avatar-container {\n          padding-bottom: 0; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .avatar-container .avatar {\n            width: 55px;\n            height: 55px;\n            border-radius: 30px; }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .name-avatar-container {\n          padding-bottom: 0;\n          font-weight: bold;\n          color: white; }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu {\n          display: -ms-flexbox;\n          display: -webkit-box;\n          display: flex;\n          position: relative;\n          -ms-flex-direction: row;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n                  flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-box-align: center;\n                  align-items: center;\n          width: 100%;\n          color: white;\n          font-size: 13px; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu .mdl-layout-spacer {\n            -ms-flex-positive: 1;\n            -webkit-box-flex: 1;\n                    flex-grow: 1; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu .div-icon {\n            border-radius: 50%;\n            font-size: 24px;\n            height: 32px;\n            margin-left: 0;\n            margin-right: 0;\n            min-width: 32px;\n            width: 32px;\n            padding: 0;\n            overflow: hidden;\n            color: inherit;\n            line-height: normal; }\n    .main-container .sidenav-fab-container .menu-list-container {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n      height: 100%;\n      margin: 0.5vh 0.5vh; }\n      .main-container .sidenav-fab-container .menu-list-container:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n      .main-container .sidenav-fab-container .menu-list-container .menu {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .menu a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .menu a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .menu .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n      .main-container .sidenav-fab-container .menu-list-container .menu-container-height {\n        height: 320px; }\n      .main-container .sidenav-fab-container .menu-list-container .settings {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .settings a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .settings a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .settings .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n      .main-container .sidenav-fab-container .menu-list-container .document {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .document a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .document a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .document .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n    .main-container .sidenav-fab-container .blank-container {\n      height: 15vh;\n      margin-top: 2vh; }\n    .main-container .sidenav-fab-container .footer-container {\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n      height: 2vh;\n      padding-bottom: 10px;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n      .main-container .sidenav-fab-container .footer-container:hover {\n        box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n      .main-container .sidenav-fab-container .footer-container .text-center {\n        text-align: center;\n        font-size: 14px;\n        margin-top: 2%; }\n        .main-container .sidenav-fab-container .footer-container .text-center span {\n          cursor: pointer; }\n          .main-container .sidenav-fab-container .footer-container .text-center span:hover {\n            color: #3F51B5; }\n      .main-container .sidenav-fab-container .footer-container .text-left {\n        text-align: left; }\n      .main-container .sidenav-fab-container .footer-container .icon-opacity {\n        opacity: 0.25;\n        cursor: pointer; }\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  width: 300px; }\n\n.mat-list .mat-subheader {\n  margin: 24px 0;\n  text-align: center;\n  font-size: 24px; }\n\n.mat-list md-icon {\n  opacity: 0.25; }\n\n.menu-list-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  height: 100%;\n  margin: 0.5vh 0.5vh; }\n  .menu-list-container:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .menu-list-container .settings-container-height {\n    height: 200px; }\n\n:host /deep/ md-list-item.mat-list-item .mat-list-item-content {\n  margin: 12px 24px;\n  border-radius: 5px; }\n\n:host /deep/ .active .mat-list-item-content {\n  color: white;\n  background-color: #D61515;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n\n:host /deep/ a {\n  text-decoration: none; }\n  :host /deep/ a:not(.active):hover .mat-list-item-content {\n    background-color: rgba(0, 0, 0, 0.15);\n    color: blue;\n    cursor: pointer; }\n\n:host /deep/ a:focus {\n  outline: none !important; }\n\n:host /deep/ md-toolbar {\n  cursor: default;\n  min-height: 42px;\n  max-height: 42px;\n  width: 100vw;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  :host /deep/ md-toolbar md-toolbar-row {\n    min-height: 40.5px;\n    max-height: 40.5px;\n    width: 100vw; }\n\n.mat-sidenav-container {\n  background: transparent; }\n\n.mat-sidenav {\n  height: 100vh;\n  width: 300px; }\n\n.mat-icon {\n  height: 27px; }\n\n.blank-container {\n  height: 15vh;\n  margin-top: 2vh; }\n\n.example-scrolling-content {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR Module



// Third-party

// Api Service



var AppComponent = (function () {
    function AppComponent(http, ApiService, AuthenticationService, UserService, router) {
        this.http = http;
        this.ApiService = ApiService;
        this.AuthenticationService = AuthenticationService;
        this.UserService = UserService;
        this.router = router;
        this.links = [
            {
                icon: 'settings_input_component',
                name: 'Port Connection',
                path: '/'
            },
            {
                icon: 'settings_input_component',
                name: 'Current Connection',
                path: '/current_connection'
            },
            {
                icon: 'history',
                name: 'Port History',
                path: '/port_history'
            },
            {
                icon: 'error_outline',
                name: 'Alarm',
                path: '/alarm'
            },
            {
                icon: 'history',
                name: 'Alarm History',
                path: '/alarm_history'
            }
        ];
        this.settinglinks = [
            {
                icon: 'settings',
                name: 'Parameter',
                path: '#'
            },
            {
                icon: 'build',
                name: 'Execution table',
                path: '#'
            },
            {
                icon: 'settings_applications',
                name: 'Testing mode',
                path: '/testing_mode'
            }
        ];
    }
    // TOGGLE SETTINGS MENU
    AppComponent.prototype.toggleSettings = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#settings-list, #settings-drop-up, #settings-drop-down').toggle();
    };
    // TOGGLE MENU
    AppComponent.prototype.toggleMenu = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#menu-list, #menu-drop-down, #menu-drop-up').toggle();
    };
    // TOGGLE DOCUMENT MENU
    AppComponent.prototype.toggleDocument = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#documents-drop-down, #documents-drop-up').toggle();
    };
    // CLEAR DATABASE DATA
    AppComponent.prototype.clearDatabase = function () {
        this.ApiService.clearDatabase('cleardatabase');
    };
    // SHOW NAVBAR
    AppComponent.prototype.showNavbar = function () {
        if (this.router.url === '/login' || this.router.url === '/register') {
            return false;
        }
        else {
            return true;
        }
    };
    // LOGOUT
    AppComponent.prototype.logOut = function () {
        // CALL LOGOUT FUNCTION
        this.AuthenticationService.logout();
        // RE ROUTE TO LOGIN
        this.router.navigateByUrl('/login');
        // MAKE CLICK EVENT TO CLOSE SIDEBAR
        document.getElementById('menu-icon').click();
    };
    // GET USERNAME
    AppComponent.prototype.getUserName = function () {
        // SET VARIABLE
        this.user_data = this.UserService.getUsers();
        this.username = this.user_data['username'];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__port_connection_port_connection_component__ = __webpack_require__("../../../../../src/app/port-connection/port-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__port_connection_mobile_port_connection_mobile_component__ = __webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__port_history_port_history_component__ = __webpack_require__("../../../../../src/app/port-history/port-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alarm_alarm_component__ = __webpack_require__("../../../../../src/app/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alarm_history_alarm_history_component__ = __webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__port_pipe__ = __webpack_require__("../../../../../src/app/port.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__testing_mode_testing_mode_component__ = __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__server_status_error_server_status_error_component__ = __webpack_require__("../../../../../src/app/server-status-error/server-status-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__current_connection_current_connection_component__ = __webpack_require__("../../../../../src/app/current-connection/current-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR MODULE


 // <-- enable production mode .❨╯°□°❩╯︵┻━┻



// MATERIAL MODULE



// Component











// Third-Party



// Services



// Routing


// Guard



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])(); // <-- enable production mode .❨╯°□°❩╯︵┻━┻
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__side_nav_side_nav_component__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__port_connection_port_connection_component__["a" /* PortConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__port_history_port_history_component__["a" /* PortHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__alarm_alarm_component__["a" /* AlarmComponent */],
            __WEBPACK_IMPORTED_MODULE_14__alarm_history_alarm_history_component__["a" /* AlarmHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__port_pipe__["a" /* PortPipe */],
            __WEBPACK_IMPORTED_MODULE_16__testing_mode_testing_mode_component__["a" /* TestingModeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__port_connection_mobile_port_connection_mobile_component__["a" /* PortConnectionMobileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__server_status_error_server_status_error_component__["a" /* ServerStatusErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_28__current_connection_current_connection_component__["a" /* CurrentConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_29__register_register_component__["a" /* RegisterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_25__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/current-connection/current-connection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\n<div class=\"flex-container\">\n  <!-- BEGIN FLEX-ITEM -->\n  <div class=\"flex-item\">\n    <!-- BEGIN TABLE-CONTAINER  -->\n    <div class=\"table-container\">\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\n        (keyup)='updateFilter($event)' />\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\n        <!-- BEGIN EAST PORT COLUMN -->\n        <ngx-datatable-column name=\"East\">\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\n          </ng-template>\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <div>{{value}}</div>\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- END EAST PORT COLUMN -->\n        <!-- BEGIN WEST PORT COLUMN -->\n        <ngx-datatable-column name=\"West\">\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\n          </ng-template>\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <div>{{value}}</div>\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- END WEST PORT COLUMN -->\n        <!-- BEGIN DATE COLUMN  -->\n        <ngx-datatable-column name=\"Date\">\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\n          </ng-template>\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <div>{{value}}</div>\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- END DATE COLUMN -->\n      </ngx-datatable>\n      <!-- END TABLE -->\n    </div>\n    <!-- END SEARCH FILTER -->\n  </div>\n  <!-- END FLEX-ITEM -->\n</div>\n<!-- END FLEX-CONTAINER -->\n<!-- BEGIN FLEX-CONTAINER -->\n<div class=\"flex-container\">\n  <!-- BEGIN FLEX-FOOTER -->\n  <div class=\"flex-fix-padding\" align=\"center\">\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" (click)=\"saveData()\" type=\"button\">Save</button>\n  </div>\n  <!-- END FLEX-FOOTER -->\n</div>\n<!-- END FLEX-CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/current-connection/current-connection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: default; }\n  .flex-container .button-width {\n    min-width: 90px; }\n  .flex-container .button-red {\n    background: red;\n    color: white; }\n  .flex-container .flex-fix-padding {\n    padding: 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .red {\n    color: red; }\n  .flex-container .orange {\n    color: orange; }\n  .flex-container .blue {\n    color: blue; }\n  .flex-container .green {\n    color: #00C853; }\n  .flex-container .shadow {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.table-container {\n  background-color: transparent; }\n  .table-container input.fliter {\n    margin-left: 10px !important;\n    outline: none;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    transition: border-color 0.05s ease-in-out;\n    box-shadow: 0 10px 6px -6px #777; }\n    .table-container input.fliter:focus {\n      border-color: #1985A1; }\n\n:host /deep/ ngx-datatable {\n  background: #fff !important;\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n:host /deep/ datatable-header {\n  font-weight: 600; }\n  :host /deep/ datatable-header:hover span {\n    cursor: pointer; }\n  :host /deep/ datatable-header datatable-header-cell {\n    width: 100%;\n    text-align: center !important; }\n\n:host /deep/ datatable-body-cell {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/current-connection/current-connection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentConnectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service

// Third-party


var CurrentConnectionComponent = (function () {
    function CurrentConnectionComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.selected = [];
        // COLUMNS VARIABLES
        this.columns = [
            { name: 'East' },
            { name: 'West' },
            { name: 'Date' }
        ];
        this.temp = this.rows;
    }
    CurrentConnectionComponent.prototype.ngOnInit = function () {
        // CHECK SERVER STATUS
        this.check_server_status();
        // FETCH DATA
        this.fetchData();
    };
    // CHECK SERVER STATUS
    CurrentConnectionComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // SET DATA TABLE
    CurrentConnectionComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getConnectedPort().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](data, function (obj) {
                var date = new Date(obj['connected_date']);
                var day = date.toString().substring(0, 15); // not using right now
                var time = date.toString().substring(15); // now using right now
                _this.rows.push({
                    east: 'E' + obj['east'], west: 'W' + obj['west'], date: date
                });
            });
        });
    };
    return CurrentConnectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]) === "function" && _a || Object)
], CurrentConnectionComponent.prototype, "table", void 0);
CurrentConnectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-current-connection',
        template: __webpack_require__("../../../../../src/app/current-connection/current-connection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/current-connection/current-connection.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CurrentConnectionComponent);

var _a, _b, _c;
//# sourceMappingURL=current-connection.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN CONTAINER -->\r\n<md-card class=\"container\">\r\n  <!-- BEGIN FLEX-1 -->\r\n  <div class=\"flex-1\">\r\n    <div>\r\n      <p>XENOPTICS</p>\r\n    </div>\r\n  </div>\r\n  <!-- END FLEX-1 -->\r\n\r\n  <!-- BEGIN FLEX-2 -->\r\n  <div class=\"flex-2\">\r\n    <div>\r\n\r\n      <md-form-field>\r\n        <input mdInput placeholder=\"Username\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n        />\r\n      </md-form-field>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- END FLEX-2 -->\r\n\r\n  <!-- BEGIN FLEX-3 -->\r\n  <div class=\"flex-3\">\r\n    <div>\r\n\r\n      <md-form-field>\r\n        <input mdInput placeholder=\"Password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n          (keyup)=\"catchEnter($event)\" />\r\n      </md-form-field>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- END FLEX-3 -->\r\n\r\n  <!-- BEGIN FLEX-4 -->\r\n  <div class=\"flex-4\">\r\n    <div class=\"item-1\">\r\n      <button md-raised-button color=\"primary\" (click)=\"login()\" [attr.disabled]=\"validate_login_button() === false ? true : null\"\r\n        disabled>Log In</button>\r\n    </div>\r\n    <div class=\"item-2\">\r\n      <button md-raised-button color=\"primary\" (click)=\"registerRoute()\">Register</button>\r\n    </div>\r\n    <div class=\"item-3\">\r\n      <md-card id=\"error\" class=\"hide\">\r\n        <p>{{ this.error }}</p>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n  <!-- END FLEX-4 -->\r\n</md-card>\r\n<!-- END CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*****Container*****/\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 2rem auto;\n  /*****Flex-1*****/\n  /*****Flex-2*****/\n  /*****Flex-3*****/\n  /*****Flex-4*****/ }\n  @media only screen and (min-device-width: 640px) {\n    .container {\n      width: 400px;\n      height: 280px; } }\n  @media only screen and (max-device-width: 640px) {\n    .container {\n      width: 80vw;\n      height: 280px; } }\n  .container .flex-1 div {\n    width: 100%;\n    height: 60px;\n    background: #3f51b5;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n    .container .flex-1 div p {\n      margin: 0 auto;\n      padding: 20px 0 0 20px;\n      font-size: 20px;\n      color: white;\n      cursor: default; }\n  .container .flex-2 div {\n    width: 100%;\n    height: 70px; }\n    .container .flex-2 div md-form-field {\n      padding-top: 20px;\n      width: 100%; }\n  .container .flex-3 div {\n    width: 100%;\n    height: 70px; }\n    .container .flex-3 div md-form-field {\n      padding-top: 20px;\n      width: 100%; }\n  .container .flex-4 {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding-top: 2rem; }\n    .container .flex-4 .item-1 {\n      margin-right: 5px; }\n    .container .flex-4 .item-2 {\n      margin-left: 5px; }\n    .container .flex-4 .item-3 {\n      margin-left: 5px; }\n      .container .flex-4 .item-3 md-card {\n        background: #ec407a; }\n      .container .flex-4 .item-3 p {\n        color: white;\n        cursor: default; }\n        @media only screen and (min-device-width: 640px) {\n          .container .flex-4 .item-3 p {\n            font-size: 10px; } }\n        @media only screen and (max-device-width: 640px) {\n          .container .flex-4 .item-3 p {\n            font-size: 8px; } }\n\n/*-----------Global Class*-----------/\r\n\r\n/*****Hide*****/\n.hide {\n  visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, userservice) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userservice = userservice;
        this.model = {};
        this.loading = false; // <-- Not using right now
        this.error = '';
        this.current_user = this.userservice.getUsers();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // check current user
        this.checkCurrentUser();
        // reset login status
        // this.authenticationService.logout();
    };
    // VALIDATE CURRENT USER
    LoginComponent.prototype.checkCurrentUser = function () {
        // set fake token in localStorage first ** this versy important
        localStorage.setItem('token', JSON.stringify({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }));
        if (this.current_user['username'] && this.current_user['username'] !== null) {
            this.router.navigate(['/']);
        }
    };
    // LOGIN
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .then(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                document.getElementById('error').classList.remove('hide');
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    // VALIDATE INPUT TO ENABLE / DISABLE LOGIN BUTTON
    LoginComponent.prototype.validate_login_button = function () {
        if (this.model.username && this.model.password) {
            return true;
        }
        else {
            document.getElementById('error').classList.add('hide');
            return false;
        }
    };
    // CATCH ENTER
    LoginComponent.prototype.catchEnter = function (e) {
        // IF KEYUP EVENT IS "ENTER"
        if (e.keyCode === 13) {
            // CHECK USERNAME AND PASSWORD NOT NULL OR BLANK
            if ((this.model.username && this.model.username !== '') && (this.model.password && this.model.password !== '')) {
                this.login();
            }
        }
    };
    LoginComponent.prototype.registerRoute = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN-CONTAINER -->\r\n<div class=\"main-container\">\r\n\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <p>\r\n      404\r\n    </p>\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n\r\n  <!-- BEGIN BUTTON-CONTAINER -->\r\n  <div class=\"button-container Blink\">\r\n    <span mdTooltip=\"Are You Sure, You're Not Drunk?\" mdTooltipPosition=\"right\">\r\n    <button (click)='goHome()'>GO HOME DUDE <br/> YOU'RE DRUNK</button>\r\n    </span>\r\n  </div>\r\n  <!-- END BUTTON-CONTAINER -->\r\n\r\n</div>\r\n<!-- END MAIN-CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Global\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.Blink {\n  -webkit-animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;\n          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/* Main-container\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.main-container {\n  width: 100%;\n  height: 94vh;\n  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); }\n  .main-container .container {\n    padding-top: 150px;\n    text-align: center; }\n    .main-container .container p {\n      color: white;\n      font-size: 200px;\n      margin-top: 0;\n      margin-bottom: 0;\n      cursor: default; }\n  .main-container .button-container {\n    text-align: center; }\n    .main-container .button-container button {\n      font-size: 14px;\n      font-weight: bold;\n      color: white;\n      width: 180px;\n      height: 60px;\n      background: transparent;\n      border: 1.1px solid white;\n      border-radius: 3px;\n      line-height: 20px;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    // GO HOME
    PageNotFoundComponent.prototype.goHome = function () {
        this.router.navigateByUrl('/');
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FIRST-SECTION -->\r\n<div class=\"section first-section\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n\r\n      <!-- BEGIN FOUR COLUMNS -->\r\n      <div class=\"four columns\">\r\n        <!-- BEGIN CONTAINER -->\r\n        <div class=\"container\">\r\n          <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n          <div class=\"flex-item-container\">\r\n            <!-- BEGIN TEMPERATURE-CONTAINER -->\r\n            <div class=\"temperature-container\">\r\n              <!-- BEGIN FLEX-ITEM-1 -->\r\n              <div class=\"flex-item-1\">\r\n                <!-- BEGIN CONTENT-1 -->\r\n                <div class=\"content-1\">\r\n                  <span>26 °C</span>\r\n                  <p>78.8 °C</p>\r\n                </div>\r\n                <!-- END CONTENT-1 -->\r\n                <!-- BEGIN CONTENT-2 -->\r\n                <div class=\"content-2\">\r\n                  <span>Temperature</span>\r\n                </div>\r\n                <!-- END CONTENT-2 -->\r\n              </div>\r\n              <!-- END FLEX-ITEM-2 -->\r\n              <!-- BEGIN FLEX-ITEM-2 -->\r\n              <div class=\"flex-item-2\">\r\n                <img alt=\"Temperature-icon\" src=\"../../../static/webapp/assets/temp-icon.png\">\r\n              </div>\r\n              <!-- END FLEX-ITEM-2 -->\r\n            </div>\r\n            <!-- END TEMPERATURE-CONTAINER -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-CONTAINER -->\r\n        </div>\r\n        <!-- END CONTAINER -->\r\n      </div>\r\n      <!-- END FOUR COLUMNS -->\r\n\r\n      <!-- BEGIN FOUR COLUMNS -->\r\n      <div class=\"four columns\">\r\n        <!-- BEGIN CONTAINER -->\r\n        <div class=\"container\">\r\n          <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n          <div class=\"flex-item-container\">\r\n            <!-- BEGIN HUMIDITY-CONTAINER -->\r\n            <div class=\"humidity-container\">\r\n              <!-- BEGIN FLEX-ITEM-1 -->\r\n              <div class=\"flex-item-1\">\r\n                <!-- BEGIN CONTENT-1 -->\r\n                <div class=\"content-1\">\r\n                  <span>50%</span>\r\n                </div>\r\n                <!-- END CONTENT-1 -->\r\n                <!-- BEGIN CONTENT-2 -->\r\n                <div class=\"content-2\">\r\n                  <span>Humidity</span>\r\n                </div>\r\n                <!-- END CONTENT-2 -->\r\n              </div>\r\n              <!-- END FLEX-ITEM-1 -->\r\n              <!-- BEGIN FLEX-ITEM-2 -->\r\n              <div class=\"flex-item-2\">\r\n                <img alt=\"Temperature-icon\" src=\"../../../static/webapp/assets/humidity-icon.png\">\r\n              </div>\r\n              <!-- END FLEX-ITEM-2 -->\r\n            </div>\r\n            <!-- END HUMIDITY-CONTAINER -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-CONTAINER -->\r\n        </div>\r\n        <!-- END CONTAINER -->\r\n      </div>\r\n      <!-- END FOUR COLUMNS -->\r\n\r\n      <!-- BEGIN FOUR COLUMNS -->\r\n      <div class=\"four columns\">\r\n        <!-- BEGIN CONTAINER -->\r\n        <div class=\"container\">\r\n          <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n          <div class=\"flex-item-container\">\r\n            <!-- BEGIN TIME-CONTAINER -->\r\n            <div class=\"time-container\">\r\n              <!-- BEGIN FLEX-ITEM-1 -->\r\n              <div class=\"flex-item-1\">\r\n                <!-- BEGIN CONTENT-1 -->\r\n                <div class=\"content-1\">\r\n                  <span>54 sec.</span>\r\n                </div>\r\n                <!-- END CONTENT-1 -->\r\n                <!-- BEGIN CONTENT-2 -->\r\n                <div class=\"content-2\">\r\n                  <span>Avg times</span>\r\n                </div>\r\n                <!-- END CONTENT-2 -->\r\n              </div>\r\n              <!-- END FLEX-ITEM-1 -->\r\n              <!-- BEGIN FLEX-ITEM-2 -->\r\n              <div class=\"flex-item-2\">\r\n                <img alt=\"Temperature-icon\" src=\"../../../static/webapp/assets/timer-icon.png\">\r\n              </div>\r\n              <!-- END FLEX-ITEM-2 -->\r\n            </div>\r\n            <!-- END TIME-CONTAINER -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-CONTAINER -->\r\n        </div>\r\n        <!-- END CONTAINER -->\r\n      </div>\r\n      <!-- END FOUR COLUMNS -->\r\n\r\n    </div>\r\n    <!-- END ROW -->\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END FIRST-SECTION -->\r\n\r\n<!-- BEGIN EAST-BANNER -->\r\n<div class=\"section east-banner\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n      <!-- BEGIN COLUMN -->\r\n      <div class=\"column\">\r\n        <md-card>East port table</md-card>\r\n      </div>\r\n      <!-- END COLUMN -->\r\n    </div>\r\n    <!-- END ROW -->\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END EAST-BANNER -->\r\n\r\n<!-- BEGIN SECOND-SECTION -->\r\n<div class=\"section second-section\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n\r\n      <!-- BEGIN ONE-HALF COLUMN -->\r\n      <div class=\"one-half column\">\r\n        <!-- BEGIN LEFT-TABLE -->\r\n        <div class=\"left-table\">\r\n          <div *ngFor=\"let row of eportschunk_left_table\">\r\n            <div id=\"{{ column }}\" class=\"East\" [ngClass]=\"[isSelectEast(column), disabledEastPort(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">\r\n              <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipEast(column)\" mdTooltipPosition=\"above\">\r\n                  <span [mdTooltip]=\"pushEastNote(column)\" mdTooltipPosition=\"below\">{{ column }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END LEFT-TABLE -->\r\n      </div>\r\n      <!-- END ONE-HALF COLUMN -->\r\n\r\n      <!-- BEGIN ONE-HALF COLUMN -->\r\n      <div class=\"one-half column\">\r\n        <!-- BEGIN RIGHT-TABLE -->\r\n        <div class=\"right-table\">\r\n          <div *ngFor=\"let row of eportschunk_right_table\">\r\n            <div id=\"{{ column }}\" class=\"East\" [ngClass]=\"[isSelectEast(column), disabledEastPort(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">\r\n                <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipEast(column)\" mdTooltipPosition=\"above\">\r\n                    <span [mdTooltip]=\"pushEastNote(column)\" mdTooltipPosition=\"below\">{{ column }}</span>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END RIGHT-TABLE -->\r\n      </div>\r\n      <!-- END ONE-HALF COLUMN -->\r\n\r\n    </div>\r\n    <!-- END ROW -->\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END SECOND-SECTION -->\r\n\r\n<!-- BEGIN WEST-BANNER -->\r\n<div class=\"section west-banner\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n      <!-- BEGIN COLUMN -->\r\n      <div class=\"column\">\r\n        <md-card>West port table</md-card>\r\n      </div>\r\n      <!-- END COLUMN -->\r\n    </div>\r\n    <!-- END ROW -->\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END WEST-BANNER -->\r\n\r\n<!-- BEGIN THIRD-SECTION -->\r\n<div class=\"section third-section\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n\r\n      <!-- BEGIN ONE-HALF COLUNB -->\r\n      <div class=\"one-half column\">\r\n        <!-- BEGIN LEFT-TABLE -->\r\n        <div class=\"left-table\">\r\n          <div *ngFor=\"let row of wportschunk_left_table\">\r\n            <div id=\"{{ column }}\" class=\"West\" [ngClass]=\"[isSelectWest(column), disabledWestPort(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">\r\n                <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipWest(column)\" mdTooltipPosition=\"above\">\r\n                    <span [mdTooltip]=\"pushWestNote(column)\" mdTooltipPosition=\"below\">{{ column }}</span>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END LEFT-TABLE -->\r\n      </div>\r\n      <!-- END ONE-HALF COLUNB -->\r\n\r\n      <!-- BEGIN ONE-HALF COLUNB -->\r\n      <div class=\"one-half column\">\r\n        <!-- BEGIN RIGHT-TABLE -->\r\n        <div class=\"right-table\">\r\n          <div *ngFor=\"let row of wportschunk_right_table\">\r\n            <div id=\"{{ column }}\" class=\"West\" [ngClass]=\"[isSelectWest(column), disabledWestPort(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">\r\n                <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipWest(column)\" mdTooltipPosition=\"above\">\r\n                    <span [mdTooltip]=\"pushWestNote(column)\" mdTooltipPosition=\"below\">{{ column }}</span>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END RIGHT-TABLE -->\r\n      </div>\r\n      <!-- BEGIN ONE-HALF COLUNB -->\r\n\r\n    </div>\r\n    <!-- END ROW -->\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END THIRD-SECTION -->\r\n\r\n<!-- BEGIN FOURTH-SECTION -->\r\n<div class=\"section fourth-section\">\r\n  <!-- BEGIN CONTAINER -->\r\n  <div class=\"container\">\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n\r\n      <!-- BEGIN TWELVE COLUMNS -->\r\n      <div class=\"twelve columns\">\r\n        <div class=\"first-container\" align=\"center\">\r\n          <div class=\"button-container\">\r\n            <div class=\"button-connect-container\">\r\n              <div class=\"item-1\">\r\n                <div class=\"connect-button-circle Blink\"></div>\r\n              </div>\r\n              <div class=\"item-2\">\r\n                <button md-raised-button id=\"Connect\" (click)=\"postConnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_connect_button == true ? false : null\"\r\n                  disabled>Connect</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END TWELVE COLUMNS -->\r\n\r\n      <!-- BEGIN TWELVE COLUMNS -->\r\n      <div class=\"twelve columns\">\r\n        <!-- BEGIN FIRST-CONTAINER -->\r\n        <div class=\"first-container\" align=\"center\">\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-DISCONNECT-CONTAINER -->\r\n            <div class=\"button-disconnect-container\">\r\n              <!-- BEGIN ITEM-1 -->\r\n              <div class=\"item-1\">\r\n                <div class=\"disconnect-button-circle Blink\"></div>\r\n              </div>\r\n              <!-- END ITEM-1 -->\r\n              <!-- BEGIN ITEM-2 -->\r\n              <div class=\"item-2\">\r\n                <button md-raised-button id=\"Disconnect\" (click)=\"postDisconnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_disconnect_button == true ? false : null\"\r\n                  disabled>Disconnect</button>\r\n              </div>\r\n              <!-- END ITEM-2 -->\r\n            </div>\r\n            <!-- END BUTTON-DISCONNECT-CONTAINER -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n        </div>\r\n        <!-- END FIRST-CONTAINER -->\r\n      </div>\r\n      <!-- END TWELVE COLUMNS -->\r\n\r\n    </div>\r\n    <!-- END ROW -->\r\n\r\n    <!-- BEGIN ROW -->\r\n    <div class=\"row\">\r\n\r\n      <!-- BEGIN SIX COLUMNS -->\r\n      <div class=\"six columns\">\r\n        <!-- BEGIN SECOND-CONTAINER -->\r\n        <div class=\"second-container\">\r\n          <div id=\"error-dialog\" class=\"hide\">\r\n            <md-card class=\"Blink\">{{ error_message }}</md-card>\r\n          </div>\r\n        </div>\r\n        <!-- END SECOND-CONTAINER -->\r\n      </div>\r\n      <!-- END SIX COLUMNS -->\r\n\r\n      <!-- BEGIN SIX COLUMS -->\r\n      <div class=\"six columns\">\r\n        <!-- BEGIN SECOND-CONTAINER -->\r\n        <div class=\"second-container\"></div>\r\n        <!-- END SECOND-CONTAINER -->\r\n      </div>\r\n      <!-- END SIX COLUMS -->\r\n    </div>\r\n    <!-- END ROW -->\r\n\r\n  </div>\r\n  <!-- END CONTAINER -->\r\n</div>\r\n<!-- END FOURTH-SECTION -->"

/***/ }),

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/normalize.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/skeleton.css"), "");

// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Import skeleton framework\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Global\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nmd-card {\n  cursor: default; }\n\n.Blink {\n  -webkit-animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;\n          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.hide {\n  visibility: hidden; }\n\n#Connect:disabled {\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.38); }\n\n#Disconnect:disabled {\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.38); }\n\n/* First-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.first-section {\n  height: auto; }\n  .first-section .container {\n    text-align: center;\n    width: 100%; }\n    .first-section .container .flex-item-container {\n      width: 100%;\n      height: 100%; }\n      .first-section .container .flex-item-container .temperature-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #0091ea;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .temperature-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 p {\n              font-size: 14px;\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .temperature-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n      .first-section .container .flex-item-container .humidity-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #00c652;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .humidity-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 p {\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .humidity-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n      .first-section .container .flex-item-container .time-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #E74856;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .time-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 p {\n              font-size: 14px;\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .time-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .time-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .time-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n\n/* east-banner\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.east-banner {\n  text-align: center;\n  margin-top: 1rem; }\n\n/* Second-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.second-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .second-section .left-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .second-section .left-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .second-section .left-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n  .second-section .right-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .second-section .right-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .second-section .right-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n\n/* west-banner\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.west-banner {\n  text-align: center;\n  margin-top: 1rem; }\n\n/* Third-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.third-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .third-section .left-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .third-section .left-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .third-section .left-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n  .third-section .right-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .third-section .right-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .third-section .right-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n\n/* Fourth-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.fourth-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .fourth-section .first-container {\n    margin-top: 0.5rem;\n    height: auto; }\n    .fourth-section .first-container .button-container {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      width: auto;\n      height: 45px; }\n      .fourth-section .first-container .button-container .button-connect-container {\n        width: 212px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        margin-right: 5px;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        border-radius: 45px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .fourth-section .first-container .button-container .button-connect-container .item-1 {\n          width: 20%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-connect-container .item-1 .connect-button-circle {\n            border-radius: 50%;\n            width: 15px;\n            height: 15px;\n            background: #3f51b5;\n            margin-left: 10px !important;\n            -webkit-transform: translateY(95%);\n                    transform: translateY(95%); }\n        .fourth-section .first-container .button-container .button-connect-container .item-2 {\n          margin-left: 10px;\n          width: 80%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-connect-container .item-2 button {\n            width: 152px;\n            border: none;\n            border-radius: 20px;\n            -webkit-transform: translateY(7%);\n                    transform: translateY(7%); }\n            .fourth-section .first-container .button-container .button-connect-container .item-2 button:hover {\n              cursor: pointer;\n              color: rgba(255, 255, 255, 0.87); }\n            .fourth-section .first-container .button-container .button-connect-container .item-2 button:disabled {\n              background-color: rgba(0, 0, 0, 0.115);\n              border: none;\n              cursor: default; }\n      .fourth-section .first-container .button-container .button-disconnect-container {\n        width: 210px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        margin-right: 5px;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        border-radius: 45px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .fourth-section .first-container .button-container .button-disconnect-container .item-1 {\n          width: 20%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-disconnect-container .item-1 .disconnect-button-circle {\n            border-radius: 50%;\n            width: 15px;\n            height: 15px;\n            background: #E74856;\n            margin-left: 10px !important;\n            -webkit-transform: translateY(95%);\n                    transform: translateY(95%); }\n        .fourth-section .first-container .button-container .button-disconnect-container .item-2 {\n          margin-left: 10px;\n          width: 80%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-disconnect-container .item-2 button {\n            border: none;\n            background: #E74856;\n            border-radius: 20px;\n            -webkit-transform: translateY(7%);\n                    transform: translateY(7%); }\n            .fourth-section .first-container .button-container .button-disconnect-container .item-2 button:hover {\n              cursor: pointer;\n              color: rgba(255, 255, 255, 0.87); }\n            .fourth-section .first-container .button-container .button-disconnect-container .item-2 button:disabled {\n              background-color: rgba(0, 0, 0, 0.115);\n              border: none;\n              cursor: default; }\n  .fourth-section .second-container {\n    margin-top: 0.5rem;\n    height: 50px;\n    background: #eee; }\n\n/* Port-color\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.selected {\n  color: white !important;\n  background: #555555 !important; }\n\n.connected {\n  color: white !important;\n  background: #00C853 !important;\n  box-shadow: none !important; }\n\n.pending {\n  color: white !important;\n  background: #D61515 !important;\n  box-shadow: none !important; }\n\n.break {\n  color: white !important;\n  background: #FBC02D !important;\n  box-shadow: none !important; }\n\n.pair {\n  color: white !important;\n  background: #3f51b5 !important; }\n\n.selected-pair {\n  background: #555555 !important;\n  cursor: default;\n  color: white; }\n\n.current-selected {\n  border-style: solid !important;\n  border-width: 1.2px !important;\n  border-color: orange !important;\n  font-weight: 500; }\n\n.unselectable {\n  color: #9E9E9E;\n  background: #E0E0E0;\n  pointer-events: none; }\n\n.port-unselectable {\n  color: #9E9E9E;\n  background: #E0E0E0;\n  pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortConnectionMobileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service




var PortConnectionMobileComponent = (function () {
    function PortConnectionMobileComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        // PORTS DATA
        this.eports = []; // 144 EAST PORTS
        this.wports = []; // 144 WEST PORTS
        this.eportschunk = []; // 144 to [12,12,...]
        this.wportschunk = []; // 144 to [12,12,...]
        this.portID = []; // PORT ID
        this.eportNote = []; // EAST PORT NOTE
        this.wportNote = []; // WEST PORT NOTE
        this.eportschunk_left_table = new Array(); // EAST PORT LEFT TABLE CHUNK 6 OBJECT [12,12,...]
        this.eportschunk_right_table = new Array(); // EAST PORT RIGHT TABLE CHUNK 6 OBJECT [12,12,...]
        this.wportschunk_left_table = new Array(); // WEST PORT LEFT TABLE CHUNK 6 OBJECT [12,12,...]
        this.wportschunk_right_table = new Array(); // WEST PORT RIGHT TABLE CHUNK 6 OBJECT [12,12,...]
        // CONNECTION DATA
        this.pair = []; // PAIR OF CONNECTED PORT {[east, west]}
        // LOCAL & USER EVENT DATA
        this.selectedEastPortID = ''; // CURRENT SELECTED EAST PORT
        this.selectedWestPortID = ''; // CURRENT SELECTED WEST PORT
        this.stops = JSON.parse(localStorage.getItem('stops')); // CURRENT STOPS POINT ROBOT IN DEBUG MODE
        this.eValue = 1; // VALUE OF EPORT
        this.wValue = 1; // VALUE OF WPORT
        this.debugMode = false; // DEBUG MODE
        this.error_message = undefined; // ERROR MESSAGE
        // DISABLE ULITIES
        this.unselectable_table = false; // DISABLED TABLE
        this.disable_stops_input = false; // DISABLED STOPS INPUT
        this.disable_sequence_input = false; // DISABLED SEQUENCE INPUT
        this.disabled_connect_button = false; // DISABLED CONNECT BUTTON
        this.disabled_disconnect_button = false; // DISABLED DISCONNECT BUTTON
        this.disabled_continue_button = false; // DISABLED CONTINUE BUTTON
        this.availableEastPort = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
        this.availableWestPort = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
        this.disableEastPortArray = [
            'E25', 'E26', 'E27', 'E28', 'E29', 'E30', 'E31', 'E32', 'E33', 'E34',
            'E35', 'E36', 'E37', 'E38', 'E39', 'E40', 'E41', 'E42', 'E43', 'E44',
            'E45', 'E46', 'E47', 'E48', 'E49', 'E50', 'E51', 'E52', 'E53', 'E54',
            'E55', 'E56', 'E57', 'E58', 'E59', 'E60'
        ]; // SET UNVAILABLE EAST PORT ARRAY
        this.disableWestPortArray = [
            'W25', 'W26', 'W27', 'W28', 'W29', 'W30', 'W31', 'W32', 'W33', 'W34',
            'W35', 'W36', 'W37', 'W38', 'W39', 'W40', 'W41', 'W42', 'W43', 'W44',
            'W45', 'W46', 'W47', 'W48', 'W49', 'W50', 'W51', 'W52', 'W53', 'W54',
            'W55', 'W56', 'W57', 'W58', 'W59', 'W60'
        ]; // SET UNVAILABLE WEST PORT ARRAY
        // DATA FROM DOM
        this.all_east = document.getElementsByClassName('East');
        this.all_west = document.getElementsByClassName('West');
    }
    PortConnectionMobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // CHECK SERVER STATUS
        this.check_server_status();
        // DEVICE DETECT
        this.deviceDetect();
        // FETCH DATA
        this.fetchData();
        // SET COLOR OF PORT CONNECTION
        this.setConnectedPort();
        // PUSH UNAVAILABLE PORT ARRAY
        this.pushNotAvailablePort();
        // CHECK STATUS EVERY 5 SEC.
        this.timerInterval = setInterval(function () {
            _this.checkStatus();
        }, 1500);
    };
    PortConnectionMobileComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval); // <-- CLEAR INTERVAL
    };
    // CHECK SERVER STATUS
    PortConnectionMobileComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // DEVICE DETECT
    PortConnectionMobileComponent.prototype.deviceDetect = function () {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.router.navigateByUrl('/');
        }
    };
    // FETCH DATA
    PortConnectionMobileComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getAllPort().then(function (data) {
            _this.eports = data.eports;
            _this.eportschunk = data.eportschunk;
            _this.wports = data.wports;
            _this.wportschunk = data.wportschunk;
            _this.eportNote = data.eportNote;
            _this.wportNote = data.wportNote;
            _this.portID = data.id;
            for (var i = 0; i < 12; i++) {
                // PUSH INDEX < 6
                if (i < 6) {
                    _this.eportschunk_left_table.push(_this.eportschunk[i]);
                    _this.wportschunk_left_table.push(_this.wportschunk[i]);
                    // PUSH INDEX => 6
                }
                else {
                    _this.eportschunk_right_table.push(_this.eportschunk[i]);
                    _this.wportschunk_right_table.push(_this.wportschunk[i]);
                }
            }
        });
    };
    // PUSH EAST PORT NOTE
    PortConnectionMobileComponent.prototype.pushEastNote = function (id) {
        var i = id.substring(1);
        var index = parseInt(i, 10) - 1;
        if (id === 'E' + id.substring(1)) {
            return this.eportNote[index];
        }
    };
    // PUSH WEST PORT NOTE
    PortConnectionMobileComponent.prototype.pushWestNote = function (id) {
        var i = id.substring(1);
        var index = parseInt(i, 10) - 1;
        if (id === 'W' + id.substring(1)) {
            return this.wportNote[index];
        }
    };
    // CHECK CURRENT ROBOT STATUS
    PortConnectionMobileComponent.prototype.checkStatus = function () {
        var _this = this;
        this.ApiService.checkStatus().then(function (data) {
            _this.sequence = data.sequence;
            _this.status = data.status;
            _this.action = data.action;
            console.log('Cuurent sequence :', _this.sequence, 'Current status :', _this.status, 'Current action :', _this.action);
            _this.setConnectedPort(); // SET PORT COLOR BY STATUS
            _this.unlockButton(_this.eValue, _this.wValue, _this.status); // UNLOCK OR LOCK BUTTON BY CURRENT STATUS
            // CHECK CURRENT STATUS OF TASK
            // WHEN CURRENT STATUS IS SUCCESS
            if (_this.status === 'success' || _this.status === 'revoked' || _this.status === 'failure' || _this.status === 'canceled') {
                _this.unselectable_table = false; // UNLOCK TABLE WHEN CURRENT STATUS IS SUCCESS
                _this.disable_stops_input = false; // UNLOCK STOPS INPUT WHEN CURRENT STATUS IS SUCCESS
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
                // WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
            }
            else if (_this.status === 'break' || _this.status === 'pending' || _this.status === 'started' || _this.status === 'error'
                || _this.status === 'alarm') {
                _this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
                _this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
            }
        });
    };
    // CHECK CURRENT SELECTED FOR ADD RED BORDER
    PortConnectionMobileComponent.prototype.checkCurrentSelected = function () {
        var east = this.selectedEastPortID;
        var west = this.selectedWestPortID;
        if (((east && west) !== '') && (!document.getElementById(east).classList.contains('selected')
            || (!document.getElementById(west).classList.contains('selected')))) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('current-selected', 'Blink');
                this.all_west[i].classList.remove('current-selected', 'Blink');
            }
            document.getElementById(east).classList.add('current-selected', 'Blink');
            document.getElementById(west).classList.add('current-selected', 'Blink');
        }
    };
    // GET EASTPORT ID ON CLICK
    PortConnectionMobileComponent.prototype.setEastID = function (eastID) {
        this.selectedEastPortID = eastID; // SET EASTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED EAST PORT
        localStorage.setItem('selectedEastPortID', JSON.stringify(eastID)); // SET LOCALSTORAGE VALUE OF selectedEastPortID
        console.log('Current East Port :', this.selectedEastPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (document.getElementById(eastID).classList.contains('connected')) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
                this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
            }
            this.eValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
            this.eastPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('pair', 'selected-pair');
                this.all_west[i].classList.remove('pair', 'selected-pair');
            }
            this.eValue = 0;
            this.availableEastPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
        }
    };
    // GET WESTPORT ID ON CLICK
    PortConnectionMobileComponent.prototype.setWestID = function (westID) {
        this.selectedWestPortID = westID; // SET WESTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED WEST PORT
        localStorage.setItem('selectedWestPortID', JSON.stringify(westID)); // SET LOCALSTORAGE VALUE OF selectedWestPortID
        console.log('Current West Port :', this.selectedWestPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (document.getElementById(westID).classList.contains('connected')) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
                this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
            }
            this.wValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
            this.westPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('pair', 'selected-pair');
                this.all_west[i].classList.remove('pair', 'selected-pair');
            }
            this.wValue = 0;
            this.availableWestPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
        }
    };
    // UNLOCK CONNECT BUTTON
    PortConnectionMobileComponent.prototype.unlockConnection = function (availableEastPort, availableWestPort) {
        // IF TWO AVAILABLE PORTS ARE SELECTED
        if ((availableEastPort && availableWestPort) === true) {
            console.log('You are select available port!');
            this.disabled_connect_button = false;
            // IF TWO AVAILABLE PORTS ARE NOT SELECTED
        }
        else if ((availableEastPort && availableWestPort) === false) {
            console.log('You are not select available port!');
            this.disabled_connect_button = true;
        }
    };
    // SHOW HIS PAIR WHEN CLICK EAST PORT
    PortConnectionMobileComponent.prototype.eastPair = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.pair, function (obj) {
            var east = 'E' + obj.east;
            var west = 'W' + obj.west;
            if (_this.selectedEastPortID === east && _this.selectedWestPortID === west) {
                document.getElementById(east).classList.add('selected-pair');
                document.getElementById(west).classList.add('selected-pair');
                _this.disabled_disconnect_button = false;
            }
            else if (east === _this.selectedEastPortID) {
                document.getElementById(east).classList.add('pair');
                document.getElementById(west).classList.add('pair');
            }
        });
    };
    // SHOW HIS PAIR WHEN CLICK WEST PORT
    PortConnectionMobileComponent.prototype.westPair = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.pair, function (obj) {
            var east = 'E' + obj.east;
            var west = 'W' + obj.west;
            if (_this.selectedEastPortID === east && _this.selectedWestPortID === west) {
                document.getElementById(east).classList.add('selected-pair');
                document.getElementById(west).classList.add('selected-pair');
                _this.disabled_disconnect_button = false;
            }
            else if (west === _this.selectedWestPortID) {
                document.getElementById(east).classList.add('pair');
                document.getElementById(west).classList.add('pair');
            }
        });
    };
    // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
    PortConnectionMobileComponent.prototype.unlockButton = function (eValue, wValue, status) {
        var sumValue; // SUM OF wValue & eValue
        sumValue = eValue + wValue;
        /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
         UNLOCK CONNECT BUTTON
         LOCK CONTINUE */
        if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
            this.disable_stops_input = false;
            this.disabled_continue_button = true;
            console.log('UNLOCK CONNECT BUTTON | STATUS: ', status);
            // SUM = 1 LOCK ALL BUTTONS
        }
        else if (sumValue === 1) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = true;
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS');
            // STATUS = STARTED OR STATUS = PENDING OR STATUS = UNDEFINED
        }
        else if (status === 'started' || status === 'pending' || status === undefined) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = true;
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS | STATUS: ', status);
            // STATUS = BREAK
        }
        else if (status === 'break' && this.sequence !== null && this.sequence !== undefined) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = false;
            console.log('LOCK CONNECT & DISCONNECT | STATUS: ', status);
        }
    };
    // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionMobileComponent.prototype.isSelectEast = function (Eport) {
        return (this.selectedEastPortID === Eport) ? 'selected' : '';
    };
    // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionMobileComponent.prototype.isSelectWest = function (Wport) {
        return (this.selectedWestPortID === Wport) ? 'selected' : '';
    };
    // POST CONNECTION
    PortConnectionMobileComponent.prototype.postConnection = function () {
        var _this = this;
        // LOCK TABLE AFTER POST
        this.unselectable_table = true;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        // LOCK CONNECT BUTTON AFTER POST
        this.disabled_connect_button = true;
        // PAYLOAD { east, west, action, stops }
        if (this.debugMode && this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect', this.stops)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + '_' + data.error + ' !';
                    document.getElementById('error-dialog').classList.remove('hide');
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                    document.getElementById('error-dialog').classList.add('hide');
                }
            });
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect')
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + '_' + data.error + ' !';
                    document.getElementById('error-dialog').classList.remove('hide');
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                    document.getElementById('error-dialog').classList.add('hide');
                }
            });
            // LOCK CONTINUE BUTTON AFTER POST
            this.disabled_connect_button = true;
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // POST DISCONNECTION
    PortConnectionMobileComponent.prototype.postDisconnection = function () {
        var _this = this;
        // LOCK TABLE AFTER POST
        this.unselectable_table = true;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        // LOCK DISCONNECT BUTTON AFTER POST
        this.disabled_disconnect_button = true;
        // PAYLOAD { east, west, action, stops }
        if (this.debugMode && this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect', this.stops)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + '_' + data.error + ' !';
                    document.getElementById('error-dialog').classList.remove('hide');
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                    document.getElementById('error-dialog').classList.add('hide');
                }
            });
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect')
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + '_' + data.error + ' !';
                    document.getElementById('error-dialog').classList.remove('hide');
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                    document.getElementById('error-dialog').classList.add('hide');
                }
            });
            // LOCK DISCONTINUE BUTTON AFTER POST
            this.disabled_disconnect_button = true;
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // POST DEBUG
    PortConnectionMobileComponent.prototype.postDebug = function () {
        var _this = this;
        // LOCK TABLE AFTER POST
        this.unselectable_table = true;
        // LOCK CONTINUE BUTTON AFTER POST
        this.disabled_continue_button = true;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        //  PAYLOAD { east, west, action, stops, number }
        if (this.stops && this.sequence) {
            // GET LOCALSTORAGE VALUE OF stops
            var stops = localStorage.getItem('stops');
            // GET LOCALSTORAGE VALUE OF selectedEastPortID
            var selectedEastPortID = localStorage.getItem('selectedEastPortID');
            // GET LOCALSTORAGE VALUE OF selectedWestPortID
            var selectedWestPortID = localStorage.getItem('selectedWestPortID');
            // POST DATA
            this.ApiService.connectPort(JSON.parse(selectedEastPortID).substring(1), JSON.parse(selectedWestPortID).substring(1), this.action, JSON.parse(stops), this.sequence)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + '_' + data.error + ' !';
                    document.getElementById('error-dialog').classList.remove('hide');
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                    document.getElementById('error-dialog').classList.add('hide');
                }
            });
            // NO stops, sequence VALUE IN PAYLOAD
        }
        else {
            console.log('No stops or sequence value !');
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // SET COLOR OF PORT CONNECTION
    PortConnectionMobileComponent.prototype.setConnectedPort = function () {
        var _this = this;
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
        this.ApiService.getConnectedPort().then(function (data) {
            console.log('ALL PORT CONNECTION :', data);
            // SET PORT DATA IN PAIR
            _this.pair = data;
            // LOCAL STORAGE VARIABLE
            var selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
            var selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));
            // REMOVE ALL PORT COLOR BEFORE SET PORT COLOR
            var east_td = document.getElementsByClassName('West');
            var west_td = document.getElementsByClassName('East');
            for (var i = 0; i < 144; i++) {
                _this.all_east[i].classList.remove('connected', 'pending', 'break');
                _this.all_west[i].classList.remove('connected', 'pending', 'break');
            }
            console.log('------------------------------- All Port Status -------------------------------');
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data, function (obj) {
                if (obj['status'] === 'success') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('connected'); // ADD GREEN COLOR
                    document.getElementById(west).classList.add('connected'); // ADD GREEN COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
                else if (obj['status'] === 'started' || obj['status'] === 'pending') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('pending'); // ADD RED COLOR
                    document.getElementById(west).classList.add('pending'); // ADD RED COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
                else if (obj['status'] === 'break') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('break'); // ADD YELLOW COLOR
                    document.getElementById(west).classList.add('break'); // ADD YELLOW COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
            });
            console.log('-------------------------------------------------------------------------------');
        });
    };
    // CLEAR LOCAL STORAGE STOPS VALUE
    PortConnectionMobileComponent.prototype.clearValue = function (stops) {
        // CLEAR STOPS LOCALSTORAGE VALUE
        if (stops === undefined || stops === null || stops === '') {
            stops = null;
            localStorage.setItem('stops', JSON.stringify(stops));
            // LOCK CONNECT BUTTON WHEN INVALID STOPS INPUT
        }
        else if (document.getElementById('stops').classList.contains('ng-invalid')) {
            this.disabled_connect_button = true;
        }
    };
    // TEST CONSOLE.LOG LOCAL STORAGE VALUE
    PortConnectionMobileComponent.prototype.clear = function () {
        var selectedEastPortID = localStorage.getItem('selectedEastPortID');
        var selectedWestPortID = localStorage.getItem('selectedWestPortID');
        console.log(selectedEastPortID, selectedWestPortID, this.stops);
    };
    // PUSH CONNECTED PORT OF EAST TO EAST TOOLTIP
    PortConnectionMobileComponent.prototype.tooltipEast = function (EastID) {
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            var west = 'W' + this.pair[i].west;
            if (EastID === east) {
                return 'Connected to ' + west;
            }
        }
    };
    // PUSH CONNECTED PORT OF WEST TO WEST TOOLTIP
    PortConnectionMobileComponent.prototype.tooltipWest = function (WestID) {
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            var west = 'W' + this.pair[i].west;
            if (WestID === west) {
                return 'Connected to ' + east;
            }
        }
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionMobileComponent.prototype.etooltipPostion = function (EastID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = RIGHT
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            if (EastID === east) {
                return 'right';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionMobileComponent.prototype.wtooltipPostion = function (WestID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = LEFT
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var west = 'W' + this.pair[i].west;
            if (WestID === west) {
                return 'left';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
    };
    // TOGGLE DEBUG BUTTON
    PortConnectionMobileComponent.prototype.toggleDebugMode = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#stops, #sequence, #input-container').toggle();
        this.debugMode = !this.debugMode;
        console.log('toggleDebugMode ' + this.debugMode);
    };
    // PUSH NOT AVAILABLE PORT ARRAY
    PortConnectionMobileComponent.prototype.pushNotAvailablePort = function () {
        for (var i = 25; i <= 60; i++) {
            this.disableEastPortArray.push('E' + i);
            this.disableWestPortArray.push('W' + i);
        }
    };
    // DISABLE NOT AVAILABLE EAST PORT
    PortConnectionMobileComponent.prototype.disabledEastPort = function (id) {
        return (this.disableEastPortArray.includes(id)) ? 'port-unselectable' : '';
    };
    // DISABLE NOT AVAILABLE WEST PORT
    PortConnectionMobileComponent.prototype.disabledWestPort = function (id) {
        return (this.disableWestPortArray.includes(id)) ? 'port-unselectable' : '';
    };
    return PortConnectionMobileComponent;
}());
PortConnectionMobileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port-connection-mobile',
        template: __webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PortConnectionMobileComponent);

var _a, _b;
//# sourceMappingURL=port-connection-mobile.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN HEADER-CONTAINER -->\r\n<div class=\"header-container\" align=\"center\">\r\n  <!-- BEGIN CONTAINER-CONTENT -->\r\n  <div class=\"container-content\" align=\"center\">\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN TEMPERATURE-CONTAINER -->\r\n        <div class=\"temperature-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>26 °C</span>\r\n              <p>78.8 °F</p>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Temperature</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../../static/webapp/assets/temp-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END TEMPERATURE-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN HUMIDITY-CONTAINER -->\r\n        <div class=\"humidity-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>50%</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Humidity</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../../static/webapp/assets/humidity-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END HUMIDITY-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN ORDER-CONTAINER -->\r\n        <div class=\"order-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN-CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>65%</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN-CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Orders Completed</span>\r\n            </div>\r\n            <!-- END-CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../../static/webapp/assets/oder-icon2.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END ORDER-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN TIME-CONTAINER -->\r\n        <div class=\"time-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>{{ this.operation_task_time }}</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Operations times</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../../static/webapp/assets/timer-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END TIME-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n  </div>\r\n  <!-- END CONTAINER-CONTENT -->\r\n</div>\r\n<!-- END HEADER-CONTAINER -->\r\n\r\n<!-- BEGIN TABLE -->\r\n<!-- BEGIN SECTION GROUP -->\r\n<div class=\"section group\">\r\n  <!-- BEGIN COL SPAN_1_OF_2 -->\r\n  <div class=\"col span_1_of_2\">\r\n    <!-- EAST TABLE -->\r\n    <!-- BEGIN TABLE-CONTAINER-1 -->\r\n    <table class=\"table-container-1\" align=\"center\">\r\n      <tbody [ngClass]=\"{'unselectable': this.unselectable_table, 'selectable': !this.unselectable_table}\">\r\n        <tr class=\"tr-style\" *ngFor=\"let row of eportschunk\">\r\n          <td id=\"{{ column }}\" class=\"East td-style\" [ngClass]=\"[isSelectEast(column), disabledEastPort(column)]\" (click)=\"setEastID(column)\"\r\n            *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipEast(column)\" mdTooltipPosition=\"above\">\r\n              <span [mdTooltip]=\"pushEastNote(column)\" [mdTooltipPosition]=\"etooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- END TABLE-CONTAINER-1 -->\r\n  </div>\r\n  <!-- END COL SPAN_1_OF_2 -->\r\n  <!-- BEGIN COL SPAN_1_OF_2 -->\r\n  <div class=\"col span_1_of_2\">\r\n    <!-- WEST TABLE -->\r\n    <!-- BEGIN TABLE-CONTAINER-2 -->\r\n    <table class=\"table-container-2\" align=\"center\">\r\n      <tbody [ngClass]=\"{'unselectable': this.unselectable_table, 'selectable': !this.unselectable_table}\">\r\n        <tr class=\"tr-style\" *ngFor=\"let row of wportschunk\">\r\n          <td id=\"{{ column }}\" class=\"West td-style\" [ngClass]=\"[isSelectWest(column), disabledWestPort(column)]\" (click)=\"setWestID(column)\"\r\n            *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipWest(column)\" mdTooltipPosition=\"above\">\r\n              <span [mdTooltip]=\"pushWestNote(column)\" [mdTooltipPosition]=\"wtooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- BEGIN TABLE-CONTAINER-2 -->\r\n  </div>\r\n  <!-- END COL SPAN_1_OF_2 -->\r\n</div>\r\n<!-- END SECTION GROUP -->\r\n<!-- END TABLE -->\r\n\r\n<!-- BEGIN FOOTER -->\r\n<div class=\"footer-container\">\r\n  <!-- BEGIN FLEX-CONTAINER-1 -->\r\n  <div class=\"flex-container-1\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\">\r\n        <!-- BEGIN ERROR-DIALOG -->\r\n        <div id=\"error-dialog\" [ngClass]=\"check_status_for_hide_dialog()\">\r\n          <md-card class=\"Blink\">\r\n            <p>{{ error_message }}</p>\r\n          </md-card>\r\n        </div>\r\n        <!-- END ERROR-DIALOG -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-1 -->\r\n  <!-- BEGIN FLEX-CONTAINER-2 -->\r\n  <div class=\"flex-container-2\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\">\r\n        <!-- BEGIN ITEM-1-CONTAINER-SHADOW -->\r\n        <div class=\"item-1-container-shadow\">\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container fix-width\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- <div class=\"button-container-item-1\"> -->\r\n              <!-- BEGIN TOOLTIP -->\r\n              <!-- <div class=\"tooltip\"> -->\r\n                <!-- BEGIN CANCEL-BUTTON-CIRCLE BLINK -->\r\n                <!-- <div class=\"cancel-button-circle Blink\"></div> -->\r\n                <!-- END CANCEL-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <!-- <span class=\"tooltiptext\">Hint! \"c\" means continue robot operations. <br> \"s\" means restart robot operations. <br> \"l\" means reload robot operations.</span> -->\r\n                <!-- END TOOLTIPTEXT -->\r\n              <!-- </div> -->\r\n              <!-- END TOOLTIP -->\r\n            <!-- </div> -->\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN CANCEL BUTTON -->\r\n              <button md-raised-button id=\"Cancel\" class=\"cancel-button-width\" (click)=\"[continueRobotOperation(), foruce_disable_continue_mode_button()]\" color=\"primary\" [attr.disabled]=\"this.disabled_continue_mode_all_button === false ? true : null\" disabled>\r\n                <md-icon>autorenew</md-icon>\r\n              </button>\r\n              <!-- END CANCEL BUTTON -->\r\n              <!-- BEGIN CANCEL BUTTON -->\r\n              <button md-raised-button id=\"Restart\" class=\"cancel-button-width\" (click)=\"[restartRobotOperation(), foruce_disable_continue_mode_button()]\" color=\"primary\" [attr.disabled]=\"this.disabled_continue_mode_all_button === false ? true : null\" disabled>\r\n                <md-icon>replay</md-icon>\r\n              </button>\r\n              <!-- END CANCEL BUTTON -->\r\n              <!-- BEGIN CANCEL BUTTON -->\r\n              <button md-raised-button id=\"Reload\" class=\"cancel-button-width\" (click)=\"[reloadRobotOperation(), foruce_disable_continue_mode_button()]\" color=\"primary\" [attr.disabled]=\"this.disabled_continue_mode_all_button === false ? true : null\" disabled>\r\n                <md-icon>clear</md-icon>\r\n              </button>\r\n              <!-- END CANCEL BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN BREAK-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"break-button-circle Blink\"></div>\r\n                <!-- END BREAK-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! debug button will available in debug mode.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN CONTINUE BUTTON -->\r\n              <button md-raised-button id=\"Continue\" class=\"button-width\" (click)=\"[postDebug(), force_disable_continue_button()]\" color=\"primary\" [attr.disabled]=\"this.status !== 'break' ? 'break' : null\"\r\n                disabled>Continue</button>\r\n              <!-- END CONTINUE BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN CONNECT-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"connect-button-circle Blink\"></div>\r\n                <!-- END CONNECT-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! connect button will available when select two side available ports.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN CONNECT BUTTON -->\r\n              <button md-raised-button id=\"Connect\" class=\"button-width\" (click)=\"postConnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_connect_button == true ? false : null\"\r\n                disabled>Connect</button>\r\n              <!-- END CONNECT BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN DISCONNECT-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"disconnect-button-circle Blink\"></div>\r\n                <!-- END DISCONNECT-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! disconnect button will available when select correct pair of connected ports.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN DISCONNECT BUTTON -->\r\n              <button md-raised-button id=\"Disconnect\" class=\"button-width\" (click)=\"postDisconnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_disconnect_button == true ? false : null\"\r\n                disabled>Disconnect</button>\r\n              <!-- END DISCONNECT BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n        </div>\r\n        <!-- END ITEM-1-CONTAINER-SHADOW -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n      <!-- BEGIN ITEM-2 -->\r\n      <div class=\"item-2\">\r\n        <!-- BEGIN SUB-ITEM -->\r\n        <div class=\"sub-item\" align=\"center\">\r\n          <!-- BEGIN INPUT-CONTAINER -->\r\n          <div id=\"input-container\" class=\"align-center\" hidden>\r\n            <!-- BEGIN INPUT DIV -->\r\n            <div style=\"transform: translateY(-20%);\">\r\n              <!-- BEGIN STOP INPUT -->\r\n              <md-input-container>\r\n                <input mdInput id=\"stops\" placeholder=\"Stops :\" value=\"stops\" [(ngModel)]=\"stops\" [ngClass]=\"clearValue(stops)\" pattern=\"[0-9,]{1,100}\"\r\n                  [attr.disabled]=\"this.disable_stops_input == true ? false : null\" hidden>\r\n              </md-input-container>\r\n              <!-- END STOP INPUT -->\r\n              <!-- BEGIN SEQUENCE INPUT -->\r\n              <md-input-container>\r\n                <input mdInput id=\"sequence\" placeholder=\"Sequence :\" value=\"sequence\" [(ngModel)]=\"sequence\" [attr.disabled]=\"this.disable_stops_input == true\"\r\n                  hidden>\r\n              </md-input-container>\r\n              <!-- END SEQUENCE INPUT -->\r\n            </div>\r\n            <!-- END INPUT DIV -->\r\n          </div>\r\n          <!-- END INPUT CONTAINER -->\r\n        </div>\r\n        <!-- END SUB-ITEM -->\r\n      </div>\r\n      <!-- END ITEM-2 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n    <!-- BEGIN FLEX-ITEM-2 -->\r\n    <div class=\"flex-item-2\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\" align=\"center\">\r\n        <!-- BEGIN ITEM-1-CONTAINER-SHADOW -->\r\n        <div class=\"item-1-container-shadow\">\r\n          <md-chip-list>\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-CONNECTED-ITEM-1 -->\r\n                <div class=\"detail-container-connected-item-1\">\r\n                  <!-- BEGIN CONNECTED-CIRCLE BLINK -->\r\n                  <div class=\"connected-circle Blink\"></div>\r\n                  <!-- END CONNECTED-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-CONNECTED-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-CONNECTED-ITEM-2 -->\r\n                <div class=\"detail-container-connected-item-2\">\r\n                  <p>Connected</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-CONNECTED-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Green color means the port that connected.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-BREAK-ITEM-1 -->\r\n                <div class=\"detail-container-break-item-1\">\r\n                  <!-- BEGIN BREAK-CIRCLE BLINK -->\r\n                  <div class=\"break-circle Blink\"></div>\r\n                  <!-- END BREAK-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-BREAK-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-BREAK-ITEM-2 -->\r\n                <div class=\"detail-container-break-item-2\">\r\n                  <p>Break</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-BREAK-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <span class=\"tooltiptext\">Yellow color means the port that stop in current sequence.</span>\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-PENDING-ITEM-1 -->\r\n                <div class=\"detail-container-pending-item-1\">\r\n                  <!-- BEGIN PENDING-CIRCLE BLINK -->\r\n                  <div class=\"pending-circle Blink\"></div>\r\n                  <!-- END PENDING-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PENDING-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-PENDING-ITEM-2 -->\r\n                <div class=\"detail-container-pending-item-2\">\r\n                  <p>Pending</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PENDING-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Red color means the port that processing or pending.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-PAIR-ITEM-1 -->\r\n                <div class=\"detail-container-pair-item-1\">\r\n                  <!-- BEGIN PAIR-CIRCLE BLINK -->\r\n                  <div class=\"pair-circle Blink\"></div>\r\n                  <!-- END PAIR-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PAIR-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-PAIR-ITEM-2 -->\r\n                <div class=\"detail-container-pair-item-2\">\r\n                  <p>Pair</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PAIR-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Show pairs of ports.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-SELECTED-ITEM-1 -->\r\n                <div class=\"detail-container-selected-item-1\">\r\n                  <!-- BEGIN SELECTED-CIRCLE BLINK -->\r\n                  <div class=\"selected-circle Blink\"></div>\r\n                  <!-- END SELECTED-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-SELECTED-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-SELECTED-ITEM-2 -->\r\n                <div class=\"detail-container-selected-item-2\">\r\n                  <p>Selected</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-SELECTED-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Show current selected ports.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n          </md-chip-list>\r\n        </div>\r\n        <!-- END ITEM-1-CONTAINER-SHADOW -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-2 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-2 -->\r\n  <!-- BEGIN FLEX-CONTAINER-3 -->\r\n  <div class=\"flex-container-3\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN FLEX-ITEM-1-CONTAINER-SHADOW -->\r\n      <div class=\"flex-item-1-container-shadow\">\r\n        <!-- BEGIN DEBUG MODE TOGGLE BUTTON -->\r\n        <md-slide-toggle id=\"toggleDebugButton\" class=\"bt-margin-left\" (click)=\"toggleDebugMode()\">Debug Mode</md-slide-toggle>\r\n        <!-- END DEBUG MODE TOGGLE BUTTON -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-1-CONTAINER-SHADOW -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-3 -->\r\n</div>\r\n<!-- END FOOTER -->"

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  width: 100vw;\n  margin-top: 15px;\n  margin-bottom: 0; }\n  .header-container .container-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%; }\n    .header-container .container-content .sub-container-content {\n      height: 80px;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .header-container .container-content .sub-container-content .flex-item-container {\n        width: 100%;\n        height: 100%; }\n        .header-container .container-content .sub-container-content .flex-item-container .temperature-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #0091ea;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 span {\n                  margin-left: 15px; }\n                .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 p {\n                  margin-left: 15px; } }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-2 span {\n                  font-size: 14px;\n                  margin-left: 15px; } }\n          .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n        .header-container .container-content .sub-container-content .flex-item-container .humidity-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #00c652;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 span {\n                  margin-left: 15px; } }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-2 span {\n                  font-size: 14px; } }\n          .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n        .header-container .container-content .sub-container-content .flex-item-container .order-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #00B294;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-2 span {\n                  font-size: 14px; } }\n          .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n          @media only screen and (max-width: 1200px) {\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 {\n              overflow: hidden; } }\n        .header-container .container-content .sub-container-content .flex-item-container .time-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #E74856;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 span {\n                  margin-left: 15px; } }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n              @media only screen and (max-width: 1200px) {\n                .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-2 span {\n                  font-size: 14px;\n                  margin-left: 15px; } }\n          .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n\n:focus {\n  outline: none; }\n\nbutton {\n  min-width: 110px; }\n\n:host /deep/ md-slide-toggle:hover {\n  color: #e91e63; }\n\n/*  SECTIONS  */\n.section {\n  clear: both;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw; }\n  .section .table-container-1 {\n    width: 90%;\n    height: 100%;\n    margin: auto;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    border-radius: 4px; }\n    .section .table-container-1 .td-style {\n      padding: 4px;\n      border: 1px solid rgba(85, 85, 85, 0.2);\n      text-align: center;\n      font-family: 'Open Sans', sans-serif;\n      font-size: 16px;\n      border-radius: 8px; }\n    .section .table-container-1 .selected {\n      color: white !important;\n      background: #555555 !important; }\n    .section .table-container-1 .connected {\n      color: white !important;\n      background: #00C853 !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .pending {\n      color: white !important;\n      background: #D61515 !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .break {\n      color: white !important;\n      background: #FBC02D !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .pair {\n      color: white !important;\n      background: #3f51b5 !important; }\n    .section .table-container-1 .selected-pair {\n      background: #555555 !important;\n      cursor: default;\n      color: white; }\n    .section .table-container-1 .current-selected {\n      border-style: solid;\n      border-width: 2px;\n      border-color: orange;\n      font-weight: 500; }\n    .section .table-container-1 .unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-1 .selectable .unselectable {\n      all: revert; }\n    .section .table-container-1 .port-unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-1 td:hover {\n      cursor: pointer;\n      background-color: rgba(85, 85, 85, 0.15); }\n  .section .table-container-2 {\n    width: 90%;\n    height: 100%;\n    margin: auto;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    border-radius: 4px; }\n    .section .table-container-2 .td-style {\n      padding: 4px;\n      border: 1px solid rgba(85, 85, 85, 0.2);\n      text-align: center;\n      font-family: 'Open Sans', sans-serif;\n      font-size: 16px;\n      border-radius: 8px; }\n    .section .table-container-2 .selected {\n      color: white !important;\n      background: #555555 !important; }\n    .section .table-container-2 .connected {\n      color: white !important;\n      background: #00C853 !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .pending {\n      color: white !important;\n      background: #D61515 !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .break {\n      color: white !important;\n      background: #FBC02D !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .pair {\n      color: white !important;\n      background: #3f51b5 !important; }\n    .section .table-container-2 .selected-pair {\n      background: #555555 !important;\n      cursor: default;\n      color: white; }\n    .section .table-container-2 .current-selected {\n      border-style: solid;\n      border-width: 2px;\n      border-color: orange;\n      font-weight: 500; }\n    .section .table-container-2 .unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-2 .port-unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-2 td:hover {\n      cursor: pointer;\n      background-color: rgba(85, 85, 85, 0.15); }\n\n/*  COLUMN SETUP  */\n.col {\n  display: block;\n  float: left;\n  margin: 1% 0 1% 1.6%; }\n\n.col:first-child {\n  margin-left: 0; }\n\n/*  GROUPING  */\n.group:before,\n.group:after {\n  content: \"\";\n  display: table; }\n\n.group:after {\n  clear: both; }\n\n.group {\n  zoom: 1;\n  /* For IE 6/7 */ }\n\n/*  GRID OF TWO  */\n.span_2_of_2 {\n  width: 100%; }\n\n.span_1_of_2 {\n  width: 49.2%; }\n\n/*  GO FULL WIDTH AT LESS THAN 1200 PIXELS */\n@media only screen and (max-width: 1200px) {\n  .col {\n    margin: 1% 0 1% 0%; } }\n\n@media only screen and (max-width: 1200px) {\n  .span_2_of_2,\n  .span_1_of_2 {\n    width: 100%; } }\n\n.footer-container {\n  width: 100vw;\n  height: 140px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  margin-bottom: 5px; }\n  .footer-container .flex-container-1 {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .footer-container .flex-container-1 .flex-item-1 {\n      width: 100%;\n      height: 100%; }\n      .footer-container .flex-container-1 .flex-item-1 .item-1 {\n        height: 100%;\n        width: 100%; }\n        .footer-container .flex-container-1 .flex-item-1 .item-1 md-card {\n          width: 135px;\n          height: 80px;\n          font-size: 14px;\n          border-radius: 35px;\n          background: #E74856; }\n          .footer-container .flex-container-1 .flex-item-1 .item-1 md-card p {\n            cursor: default;\n            color: white;\n            -webkit-transform: translateY(-15%);\n                    transform: translateY(-15%); }\n        .footer-container .flex-container-1 .flex-item-1 .item-1 .hide {\n          visibility: hidden; }\n  .footer-container .flex-container-2 {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2; }\n    .footer-container .flex-container-2 .flex-item-1 {\n      width: 100%;\n      height: 70%; }\n      .footer-container .flex-container-2 .flex-item-1 .item-1 {\n        margin: auto;\n        max-width: 80%;\n        min-width: 70%;\n        height: 50%;\n        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip {\n          text-align: center;\n          margin: auto;\n          width: 60px;\n          -webkit-transform: translateY(25%);\n                  transform: translateY(25%);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          cursor: default; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:first-child {\n            background: #00C853;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:first-child:hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(2) {\n            background: #FBC02D;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(2):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(3) {\n            background: #D61515;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(3):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(4) {\n            background: #3f51b5;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(4):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(5) {\n            background: #555555;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(5):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:focus {\n            outline: 0; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 div {\n          margin: auto; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-connected {\n            background: #00C853;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-break {\n            background: #FBC02D;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-pending {\n            background: #D61515;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-pair {\n            background: #3f51b5;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-selected {\n            background: #555555;\n            color: white; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .item-1-container-shadow {\n          height: 100%;\n          width: 750px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 button {\n          -webkit-transform: translateY(13%);\n                  transform: translateY(13%);\n          border-radius: 20px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Continue:not(disabled) {\n          background: #FBC02D; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Continue:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Disconnect:not(disabled) {\n          background: #E74856; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Disconnect:disabled {\n          background-color: rgba(0, 0, 0, 0.115); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Cancel:not(disabled) {\n          background: #FBC02D; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Cancel:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Restart:not(disabled) {\n          background: #00b0ff; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Restart:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Reload:not(disabled) {\n          background: #E74856; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Reload:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          margin-left: 15px;\n          width: 150px;\n          height: 90%;\n          border-radius: 45px;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          -webkit-transform: translateY(2px);\n                  transform: translateY(2px); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container-item-1 {\n          width: 20%;\n          height: 100%; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container-item-2 {\n          width: 100%;\n          height: 100%; }\n      .footer-container .flex-container-2 .flex-item-1 .item-2 {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        width: 100%;\n        height: 50%; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .sub-item {\n          margin: auto;\n          width: 60%;\n          height: 100%; }\n          .footer-container .flex-container-2 .flex-item-1 .item-2 .sub-item .align-center {\n            -webkit-transform: translateY(13%);\n                    transform: translateY(13%);\n            height: 80%;\n            width: 420px;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n            border-radius: 25px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .item-2-container-shadow {\n          margin: auto;\n          -webkit-transform: translateY(-15%);\n                  transform: translateY(-15%);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          border-radius: 2px;\n          height: 100%; }\n          .footer-container .flex-container-2 .flex-item-1 .item-2 .item-2-container-shadow:focus {\n            outline: 0; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .unselectable {\n          pointer-events: none; }\n    .footer-container .flex-container-2 .flex-item-2 {\n      width: 100%;\n      height: 30%; }\n      .footer-container .flex-container-2 .flex-item-2 .item-1 {\n        width: 100%;\n        height: 100%;\n        margin: auto; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 button {\n          -webkit-transform: translateY(8%);\n                  transform: translateY(8%);\n          border-radius: 20px; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Continue:not(disabled) {\n          background: #FBC02D; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Continue:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Disconnect:not(disabled) {\n          background: #E74856; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Disconnect:disabled {\n          background-color: rgba(0, 0, 0, 0.115); }\n      .footer-container .flex-container-2 .flex-item-2 .item-1-container-shadow {\n        width: 750px;\n        height: 70%;\n        margin: auto;\n        -webkit-transform: translateY(6px);\n                transform: translateY(6px); }\n        .footer-container .flex-container-2 .flex-item-2 .item-1-container-shadow div {\n          margin: auto; }\n  .footer-container .flex-container-3 {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .footer-container .flex-container-3 .flex-item-1 {\n      width: 100%;\n      height: 50%; }\n      .footer-container .flex-container-3 .flex-item-1 md-slide-toggle {\n        -webkit-transform: translateY(35%);\n                transform: translateY(35%); }\n      .footer-container .flex-container-3 .flex-item-1 .flex-item-1-container-shadow {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        border-radius: 30px;\n        height: 50%;\n        width: 150px;\n        -webkit-transform: translateY(20%);\n                transform: translateY(20%); }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 300px;\n  background-color: #555555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  font-size: 13px;\n  cursor: pointer;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -150px; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible; }\n\n.detail-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 30px;\n  width: 120px;\n  height: 35px;\n  -webkit-transform: translateY(-5%);\n          transform: translateY(-5%); }\n  .detail-container:focus {\n    outline: 0; }\n\n.detail-container-connected-item-1 {\n  width: 30%;\n  height: 30%; }\n\n.detail-container-connected-item-2 {\n  width: 70%;\n  height: 30%;\n  margin-right: 15px !important; }\n  .detail-container-connected-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-break-item-1 {\n  width: 40%;\n  height: 30%; }\n\n.detail-container-break-item-2 {\n  width: 60%;\n  height: 30%;\n  margin-right: 30px !important; }\n  .detail-container-break-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-pending-item-1 {\n  width: 35%;\n  height: 30%; }\n\n.detail-container-pending-item-2 {\n  width: 65%;\n  height: 30%;\n  margin-right: 20px !important; }\n  .detail-container-pending-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-pair-item-1 {\n  width: 45%;\n  height: 30%; }\n\n.detail-container-pair-item-2 {\n  width: 55%;\n  height: 30%;\n  margin-right: 30px !important; }\n  .detail-container-pair-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-selected-item-1 {\n  width: 35%;\n  height: 30%; }\n\n.detail-container-selected-item-2 {\n  width: 65%;\n  height: 30%;\n  margin-right: 20px !important; }\n  .detail-container-selected-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.connected-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #00C853;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.break-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #FBC02D;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.pending-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #E74856;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.pair-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #3f51b5;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.selected-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #555555;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.connect-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #3f51b5;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.break-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #FBC02D;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.disconnect-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #E74856;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.cancel-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #0091ea;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.Blink {\n  -webkit-animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;\n          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.bee-container {\n  width: 100vw;\n  height: 500px;\n  background: skyblue; }\n\n.bee-hive {\n  width: 50%;\n  height: 100%;\n  background: wheat; }\n\n.rhex {\n  position: relative;\n  margin: 1em auto;\n  width: 10em;\n  height: 17.32em;\n  border-radius: 1em/ .5em;\n  opacity: .25;\n  background: orange;\n  transition: opacity .5s;\n  cursor: pointer; }\n\n.rhex:before, .rhex:after {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  background: inherit;\n  content: ''; }\n\n.rhex:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n\n.rhex:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg); }\n\n.rhex:hover {\n  opacity: 1; }\n\ntd {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.cancel-button-width {\n  min-width: 40px; }\n\n.fix-width {\n  width: 190px !important;\n  -webkit-transform: translateY(10px) !important;\n          transform: translateY(10px) !important; }\n\n.fix-size-icon {\n  font-size: 16px; }\n\n.hide {\n  visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortConnectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service




var PortConnectionComponent = (function () {
    function PortConnectionComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        // PORTS DATA
        this.eports = []; // 144 EAST PORTS
        this.wports = []; // 144 WEST PORTS
        this.eportschunk = []; // 144 to [12,12,...]
        this.wportschunk = []; // 144 to [12,12,...]
        this.portID = []; // PORT ID
        this.eportNote = []; // EAST PORT NOTE
        this.wportNote = []; // WEST PORT NOTE
        // CONNECTION DATA
        this.pair = []; // PAIR OF CONNECTED PORT {[east, west]}
        // LOCAL & USER EVENT DATA
        this.selectedEastPortID = ''; // CURRENT SELECTED EAST PORT
        this.selectedWestPortID = ''; // CURRENT SELECTED WEST PORT
        this.stops = JSON.parse(localStorage.getItem('stops')); // CURRENT STOPS POINT ROBOT IN DEBUG MODE
        this.eValue = 1; // VALUE OF EPORT
        this.wValue = 1; // VALUE OF WPORT
        this.debugMode = false; // DEBUG MODE
        this.error_message = undefined; // ERROR MESSAGE
        // DISABLE ULITIES
        this.unselectable_table = false; // DISABLED TABLE
        this.disable_stops_input = false; // DISABLED STOPS INPUT
        this.disable_sequence_input = false; // DISABLED SEQUENCE INPUT
        this.disabled_connect_button = false; // DISABLED CONNECT BUTTON
        this.disabled_disconnect_button = false; // DISABLED DISCONNECT BUTTON
        this.disabled_continue_button = false; // DISABLED CONTINUE BUTTON
        this.disabled_cancel_button = false; // DISABLED CANCEL BUTTON
        this.disabled_continue_mode_all_button = false;
        this.availableEastPort = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
        this.availableWestPort = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
        this.disableEastPortArray = []; // SET UNVAILABLE EAST PORT ARRAY
        this.disableWestPortArray = []; // SET UNVAILABLE WEST PORT ARRAY
        // DATA FROM DOM
        this.all_east = document.getElementsByClassName('East');
        this.all_west = document.getElementsByClassName('West');
    }
    PortConnectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // CHECK SERVER STATUS
        this.check_server_status();
        // VERIFY USER
        this.verify_user();
        // DEVICE DETECT
        this.deviceDetect();
        // FETCH DATA
        this.fetchData();
        // SET COLOR OF PORT CONNECTION
        this.setConnectedPort();
        // CHECK STATUS EVERY 5 SEC.
        this.timerInterval = setInterval(function () {
            _this.checkStatus();
        }, 5027);
    };
    PortConnectionComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval); // <-- CLEAR INTERVAL
    };
    // CHECK SERVER STATUS
    PortConnectionComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            // CHECK TOKEN
            _this.check_token();
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // VERIFY USER WITH CURRENT BACKEND
    PortConnectionComponent.prototype.verify_user = function () {
        var _this = this;
        this.ApiService.verify_user_with_backend().then(function (data) {
            if (data['status'] === 'unverified') {
                localStorage.setItem('currentUser', null);
                _this.router.navigateByUrl('/login');
            }
        });
    };
    // VERIFY THAT USER CARRYING TOKEN
    PortConnectionComponent.prototype.check_token = function () {
        var token = JSON.parse(localStorage.getItem('token')); // Set sample token
        if (token === null) {
            this.router.navigateByUrl('/login');
        }
    };
    // DEVICE DETECT
    PortConnectionComponent.prototype.deviceDetect = function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.router.navigateByUrl('/port_connection_mobile');
        }
    };
    // FETCH DATA
    PortConnectionComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getAllPort().then(function (data) {
            _this.eports = data.eports;
            _this.eportschunk = data.eportschunk;
            _this.wports = data.wports;
            _this.wportschunk = data.wportschunk;
            _this.eportNote = data.eportNote;
            _this.wportNote = data.wportNote;
            _this.portID = data.id;
        });
    };
    // PUSH EAST PORT NOTE
    PortConnectionComponent.prototype.pushEastNote = function (id) {
        var i = id.substring(1);
        var index = parseInt(i, 10) - 1;
        if (id === 'E' + id.substring(1)) {
            return this.eportNote[index];
        }
    };
    // PUSH WEST PORT NOTE
    PortConnectionComponent.prototype.pushWestNote = function (id) {
        var i = id.substring(1);
        var index = parseInt(i, 10) - 1;
        if (id === 'W' + id.substring(1)) {
            return this.wportNote[index];
        }
    };
    // CHECK CURRENT ROBOT STATUS
    PortConnectionComponent.prototype.checkStatus = function () {
        var _this = this;
        this.ApiService.checkStatus().then(function (data) {
            _this.sequence = data.sequence;
            _this.status = data.status;
            _this.action = data.action;
            localStorage.setItem('action', JSON.stringify({ action: _this.action }));
            console.log('Cuurent sequence :', _this.sequence, 'Current status :', _this.status, 'Current action :', _this.action);
            _this.setConnectedPort(); // SET PORT COLOR BY STATUS
            _this.unlockButton(_this.eValue, _this.wValue, _this.status); // UNLOCK OR LOCK BUTTON BY CURRENT STATUS
            // CHECK CURRENT STATUS OF TASK
            // WHEN CURRENT STATUS IS SUCCESS
            if (_this.status === 'success' || _this.status === 'revoked' || _this.status === 'failure' || _this.status === 'canceled') {
                _this.unselectable_table = false; // UNLOCK TABLE WHEN CURRENT STATUS IS SUCCESS
                _this.disable_stops_input = false; // UNLOCK STOPS INPUT WHEN CURRENT STATUS IS SUCCESS
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
                document.getElementById('error-dialog').classList.add('hide'); // <-- remove class hide
                _this.disabled_continue_mode_all_button = false; // LOCK ALL CONTINUE MODE BUTTONS
                _this.get_lastest_task_time(); // GET AVERAGE LASTEST TASK TIME
                // WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
            }
            else if (_this.status === 'break' || _this.status === 'pending' || _this.status === 'started') {
                _this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
                _this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
                _this.disabled_continue_mode_all_button = false; // LOCK ALL CONTINUE MODE BUTTONS
                // WHEN CURRENT STATUS IS ERRROR
            }
            else if (_this.status === 'error') {
                _this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
                _this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUTF
                // IF data['code'] is not null
                if (data['code'] !== null) {
                    _this.error_message = data['status'] + ' ' + data['error'] + ', Code ' + data['code']; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF data['code] is null
                }
                else {
                    _this.error_message = data['status'] + ' ' + data['error']; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                }
                // WHEN CURRENT STATUS IS ALARM
            }
            else if (_this.status === 'alarm') {
                _this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
                _this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
                _this.disable_sequence_input = true; // LOCK SEQUENCE INPUTF
                _this.disabled_continue_mode_all_button = true; // LOCK ALL CONTINUE MODE BUTTONS
                // IF data['code'] is not null
                if (data['code'] !== null) {
                    _this.error_message = data['status'] + ' ' + data['error'] + ', Code ' + data['code']; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF data['code] is null
                }
                else {
                    _this.error_message = data['status'] + ' ' + data['error']; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                }
            }
        });
    };
    // CHECK CURRENT SELECTED FOR ADD RED BORDER
    PortConnectionComponent.prototype.checkCurrentSelected = function () {
        var east = this.selectedEastPortID;
        var west = this.selectedWestPortID;
        if (((east && west) !== '') && (!document.getElementById(east).classList.contains('selected')
            || (!document.getElementById(west).classList.contains('selected')))) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('current-selected', 'Blink');
                this.all_west[i].classList.remove('current-selected', 'Blink');
            }
            document.getElementById(east).classList.add('current-selected', 'Blink');
            document.getElementById(west).classList.add('current-selected', 'Blink');
        }
    };
    // GET EASTPORT ID ON CLICK
    PortConnectionComponent.prototype.setEastID = function (eastID) {
        this.selectedEastPortID = eastID; // SET EASTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED EAST PORT
        localStorage.setItem('selectedEastPortID', JSON.stringify(eastID)); // SET LOCALSTORAGE VALUE OF selectedEastPortID
        console.log('Current East Port :', this.selectedEastPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (document.getElementById(eastID).classList.contains('connected')) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
                this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
            }
            this.eValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
            this.eastPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('pair', 'selected-pair');
                this.all_west[i].classList.remove('pair', 'selected-pair');
            }
            this.eValue = 0;
            this.availableEastPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
        }
    };
    // GET WESTPORT ID ON CLICK
    PortConnectionComponent.prototype.setWestID = function (westID) {
        this.selectedWestPortID = westID; // SET WESTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED WEST PORT
        localStorage.setItem('selectedWestPortID', JSON.stringify(westID)); // SET LOCALSTORAGE VALUE OF selectedWestPortID
        console.log('Current West Port :', this.selectedWestPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (document.getElementById(westID).classList.contains('connected')) {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
                this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
            }
            this.wValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
            this.westPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            for (var i = 0; i < 144; i++) {
                this.all_east[i].classList.remove('pair', 'selected-pair');
                this.all_west[i].classList.remove('pair', 'selected-pair');
            }
            this.wValue = 0;
            this.availableWestPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            this.disabled_disconnect_button = true;
        }
    };
    // UNLOCK CONNECT BUTTON
    PortConnectionComponent.prototype.unlockConnection = function (availableEastPort, availableWestPort) {
        // IF TWO AVAILABLE PORTS ARE SELECTED
        if ((availableEastPort && availableWestPort) === true) {
            console.log('You are select available port!');
            this.disabled_connect_button = false;
            // IF TWO AVAILABLE PORTS ARE NOT SELECTED
        }
        else if ((availableEastPort && availableWestPort) === false) {
            console.log('You are not select available port!');
            this.disabled_connect_button = true;
        }
    };
    // SHOW HIS PAIR WHEN CLICK EAST PORT
    PortConnectionComponent.prototype.eastPair = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.pair, function (obj) {
            var east = 'E' + obj.east;
            var west = 'W' + obj.west;
            if (_this.selectedEastPortID === east && _this.selectedWestPortID === west) {
                document.getElementById(east).classList.add('selected-pair');
                document.getElementById(west).classList.add('selected-pair');
                _this.disabled_disconnect_button = false;
            }
            else if (east === _this.selectedEastPortID) {
                document.getElementById(east).classList.add('pair');
                document.getElementById(west).classList.add('pair');
            }
        });
    };
    // SHOW HIS PAIR WHEN CLICK WEST PORT
    PortConnectionComponent.prototype.westPair = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.pair, function (obj) {
            var east = 'E' + obj.east;
            var west = 'W' + obj.west;
            if (_this.selectedEastPortID === east && _this.selectedWestPortID === west) {
                document.getElementById(east).classList.add('selected-pair');
                document.getElementById(west).classList.add('selected-pair');
                _this.disabled_disconnect_button = false;
            }
            else if (west === _this.selectedWestPortID) {
                document.getElementById(east).classList.add('pair');
                document.getElementById(west).classList.add('pair');
            }
        });
    };
    // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
    PortConnectionComponent.prototype.unlockButton = function (eValue, wValue, status) {
        var sumValue; // SUM OF wValue & eValue
        sumValue = eValue + wValue;
        /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
         UNLOCK CONNECT BUTTON
         LOCK CONTINUE */
        if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
            this.disable_stops_input = false;
            this.disabled_continue_button = true;
            console.log('UNLOCK CONNECT BUTTON | STATUS: ', status);
            // SUM = 1 LOCK ALL BUTTONS
        }
        else if (sumValue === 1) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = true;
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS');
            // STATUS = STARTED OR STATUS = PENDING OR STATUS = UNDEFINED
        }
        else if (status === 'started' || status === 'pending' || status === undefined) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = true;
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS | STATUS: ', status);
            // STATUS = BREAK
        }
        else if (status === 'break' && this.sequence !== null && this.sequence !== undefined) {
            this.disabled_connect_button = true;
            this.disabled_disconnect_button = true;
            this.disabled_continue_button = false;
            console.log('LOCK CONNECT & DISCONNECT | STATUS: ', status);
        }
    };
    // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionComponent.prototype.isSelectEast = function (Eport) {
        return (this.selectedEastPortID === Eport) ? 'selected' : '';
    };
    // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionComponent.prototype.isSelectWest = function (Wport) {
        return (this.selectedWestPortID === Wport) ? 'selected' : '';
    };
    // POST CONNECTION
    PortConnectionComponent.prototype.postConnection = function () {
        var _this = this;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        // LOCK CONNECT BUTTON AFTER POST
        this.disabled_connect_button = true;
        // PAYLOAD { east, west, action, stops }
        if (this.debugMode && this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect', this.stops)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + ' ' + data.error; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                }
            });
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect')
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + ' ' + data.error; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                }
            });
            // LOCK CONTINUE BUTTON AFTER POST
            this.disabled_connect_button = true;
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // POST DISCONNECTION
    PortConnectionComponent.prototype.postDisconnection = function () {
        var _this = this;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        // LOCK DISCONNECT BUTTON AFTER POST
        this.disabled_disconnect_button = true;
        // PAYLOAD { east, west, action, stops }
        if (this.debugMode && this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect', this.stops)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + ' ' + data.error; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                }
            });
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect')
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + ' ' + data.error;
                    _this.checkMessageLength(); // <-- check message length
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                }
            });
            // LOCK DISCONTINUE BUTTON AFTER POST
            this.disabled_disconnect_button = true;
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // POST DEBUG
    PortConnectionComponent.prototype.postDebug = function () {
        var _this = this;
        // LOCK CONTINUE BUTTON AFTER POST
        this.disabled_continue_button = true;
        // LOCK STOPS INPUT AFTER POST
        this.disable_stops_input = true;
        //  PAYLOAD { east, west, action, stops, number }
        if (this.stops && this.sequence) {
            // GET LOCALSTORAGE VALUE OF stops
            var stops = localStorage.getItem('stops');
            // GET LOCALSTORAGE VALUE OF selectedEastPortID
            var selectedEastPortID = localStorage.getItem('selectedEastPortID');
            // GET LOCALSTORAGE VALUE OF selectedWestPortID
            var selectedWestPortID = localStorage.getItem('selectedWestPortID');
            // POST DATA
            this.ApiService.connectPort(JSON.parse(selectedEastPortID).substring(1), JSON.parse(selectedWestPortID).substring(1), this.action, JSON.parse(stops), this.sequence)
                .then(function (data) {
                // IF CELERY'S CURRENT STATUS IS ERROR
                if (data.status === 'error') {
                    _this.error_message = data.status + ' ' + data.error; // <-- set error_message
                    _this.checkMessageLength(); // <-- check message length
                    // IF CELERY'S CURRENT STATUS IS NOT ERROR
                }
                else {
                }
            });
            // NO stops, sequence VALUE IN PAYLOAD
        }
        else {
            console.log('No stops or sequence value !');
        }
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        for (var i = 0; i < 144; i++) {
            this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
            this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
        }
    };
    // SET COLOR OF PORT CONNECTION
    PortConnectionComponent.prototype.setConnectedPort = function () {
        var _this = this;
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
        this.ApiService.getConnectedPort().then(function (data) {
            console.log('ALL PORT CONNECTION :', data);
            // SET PORT DATA IN PAIR
            _this.pair = data;
            // LOCAL STORAGE VARIABLE
            var selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
            var selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));
            // REMOVE ALL PORT COLOR BEFORE SET PORT COLOR
            var east_td = document.getElementsByClassName('West');
            var west_td = document.getElementsByClassName('East');
            for (var i = 0; i < 144; i++) {
                _this.all_east[i].classList.remove('connected', 'pending', 'break');
                _this.all_west[i].classList.remove('connected', 'pending', 'break');
            }
            console.log('------------------------------- All Port Status -------------------------------');
            // IF STATUS IS ERROR SHOW ERROR DIALOG
            if (data['status'] === 'error') {
                _this.error_message = data.status + ' ' + data.error; // <-- set error_message
                _this.checkMessageLength(); // <-- check message length
            }
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data, function (obj) {
                if (obj['status'] === 'success') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('connected'); // ADD GREEN COLOR
                    document.getElementById(west).classList.add('connected'); // ADD GREEN COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
                else if (obj['status'] === 'started' || obj['status'] === 'pending') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('pending'); // ADD RED COLOR
                    document.getElementById(west).classList.add('pending'); // ADD RED COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
                else if (obj['status'] === 'break') {
                    var east = 'E' + obj['east'];
                    var west = 'W' + obj['west'];
                    var status = obj['status'];
                    document.getElementById(east).classList.add('break'); // ADD YELLOW COLOR
                    document.getElementById(west).classList.add('break'); // ADD YELLOW COLOR
                    console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
                }
            });
            console.log('-------------------------------------------------------------------------------');
        });
    };
    // CLEAR LOCAL STORAGE STOPS VALUE
    PortConnectionComponent.prototype.clearValue = function (stops) {
        // CLEAR STOPS LOCALSTORAGE VALUE
        if (stops === undefined || stops === null || stops === '') {
            stops = null;
            localStorage.setItem('stops', JSON.stringify(stops));
            // LOCK CONNECT BUTTON WHEN INVALID STOPS INPUT
        }
        else if (document.getElementById('stops').classList.contains('ng-invalid')) {
            this.disabled_connect_button = true;
        }
    };
    // TEST CONSOLE.LOG LOCAL STORAGE VALUE
    PortConnectionComponent.prototype.clear = function () {
        var selectedEastPortID = localStorage.getItem('selectedEastPortID');
        var selectedWestPortID = localStorage.getItem('selectedWestPortID');
        console.log(selectedEastPortID, selectedWestPortID, this.stops);
    };
    // PUSH CONNECTED PORT OF EAST TO EAST TOOLTIP
    PortConnectionComponent.prototype.tooltipEast = function (EastID) {
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            var west = 'W' + this.pair[i].west;
            if (EastID === east) {
                return 'Connected to ' + west;
            }
        }
    };
    // PUSH CONNECTED PORT OF WEST TO WEST TOOLTIP
    PortConnectionComponent.prototype.tooltipWest = function (WestID) {
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            var west = 'W' + this.pair[i].west;
            if (WestID === west) {
                return 'Connected to ' + east;
            }
        }
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionComponent.prototype.etooltipPostion = function (EastID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = RIGHT
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var east = 'E' + this.pair[i].east;
            if (EastID === east) {
                return 'right';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionComponent.prototype.wtooltipPostion = function (WestID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = LEFT
        for (var _i = 0, _a = Object.keys(this.pair); _i < _a.length; _i++) {
            var i = _a[_i];
            var west = 'W' + this.pair[i].west;
            if (WestID === west) {
                return 'left';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
    };
    // TOGGLE DEBUG BUTTON
    PortConnectionComponent.prototype.toggleDebugMode = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#stops, #sequence, #input-container').toggle();
        this.debugMode = !this.debugMode;
        console.log('toggleDebugMode ' + this.debugMode);
    };
    // DISABLE NOT AVAILABLE EAST PORT
    PortConnectionComponent.prototype.disabledEastPort = function (id) {
        return (this.disableEastPortArray.includes(id)) ? 'port-unselectable' : '';
    };
    // DISABLE NOT AVAILABLE WEST PORT
    PortConnectionComponent.prototype.disabledWestPort = function (id) {
        return (this.disableWestPortArray.includes(id)) ? 'port-unselectable' : '';
    };
    // CHECK MESSAGE LENGTH FOR ADJUST DIALOG BOX HEIGHT
    PortConnectionComponent.prototype.checkMessageLength = function () {
        var message_length = this.error_message.length; // <-- set message length
        // CHECK MESSAGE LENGTH FOR ADJUST DIALOG HEIGHT
        if (message_length <= 30) {
            var card = document.getElementsByTagName('md-card');
            card[0].setAttribute('style', 'height: 20px'); // <-- set height 20px
            // CHECK MESSAGE LENGTH FOR ADJUST DIALOG HEIGHT
        }
        else {
            var card = document.getElementsByTagName('md-card');
            card[0].setAttribute('style', 'height: 80px'); // <-- set height 80px
        }
    };
    // CONTINUE ROBOBT OPERATION TASK
    PortConnectionComponent.prototype.continueRobotOperation = function () {
        var _this = this;
        this.ApiService.continue_robot_operations().then(function (data) {
            if (data.status !== 'success') {
                _this.error_message = data.status + ' ' + data.error;
                _this.checkMessageLength(); // <-- check message length
            }
        });
    };
    // RELOAD ROBOT OPERATION TASK
    PortConnectionComponent.prototype.reloadRobotOperation = function () {
        var _this = this;
        this.ApiService.reload_robot_operations().then(function (data) {
            if (data.status !== 'success') {
                _this.error_message = data.status + ' ' + data.error;
                _this.checkMessageLength(); // <-- check message length
            }
        });
    };
    // RESTART ROBOT OPERATION TASK
    PortConnectionComponent.prototype.restartRobotOperation = function () {
        var _this = this;
        this.ApiService.restart_robot_operations().then(function (data) {
            if (data.status !== 'success') {
                _this.error_message = data.status + ' ' + data.error;
                _this.checkMessageLength(); // <-- check message length
            }
        });
    };
    // FORCE DISABLE CONTINUE BUTTON
    PortConnectionComponent.prototype.force_disable_continue_button = function () {
        document.getElementById('Continue').setAttribute('disabled', 'disabled');
    };
    // FORCE DISABLE CONTINUE_MODE BUTTONS
    PortConnectionComponent.prototype.foruce_disable_continue_mode_button = function () {
        document.getElementById('Cancel').setAttribute('disabled', 'disabled');
        document.getElementById('Restart').setAttribute('disabled', 'disabled');
        document.getElementById('Reload').setAttribute('disabled', 'disabled');
    };
    // VALIDATION TO ENABLE OR DISABLE BUTTONS
    PortConnectionComponent.prototype.validate_continue_mode_all_button = function () {
        if (this.status === 'alarm') {
            document.getElementById('Cancel').removeAttribute('disabled');
            document.getElementById('Restart').removeAttribute('disabled');
            document.getElementById('Reload').removeAttribute('disabled');
        }
    };
    // CHECK STATUS FOR VALIDATION TO ADD CLASS TO ERROR DIALOG
    PortConnectionComponent.prototype.check_status_for_hide_dialog = function () {
        if (this.status === 'alarm' || this.status === 'error') {
            return null;
        }
        else {
            return 'hide';
        }
    };
    // GET LASTEST TASK TIME
    PortConnectionComponent.prototype.get_lastest_task_time = function () {
        var _this = this;
        this.ApiService.get_operation_task_time().then(function (data) {
            if (data['average_minute'] === 0 && data['average_second'] !== 0) {
                _this.operation_task_time = data['average_second'] + 'sec';
            }
            else if ((data['average_minute'] === 0 && data['average_second'] === 0)
                || ((data['average_minute'] === undefined && data['average_second'] === undefined))) {
                _this.operation_task_time = 'empty task';
            }
            else {
                _this.operation_task_time = data['average_minute'] + 'min ' + data['average_second'] + 'sec';
            }
        });
    };
    PortConnectionComponent.prototype.validate_status_for_add_hiding_continue_mode_button = function () {
        if (this.status !== 'alarm') {
            return 'hide';
        }
        else {
            return '';
        }
    };
    return PortConnectionComponent;
}());
PortConnectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port-connection',
        template: __webpack_require__("../../../../../src/app/port-connection/port-connection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port-connection/port-connection.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PortConnectionComponent);

var _a, _b;
//# sourceMappingURL=port-connection.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN TABLE-CONTAINER  -->\r\n    <div class=\"table-container\">\r\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n        (keyup)='updateFilter($event)' />\r\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n        <!-- BEGIN DATE COLUMN  -->\r\n        <ngx-datatable-column name=\"Date\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END DATE COLUMN -->\r\n        <!-- BEGIN TIME COLUMN  -->\r\n        <ngx-datatable-column name=\"Time\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TIME COLUMN -->\r\n        <!-- BEGIN TYPE COLUMN -->\r\n        <ngx-datatable-column name=\"User\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TYPE COLUMN -->\r\n        <!-- BEGIN STATUS COLUMN -->\r\n        <ngx-datatable-column name=\"Status\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END STATUS COLUMN -->\r\n        <!-- BEGIN EAST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"East\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END EAST PORT COLUMN -->\r\n        <!-- BEGIN WEST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"West\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END WEST PORT COLUMN -->\r\n        <!-- BEGIN SEVERITY COLUMN -->\r\n        <ngx-datatable-column name=\"RobotStatus\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <!-- OLD VERSION -->\r\n            <!-- <div *ngIf=\"value.status !== 'Pending'\"> -->\r\n            <!-- NEW VERSION -->\r\n            <div *ngIf=\"value.status\">{{value.status}}&nbsp;&nbsp;\r\n              <button md-raised-button id=\"Continue\" class=\"button-width\" color=\"primary\" *ngIf=\"value.status == 'Pending' || value.status == 'Break' || value.status == 'Started'\"\r\n                (click)=\"cancelTask(value.id)\">Cancel</button>\r\n            </div>\r\n            <!-- <div class=\"flex-container\"> -->\r\n            <!-- REMOVE PENDING BUTTON -->\r\n            <!-- <button md-raised-button id=\"Continue\" class=\"button-width button-red\" color=\"primary\" *ngIf=\"value.status == 'Pending'\" (click)=\"pending(value.id)\">Continue</button> -->\r\n            <!-- </div> -->\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END SEVERITY COLUMN -->\r\n      </ngx-datatable>\r\n      <!-- END TABLE -->\r\n    </div>\r\n    <!-- END SEARCH FILTER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" (click)=\"saveData()\" type=\"button\">Save</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: default; }\n  .flex-container .button-width {\n    min-width: 90px; }\n  .flex-container .button-red {\n    background: red;\n    color: white; }\n  .flex-container .flex-fix-padding {\n    padding: 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .red {\n    color: red; }\n  .flex-container .orange {\n    color: orange; }\n  .flex-container .blue {\n    color: blue; }\n  .flex-container .green {\n    color: #00C853; }\n  .flex-container .shadow {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.table-container {\n  background-color: transparent; }\n  .table-container input.fliter {\n    margin-left: 10px !important;\n    outline: none;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    transition: border-color 0.05s ease-in-out;\n    box-shadow: 0 10px 6px -6px #777; }\n    .table-container input.fliter:focus {\n      border-color: #1985A1; }\n\n:host /deep/ ngx-datatable {\n  background: #fff !important;\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n:host /deep/ datatable-header {\n  font-weight: 600; }\n  :host /deep/ datatable-header:hover span {\n    cursor: pointer; }\n  :host /deep/ datatable-header datatable-header-cell {\n    width: 100%;\n    text-align: center !important; }\n\n:host /deep/ datatable-body-cell {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service

// Third-party


var PortHistoryComponent = (function () {
    function PortHistoryComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.selected = [];
        // COLUMNS VARIABLES
        this.columns = [
            { name: 'Date' },
            { name: 'Time' },
            { name: 'User' },
            { name: 'East' },
            { name: 'West' },
            { name: 'Status' },
            { name: 'RobotStatus' }
        ];
        this.temp = this.rows;
    }
    PortHistoryComponent.prototype.ngOnInit = function () {
        // CHECK SERVER STATUS
        this.check_server_status();
        // FETCH DATA
        this.fetchData();
    };
    // CHECK SERVER STATUS
    PortHistoryComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // SET DATA TABLE
    PortHistoryComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getConnectionHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](data, function (obj) {
                console.log(obj);
                var date = new Date(obj['timestamp']);
                var day = date.toString().substring(0, 15);
                var time = date.toString().substring(15);
                var status = obj['status'].charAt(0).toUpperCase() + obj['status'].slice(1);
                // IF SWITCHTING_TYPE IS CONNECT
                if (obj['switching_type'] === 'C') {
                    _this.rows.push({
                        date: day, time: time, user: obj['username'].charAt(0).toUpperCase() + obj['username'].slice(1),
                        east: 'E' + obj['east'], west: 'W' + obj['west'],
                        status: 'Connected', robotStatus: { 'status': status, 'id': obj['id'] }
                    });
                    // IF SWITCHING_TYPE IS DISCONNECT
                }
                else {
                    _this.rows.push({
                        date: day, time: time, user: obj['username'].charAt(0).toUpperCase() + obj['username'].slice(1),
                        east: 'E' + obj['east'], west: 'W' + obj['west'],
                        status: 'Disconnected', robotStatus: { 'status': status, 'id': obj['id'] }
                    });
                }
            });
        });
    };
    // CANCEL TASK
    PortHistoryComponent.prototype.cancelTask = function (id) {
        this.ApiService.cancelTask(id, 'canceled').then(function (data) {
            if (data['status'] !== 'error' && data['historyid'] !== null) {
                location.reload();
            }
        });
    };
    // SAVE DATA
    PortHistoryComponent.prototype.saveData = function () {
        // USING HTTP TO DOWLOAD
        // window.location.href = 'http://localhost:8000/connectionhistorys?type=connectionhistory';
        // USING API SERVICE TO DOWNLOAD
        this.ApiService.downloadFile();
        // USING ANGULAR2CSV PACKAGE TO DOWNLOAD
        // this.ApiService.getConnectionHistory().then((data) => {
        //    const x = new Angular2Csv(data, 'connect_log');
        // });
    };
    // FILTER SEARCH
    PortHistoryComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    return PortHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__["a" /* DatatableComponent */]) === "function" && _a || Object)
], PortHistoryComponent.prototype, "table", void 0);
PortHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port-history',
        template: __webpack_require__("../../../../../src/app/port-history/port-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port-history/port-history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PortHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=port-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/port.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PortPipe = (function () {
    function PortPipe() {
    }
    PortPipe.prototype.transform = function (value) {
        return value.filter(function (i) { return i.legnth < 12; });
    };
    return PortPipe;
}());
PortPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'portfilter' })
], PortPipe);

//# sourceMappingURL=port.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"top-blank-div\"></div>\n  <div class=\"banner\">\n    <p>Registration</p>\n  </div>\n\n  <div class=\"middle-blank-div\"></div>\n\n  <div class=\"email-container\">\n    <div class=\"email-icon-container\">\n      <div class=\"icon-box\">\n        <md-icon class=\"icon-color\">email</md-icon>\n      </div>\n    </div>\n    <div class=\"email-input-container\">\n      <md-form-field>\n        <input mdInput id=\"email\" placeholder=\"Email\" (onclick)=\"hideErrorbox()\" value=\"email\" [(ngModel)]=\"email\" type=\"text\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"\n        />\n      </md-form-field>\n    </div>\n  </div>\n\n  <div class=\"email-blank-div\"></div>\n\n  <div class=\"username-container\">\n    <div class=\"username-icon-container\">\n      <div class=\"icon-box\">\n        <md-icon class=\"icon-color\">person</md-icon>\n      </div>\n    </div>\n    <div class=\"username-input-container\">\n      <md-form-field>\n        <input mdInput id=\"username\" placeholder=\"Username\" (onclick)=\"hideErrorbox()\" value=\"username\" [(ngModel)]=\"username\" type=\"text\" minlength=\"8\" maxlength=\"16\"\n          pattern=\"[a-zA-Z0-9]+\" />\n      </md-form-field>\n    </div>\n  </div>\n\n  <div class=\"password-blank-div\"></div>\n\n  <div class=\"password-container\">\n    <div class=\"password-icon-container\">\n      <div class=\"icon-box\">\n        <md-icon class=\"icon-color\">vpn_key</md-icon>\n      </div>\n    </div>\n    <div class=\"password-input-container\">\n      <md-form-field>\n        <input mdInput id=\"password\" placeholder=\"Password\" (onclick)=\"hideErrorbox()\" value=\"password\" [(ngModel)]=\"password\" type=\"password\" minlength=\"8\"\n          maxlength=\"16\" pattern=\"[a-zA-Z0-9]+\" />\n      </md-form-field>\n    </div>\n  </div>\n\n  <div class=\"password-blank-div\"></div>\n\n  <div class=\"password-container\">\n    <div class=\"password-icon-container\">\n      <div class=\"icon-box\">\n        <md-icon class=\"icon-color\">vpn_key</md-icon>\n      </div>\n    </div>\n    <div class=\"password-input-container\">\n      <md-form-field>\n        <input mdInput id=\"confirm_password\" placeholder=\"Confrim password\" (onclick)=\"hideErrorbox()\" value=\"confirm_password\" [(ngModel)]=\"confirm_password\"\n          type=\"password\" minlength=\"8\" maxlength=\"16\" pattern=\"[a-zA-Z0-9]+\" />\n      </md-form-field>\n    </div>\n  </div>\n\n  <div class=\"password-blank-div\"></div>\n\n  <div class=\"checking-email-container\">\n    <div>\n      <md-checkbox id=\"username_checkbox\" class=\"disabled-click\" [ngClass]=\"check_username_length()\">username must be at least 8 characters</md-checkbox>\n      <md-checkbox id=\"password_checkbox\" class=\"disabled-click\" [ngClass]=\"check_password_length()\">password must be at least 8 characters</md-checkbox>\n    </div>\n  </div>\n\n  <div class=\"checkbox-blank-div\"></div>\n\n  <div class=\"checkbox-container\">\n    <div>\n      <md-radio-group [(ngModel)]=\"gender\">\n        <md-radio-button [value]=\"false\">Male</md-radio-button>\n        <md-radio-button [value]=\"true\">Female</md-radio-button>\n      </md-radio-group>\n    </div>\n  </div>\n\n  <div class=\"signup-blank-div\"></div>\n\n  <div class=\"signup-container\">\n    <div>\n      <button md-raised-button color=\"primary\" id=\"signup-button\" (click)=\"signUp()\" [attr.disabled]=\"signup_button_unlock() == true ? false : null\"\n        disabled>Sign up</button>\n      <button md-raised-button color=\"primary\" (click)=\"routeBack ()\">Back</button>\n    </div>\n  </div>\n\n  <div id=\"error-box\" class=\"error-box-container hide\" [ngClass]=\"hideErrorbox()\">\n    <div>\n      <md-card>\n        <p>{{ this.error_message }}</p>\n      </md-card>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*****CONTAINER*****/\n.container {\n  margin: 2rem auto;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  /*****BANNER*****/\n  /*****EMAIL-CONTAINER*****/\n  /*****USERNAME-CONTAINER*****/\n  /*****PASSWORD-CONTAINER*****/\n  /*****CHECKBOX-CONTAINER*****/\n  /*****SIGNUP-CONTAINER*****/\n  /*****ERROR-BOX-CONTAINER*****/ }\n  @media only screen and (min-device-width: 640px) {\n    .container {\n      width: 450px;\n      height: 620px; } }\n  @media only screen and (max-device-width: 640px) {\n    .container {\n      width: 95vw;\n      height: 90vh; } }\n  .container .top-blank-div {\n    width: 100%;\n    height: 20px; }\n  .container .middle-blank-div {\n    width: 100%;\n    height: 30px; }\n  .container .email-blank-div {\n    width: 100%;\n    height: 20px; }\n  .container .password-blank-div {\n    width: 100%;\n    height: 20px; }\n  .container .checkbox-blank-div {\n    width: 100%;\n    height: 30px; }\n  .container .signup-blank-div {\n    width: 100%;\n    height: 30px; }\n  .container .banner {\n    text-align: center;\n    padding-top: 20px;\n    width: 100%;\n    height: 50px;\n    background: #3f51b5;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n    .container .banner p {\n      margin: 0;\n      font-size: 24px;\n      color: white;\n      cursor: default; }\n  .container .email-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 50px; }\n    .container .email-container .email-icon-container {\n      width: 50px;\n      height: 100%;\n      background: #3f51b5;\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .email-container .email-icon-container {\n          margin-left: 50px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .email-container .email-icon-container {\n          margin-left: 25px; } }\n      .container .email-container .email-icon-container .icon-box {\n        width: 100%;\n        height: 100%;\n        margin-top: 10px;\n        margin-left: 12px; }\n        .container .email-container .email-icon-container .icon-box .icon-color {\n          color: white;\n          font-size: 30px;\n          cursor: default; }\n    .container .email-container .email-input-container {\n      height: 100%;\n      width: 300px;\n      border-top-right-radius: 15px;\n      border-bottom-right-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .email-container .email-input-container {\n          width: 300px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .email-container .email-input-container {\n          width: 260px; } }\n      .container .email-container .email-input-container md-form-field {\n        margin-left: 10px; }\n        @media only screen and (min-device-width: 640px) {\n          .container .email-container .email-input-container md-form-field {\n            width: 270px; } }\n        @media only screen and (max-device-width: 640px) {\n          .container .email-container .email-input-container md-form-field {\n            width: 240px; } }\n  .container .checking-email-container {\n    width: 100%;\n    height: auto; }\n    @media only screen and (max-device-width: 640px) {\n      .container .checking-email-container {\n        margin-left: -15px; } }\n    @media only screen and (min-device-width: 640px) {\n      .container .checking-email-container div {\n        margin-left: 90px; } }\n    @media only screen and (max-device-width: 640px) {\n      .container .checking-email-container div {\n        margin-left: 43px; } }\n    .container .checking-email-container .add-margin {\n      margin-top: 10px; }\n  .container .username-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 50px; }\n    .container .username-container .username-icon-container {\n      width: 50px;\n      height: 100%;\n      background: #3f51b5;\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .username-container .username-icon-container {\n          margin-left: 50px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .username-container .username-icon-container {\n          margin-left: 25px; } }\n      .container .username-container .username-icon-container .icon-box {\n        width: 100%;\n        height: 100%;\n        margin-top: 10px;\n        margin-left: 12px; }\n        .container .username-container .username-icon-container .icon-box .icon-color {\n          color: white;\n          font-size: 30px;\n          cursor: default; }\n    .container .username-container .username-input-container {\n      height: 100%;\n      border-top-right-radius: 15px;\n      border-bottom-right-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .username-container .username-input-container {\n          width: 300px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .username-container .username-input-container {\n          width: 260px; } }\n      .container .username-container .username-input-container md-form-field {\n        margin-left: 10px; }\n        @media only screen and (min-device-width: 640px) {\n          .container .username-container .username-input-container md-form-field {\n            width: 270px; } }\n        @media only screen and (max-device-width: 640px) {\n          .container .username-container .username-input-container md-form-field {\n            width: 240px; } }\n  .container .password-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 50px; }\n    .container .password-container .password-icon-container {\n      width: 50px;\n      height: 100%;\n      background: #3f51b5;\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .password-container .password-icon-container {\n          margin-left: 50px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .password-container .password-icon-container {\n          margin-left: 25px; } }\n      .container .password-container .password-icon-container .icon-box {\n        width: 100%;\n        height: 100%;\n        margin-top: 10px;\n        margin-left: 12px; }\n        .container .password-container .password-icon-container .icon-box .icon-color {\n          color: white;\n          font-size: 30px;\n          cursor: default; }\n    .container .password-container .password-input-container {\n      height: 100%;\n      border-top-right-radius: 15px;\n      border-bottom-right-radius: 15px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n      @media only screen and (min-device-width: 640px) {\n        .container .password-container .password-input-container {\n          width: 300px; } }\n      @media only screen and (max-device-width: 640px) {\n        .container .password-container .password-input-container {\n          width: 260px; } }\n      .container .password-container .password-input-container md-form-field {\n        margin-left: 10px; }\n        @media only screen and (min-device-width: 640px) {\n          .container .password-container .password-input-container md-form-field {\n            width: 270px; } }\n        @media only screen and (max-device-width: 640px) {\n          .container .password-container .password-input-container md-form-field {\n            width: 240px; } }\n  .container .checkbox-container {\n    width: 100%;\n    height: auto; }\n    @media only screen and (min-device-width: 640px) {\n      .container .checkbox-container div {\n        margin-left: 155px; } }\n    @media only screen and (max-device-width: 640px) {\n      .container .checkbox-container div {\n        margin-left: 100px; } }\n  .container .signup-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: auto; }\n    @media only screen and (min-device-width: 640px) {\n      .container .signup-container div {\n        margin-left: 130px; } }\n    @media only screen and (max-device-width: 640px) {\n      .container .signup-container div {\n        margin-left: 70px; } }\n    .container .signup-container div button {\n      margin-left: 5px;\n      margin-right: 5px; }\n  .container .error-box-container {\n    width: 100%;\n    height: auto; }\n    @media only screen and (min-device-width: 640px) {\n      .container .error-box-container {\n        margin-top: 1rem; } }\n    @media only screen and (max-device-width: 640px) {\n      .container .error-box-container {\n        margin-top: 0.5rem; } }\n    @media only screen and (min-device-width: 640px) {\n      .container .error-box-container div {\n        margin-left: 110px; } }\n    @media only screen and (max-device-width: 640px) {\n      .container .error-box-container div {\n        margin-left: 60px; } }\n    .container .error-box-container div md-card {\n      height: 0;\n      width: 190px;\n      background-color: #ff4081; }\n      .container .error-box-container div md-card p {\n        color: white;\n        -webkit-transform: translateY(-8px);\n                transform: translateY(-8px); }\n\n/*-----------Global Class*-----------/\r\n\r\n/*****Hide*****/\n.hide {\n  visibility: hidden; }\n\n/*****Hide*****/\n.disabled-click {\n  pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service

var RegisterComponent = (function () {
    function RegisterComponent(router, ApiService) {
        this.router = router;
        this.ApiService = ApiService;
        this.gender = false; // Gender value
        this.email = null; // Email value
        this.username = null; // Username value
        this.password = null; // Password value
        this.confirm_password = null; // Confirm password value
        this.error_message = 'Password does not match';
        // DISABLE BUTTON
        this.signup_button_disable = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // SEND SIGN UP
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        if (this.password !== this.confirm_password) {
            this.error_message = 'Password does not match';
            document.getElementById('error-box').classList.remove('hide');
        }
        else {
            this.ApiService.create_user(this.email, this.username, this.password).then(function (data) {
                if (data['status'] === 'error') {
                    console.log(data);
                    document.getElementById('error-box').classList.remove('hide');
                    _this.error_message = data['error'];
                }
                else {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    // VALIDATE PASSWORD'S VALUE
    RegisterComponent.prototype.validate_password = function () {
        if (this.password && this.confirm_password) {
            if (this.password.length >= 8 && this.confirm_password.length >= 8) {
                this.signup_button_disable = true;
                return true;
            }
        }
        this.signup_button_disable = false;
        return false;
    };
    // VALIDATE USERNAME'S VALUE
    RegisterComponent.prototype.validate_username = function () {
        if (this.username) {
            if (this.username.length >= 8) {
                return true;
            }
        }
        return false;
    };
    // ROUTE BACK TO PREVIOUS PAGE
    RegisterComponent.prototype.routeBack = function () {
        this.router.navigate(['/']);
    };
    // CHECK PASSWORD'S VALUE LENGTH
    RegisterComponent.prototype.check_password_length = function () {
        if (this.validate_password() === true) {
            return 'mat-checkbox-anim-unchecked-checked mat-checkbox-checked';
        }
        return '';
    };
    // CHECK USERNAME'S VALUE LENGTH
    RegisterComponent.prototype.check_username_length = function () {
        if (this.validate_username() === true) {
            return 'mat-checkbox-anim-unchecked-checked mat-checkbox-checked';
        }
        return '';
    };
    // UNLOCK SIGNUP BUTTON
    RegisterComponent.prototype.signup_button_unlock = function () {
        if (this.email && this.username && this.password && this.confirm_password) {
            if ((!document.getElementById('email').classList.contains('ng-invalid')
                && !document.getElementById('username').classList.contains('ng-invalid')
                && !document.getElementById('password').classList.contains('ng-invalid')
                && !document.getElementById('confirm_password').classList.contains('ng-invalid'))
                && (document.getElementById('username_checkbox').classList.contains('mat-checkbox-checked')
                    && document.getElementById('password_checkbox').classList.contains('mat-checkbox-checked'))) {
                return false;
            }
        }
        return true;
    };
    // HIDE ERROR BOX
    RegisterComponent.prototype.hideErrorbox = function () {
        if (this.email === '' || this.username === ''
            || this.password === '' || this.confirm_password === '') {
            return 'hide';
        }
        return '';
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/server-status-error/server-status-error.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN-CONTAINER -->\r\n<div class=\"main-container\">\r\n  \r\n    <!-- BEGIN CONTAINER -->\r\n    <div class=\"container\">\r\n      <p>\r\n        500. INTERNAL SERVER ERROR\r\n      </p>\r\n    </div>\r\n    <!-- END CONTAINER -->\r\n  \r\n  </div>\r\n  <!-- END MAIN-CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/server-status-error/server-status-error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Main-container\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.main-container {\n  width: 100%;\n  height: 94vh;\n  background: #24C6DC;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #514A9D, #24C6DC);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .main-container .container {\n    padding-top: 150px;\n    text-align: center; }\n    .main-container .container p {\n      color: white;\n      font-size: 150px;\n      margin-top: 0;\n      margin-bottom: 0;\n      cursor: default; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/server-status-error/server-status-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerStatusErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE

var ServerStatusErrorComponent = (function () {
    function ServerStatusErrorComponent() {
    }
    ServerStatusErrorComponent.prototype.ngOnInit = function () {
    };
    return ServerStatusErrorComponent;
}());
ServerStatusErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-server-status-error',
        template: __webpack_require__("../../../../../src/app/server-status-error/server-status-error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/server-status-error/server-status-error.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ServerStatusErrorComponent);

//# sourceMappingURL=server-status-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_backend_ip__ = __webpack_require__("../../../../../src/app/_models/backend_ip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// ReactiveX

// Model

// Third-Party


var ApiService = (function () {
    // private ROOT_URL = `http://localhost:8000/`;
    function ApiService(http) {
        this.http = http;
        this.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; // <-- Set fake token
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.ROOT_URL = __WEBPACK_IMPORTED_MODULE_3__models_backend_ip__["a" /* default */];
    }
    // GET ALLPORT FROM API AND SEPERATE INTO TWO DIRECTION 'E' AND 'W'
    ApiService.prototype.getAllPort = function () {
        var eports = []; // 144 EAST PORTS
        var wports = []; // 144 WEST PORTS
        var eportschunk = []; // 144 to [12,12,...]
        var wportschunk = []; // 144 to [12,12,...]
        var allPort = []; // ALL PORTS, 288 PORTS
        var eportNote = []; // EAST PORT NOTE
        var wportNote = []; // WEST PORT NOTE
        var id = []; // OBJECT ID
        return this.http.get(this.ROOT_URL + 'ports/').toPromise().then(function (response) {
            allPort = JSON.parse(response._body);
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](allPort, function (obj) {
                // SEPERATE BY DIRECTION 'E'
                if (obj.direction === 'E') {
                    eports.push(obj.direction + obj.number);
                    eportschunk = __WEBPACK_IMPORTED_MODULE_4_lodash__["chunk"](eports, 12);
                    eportNote.push(obj.note);
                    id.push(obj.id);
                    // SEPERATE BY DIRECTION 'W'
                }
                else if (obj.direction === 'W') {
                    wports.push(obj.direction + obj.number);
                    wportschunk = __WEBPACK_IMPORTED_MODULE_4_lodash__["chunk"](wports, 12);
                    wportNote.push(obj.note);
                    id.push(obj.id);
                }
            });
            return ({
                allPort: allPort, eports: eports, wports: wports, eportschunk: eportschunk,
                wportschunk: wportschunk, eportNote: eportNote, wportNote: wportNote, id: id
            });
        });
    };
    // GET USERNAME
    ApiService.prototype.getUsername = function () {
        if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
            var user_data = JSON.parse(localStorage.getItem('currentUser'));
            return user_data['username'];
        }
    };
    // POST CONNECTION, DISCONNECTION, DEBUG API TO SERVER
    ApiService.prototype.connectPort = function (east, west, action, stops, number) {
        // VARIABLE DETAILS
        // east = selectedEastPortID
        // west = selectedWestPortID
        // action = "connect" or "disconnect"
        // stops = stops
        // number = sequence
        // STOPS MODE
        // PAYLOAD { east, west, action, stops }
        // set local authToken, header, options
        var authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var username = this.getUsername();
        // START DEBUG MODE
        if (stops && number === undefined) {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, stops: stops, username: username }, options).toPromise().then(function (response) {
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function (error) {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('POST START DEBUG MODE ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                    return ({ status: 'error', error: 'ERROR ' + error.status });
                    // ERROR FROM CLIENT
                }
                else {
                    console.error('POST START DEBUG MODE ERROR 500 Internal Server');
                    return ({ status: 'error', error: 'ERROR 500' });
                }
            });
            // DEBUG MODE
            // PAYLOAD { east, west, action, stops, number }
        }
        else if (stops && number) {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, stops: stops, number: number }, options).toPromise().then(function (response) {
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function (error) {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('POST DEBUG MODE ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                    return ({ status: 'error', error: 'ERROR ' + error.status });
                    // ERROR FROM CLIENT
                }
                else {
                    console.error('POST DEBUG MODE ERROR 500 Internal Server');
                    return ({ status: 'error', error: 'ERROR 500' });
                }
            });
            // NORMAL MODE
            // PAYLOAD { east, west, action }
        }
        else {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, username: username }, options).toPromise().then(function (response) {
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function (error) {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('POST NORMAL MODE ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                    return ({ status: 'error', error: 'ERROR ' + error.status });
                    // ERROR FROM CLIENT
                }
                else {
                    console.error('POST NORMAL MODE ERROR 500 Internal Server');
                    return ({ status: 'error', error: 'ERROR 500' });
                }
            });
        }
    };
    // PARSE AN ERROR HTTPRESPONSE BODY
    ApiService.prototype.parseErrorBody = function (error) {
        try {
            var response = JSON.parse(error._body);
            return response;
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                var parse = new DOMParser();
                var htmlData = parse.parseFromString(error._body, 'text/html');
                var title = htmlData.getElementsByTagName('title')[0].textContent;
                var error_message = htmlData.getElementsByClassName('exception_value')[0].textContent;
                var obj = {
                    'status': 'error',
                    'action': '-',
                    'sequence': '-',
                    'error': title,
                    'code': error_message
                };
                return obj;
            }
            else {
                console.log('parseErrorBody', e);
            }
        }
    };
    // CHECK STATUS FROM CURRENT TASK
    ApiService.prototype.checkStatus = function () {
        var _this = this;
        return this.http.get(this.ROOT_URL + 'checktask/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            // DO NOT DELETE, FOR READING
            // OLD VERSION
            // _.each(response, (obj) => {
            //   status = obj.status;
            //   sequence = obj.sequence;
            //   action = obj.action;
            // });
            // NEW VERSION
            var status = response.status; // CURRENT STATUS
            var sequence = response.sequence; // CURRENT SEQUENCE
            var action = response.action; // CURRENT ACTION
            return ({ status: status, sequence: sequence, action: action });
        }).catch(function (error) {
            if (error.status === 500) {
                var response = _this.parseErrorBody(error);
                var status = response.status;
                var action = response.action;
                var sequence = response.sequence;
                var error_detail = response.error;
                var error_code = response.code;
                console.error('CHECK STATUS ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: status, action: action, sequence: sequence, error: error_detail, code: error_code });
            }
            else if (error.status === 400) {
                console.error('CHECK STATUS ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
            }
            else if (error.status === 409) {
                console.error('CHECK STATUS ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
            }
            else if (error.status === 406) {
                console.error('CHECK STATUS ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
            }
            else {
                console.error('CHECK STATUS ERROR 500 Internal Server');
                return ({ status: 'error', sequence: null, action: null, error: 'ERROR 500', code: null });
            }
        });
    };
    // CHECK CONNECTION STATUS ALL PORT
    ApiService.prototype.getConnectedPort = function () {
        return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('GET CONNECTED PORT ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('GET CONNECTED PORT ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // GET CONNECTION HISTORYS
    ApiService.prototype.getConnectionHistory = function () {
        return this.http.get(this.ROOT_URL + 'connectionhistorys/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('GET CONNECTION HISTORY ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('GET CONNECTION HISTORY ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // GET ALARM HISTORY
    ApiService.prototype.getAlarmHistory = function () {
        return this.http.get(this.ROOT_URL + 'alarms/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('GET ALARM HISTORY ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('GET ALARM HISTORY ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // POST ALARM
    ApiService.prototype.postAlarm = function (alarm, detail, severity) {
        return this.http.post(this.ROOT_URL + 'alarms/', { alarm: alarm, detail: detail, severity: severity }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('GET ALARM ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('GET ALARM ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // POST PENDING TASK
    ApiService.prototype.pendingTask = function (id) {
        return this.http.post(this.ROOT_URL + 'pendingtask/', { id: id }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('PENDING TASK ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('PENDING TASK ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // POST CANCEL TASK
    ApiService.prototype.cancelTask = function (id, action) {
        // set local authToken, header, options
        var authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { id: id, action: action }, options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('CANCELED TASK ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('CANCELED TASK ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // CLEAR DATABASE DATA
    ApiService.prototype.clearDatabase = function (action) {
        // set local authToken, header, options
        var authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { action: action }, options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            console.log(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('CLEAR DATABASE TASK ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('CLEAR DATABASE ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // SAVE DATA (CSV FILE)
    ApiService.prototype.saveData_Connectionhistory = function (type) {
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { type: type }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('SAVE DATA ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('SAVE DATA ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // DO NOT DELETE THIS FUNCTION
    // FOR READING OLD VERSION
    // downloadFile() {
    //   let i = {'id': '1'};
    //   const api = `http://127.0.0.1:8000/connectionhistorys/?type=connecthistorys`;
    //   const fileName = `connection_log.csv`;
    //   this.http.get(api, { responseType: ResponseContentType.Blob })
    //     .subscribe((response: any) => {
    //       // FileSaver.saveAs(response.blob(), fileName);
    //     });
    // }
    // TODO NEW VERSION
    // TEST DOWLOAD (CSV FILE)
    ApiService.prototype.downloadFile = function () {
        var path = "connectionhistorys/?type=connecthistorys";
        return this.http.get(this.ROOT_URL + path, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob })
            .subscribe(function (res) {
            var blob = res.blob();
            console.log(res);
            var filename = 'connection_log.json';
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](blob, filename);
        });
    };
    // CREATE CONNECTION IN CONNECTION TABLE
    ApiService.prototype.create_connection_in_database = function (east, west, action) {
        // set local authToken, header, options
        var authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action }, options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            if (response.status === 'error') {
                console.error('status: ' + response.status + ', error_code: ' + response.error);
            }
            else {
                console.log('status: ' + response.status + ' east: ' + response.east + ' west: ' + response.west);
            }
            return response;
        }).catch(function (error) {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('TESTING CONNECTION ERROR ' + error.status, __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(error.status)));
                return ({ status: 'error', error: 'ERROR ' + error.status });
                // ERROR FROM CLIENT
            }
            else {
                console.error('TESTING CONNECTION ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }
        });
    };
    // CHECK SERVER IS ONLINE OR NOT
    ApiService.prototype.check_server_status = function () {
        var status;
        return this.http.get(this.ROOT_URL).toPromise().then(function (response) {
            return (response.status);
            // IF CANNOT GET RESPONSE FROM SERVER
        }).catch(function () {
            status = 500;
            return status;
        });
    };
    // HOMING ROBOT
    ApiService.prototype.home_robot_axes = function () {
        return this.http.get(this.ROOT_URL + 'homes/').toPromise().then(function (response) {
            var resp = JSON.parse(response._body);
            resp['status'] = 'success';
            return resp;
            // IF CANNOT GET RESPONSE FROM SERVER
        }).catch(function (error) {
            return { 'status': 'error', 'error': error };
        });
    };
    ApiService.prototype.continue_robot_operations = function () {
        var _this = this;
        var mode = 'robot';
        var continue_mode = 'continue';
        var action = JSON.parse(localStorage.getItem('action'))['action'];
        var east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
        var west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);
        return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode: mode, continue_mode: continue_mode, action: action, east: east, west: west }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            var response = _this.parseErrorBody(error);
            return response;
        });
    };
    ApiService.prototype.reload_robot_operations = function () {
        var _this = this;
        var mode = 'robot';
        var continue_mode = 'reload';
        var action = JSON.parse(localStorage.getItem('action'))['action'];
        var east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
        var west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);
        return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode: mode, continue_mode: continue_mode, action: action, east: east, west: west }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            var response = _this.parseErrorBody(error);
            return response;
        });
    };
    ApiService.prototype.restart_robot_operations = function () {
        var _this = this;
        var mode = 'robot';
        var continue_mode = 'restart';
        var action = JSON.parse(localStorage.getItem('action'))['action'];
        var east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
        var west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);
        return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode: mode, continue_mode: continue_mode, action: action, east: east, west: west }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        }).catch(function (error) {
            var response = _this.parseErrorBody(error);
            return response;
        });
    };
    // GET OPERATION TASK TIME
    ApiService.prototype.get_operation_task_time = function () {
        // Set local authToken, header, options
        var authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.ROOT_URL + 'operationhistorys?action=connection_time').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        });
    };
    // VERIFY USER WITH CURRENT BACKEND
    ApiService.prototype.verify_user_with_backend = function () {
        var token = JSON.parse(localStorage.getItem('token')); // Set sample token
        return this.http.post(this.ROOT_URL + 'verify_user/', { token: token }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        });
    };
    // CREATE USER IN DATABASE
    ApiService.prototype.create_user = function (email, username, password) {
        return this.http.post(this.ROOT_URL + 'create_user/', { email: email, username: username, password: password }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return response;
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_backend_ip__ = __webpack_require__("../../../../../src/app/_models/backend_ip.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular Module



// Api Service

// Model

var AuthenticationService = (function () {
    // private ROOT_URL = `http://localhost:8000/`;
    function AuthenticationService(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.ROOT_URL = __WEBPACK_IMPORTED_MODULE_4__models_backend_ip__["a" /* default */];
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    // Login
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.ROOT_URL + 'get_auth_token/', { username: username, password: password }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            // login successful if there's a jwt token in the response
            var token = response && response['token'];
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // set token for Api Service
                localStorage.setItem('token', JSON.stringify({ token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }).catch(function () {
            return { 'error': 'wrong username or password' };
        });
    };
    // Logout
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular Module


 // <-- Not using right now
// Service

var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        // private ROOT_URL = backend_ip_address;
        this.ROOT_URL = "http://localhost:8000/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    // getUsers(): Observable<User[]> {
    //   // add authorization header with jwt token
    //   const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //   const options = new RequestOptions({ headers: headers });
    //   // get users from api
    //   return this.http.get(this.ROOT_URL + 'get_auth_token/', options)
    //     .map((response: Response) => response.json());
    // }
    // GET CONNECTION HISTORYS
    UserService.prototype.getUsers = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // IF currentUser no data
        if (currentUser === null) {
            return { 'username': null };
            //  IF currentUser have data
        }
        else {
            var username = currentUser['username'];
            var token = currentUser['token'];
            this.username = username;
            return { 'username': username };
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <button type=\"button\" md-button (click)=\"sidenav.toggle()\">\r\n       <md-icon >menu</md-icon>\r\n    </button>\r\n</md-toolbar>\r\n\r\n  <!-- <md-sidenav-container class=\"nav-container\">\r\n  <md-sidenav #sidenav class=\"example-sidenav\">\r\n    <md-list>\r\n      <h3 md-subheader>\r\n        <md-icon>home</md-icon> XENON\r\n      </h3>\r\n       <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of links\">\r\n        <md-list-item>\r\n          <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n          <h4 md-line>{{ link.name }}</h4>\r\n        </md-list-item>\r\n      </a> \r\n    </md-list>\r\n  </md-sidenav>\r\n</md-sidenav-container>   -->\r\n\r\n<md-sidenav-container class=\"sidenav-container\">\r\n  <md-sidenav #sidenav class=\"example-sidenav\">\r\n     <md-list>\r\n      <h3 md-subheader>\r\n        <md-icon>home</md-icon> XENON\r\n      </h3>\r\n       <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of links\">\r\n        <md-list-item>\r\n          <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n          <h4 md-line>{{ link.name }}</h4>\r\n        </md-list-item>\r\n      </a> \r\n    </md-list>\r\n  </md-sidenav>\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-container {\n  width: 100%;\n  height: 100vh; }\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-sidenav {\n  padding: 20px;\n  width: 300px; }\n\n.mat-list .mat-subheader {\n  margin: 24px 0;\n  text-align: center;\n  font-size: 24px; }\n\n.mat-list md-icon {\n  opacity: 0.25; }\n\n:host /deep/ md-list-item.mat-list-item .mat-list-item-content {\n  margin: 12px 24px;\n  border-radius: 5px; }\n\n:host /deep/ .active .mat-list-item-content {\n  color: white;\n  background-color: #D61515;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n\n:host /deep/ a {\n  text-decoration: none; }\n  :host /deep/ a:not(.active):hover .mat-list-item-content {\n    background-color: rgba(0, 0, 0, 0.15); }\n\n:host /deep/ a:focus {\n  outline: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = (function () {
    function SideNavComponent() {
        this.links = [
            {
                icon: 'settings_input_component',
                name: 'Port Connection',
                path: '/'
            },
            {
                icon: 'history',
                name: 'Port History',
                path: '/porthistory'
            },
            {
                icon: 'error_outline',
                name: 'Alarm',
                path: '/alarm'
            },
            {
                icon: 'history',
                name: 'Alarm History',
                path: '/alarmhistory'
            }
        ];
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-nav',
        template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], SideNavComponent);

//# sourceMappingURL=side-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/testing-mode/testing-mode.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN-CONTAINER -->\r\n<div class=\"main-container\">\r\n  <!-- BEGIN TAB-GROUP -->\r\n  <md-tab-group>\r\n    <!-- BEGIN ROBOT-TAB -->\r\n    <md-tab label=\"Robot Handler\">\r\n      <md-expansion-panel>\r\n        <md-expansion-panel-header>\r\n          <md-panel-title> Home </md-panel-title>\r\n          <md-panel-description> Home all axes </md-panel-description>\r\n        </md-expansion-panel-header>\r\n\r\n        <button md-button color=\"primary\" (click)=\"home_motor()\">Home</button>\r\n      </md-expansion-panel>\r\n\r\n      <md-action-row>\r\n        <!--<md-error [(ngModel)]=\"errorRobot\">error message</md-error>-->\r\n        <md-error>{{errorRobot}}</md-error>\r\n      </md-action-row>\r\n      <!--<div>-->\r\n      <!--<br />-->\r\n      <!--</div>-->\r\n\r\n      <md-expansion-panel>\r\n        <md-expansion-panel-header>\r\n          <md-panel-title>\r\n            Change Robot\r\n          </md-panel-title>\r\n          <md-panel-description>\r\n            Change robot parameter\r\n          </md-panel-description>\r\n        </md-expansion-panel-header>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"robot_number\" placeholder=\"Robot number\" value=\"robot_number\" [(ngModel)]=\"robot_number\">\r\n        </md-form-field>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"continue_mode\" placeholder=\"Continue mode\" value=\"continue_mode\" [(ngModel)]=\"continue_mode\">\r\n        </md-form-field>\r\n\r\n        <md-action-row>\r\n          <button md-button color=\"primary\" (click)=\"changeRobotParameter()\">Change Parameter</button>\r\n        </md-action-row>\r\n\r\n      </md-expansion-panel>\r\n\r\n\r\n    </md-tab>\r\n    <!-- END ROBOT-TAB -->\r\n    <!-- BEGIN CONNECTION-TAB -->\r\n    <md-tab label=\"Connection\">\r\n      <!-- BEGIN CREATE CONNECTION -->\r\n      <md-expansion-panel>\r\n        <md-expansion-panel-header>\r\n          <md-panel-title>\r\n            Create connection in database\r\n          </md-panel-title>\r\n          <md-panel-description>\r\n            Type east port and west port\r\n          </md-panel-description>\r\n        </md-expansion-panel-header>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"east_port_input\" placeholder=\"East port\" value=\"east_port_number\" [(ngModel)]=\"east_port_number\" minlength=\"1\"\r\n            maxlength=\"3\" pattern=\"^[1-9][0-9]{0,3}\">\r\n        </md-form-field>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"west_port_input\" placeholder=\"West port\" value=\"west_port_number\" [(ngModel)]=\"west_port_number\" minlength=\"1\"\r\n            maxlength=\"3\" pattern=\"^[1-9][0-9]{0,3}\">\r\n        </md-form-field>\r\n\r\n        <md-action-row>\r\n          <button md-button color=\"primary\" (click)=\"create_connection()\" [attr.disabled]=\"validate_connect_button() === false ? true : null\"\r\n            disabled>Send Data</button>\r\n        </md-action-row>\r\n      </md-expansion-panel>\r\n      <!-- END CREATE CONNECTION -->\r\n      <!-- BEGIN CREATE CONNECTION DEBUG MODE -->\r\n      <md-expansion-panel>\r\n        <md-expansion-panel-header>\r\n          <md-panel-title>\r\n            Create connection in debug mode\r\n          </md-panel-title>\r\n          <md-panel-description>\r\n            Type east port and west port and stops\r\n          </md-panel-description>\r\n        </md-expansion-panel-header>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"east_port_input\" placeholder=\"East port\" value=\"east_port_number\" [(ngModel)]=\"east_port_number\" minlength=\"1\"\r\n            maxlength=\"3\" pattern=\"^[1-9][0-9]{0,3}\">\r\n        </md-form-field>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"west_port_input\" placeholder=\"West port\" value=\"west_port_number\" [(ngModel)]=\"west_port_number\" minlength=\"1\"\r\n            maxlength=\"3\" pattern=\"^[1-9][0-9]{0,3}\">\r\n        </md-form-field>\r\n\r\n        <md-form-field>\r\n          <input mdInput id=\"stops\" placeholder=\"Stops\" value=\"stops\" [(ngModel)]=\"stops\" minlength=\"1\" maxlength=\"20\" pattern=\"^[1-9][0-9,]{1,20}\">\r\n        </md-form-field>\r\n\r\n        <md-form-field class=\"event-prevent\">\r\n          <input mdInput id=\"sequence\" placeholder=\"Sequence\" value=\"sequence\" [(ngModel)]=\"sequence\" disabled>\r\n        </md-form-field>\r\n\r\n        <md-action-row>\r\n          <button md-button id=\"debug_button\" color=\"primary\" (click)=\"create_connection_debug_mode()\" [attr.disabled]=\"validate_debug_button() === false ? true : null\"\r\n            disabled>Send Data</button>\r\n        </md-action-row>\r\n      </md-expansion-panel>\r\n      <!-- END CREATE CONNECTION DEBUG MODE -->\r\n    </md-tab>\r\n    <!-- END CONNECTION-TAB -->\r\n  </md-tab-group>\r\n  <!-- END TAB-GROUP -->\r\n</div>\r\n<!-- END MAIN-CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/testing-mode/testing-mode.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Global\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.main-container {\n  width: 100%;\n  height: 94%; }\n\n.event-prevent {\n  pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testing-mode/testing-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingModeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR MODULE


// Api Service

var TestingModeComponent = (function () {
    function TestingModeComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.errorRobot = '';
    }
    TestingModeComponent.prototype.ngOnInit = function () {
        // CHECK SERVER STATUS
        this.check_server_status();
        // SET debug_button = true
        this.debug_button = true;
    };
    // CHECK SERVER STATUS
    TestingModeComponent.prototype.check_server_status = function () {
        var _this = this;
        this.ApiService.check_server_status().then(function (status) {
            if (status === 500) {
                _this.router.navigateByUrl('/500');
            }
        });
    };
    // CREATE CONNECTION
    TestingModeComponent.prototype.create_connection = function () {
        if (this.east_port_number && this.west_port_number) {
            this.ApiService.create_connection_in_database(this.east_port_number, this.west_port_number, 'test_connect').then(function (data) {
                console.log(data);
            });
        }
        else {
            alert('error input !');
            console.error('error input !');
        }
    };
    // VALIDATE CONNECT BUTTON
    TestingModeComponent.prototype.validate_connect_button = function () {
        if ((this.east_port_number <= 144 && this.west_port_number <= 144)
            && (!document.getElementById('east_port_input').classList.contains('ng-invalid')
                && !document.getElementById('west_port_input').classList.contains('ng-invalid'))
            && (this.east_port_number !== '' && this.west_port_number !== '')) {
            return true;
        }
        else {
            return false;
        }
    };
    // CREATE CONNECTION DEBUG MODE
    TestingModeComponent.prototype.create_connection_debug_mode = function () {
        // TODO
    };
    // VALIDATE DEBUG BUTTON
    TestingModeComponent.prototype.validate_debug_button = function () {
        if ((this.east_port_number <= 144 && this.west_port_number <= 144)
            && (!document.getElementById('east_port_input').classList.contains('ng-invalid')
                && !document.getElementById('west_port_input').classList.contains('ng-invalid'))
            && (this.east_port_number !== '' && this.west_port_number !== '')
            && (this.stops !== undefined && this.stops !== '' && !document.getElementById('stops').classList.contains('ng-invalid'))) {
            return true;
        }
        else {
            return false;
        }
    };
    TestingModeComponent.prototype.home_motor = function () {
        var _this = this;
        this.ApiService.home_robot_axes().then(function (data) {
            if (data['status'] === 'success') {
                console.log(data);
            }
            else {
                console.error(data);
                _this.errorRobot = data['status'];
            }
        });
    };
    TestingModeComponent.prototype.changeRobotParameter = function () {
        localStorage.setItem('robot', this.robot_number);
        localStorage.setItem('continue_mode', this.continue_mode);
        alert('Change robot parameter success !');
    };
    return TestingModeComponent;
}());
TestingModeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testing-mode',
        template: __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], TestingModeComponent);

var _a, _b;
//# sourceMappingURL=testing-mode.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/normalize.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/skeleton.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box; }\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box; }\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0; }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%; }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%; }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0; }\r\n\r\n  .one.column,\r\n  .one.columns                    { width: 4.66666666667%; }\r\n  .two.columns                    { width: 13.3333333333%; }\r\n  .three.columns                  { width: 22%;            }\r\n  .four.columns                   { width: 30.6666666667%; }\r\n  .five.columns                   { width: 39.3333333333%; }\r\n  .six.columns                    { width: 48%;            }\r\n  .seven.columns                  { width: 56.6666666667%; }\r\n  .eight.columns                  { width: 65.3333333333%; }\r\n  .nine.columns                   { width: 74.0%;          }\r\n  .ten.columns                    { width: 82.6666666667%; }\r\n  .eleven.columns                 { width: 91.3333333333%; }\r\n  .twelve.columns                 { width: 100%; margin-left: 0; }\r\n\r\n  .one-third.column               { width: 30.6666666667%; }\r\n  .two-thirds.column              { width: 65.3333333333%; }\r\n\r\n  .one-half.column                { width: 48%; }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns        { margin-left: 26%;            }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns          { margin-left: 52%;            }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns     { margin-left: 52%; }\r\n\r\n}\r\n\r\n\r\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%; }\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #222; }\r\n\r\n\r\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300; }\r\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\r\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\r\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\r\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\r\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\r\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 { font-size: 5.0rem; }\r\n  h2 { font-size: 4.2rem; }\r\n  h3 { font-size: 3.6rem; }\r\n  h4 { font-size: 3.0rem; }\r\n  h5 { font-size: 2.4rem; }\r\n  h6 { font-size: 1.5rem; }\r\n}\r\n\r\np {\r\n  margin-top: 0; }\r\n\r\n\r\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1EAEDB; }\r\na:hover {\r\n  color: #0FA0CE; }\r\n\r\n\r\n/* Buttons\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.button,\r\nbutton,\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"],\r\ninput[type=\"button\"] {\r\n  display: inline-block;\r\n  height: 38px;\r\n  padding: 0 30px;\r\n  color: #555;\r\n  text-align: center;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  line-height: 38px;\r\n  letter-spacing: .1rem;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border-radius: 4px;\r\n  border: 1px solid #bbb;\r\n  cursor: pointer;\r\n  box-sizing: border-box; }\r\n.button:hover,\r\nbutton:hover,\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"reset\"]:hover,\r\ninput[type=\"button\"]:hover,\r\n.button:focus,\r\nbutton:focus,\r\ninput[type=\"submit\"]:focus,\r\ninput[type=\"reset\"]:focus,\r\ninput[type=\"button\"]:focus {\r\n  color: #333;\r\n  border-color: #888;\r\n  outline: 0; }\r\n.button.button-primary,\r\nbutton.button-primary,\r\ninput[type=\"submit\"].button-primary,\r\ninput[type=\"reset\"].button-primary,\r\ninput[type=\"button\"].button-primary {\r\n  color: #FFF;\r\n  background-color: #33C3F0;\r\n  border-color: #33C3F0; }\r\n.button.button-primary:hover,\r\nbutton.button-primary:hover,\r\ninput[type=\"submit\"].button-primary:hover,\r\ninput[type=\"reset\"].button-primary:hover,\r\ninput[type=\"button\"].button-primary:hover,\r\n.button.button-primary:focus,\r\nbutton.button-primary:focus,\r\ninput[type=\"submit\"].button-primary:focus,\r\ninput[type=\"reset\"].button-primary:focus,\r\ninput[type=\"button\"].button-primary:focus {\r\n  color: #FFF;\r\n  background-color: #1EAEDB;\r\n  border-color: #1EAEDB; }\r\n\r\n\r\n/* Forms\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ninput[type=\"email\"],\r\ninput[type=\"number\"],\r\ninput[type=\"search\"],\r\ninput[type=\"text\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"url\"],\r\ninput[type=\"password\"],\r\ntextarea,\r\nselect {\r\n  height: 38px;\r\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\r\n  background-color: #fff;\r\n  border: 1px solid #D1D1D1;\r\n  border-radius: 4px;\r\n  box-shadow: none;\r\n  box-sizing: border-box; }\r\n/* Removes awkward default styles on some inputs for iOS */\r\ninput[type=\"email\"],\r\ninput[type=\"number\"],\r\ninput[type=\"search\"],\r\ninput[type=\"text\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"url\"],\r\ninput[type=\"password\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none; }\r\ntextarea {\r\n  min-height: 65px;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px; }\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"number\"]:focus,\r\ninput[type=\"search\"]:focus,\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"url\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n  border: 1px solid #33C3F0;\r\n  outline: 0; }\r\nlabel,\r\nlegend {\r\n  display: block;\r\n  margin-bottom: .5rem;\r\n  font-weight: 600; }\r\nfieldset {\r\n  padding: 0;\r\n  border-width: 0; }\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  display: inline; }\r\nlabel > .label-body {\r\n  display: inline-block;\r\n  margin-left: .5rem;\r\n  font-weight: normal; }\r\n\r\n\r\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside; }\r\nol {\r\n  list-style: decimal inside; }\r\nol, ul {\r\n  padding-left: 0;\r\n  margin-top: 0; }\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%; }\r\nli {\r\n  margin-bottom: 1rem; }\r\n\r\n\r\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: .2rem .5rem;\r\n  margin: 0 .2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #F1F1F1;\r\n  border: 1px solid #E1E1E1;\r\n  border-radius: 4px; }\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre; }\r\n\r\n\r\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #E1E1E1; }\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0; }\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0; }\r\n\r\n\r\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nbutton,\r\n.button {\r\n  margin-bottom: 1rem; }\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem; }\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem; }\r\n\r\n\r\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box; }\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box; }\r\n.u-pull-right {\r\n  float: right; }\r\n.u-pull-left {\r\n  float: left; }\r\n\r\n\r\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #E1E1E1; }\r\n\r\n\r\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both; }\r\n\r\n\r\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\r\n\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map