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

/***/ "../../../../../src/app/alarm-history/alarm-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n    <!-- BEGIN FLEX-ITEM -->\r\n    <div class=\"flex-item\">\r\n      <!-- BEGIN TABLE-CONTAINER  -->\r\n      <div class=\"table-container\">\r\n        <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n          (keyup)='updateFilter($event)' />\r\n        <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n          <!-- BEGIN ALARM COLUMN  -->\r\n          <ngx-datatable-column name=\"Alarm\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END ALARM COLUMN -->\r\n          <!-- BEGIN DETAIL COLUMN  -->\r\n          <ngx-datatable-column name=\"Detail\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END DETAIL COLUMN -->\r\n          <!-- BEGIN TIME COLUMN -->\r\n          <ngx-datatable-column name=\"Time\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END TIME COLUMN -->\r\n          <!-- BEGIN SEVERITY COLUMN -->\r\n          <ngx-datatable-column name=\"Severity\">\r\n            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n              <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n            </ng-template>\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div>{{value}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- END SEVERITY COLUMN -->\r\n        </ngx-datatable>\r\n        <!-- END TABLE -->\r\n      </div>\r\n      <!-- END SEARCH FILTER -->\r\n    </div>\r\n    <!-- END FLEX-ITEM -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER -->\r\n  <!-- BEGIN FLEX-CONTAINER -->\r\n  <div class=\"flex-container\">\r\n    <!-- BEGIN FLEX-FOOTER -->\r\n    <div class=\"flex-fix-padding\" align=\"center\">\r\n      <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" onclick=\"location.href='http://localhost:4200/3'\"\r\n        type=\"button\">Save</button>\r\n    </div>\r\n    <!-- END FLEX-FOOTER -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER -->\r\n  "

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
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








var AlarmHistoryComponent = (function () {
    function AlarmHistoryComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
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
        this.fetchData();
    };
    AlarmHistoryComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getAlarmHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_7_lodash__["each"](data, function (obj) {
                console.log(obj);
                _this.rows.push({ alarm: obj.alarm, detail: obj.detail, time: obj.timestamp, severity: obj.severity });
            });
        });
    };
    AlarmHistoryComponent.prototype.saveData = function () {
        this.ApiService.saveData().then(function (data) {
            console.log(data);
        });
    };
    AlarmHistoryComponent.prototype.clickme = function (row) {
        console.log(row);
    };
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], AlarmHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=alarm-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN TABLE-CONTAINER  -->\r\n    <div class=\"table-container\">\r\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n        (keyup)='updateFilter($event)' />\r\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n        <!-- BEGIN ALARM COLUMN  -->\r\n        <ngx-datatable-column name=\"Alarm\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END ALARM COLUMN -->\r\n        <!-- BEGIN DETAIL COLUMN  -->\r\n        <ngx-datatable-column name=\"Detail\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END DETAIL COLUMN -->\r\n        <!-- BEGIN TIME COLUMN -->\r\n        <ngx-datatable-column name=\"Time\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TIME COLUMN -->\r\n        <!-- BEGIN SEVERITY COLUMN -->\r\n        <ngx-datatable-column name=\"Severity\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END SEVERITY COLUMN -->\r\n      </ngx-datatable>\r\n      <!-- END TABLE -->\r\n    </div>\r\n    <!-- END SEARCH FILTER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" onclick=\"location.href='http://localhost:4200/2'\"\r\n      type=\"button\">Save</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
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









var AlarmComponent = (function () {
    function AlarmComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
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
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'Alarm' },
            { name: 'Detail' },
            { name: 'Time' },
            { name: 'Severity' }
        ];
        this.temp = this.rows;
    }
    AlarmComponent.prototype.ngOnInit = function () {
        this.fetchData();
        //setInterval(this.randomAlert(), this.randomTime());
    };
    // SET ALARM HISTORY DATA
    AlarmComponent.prototype.fetchData = function () {
        // this.currentAlarmTime.setMinutes(this.currentAlarmTime.getMinutes() - 1);
        var _this = this;
        // setInterval(function () {
        // console.log('polling', new Date())
        // let since = this.currentAlarmTime.getTime() / 1000
        this.ApiService.getAlarmHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_7_lodash__["each"](data, function (obj) {
                console.log(obj);
                _this.rows.push({ alarm: obj.alarm, detail: obj.detail, time: obj.timestamp, severity: obj.severity });
            });
        });
        // }, 4000)
        // this.updateSaveUrl(this.currentAlarmTime.getTime())
        // this.randomAlert()
    };
    // SAVE TIME IN .crf FILE
    AlarmComponent.prototype.updateSaveUrl = function (time) {
        console.log('updateSaveUrl', time);
        __WEBPACK_IMPORTED_MODULE_8_jquery__("#save").prop("href", "/2/" + time);
    };
    // CLEAR TABLE
    AlarmComponent.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#alarm').empty();
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], AlarmComponent);

var _a, _b, _c;
//# sourceMappingURL=alarm.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_connection_port_connection_component__ = __webpack_require__("../../../../../src/app/port-connection/port-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__port_history_port_history_component__ = __webpack_require__("../../../../../src/app/port-history/port-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alarm_alarm_component__ = __webpack_require__("../../../../../src/app/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alarm_history_alarm_history_component__ = __webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.ts");
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__port_connection_port_connection_component__["a" /* PortConnectionComponent */]
    },
    {
        path: 'port_history',
        component: __WEBPACK_IMPORTED_MODULE_3__port_history_port_history_component__["a" /* PortHistoryComponent */]
    },
    {
        path: 'alarm',
        component: __WEBPACK_IMPORTED_MODULE_4__alarm_alarm_component__["a" /* AlarmComponent */]
    },
    {
        path: 'alarm_history',
        component: __WEBPACK_IMPORTED_MODULE_5__alarm_history_alarm_history_component__["a" /* AlarmHistoryComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            // IF WANT TO USE #
            // RouterModule.forRoot(appRoutes, { useHash: true }) 
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN CONTAINER -->\r\n<div class=\"main-container\">\r\n  <!-- BEGIN NAV BAR -->\r\n  <md-toolbar class=\"toolbar-container\" color=\"primary\">\r\n    <!-- BEGIN MENU ICON -->\r\n    <div>\r\n      <button type=\"button\" md-button (click)=\"sidenav.toggle()\">\r\n       <md-icon >menu</md-icon>\r\n    </button>\r\n    </div>\r\n    <!-- END MENU ICON -->\r\n    <!-- BEGIN MORE-VERT ICON -->\r\n    <div class=\"warpper-right\">\r\n      <button md-button class=\"div-icon\" [mdMenuTriggerFor]=\"menu\">\r\n      <md-icon >more_vert</md-icon>\r\n   </button>\r\n      <!-- BEGIN MENU-LIST -->\r\n      <md-menu #menu=\"mdMenu\">\r\n        <!-- BEGIN NOTIFICATION ICON -->\r\n        <button md-menu-item>\r\n        <md-icon>notifications_off</md-icon>\r\n        <span>Disable alerts</span>\r\n        <!-- END NOTIFICATION ICON -->\r\n      </button>\r\n        <!-- END MENU-LIST -->\r\n      </md-menu>\r\n    </div>\r\n    <!-- END MORE-VERT ICON -->\r\n  </md-toolbar>\r\n  <!-- END NAV BAR -->\r\n  <!-- BEGIN SIDE NAV -->\r\n  <md-sidenav-container class=\"example-sidenav-fab-container\">\r\n    <md-sidenav #sidenav mode=\"side\" opened=\"false\">\r\n      <!-- BEGIN EXAMPLE-SCROLLING-CONTENT -->\r\n      <div class=\"example-scrolling-content\">\r\n        <header class=\"user-container\">\r\n          <!-- BEGIN AVATAR -->\r\n          <div class=\"avatar-container\">\r\n            <img src=\"../assets/user.jpg\" alt=\"Avatar\" class=\"avatar\">\r\n          </div>\r\n          <!-- END AVATAR -->\r\n          <!-- BEGIN NAME-AVATAR-CONTAINER -->\r\n          <div class=\"name-avatar-container\">\r\n            <p>Aya Stark</p>\r\n          </div>\r\n          <!-- END NAME-AVATAR-CONTAINER -->\r\n          <!-- BEGIN DROPDOWN MENU -->\r\n          <div class=\"user-dropdown-menu\">\r\n            <span>aya.stark@xenoptics.com</span>\r\n            <div class=\"mdl-layout-spacer\"></div>\r\n            <button md-button class=\"div-icon\" [mdMenuTriggerFor]=\"menudrop\">\r\n              <md-icon >arrow_drop_down</md-icon>\r\n           </button>\r\n            <md-menu #menudrop=\"mdMenu\">\r\n              <button md-menu-item>\r\n                <md-icon>add</md-icon>\r\n                <span>Add another account...</span>\r\n              </button>\r\n              <button md-menu-item>\r\n                <md-icon>remove</md-icon>\r\n                <span>Logout</span>\r\n              </button>\r\n            </md-menu>\r\n          </div>\r\n          <!-- END DROPDOWN MENU -->\r\n        </header>\r\n        <md-list>\r\n          <!-- <h3 md-subheader>\r\n            <md-icon>home</md-icon> XENO\r\n          </h3> -->\r\n          <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of links\">\r\n            <md-list-item>\r\n              <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n              <h4 md-line>{{ link.name }}</h4>\r\n            </md-list-item>\r\n          </a>\r\n        </md-list>\r\n        <!-- BEGIN Horizontal Rules  -->\r\n        <hr>\r\n        <!-- END Horizontal Rules  -->\r\n        <!-- BEGIN SETTINGS LABEL -->\r\n        <div class=\"settings\">\r\n          <a>Settings</a>\r\n        </div>\r\n        <!-- END SETTINGS LABEL -->\r\n        <!-- BEGIN DOCUMENT LABEL -->\r\n        <div class=\"document\">\r\n          <a>Document</a>\r\n        </div>\r\n        <!-- END DOCUMENT LABEL -->\r\n        <!-- BEGIN FOOTER-CONTAINER -->\r\n        <div class=\"footer-container\">\r\n          <hr>\r\n          <div class=\"text-center\">\r\n            <span>Help & Feedback</span>\r\n          </div>\r\n          <!-- END FOOTER-CONTAINER -->\r\n        </div>\r\n        <!-- END EXAMPLE-SCROLLING-CONTENT -->\r\n      </div>\r\n      <!-- END SIDE NAV -->\r\n    </md-sidenav>\r\n    <!-- BEGIN ROUTER-OUTLET -->\r\n    <div class=\"example-scrolling-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- END ROUTER-OUTLET -->\r\n  </md-sidenav-container>\r\n  <!-- END SIDE NAV -->\r\n</div>\r\n<!-- END MAIN CONTAINER -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: default; }\n\nspan {\n  cursor: default; }\n\np {\n  cursor: default; }\n\nhr {\n  border: 0;\n  height: 0;\n  border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.sidenav-container {\n  width: 100vh;\n  height: 100vh; }\n\n.example-sidenav-fab-container {\n  width: 100%;\n  height: 90vh;\n  background-color: transparent; }\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.example-scrolling-content {\n  overflow: auto; }\n\n.mat-list .mat-subheader {\n  margin: 24px 0;\n  text-align: center;\n  font-size: 24px; }\n\n.mat-list md-icon {\n  opacity: 0.25; }\n\n:host /deep/ md-list-item.mat-list-item .mat-list-item-content {\n  margin: 12px 24px;\n  border-radius: 5px; }\n\n:host /deep/ .active .mat-list-item-content {\n  color: white;\n  background-color: #D61515;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n\n:host /deep/ a {\n  text-decoration: none; }\n  :host /deep/ a:not(.active):hover .mat-list-item-content {\n    background-color: rgba(0, 0, 0, 0.15);\n    color: blue;\n    cursor: pointer; }\n\n:host /deep/ a:focus {\n  outline: none !important; }\n\n:host /deep/ md-toolbar {\n  min-height: 42px;\n  max-height: 42px; }\n  :host /deep/ md-toolbar md-toolbar-row {\n    min-height: 40.5px;\n    max-height: 40.5px; }\n\n.mat-sidenav {\n  height: 90%; }\n\n.main-container {\n  padding: 0;\n  margin: 0; }\n\n.div-icon {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 0;\n  min-width: 32px;\n  width: 32px;\n  padding: 0;\n  overflow: hidden;\n  color: inherit;\n  line-height: normal; }\n\n.mat-icon {\n  height: 27px; }\n\n.warpper-right {\n  margin-left: auto;\n  margin-right: 0; }\n\n.toolbar-container {\n  display: block;\n  padding: 0 10px; }\n\n.user-container {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex-pack: end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 16px;\n  height: 155px;\n  background: #303F9F; }\n\n.avatar {\n  width: 55px;\n  height: 55px;\n  border-radius: 30px; }\n\n.name-avatar-container {\n  padding-bottom: 0;\n  font-weight: bold;\n  color: white; }\n\n.avatar-container {\n  padding-bottom: 0; }\n\n.user-dropdown-menu {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  color: white;\n  font-size: 13px; }\n\n.mdl-layout-spacer {\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.footer-container {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 10px; }\n  .footer-container .text-center {\n    text-align: center;\n    font-size: 14px; }\n    .footer-container .text-center span {\n      cursor: pointer; }\n    .footer-container .text-center span:hover {\n      color: #3F51B5; }\n  .footer-container .text-left {\n    text-align: left; }\n  .footer-container .icon-opacity {\n    opacity: 0.25;\n    cursor: pointer; }\n\n.settings {\n  padding: 10px 10px; }\n  .settings a {\n    cursor: pointer; }\n  .settings a:hover {\n    color: #3F51B5; }\n\n.document {\n  padding: 10px 10px; }\n  .document a {\n    cursor: pointer; }\n  .document a:hover {\n    color: #3F51B5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.links = [
            {
                icon: 'settings_input_component',
                name: 'Port Connection',
                path: '/'
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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__port_connection_port_connection_component__ = __webpack_require__("../../../../../src/app/port-connection/port-connection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__port_history_port_history_component__ = __webpack_require__("../../../../../src/app/port-history/port-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alarm_alarm_component__ = __webpack_require__("../../../../../src/app/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__alarm_history_alarm_history_component__ = __webpack_require__("../../../../../src/app/alarm-history/alarm-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__port_pipe__ = __webpack_require__("../../../../../src/app/port.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Component









// Services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__side_nav_side_nav_component__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__port_connection_port_connection_component__["a" /* PortConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__port_history_port_history_component__["a" /* PortHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__alarm_alarm_component__["a" /* AlarmComponent */],
            __WEBPACK_IMPORTED_MODULE_15__alarm_history_alarm_history_component__["a" /* AlarmHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_16__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__port_pipe__["a" /* PortPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ฺBEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN EASTPORT-TABLE-CONTAINER -->\r\n    <table class=\"table-container\">\r\n      <tbody>\r\n        <tr class=\"tr-style\" *ngFor=\"let row of eportschunk\">\r\n          <td id=\"{{ column }}\" class=\"East td-style\" [ngClass]=\"[isSelectEast(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipEast(column)\" mdTooltipPosition=\"above\">\r\n              <span mdTooltip=\"some note\" [mdTooltipPosition]=\"etooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- <md-input-container>\r\n      <input mdInput placeholder=\"Stops :\" value=\"stops\" [(ngModel)]=\"stops\">\r\n    </md-input-container> -->\r\n    <!-- END EASTPORT-TABLE-CONTAINER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN WESTPORT-TABLE-CONTAINER -->\r\n    <table class=\"table-container\">\r\n      <tbody>\r\n        <tr class=\"tr-style\" *ngFor=\"let row of wportschunk\">\r\n          <td id=\"{{ column }}\" class=\"West td-style\" [ngClass]=\"[isSelectWest(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipWest(column)\" mdTooltipPosition=\"above\">\r\n              <span mdTooltip=\"some note\" [mdTooltipPosition]=\"wtooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- END WESTPORT-TABLE-CONTAINER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-footer\" align=\"center\">\r\n    <!-- BEGIN INPUT -->\r\n    <md-input-container>\r\n      <input mdInput id=\"stops\" placeholder=\"Stops :\" value=\"stops\" [(ngModel)]=\"stops\" [ngClass]=\"clearValue(stops)\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput id=\"sequence\" placeholder=\"Sequence :\" value=\"sequence\" [(ngModel)]=\"sequence\">\r\n    </md-input-container>\r\n    <!-- END INPUT -->\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-footer\" align=\"center\">\r\n    <button md-button class=\"connected\" disabled>Connected</button>\r\n    <button md-button class=\"break\" disabled>Break</button>\r\n    <button md-button class=\"pending\" disabled>Pending</button>\r\n    <button md-button class=\"pair\" disabled>Pair</button>\r\n    <button md-button class=\"selected\" disabled>Selected</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"Continue\" class=\"button-width\" (click)=\"postDebug()\" color=\"primary\" disabled>Continue</button>\r\n    <button md-raised-button id=\"Connect\" class=\"button-width\" (click)=\"postConnection()\" color=\"primary\" disabled>Connect</button>\r\n    <button md-raised-button id=\"Disconnect\" class=\"button-width\" (click)=\"postDisconnection()\" color=\"primary\" disabled>Disconnect</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .flex-footer {\n    padding-top: 15px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .flex-container .flex-footer .button-width {\n      min-width: 110px; }\n    .flex-container .flex-footer .connected {\n      background: #00C853;\n      cursor: default;\n      color: white; }\n    .flex-container .flex-footer .break {\n      background: #FBC02D;\n      cursor: default;\n      color: white; }\n    .flex-container .flex-footer .pending {\n      background: #D61515;\n      cursor: default;\n      color: white; }\n    .flex-container .flex-footer .pair {\n      background: #3f51b5;\n      cursor: default;\n      color: white; }\n    .flex-container .flex-footer .selected {\n      background: #555555;\n      cursor: default;\n      color: white; }\n    .flex-container .flex-footer .selected-pair {\n      background: #555555;\n      cursor: default;\n      color: white; }\n  .flex-container .flex-fix-padding {\n    padding: 10px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .table-container {\n    margin: 15px auto 0 auto;\n    box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.12), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.12); }\n  .flex-container .td-style {\n    padding: 4px;\n    border: 1px solid rgba(85, 85, 85, 0.2);\n    text-align: center;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 16px; }\n  .flex-container .selected {\n    color: white !important;\n    background: #555555 !important; }\n  .flex-container .connected {\n    color: white !important;\n    background: #00C853 !important; }\n  .flex-container .pending {\n    color: white !important;\n    background: #D61515 !important; }\n  .flex-container .break {\n    color: white !important;\n    background: #FBC02D !important; }\n  .flex-container .pair {\n    color: white !important;\n    background: #3f51b5 !important; }\n  .flex-container .selected-pair {\n    background: #555555 !important;\n    cursor: default;\n    color: white; }\n  .flex-container .current-selected {\n    border-style: solid;\n    border-width: 2px;\n    border-color: orange;\n    font-weight: 500; }\n  .flex-container .unselectable {\n    color: #9E9E9E;\n    background: #E0E0E0;\n    pointer-events: none; }\n  .flex-container td:hover {\n    cursor: pointer;\n    background-color: rgba(85, 85, 85, 0.15); }\n\nbutton {\n  min-width: 110px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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





var PortConnectionComponent = (function () {
    function PortConnectionComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
        this.eports = []; // 144 EAST PORTS
        this.wports = []; // 144 WEST PORTS
        this.eportschunk = []; // 144 to [12,12,...]
        this.wportschunk = []; // 144 to [12,12,...]
        this.selectedEastPortID = ''; // CURRENT SELECTED EAST PORT
        this.selectedWestPortID = ''; // CURRENT SELECTED WEST PORT
        this.stops = JSON.parse(localStorage.getItem('stops')); // CURRENT STOPS POINT ROBOT IN DEBUG MODE
        this.connectedPair = []; // CONNECTED PAIR {east, west, status}
        this.eValue = 1; // VALUE OF EPORT
        this.wValue = 1; // VALUE OF WPORT
        this.pair = []; // PAIR OF CONNECTED PORT {[east, west]}
        this.availableEastPort = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
        this.availableWestPort = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
    }
    PortConnectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // FETCH DATA
        this.fetchData();
        // SET COLOR OF PORT CONNECTION
        this.setConnectedPort();
        // CHECK STATUS EVERY 5 SEC.
        this.timerInterval = setInterval(function () {
            _this.checkStatus();
        }, 5000);
        // OLD VERSION
        // setInterval(() => {
        //   this.checkStatus();
        // }, 5000);
        // setInterval(() => {
        //   this.test();
        // });
    };
    PortConnectionComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval); // CLEAR INTERVAL
    };
    // FETCH DATA
    PortConnectionComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getAllPort().then(function (data) {
            _this.eports = data.eports;
            _this.eportschunk = data.eportschunk;
            _this.wports = data.wports;
            _this.wportschunk = data.wportschunk;
        });
    };
    // CHECK CURRENT ROBOT STATUS
    PortConnectionComponent.prototype.checkStatus = function () {
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
            if (_this.status === 'success') {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('unselectable'); // UNLOCK TABLE WHEN CURRENT STATUS IS SUCCESS
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').removeAttr('disabled'); // UNLOCK STOPS INPUT WHEN CURRENT STATUS IS SUCCESS
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT
                // WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
            }
            else if (_this.status === 'break' || _this.status === 'pending' || _this.status === 'started') {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').addClass('unselectable'); // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled'); // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT
            }
        });
    };
    // CHECK CURRENT SELECTED FOR ADD RED BORDER
    PortConnectionComponent.prototype.checkCurrentSelected = function () {
        var east = this.selectedEastPortID;
        var west = this.selectedWestPortID;
        if (((east && west) !== '') && (!__WEBPACK_IMPORTED_MODULE_3_jquery__('#' + east).hasClass('selected') || (!__WEBPACK_IMPORTED_MODULE_3_jquery__('#' + west).hasClass('selected')))) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('current-selected');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + east).addClass('current-selected');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + west).addClass('current-selected');
        }
    };
    // GET EASTPORT ID ON CLICK
    PortConnectionComponent.prototype.setEastID = function (eastID) {
        this.selectedEastPortID = eastID; // SET EASTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED EAST PORT
        localStorage.setItem('selectedEastPortID', JSON.stringify(eastID)); // SET LOCALSTORAGE VALUE OF selectedEastPortID
        console.log('Current East Port :', this.selectedEastPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__('#' + eastID).hasClass('connected')) {
            this.eValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('selected pair selected-pair');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
            this.eastPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            this.eValue = 0;
            this.availableEastPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('pair selected-pair');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
        }
    };
    // GET WESTPORT ID ON CLICK
    PortConnectionComponent.prototype.setWestID = function (westID) {
        this.selectedWestPortID = westID; // SET WESTPORT ID
        this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED WEST PORT
        localStorage.setItem('selectedWestPortID', JSON.stringify(westID)); // SET LOCALSTORAGE VALUE OF selectedWestPortID
        console.log('Current West Port :', this.selectedWestPortID);
        // WHEN CLICK ON CONNECTED PORT
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__('#' + westID).hasClass('connected')) {
            this.wValue = 1;
            this.unlockButton(this.eValue, this.wValue, this.status);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('selected pair selected-pair');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
            this.westPair();
            this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
            // WHEN NOT CLICK ON CONNECTED PORT
        }
        else {
            this.wValue = 0;
            this.availableWestPort = true;
            this.unlockConnection(this.availableEastPort, this.availableWestPort);
            this.unlockButton(this.eValue, this.wValue, this.status);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('pair selected-pair');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
        }
    };
    // UNLOCK CONNECT BUTTON
    PortConnectionComponent.prototype.unlockConnection = function (availableEastPort, availableWestPort) {
        // IF TWO AVAILABLE PORTS ARE SELECTED
        if ((availableEastPort && availableWestPort) === true) {
            console.log('You are select available port!');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect').removeAttr('disabled');
            // IF TWO AVAILABLE PORTS ARE NOT SELECTED
        }
        else if ((availableEastPort && availableWestPort) === false) {
            console.log('You are not select available port!');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect').attr('disabled disabled');
        }
    };
    // SHOW HIS PAIR WHEN CLICK EAST PORT
    PortConnectionComponent.prototype.eastPair = function () {
        // QUERY VALUE IN PAIR AND WHEN CLICK SHOW IT'S PAIR
        for (var i in this.pair) {
            // IF SELECT CORRECT PAIR UNLOCK DISCONNECT BUTTON
            if (this.pair[i][0] === this.selectedWestPortID && i === this.selectedEastPortID) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('selected-pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + this.pair[i][0]).addClass('selected-pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').removeAttr('disabled');
                // SHOW IT'S PAIR WHEN CLICK EAST PORT
            }
            else if (i === this.selectedEastPortID) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + this.pair[i][0]).addClass('pair');
            }
        }
    };
    // SHOW HIS PAIR WHEN CLICK WEST PORT
    PortConnectionComponent.prototype.westPair = function () {
        // QUERY VALUE IN PAIR AND WHEN CLICK SHOW IT'S PAIR
        for (var i in this.pair) {
            // IF SELECT CORRECT PAIR UNLOCK DISCONNECT BUTTON
            if (this.pair[i][0] === this.selectedWestPortID && i === this.selectedEastPortID) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('selected-pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + this.pair[i][0]).addClass('selected-pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').removeAttr('disabled');
                // SHOW IT'S PAIR WHEN CLICK EAST PORT
            }
            else if (this.pair[i][0] === this.selectedWestPortID) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('pair');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + this.pair[i][0]).addClass('pair');
            }
        }
    };
    // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
    PortConnectionComponent.prototype.unlockButton = function (eValue, wValue, status) {
        var sumValue; // SUM OF wValue & eValue
        sumValue = eValue + wValue;
        /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
         UNLOCK CONNECT BUTTON
         LOCK CONTINUE */
        if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').removeAttr('disabled');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Continue').attr('disabled', 'disabled');
            console.log('UNLOCK CONNECT BUTTON | STATUS: ', status);
            // SUM = 1 LOCK ALL BUTTONS
        }
        else if (sumValue === 1) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect, #Disconnect, #Continue').attr('disabled', 'disabled');
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS');
            // STATUS = STARTED OR STATUS = PENDING OR STATUS = UNDEFINED
        }
        else if (status === 'started' || status === 'pending' || status === undefined) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect, #Disconnect, #Continue').attr('disabled', 'disabled');
            console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS | STATUS: ', status);
            // STATUS = BREAK
        }
        else if (status === 'break' && this.sequence !== null && this.sequence !== undefined) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Continue').removeAttr('disabled');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect, #Disconnect').attr('disabled', 'disabled');
            console.log('LOCK CONNECT & DISCONNECT | STATUS: ', status);
        }
    };
    // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionComponent.prototype.isSelectEast = function (Eport) {
        var classString = '';
        // TO DO
        // return (this.selectedEastPortID === Eport) ? 'selected' : '';
        if (this.selectedEastPortID === Eport) {
            classString = 'selected';
        }
        else {
            classString = '';
        }
        return classString;
    };
    // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
    PortConnectionComponent.prototype.isSelectWest = function (Wport) {
        var classString = '';
        // TO DO
        // return (this.selectedEastPortID === Eport) ? 'selected' : '';
        if (this.selectedWestPortID === Wport) {
            classString = 'selected';
        }
        else {
            classString = '';
        }
        return classString;
    };
    // POST CONNECTION
    PortConnectionComponent.prototype.postConnection = function () {
        // LOCK TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').addClass('unselectable');
        // LOCK STOPS INPUT AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
        // LOCK CONNECT BUTTON AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect').attr('disabled', 'disabled');
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('selected pair selected-pair');
        // PAYLOAD { east, west, action, stops }
        if (this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect', this.stops);
            // LOCK STOPS INPUT
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
            // LOCK CONTINUE BUTTON AFTER POST
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect').attr('disabled', 'disabled');
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect');
            // LOCK CONTINUE BUTTON AFTER POST
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Connect').attr('disabled', 'disabled');
        }
    };
    // POST DISCONNECTION
    PortConnectionComponent.prototype.postDisconnection = function () {
        // LOCK TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').addClass('unselectable');
        // LOCK STOPS INPUT AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
        // LOCK DISCONNECT BUTTON AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('selected pair selected-pair');
        // PAYLOAD { east, west, action, stops }
        if (this.stops) {
            // SET LOCALSTORAGE VALUE OF stops
            localStorage.setItem('stops', JSON.stringify(this.stops));
            // POST DATA
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect', this.stops);
            // LOCK STOPS INPUT
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
            // LOCK DISCONTINUE BUTTON AFTER POST
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
            // PAYLOAD { east, west, action }
        }
        else {
            this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect');
            // LOCK DISCONTINUE BUTTON AFTER POST
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Disconnect').attr('disabled', 'disabled');
        }
    };
    // POST DEBUG
    PortConnectionComponent.prototype.postDebug = function () {
        // LOCK TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').addClass('unselectable');
        // LOCK CONTINUE BUTTON AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#Continue').attr('disabled', 'disabled');
        // LOCK STOPS INPUT AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
        // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('selected pair selected-pair');
        //  PAYLOAD { east, west, action, stops, number }
        if (this.stops && this.sequence) {
            // GET LOCALSTORAGE VALUE OF stops
            var stops = localStorage.getItem('stops');
            // GET LOCALSTORAGE VALUE OF selectedEastPortID
            var selectedEastPortID = localStorage.getItem('selectedEastPortID');
            // GET LOCALSTORAGE VALUE OF selectedWestPortID
            var selectedWestPortID = localStorage.getItem('selectedWestPortID');
            // POST DATA
            this.ApiService.connectPort(JSON.parse(selectedEastPortID).substring(1), JSON.parse(selectedWestPortID).substring(1), this.action, JSON.parse(stops), this.sequence);
            // LOCK CONTINUE BUTTON AFTER POST
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#Continue').attr('disabled', 'disabled');
            // STOPS AND SEQUNCE ARE UNDEFINED OR NULL
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops').attr('disabled', 'disabled');
            // NO stops, sequence VALUE IN PAYLOAD
        }
        else {
            console.log('No stops or sequence value !');
        }
    };
    // SET COLOR OF PORT CONNECTION
    PortConnectionComponent.prototype.setConnectedPort = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT
        this.ApiService.getConnectedPort().then(function (data) {
            var connected_port = data;
            _this.pair = data;
            // var no_data = true; // VARIABLE FOR CHECK WHEN NO DATA IN TABLE
            console.log('ALL PORT CONNECTION :', data);
            // LOCAL STORAGE VARIABLE
            var selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
            var selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));
            // CHECK IF CURRENT SELECTED PORT HAVE CONNECTED ON CLICK
            // LOCK CONNECTION BUTTON
            // for (let i in data) {
            //   if (this.selectedEastPortID === i || this.selectedWestPortID === data[i][0]) {
            //     $('#Connect').attr('disabled', 'disabled');
            //     no_data = false;
            //   }
            // }
            // QUERY REMOVE ALL COLOR IN TABLE
            // NEED TO IMPROVE !
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.East, .West').removeClass('connected pending break');
            // $("TE" + i).attr('data-original-title', '')
            // $("TW" + i).attr('data-original-title', '')
            // NO CONECTED PORT AT ALL
            // if (no_data) {
            //   $('#stops').removeAttr('disabled'); // UNLOCK STOPS INPUT WHEN STATUS SUCCESS
            //   $('.East, .West').removeClass('unselectable'); // UNLOCK TABLE WHEN STATUS SUCCESS
            //   $('.East, .West').removeClass('break'); // REMOVE BREAK COLOR IN TABLE
            // }
            console.log('------------------------------- All Port Status -------------------------------');
            for (var i in connected_port) {
                // IF STATUS IS SUCCESS
                if (connected_port[i][1] === 'success') {
                    // $('#' + selectedEastPortID).removeClass('break'); // REMOVE CLASS 'BREAK' FROM LAST PORT VALUE
                    // $('#' + selectedWestPortID).removeClass('break'); // REMOVE CLASS 'BREAK' FROM LAST PORT VALUE
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('connected'); // ADD GREEN COLOR
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + connected_port[i]).addClass('connected'); // ADD GREEN COLOR
                    console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
                    // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR
                    // IF STATUS IS STARTED OR PENDING
                }
                else if (connected_port[i][1] === 'started' || connected_port[i][1] === 'pending') {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('pending'); // ADD RED COLOR
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + connected_port[i]).addClass('pending'); // ADD RED COLOR
                    console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
                    // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR
                    // IF STATUS IS BREAK
                }
                else if (connected_port[i][1] === 'break') {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + i).addClass('break'); // ADD YELLOW COLOR
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + connected_port[i][0]).addClass('break'); // ADD YELLOW COLOR
                    console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
                    // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR
                }
            }
            console.log('-------------------------------------------------------------------------------');
        });
    };
    // CLEAR LOCAL STORAGE STOPS VALUE
    PortConnectionComponent.prototype.clearValue = function (stops) {
        if (stops === undefined || stops === null || stops === '') {
            stops = null;
            localStorage.setItem('stops', JSON.stringify(stops));
        }
    };
    // TEST CONSOLE.LOG LOCAL STORAGE VALUE
    PortConnectionComponent.prototype.clear = function () {
        var selectedEastPortID = localStorage.getItem('selectedEastPortID');
        var selectedWestPortID = localStorage.getItem('selectedWestPortID');
        console.log(selectedEastPortID, selectedWestPortID, this.stops);
    };
    // PUSH CONNECTED PORT OF EAST TO EAST TOOLTIP
    PortConnectionComponent.prototype.tooltipEast = function (eastID) {
        for (var i in this.pair) {
            if (eastID == i) {
                return 'Connected to ' + this.pair[i][0];
            }
        }
    };
    // PUSH CONNECTED PORT OF WEST TO WEST TOOLTIP
    PortConnectionComponent.prototype.tooltipWest = function (WestID) {
        for (var i in this.pair) {
            if (WestID == this.pair[i][0]) {
                return 'Connected to ' + i;
            }
        }
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionComponent.prototype.etooltipPostion = function (EastID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = RIGHT
        for (var i in this.pair) {
            if (EastID === i) {
                return 'right';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
    };
    // CHANGE POSITION OF SECOND TOOLTIP
    PortConnectionComponent.prototype.wtooltipPostion = function (WestID) {
        // IF CONNECTED PORT RETURN TOOLTIP POSTION = LEFT
        for (var i in this.pair) {
            if (WestID === this.pair[i][0]) {
                return 'left';
            }
        }
        // ELSE RETURN TOOLTIP POSTION = ABOVE
        return 'above';
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], PortConnectionComponent);

var _a, _b;
//# sourceMappingURL=port-connection.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN TABLE-CONTAINER  -->\r\n    <div class=\"table-container\">\r\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n        (keyup)='updateFilter($event)' />\r\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n        <!-- BEGIN DATE COLUMN  -->\r\n        <ngx-datatable-column name=\"Date\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END DATE COLUMN -->\r\n        <!-- BEGIN TIME COLUMN  -->\r\n        <ngx-datatable-column name=\"Time\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TIME COLUMN -->\r\n        <!-- BEGIN TYPE COLUMN -->\r\n        <ngx-datatable-column name=\"Type\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TYPE COLUMN -->\r\n        <!-- BEGIN STATUS COLUMN -->\r\n        <ngx-datatable-column name=\"Status\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END STATUS COLUMN -->\r\n        <!-- BEGIN EAST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"East\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END EAST PORT COLUMN -->\r\n        <!-- BEGIN WEST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"West\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END WEST PORT COLUMN -->\r\n        <!-- BEGIN SEVERITY COLUMN -->\r\n        <ngx-datatable-column name=\"RobotStatus\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div *ngIf=\"value.status !== 'Pending'\">{{value.status}}</div>\r\n            <div class=\"flex-container\">\r\n            <button md-raised-button id=\"Continue\" class=\"button-width button-red\" color=\"primary\" *ngIf=\"value.status == 'Pending'\" (click)=\"pending(value.id)\">Continue</button>\r\n            <button md-raised-button id=\"Continue\" class=\"button-width\" color=\"primary\" *ngIf=\"value.status == 'Pending'\" (click)=\"pending(value.id)\">Cancel</button>\r\n          </div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END SEVERITY COLUMN -->\r\n      </ngx-datatable>\r\n      <!-- END TABLE -->\r\n    </div>\r\n    <!-- END SEARCH FILTER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" onclick=\"location.href='http://localhost:4200/1'\" type=\"button\">Save</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .flex-container .flex-item {\n    padding: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: default; }\n  .flex-container .button-width {\n    min-width: 90px;\n    margin-right: 5px; }\n  .flex-container .button-red {\n    background: red;\n    color: white; }\n  .flex-container .flex-fix-padding {\n    padding: 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .flex-container .red {\n    color: red; }\n  .flex-container .orange {\n    color: orange; }\n  .flex-container .blue {\n    color: blue; }\n  .flex-container .green {\n    color: #00C853; }\n  .flex-container .shadow {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.table-container {\n  background-color: transparent; }\n  .table-container input.fliter {\n    margin-left: 10px !important;\n    outline: none;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    transition: border-color 0.05s ease-in-out;\n    box-shadow: 0 10px 6px -6px #777; }\n    .table-container input.fliter:focus {\n      border-color: #1985A1; }\n\n:host /deep/ ngx-datatable {\n  background: #fff !important;\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n:host /deep/ datatable-header {\n  font-weight: 600; }\n  :host /deep/ datatable-header:hover span {\n    cursor: pointer; }\n  :host /deep/ datatable-header datatable-header-cell {\n    width: 100%;\n    text-align: center !important; }\n\n:host /deep/ datatable-body-cell {\n  text-align: center !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_datatable_src_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/src/components/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
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








var PortHistoryComponent = (function () {
    function PortHistoryComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.columns = [
            { name: 'Date' },
            { name: 'Time' },
            { name: 'Type' },
            { prop: 'East' },
            { name: 'West' },
            { name: 'Status' },
            { name: 'RobotStatus' }
        ];
        this.temp = this.rows;
    }
    PortHistoryComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    // SET DATA TABLE
    PortHistoryComponent.prototype.fetchData = function () {
        var _this = this;
        this.ApiService.getConnectionHistory().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_7_lodash__["each"](data, function (obj) {
                console.log(obj);
                var date = new Date(obj.timestamp);
                var day = date.toString().substring(0, 15);
                var time = date.toString().substring(15);
                var status = obj.status.charAt(0).toUpperCase() + obj.status.slice(1);
                // IF SWITCHTING_TYPE IS CONNECT
                if (obj.switching_type === 'C') {
                    _this.rows.push({
                        date: day, time: time, east: 'E' + obj.east, west: 'W' + obj.west, status: 'Connected', robotStatus: { 'status': status, 'id': obj.id }
                    });
                    // IF SWITCHING_TYPE IS DISCONNECT
                }
                else {
                    _this.rows.push({
                        date: day, time: time, east: 'E' + obj.east, west: 'W' + obj.west, status: 'Disconnected', robotStatus: { 'status': status, 'id': obj.id }
                    });
                }
            });
        });
    };
    // SAVE DATA TO FILES
    PortHistoryComponent.prototype.saveData = function () {
        this.ApiService.saveData().then(function (data) {
            console.log(data);
        });
    };
    PortHistoryComponent.prototype.pending = function (row) {
        console.log(row);
    };
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
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

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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



var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.ROOT_URL = "http://127.0.0.1:8000/";
    }
    // GET ALLPORT FROM API AND SEPERATE INTO TWO DIRECTION 'E' AND 'W'
    ApiService.prototype.getAllPort = function () {
        var eports = []; // 144 EAST PORTS
        var wports = []; // 144 WEST PORTS
        var eportschunk = []; // 144 to [12,12,...]
        var wportschunk = []; // 144 to [12,12,...]
        var allPort = []; // ALL PORTS, 288 PORTS
        return this.http.get(this.ROOT_URL + 'ports/').toPromise().then(function (response) {
            allPort = JSON.parse(response._body);
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](allPort, function (obj) {
                // SEPERATE BY DIRECTION 'E'
                if (obj.direction === 'E') {
                    eports.push(obj.direction + obj.number);
                    eportschunk = __WEBPACK_IMPORTED_MODULE_2_lodash__["chunk"](eports, 12);
                    // SEPERATE BY DIRECTION 'W'
                }
                else if (obj.direction === 'W') {
                    wports.push(obj.direction + obj.number);
                    wportschunk = __WEBPACK_IMPORTED_MODULE_2_lodash__["chunk"](wports, 12);
                }
            });
            return ({ allPort: allPort, eports: eports, wports: wports, eportschunk: eportschunk, wportschunk: wportschunk });
        });
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
        if (stops && number === undefined) {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, stops: stops }, this.options).toPromise().then(function (response) {
                console.log(response._body);
                return response;
            }).catch(function () {
                console.log('error');
            });
            // DEBUG MODE
            // PAYLOAD { east, west, action, stops, number }
        }
        else if (stops && number) {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, stops: stops, number: number }, this.options).toPromise().then(function (response) {
                console.log(response._body);
                return response;
            }).catch(function () {
                console.log('error');
            });
            // NORMAL MODE
            // PAYLOAD { east, west, action }
        }
        else {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action }, this.options).toPromise().then(function (response) {
                console.log(response._body);
                return response;
            }).catch(function (e) {
                console.log(e);
                console.log('error');
            });
        }
    };
    // CHECK STATUS FROM CURRENT TASK
    ApiService.prototype.checkStatus = function () {
        var status; // CURRENT STATUS
        var sequence; // CURRENT SEQUENCE
        var action; // CURRENT ACTION
        return this.http.get(this.ROOT_URL + 'checktask/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](response, function (obj) {
                status = obj.status;
                sequence = obj.sequence;
                action = obj.action;
            });
            return ({ status: status, sequence: sequence, action: action });
        });
    };
    // CHECK CONNECTION STATUS ALL PORT
    ApiService.prototype.getConnectedPort = function () {
        return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return (response);
        });
    };
    // GET CONNECTION HISTORYS
    ApiService.prototype.getConnectionHistory = function () {
        return this.http.get(this.ROOT_URL + 'connectionhistorys/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return (response);
        });
    };
    // GET ALARM HISTORY
    ApiService.prototype.getAlarmHistory = function () {
        return this.http.get(this.ROOT_URL + 'alarms/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return (response);
        });
    };
    // POST ALARM
    ApiService.prototype.postAlarm = function (alarm, detail, severity) {
        return this.http.post(this.ROOT_URL + 'alarms/', { alarm: alarm, detail: detail, severity: severity }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.log('error');
        });
    };
    // POST PENDING TASK
    ApiService.prototype.pendingTask = function (id) {
        return this.http.post(this.ROOT_URL + 'pendingtask/', { id: id }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.log('error');
        });
    };
    // SAVE CRF FILES
    ApiService.prototype.saveData = function () {
        return this.http.get(this.ROOT_URL + '3').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return (response);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map