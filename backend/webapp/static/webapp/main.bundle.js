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
                _this.rows.push({ alarm: obj['alarm'], detail: obj['detail'], time: obj['timestamp'], severity: obj['severity'] });
            });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
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
        this.fetchData();
        // setInterval(this.randomAlert(), this.randomTime());
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
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#save').prop('href', '/2/' + time);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testing_mode_testing_mode_component__ = __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__port_connection_mobile_port_connection_mobile_component__ = __webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.ts");
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
    },
    {
        path: 'testing_mode',
        component: __WEBPACK_IMPORTED_MODULE_6__testing_mode_testing_mode_component__["a" /* TestingModeComponent */]
    },
    {
        path: 'port_connection_mobile',
        component: __WEBPACK_IMPORTED_MODULE_7__port_connection_mobile_port_connection_mobile_component__["a" /* PortConnectionMobileComponent */]
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

module.exports = "<!-- BEGIN MAIN CONTAINER -->\r\n<div class=\"main-container\">\r\n  <!-- BEGIN SIDENAV-FAB-CONTAINER -->\r\n  <md-sidenav-container class=\"sidenav-fab-container\">\r\n    <!-- BEGIN NAV BAR -->\r\n    <md-toolbar class=\"toolbar-container\" color=\"primary\">\r\n      <!-- BEGIN MENU ICON -->\r\n      <div>\r\n        <button type=\"button\" md-button class=\"div-icon-menu\" (click)=\"sidenav.toggle()\">\r\n           <md-icon >menu</md-icon>\r\n        </button>\r\n      </div>\r\n      <!-- END MENU ICON -->\r\n      <!-- BEGIN MORE-VERT ICON -->\r\n      <div class=\"warpper-right\">\r\n        <button md-icon-button>\r\n          <md-icon>mail</md-icon>\r\n        </button>\r\n        <button md-icon-button>\r\n          <md-icon>notifications</md-icon>\r\n        </button>\r\n        <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n          <md-icon >more_vert</md-icon>\r\n       </button>\r\n        <!-- BEGIN MENU-LIST -->\r\n        <md-menu #menu=\"mdMenu\">\r\n          <!-- BEGIN NOTIFICATION ICON -->\r\n          <button md-menu-item>\r\n            <md-icon>notifications_off</md-icon>\r\n            <span>Disable alerts</span>\r\n          </button>\r\n          <!-- END NOTIFICATION ICON -->\r\n          <!-- BEGIN CLEAR DATABASE ICON -->\r\n          <button md-menu-item (click)=\"clearDatabase()\">\r\n            <md-icon>delete</md-icon>\r\n            <span>Clear database</span>\r\n          </button>\r\n          <!-- END CLEAR DATABASE ICON -->\r\n        </md-menu>\r\n        <!-- END MENU-LIST -->\r\n      </div>\r\n      <!-- END MORE-VERT ICON -->\r\n    </md-toolbar>\r\n    <!-- END NAV BAR -->\r\n\r\n    <!-- OLD VERSION SIDENAV ! -->\r\n    <!-- <md-sidenav #sidenav mode=\"side\" opened=\"false\"> -->\r\n\r\n    <!-- NEW VERSION SIDENAV ! -->\r\n    <!-- BEGIN SIDENAV -->\r\n    <md-sidenav #sidenav opened=\"false\">\r\n      <!-- BEGIN SCROLLING-CONTENT -->\r\n      <div class=\"scrolling-content\">\r\n        <!-- BEGIN USER-CONTAINER -->\r\n        <header class=\"user-container\">\r\n          <!-- BEGIN AVATAR -->\r\n          <div class=\"avatar-container\">\r\n            <img src=\"../../static/webapp/assets/user.jpg\" alt=\"Avatar\" class=\"avatar\">\r\n          </div>\r\n          <!-- END AVATAR -->\r\n          <!-- BEGIN NAME-AVATAR-CONTAINER -->\r\n          <div class=\"name-avatar-container\">\r\n            <p>Aya Stark</p>\r\n          </div>\r\n          <!-- END NAME-AVATAR-CONTAINER -->\r\n          <!-- BEGIN USER-DROPDOWN-MENU -->\r\n          <div class=\"user-dropdown-menu\">\r\n            <span>aya.stark@xenoptics.com</span>\r\n            <div class=\"mdl-layout-spacer\"></div>\r\n            <button md-button class=\"div-icon\" [mdMenuTriggerFor]=\"menudrop\">\r\n              <md-icon >arrow_drop_down</md-icon>\r\n           </button>\r\n            <md-menu #menudrop=\"mdMenu\">\r\n              <button md-menu-item>\r\n                <md-icon>add</md-icon>\r\n                <span>Add another account...</span>\r\n              </button>\r\n              <button md-menu-item>\r\n                <md-icon>remove</md-icon>\r\n                <span>Logout</span>\r\n              </button>\r\n            </md-menu>\r\n          </div>\r\n          <!-- END USER-DROPDOWN-MENU -->\r\n        </header>\r\n        <!-- END USER-CONTAINER -->\r\n        <!-- BEGIN MENU -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"menu-open\" class=\"menu\">\r\n            <div id=\"menu-drop-down\" (click)=\"toggleMenu();\" hidden>\r\n              <a>Menu  \r\n            <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n            </a>\r\n            </div>\r\n            <div id=\"menu-drop-up\" (click)=\"toggleMenu();\">\r\n              <a>Menu  \r\n            <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n          </a>\r\n            </div>\r\n          </div>\r\n          <div id=\"menu-list\" class=\"menu-container-height\">\r\n            <md-list>\r\n              <!-- IF WANT TO ADD LOGO -->\r\n              <!-- <h3 md-subheader><md-icon>home</md-icon> XENO</h3> -->\r\n              <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of links\">\r\n                <md-list-item>\r\n                  <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n                  <h4 md-line>{{ link.name }}</h4>\r\n                </md-list-item>\r\n              </a>\r\n            </md-list>\r\n          </div>\r\n        </div>\r\n        <!-- END MENU -->\r\n        <!-- BEGIN SETTINGS -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"settings-open\" class=\"settings\">\r\n            <div id=\"settings-drop-down\" (click)=\"toggleSettings();\">\r\n              <a>Settings  \r\n              <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n              </a>\r\n            </div>\r\n            <div id=\"settings-drop-up\" (click)=\"toggleSettings();\" hidden>\r\n              <a>Settings  \r\n              <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n            </a>\r\n            </div>\r\n          </div>\r\n          <div id=\"settings-list\" class=\"settings-container-height\" hidden>\r\n            <md-list>\r\n              <a [routerLink]=\"[link.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let link of settinglinks\">\r\n                <md-list-item>\r\n                  <md-icon md-list-icon>{{ link.icon }}</md-icon>\r\n                  <h4 md-line>{{ link.name }}</h4>\r\n                </md-list-item>\r\n              </a>\r\n            </md-list>\r\n          </div>\r\n        </div>\r\n        <!-- END SETTINGS -->\r\n        <!-- BEGIN DOCUMENT LABEL -->\r\n        <div class=\"menu-list-container\">\r\n          <div id=\"documents-open\" class=\"document\">\r\n            <div id=\"documents-drop-down\" (click)=\"toggleDocument();\">\r\n              <a>Document  \r\n                <button md-button class=\"div-icon\"><md-icon >arrow_drop_down</md-icon></button>\r\n                </a>\r\n            </div>\r\n            <div id=\"documents-drop-up\" (click)=\"toggleDocument();\" hidden>\r\n              <a>Document  \r\n                <button md-button class=\"div-icon\"><md-icon>arrow_drop_up</md-icon></button>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END DOCUMENT LABEL -->\r\n        <!-- BEGIN FOOTER-CONTAINER -->\r\n        <!-- <div class=\"footer-container\"> -->\r\n          <!-- <hr> -->\r\n          <!-- <div class=\"text-center\">\r\n            <span>Help & Feedback</span>\r\n          </div>\r\n        </div> -->\r\n        <!-- END FOOTER-CONTAINER -->\r\n      </div>\r\n      <!-- END SCROLLING-CONTENT -->\r\n    </md-sidenav>\r\n    <!-- END SIDENAV -->\r\n    <!-- BEGIN ROUTER-OUTLET -->\r\n    <router-outlet></router-outlet>\r\n    <!-- END ROUTER-OUTLET -->\r\n  </md-sidenav-container>\r\n  <!-- END SIDE NAV -->\r\n</div>\r\n<!-- END MAIN CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: default; }\n\nspan {\n  cursor: default; }\n\np {\n  cursor: default; }\n\nhr {\n  border: 0;\n  height: 0;\n  border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.main-container {\n  padding: 0;\n  margin: 0;\n  width: 100vw;\n  height: 100vh; }\n  .main-container .sidenav-fab-container {\n    width: 100%;\n    height: 100vh; }\n    .main-container .sidenav-fab-container .toolbar-container {\n      display: block;\n      padding: 0 10px; }\n      .main-container .sidenav-fab-container .toolbar-container .div-icon-menu {\n        border-radius: 50%;\n        font-size: 24px;\n        height: 34px;\n        margin-left: 0;\n        margin-right: 0;\n        min-width: 38px;\n        width: 32px;\n        padding: 0;\n        overflow: hidden;\n        color: inherit;\n        line-height: normal; }\n      .main-container .sidenav-fab-container .toolbar-container .warpper-right {\n        margin-left: auto;\n        margin-right: 0; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon-mail {\n          border-radius: 50%;\n          font-size: 22px;\n          height: 34px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 38px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon-notification {\n          border-radius: 50%;\n          font-size: 22px;\n          height: 34px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 38px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n        .main-container .sidenav-fab-container .toolbar-container .warpper-right .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n    .main-container .sidenav-fab-container .scrolling-content {\n      overflow: auto;\n      width: 100%; }\n      .main-container .sidenav-fab-container .scrolling-content .user-container {\n        box-sizing: border-box;\n        display: -ms-flexbox;\n        display: -webkit-box;\n        display: flex;\n        -ms-flex-direction: column;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -ms-flex-pack: end;\n        -webkit-box-pack: end;\n                justify-content: flex-end;\n        padding: 16px;\n        height: 170px;\n        background: #303F9F;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .avatar-container {\n          padding-bottom: 0; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .avatar-container .avatar {\n            width: 55px;\n            height: 55px;\n            border-radius: 30px; }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .name-avatar-container {\n          padding-bottom: 0;\n          font-weight: bold;\n          color: white; }\n        .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu {\n          display: -ms-flexbox;\n          display: -webkit-box;\n          display: flex;\n          position: relative;\n          -ms-flex-direction: row;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n                  flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-box-align: center;\n                  align-items: center;\n          width: 100%;\n          color: white;\n          font-size: 13px; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu .mdl-layout-spacer {\n            -ms-flex-positive: 1;\n            -webkit-box-flex: 1;\n                    flex-grow: 1; }\n          .main-container .sidenav-fab-container .scrolling-content .user-container .user-dropdown-menu .div-icon {\n            border-radius: 50%;\n            font-size: 24px;\n            height: 32px;\n            margin-left: 0;\n            margin-right: 0;\n            min-width: 32px;\n            width: 32px;\n            padding: 0;\n            overflow: hidden;\n            color: inherit;\n            line-height: normal; }\n    .main-container .sidenav-fab-container .menu-list-container {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n      height: 100%;\n      margin: 0.5vh 0.5vh; }\n      .main-container .sidenav-fab-container .menu-list-container:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n      .main-container .sidenav-fab-container .menu-list-container .menu {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .menu a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .menu a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .menu .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n      .main-container .sidenav-fab-container .menu-list-container .menu-container-height {\n        height: 260px; }\n      .main-container .sidenav-fab-container .menu-list-container .settings {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .settings a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .settings a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .settings .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n      .main-container .sidenav-fab-container .menu-list-container .document {\n        padding: 10px 0 10px 23px; }\n        .main-container .sidenav-fab-container .menu-list-container .document a {\n          cursor: pointer; }\n        .main-container .sidenav-fab-container .menu-list-container .document a:hover {\n          color: #3F51B5; }\n        .main-container .sidenav-fab-container .menu-list-container .document .div-icon {\n          border-radius: 50%;\n          font-size: 24px;\n          height: 32px;\n          margin-left: 0;\n          margin-right: 0;\n          min-width: 32px;\n          width: 32px;\n          padding: 0;\n          overflow: hidden;\n          color: inherit;\n          line-height: normal; }\n    .main-container .sidenav-fab-container .blank-container {\n      height: 15vh;\n      margin-top: 2vh; }\n    .main-container .sidenav-fab-container .footer-container {\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n      height: 2vh;\n      padding-bottom: 10px;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n      .main-container .sidenav-fab-container .footer-container:hover {\n        box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n      .main-container .sidenav-fab-container .footer-container .text-center {\n        text-align: center;\n        font-size: 14px;\n        margin-top: 2%; }\n        .main-container .sidenav-fab-container .footer-container .text-center span {\n          cursor: pointer; }\n          .main-container .sidenav-fab-container .footer-container .text-center span:hover {\n            color: #3F51B5; }\n      .main-container .sidenav-fab-container .footer-container .text-left {\n        text-align: left; }\n      .main-container .sidenav-fab-container .footer-container .icon-opacity {\n        opacity: 0.25;\n        cursor: pointer; }\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  width: 300px; }\n\n.mat-list .mat-subheader {\n  margin: 24px 0;\n  text-align: center;\n  font-size: 24px; }\n\n.mat-list md-icon {\n  opacity: 0.25; }\n\n.menu-list-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  height: 100%;\n  margin: 0.5vh 0.5vh; }\n  .menu-list-container:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .menu-list-container .settings-container-height {\n    height: 200px; }\n\n:host /deep/ md-list-item.mat-list-item .mat-list-item-content {\n  margin: 12px 24px;\n  border-radius: 5px; }\n\n:host /deep/ .active .mat-list-item-content {\n  color: white;\n  background-color: #D61515;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n\n:host /deep/ a {\n  text-decoration: none; }\n  :host /deep/ a:not(.active):hover .mat-list-item-content {\n    background-color: rgba(0, 0, 0, 0.15);\n    color: blue;\n    cursor: pointer; }\n\n:host /deep/ a:focus {\n  outline: none !important; }\n\n:host /deep/ md-toolbar {\n  cursor: default;\n  min-height: 42px;\n  max-height: 42px;\n  width: 100vw;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  :host /deep/ md-toolbar md-toolbar-row {\n    min-height: 40.5px;\n    max-height: 40.5px;\n    width: 100vw; }\n\n.mat-sidenav-container {\n  background: transparent; }\n\n.mat-sidenav {\n  height: 100vh;\n  width: 300px; }\n\n.mat-icon {\n  height: 27px; }\n\n.blank-container {\n  height: 15vh;\n  margin-top: 2vh; }\n\n.example-scrolling-content {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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




var AppComponent = (function () {
    function AppComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
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
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#settings-list, #settings-drop-up, #settings-drop-down').toggle();
    };
    // TOGGLE MENU
    AppComponent.prototype.toggleMenu = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#menu-list, #menu-drop-down, #menu-drop-up').toggle();
    };
    // TOGGLE DOCUMENT MENU
    AppComponent.prototype.toggleDocument = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#documents-drop-down, #documents-drop-up').toggle();
    };
    // CLEAR DATABASE DATA
    AppComponent.prototype.clearDatabase = function () {
        this.ApiService.clearDatabase('cleardatabase');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__port_pipe__ = __webpack_require__("../../../../../src/app/port.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__testing_mode_testing_mode_component__ = __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR MODULE





// MATERIAL MODULE



// Component










// Third-Party



// Services

// Routing

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
            __WEBPACK_IMPORTED_MODULE_15__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__port_pipe__["a" /* PortPipe */],
            __WEBPACK_IMPORTED_MODULE_17__testing_mode_testing_mode_component__["a" /* TestingModeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__port_connection_mobile_port_connection_mobile_component__["a" /* PortConnectionMobileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__services_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
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

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section first-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"four columns\">\n        <div class=\"container\">\n          <div class=\"flex-item-container\">\n            <div class=\"temperature-container\">\n              <div class=\"flex-item-1\">\n                <div class=\"content-1\">\n                  <span>26 °C</span>\n                  <p>78.8 °C</p>\n                </div>\n                <div class=\"content-2\">\n                  <span>Temperature</span>\n                </div>\n              </div>\n              <div class=\"flex-item-2\">\n                <img alt=\"Temperature-icon\" src=\"../../static/webapp/assets/temp-icon.png\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"four columns\">\n        <div class=\"container\">\n          <div class=\"flex-item-container\">\n            <div class=\"humidity-container\">\n              <div class=\"flex-item-1\">\n                <div class=\"content-1\">\n                  <span>50%</span>\n                </div>\n                <div class=\"content-2\">\n                  <span>Humidity</span>\n                </div>\n              </div>\n              <div class=\"flex-item-2\">\n                <img alt=\"Temperature-icon\" src=\"../../static/webapp/assets/humidity-icon.png\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"four columns\">\n        <div class=\"container\">\n          <div class=\"flex-item-container\">\n            <div class=\"time-container\">\n              <div class=\"flex-item-1\">\n                <div class=\"content-1\">\n                  <span>54 sec.</span>\n                </div>\n                <div class=\"content-2\">\n                  <span>Avg times</span>\n                </div>\n              </div>\n              <div class=\"flex-item-2\">\n                <img alt=\"Temperature-icon\" src=\"../../static/webapp/assets/timer-icon.png\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section east-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"column\">\n        <md-card>East port table</md-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section second-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"one-half column\">\n        <div class=\"left-table\">\n          <div *ngFor=\"let row of eportschunk_left_table\">\n            <div id=\"{{ column }}\" class=\"East\" [ngClass]=\"[isSelectEast(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">{{ column }}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"one-half column\">\n        <div class=\"right-table\">\n          <div *ngFor=\"let row of eportschunk_right_table\">\n            <div id=\"{{ column }}\" class=\"East\" [ngClass]=\"[isSelectEast(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">{{ column }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section west-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"column\">\n        <md-card>West port table</md-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section third-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"one-half column\">\n        <div class=\"left-table\">\n          <div *ngFor=\"let row of wportschunk_left_table\">\n            <div id=\"{{ column }}\" class=\"West\" [ngClass]=\"[isSelectWest(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">{{ column }}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"one-half column\">\n        <div class=\"right-table\">\n          <div *ngFor=\"let row of wportschunk_right_table\">\n            <div id=\"{{ column }}\" class=\"West\" [ngClass]=\"[isSelectWest(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">{{ column }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section fourth-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"twelve columns\">\n        <div class=\"first-container\" align=\"center\">\n          <div class=\"button-container\">\n            <div class=\"button-connect-container\">\n              <div class=\"item-1\">\n                <div class=\"connect-button-circle Blink\"></div>\n              </div>\n              <div class=\"item-2\">\n                <button md-raised-button id=\"Connect\" (click)=\"postConnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_connect_button == true ? false : null\"\n                  disabled>Connect</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"twelve columns\">\n        <div class=\"first-container\" align=\"center\">\n          <div class=\"button-container\">\n            <div class=\"button-disconnect-container\">\n              <div class=\"item-1\">\n                <div class=\"disconnect-button-circle Blink\"></div>\n              </div>\n              <div class=\"item-2\">\n                <button md-raised-button id=\"Disconnect\" class=\"button-width\" (click)=\"postDisconnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_disconnect_button == true ? false : null\"\n                  disabled>Disconnect</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"six columns\">\n        <div class=\"second-container\">\n          <div id=\"error-dialog\" class=\"hide\">\n            <md-card class=\"Blink\">{{ error_message }}</md-card>\n          </div>\n        </div>\n      </div>\n      <div class=\"six columns\">\n        <div class=\"second-container\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/normalize.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/skeleton.css"), "");

// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Import skeleton framework\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Global\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nmd-card {\n  cursor: default; }\n\n.Blink {\n  -webkit-animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;\n          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.hide {\n  visibility: hidden; }\n\n/* First-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.first-section {\n  height: auto; }\n  .first-section .container {\n    text-align: center;\n    width: 100%; }\n    .first-section .container .flex-item-container {\n      width: 100%;\n      height: 100%; }\n      .first-section .container .flex-item-container .temperature-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #0091ea;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .temperature-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-1 p {\n              font-size: 14px;\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .temperature-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .temperature-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .temperature-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n      .first-section .container .flex-item-container .humidity-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #00c652;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .humidity-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-1 p {\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .humidity-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .humidity-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .humidity-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n      .first-section .container .flex-item-container .time-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-top: 0.5rem;\n        width: 100%;\n        height: 70px;\n        background: #E74856;\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .first-section .container .flex-item-container .time-container .flex-item-1 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n          .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 27%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 span {\n              font-size: 24px;\n              cursor: default;\n              color: white; }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-1 p {\n              font-size: 14px;\n              margin: 0;\n              cursor: default;\n              color: white; }\n          .first-section .container .flex-item-container .time-container .flex-item-1 .content-2 {\n            height: 50%;\n            width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            top: 43%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n            .first-section .container .flex-item-container .time-container .flex-item-1 .content-2 span {\n              cursor: default;\n              color: white; }\n        .first-section .container .flex-item-container .time-container .flex-item-2 {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          overflow: hidden; }\n          .first-section .container .flex-item-container .time-container .flex-item-2 img {\n            width: 90px;\n            height: auto; }\n\n/* east-banner\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.east-banner {\n  text-align: center;\n  margin-top: 1rem; }\n\n/* Second-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.second-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .second-section .left-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .second-section .left-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .second-section .left-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n  .second-section .right-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .second-section .right-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .second-section .right-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n\n/* west-banner\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.west-banner {\n  text-align: center;\n  margin-top: 1rem; }\n\n/* Third-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.third-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .third-section .left-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .third-section .left-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .third-section .left-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n  .third-section .right-table {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n    .third-section .right-table div {\n      font-size: 14px;\n      padding: 6.6px 0;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .third-section .right-table div div {\n        border: 1px solid rgba(85, 85, 85, 0.2);\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 13px; }\n\n/* Fourth-section\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.fourth-section {\n  margin-top: 0.5rem;\n  height: auto; }\n  .fourth-section .first-container {\n    margin-top: 0.5rem;\n    height: auto; }\n    .fourth-section .first-container .button-container {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      width: auto;\n      height: 45px; }\n      .fourth-section .first-container .button-container .button-connect-container {\n        width: 180px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        margin-right: 5px;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        border-radius: 45px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .fourth-section .first-container .button-container .button-connect-container .item-1 {\n          width: 20%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-connect-container .item-1 .connect-button-circle {\n            border-radius: 50%;\n            width: 15px;\n            height: 15px;\n            background: #3f51b5;\n            margin-left: 10px !important;\n            -webkit-transform: translateY(95%);\n                    transform: translateY(95%); }\n        .fourth-section .first-container .button-container .button-connect-container .item-2 {\n          margin-left: 10px;\n          width: 80%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-connect-container .item-2 button {\n            border: none;\n            border-radius: 20px;\n            -webkit-transform: translateY(7%);\n                    transform: translateY(7%); }\n            .fourth-section .first-container .button-container .button-connect-container .item-2 button:hover {\n              cursor: pointer;\n              color: rgba(255, 255, 255, 0.87); }\n            .fourth-section .first-container .button-container .button-connect-container .item-2 button:disabled {\n              background-color: rgba(0, 0, 0, 0.115);\n              border: none;\n              cursor: default; }\n      .fourth-section .first-container .button-container .button-disconnect-container {\n        width: 210px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        margin-right: 5px;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        border-radius: 45px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n        .fourth-section .first-container .button-container .button-disconnect-container .item-1 {\n          width: 20%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-disconnect-container .item-1 .disconnect-button-circle {\n            border-radius: 50%;\n            width: 15px;\n            height: 15px;\n            background: #E74856;\n            margin-left: 10px !important;\n            -webkit-transform: translateY(95%);\n                    transform: translateY(95%); }\n        .fourth-section .first-container .button-container .button-disconnect-container .item-2 {\n          margin-left: 10px;\n          width: 80%;\n          height: 100%; }\n          .fourth-section .first-container .button-container .button-disconnect-container .item-2 button {\n            border: none;\n            background: #E74856;\n            border-radius: 20px;\n            -webkit-transform: translateY(7%);\n                    transform: translateY(7%); }\n            .fourth-section .first-container .button-container .button-disconnect-container .item-2 button:hover {\n              cursor: pointer;\n              color: rgba(255, 255, 255, 0.87); }\n            .fourth-section .first-container .button-container .button-disconnect-container .item-2 button:disabled {\n              background-color: rgba(0, 0, 0, 0.115);\n              border: none;\n              cursor: default; }\n  .fourth-section .second-container {\n    margin-top: 0.5rem;\n    height: 50px;\n    background: #eee; }\n\n/* Port-color\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.selected {\n  color: white !important;\n  background: #555555 !important; }\n\n.connected {\n  color: white !important;\n  background: #00C853 !important;\n  box-shadow: none !important; }\n\n.pending {\n  color: white !important;\n  background: #D61515 !important;\n  box-shadow: none !important; }\n\n.break {\n  color: white !important;\n  background: #FBC02D !important;\n  box-shadow: none !important; }\n\n.pair {\n  color: white !important;\n  background: #3f51b5 !important; }\n\n.selected-pair {\n  background: #555555 !important;\n  cursor: default;\n  color: white; }\n\n.current-selected {\n  border-style: solid !important;\n  border-width: 1.2px !important;\n  border-color: orange !important;\n  font-weight: 500; }\n\n.unselectable {\n  color: #9E9E9E;\n  background: #E0E0E0;\n  pointer-events: none; }\n\n.port-unselectable {\n  color: #9E9E9E;\n  background: #E0E0E0;\n  pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port-connection-mobile/port-connection-mobile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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





var PortConnectionMobileComponent = (function () {
    function PortConnectionMobileComponent(ApiService) {
        this.ApiService = ApiService;
        // PORTS DATA
        this.eports = []; // 144 EAST PORTS
        this.wports = []; // 144 WEST PORTS
        this.eportschunk = []; // 144 to [12,12,...]
        this.wportschunk = []; // 144 to [12,12,...]
        this.portID = []; // PORT ID
        this.eportNote = []; // EAST PORT NOTE
        this.wportNote = []; // WEST PORT NOTE
        this.eportschunk_left_table = [];
        this.eportschunk_right_table = [];
        this.wportschunk_left_table = [];
        this.wportschunk_right_table = [];
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
        // DATA FROM DOM
        this.all_east = document.getElementsByClassName('East');
        this.all_west = document.getElementsByClassName('West');
    }
    PortConnectionMobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // FETCH DATA
        this.fetchData();
        // SET COLOR OF PORT CONNECTION
        this.setConnectedPort();
        // CHECK STATUS EVERY 5 SEC.
        this.timerInterval = setInterval(function () {
            _this.checkStatus();
        }, 3000);
    };
    PortConnectionMobileComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval); // CLEAR INTERVAL
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
                    // PUSH INDEX > 6
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
            console.log(data);
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
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.pair, function (obj) {
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
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.pair, function (obj) {
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
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](data, function (obj) {
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
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#stops, #sequence, #input-container').toggle();
        this.debugMode = !this.debugMode;
        console.log('toggleDebugMode ' + this.debugMode);
    };
    // DISABLE NOT AVAILABLE EAST PORT
    PortConnectionMobileComponent.prototype.disabledEastPort = function (id) {
        return (id !== 'E1' && id !== 'E2' && id !== 'E3') ? 'port-unselectable' : '';
    };
    // DISABLE NOT AVAILABLE WEST PORT
    PortConnectionMobileComponent.prototype.disabledWestPort = function (id) {
        return (id !== 'W1' && id !== 'W2' && id !== 'W3') ? 'port-unselectable' : '';
    };
    return PortConnectionMobileComponent;
}());
PortConnectionMobileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port-connection-mobile',
        template: __webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port-connection-mobile/port-connection-mobile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], PortConnectionMobileComponent);

var _a;
//# sourceMappingURL=port-connection-mobile.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN HEADER-CONTAINER -->\r\n<div class=\"header-container\" align=\"center\">\r\n  <!-- BEGIN CONTAINER-CONTENT -->\r\n  <div class=\"container-content\" align=\"center\">\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN TEMPERATURE-CONTAINER -->\r\n        <div class=\"temperature-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>26 °C</span>\r\n              <p>78.8 °F</p>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Temperature</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../static/webapp/assets/temp-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END TEMPERATURE-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN HUMIDITY-CONTAINER -->\r\n        <div class=\"humidity-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>50%</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Humidity</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../static/webapp/assets/humidity-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END HUMIDITY-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN ORDER-CONTAINER -->\r\n        <div class=\"order-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN-CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>65%</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN-CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Orders Completed</span>\r\n            </div>\r\n            <!-- END-CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../static/webapp/assets/oder-icon2.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END ORDER-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n    <!-- BEGIN SUB-CONTAINER-CONTENT -->\r\n    <div class=\"sub-container-content\">\r\n      <!-- BEGIN FLEX-ITEM-CONTAINER -->\r\n      <div class=\"flex-item-container\">\r\n        <!-- BEGIN TIME-CONTAINER -->\r\n        <div class=\"time-container\">\r\n          <!-- BEGIN FLEX-ITEM-1 -->\r\n          <div class=\"flex-item-1\">\r\n            <!-- BEGIN CONTENT-1 -->\r\n            <div class=\"content-1\">\r\n              <span>54 sec.</span>\r\n            </div>\r\n            <!-- END CONTENT-1 -->\r\n            <!-- BEGIN CONTENT-2 -->\r\n            <div class=\"content-2\">\r\n              <span>Avg times</span>\r\n            </div>\r\n            <!-- END CONTENT-2 -->\r\n          </div>\r\n          <!-- END FLEX-ITEM-1 -->\r\n          <!-- BEGIN FLEX-ITEM-2 -->\r\n          <div class=\"flex-item-2\">\r\n            <img src=\"../../static/webapp/assets/timer-icon.png\" alt=\"Temperature-icon\">\r\n          </div>\r\n          <!-- END FLEX-ITEM-2 -->\r\n        </div>\r\n        <!-- END TIME-CONTAINER -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-CONTAINER -->\r\n    </div>\r\n    <!-- END SUB-CONTAINER-CONTENT -->\r\n  </div>\r\n  <!-- END CONTAINER-CONTENT -->\r\n</div>\r\n<!-- END HEADER-CONTAINER -->\r\n\r\n<!-- BEGIN TABLE -->\r\n<!-- BEGIN SECTION GROUP -->\r\n<div class=\"section group\">\r\n  <!-- BEGIN COL SPAN_1_OF_2 -->\r\n  <div class=\"col span_1_of_2\">\r\n    <!-- EAST TABLE -->\r\n    <!-- BEGIN TABLE-CONTAINER-1 -->\r\n    <table class=\"table-container-1\" align=\"center\">\r\n      <tbody [ngClass]=\"{'unselectable': this.unselectable_table, 'selectable': !this.unselectable_table}\">\r\n        <tr class=\"tr-style\" *ngFor=\"let row of eportschunk\">\r\n          <td id=\"{{ column }}\" class=\"East td-style\" [ngClass]=\"[isSelectEast(column)]\" (click)=\"setEastID(column)\" *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipEast(column)\" mdTooltipPosition=\"above\">\r\n              <span [mdTooltip]=\"pushEastNote(column)\" [mdTooltipPosition]=\"etooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- END TABLE-CONTAINER-1 -->\r\n  </div>\r\n  <!-- END COL SPAN_1_OF_2 -->\r\n  <!-- BEGIN COL SPAN_1_OF_2 -->\r\n  <div class=\"col span_1_of_2\">\r\n    <!-- WEST TABLE -->\r\n    <!-- BEGIN TABLE-CONTAINER-2 -->\r\n    <table class=\"table-container-2\" align=\"center\">\r\n      <tbody [ngClass]=\"{'unselectable': this.unselectable_table, 'selectable': !this.unselectable_table}\">\r\n        <tr class=\"tr-style\" *ngFor=\"let row of wportschunk\">\r\n          <td id=\"{{ column }}\" class=\"West td-style\" [ngClass]=\"[isSelectWest(column)]\" (click)=\"setWestID(column)\" *ngFor=\"let column of row\">\r\n            <span id=\"T{{ column }}\" [mdTooltip]=\"tooltipWest(column)\" mdTooltipPosition=\"above\">\r\n              <span [mdTooltip]=\"pushWestNote(column)\" [mdTooltipPosition]=\"wtooltipPostion(column)\">{{ column }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- BEGIN TABLE-CONTAINER-2 -->\r\n  </div>\r\n  <!-- END COL SPAN_1_OF_2 -->\r\n</div>\r\n<!-- END SECTION GROUP -->\r\n<!-- END TABLE -->\r\n\r\n<!-- BEGIN FOOTER -->\r\n<div class=\"footer-container\">\r\n  <!-- BEGIN FLEX-CONTAINER-1 -->\r\n  <div class=\"flex-container-1\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\">\r\n        <!-- BEGIN ERROR-DIALOG -->\r\n        <div id=\"error-dialog\" class=\"hide\">\r\n          <md-card class=\"Blink\">\r\n            <p>{{ error_message }}</p>\r\n          </md-card>\r\n        </div>\r\n        <!-- END ERROR-DIALOG -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-1 -->\r\n  <!-- BEGIN FLEX-CONTAINER-2 -->\r\n  <div class=\"flex-container-2\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\">\r\n        <!-- BEGIN ITEM-1-CONTAINER-SHADOW -->\r\n        <div class=\"item-1-container-shadow\">\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN BREAK-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"break-button-circle Blink\"></div>\r\n                <!-- END BREAK-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! debug button will available in debug mode.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN CONTINUE BUTTON -->\r\n              <button md-raised-button id=\"Continue\" class=\"button-width\" (click)=\"postDebug()\" color=\"primary\" [attr.disabled]=\"this.disabled_continue_button == true ? false : null\" disabled>Continue</button>\r\n              <!-- END CONTINUE BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN CONNECT-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"connect-button-circle Blink\"></div>\r\n                <!-- END CONNECT-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! connect button will available when select two side available ports.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN CONNECT BUTTON -->\r\n              <button md-raised-button id=\"Connect\" class=\"button-width\" (click)=\"postConnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_connect_button == true ? false : null\" disabled>Connect</button>\r\n              <!-- END CONNECT BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n          <!-- BEGIN BUTTON-CONTAINER -->\r\n          <div class=\"button-container\">\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-1 -->\r\n            <div class=\"button-container-item-1\">\r\n              <!-- BEGIN TOOLTIP -->\r\n              <div class=\"tooltip\">\r\n                <!-- BEGIN DISCONNECT-BUTTON-CIRCLE BLINK -->\r\n                <div class=\"disconnect-button-circle Blink\"></div>\r\n                <!-- END DISCONNECT-BUTTON-CIRCLE BLINK -->\r\n                <!-- BEGIN TOOLTIPTEXT -->\r\n                <span class=\"tooltiptext\">Hint! disconnect button will available when select correct pair of connected ports.</span>\r\n                <!-- END TOOLTIPTEXT -->\r\n              </div>\r\n              <!-- END TOOLTIP -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-1 -->\r\n            <!-- BEGIN BUTTON-CONTAINER-ITEM-2 -->\r\n            <div class=\"button-container-item-2\">\r\n              <!-- BEGIN DISCONNECT BUTTON -->\r\n              <button md-raised-button id=\"Disconnect\" class=\"button-width\" (click)=\"postDisconnection()\" color=\"primary\" [attr.disabled]=\"this.disabled_disconnect_button == true ? false : null\" disabled>Disconnect</button>\r\n              <!-- END DISCONNECT BUTTON -->\r\n            </div>\r\n            <!-- END BUTTON-CONTAINER-ITEM-2 -->\r\n          </div>\r\n          <!-- END BUTTON-CONTAINER -->\r\n        </div>\r\n        <!-- END ITEM-1-CONTAINER-SHADOW -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n      <!-- BEGIN ITEM-2 -->\r\n      <div class=\"item-2\">\r\n        <!-- BEGIN SUB-ITEM -->\r\n        <div class=\"sub-item\" align=\"center\">\r\n          <!-- BEGIN INPUT-CONTAINER -->\r\n          <div id=\"input-container\" class=\"align-center\" hidden>\r\n            <!-- BEGIN INPUT DIV -->\r\n            <div style=\"transform: translateY(-20%);\">\r\n              <!-- BEGIN STOP INPUT -->\r\n              <md-input-container>\r\n                <input mdInput id=\"stops\" placeholder=\"Stops :\" value=\"stops\" [(ngModel)]=\"stops\" [ngClass]=\"clearValue(stops)\" pattern=\"[0-9,]{1,20}\"\r\n                  [attr.disabled]=\"this.disable_stops_input == true ? false : null\" hidden>\r\n              </md-input-container>\r\n              <!-- END STOP INPUT -->\r\n              <!-- BEGIN SEQUENCE INPUT -->\r\n              <md-input-container>\r\n                <input mdInput id=\"sequence\" placeholder=\"Sequence :\" value=\"sequence\" [(ngModel)]=\"sequence\"\r\n                [attr.disabled]=\"this.disable_stops_input == true\" hidden>\r\n              </md-input-container>\r\n              <!-- END SEQUENCE INPUT -->\r\n            </div>\r\n            <!-- END INPUT DIV -->\r\n          </div>\r\n          <!-- END INPUT CONTAINER -->\r\n        </div>\r\n        <!-- END SUB-ITEM -->\r\n      </div>\r\n      <!-- END ITEM-2 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n    <!-- BEGIN FLEX-ITEM-2 -->\r\n    <div class=\"flex-item-2\">\r\n      <!-- BEGIN ITEM-1 -->\r\n      <div class=\"item-1\" align=\"center\">\r\n        <!-- BEGIN ITEM-1-CONTAINER-SHADOW -->\r\n        <div class=\"item-1-container-shadow\">\r\n          <md-chip-list>\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-CONNECTED-ITEM-1 -->\r\n                <div class=\"detail-container-connected-item-1\">\r\n                  <!-- BEGIN CONNECTED-CIRCLE BLINK -->\r\n                  <div class=\"connected-circle Blink\"></div>\r\n                  <!-- END CONNECTED-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-CONNECTED-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-CONNECTED-ITEM-2 -->\r\n                <div class=\"detail-container-connected-item-2\">\r\n                  <p>Connected</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-CONNECTED-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Green color means the port that connected.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-BREAK-ITEM-1 -->\r\n                <div class=\"detail-container-break-item-1\">\r\n                  <!-- BEGIN BREAK-CIRCLE BLINK -->\r\n                  <div class=\"break-circle Blink\"></div>\r\n                  <!-- END BREAK-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-BREAK-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-BREAK-ITEM-2 -->\r\n                <div class=\"detail-container-break-item-2\">\r\n                  <p>Break</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-BREAK-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <span class=\"tooltiptext\">Yellow color means the port that stop in current sequence.</span>\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-PENDING-ITEM-1 -->\r\n                <div class=\"detail-container-pending-item-1\">\r\n                  <!-- BEGIN PENDING-CIRCLE BLINK -->\r\n                  <div class=\"pending-circle Blink\"></div>\r\n                  <!-- END PENDING-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PENDING-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-PENDING-ITEM-2 -->\r\n                <div class=\"detail-container-pending-item-2\">\r\n                  <p>Pending</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PENDING-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Red color means the port that processing or pending.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-PAIR-ITEM-1 -->\r\n                <div class=\"detail-container-pair-item-1\">\r\n                  <!-- BEGIN PAIR-CIRCLE BLINK -->\r\n                  <div class=\"pair-circle Blink\"></div>\r\n                  <!-- END PAIR-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PAIR-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-PAIR-ITEM-2 -->\r\n                <div class=\"detail-container-pair-item-2\">\r\n                  <p>Pair</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-PAIR-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Show pairs of ports.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n            <!-- BEGIN TOOLTIP -->\r\n            <div class=\"tooltip\">\r\n              <!-- BEGIN DETAIL-CONTAINER -->\r\n              <div class=\"detail-container\" style=\"display: inline-flex;\">\r\n                <!-- BEGIN DETAIL-CONTAINER-SELECTED-ITEM-1 -->\r\n                <div class=\"detail-container-selected-item-1\">\r\n                  <!-- BEGIN SELECTED-CIRCLE BLINK -->\r\n                  <div class=\"selected-circle Blink\"></div>\r\n                  <!-- END SELECTED-CIRCLE BLINK -->\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-SELECTED-ITEM-1 -->\r\n                <!-- BEGIN DETAIL-CONTAINER-SELECTED-ITEM-2 -->\r\n                <div class=\"detail-container-selected-item-2\">\r\n                  <p>Selected</p>\r\n                </div>\r\n                <!-- END DETAIL-CONTAINER-SELECTED-ITEM-2 -->\r\n              </div>\r\n              <!-- END DETAIL-CONTAINER -->\r\n              <!-- BEGIN TOOLTIPTEXT -->\r\n              <span class=\"tooltiptext\">Show current selected ports.</span>\r\n              <!-- END TOOLTIPTEXT -->\r\n            </div>\r\n            <!-- END TOOLTIP -->\r\n          </md-chip-list>\r\n        </div>\r\n        <!-- END ITEM-1-CONTAINER-SHADOW -->\r\n      </div>\r\n      <!-- END ITEM-1 -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-2 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-2 -->\r\n  <!-- BEGIN FLEX-CONTAINER-3 -->\r\n  <div class=\"flex-container-3\">\r\n    <!-- BEGIN FLEX-ITEM-1 -->\r\n    <div class=\"flex-item-1\" align=\"center\">\r\n      <!-- BEGIN FLEX-ITEM-1-CONTAINER-SHADOW -->\r\n      <div class=\"flex-item-1-container-shadow\">\r\n        <!-- BEGIN DEBUG MODE TOGGLE BUTTON -->\r\n        <md-slide-toggle id=\"toggleDebugButton\" class=\"bt-margin-left\" (click)=\"toggleDebugMode()\">Debug Mode</md-slide-toggle>\r\n        <!-- END DEBUG MODE TOGGLE BUTTON -->\r\n      </div>\r\n      <!-- END FLEX-ITEM-1-CONTAINER-SHADOW -->\r\n    </div>\r\n    <!-- END FLEX-ITEM-1 -->\r\n  </div>\r\n  <!-- END FLEX-CONTAINER-3 -->\r\n</div>\r\n<!-- END FOOTER -->"

/***/ }),

/***/ "../../../../../src/app/port-connection/port-connection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  width: 100vw;\n  margin-top: 15px;\n  margin-bottom: 0; }\n  .header-container .container-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%; }\n    .header-container .container-content .sub-container-content {\n      height: 80px;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n      .header-container .container-content .sub-container-content .flex-item-container {\n        width: 100%;\n        height: 100%; }\n        .header-container .container-content .sub-container-content .flex-item-container .temperature-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #0091ea;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n          .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .temperature-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n        .header-container .container-content .sub-container-content .flex-item-container .humidity-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #00c652;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n          .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .humidity-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n        .header-container .container-content .sub-container-content .flex-item-container .order-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #00B294;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n          .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .order-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n        .header-container .container-content .sub-container-content .flex-item-container .time-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          min-width: 10vw;\n          max-width: 20vw;\n          background: #E74856;\n          border-radius: 2px;\n          position: relative;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          margin: 0; }\n          .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1; }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 35%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 span {\n                font-size: 24px;\n                cursor: default;\n                color: white; }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-1 p {\n                margin: 0;\n                cursor: default;\n                color: white; }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-2 {\n              height: 50%;\n              width: 100%;\n              margin-left: auto;\n              margin-right: auto;\n              position: relative;\n              top: 48%;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%); }\n              .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-1 .content-2 span {\n                cursor: default;\n                color: white; }\n          .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-2 {\n            -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                    flex-grow: 1;\n            overflow: hidden; }\n            .header-container .container-content .sub-container-content .flex-item-container .time-container .flex-item-2 img {\n              position: relative;\n              -webkit-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              top: 60%;\n              width: 90px;\n              /* you can use % */\n              height: auto; }\n\n:focus {\n  outline: none; }\n\nbutton {\n  min-width: 110px; }\n\n:host /deep/ md-slide-toggle:hover {\n  color: #e91e63; }\n\n/*  SECTIONS  */\n.section {\n  clear: both;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw; }\n  .section .table-container-1 {\n    width: 90%;\n    height: 100%;\n    margin: auto;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    border-radius: 4px; }\n    .section .table-container-1 .td-style {\n      padding: 4px;\n      border: 1px solid rgba(85, 85, 85, 0.2);\n      text-align: center;\n      font-family: 'Open Sans', sans-serif;\n      font-size: 16px;\n      border-radius: 8px; }\n    .section .table-container-1 .selected {\n      color: white !important;\n      background: #555555 !important; }\n    .section .table-container-1 .connected {\n      color: white !important;\n      background: #00C853 !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .pending {\n      color: white !important;\n      background: #D61515 !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .break {\n      color: white !important;\n      background: #FBC02D !important;\n      box-shadow: none !important; }\n    .section .table-container-1 .pair {\n      color: white !important;\n      background: #3f51b5 !important; }\n    .section .table-container-1 .selected-pair {\n      background: #555555 !important;\n      cursor: default;\n      color: white; }\n    .section .table-container-1 .current-selected {\n      border-style: solid;\n      border-width: 2px;\n      border-color: orange;\n      font-weight: 500; }\n    .section .table-container-1 .unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-1 .selectable .unselectable {\n      all: revert; }\n    .section .table-container-1 .port-unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-1 td:hover {\n      cursor: pointer;\n      background-color: rgba(85, 85, 85, 0.15); }\n  .section .table-container-2 {\n    width: 90%;\n    height: 100%;\n    margin: auto;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    border-radius: 4px; }\n    .section .table-container-2 .td-style {\n      padding: 4px;\n      border: 1px solid rgba(85, 85, 85, 0.2);\n      text-align: center;\n      font-family: 'Open Sans', sans-serif;\n      font-size: 16px;\n      border-radius: 8px; }\n    .section .table-container-2 .selected {\n      color: white !important;\n      background: #555555 !important; }\n    .section .table-container-2 .connected {\n      color: white !important;\n      background: #00C853 !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .pending {\n      color: white !important;\n      background: #D61515 !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .break {\n      color: white !important;\n      background: #FBC02D !important;\n      box-shadow: none !important; }\n    .section .table-container-2 .pair {\n      color: white !important;\n      background: #3f51b5 !important; }\n    .section .table-container-2 .selected-pair {\n      background: #555555 !important;\n      cursor: default;\n      color: white; }\n    .section .table-container-2 .current-selected {\n      border-style: solid;\n      border-width: 2px;\n      border-color: orange;\n      font-weight: 500; }\n    .section .table-container-2 .unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-2 .port-unselectable {\n      color: #9E9E9E;\n      background: #E0E0E0;\n      pointer-events: none; }\n    .section .table-container-2 td:hover {\n      cursor: pointer;\n      background-color: rgba(85, 85, 85, 0.15); }\n\n/*  COLUMN SETUP  */\n.col {\n  display: block;\n  float: left;\n  margin: 1% 0 1% 1.6%; }\n\n.col:first-child {\n  margin-left: 0; }\n\n/*  GROUPING  */\n.group:before,\n.group:after {\n  content: \"\";\n  display: table; }\n\n.group:after {\n  clear: both; }\n\n.group {\n  zoom: 1;\n  /* For IE 6/7 */ }\n\n/*  GRID OF TWO  */\n.span_2_of_2 {\n  width: 100%; }\n\n.span_1_of_2 {\n  width: 49.2%; }\n\n/*  GO FULL WIDTH AT LESS THAN 1200 PIXELS */\n@media only screen and (max-width: 1200px) {\n  .col {\n    margin: 1% 0 1% 0%; } }\n\n@media only screen and (max-width: 1200px) {\n  .span_2_of_2,\n  .span_1_of_2 {\n    width: 100%; } }\n\n.footer-container {\n  width: 100vw;\n  height: 140px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  margin-bottom: 5px; }\n  .footer-container .flex-container-1 {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .footer-container .flex-container-1 .flex-item-1 {\n      width: 100%;\n      height: 100%; }\n      .footer-container .flex-container-1 .flex-item-1 .item-1 {\n        height: 100%;\n        width: 100%; }\n        .footer-container .flex-container-1 .flex-item-1 .item-1 md-card {\n          width: 135px;\n          height: 0;\n          font-size: 14px;\n          border-radius: 35px;\n          background: #E74856; }\n          .footer-container .flex-container-1 .flex-item-1 .item-1 md-card p {\n            cursor: default;\n            color: white;\n            -webkit-transform: translateY(-50%);\n                    transform: translateY(-50%); }\n        .footer-container .flex-container-1 .flex-item-1 .item-1 .hide {\n          visibility: hidden; }\n  .footer-container .flex-container-2 {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2; }\n    .footer-container .flex-container-2 .flex-item-1 {\n      width: 100%;\n      height: 70%; }\n      .footer-container .flex-container-2 .flex-item-1 .item-1 {\n        margin: auto;\n        max-width: 80%;\n        min-width: 70%;\n        height: 50%;\n        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip {\n          text-align: center;\n          margin: auto;\n          width: 60px;\n          -webkit-transform: translateY(25%);\n                  transform: translateY(25%);\n          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n          cursor: default; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:first-child {\n            background: #00C853;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:first-child:hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(2) {\n            background: #FBC02D;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(2):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(3) {\n            background: #D61515;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(3):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(4) {\n            background: #3f51b5;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(4):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(5) {\n            background: #555555;\n            color: white; }\n            .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:nth-child(5):hover {\n              width: 100px; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 md-chip:focus {\n            outline: 0; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 div {\n          margin: auto; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-connected {\n            background: #00C853;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-break {\n            background: #FBC02D;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-pending {\n            background: #D61515;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-pair {\n            background: #3f51b5;\n            color: white; }\n          .footer-container .flex-container-2 .flex-item-1 .item-1 div #chip-selected {\n            background: #555555;\n            color: white; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .item-1-container-shadow {\n          height: 100%;\n          width: 750px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 button {\n          -webkit-transform: translateY(13%);\n                  transform: translateY(13%);\n          border-radius: 20px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Continue:not(disabled) {\n          background: #FBC02D; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Continue:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Disconnect:not(disabled) {\n          background: #E74856; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 #Disconnect:disabled {\n          background-color: rgba(0, 0, 0, 0.115); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          margin-left: 15px;\n          width: 150px;\n          height: 90%;\n          border-radius: 45px;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          -webkit-transform: translateY(2px);\n                  transform: translateY(2px); }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container-item-1 {\n          width: 20%;\n          height: 100%; }\n        .footer-container .flex-container-2 .flex-item-1 .item-1 .button-container-item-2 {\n          width: 80%;\n          height: 100%; }\n      .footer-container .flex-container-2 .flex-item-1 .item-2 {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        width: 100%;\n        height: 50%; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .sub-item {\n          margin: auto;\n          width: 60%;\n          height: 100%; }\n          .footer-container .flex-container-2 .flex-item-1 .item-2 .sub-item .align-center {\n            -webkit-transform: translateY(13%);\n                    transform: translateY(13%);\n            height: 80%;\n            width: 420px;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n            border-radius: 25px; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .item-2-container-shadow {\n          margin: auto;\n          -webkit-transform: translateY(-15%);\n                  transform: translateY(-15%);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          border-radius: 2px;\n          height: 100%; }\n          .footer-container .flex-container-2 .flex-item-1 .item-2 .item-2-container-shadow:focus {\n            outline: 0; }\n        .footer-container .flex-container-2 .flex-item-1 .item-2 .unselectable {\n          pointer-events: none; }\n    .footer-container .flex-container-2 .flex-item-2 {\n      width: 100%;\n      height: 30%; }\n      .footer-container .flex-container-2 .flex-item-2 .item-1 {\n        width: 100%;\n        height: 100%;\n        margin: auto; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 button {\n          -webkit-transform: translateY(8%);\n                  transform: translateY(8%);\n          border-radius: 20px; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Continue:not(disabled) {\n          background: #FBC02D; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Continue:disabled {\n          background-color: rgba(0, 0, 0, 0.13); }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Disconnect:not(disabled) {\n          background: #E74856; }\n        .footer-container .flex-container-2 .flex-item-2 .item-1 #Disconnect:disabled {\n          background-color: rgba(0, 0, 0, 0.115); }\n      .footer-container .flex-container-2 .flex-item-2 .item-1-container-shadow {\n        width: 750px;\n        height: 70%;\n        margin: auto;\n        -webkit-transform: translateY(6px);\n                transform: translateY(6px); }\n        .footer-container .flex-container-2 .flex-item-2 .item-1-container-shadow div {\n          margin: auto; }\n  .footer-container .flex-container-3 {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .footer-container .flex-container-3 .flex-item-1 {\n      width: 100%;\n      height: 50%; }\n      .footer-container .flex-container-3 .flex-item-1 md-slide-toggle {\n        -webkit-transform: translateY(35%);\n                transform: translateY(35%); }\n      .footer-container .flex-container-3 .flex-item-1 .flex-item-1-container-shadow {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        border-radius: 30px;\n        height: 50%;\n        width: 150px;\n        -webkit-transform: translateY(20%);\n                transform: translateY(20%); }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 300px;\n  background-color: #555555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  font-size: 13px;\n  cursor: pointer;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -150px; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible; }\n\n.detail-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 30px;\n  width: 120px;\n  height: 35px;\n  -webkit-transform: translateY(-5%);\n          transform: translateY(-5%); }\n  .detail-container:focus {\n    outline: 0; }\n\n.detail-container-connected-item-1 {\n  width: 30%;\n  height: 30%; }\n\n.detail-container-connected-item-2 {\n  width: 70%;\n  height: 30%;\n  margin-right: 15px !important; }\n  .detail-container-connected-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-break-item-1 {\n  width: 40%;\n  height: 30%; }\n\n.detail-container-break-item-2 {\n  width: 60%;\n  height: 30%;\n  margin-right: 30px !important; }\n  .detail-container-break-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-pending-item-1 {\n  width: 35%;\n  height: 30%; }\n\n.detail-container-pending-item-2 {\n  width: 65%;\n  height: 30%;\n  margin-right: 20px !important; }\n  .detail-container-pending-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-pair-item-1 {\n  width: 45%;\n  height: 30%; }\n\n.detail-container-pair-item-2 {\n  width: 55%;\n  height: 30%;\n  margin-right: 30px !important; }\n  .detail-container-pair-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.detail-container-selected-item-1 {\n  width: 35%;\n  height: 30%; }\n\n.detail-container-selected-item-2 {\n  width: 65%;\n  height: 30%;\n  margin-right: 20px !important; }\n  .detail-container-selected-item-2 p {\n    font-size: 14px;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    cursor: default; }\n\n.connected-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #00C853;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.break-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #FBC02D;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.pending-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #E74856;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.pair-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #3f51b5;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.selected-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #555555;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(-15%);\n          transform: translateY(-15%); }\n\n.connect-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #3f51b5;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.break-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #FBC02D;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.disconnect-button-circle {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #E74856;\n  margin-left: 10px !important;\n  -webkit-transform: translateY(95%);\n          transform: translateY(95%); }\n\n.Blink {\n  -webkit-animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;\n          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.bee-container {\n  width: 100vw;\n  height: 500px;\n  background: skyblue; }\n\n.bee-hive {\n  width: 50%;\n  height: 100%;\n  background: wheat; }\n\n.rhex {\n  position: relative;\n  margin: 1em auto;\n  width: 10em;\n  height: 17.32em;\n  border-radius: 1em/ .5em;\n  opacity: .25;\n  background: orange;\n  transition: opacity .5s;\n  cursor: pointer; }\n\n.rhex:before, .rhex:after {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  background: inherit;\n  content: ''; }\n\n.rhex:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n\n.rhex:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg); }\n\n.rhex:hover {\n  opacity: 1; }\n\ntd {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n", ""]);

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






var PortConnectionComponent = (function () {
    function PortConnectionComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
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
        this.availableEastPort = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
        this.availableWestPort = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
        // DATA FROM DOM
        this.all_east = document.getElementsByClassName('East');
        this.all_west = document.getElementsByClassName('West');
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
        }, 3000);
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
            console.log(data);
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
    PortConnectionComponent.prototype.postDisconnection = function () {
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
    PortConnectionComponent.prototype.postDebug = function () {
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
        return (id !== 'E1' && id !== 'E2' && id !== 'E3') ? 'port-unselectable' : '';
    };
    // DISABLE NOT AVAILABLE WEST PORT
    PortConnectionComponent.prototype.disabledWestPort = function (id) {
        return (id !== 'W1' && id !== 'W2' && id !== 'W3') ? 'port-unselectable' : '';
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], PortConnectionComponent);

var _a, _b;
//# sourceMappingURL=port-connection.component.js.map

/***/ }),

/***/ "../../../../../src/app/port-history/port-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-ITEM -->\r\n  <div class=\"flex-item\">\r\n    <!-- BEGIN TABLE-CONTAINER  -->\r\n    <div class=\"table-container\">\r\n      <input class=\"fliter\" type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...'\r\n        (keyup)='updateFilter($event)' />\r\n      <ngx-datatable #table class=\"material shadow\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\r\n        <!-- BEGIN DATE COLUMN  -->\r\n        <ngx-datatable-column name=\"Date\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END DATE COLUMN -->\r\n        <!-- BEGIN TIME COLUMN  -->\r\n        <ngx-datatable-column name=\"Time\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"red\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TIME COLUMN -->\r\n        <!-- BEGIN TYPE COLUMN -->\r\n        <ngx-datatable-column name=\"Type\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"orange\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END TYPE COLUMN -->\r\n        <!-- BEGIN STATUS COLUMN -->\r\n        <ngx-datatable-column name=\"Status\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END STATUS COLUMN -->\r\n        <!-- BEGIN EAST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"East\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END EAST PORT COLUMN -->\r\n        <!-- BEGIN WEST PORT COLUMN -->\r\n        <ngx-datatable-column name=\"West\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"blue\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <div>{{value}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END WEST PORT COLUMN -->\r\n        <!-- BEGIN SEVERITY COLUMN -->\r\n        <ngx-datatable-column name=\"RobotStatus\">\r\n          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span (click)=\"sort()\" class=\"green\"> {{column.name}}</span>\r\n          </ng-template>\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <!-- OLD VERSION -->\r\n            <!-- <div *ngIf=\"value.status !== 'Pending'\"> -->\r\n            <!-- NEW VERSION -->\r\n            <div *ngIf=\"value.status\">{{value.status}}&nbsp;&nbsp;\r\n              <button md-raised-button id=\"Continue\" class=\"button-width\" color=\"primary\" *ngIf=\"value.status == 'Pending' || value.status == 'Break' || value.status == 'Started'\"\r\n                (click)=\"cancelTask(value.id)\">Cancel</button>\r\n            </div>\r\n            <!-- <div class=\"flex-container\"> -->\r\n            <!-- REMOVE PENDING BUTTON -->\r\n            <!-- <button md-raised-button id=\"Continue\" class=\"button-width button-red\" color=\"primary\" *ngIf=\"value.status == 'Pending'\" (click)=\"pending(value.id)\">Continue</button> -->\r\n            <!-- </div> -->\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- END SEVERITY COLUMN -->\r\n      </ngx-datatable>\r\n      <!-- END TABLE -->\r\n    </div>\r\n    <!-- END SEARCH FILTER -->\r\n  </div>\r\n  <!-- END FLEX-ITEM -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n<!-- BEGIN FLEX-CONTAINER -->\r\n<div class=\"flex-container\">\r\n  <!-- BEGIN FLEX-FOOTER -->\r\n  <div class=\"flex-fix-padding\" align=\"center\">\r\n    <button md-raised-button id=\"save\" class=\"button-width\" color=\"primary\" (click)=\"saveData()\" type=\"button\">Save</button>\r\n  </div>\r\n  <!-- END FLEX-FOOTER -->\r\n</div>\r\n<!-- END FLEX-CONTAINER -->\r\n"

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
        // COLUMNS VARIABLES
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
                var date = new Date(obj['timestamp']);
                var day = date.toString().substring(0, 15);
                var time = date.toString().substring(15);
                var status = obj['status'].charAt(0).toUpperCase() + obj['status'].slice(1);
                // IF SWITCHTING_TYPE IS CONNECT
                if (obj['switching_type'] === 'C') {
                    _this.rows.push({
                        date: day, time: time, east: 'E' + obj['east'], west: 'W' + obj['west'],
                        status: 'Connected', robotStatus: { 'status': status, 'id': obj['id'] }
                    });
                    // IF SWITCHING_TYPE IS DISCONNECT
                }
                else {
                    _this.rows.push({
                        date: day, time: time, east: 'E' + obj['east'], west: 'W' + obj['west'],
                        status: 'Disconnected', robotStatus: { 'status': status, 'id': obj['id'] }
                    });
                }
            });
        });
    };
    // CANCEL TASK
    PortHistoryComponent.prototype.cancelTask = function (id) {
        this.ApiService.cancelTask(id, 'canceled');
        window.location.reload();
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
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


// Third-Party


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });

        this.ROOT_URL = "http://192.168.60.76:80/";
        // this.ROOT_URL = "http://192.168.60.76:8000/";
        // this.ROOT_URL = "http://192.168.60.142:8000/";

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
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](allPort, function (obj) {
                // SEPERATE BY DIRECTION 'E'
                if (obj.direction === 'E') {
                    eports.push(obj.direction + obj.number);
                    eportschunk = __WEBPACK_IMPORTED_MODULE_2_lodash__["chunk"](eports, 12);
                    eportNote.push(obj.note);
                    id.push(obj.id);
                    // SEPERATE BY DIRECTION 'W'
                }
                else if (obj.direction === 'W') {
                    wports.push(obj.direction + obj.number);
                    wportschunk = __WEBPACK_IMPORTED_MODULE_2_lodash__["chunk"](wports, 12);
                    wportNote.push(obj.note);
                    id.push(obj.id);
                }
            });
            return ({
                allPort: allPort, eports: eports, wports: wports,
                eportschunk: eportschunk, wportschunk: wportschunk, eportNote: eportNote, wportNote: wportNote, id: id
            });
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
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function () {
                console.error('POST ERROR');
            });
            // DEBUG MODE
            // PAYLOAD { east, west, action, stops, number }
        }
        else if (stops && number) {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action, stops: stops, number: number }, this.options).toPromise().then(function (response) {
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function () {
                console.error('POST DEBUG MODE ERROR!');
            });
            // NORMAL MODE
            // PAYLOAD { east, west, action }
        }
        else {
            return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action }, this.options).toPromise().then(function (response) {
                response = JSON.parse(response._body);
                if (response.status === 'error' || response.status === 'alarm') {
                    return (response);
                }
                else {
                    return ({ 'status': undefined, 'error': undefined });
                }
            }).catch(function () {
                console.error('POST NORMAL MODE ERROR!');
            });
        }
    };
    // CHECK STATUS FROM CURRENT TASK
    ApiService.prototype.checkStatus = function () {
        return this.http.get(this.ROOT_URL + 'checktask/').toPromise().then(function (response) {
            response = JSON.parse(response._body);
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
        });
    };
    // CHECK CONNECTION STATUS ALL PORT
    ApiService.prototype.getConnectedPort = function () {
        return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then(function (response) {
            response = JSON.parse(response._body);
            return (response);
        }).catch(function () {
            console.error('GET CONNECTED PORT ERROR!');
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
            console.error('POST ERROR');
        });
    };
    // POST PENDING TASK
    ApiService.prototype.pendingTask = function (id) {
        return this.http.post(this.ROOT_URL + 'pendingtask/', { id: id }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.error('POST ERROR');
        });
    };
    // POST CANCEL TASK
    ApiService.prototype.cancelTask = function (id, action) {
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { id: id, action: action }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.error('POST ERROR');
        });
    };
    // CLEAR DATABASE DATA
    ApiService.prototype.clearDatabase = function (action) {
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { action: action }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.error('POST ERROR');
        });
    };
    // SAVE DATA (CSV FILE)
    ApiService.prototype.saveData_Connectionhistory = function (type) {
        return this.http.post(this.ROOT_URL + 'connectionhistorys/', { type: type }, this.options).toPromise().then(function (response) {
            console.log(response._body);
            return response;
        }).catch(function () {
            console.error('POST ERROR');
        });
    };
    // downloadFile() {
    //   let i = {'id': '1'};
    //   const api = `http://127.0.0.1:8000/connectionhistorys/?type=connecthistorys`;
    //   const fileName = `connection_log.csv`;
    //   this.http.get(api, { responseType: ResponseContentType.Blob })
    //     .subscribe((response: any) => {
    //       // FileSaver.saveAs(response.blob(), fileName);
    //     });
    // }
    // TEST DOWLOAD (CSV FILE)
    ApiService.prototype.downloadFile = function () {
        var path = "connectionhistorys/?type=connecthistorys";
        return this.http.get(this.ROOT_URL + path, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob })
            .subscribe(function (res) {
            var blob = res.blob();
            console.log(res);
            var filename = 'connection_log.json';
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, filename);
        });
    };
    // CREATE CONNECTION IN CONNECTION TABLE
    ApiService.prototype.create_connection_in_database = function (east, west, action) {
        return this.http.post(this.ROOT_URL + 'connections/', { east: east, west: west, action: action }, this.options).toPromise().then(function (response) {
            response = JSON.parse(response._body);
            if (response.status === 'error') {
                alert('status: ' + response.status + ', error_code: ' + response.error);
            }
            else {
                alert('status: ' + response.status + ' east: ' + response.east + ' west: ' + response.west);
            }
            return (response);
        }).catch(function () {
            console.error('POST TESTING CONNECTION ERROR!');
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
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

/***/ "../../../../../src/app/testing-mode/testing-mode.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN MAIN-CONTAINER -->\n<div class=\"main-container\">\n  <!-- BEGIN TAB-GROUP -->\n  <md-tab-group>\n    <!-- BEGIN CONNECTION-TAB -->\n    <md-tab label=\"Connection\">\n      <!-- BEGIN CREATE CONNECTION -->\n      <md-expansion-panel>\n        <md-expansion-panel-header>\n          <md-panel-title>\n            Create connection in database\n          </md-panel-title>\n          <md-panel-description>\n            Type East port and West port\n          </md-panel-description>\n        </md-expansion-panel-header>\n\n        <md-form-field>\n          <input mdInput id=\"east_port_input\" placeholder=\"East port\" value=\"east_port_number\" [(ngModel)]=\"east_port_number\" minlength=\"1\" maxlength=\"3\" pattern=\"[0-9]{1,3}\">\n        </md-form-field>\n\n        <md-form-field>\n          <input mdInput id=\"west_port_input\" placeholder=\"West port\" value=\"west_port_number\" [(ngModel)]=\"west_port_number\" minlength=\"1\" maxlength=\"3\" pattern=\"[0-9]{1,3}\">\n        </md-form-field>\n\n        <md-action-row>\n          <button md-button color=\"primary\" (click)=\"create_connection()\">Send Data</button>\n        </md-action-row>\n      </md-expansion-panel>\n      <!-- END CREATE CONNECTION -->\n    </md-tab>\n    <!-- END CONNECTION-TAB -->\n    <!-- BEGIN SOME FUNCTION -->\n    <md-tab label=\"Some function in future\">Some test function</md-tab>\n    <!-- END SOME FUNCTION -->\n  </md-tab-group>\n  <!-- END TAB-GROUP -->\n</div>\n<!-- END MAIN-CONTAINER -->"

/***/ }),

/***/ "../../../../../src/app/testing-mode/testing-mode.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%;\n  height: 94%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testing-mode/testing-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var TestingModeComponent = (function () {
    function TestingModeComponent(http, ApiService) {
        this.http = http;
        this.ApiService = ApiService;
    }
    TestingModeComponent.prototype.ngOnInit = function () {
    };
    TestingModeComponent.prototype.create_connection = function () {
        if (this.east_port_number && this.west_port_number && this.east_port_number[0] !== '0' && this.west_port_number[0] !== '0'
            && !document.getElementById('east_port_input').classList.contains('ng-invalid')
            && !document.getElementById('west_port_input').classList.contains('ng-invalid')) {
            this.ApiService.create_connection_in_database(this.east_port_number, this.west_port_number, 'test_connect').then(function (data) {
                console.log(data);
            });
        }
        else {
            alert('error input !');
            console.log('error input !');
        }
    };
    return TestingModeComponent;
}());
TestingModeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testing-mode',
        template: __webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testing-mode/testing-mode.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
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