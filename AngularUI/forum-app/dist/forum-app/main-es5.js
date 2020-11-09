(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+/a8":
    /*!********************************************************!*\
      !*** ./src/app/forum/userpanel/userpanel.component.ts ***!
      \********************************************************/

    /*! exports provided: UserpanelComponent */

    /***/
    function a8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserpanelComponent", function () {
        return UserpanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var src_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/user/user.service */
      "L8Nd");
      /* harmony import */


      var src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/request/ws.service */
      "kse7");
      /* harmony import */


      var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/auth/auth.service */
      "ZETX");

      var UserpanelComponent = /*#__PURE__*/function () {
        function UserpanelComponent(userService, websocket, authService) {
          _classCallCheck(this, UserpanelComponent);

          this.userService = userService;
          this.websocket = websocket;
          this.authService = authService;
        }

        _createClass(UserpanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.myIdentity.subscribe(function (identity) {
              _this.identity = identity;
              console.log("MY IDENITYTYYYYYYYYYYYYYYYYYYYYYY");
              console.log(identity);
            });
            this.websocket.isConnected.subscribe(function (connect) {
              _this.isConnected = connect;
              _this.color = connect ? "text-green-900" : "text-red-900";
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.logoutUser();

                    case 2:
                      window.location.reload();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return UserpanelComponent;
      }();

      UserpanelComponent.ɵfac = function UserpanelComponent_Factory(t) {
        return new (t || UserpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_4__["WsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      UserpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UserpanelComponent,
        selectors: [["app-userpanel"]],
        viewQuery: function UserpanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          }
        },
        decls: 16,
        vars: 6,
        consts: [[1, "bg-gray-850", "px-3", "py-2", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["href", "#"], ["alt", "avatar", 1, "w-8", "h-8", "rounded-full", 3, "src"], [1, "text-xs", "ml-2"], [1, "text-white"], [1, "text-gray-500", "text-xxs"], [1, "flex", "items-center", "text-gray-500"], ["fill", "currentColor", "width", "30", "height", "30", "viewBox", "0 0 30 30", 1, "w-5", "h-5"], ["d", "M17,1h-2c-0.552,0-1,0.447-1,1v16.992h4V2C18,1.447,17.553,1,17,1z M11,7H9C8.448,7,8,7.447,8,8v10.992h4V8\n                C12,7.447,11.553,7,11,7z M5,13H3c-0.552,0-1,0.447-1,1v4.992h4V14C6,13.447,5.553,13,5,13z"], [1, "ml-3", "hover:text-white", 3, "click"], ["d", "M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z"]],
        template: function UserpanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserpanelComponent_Template_a_click_13_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.identity == null ? null : ctx.identity.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.identity == null ? null : ctx.identity.pseudo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.identity == null ? null : ctx.identity.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ml-3 ", ctx.color, " hover:text-white");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL3VzZXJwYW5lbC91c2VycGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserpanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-userpanel',
            templateUrl: './userpanel.component.html',
            styleUrls: ['./userpanel.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_4__["WsService"]
          }, {
            type: src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, {
          modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! H:\Documents\Scolaire\ProjectWebSem1Master1MIAGE\AngularUI\forum-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0G/O":
    /*!*********************************************************!*\
      !*** ./src/app/forum/forumsearch/forumsearch.module.ts ***!
      \*********************************************************/

    /*! exports provided: ForumsearchModule */

    /***/
    function GO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumsearchModule", function () {
        return ForumsearchModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _boardsearch_boardsearch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./boardsearch/boardsearch.component */
      "Ijyr");
      /* harmony import */


      var _boardcreate_boardcreate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./boardcreate/boardcreate.component */
      "F7XQ");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _forumsearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forumsearch.component */
      "Qto4");
      /* harmony import */


      var _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../userpanel/userpanel.module */
      "Ab3J");
      /* harmony import */


      var _boardsearch_forumsearchitem_forumsearchitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./boardsearch/forumsearchitem/forumsearchitem.component */
      "FRHn");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-file-uploader */
      "wn2B");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");

      var ForumsearchModule = function ForumsearchModule() {
        _classCallCheck(this, ForumsearchModule);
      };

      ForumsearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ForumsearchModule
      });
      ForumsearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ForumsearchModule_Factory(t) {
          return new (t || ForumsearchModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForumsearchModule, {
          declarations: [_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__["ForumsearchComponent"], _boardsearch_boardsearch_component__WEBPACK_IMPORTED_MODULE_2__["BoardsearchComponent"], _boardcreate_boardcreate_component__WEBPACK_IMPORTED_MODULE_3__["BoardcreateComponent"], _boardsearch_forumsearchitem_forumsearchitem_component__WEBPACK_IMPORTED_MODULE_7__["ForumsearchitemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
          exports: [_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__["ForumsearchComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsearchModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__["ForumsearchComponent"], _boardsearch_boardsearch_component__WEBPACK_IMPORTED_MODULE_2__["BoardsearchComponent"], _boardcreate_boardcreate_component__WEBPACK_IMPORTED_MODULE_3__["BoardcreateComponent"], _boardsearch_forumsearchitem_forumsearchitem_component__WEBPACK_IMPORTED_MODULE_7__["ForumsearchitemComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
            exports: [_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__["ForumsearchComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "2sdH":
    /*!*******************************************!*\
      !*** ./src/app/forum/auth/auth.module.ts ***!
      \*******************************************/

    /*! exports provided: AuthModule */

    /***/
    function sdH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.component */
      "7bXq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./auth-routing.module */
      "P3Mh"); //Module MDB


      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule,
        bootstrap: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]]
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]],
          imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]],
            imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"]],
            bootstrap: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5920":
    /*!***************************************!*\
      !*** ./src/app/forum/forum.module.ts ***!
      \***************************************/

    /*! exports provided: ForumModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumModule", function () {
        return ForumModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forum.component */
      "m5Ef");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_services_request_AuthHttpInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/request/AuthHttpInterceptor */
      "sqQX");
      /* harmony import */


      var node_modules_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! node_modules/@angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forumsearch_forumsearch_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forumsearch/forumsearch.module */
      "0G/O");
      /* harmony import */


      var _forumpanel_forumpanel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forumpanel/forumpanel.module */
      "6OSu");

      var ForumModule = function ForumModule() {
        _classCallCheck(this, ForumModule);
      };

      ForumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ForumModule
      });
      ForumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ForumModule_Factory(t) {
          return new (t || ForumModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: src_services_request_AuthHttpInterceptor__WEBPACK_IMPORTED_MODULE_3__["AuthHttpInterceptor"],
          multi: true
        }],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], node_modules_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _forumsearch_forumsearch_module__WEBPACK_IMPORTED_MODULE_6__["ForumsearchModule"], _forumpanel_forumpanel_module__WEBPACK_IMPORTED_MODULE_7__["ForumpanelModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForumModule, {
          declarations: [_forum_component__WEBPACK_IMPORTED_MODULE_1__["ForumComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], node_modules_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _forumsearch_forumsearch_module__WEBPACK_IMPORTED_MODULE_6__["ForumsearchModule"], _forumpanel_forumpanel_module__WEBPACK_IMPORTED_MODULE_7__["ForumpanelModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_forum_component__WEBPACK_IMPORTED_MODULE_1__["ForumComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], node_modules_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _forumsearch_forumsearch_module__WEBPACK_IMPORTED_MODULE_6__["ForumsearchModule"], _forumpanel_forumpanel_module__WEBPACK_IMPORTED_MODULE_7__["ForumpanelModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: src_services_request_AuthHttpInterceptor__WEBPACK_IMPORTED_MODULE_3__["AuthHttpInterceptor"],
              multi: true
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "6OSu":
    /*!*******************************************************!*\
      !*** ./src/app/forum/forumpanel/forumpanel.module.ts ***!
      \*******************************************************/

    /*! exports provided: ForumpanelModule */

    /***/
    function OSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumpanelModule", function () {
        return ForumpanelModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forumpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forumpanel.component */
      "sjqV");
      /* harmony import */


      var _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./channelpanel/channelpanel.component */
      "qarh");
      /* harmony import */


      var _channelpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./channelpanel/useritem/useritem.component */
      "fssd");
      /* harmony import */


      var _channelpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./channelpanel/messageitem/messageitem.component */
      "HJb8");
      /* harmony import */


      var _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../userpanel/userpanel.module */
      "Ab3J");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./channelitem/channelitem.component */
      "omki");

      var ForumpanelModule = function ForumpanelModule() {
        _classCallCheck(this, ForumpanelModule);
      };

      ForumpanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ForumpanelModule
      });
      ForumpanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ForumpanelModule_Factory(t) {
          return new (t || ForumpanelModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForumpanelModule, {
          declarations: [_forumpanel_component__WEBPACK_IMPORTED_MODULE_2__["ForumpanelComponent"], _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_3__["ChannelpanelComponent"], _channelpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_4__["UseritemComponent"], _channelpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_5__["MessageitemComponent"], _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_9__["ChannelitemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
          exports: [_forumpanel_component__WEBPACK_IMPORTED_MODULE_2__["ForumpanelComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumpanelModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_forumpanel_component__WEBPACK_IMPORTED_MODULE_2__["ForumpanelComponent"], _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_3__["ChannelpanelComponent"], _channelpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_4__["UseritemComponent"], _channelpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_5__["MessageitemComponent"], _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_9__["ChannelitemComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _userpanel_userpanel_module__WEBPACK_IMPORTED_MODULE_6__["UserpanelModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
            exports: [_forumpanel_component__WEBPACK_IMPORTED_MODULE_2__["ForumpanelComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "7bXq":
    /*!**********************************************!*\
      !*** ./src/app/forum/auth/auth.component.ts ***!
      \**********************************************/

    /*! exports provided: AuthComponent */

    /***/
    function bXq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/models/views/auth/AuthView */
      "Njtn");
      /* harmony import */


      var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/auth/auth.service */
      "ZETX");
      /* harmony import */


      var src_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/user/user.service */
      "L8Nd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/notification/notification.service */
      "E56+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      var _c0 = ["fileUpload"];

      function AuthComponent_img_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.file.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var AuthState;

      (function (AuthState) {
        AuthState[AuthState["LOGIN"] = 0] = "LOGIN";
        AuthState[AuthState["REGISTER"] = 1] = "REGISTER";
      })(AuthState || (AuthState = {}));

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(auth, user, router, formBuilder, alert) {
          _classCallCheck(this, AuthComponent);

          this.auth = auth;
          this.user = user;
          this.router = router;
          this.formBuilder = formBuilder;
          this.alert = alert;
          this.registerData = new src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__["RegisterView"]();
          this.loginData = new src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__["LoginView"]();
          this.state = AuthState.REGISTER;
          this.isLoading = false;
          this.registerForm = formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pseudo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.loginForm = formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClickLogin",
          value: function onClickLogin() {
            this.state = AuthState.LOGIN;
          }
        }, {
          key: "onClickRegister",
          value: function onClickRegister() {
            this.state = AuthState.REGISTER;
          }
        }, {
          key: "onSubmitRegister",
          value: function onSubmitRegister(register) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      register.image = this.imgURL;
                      console.log(register);
                      _context2.next = 5;
                      return this.user.registerUser(register);

                    case 5:
                      user = _context2.sent;

                      if (user != undefined && user._id != undefined) {
                        this.alert.showSuccess("Success register", "Success");
                        this.state = AuthState.LOGIN;
                        this.registerForm.reset();
                      } else {
                        this.alert.showError("Error on register", "Error");
                      }

                      this.isLoading = false;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onSubmitLogin",
          value: function onSubmitLogin(login) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loginResult;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = true;
                      _context3.next = 3;
                      return this.auth.loginUser(login);

                    case 3:
                      loginResult = _context3.sent;
                      if (loginResult == undefined) this.alert.showError("Error on login : " + loginResult.message, "Error");else if (loginResult.jwtToken == undefined || loginResult.refreshToken == undefined) this.alert.showError("Error on login : " + loginResult.message, "Error");else {
                        this.alert.showSuccess("Success login - redirect", "Success");
                        this.loginForm.reset();
                        this.router.navigate(['/']);
                      }
                      this.isLoading = false;

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isRegister",
          value: function isRegister() {
            return this.state == AuthState.REGISTER;
          }
        }, {
          key: "isLogin",
          value: function isLogin() {
            return this.state == AuthState.LOGIN;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            this.fileUpload.nativeElement.value = '';
            this.uploadFile(this.file);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            var formData = new FormData();
            formData.append('file', file);
            console.log(file);
          }
        }, {
          key: "onClick",
          value: function onClick() {
            var _this2 = this;

            var fileUpload = this.fileUpload.nativeElement;

            fileUpload.onchange = function () {
              _this2.file = fileUpload.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(_this2.file);

              reader.onload = function (_event) {
                _this2.imgURL = reader.result;
                console.log(_this2.imgURL);
              };

              _this2.uploadFiles();
            };

            fileUpload.click();
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        viewQuery: function AuthComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        decls: 71,
        vars: 34,
        consts: [[1, "form"], [1, "tab-group"], [1, "tab"], [3, "click"], [1, "tab-content"], ["id", "signup"], [3, "formGroup", "ngSubmit"], [1, "top-row"], [1, "field-wrap"], [1, "req"], ["type", "text", "required", "", "autocomplete", "off", "formControlName", "firstName", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "autocomplete", "off", "formControlName", "lastName", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "autocomplete", "off", "formControlName", "pseudo", 3, "ngModel", "ngModelChange"], ["type", "email", "required", "", "autocomplete", "off", "formControlName", "email", 3, "ngModel", "ngModelChange"], ["type", "password", "required", "", "autocomplete", "off", "formControlName", "password", 3, "ngModel", "ngModelChange"], ["class", "w-12 h-12 rounded-full mx-auto", 3, "src", "alt", 4, "ngIf"], ["type", "button", 1, "md:w-full", "bg-gray-900", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "hover:border-b-2", "border-gray-500", "hover:border-gray-100", "rounded-full", 3, "click"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], ["type", "submit", 1, "button", "button-block"], ["id", "login"], ["mode", "indeterminate"], [1, "w-12", "h-12", "rounded-full", "mx-auto", 3, "src", "alt"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_a_click_3_listener() {
              return ctx.onClickRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_a_click_6_listener() {
              return ctx.onClickLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign Up for Free");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_12_listener() {
              return ctx.onSubmitRegister(ctx.registerForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.registerData.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.registerData.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pseudo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.registerData.pseudo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_37_listener($event) {
              return ctx.registerData.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Set A Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.registerData.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AuthComponent_img_45_Template, 1, 2, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_46_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Add a photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Welcome Back!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_55_listener() {
              return ctx.onSubmitLogin(ctx.loginForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_61_listener($event) {
              return ctx.loginData.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_67_listener($event) {
              return ctx.loginData.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "mat-progress-bar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isRegister());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isLogin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.isRegister());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.registerData.firstName != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerData.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.registerData.lastName != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerData.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.registerData.pseudo != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerData.pseudo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.registerData.email != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.registerData.password != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerData.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imgURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.isLogin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.loginData.email != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.loginData.password != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]],
        styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1ab188;\n  transition: .5s ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #179b77;\n}\n\n.form[_ngcontent-%COMP%] {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n}\n\n.tab-group[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.tab-group[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba(160, 179, 176, 0.25);\n  color: #a0b3b0;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: .5s ease;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #179b77;\n  color: #ffffff;\n}\n\n.tab-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #1ab188;\n  color: #ffffff;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.6s linear 0.4s;\n}\n\n.tab-content[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.6s linear 0.4s;\n  display: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: white;\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\n\nlabel[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #1ab188;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\n\nlabel.active[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color .25s ease, box-shadow .25s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: #1ab188;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border: 2px solid #a0b3b0;\n  resize: vertical;\n}\n\n.field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.top-row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #1ab188;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  background: #179b77;\n}\n\n.button-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQTtFQUNFLHNCQUFzQjtBQXZCeEI7O0FBMEJBO0VBQ0Usa0JBQWtCO0FBdkJwQjs7QUEwQkE7RUFDRSxtQkFqQ2U7RUFrQ2Ysd0NBQXdDO0FBdkIxQzs7QUEwQkE7RUFDRSxxQkFBb0I7RUFDcEIsY0FqQ1k7RUFrQ1osb0JBQW1CO0FBdkJyQjs7QUFvQkE7RUFLSSxjQWhDd0I7QUFXNUI7O0FBeUJBO0VBQ0UsaUNBN0NlO0VBOENmLGFBQWE7RUFDYixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkE3Qk07RUE4Qk4sZ0RBbERlO0FBNEJqQjs7QUF5QkE7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxrQkFBaUI7QUF0Qm5COztBQW1CQTtFQUtJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQXBCZjs7QUFhQTtFQVVJLGNBQWE7RUFDYixxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLHFDQXhEZ0I7RUF5RGhCLGNBekRnQjtFQTBEaEIsZUFBYztFQUNkLFdBQVU7RUFDVixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxvQkFBbUI7QUFuQnZCOztBQURBO0VBc0JNLG1CQW5Fc0I7RUFvRXRCLGNBMUVTO0FBeURmOztBQU5BO0VBMkJJLG1CQTVFVTtFQTZFVixjQS9FVztBQThEZjs7QUFxQkE7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBbEJsQzs7QUFnQkE7RUFJSSxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFoQmpCOztBQW9CQTtFQUNFLGtCQUFpQjtFQUNqQixjQS9GYTtFQWdHYixnQkFwRlE7RUFxRlIsZ0JBQWU7QUFqQmpCOztBQW9CQTtFQUNFLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsVUFBUztFQUNULFlBQVk7RUFDWiwwQkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixlQUFjO0FBakJoQjs7QUFTQTtFQVVJLFdBQVU7RUFDVixjQTdHVTtBQThGZDs7QUFtQkE7RUFDRSwyQkFBMEI7RUFDMUIsU0FBUTtFQUNSLGVBQWM7QUFoQmhCOztBQWFBO0VBS0ksVUFBUztBQWRiOztBQXNCQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIseUJBaElrQjtFQWlJbEIsY0F6SWE7RUEwSWIsZ0JBQWU7RUFDZix3REFBdUQ7QUFuQnpEOztBQVFBO0VBYUksVUFBUztFQUNULHFCQTVJVTtBQTJIZDs7QUFxQkE7RUFDRSx5QkEzSWtCO0VBNElsQixnQkFBZ0I7QUFsQmxCOztBQXFCQTtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0I7QUFsQnBCOztBQXFCQTtFQUVJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQW5CZjs7QUFlQTtFQU9JLFdBQVU7RUFDVixVQUFTO0VBQ1QsZ0JBQWU7QUFsQm5COztBQVNBO0VBV00sU0FBUTtBQWhCZDs7QUFxQkE7RUFDRSxTQUFRO0VBQ1IsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGVBQWM7RUFDZCxnQkFsS1E7RUFtS1IseUJBQXdCO0VBQ3hCLG9CQUFtQjtFQUNuQixtQkFuTFk7RUFvTFosY0F0TGE7RUF1TGIseUJBQXdCO0VBQ3hCLHdCQUF3QjtBQWxCMUI7O0FBTUE7RUFjSSxtQkFwTHdCO0FBb0s1Qjs7QUFvQkE7RUFDRSxjQUFhO0VBQ2IsV0FBVTtBQWpCWjs7QUFvQkE7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0FBakJsQiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib2R5LWJnOiAjYzFiZGJhO1xuXG4kZm9ybS1iZzogIzEzMjMyZjtcblxuJHdoaXRlOiAjZmZmZmZmO1xuXG4kbWFpbjogIzFhYjE4ODtcblxuJG1haW4tbGlnaHQ6IGxpZ2h0ZW4oJG1haW4sNSUpO1xuXG4kbWFpbi1kYXJrOiBkYXJrZW4oJG1haW4sNSUpO1xuXG4kZ3JheS1saWdodDogI2EwYjNiMDtcblxuJGdyYXk6ICNkZGQ7XG5cbiR0aGluOiAzMDA7XG5cbiRub3JtYWw6IDQwMDtcblxuJGJvbGQ6IDYwMDtcblxuJGJyOiA0cHg7XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6JGJvZHktYmc7XG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgY29sb3I6JG1haW47XG4gIHRyYW5zaXRpb246LjVzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiRtYWluLWRhcms7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kOnJnYmEoJGZvcm0tYmcsLjkpO1xuICBwYWRkaW5nOiA0MHB4O1xuICBtYXgtd2lkdGg6NjAwcHg7XG4gIG1hcmdpbjo0MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6JGJyO1xuICBib3gtc2hhZG93OjAgNHB4IDEwcHggNHB4IHJnYmEoJGZvcm0tYmcsLjMpO1xufVxuXG4udGFiLWdyb3VwIHtcbiAgbGlzdC1zdHlsZTpub25lO1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowIDAgNDBweCAwO1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIGxpIGEge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgcGFkZGluZzoxNXB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgkZ3JheS1saWdodCwuMjUpO1xuICAgIGNvbG9yOiRncmF5LWxpZ2h0O1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6NTAlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHRyYW5zaXRpb246LjVzIGVhc2U7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiRtYWluLWRhcms7XG4gICAgICBjb2xvcjokd2hpdGU7XG4gICAgfVxuICB9XG4gIC5hY3RpdmUgYSB7XG4gICAgYmFja2dyb3VuZDokbWFpbjtcbiAgICBjb2xvcjokd2hpdGU7XG4gIH1cbn1cblxuLnRhYi1jb250ZW50IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgbGluZWFyIDAuNHM7XG4gIC5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgbGluZWFyIDAuNHM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBjb2xvcjokd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiR0aGluO1xuICBtYXJnaW46MCAwIDQwcHg7XG59XG5cbmxhYmVsIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDZweCk7XG4gIGxlZnQ6MTNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOmFsbCAwLjI1cyBlYXNlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZToyMnB4O1xuICAucmVxIHtcbiAgICBtYXJnaW46MnB4O1xuICAgIGNvbG9yOiRtYWluO1xuICB9XG59XG5cbmxhYmVsLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwcHgpO1xuICBsZWZ0OjJweDtcbiAgZm9udC1zaXplOjE0cHg7XG4gIC5yZXEge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxufVxuXG5sYWJlbC5oaWdobGlnaHQge1xuICAvL2NvbG9yOiR3aGl0ZTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOjIycHg7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBwYWRkaW5nOjVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOm5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcbiAgYm9yZGVyOjFweCBzb2xpZCAkZ3JheS1saWdodDtcbiAgY29sb3I6JHdoaXRlO1xuICBib3JkZXItcmFkaXVzOjA7XG4gIHRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yNXMgZWFzZSwgYm94LXNoYWRvdyAuMjVzIGVhc2U7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6MDtcbiAgICBib3JkZXItY29sb3I6JG1haW47XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6MnB4IHNvbGlkICRncmF5LWxpZ2h0O1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uZmllbGQtd3JhcCB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG59XG5cbi50b3Atcm93IHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICA+IGRpdiB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICB3aWR0aDo0OCU7XG4gICAgbWFyZ2luLXJpZ2h0OjQlO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46MDtcbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjowO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJvcmRlci1yYWRpdXM6MDtcbiAgcGFkZGluZzoxNXB4IDA7XG4gIGZvbnQtc2l6ZToycmVtO1xuICBmb250LXdlaWdodDokYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzouMWVtO1xuICBiYWNrZ3JvdW5kOiRtYWluO1xuICBjb2xvcjokd2hpdGU7XG4gIHRyYW5zaXRpb246YWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiRtYWluLWRhcms7XG4gIH1cbn1cblxuLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOi0yMHB4O1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: src_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
          }];
        }, {
          fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileUpload", {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ab3J":
    /*!*****************************************************!*\
      !*** ./src/app/forum/userpanel/userpanel.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserpanelModule */

    /***/
    function Ab3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserpanelModule", function () {
        return UserpanelModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _userpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./userpanel.component */
      "+/a8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserpanelModule = function UserpanelModule() {
        _classCallCheck(this, UserpanelModule);
      };

      UserpanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserpanelModule
      });
      UserpanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserpanelModule_Factory(t) {
          return new (t || UserpanelModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserpanelModule, {
          declarations: [_userpanel_component__WEBPACK_IMPORTED_MODULE_2__["UserpanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_userpanel_component__WEBPACK_IMPORTED_MODULE_2__["UserpanelComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpanelModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_userpanel_component__WEBPACK_IMPORTED_MODULE_2__["UserpanelComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [_userpanel_component__WEBPACK_IMPORTED_MODULE_2__["UserpanelComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E56+":
    /*!***********************************************************!*\
      !*** ./src/services/notification/notification.service.ts ***!
      \***********************************************************/

    /*! exports provided: NotificationService */

    /***/
    function E56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(toastr) {
          _classCallCheck(this, NotificationService);

          this.toastr = toastr;
        }

        _createClass(NotificationService, [{
          key: "showSuccess",
          value: function showSuccess(message, title) {
            this.toastr.success(message, title);
          }
        }, {
          key: "showError",
          value: function showError(message, title) {
            this.toastr.error(message, title);
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "F7XQ":
    /*!************************************************************************!*\
      !*** ./src/app/forum/forumsearch/boardcreate/boardcreate.component.ts ***!
      \************************************************************************/

    /*! exports provided: BoardcreateComponent */

    /***/
    function F7XQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardcreateComponent", function () {
        return BoardcreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_models_forum_ForumForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/models/forum/ForumForm */
      "bjBh");
      /* harmony import */


      var src_models_forum_ForumView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/models/forum/ForumView */
      "aUKl");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["fileUpload"];

      function BoardcreateComponent_img_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 44);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.file.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var BoardcreateComponent = /*#__PURE__*/function () {
        function BoardcreateComponent(formBuilder, forumService) {
          _classCallCheck(this, BoardcreateComponent);

          this.formBuilder = formBuilder;
          this.forumService = forumService;
          this.forum = new src_models_forum_ForumView__WEBPACK_IMPORTED_MODULE_4__["default"]();
          this.createForm = formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            image: ['']
          });
          this.forumForm = new src_models_forum_ForumForm__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }

        _createClass(BoardcreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            this.fileUpload.nativeElement.value = '';
            this.uploadFile(this.file);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            var formData = new FormData();
            formData.append('file', file);
            console.log(file);
          }
        }, {
          key: "onClick",
          value: function onClick() {
            var _this3 = this;

            var fileUpload = this.fileUpload.nativeElement;

            fileUpload.onchange = function () {
              _this3.file = fileUpload.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(_this3.file);

              reader.onload = function (_event) {
                _this3.imgURL = reader.result;
                console.log(_this3.imgURL);
              };

              _this3.uploadFiles();
            };

            fileUpload.click();
          }
        }, {
          key: "onSubmitRegister",
          value: function onSubmitRegister() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.forumForm.name = this.createForm.controls['name'].value;
                      this.forumForm.description = this.createForm.controls['description'].value;
                      this.forumForm.image = this.imgURL;
                      this.forumService.createNewForum(this.forumForm);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return BoardcreateComponent;
      }();

      BoardcreateComponent.ɵfac = function BoardcreateComponent_Factory(t) {
        return new (t || BoardcreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_5__["ForumService"]));
      };

      BoardcreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BoardcreateComponent,
        selectors: [["app-boardcreate"]],
        viewQuery: function BoardcreateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        decls: 59,
        vars: 2,
        consts: [[1, "flex", "text-white", "h-12"], [1, "flex-1", "bg-gray-800", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-4"], [1, "flex", "items-center"], [1, "text-gray-500", "text-2xl"], [1, "ml-2", "text-sm", "text-white"], ["href", "#", 1, "ml-4"], ["action", "#", 1, "relative"], ["type", "text", "placeholder", "Search", 1, "rounded", "bg-gray-900", "text-gray-200", "text-xs", "px-2", "py-1"], [1, "absolute", "right-0", "top-0", "mr-1", 2, "top", "6px"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "w-4", "h-4", "text-gray-500", "hover:text-gray-200"], ["d", "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", 1, "heroicon-ui"], [1, "flex-1", "flex", "justify-between", "overflow-y-hidden", "pr-8"], [1, "bg-gray-700", "flex-1", "flex", "flex-col", "justify-between"], [1, "chat", "text-sm", "text-gray-400"], [3, "formGroup", "ngSubmit"], [1, "bg-gray-800", "shadow-md", "rounded", "px-8", "pt-6", "pb-8", "mb-4", "flex", "flex-col"], [1, "-mx-3", "md:flex", "mb-6"], [1, "md:w-full", "px-3"], ["for", "forum-name", 1, "uppercase", "tracking-wide", "text-white", "text-xs", "font-bold", "mb-2"], ["formControlName", "name", "required", "", "id", "forum-name", "type", "text", "placeholder", "Name...", 1, "w-full", "bg-gray-200", "text-black", "border", "border-gray-200", "rounded", "py-3", "px-4", "mb-3"], ["for", "forum-desc", 1, "uppercase", "tracking-wide", "text-white", "text-xs", "font-bold", "mb-2"], ["formControlName", "description", "id", "forum-desc", "type", "text", "placeholder", "Description...", 1, "w-full", "bg-gray-200", "text-black", "border", "border-gray-200", "rounded", "py-3", "px-4", "mb-3"], [1, "-mx-3", "md:flex", "mt-2"], ["class", "w-12 h-12 rounded-full mx-auto", 3, "src", "alt", 4, "ngIf"], ["type", "button", 1, "md:w-full", "bg-gray-900", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "hover:border-b-2", "border-gray-500", "hover:border-gray-100", "rounded-full", 3, "click"], ["formControlName", "image", "type", "file", "id", "fileUpload", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], ["type", "submit", 1, "md:w-full", "bg-gray-900", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "hover:border-b-2", "border-gray-500", "hover:border-gray-100", "rounded-full"], [1, "bg-gray-800", "py-4", "flex", "items-center"], [1, "px-2", "py-2", "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white", "border-r", "border-gray-600"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["data-name", "Layer 2"], ["data-name", "plus-circle"], ["width", "24", "height", "24", "opacity", "0"], ["d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"], ["fill", "currentColor", "viewBox", "0 0 512 512", 1, "w-6", "h-6"], ["d", "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["id", "a", "d", "M24 24H0V0h24v24z"], ["id", "b"], [0, "xlink", "href", "#a", "overflow", "visible"], ["d", "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z", "clip-path", "url(#b)"], ["fill", "currentColor", "viewBox", "0 0 496 512", 1, "w-6", "h-6"], ["d", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"], [1, "w-12", "h-12", "rounded-full", "mx-auto", 3, "src", "alt"]],
        template: function BoardcreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BoardcreateComponent_Template_form_ngSubmit_16_listener() {
              return ctx.onSubmitRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Forum name* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Forum description* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, BoardcreateComponent_img_29_Template, 1, 2, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardcreateComponent_Template_button_click_31_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Add a photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Create forum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "g", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "g", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "rect", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "svg", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "path", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "svg", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "clipPath", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "use", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "path", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "svg", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "path", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imgURL);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.chat[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1zZWFyY2gvYm9hcmRjcmVhdGUvYm9hcmRjcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQTNCOztBQUdBO0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUQzQjs7QUFJQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFEM0I7O0FBSUE7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBRjNCOztBQUtBO0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUgzQjs7QUFNQTtFQUVFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxZQUFXO0FBSmIiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS9mb3J1bXNlYXJjaC9ib2FyZGNyZWF0ZS9ib2FyZGNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLnNpZGViYXItdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbi5jaGF0IHtcbiAgbWFyZ2luOmF1dG87XG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoardcreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-boardcreate',
            templateUrl: './boardcreate.component.html',
            styleUrls: ['./boardcreate.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_5__["ForumService"]
          }];
        }, {
          fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileUpload", {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "FRHn":
    /*!********************************************************************************************!*\
      !*** ./src/app/forum/forumsearch/boardsearch/forumsearchitem/forumsearchitem.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ForumsearchitemComponent */

    /***/
    function FRHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumsearchitemComponent", function () {
        return ForumsearchitemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");

      var ForumsearchitemComponent = /*#__PURE__*/function () {
        function ForumsearchitemComponent(forumService) {
          _classCallCheck(this, ForumsearchitemComponent);

          this.forumService = forumService;
        }

        _createClass(ForumsearchitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "subscribe",
          value: function subscribe() {
            console.log("THIS ITEM : ");
            console.log(this.item);
            this.forumService.subscribeToAForum(this.item);
          }
        }]);

        return ForumsearchitemComponent;
      }();

      ForumsearchitemComponent.ɵfac = function ForumsearchitemComponent_Factory(t) {
        return new (t || ForumsearchitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]));
      };

      ForumsearchitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForumsearchitemComponent,
        selectors: [["app-forumsearchitem"]],
        inputs: {
          item: "item"
        },
        decls: 22,
        vars: 5,
        consts: [[1, "rounded", "rounded-t-lg", "overflow-hidden", "shadow", "max-w-xs", "my-3", "flex-none"], ["src", "https://i.imgur.com/dYcYQ7E.png", 1, "w-full"], [1, "flex", "justify-center", "-mt-8"], [1, "rounded-full", "border-solid", "border-white", "border-2", "-mt-3", "w-16", "h-16", 3, "src"], [1, "text-center", "px-3", "pb-6", "pt-2"], [1, "text-black", "text-sm", "bold", "font-sans"], [1, "mt-2", "font-sans", "font-light", "text-grey-dark"], [1, "flex", "justify-center", "pb-3", "text-grey-dark"], [1, "text-center", "mr-3", "border-r", "pr-3"], [1, "text-center"], ["type", "button", 1, "md:w-full", "bg-gray-900", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "hover:border-b-2", "border-gray-500", "hover:border-gray-100", "rounded-full", 3, "click"]],
        template: function ForumsearchitemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumsearchitemComponent_Template_button_click_20_listener() {
              return ctx.subscribe();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.nbOnline);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.nbMember);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtc2VhcmNoL2JvYXJkc2VhcmNoL2ZvcnVtc2VhcmNoaXRlbS9mb3J1bXNlYXJjaGl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsearchitemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forumsearchitem',
            templateUrl: './forumsearchitem.component.html',
            styleUrls: ['./forumsearchitem.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "HJb8":
    /*!************************************************************************************!*\
      !*** ./src/app/forum/forumpanel/channelpanel/messageitem/messageitem.component.ts ***!
      \************************************************************************************/

    /*! exports provided: MessageitemComponent */

    /***/
    function HJb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageitemComponent", function () {
        return MessageitemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");

      var MessageitemComponent = /*#__PURE__*/function () {
        function MessageitemComponent(forumService) {
          _classCallCheck(this, MessageitemComponent);

          this.forumService = forumService;
        }

        _createClass(MessageitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            //setup string date
            if (this.message != undefined && this.message.timestamp != undefined) var date = new Date(this.message.timestamp);
            this.date = date.toLocaleDateString() + " " + date.toTimeString(); //search user of this message

            this.forumService.usersOfMyForumSelected.subscribe(function (users) {
              _this4.user = users.find(function (user) {
                return user.id == _this4.message.userId;
              });
            });
          }
        }]);

        return MessageitemComponent;
      }();

      MessageitemComponent.ɵfac = function MessageitemComponent_Factory(t) {
        return new (t || MessageitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]));
      };

      MessageitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageitemComponent,
        selectors: [["app-messageitem"]],
        inputs: {
          message: "message"
        },
        decls: 12,
        vars: 4,
        consts: [[1, "flex-none"], ["href", "#"], ["alt", "avatar", 1, "w-10", "h-10", "rounded-full", 3, "src"], [1, "ml-5"], ["href", "#", 1, "text-white", "hover:underline"], [1, "text-xs", "text-gray-600", "ml-1"]],
        template: function MessageitemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user == null ? null : ctx.user.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.pseudo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message == null ? null : ctx.message.value);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvY2hhbm5lbHBhbmVsL21lc3NhZ2VpdGVtL21lc3NhZ2VpdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageitemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-messageitem',
            templateUrl: './messageitem.component.html',
            styleUrls: ['./messageitem.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }];
        }, {
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ijyr":
    /*!************************************************************************!*\
      !*** ./src/app/forum/forumsearch/boardsearch/boardsearch.component.ts ***!
      \************************************************************************/

    /*! exports provided: BoardsearchComponent */

    /***/
    function Ijyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardsearchComponent", function () {
        return BoardsearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");
      /* harmony import */


      var src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/notification/notification.service */
      "E56+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _forumsearchitem_forumsearchitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forumsearchitem/forumsearchitem.component */
      "FRHn");

      function BoardsearchComponent_app_forumsearchitem_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-forumsearchitem", 16);
        }

        if (rf & 2) {
          var forum_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", forum_r1);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var BoardsearchComponent = /*#__PURE__*/function () {
        function BoardsearchComponent(forumService, notif) {
          _classCallCheck(this, BoardsearchComponent);

          this.forumService = forumService;
          this.notif = notif;
        }

        _createClass(BoardsearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      // this.forumsView = await this.forumService.getForums(this.forumsView);
                      this.forumService.searchForum.subscribe(function (data) {
                        _this5.forumsView = data;
                        console.log("DATA : ");
                        console.log(data);
                      });
                      this.forumService.loadSearchForum();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            console.log(event);
            this.forumService.OnSearchPaginitionChange(event.length, event.pageIndex, event.pageSize);
          }
        }]);

        return BoardsearchComponent;
      }();

      BoardsearchComponent.ɵfac = function BoardsearchComponent_Factory(t) {
        return new (t || BoardsearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]));
      };

      BoardsearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BoardsearchComponent,
        selectors: [["app-boardsearch"]],
        decls: 18,
        vars: 6,
        consts: [[1, "flex", "text-white", "h-12"], [1, "flex-1", "bg-gray-800", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-4"], [1, "flex", "items-center"], [1, "text-gray-500", "text-2xl"], [1, "ml-2", "text-sm", "text-white"], ["action", "#", 1, "relative"], ["type", "text", "placeholder", "Search", 1, "rounded", "bg-gray-900", "text-gray-200", "text-xs", "px-2", "py-1"], [1, "absolute", "right-0", "top-0", "mr-1", 2, "top", "6px"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "w-4", "h-4", "text-gray-500", "hover:text-gray-200"], ["d", "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", 1, "heroicon-ui"], [1, "flex-1", "flex", "justify-between", "overflow-y-hidden", "pr-8"], [1, "bg-gray-700", "flex-1", "flex", "flex-col", "justify-between"], [1, "chat", "flex", "flex-row", "flex-wrap", "text-sm", "text-gray-400", "overflow-y-auto"], ["class", "flex mx-6 my-3 py-4 border-t border-gray-600 ng-star-inserted", 3, "item", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "py-4", "flex", "items-center"], [1, "", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "flex", "mx-6", "my-3", "py-4", "border-t", "border-gray-600", "ng-star-inserted", 3, "item"]],
        template: function BoardsearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BoardsearchComponent_app_forumsearchitem_15_Template, 1, 1, "app-forumsearchitem", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function BoardsearchComponent_Template_mat_paginator_page_17_listener($event) {
              return ctx.onPageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.forumsView.forumSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.forumsView.totalItem)("pageSize", ctx.forumsView.nbItemPerPage)("pageIndex", ctx.forumsView.currentPage)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _forumsearchitem_forumsearchitem_component__WEBPACK_IMPORTED_MODULE_7__["ForumsearchitemComponent"]],
        styles: [".sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1zZWFyY2gvYm9hcmRzZWFyY2gvYm9hcmRzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQTNCOztBQUdBO0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUQzQjs7QUFJQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFEM0I7O0FBSUE7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBRjNCOztBQUtBO0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUgzQjs7QUFNQTtFQUVFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxXQUFXO0FBSmIiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS9mb3J1bXNlYXJjaC9ib2FyZHNlYXJjaC9ib2FyZHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLnNpZGViYXItdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbm1hdC1wYWdpbmF0b3J7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoardsearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-boardsearch',
            templateUrl: './boardsearch.component.html',
            styleUrls: ['./boardsearch.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]
          }, {
            type: src_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JztG":
    /*!*********************************************!*\
      !*** ./src/models/forum/RegisterChannel.ts ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function JztG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RegisterChannel;
      });

      var RegisterChannel = function RegisterChannel() {
        _classCallCheck(this, RegisterChannel);
      };
      /***/

    },

    /***/
    "L8Nd":
    /*!*******************************************!*\
      !*** ./src/services/user/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function L8Nd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/models/views/auth/AuthView */
      "Njtn");
      /* harmony import */


      var _request_RequestService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../request/RequestService */
      "M1i7");

      var MethodsAuth;

      (function (MethodsAuth) {
        MethodsAuth["IDENTITY"] = "identity";
      })(MethodsAuth || (MethodsAuth = {}));

      var UserService = /*#__PURE__*/function () {
        function UserService(req) {
          _classCallCheck(this, UserService);

          this.req = req;
          this.apiUrl = "http://localhost:7000/account";
          this._myIdentity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this.dataStore = {
            myIdentity: undefined
          }; // store our data in memory

          this.myIdentity = this._myIdentity.asObservable();
        }

        _createClass(UserService, [{
          key: "registerUser",
          value: function registerUser(register) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var data;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      data = new src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__["RegisterView"]();
                      data.firstName = register.firstName;
                      data.lastName = register.lastName;
                      data.email = register.email;
                      data.pseudo = register.pseudo; //TODO Register IMG

                      data.image = register.image;
                      data.password = register.password;
                      _context6.next = 9;
                      return this.req.getAddressIP();

                    case 9:
                      data.addressIP = _context6.sent;
                      return _context6.abrupt("return", this.req.executePost(this.apiUrl, data));

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "updateUser",
          value: function updateUser(account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.req.executePut(this.apiUrl, account));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onRemoveAuth",
          value: function onRemoveAuth() {
            this.dataStore.myIdentity = undefined;

            this._myIdentity.next(Object.assign({}, this.dataStore).myIdentity);
          }
        }, {
          key: "onSetAuth",
          value: function onSetAuth() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.getIdentity();

                    case 2:
                      this.dataStore.myIdentity = _context8.sent;

                      this._myIdentity.next(Object.assign({}, this.dataStore).myIdentity);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getIdentity",
          value: function getIdentity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", this.req.executeGet(this.apiUrl + "/" + MethodsAuth.IDENTITY));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_request_RequestService__WEBPACK_IMPORTED_MODULE_4__["RequestService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _request_RequestService__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M1i7":
    /*!************************************************!*\
      !*** ./src/services/request/RequestService.ts ***!
      \************************************************/

    /*! exports provided: RequestService */

    /***/
    function M1i7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestService", function () {
        return RequestService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RequestService = /*#__PURE__*/function () {
        function RequestService(http) {
          _classCallCheck(this, RequestService);

          this.http = http;
        }

        _createClass(RequestService, [{
          key: "executeGet",
          value: function executeGet(url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var request;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      request = this.http.get(url);
                      _context10.next = 3;
                      return this.executePromise(request);

                    case 3:
                      return _context10.abrupt("return", _context10.sent);

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "executePost",
          value: function executePost(url) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var request;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      request = this.http.post(url, data);
                      _context11.next = 3;
                      return this.executePromise(request);

                    case 3:
                      return _context11.abrupt("return", _context11.sent);

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "executePut",
          value: function executePut(url, data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var request;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      request = this.http.put(url, data);
                      _context12.next = 3;
                      return this.executePromise(request);

                    case 3:
                      return _context12.abrupt("return", _context12.sent);

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "executeDelete",
          value: function executeDelete(url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var request;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      request = this.http["delete"](url);
                      _context13.next = 3;
                      return this.executePromise(request);

                    case 3:
                      return _context13.abrupt("return", _context13.sent);

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getAddressIP",
          value: function getAddressIP() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var request, result;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      request = this.http.get("http://api.ipify.org/?format=json");
                      _context14.next = 3;
                      return this.executePromise(request);

                    case 3:
                      result = _context14.sent;
                      return _context14.abrupt("return", result.ip);

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "operation";
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // Server-side errors
              console.error("Error Code: ".concat(error.status, "\nMessage: ").concat(error.message));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error.error);
            };
          }
        }, {
          key: "executePromise",
          value: function executePromise(fun) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", new Promise(function (resolve, reject) {
                        fun.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this6.handleError("executeRequest"))).subscribe(function (result) {
                          console.log(result);
                          resolve(result);
                        }, function (error) {
                          console.log(error);
                          resolve(undefined);
                        });
                      }));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));
          }
        }]);

        return RequestService;
      }();

      RequestService.ɵfac = function RequestService_Factory(t) {
        return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RequestService,
        factory: RequestService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Njtn":
    /*!*******************************************!*\
      !*** ./src/models/views/auth/AuthView.ts ***!
      \*******************************************/

    /*! exports provided: UserRole, LoginView, RegisterView, ProfilView, AccountView */

    /***/
    function Njtn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return UserRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginView", function () {
        return LoginView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterView", function () {
        return RegisterView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilView", function () {
        return ProfilView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountView", function () {
        return AccountView;
      });

      var UserRole;

      (function (UserRole) {
        UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
        UserRole[UserRole["USER"] = 1] = "USER";
      })(UserRole || (UserRole = {}));

      var LoginView = function LoginView() {
        _classCallCheck(this, LoginView);
      };

      var RegisterView = function RegisterView() {
        _classCallCheck(this, RegisterView);
      };

      var ProfilView = function ProfilView() {
        _classCallCheck(this, ProfilView);
      };

      var AccountView = function AccountView() {
        _classCallCheck(this, AccountView);
      };
      /***/

    },

    /***/
    "P3Mh":
    /*!***************************************************!*\
      !*** ./src/app/forum/auth/auth-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function P3Mh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Qto4":
    /*!************************************************************!*\
      !*** ./src/app/forum/forumsearch/forumsearch.component.ts ***!
      \************************************************************/

    /*! exports provided: ForumsearchComponent */

    /***/
    function Qto4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumsearchComponent", function () {
        return ForumsearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../userpanel/userpanel.component */
      "+/a8");
      /* harmony import */


      var _boardsearch_boardsearch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./boardsearch/boardsearch.component */
      "Ijyr");
      /* harmony import */


      var _boardcreate_boardcreate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./boardcreate/boardcreate.component */
      "F7XQ");

      function ForumsearchComponent_ul_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumsearchComponent_ul_8_li_1_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var action_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.onActionSelect(action_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.getChannelClass(action_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r4.name);
        }
      }

      function ForumsearchComponent_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumsearchComponent_ul_8_li_1_Template, 5, 4, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.actions);
        }
      }

      function ForumsearchComponent_app_boardsearch_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-boardsearch", 14);
        }
      }

      function ForumsearchComponent_app_boardcreate_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-boardcreate", 14);
        }
      }

      var ActionForum = function ActionForum() {
        _classCallCheck(this, ActionForum);
      };

      var ForumsearchComponent = /*#__PURE__*/function () {
        function ForumsearchComponent() {
          _classCallCheck(this, ForumsearchComponent);

          this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.actions = new Array();
          this.componentSearch = new ActionForum();
          this.componentSearch.name = "Search";
          this.componentCreate = new ActionForum();
          this.componentCreate.name = "Create";
          this.actions.push(this.componentSearch);
          this.actions.push(this.componentCreate);
          this.currentAction = this.componentSearch;
        }

        _createClass(ForumsearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.component = this.componentSearch.name;
          }
        }, {
          key: "getChannelClass",
          value: function getChannelClass(action) {
            if (this.currentAction.name === action.name) {
              return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
            } else {
              return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
            }
          }
        }, {
          key: "onActionSelect",
          value: function onActionSelect(action) {
            this.currentAction = action;
            this.component = action.name;
          }
        }]);

        return ForumsearchComponent;
      }();

      ForumsearchComponent.ɵfac = function ForumsearchComponent_Factory(t) {
        return new (t || ForumsearchComponent)();
      };

      ForumsearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForumsearchComponent,
        selectors: [["app-forumsearch"]],
        outputs: {
          onUpdate: "onUpdate"
        },
        decls: 12,
        vars: 3,
        consts: [[1, "flex-1", "flex", "min-h-screen", "h-screen", "bg-gray-800"], [1, "bg-gray-800", "w-56", "flex-none", "flex", "flex-col", "justify-between"], [1, "hashtag-bar", "text-sm", "leading-relaxed", "overflow-y-auto"], [1, "paramForum", "text-white", "h-12", "bg-gray-800", "w-56", "flex-none", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-3", "py-2"], [1, "flex-none", "flex", "hover:bg-gray-900", "rounded", "items-center"], [1, "py-2", "flex", "items-center", "text-gray-500", "hover:text-gray-200"], ["class", "px-2 py-3", 4, "ngIf"], [1, "bg-gray-850", "px-3", "py-2", "flex", "items-center", "justify-between"], ["class", "flex-1 flex flex-col", 4, "ngIf"], [1, "px-2", "py-3"], [3, "class", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", 3, "click"], [1, "text-xl"], [1, "ml-2"], [1, "flex-1", "flex", "flex-col"]],
        template: function ForumsearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Board forum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForumsearchComponent_ul_8_Template, 2, 1, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-userpanel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForumsearchComponent_app_boardsearch_10_Template, 1, 0, "app-boardsearch", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForumsearchComponent_app_boardcreate_11_Template, 1, 0, "app-boardcreate", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.component == ctx.componentSearch.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.component == ctx.componentCreate.name);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_2__["UserpanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _boardsearch_boardsearch_component__WEBPACK_IMPORTED_MODULE_3__["BoardsearchComponent"], _boardcreate_boardcreate_component__WEBPACK_IMPORTED_MODULE_4__["BoardcreateComponent"]],
        styles: [".hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1zZWFyY2gvZm9ydW1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQTNCOztBQUdBO0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUQzQjs7QUFJQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFEM0IiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS9mb3J1bXNlYXJjaC9mb3J1bXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXNodGFnLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5oYXNodGFnLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLmhhc2h0YWctYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumsearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forumsearch',
            templateUrl: './forumsearch.component.html',
            styleUrls: ['./forumsearch.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'forum-app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "W98l":
    /*!*********************************************!*\
      !*** ./src/models/forum/ForumSearchView.ts ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function W98l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ForumSearchView;
      });

      var ForumSearchView = function ForumSearchView() {
        _classCallCheck(this, ForumSearchView);
      };
      /***/

    },

    /***/
    "YlBu":
    /*!*********************************************!*\
      !*** ./src/models/forum/RegisterMessage.ts ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function YlBu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RegisterMessage;
      });

      var RegisterMessage = function RegisterMessage() {
        _classCallCheck(this, RegisterMessage);
      };
      /***/

    },

    /***/
    "Z03G":
    /*!*************************************************!*\
      !*** ./src/services/auth/auth-guard.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function Z03G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "ZETX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth, router) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var auth;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      auth = _context16.sent;
                      console.log(auth);

                      if (!(!auth && state.url != "/auth")) {
                        _context16.next = 8;
                        break;
                      }

                      return _context16.abrupt("return", this.router.parseUrl('/auth'));

                    case 8:
                      if (!(auth && state.url == "/auth")) {
                        _context16.next = 11;
                        break;
                      }

                      this.router.navigate(['/']);
                      return _context16.abrupt("return", this.router.parseUrl('/'));

                    case 11:
                      return _context16.abrupt("return", true);

                    case 12:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _forum_forum_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forum/forum.module */
      "5920");
      /* harmony import */


      var _forum_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./forum/auth/auth.module */
      "2sdH");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb"); //Module MDB
      //Routing and Component App
      //Forum module


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_forum_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _forum_forum_module__WEBPACK_IMPORTED_MODULE_7__["ForumModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          imports: [_forum_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _forum_forum_module__WEBPACK_IMPORTED_MODULE_7__["ForumModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [_forum_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _forum_forum_module__WEBPACK_IMPORTED_MODULE_7__["ForumModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZETX":
    /*!*******************************************!*\
      !*** ./src/services/auth/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function ZETX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/models/views/auth/AuthView */
      "Njtn");
      /* harmony import */


      var _request_RequestService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../request/RequestService */
      "M1i7");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../user/user.service */
      "L8Nd");

      var MethodsAuth;

      (function (MethodsAuth) {
        MethodsAuth["LOGIN"] = "login";
        MethodsAuth["REFRESH"] = "refresh";
        MethodsAuth["LOGOUT"] = "logout";
      })(MethodsAuth || (MethodsAuth = {}));

      var AuthService = /*#__PURE__*/function () {
        function AuthService(req, userService) {
          var _this7 = this;

          _classCallCheck(this, AuthService);

          this.req = req;
          this.userService = userService;
          this.keyStorage = "auth";
          this.apiUrl = "http://localhost:7000/auth";
          this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
          this.userService.myIdentity.subscribe(function (identity) {
            _this7.identity = identity;
          });
        }

        _createClass(AuthService, [{
          key: "loginUser",
          value: function loginUser(login) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var data, url, result;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      //Prepare data to send back end
                      data = new src_models_views_auth_AuthView__WEBPACK_IMPORTED_MODULE_3__["LoginView"]();
                      data.email = login.email;
                      data.password = login.password;
                      _context17.next = 5;
                      return this.req.getAddressIP();

                    case 5:
                      data.AddressIP = _context17.sent;
                      //Execute request post to login
                      url = this.apiUrl + "/" + MethodsAuth.LOGIN;
                      _context17.next = 9;
                      return this.req.executePost(url, data);

                    case 9:
                      result = _context17.sent;

                      //If not undefined store tokens
                      if (result != undefined && result.jwtToken != undefined && result.refreshToken != undefined) {
                        this.setLocalStorage(this.keyStorage, result);
                      }

                      return _context17.abrupt("return", result);

                    case 12:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "logoutUser",
          value: function logoutUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var result;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!this.isAuthenticated()) {
                        _context18.next = 6;
                        break;
                      }

                      _context18.next = 3;
                      return this.req.executePost(this.apiUrl + "/" + MethodsAuth.LOGOUT);

                    case 3:
                      result = _context18.sent;
                      this.removeLocalStorage(this.keyStorage);
                      return _context18.abrupt("return", true);

                    case 6:
                      this.removeLocalStorage(this.keyStorage);
                      return _context18.abrupt("return", false);

                    case 8:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "getAuth",
          value: function getAuth() {
            return this.getLocalStorage(this.keyStorage);
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var auth, currentTimeSecond, result;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      auth = this.getAuth();
                      currentTimeSecond = Date.now() / 1000;
                      console.log(currentTimeSecond); //if no tokens store

                      if (!(auth == undefined)) {
                        _context19.next = 5;
                        break;
                      }

                      return _context19.abrupt("return", false);

                    case 5:
                      console.log(auth);
                      console.log(auth.jwtToken.expireAt); //if jwt token exist and expiration is valid

                      if (!(auth.jwtToken != undefined && auth.jwtToken.expireAt > currentTimeSecond)) {
                        _context19.next = 10;
                        break;
                      }

                      if (this.identity == undefined) {
                        this.userService.onSetAuth();
                      }

                      return _context19.abrupt("return", true);

                    case 10:
                      console.log(auth.refreshToken.expireAt); //if jwt token not exist or not valid and refresh token exist and is valid

                      if (!(auth.refreshToken != undefined && auth.refreshToken.expireAt > currentTimeSecond)) {
                        _context19.next = 18;
                        break;
                      }

                      _context19.next = 14;
                      return this.req.executePost(this.apiUrl + "/" + MethodsAuth.REFRESH, auth.refreshToken);

                    case 14:
                      result = _context19.sent;
                      console.log(result); //If not undefined store tokens

                      if (result != undefined) this.setLocalStorage(this.keyStorage, result);else {
                        this.removeLocalStorage(this.keyStorage);
                      } //retry to return a valid jwt token recursive

                      return _context19.abrupt("return", this.isAuthenticated());

                    case 18:
                      //no valid tokens (jwt and refresh) no auth found
                      this.removeLocalStorage(this.keyStorage);
                      return _context19.abrupt("return", false);

                    case 20:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "setLocalStorage",
          value: function setLocalStorage(key, obj) {
            localStorage.setItem(key, JSON.stringify(obj));
            this.userService.onSetAuth();
          }
        }, {
          key: "removeLocalStorage",
          value: function removeLocalStorage(key) {
            localStorage.removeItem(key);
            this.userService.onRemoveAuth();
          }
        }, {
          key: "getLocalStorage",
          value: function getLocalStorage(key) {
            var json = localStorage.getItem(key);

            try {
              //try parse json
              var parse = JSON.parse(json); //try cast json object to object T

              return parse;
            } catch (error) {
              //on fail parse or cast
              console.error("Error when try to parse or cast local storage object");
              console.error(error);
              return undefined;
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_request_RequestService__WEBPACK_IMPORTED_MODULE_4__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _request_RequestService__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
          }, {
            type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aUKl":
    /*!***************************************!*\
      !*** ./src/models/forum/ForumView.ts ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function aUKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ForumView;
      });

      var ForumView = function ForumView() {
        _classCallCheck(this, ForumView);
      };
      /***/

    },

    /***/
    "bjBh":
    /*!***************************************!*\
      !*** ./src/models/forum/ForumForm.ts ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function bjBh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ForumForm;
      });

      var ForumForm = function ForumForm() {
        _classCallCheck(this, ForumForm);
      };
      /***/

    },

    /***/
    "fssd":
    /*!******************************************************************************!*\
      !*** ./src/app/forum/forumpanel/channelpanel/useritem/useritem.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UseritemComponent */

    /***/
    function fssd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UseritemComponent", function () {
        return UseritemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UseritemComponent = /*#__PURE__*/function () {
        function UseritemComponent() {
          _classCallCheck(this, UseritemComponent);
        }

        _createClass(UseritemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UseritemComponent;
      }();

      UseritemComponent.ɵfac = function UseritemComponent_Factory(t) {
        return new (t || UseritemComponent)();
      };

      UseritemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UseritemComponent,
        selectors: [["app-useritem"]],
        inputs: {
          user: "user"
        },
        decls: 6,
        vars: 2,
        consts: [["href", "#", 1, "flex", "items-center"], [1, "flex-none"], ["href", "#"], ["alt", "avatar", 1, "w-8", "h-8", "rounded-full", 3, "src"], [1, "ml-2"]],
        template: function UseritemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.pseudo);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvY2hhbm5lbHBhbmVsL3VzZXJpdGVtL3VzZXJpdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseritemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-useritem',
            templateUrl: './useritem.component.html',
            styleUrls: ['./useritem.component.scss']
          }]
        }], function () {
          return [];
        }, {
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "kse7":
    /*!********************************************!*\
      !*** ./src/services/request/ws.service.ts ***!
      \********************************************/

    /*! exports provided: WsService */

    /***/
    function kse7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WsService", function () {
        return WsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../auth/auth.service */
      "ZETX");
      /* harmony import */


      var _notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../notification/notification.service */
      "E56+");

      var WsService = /*#__PURE__*/function () {
        function WsService(auth, alert) {
          _classCallCheck(this, WsService);

          this.auth = auth;
          this.alert = alert;
          this.urlServer = "http://localhost:8081/forumhub";
          this._isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.dataStore = {
            isConnected: false
          }; // store our data in memory

          this.isConnected = this._isConnected.asObservable();
          this._onNewMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
          this.onNewMessage = this._onNewMessage.asObservable();
          this._onNewCategorie = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
          this.onNewCategorie = this._onNewCategorie.asObservable();
          this._onUserConnect = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
          this.onUserConnect = this._onUserConnect.asObservable();
          this._onUserDisconnect = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
          this.onUserDisconnect = this._onUserDisconnect.asObservable();
          this._onUserSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
          this.onUserSubscribe = this._onUserSubscribe.asObservable();
        }

        _createClass(WsService, [{
          key: "connectToWebSocket",
          value: function connectToWebSocket() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this8 = this;

              var isAuth, loginResult;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      isAuth = _context20.sent;

                      if (isAuth) {
                        _context20.next = 5;
                        break;
                      }

                      return _context20.abrupt("return");

                    case 5:
                      loginResult = this.auth.getAuth(); //console.log(`${this.urlServer}?token=${loginResult.jwtToken.accessToken}`)
                      //create new hub

                      this.connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]().withUrl("".concat(this.urlServer, "?token=").concat(loginResult.jwtToken.accessToken)).configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information).build(); //Init events websocket

                      this.initEventWebSocket(this.connection); //start connection

                      this.connection.start().then(function (value) {
                        console.log("connected");
                        _this8.dataStore.isConnected = true;

                        _this8._isConnected.next(true);
                      })["catch"](function (error) {
                        _this8.alert.showError(error, "Error");

                        console.log("connect error : " + error);
                        _this8.dataStore.isConnected = false;

                        _this8._isConnected.next(false);
                      });

                    case 9:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "disconnectWebSocket",
          value: function disconnectWebSocket() {
            var _this9 = this;

            if (this.connection != undefined && this.connection.connectionId != null) {
              this.connection.stop().then(function (value) {
                console.log("disconnected");
              })["catch"](function (error) {
                _this9.alert.showError(error, "Error");

                console.log("connect error : " + error);
              });
            } else {
              console.log("disconnect websocket : already disconnect");
            }

            this.dataStore.isConnected = false;

            this._isConnected.next(false);
          }
        }, {
          key: "initEventWebSocket",
          value: function initEventWebSocket(connection) {
            var _this10 = this;

            connection.onclose(function (callback) {
              console.log("CONNECTION CLOSE");
              _this10.dataStore.isConnected = false;

              _this10._isConnected.next(false);
            });
            connection.on("onNewMessage", function (result) {
              console.log("onNewMessage");
              console.log(result);

              _this10._onNewMessage.next(result);
            });
            connection.on("onNewCategorie", function (result) {
              console.log("onNewCategorie");
              console.log(result);

              _this10._onNewCategorie.next(result);
            });
            connection.on("onUserConnect", function (idUser) {
              console.log("onUserConnect");
              console.log(idUser);

              _this10._onUserConnect.next(idUser);
            });
            connection.on("onUserDisconnect", function (idUser) {
              console.log("onUserDisconnect");
              console.log(idUser);

              _this10._onUserDisconnect.next(idUser);
            });
            connection.on("onUserSubscribe", function (result) {
              console.log("onUserSubscribe");
              console.log(result);

              _this10._onUserSubscribe.next(result);
            });
          }
        }]);

        return WsService;
      }();

      WsService.ɵfac = function WsService_Factory(t) {
        return new (t || WsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
      };

      WsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: WsService,
        factory: WsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "m5Ef":
    /*!******************************************!*\
      !*** ./src/app/forum/forum.component.ts ***!
      \******************************************/

    /*! exports provided: ForumComponent */

    /***/
    function m5Ef(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumComponent", function () {
        return ForumComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/request/ws.service */
      "kse7");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forumsearch_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forumsearch/forumsearch.component */
      "Qto4");
      /* harmony import */


      var _forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forumpanel/forumpanel.component */
      "sjqV");

      function ForumComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForumComponent_li_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var forum_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onForumSelect(forum_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var forum_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.forumIsSelected(forum_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", forum_r3.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", forum_r3.name);
        }
      }

      function ForumComponent_app_forumsearch_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-forumsearch");
        }
      }

      function ForumComponent_app_forumpanel_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-forumpanel");
        }
      }

      var ForumComponent = /*#__PURE__*/function () {
        function ForumComponent(connectionWs, forumService) {
          _classCallCheck(this, ForumComponent);

          this.connectionWs = connectionWs;
          this.forumService = forumService;
          this.componentSearchName = "showSearchForum";
          this.componentForumName = "showForumSelect";
          this.component = this.componentSearchName;
        }

        _createClass(ForumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      //subscribe event my forum
                      this.forumService.myForums.subscribe(function (list) {
                        _this11.forums = list;
                      }); //subscribe event selected forum

                      this.forumService.myForumSelected.subscribe(function (value) {
                        console.log("FORUM SELECTED FORUM COMPONENT");
                        console.log(value);
                        _this11.forumSelected = value;
                        _this11.component = _this11.componentForumName;
                      }); // load my forum

                      this.forumService.loadMyForums(); //connect to forum websocket server

                      this.connectionWs.connectToWebSocket();

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.connectionWs.disconnectWebSocket();
          }
        }, {
          key: "onSearchForumSelect",
          value: function onSearchForumSelect() {
            this.forumService.selectMyForums(undefined);
            this.component = this.componentSearchName;
          }
        }, {
          key: "onForumSelect",
          value: function onForumSelect(forum) {
            console.log(forum);
            this.forumService.selectMyForums(forum._id);
          }
        }, {
          key: "forumIsSelected",
          value: function forumIsSelected(forum) {
            return this.forumSelected != undefined && forum != undefined && this.forumSelected._id == forum._id;
          }
        }]);

        return ForumComponent;
      }();

      ForumComponent.ɵfac = function ForumComponent_Factory(t) {
        return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_2__["WsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]));
      };

      ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ForumComponent,
        selectors: [["app-forum"]],
        decls: 13,
        vars: 3,
        consts: [[1, "flex"], [1, "bg-gray-900", "w-20", "flex-none", "flex", "flex-col", "min-h-screen", "h-screen", "px-2", "py-2"], [1, "channel-bar", "overflow-y-auto"], [1, "text-center"], ["class", "mt-3", 4, "ngFor", "ngForOf"], [1, "border-b", "border-gray-700", "mx-4", "mt-3"], [1, "mt-3"], [1, "w-12", "h-12", "bg-gray-800", "hover:bg-teal-500", "text-teal-500", "hover:text-white", "inline-block", "rounded-full", 3, "click"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "mt-3", "mx-auto"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [4, "ngIf"], [3, "click"], [1, "w-12", "h-12", "rounded-full", "mx-auto", 3, "src", "alt"]],
        template: function ForumComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ForumComponent_li_4_Template, 3, 4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForumComponent_Template_a_click_7_listener() {
              return ctx.onSearchForumSelect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "line", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "line", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForumComponent_app_forumsearch_11_Template, 1, 0, "app-forumsearch", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ForumComponent_app_forumpanel_12_Template, 1, 0, "app-forumpanel", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.forums);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.component == ctx.componentSearchName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.component == ctx.componentForumName);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _forumsearch_forumsearch_component__WEBPACK_IMPORTED_MODULE_5__["ForumsearchComponent"], _forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_6__["ForumpanelComponent"]],
        styles: ["a[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\n\na.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n  border-radius: 0%;\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border-radius: 25%;\n  background: green;\n}\n\n.channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #1F2225;\n}\n\n.channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #1F2225;\n}\n\n.channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #3F495A;\n}\n\napp-forumpanel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napp-forumsearch[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRkE7RUFJTSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBRXZCOztBQVBBO0VBVU0sa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUN2Qjs7QUFJQTtFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFGM0I7O0FBS0E7RUFFRSxXQUFXO0VBQ1gseUJBQXlCO0FBSDNCOztBQU1BO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUgzQjs7QUFNQTtFQUNFLFdBQVc7QUFIYjs7QUFNQTtFQUNFLFdBQVc7QUFIYiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAmLmFjdGl2ZSB7XG4gICAgaW1nIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIH1cbiAgfVxuICBpbWcge1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgfVxuICB9XG59XG5cbi5jaGFubmVsLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbi5jaGFubmVsLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjIyNTtcbn1cblxuLmNoYW5uZWwtYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbmFwcC1mb3J1bXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1mb3J1bXNlYXJjaHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForumComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-forum',
            templateUrl: './forum.component.html',
            styleUrls: ['./forum.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_request_ws_service__WEBPACK_IMPORTED_MODULE_2__["WsService"]
          }, {
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oEMF":
    /*!*****************************************!*\
      !*** ./src/models/forum/MessageView.ts ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function oEMF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return MessageView;
      });

      var MessageView = function MessageView() {
        _classCallCheck(this, MessageView);
      };
      /***/

    },

    /***/
    "omki":
    /*!***********************************************************************!*\
      !*** ./src/app/forum/forumpanel/channelitem/channelitem.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ChannelitemComponent */

    /***/
    function omki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelitemComponent", function () {
        return ChannelitemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");

      var ChannelitemComponent = /*#__PURE__*/function () {
        function ChannelitemComponent(forumService) {
          _classCallCheck(this, ChannelitemComponent);

          this.forumService = forumService;
          this.isActive = false;
          this["class"] = "";
        }

        _createClass(ChannelitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.forumService.channelForumSelected.subscribe(function (channel) {
              console.log("CHANNEL SELECT");
              console.log(channel);
              _this12.isActive = channel != undefined && channel.id === _this12.item.id;

              _this12.getClass();
            });
          }
        }, {
          key: "getClass",
          value: function getClass() {
            this["class"] = this.isActive ? "text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded" : "text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900";
          }
        }, {
          key: "onChannelSelect",
          value: function onChannelSelect() {
            console.log("ON CHANNEL CHANGE");
            console.log(this.item);
            this.forumService.selectChannelForum(this.item.id);
          }
        }]);

        return ChannelitemComponent;
      }();

      ChannelitemComponent.ɵfac = function ChannelitemComponent_Factory(t) {
        return new (t || ChannelitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]));
      };

      ChannelitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChannelitemComponent,
        selectors: [["app-channelitem"]],
        inputs: {
          item: "item"
        },
        decls: 6,
        vars: 4,
        consts: [[1, "flex", "items-center", 3, "click"], [1, "text-xl"], [1, "ml-2"]],
        template: function ChannelitemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelitemComponent_Template_span_click_1_listener() {
              return ctx.onChannelSelect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx["class"], " text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvY2hhbm5lbGl0ZW0vY2hhbm5lbGl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelitemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-channelitem',
            templateUrl: './channelitem.component.html',
            styleUrls: ['./channelitem.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "qarh":
    /*!*************************************************************************!*\
      !*** ./src/app/forum/forumpanel/channelpanel/channelpanel.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ChannelpanelComponent */

    /***/
    function qarh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelpanelComponent", function () {
        return ChannelpanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./messageitem/messageitem.component */
      "HJb8");
      /* harmony import */


      var _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./useritem/useritem.component */
      "fssd");

      function ChannelpanelComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.channel.name);
        }
      }

      function ChannelpanelComponent_app_messageitem_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-messageitem", 33);
        }

        if (rf & 2) {
          var message_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r4);
        }
      }

      function ChannelpanelComponent_li_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-useritem", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r5);
        }
      }

      function ChannelpanelComponent_li_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-useritem", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r6);
        }
      }

      var ChannelpanelComponent = /*#__PURE__*/function () {
        function ChannelpanelComponent(forumService) {
          _classCallCheck(this, ChannelpanelComponent);

          this.forumService = forumService;
        }

        _createClass(ChannelpanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.forumService.usersOfMyForumSelected.subscribe(function (users) {
              _this13.usersOffline = users.filter(function (user) {
                return !user.isConnected;
              });
              _this13.usersOnline = users.filter(function (user) {
                return user.isConnected;
              });
            });
            this.forumService.channelForumSelected.subscribe(function (channel) {
              console.log("CHANNEL SELECT UPDATE");
              console.log(channel);
              _this13.channel = channel;
              _this13.haveChannel = _this13.channel != undefined;
            });
            this.forumService.messagesOfChannelSelected.subscribe(function (message) {
              _this13.messages = message;
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            console.log("MESSAGE AVANT ENVOI " + this.message);
            var msgEntered = this.message;
            this.message = ''; //If message = null

            this.forumService.sendMessage(msgEntered);
          }
        }]);

        return ChannelpanelComponent;
      }();

      ChannelpanelComponent.ɵfac = function ChannelpanelComponent_Factory(t) {
        return new (t || ChannelpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]));
      };

      ChannelpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChannelpanelComponent,
        selectors: [["app-channelpanel"]],
        decls: 39,
        vars: 8,
        consts: [[1, "flex", "text-white", "h-12"], [1, "flex-1", "bg-gray-800", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-4"], [1, "flex", "items-center"], [1, "text-gray-500", "text-2xl"], ["class", "ml-2 text-sm text-white", 4, "ngIf"], ["href", "#", 1, "ml-4"], ["action", "#", 1, "relative"], ["type", "text", "placeholder", "Search", 1, "rounded", "bg-gray-900", "text-gray-200", "text-xs", "px-2", "py-1"], [1, "absolute", "right-0", "top-0", "mr-1", 2, "top", "6px"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "w-4", "h-4", "text-gray-500", "hover:text-gray-200"], ["d", "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", 1, "heroicon-ui"], [1, "flex-1", "flex", "justify-between", "overflow-y-hidden"], [1, "bg-gray-700", "flex-1", "flex", "flex-col", "justify-between"], [1, "chat", "text-sm", "text-gray-400", "overflow-y-auto"], ["class", "flex mx-6 my-3 py-4 border-t border-gray-600", 3, "message", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "py-4", "flex", "items-center"], [1, "px-2", "py-2", "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white", "border-r", "border-gray-600", 3, "disabled"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["data-name", "Layer 2"], ["data-name", "plus-circle"], ["width", "24", "height", "24", "opacity", "0"], ["d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"], [1, "flex-1"], ["type", "text", 1, "w-full", "text-sm", "h-10", "px-2", "py-2", "bg-gray-700", "text-gray-200", "focus:outline-none", 3, "ngModel", "disabled", "ngModelChange", "keyup"], [1, "px-2", "py-2", "bg-gray-700", "rounded-r", "flex", "items-center", "h-10"], [1, "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white", 3, "disabled", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 20 20", 1, "w-6", "h-6"], ["fill", "currentColor", "d", "M18.06,1.941c-0.586-0.586-1.144-0.033-3.041,0.879C9.944,5.259,1.1,10.216,1.1,10.216L8.699,11.3\n\t                l1.085,7.599c0,0,4.958-8.843,7.396-13.916C18.092,3.085,18.645,2.527,18.06,1.941z M16.236,3.896l-5.519,10.247l-0.561-4.655\n\t                L16.236,3.896z"], [1, "sidebar-users", "text-sm", "bg-gray-800", "w-56", "flex-none", "px-3", "py-3", "overflow-y-auto"], [1, "uppercase", "tracking-wide", "font-semibold", "text-xs", "text-gray-500", "mb-2"], [1, "mb-6", "truncate"], ["class", "text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-700 py-1 my-2", 4, "ngFor", "ngForOf"], [1, "ml-2", "text-sm", "text-white"], [1, "flex", "mx-6", "my-3", "py-4", "border-t", "border-gray-600", 3, "message"], [1, "text-gray-500", "px-2", "hover:text-gray-200", "hover:bg-gray-700", "py-1", "my-2"], [3, "user"]],
        template: function ChannelpanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChannelpanelComponent_div_5_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChannelpanelComponent_app_messageitem_16_Template, 1, 1, "app-messageitem", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChannelpanelComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.message = $event;
            })("keyup", function ChannelpanelComponent_Template_input_keyup_25_listener($event) {
              return $event.keyCode == 13 && ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelpanelComponent_Template_button_click_27_listener() {
              return ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChannelpanelComponent_li_34_Template, 2, 1, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ChannelpanelComponent_li_38_Template, 2, 1, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channel != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.haveChannel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message)("disabled", !ctx.haveChannel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.haveChannel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersOnline);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersOffline);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_4__["MessageitemComponent"], _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_5__["UseritemComponent"]],
        styles: [".sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1wYW5lbC9jaGFubmVscGFuZWwvY2hhbm5lbHBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUEzQjs7QUFHQTtFQUVFLFdBQVc7RUFDWCx5QkFBeUI7QUFEM0I7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBRDNCOztBQUlBO0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUYzQjs7QUFLQTtFQUVFLFdBQVc7RUFDWCx5QkFBeUI7QUFIM0I7O0FBTUE7RUFFRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBSjNCIiwiZmlsZSI6InNyYy9hcHAvZm9ydW0vZm9ydW1wYW5lbC9jaGFubmVscGFuZWwvY2hhbm5lbHBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0OTVBO1xufVxuXG4uc2lkZWJhci11c2Vyczo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLnNpZGViYXItdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjIyNTtcbn1cblxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0OTVBO1xufVxuXG4uY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbntcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjIyNTtcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelpanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-channelpanel',
            templateUrl: './channelpanel.component.html',
            styleUrls: ['./channelpanel.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rkId":
    /*!*********************************************!*\
      !*** ./src/services/forum/forum.service.ts ***!
      \*********************************************/

    /*! exports provided: ForumService */

    /***/
    function rkId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumService", function () {
        return ForumService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_models_forum_ForumSearchView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/models/forum/ForumSearchView */
      "W98l");
      /* harmony import */


      var src_models_forum_MessageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/models/forum/MessageView */
      "oEMF");
      /* harmony import */


      var src_models_forum_RegisterChannel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/models/forum/RegisterChannel */
      "JztG");
      /* harmony import */


      var src_models_forum_RegisterMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/models/forum/RegisterMessage */
      "YlBu");
      /* harmony import */


      var _request_RequestService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../request/RequestService */
      "M1i7");
      /* harmony import */


      var _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../notification/notification.service */
      "E56+");
      /* harmony import */


      var _request_ws_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../request/ws.service */
      "kse7");

      var FactoryModel = /*#__PURE__*/function () {
        function FactoryModel() {
          _classCallCheck(this, FactoryModel);
        }

        _createClass(FactoryModel, null, [{
          key: "defaultForumSearchView",
          value: function defaultForumSearchView() {
            var search = new src_models_forum_ForumSearchView__WEBPACK_IMPORTED_MODULE_3__["default"]();
            search.currentPage = 1;
            search.descFilter = "";
            search.nameFilter = "";
            search.totalItem = 0;
            search.totalPage = 0;
            search.nbItemPerPage = 10;
            search.totalItemCurent = 0;
            search.forumSearch = new Array();
            return search;
          }
        }]);

        return FactoryModel;
      }();

      var ForumService = /*#__PURE__*/function () {
        function ForumService(req, notif, websocket) {
          var _this14 = this;

          _classCallCheck(this, ForumService);

          this.req = req;
          this.notif = notif;
          this.websocket = websocket;
          this.apiUrl = "http://localhost:7000/forum";
          this.apiUrlChannel = "http://localhost:7000/channel";
          this.apiUrlMsg = "http://localhost:7000/message";
          this._myForums = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
          this._searchForum = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](FactoryModel.defaultForumSearchView()); //Selector forum - channel

          this._myForumSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._channelForumSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined); //data channels users messages

          this._channelsOfMyForumSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
          this._usersOfMyForumSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
          this._messagesOfChannelSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
          this.searchForum = this._searchForum.asObservable();
          this.myForums = this._myForums.asObservable();
          this.myForumSelected = this._myForumSelected.asObservable();
          this.channelsOfMyForumSelected = this._channelsOfMyForumSelected.asObservable();
          this.usersOfMyForumSelected = this._usersOfMyForumSelected.asObservable();
          this.channelForumSelected = this._channelForumSelected.asObservable();
          this.messagesOfChannelSelected = this._messagesOfChannelSelected.asObservable();
          this.dataStore = {
            myForums: new Array(),
            searchForum: FactoryModel.defaultForumSearchView(),
            myForumSelected: undefined,
            channelsOfMyForumSelected: Array(),
            usersOfMyForumSelected: new Array(),
            channelForumSelected: undefined,
            messagesOfChannelSelected: new Array()
          }; // store our data in memory

          this.websocket.onNewMessage.subscribe(function (message) {
            if (message == undefined) return;
            if (_this14.dataStore.myForumSelected._id !== message.idForum) return;
            if (_this14.dataStore.channelForumSelected.id !== message.idChannel) return;

            _this14.pushMessage(message.messageV);
          });
          this.websocket.onNewCategorie.subscribe(function (channel) {
            if (channel == undefined) return; //verif current forum is forum of channel variable
            //add channel to channels datastore
          });
          this.websocket.onUserConnect.subscribe(function (idUser) {
            if (idUser == undefined) return; //verif current forum curretn channel
            // users data store
          });
          this.websocket.onUserDisconnect.subscribe(function (idUser) {
            if (idUser == undefined) return;
          });
          this.websocket.onUserSubscribe.subscribe(function (sub) {
            if (sub == undefined) return;
          });
        }

        _createClass(ForumService, [{
          key: "loadMyForums",
          value: function loadMyForums() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.getMyForums();

                    case 2:
                      this.dataStore.myForums = _context22.sent;

                      //notify change value
                      this._myForums.next(Object.assign({}, this.dataStore).myForums); //if value have forums and not have current selected forum, set first element of array and notify


                      if (this.dataStore.myForumSelected == undefined && this.dataStore.myForums.length > 0) {
                        this.selectMyForums(this.dataStore.myForums[0]._id);
                      }

                    case 5:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } //
          //  LOADING
          //

        }, {
          key: "loadSearchForum",
          value: function loadSearchForum() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.getForums(this.dataStore.searchForum);

                    case 2:
                      this.dataStore.searchForum = _context23.sent;

                      //notify change
                      this._searchForum.next(this.cpObj(this.dataStore).searchForum);

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "loadDatasOfSelectedForum",
          value: function loadDatasOfSelectedForum() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this15 = this;

              var idForum, panel;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      //get forum selected, if is undefined set channel forum to undefined
                      idForum = (_a = this.dataStore.myForumSelected) === null || _a === void 0 ? void 0 : _a._id;

                      if (!(idForum == undefined)) {
                        _context24.next = 4;
                        break;
                      }

                      this.selectChannelForum(undefined);
                      return _context24.abrupt("return");

                    case 4:
                      _context24.next = 6;
                      return this.getForumPannel(idForum);

                    case 6:
                      panel = _context24.sent;
                      //set data in store and notify channels / users
                      this.dataStore.channelsOfMyForumSelected = panel.channels;
                      this.dataStore.usersOfMyForumSelected = panel.users;

                      this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected);

                      this._usersOfMyForumSelected.next(this.cpObj(this.dataStore).usersOfMyForumSelected); //si pas de channel selectionner


                      if (!(this.dataStore.channelForumSelected == undefined)) {
                        _context24.next = 14;
                        break;
                      }

                      //mais il y a des channels alors set le premier channel
                      if (panel.channels.length > 0) this.selectChannelForum(panel.channels[0].id);
                      return _context24.abrupt("return");

                    case 14:
                      // si channel select
                      //find if channel current is in current forum
                      this.dataStore.channelForumSelected = panel.channels.find(function (channel) {
                        return channel.id == _this15.dataStore.channelForumSelected.id;
                      }); //is il y est pas et que channels existe alors set le premier sinon set undefined

                      if (this.dataStore.channelForumSelected == undefined && panel.channels.length > 0) this.selectChannelForum(panel.channels[0].id);else this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected);

                    case 16:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "loadDataOfSelectedChannel",
          value: function loadDataOfSelectedChannel() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var idChannel, panel;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      //if undefined reset messages
                      idChannel = (_a = this.dataStore.channelForumSelected) === null || _a === void 0 ? void 0 : _a.id;

                      if (!(idChannel == undefined)) {
                        _context25.next = 5;
                        break;
                      }

                      //else clear the message array
                      this.dataStore.messagesOfChannelSelected = new Array();

                      this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);

                      return _context25.abrupt("return");

                    case 5:
                      _context25.next = 7;
                      return this.getChannelPannel(idChannel);

                    case 7:
                      panel = _context25.sent;
                      //set data in store and notify message
                      this.dataStore.messagesOfChannelSelected = panel.messages;

                      this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);

                    case 10:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          } //
          //  ACTIONS
          //

        }, {
          key: "selectMyForums",
          value: function selectMyForums(id) {
            //if select undefined, set data to undefined and load refresh dependencie child
            if (id == undefined) {
              this.dataStore.myForumSelected = undefined;

              this._myForumSelected.next(this.cpObj(this.dataStore).myForumSelected);

              this.loadDatasOfSelectedForum();
              return;
            } // else find forum with id


            var selected = this.dataStore.myForums.find(function (forum) {
              return forum._id == id;
            });
            if (selected == undefined) return; //update selected and next

            this.dataStore.myForumSelected = selected;

            this._myForumSelected.next(this.cpObj(this.dataStore).myForumSelected); //load data of forum select


            this.loadDatasOfSelectedForum();
          }
        }, {
          key: "selectChannelForum",
          value: function selectChannelForum(idChannel) {
            //if set channel to undefined reset child field
            if (idChannel == undefined) {
              this.dataStore.channelForumSelected = undefined;

              this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected);

              this.loadDataOfSelectedChannel();
              return;
            } //else search if exist and set and refresh


            var channelSelect = this.dataStore.channelsOfMyForumSelected.find(function (channel) {
              return channel.id === idChannel;
            });
            if (channelSelect == undefined) return;
            this.dataStore.channelForumSelected = channelSelect;

            this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected);

            this.loadDataOfSelectedChannel();
          }
        }, {
          key: "createNewChannelForumSelected",
          value: function createNewChannelForumSelected(channelName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var register, res;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      //setup register form
                      register = new src_models_forum_RegisterChannel__WEBPACK_IMPORTED_MODULE_5__["default"]();
                      register.IdForum = this.dataStore.myForumSelected._id;
                      register.NameChannel = channelName; //execute request

                      _context26.next = 5;
                      return this.newChannel(register);

                    case 5:
                      res = _context26.sent;
                      //concat result to channels and notify
                      this.dataStore.channelsOfMyForumSelected = [].concat(_toConsumableArray(this.dataStore.channelsOfMyForumSelected), [res.channel]);

                      this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected); //if empty channel select and channels have data, select first channel


                      if (this.dataStore.channelForumSelected == undefined && this.dataStore.channelsOfMyForumSelected.length > 0) this.selectChannelForum(this.dataStore.channelsOfMyForumSelected[0].id);

                    case 9:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "createNewForum",
          value: function createNewForum(forum) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var res;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.sendFormValues(forum);

                    case 2:
                      res = _context27.sent;
                      //set redirection on new forum
                      this.dataStore.channelForumSelected.id = res._id; //refresh my forums to load refresh

                      this.loadMyForums(); //execute select of new forum

                      this.selectMyForums(res._id);

                    case 6:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "subscribeToAForum",
          value: function subscribeToAForum(forum) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var res;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      if (!this.dataStore.myForums.find(function (f) {
                        return f._id == forum._id;
                      })) {
                        _context28.next = 3;
                        break;
                      }

                      this.notif.showError("You have already subscribed to this forum", "Error");
                      return _context28.abrupt("return");

                    case 3:
                      _context28.next = 5;
                      return this.subscribe(forum._id);

                    case 5:
                      res = _context28.sent;

                      if (res.result) {
                        //and load refresh of my forum
                        this.loadMyForums();
                        this.notif.showSuccess(res.message, "Success");
                      } else {
                        this.notif.showError(res.message, "Error");
                      }

                    case 7:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "OnSearchPaginitionChange",
          value: function OnSearchPaginitionChange(length, pageIndex, pageSize) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      //todo
                      this.dataStore.searchForum.totalItem = length;
                      this.dataStore.searchForum.currentPage = pageIndex;
                      this.dataStore.searchForum.nbItemPerPage = pageSize; //this.loadSearchForum();

                    case 3:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var message, registerMsg, res;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      //create message view
                      message = new src_models_forum_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"]();
                      message.timestamp = Date.now();
                      message.value = msg; //create form

                      registerMsg = new src_models_forum_RegisterMessage__WEBPACK_IMPORTED_MODULE_6__["default"]();
                      registerMsg.idChannel = this.dataStore.channelForumSelected.id;
                      registerMsg.idForum = this.dataStore.myForumSelected._id;
                      registerMsg.messageV = message; //execute request

                      _context30.next = 9;
                      return this.newMsg(registerMsg);

                    case 9:
                      res = _context30.sent;

                      //if correct response create message (have id)
                      // and is current forum and channel
                      if (res.messageV !== undefined && res.messageV.id !== undefined && res.idForum == this.dataStore.myForumSelected._id && res.idChannel == this.dataStore.channelForumSelected.id) {
                        //push message in current list of message
                        this.dataStore.messagesOfChannelSelected.push(res.messageV);

                        this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);
                      }

                    case 11:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "pushMessage",
          value: function pushMessage(msg) {
            //push and notify new message
            this.dataStore.messagesOfChannelSelected.push(msg);

            this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);
          } //
          // HTTP CALLS
          //

        }, {
          key: "newMsg",
          value: function newMsg(registerMsg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.req.executePost(this.apiUrlMsg, registerMsg);

                    case 2:
                      return _context31.abrupt("return", _context31.sent);

                    case 3:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "getForums",
          value: function getForums(listForum) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.req.executePost(this.apiUrl + "/search", listForum);

                    case 2:
                      return _context32.abrupt("return", _context32.sent);

                    case 3:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "sendFormValues",
          value: function sendFormValues(forumForm) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.req.executePost(this.apiUrl + "/create", forumForm);

                    case 2:
                      return _context33.abrupt("return", _context33.sent);

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "getMyForums",
          value: function getMyForums() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.req.executeGet(this.apiUrl + "/myforum");

                    case 2:
                      return _context34.abrupt("return", _context34.sent);

                    case 3:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "subscribe",
          value: function subscribe(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.req.executeGet(this.apiUrl + "/subscribe/" + id);

                    case 2:
                      return _context35.abrupt("return", _context35.sent);

                    case 3:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "newChannel",
          value: function newChannel(channel) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.req.executePost(this.apiUrlChannel + "/create", channel);

                    case 2:
                      return _context36.abrupt("return", _context36.sent);

                    case 3:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "getForumPannel",
          value: function getForumPannel(idForum) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return this.req.executeGet(this.apiUrl + "/panel/" + idForum);

                    case 2:
                      return _context37.abrupt("return", _context37.sent);

                    case 3:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "getChannelPannel",
          value: function getChannelPannel(idChannel) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.next = 2;
                      return this.req.executeGet(this.apiUrlChannel + "/panel/" + idChannel);

                    case 2:
                      return _context38.abrupt("return", _context38.sent);

                    case 3:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "cpObj",
          value: function cpObj(obj) {
            return Object.assign({}, obj);
          }
        }]);

        return ForumService;
      }();

      ForumService.ɵfac = function ForumService_Factory(t) {
        return new (t || ForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_request_RequestService__WEBPACK_IMPORTED_MODULE_7__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_request_ws_service__WEBPACK_IMPORTED_MODULE_9__["WsService"]));
      };

      ForumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ForumService,
        factory: ForumService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForumService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _request_RequestService__WEBPACK_IMPORTED_MODULE_7__["RequestService"]
          }, {
            type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
          }, {
            type: _request_ws_service__WEBPACK_IMPORTED_MODULE_9__["WsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sjqV":
    /*!**********************************************************!*\
      !*** ./src/app/forum/forumpanel/forumpanel.component.ts ***!
      \**********************************************************/

    /*! exports provided: ForumpanelComponent */

    /***/
    function sjqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumpanelComponent", function () {
        return ForumpanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/services/forum/forum.service */
      "rkId");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../userpanel/userpanel.component */
      "+/a8");
      /* harmony import */


      var _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./channelpanel/channelpanel.component */
      "qarh");
      /* harmony import */


      var _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./channelitem/channelitem.component */
      "omki");

      function ForumpanelComponent_app_channelitem_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-channelitem", 20);
        }

        if (rf & 2) {
          var channel_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", channel_r1);
        }
      }

      var ForumpanelComponent = /*#__PURE__*/function () {
        function ForumpanelComponent(forumService) {
          _classCallCheck(this, ForumpanelComponent);

          this.forumService = forumService;
          this.displayParamForum = false;
          this.channelName = '';
        }

        _createClass(ForumpanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.forumService.myForumSelected.subscribe(function (forum) {
              _this16.forum = forum;
            });
            this.forumService.channelsOfMyForumSelected.subscribe(function (channels) {
              console.log("CHANNELS SELECTS CHANGE");
              _this16.channels = channels;
            });
          }
        }, {
          key: "onClickParamForum",
          value: function onClickParamForum() {
            console.log("click on param forum");
            this.displayParamForum = !this.displayParamForum;
          }
        }, {
          key: "onNewChannel",
          value: function onNewChannel() {
            this.forumService.createNewChannelForumSelected(this.channelName);
          }
        }]);

        return ForumpanelComponent;
      }();

      ForumpanelComponent.ɵfac = function ForumpanelComponent_Factory(t) {
        return new (t || ForumpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]));
      };

      ForumpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForumpanelComponent,
        selectors: [["app-forumpanel"]],
        decls: 27,
        vars: 9,
        consts: [[1, "flex-1", "flex", "min-h-screen", "h-screen"], [1, "bg-gray-800", "w-56", "flex-none", "flex", "flex-col", "justify-between"], [1, "hashtag-bar", "text-sm", "leading-relaxed", "overflow-y-auto"], [1, "paramForum", "text-white", "h-12", "bg-gray-800", "w-56", "flex-none", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-3", "py-2"], [1, "flex-none", "flex", "hover:bg-gray-900", "rounded", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["d", "M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z", 1, "heroicon-ui"], [1, "rounded-lg"], [1, "px-2", "py-3"], [1, "text-gray-500", "px-2", "hover:text-gray-200", "hover:bg-gray-900"], [1, "flex", "items-center"], [1, "text-xl"], [1, "ml-2"], [3, "item", 4, "ngFor", "ngForOf"], [1, "text-gray-500", "px-2", "hover:text-gray-200"], [1, "flex", "items-center", "mt-5"], ["type", "button", 1, "bg-gray-900", "pl-2", "pr-2", 3, "click"], ["type", "text", "onfocus", "this.value=''", "placeholder", "Channel's name", 1, "ml-2", "text-black", 3, "ngModel", "ngModelChange"], [1, "bg-gray-850", "px-3", "py-2", "flex", "items-center", "justify-between"], [1, "flex-1", "flex", "flex-col"], [3, "item"]],
        template: function ForumpanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumpanelComponent_Template_button_click_4_listener() {
              return ctx.onClickParamForum();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForumpanelComponent_app_channelitem_19_Template, 1, 1, "app-channelitem", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumpanelComponent_Template_button_click_22_listener() {
              return ctx.onNewChannel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForumpanelComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.channelName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-userpanel", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-channelpanel", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("b-gray-900", ctx.displayParamForum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forum == null ? null : ctx.forum.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("paramisshow", !ctx.displayParamForum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.displayParamForum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.channelName);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_4__["UserpanelComponent"], _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelpanelComponent"], _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_6__["ChannelitemComponent"]],
        styles: [".hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.paramForum[_ngcontent-%COMP%] {\n  transition: all 1s ease-out;\n}\n\n.paramForum[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  width: 100%;\n}\n\n.paramForum[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.paramForum[_ngcontent-%COMP%]   .paramisshow[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1wYW5lbC9mb3J1bXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUEzQjs7QUFHQTtFQUVFLFdBQVc7RUFDWCx5QkFBeUI7QUFEM0I7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBRDNCOztBQUlBO0VBQ0UsYUFBYTtBQURmOztBQUlBO0VBUUUsMkJBQTJCO0FBUjdCOztBQUFBO0VBRUksYUFBWTtFQUNaLFdBQVc7QUFFZjs7QUFMQTtFQUtNLFVBQVU7QUFJaEI7O0FBVEE7RUFVSSx3QkFBd0I7QUFHNUIiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS9mb3J1bXBhbmVsL2ZvcnVtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzaHRhZy1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbiAge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5oYXNodGFnLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICB7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0OTVBO1xufVxuXG4uaGFzaHRhZy1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjIyNTtcbn1cblxuLmRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBhcmFtRm9ydW17XG4gIGJ1dHRvbntcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgc3BhbiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIC5wYXJhbWlzc2hvd3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbn1cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumpanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forumpanel',
            templateUrl: './forumpanel.component.html',
            styleUrls: ['./forumpanel.component.scss']
          }]
        }], function () {
          return [{
            type: src_services_forum_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sqQX":
    /*!*****************************************************!*\
      !*** ./src/services/request/AuthHttpInterceptor.ts ***!
      \*****************************************************/

    /*! exports provided: AuthHttpInterceptor */

    /***/
    function sqQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthHttpInterceptor", function () {
        return AuthHttpInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      "ZETX");

      var AuthHttpInterceptor = /*#__PURE__*/function () {
        function AuthHttpInterceptor(auth) {
          _classCallCheck(this, AuthHttpInterceptor);

          this.auth = auth;
        }

        _createClass(AuthHttpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _a;

            console.log('intercepted request ... ');
            var token = (_a = this.auth.getAuth()) === null || _a === void 0 ? void 0 : _a.jwtToken.accessToken;

            if (token != undefined) {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', "Bearer ".concat(token))
              });
              console.log('Sending request with new header auth now ...');
              return next.handle(authReq);
            }

            console.log('Sending request with no header auth ...');
            return next.handle(req);
          }
        }]);

        return AuthHttpInterceptor;
      }();

      AuthHttpInterceptor.ɵfac = function AuthHttpInterceptor_Factory(t) {
        return new (t || AuthHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AuthHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthHttpInterceptor,
        factory: AuthHttpInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHttpInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/auth/auth-guard.service */
      "Z03G");
      /* harmony import */


      var _forum_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forum/auth/auth.component */
      "7bXq");
      /* harmony import */


      var _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forum/forum.component */
      "m5Ef");

      var routes = [{
        path: '',
        canActivate: [src_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: '',
          redirectTo: 'forums',
          pathMatch: 'full'
        }, {
          path: 'forums',
          component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__["ForumComponent"]
        }]
      }, {
        path: 'auth',
        component: _forum_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [src_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map