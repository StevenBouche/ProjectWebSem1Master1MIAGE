(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Documents\Scolaire\ProjectWebSem1Master1MIAGE\AngularUI\angular-app\src\main.ts */"zUnb");


/***/ }),

/***/ "7iwf":
/*!******************************!*\
  !*** ./src/model/Channel.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channel; });
class Channel {
}


/***/ }),

/***/ "9DuC":
/*!****************************!*\
  !*** ./src/model/Forum.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Forum; });
class Forum {
}


/***/ }),

/***/ "A+T+":
/*!***********************************!*\
  !*** ./src/model/FactoryModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FactoryModel; });
/* harmony import */ var src_model_Forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/Forum */ "9DuC");
/* harmony import */ var src_model_Channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/Channel */ "7iwf");
/* harmony import */ var src_model_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/Message */ "Y6mB");
/* harmony import */ var src_model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/User */ "XCLM");




class FactoryModel {
    static createForums() {
        var forums = new Array();
        for (let i = 0; i < 10; i++) {
            forums.push(FactoryModel.createForum("" + i, "Forum " + i));
        }
        return forums;
    }
    static createForum(id, name) {
        var forum = new src_model_Forum__WEBPACK_IMPORTED_MODULE_0__["default"]();
        forum.id = id;
        forum.name = name;
        forum.channels = FactoryModel.createChannels(name);
        forum.users = FactoryModel.createUsers();
        forum.urlPicture = "/assets/forum" + id + ".jpg";
        return forum;
    }
    static createChannels(nameForum) {
        var channels = new Array();
        for (let i = 0; i < 10; i++) {
            channels.push(FactoryModel.createChannel("" + i, "channel " + i + " " + nameForum));
        }
        return channels;
    }
    static createChannel(id, name) {
        var channel = new src_model_Channel__WEBPACK_IMPORTED_MODULE_1__["default"]();
        channel.id = id;
        channel.name = name;
        channel.messages = FactoryModel.createMessages(name);
        return channel;
    }
    static createMessages(value) {
        var messages = new Array();
        for (let i = 0; i < 10; i++) {
            var user = FactoryModel.createUser("" + i, "user" + i, "/assets/avatar (" + i + ").jpg");
            messages.push(FactoryModel.createMessage("" + i, "message" + i + " " + value, "date" + i, user));
        }
        return messages;
    }
    static createMessage(id, value, date, user) {
        var message = new src_model_Message__WEBPACK_IMPORTED_MODULE_2__["default"]();
        message.id = id;
        message.value = value;
        message.date = date;
        message.user = user;
        return message;
    }
    static createUsers() {
        var users = new Array();
        for (let i = 0; i < 10; i++) {
            users.push(FactoryModel.createUser("" + i, "user" + i, "/assets/avatar (" + i + ").jpg"));
        }
        return users;
    }
    static createUser(id, name, urlPicture) {
        var user = new src_model_User__WEBPACK_IMPORTED_MODULE_3__["default"]();
        user.pseudo = name;
        user.id = id;
        user.urlPicture = urlPicture;
        return user;
    }
    static createCurrentUsers() {
        return this.createUser("0", "user0", "/assets/avatar (0).jpg");
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "JsFy":
/*!***********************************************************************!*\
  !*** ./src/app/forum/forumpanel/messageitem/messageitem.component.ts ***!
  \***********************************************************************/
/*! exports provided: MessageitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageitemComponent", function() { return MessageitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageitemComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessageitemComponent.ɵfac = function MessageitemComponent_Factory(t) { return new (t || MessageitemComponent)(); };
MessageitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageitemComponent, selectors: [["app-messageitem"]], inputs: { message: "message" }, decls: 12, vars: 4, consts: [[1, "flex-none"], ["href", "#"], ["alt", "avatar", 1, "w-10", "h-10", "rounded-full", 3, "src"], [1, "ml-5"], ["href", "#", 1, "text-white", "hover:underline"], [1, "text-xs", "text-gray-600", "ml-1"]], template: function MessageitemComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.message.user.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.user.pseudo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvbWVzc2FnZWl0ZW0vbWVzc2FnZWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messageitem',
                templateUrl: './messageitem.component.html',
                styleUrls: ['./messageitem.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AUTH works !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Trlw":
/*!*****************************************************************!*\
  !*** ./src/app/forum/forumpanel/useritem/useritem.component.ts ***!
  \*****************************************************************/
/*! exports provided: UseritemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseritemComponent", function() { return UseritemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UseritemComponent {
    constructor() { }
    ngOnInit() {
    }
}
UseritemComponent.ɵfac = function UseritemComponent_Factory(t) { return new (t || UseritemComponent)(); };
UseritemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseritemComponent, selectors: [["app-useritem"]], inputs: { user: "user" }, decls: 6, vars: 2, consts: [["href", "#", 1, "flex", "items-center"], [1, "flex-none"], ["href", "#"], ["alt", "avatar", 1, "w-8", "h-8", "rounded-full", 3, "src"], [1, "ml-2"]], template: function UseritemComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.pseudo);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvdXNlcml0ZW0vdXNlcml0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseritemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-useritem',
                templateUrl: './useritem.component.html',
                styleUrls: ['./useritem.component.scss']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XCLM":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
}


/***/ }),

/***/ "Y6mB":
/*!******************************!*\
  !*** ./src/model/Message.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
class Message {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum/forum.component */ "m5Ef");
/* harmony import */ var _forum_forumitem_forumitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum/forumitem/forumitem.component */ "sIGX");
/* harmony import */ var _forum_forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum/forumpanel/forumpanel.component */ "sjqV");
/* harmony import */ var _forum_forumpanel_channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum/forumpanel/channelitem/channelitem.component */ "omki");
/* harmony import */ var _forum_forumpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum/forumpanel/useritem/useritem.component */ "Trlw");
/* harmony import */ var _forum_forumpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum/forumpanel/messageitem/messageitem.component */ "JsFy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _forum_forumpanel_channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forum/forumpanel/channelpanel/channelpanel.component */ "qarh");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register/register.component */ "ZGml");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");


//COMPONENT












//ROUTING

// MBD



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"],
        _forum_forumitem_forumitem_component__WEBPACK_IMPORTED_MODULE_4__["ForumitemComponent"],
        _forum_forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_5__["ForumpanelComponent"],
        _forum_forumpanel_channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_6__["ChannelitemComponent"],
        _forum_forumpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_7__["UseritemComponent"],
        _forum_forumpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_8__["MessageitemComponent"],
        _forum_forumpanel_channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_10__["ChannelpanelComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"],
                    _forum_forumitem_forumitem_component__WEBPACK_IMPORTED_MODULE_4__["ForumitemComponent"],
                    _forum_forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_5__["ForumpanelComponent"],
                    _forum_forumpanel_channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_6__["ChannelitemComponent"],
                    _forum_forumpanel_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_7__["UseritemComponent"],
                    _forum_forumpanel_messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_8__["MessageitemComponent"],
                    _forum_forumpanel_channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_10__["ChannelpanelComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m5Ef":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_model_FactoryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/FactoryModel */ "A+T+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forumpanel/forumpanel.component */ "sjqV");
/* harmony import */ var _forumitem_forumitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forumitem/forumitem.component */ "sIGX");






function ForumComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-forumitem", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClickForum", function ForumComponent_li_4_Template_app_forumitem_onClickForum_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onForumSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forum_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forum", forum_r1)("isSelected", ctx_r0.forumIsSelected(forum_r1));
} }
class ForumComponent {
    constructor() {
        this.currentUser = src_model_FactoryModel__WEBPACK_IMPORTED_MODULE_1__["default"].createUser(0 + "", "user0", "/assets/avatar (0).jpg");
        this.forums = src_model_FactoryModel__WEBPACK_IMPORTED_MODULE_1__["default"].createForums();
        this.forumSelected = this.forums[0];
    }
    ngOnInit() {
    }
    onForumSelect(forum) {
        this.forumSelected = forum;
    }
    forumIsSelected(forum) {
        var test = this.forumSelected != undefined && forum != undefined && this.forumSelected.id === forum.id;
        return test;
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(); };
ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], decls: 6, vars: 3, consts: [[1, "flex"], [1, "bg-gray-900", "w-20", "flex-none", "flex", "flex-col", "min-h-screen", "h-screen", "px-2", "py-2"], [1, "channel-bar", "overflow-y-auto"], [1, "text-center"], ["class", "mt-3", 4, "ngFor", "ngForOf"], [3, "forum", "user"], [1, "mt-3"], [3, "forum", "isSelected", "onClickForum"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForumComponent_li_4_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-forumpanel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.forums);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forum", ctx.forumSelected)("user", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _forumpanel_forumpanel_component__WEBPACK_IMPORTED_MODULE_3__["ForumpanelComponent"], _forumitem_forumitem_component__WEBPACK_IMPORTED_MODULE_4__["ForumitemComponent"]], styles: [".channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #1F2225;\n}\n\n.channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #1F2225;\n}\n\n.channel-bar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #3F495A;\n}\n\napp-forumpanel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5uZWwtYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjIyNTtcbn1cblxuLmNoYW5uZWwtYmFyOjotd2Via2l0LXNjcm9sbGJhclxyXG57XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyMjI1O1xufVxuXG4uY2hhbm5lbC1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuYXBwLWZvcnVtcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forum',
                templateUrl: './forum.component.html',
                styleUrls: ['./forum.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "omki":
/*!***********************************************************************!*\
  !*** ./src/app/forum/forumpanel/channelitem/channelitem.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChannelitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelitemComponent", function() { return ChannelitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ChannelitemComponent {
    constructor() {
        this.onClickChannel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.onClickChannel.emit(this.channel);
    }
}
ChannelitemComponent.ɵfac = function ChannelitemComponent_Factory(t) { return new (t || ChannelitemComponent)(); };
ChannelitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelitemComponent, selectors: [["app-channelitem"]], inputs: { channel: "channel" }, outputs: { onClickChannel: "onClickChannel" }, decls: 5, vars: 1, consts: [[1, "flex", "items-center", 3, "click"], [1, "text-xl"], [1, "ml-2"]], template: function ChannelitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelitemComponent_Template_span_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.channel.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvY2hhbm5lbGl0ZW0vY2hhbm5lbGl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channelitem',
                templateUrl: './channelitem.component.html',
                styleUrls: ['./channelitem.component.scss']
            }]
    }], function () { return []; }, { channel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "qarh":
/*!*************************************************************************!*\
  !*** ./src/app/forum/forumpanel/channelpanel/channelpanel.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChannelpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelpanelComponent", function() { return ChannelpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messageitem/messageitem.component */ "JsFy");
/* harmony import */ var _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useritem/useritem.component */ "Trlw");





function ChannelpanelComponent_app_messageitem_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-messageitem", 40);
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r3);
} }
function ChannelpanelComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-useritem", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r4);
} }
function ChannelpanelComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-useritem", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r5);
} }
class ChannelpanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChannelpanelComponent.ɵfac = function ChannelpanelComponent_Factory(t) { return new (t || ChannelpanelComponent)(); };
ChannelpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelpanelComponent, selectors: [["app-channelpanel"]], inputs: { channel: "channel", usersOnline: "usersOnline", usersOffline: "usersOffline" }, decls: 50, vars: 4, consts: [[1, "flex", "text-white", "h-12"], [1, "flex-1", "bg-gray-800", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-4"], [1, "flex", "items-center"], [1, "text-gray-500", "text-2xl"], [1, "ml-2", "text-sm", "text-white"], ["href", "#", 1, "ml-4"], ["action", "#", 1, "relative"], ["type", "text", "placeholder", "Search", 1, "rounded", "bg-gray-900", "text-gray-200", "text-xs", "px-2", "py-1"], [1, "absolute", "right-0", "top-0", "mr-1", 2, "top", "6px"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "w-4", "h-4", "text-gray-500", "hover:text-gray-200"], ["d", "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", 1, "heroicon-ui"], [1, "flex-1", "flex", "justify-between", "overflow-y-hidden"], [1, "bg-gray-700", "flex-1", "flex", "flex-col", "justify-between"], [1, "chat", "text-sm", "text-gray-400", "overflow-y-auto"], ["class", "flex mx-6 my-3 py-4 border-t border-gray-600", 3, "message", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "py-4", "flex", "items-center", "border-t", "border-gray-600"], [1, "px-2", "py-2", "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white", "border-r", "border-gray-600"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["data-name", "Layer 2"], ["data-name", "plus-circle"], ["width", "24", "height", "24", "opacity", "0"], ["d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"], [1, "flex-1"], ["type", "text", 1, "w-full", "text-sm", "h-10", "px-2", "py-2", "bg-gray-700", "text-gray-200", "focus:outline-none"], [1, "px-2", "py-2", "bg-gray-700", "rounded-r", "flex", "items-center", "h-10"], [1, "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white"], ["fill", "currentColor", "viewBox", "0 0 512 512", 1, "w-6", "h-6"], ["d", "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"], [1, "h-10", "bg-gray-700", "rounded-l", "text-gray-500", "hover:text-white", "ml-3"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["id", "a", "d", "M24 24H0V0h24v24z"], ["id", "b"], [0, "xlink", "href", "#a", "overflow", "visible"], ["d", "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z", "clip-path", "url(#b)"], ["fill", "currentColor", "viewBox", "0 0 496 512", 1, "w-6", "h-6"], ["d", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"], [1, "sidebar-users", "text-sm", "bg-gray-800", "w-56", "flex-none", "px-3", "py-3", "overflow-y-auto"], [1, "uppercase", "tracking-wide", "font-semibold", "text-xs", "text-gray-500", "mb-2"], [1, "mb-6", "truncate"], ["class", "text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-700 py-1 my-2", 4, "ngFor", "ngForOf"], [1, "flex", "mx-6", "my-3", "py-4", "border-t", "border-gray-600", 3, "message"], [1, "text-gray-500", "px-2", "hover:text-gray-200", "hover:bg-gray-700", "py-1", "my-2"], [3, "user"]], template: function ChannelpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChannelpanelComponent_app_messageitem_17_Template, 1, 1, "app-messageitem", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "clipPath", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "use", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ChannelpanelComponent_li_45_Template, 2, 1, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ChannelpanelComponent_li_49_Template, 2, 1, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.channel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channel.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersOffline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _messageitem_messageitem_component__WEBPACK_IMPORTED_MODULE_2__["MessageitemComponent"], _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_3__["UseritemComponent"]], styles: [".sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.sidebar-users[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1wYW5lbC9jaGFubmVscGFuZWwvY2hhbm5lbHBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBRUUsV0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUFIRjs7QUFNQTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtcGFuZWwvY2hhbm5lbHBhbmVsL2NoYW5uZWxwYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLnNpZGViYXItdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5zaWRlYmFyLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDk1QTtcbn1cblxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjIyMjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelpanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channelpanel',
                templateUrl: './channelpanel.component.html',
                styleUrls: ['./channelpanel.component.scss']
            }]
    }], function () { return []; }, { channel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersOnline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersOffline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
;


/***/ }),

/***/ "sIGX":
/*!********************************************************!*\
  !*** ./src/app/forum/forumitem/forumitem.component.ts ***!
  \********************************************************/
/*! exports provided: ForumitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumitemComponent", function() { return ForumitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForumitemComponent {
    constructor() {
        this.onClickForum = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.onClickForum.emit(this.forum);
    }
    isActive() {
        return this.isSelected ? "active" : "";
    }
}
ForumitemComponent.ɵfac = function ForumitemComponent_Factory(t) { return new (t || ForumitemComponent)(); };
ForumitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumitemComponent, selectors: [["app-forumitem"]], inputs: { forum: "forum", isSelected: "isSelected" }, outputs: { onClickForum: "onClickForum" }, decls: 2, vars: 5, consts: [["href", "#", 3, "click"], [1, "w-12", "h-12", "rounded-full", "mx-auto", 3, "src", "alt"]], template: function ForumitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumitemComponent_Template_a_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.forum.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.forum.name);
    } }, styles: ["a[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\na.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n  border-radius: 0%;\n}\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border-radius: 25%;\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1pdGVtL2ZvcnVtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvZm9ydW0vZm9ydW1pdGVtL2ZvcnVtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJi5hY3RpdmUge1xuICAgIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICB9XG4gIH1cbiAgaW1nIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbiAgfVxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forumitem',
                templateUrl: './forumitem.component.html',
                styleUrls: ['./forumitem.component.scss']
            }]
    }], function () { return []; }, { forum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickForum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sjqV":
/*!**********************************************************!*\
  !*** ./src/app/forum/forumpanel/forumpanel.component.ts ***!
  \**********************************************************/
/*! exports provided: ForumpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumpanelComponent", function() { return ForumpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channelpanel/channelpanel.component */ "qarh");
/* harmony import */ var _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channelitem/channelitem.component */ "omki");





function ForumpanelComponent_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-channelitem", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClickChannel", function ForumpanelComponent_ul_21_li_1_Template_app_channelitem_onClickChannel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onChannelSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getChannelClass(channel_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channel", channel_r2);
} }
function ForumpanelComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumpanelComponent_ul_21_li_1_Template, 2, 4, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.forum.channels);
} }
class ForumpanelComponent {
    constructor() {
        this.displayParamForum = false;
        this.cacheSelected = new Map();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.forum != undefined)
            this.onChangeForum(changes.forum);
    }
    onChangeForum(forum) {
        var idChannel = this.cacheSelected.get(this.forum.id);
        //si le forum n'a pas de channel referencer setup le premier channel sinon recupere le channel dans le cache du bon forum
        if (idChannel != undefined) {
            // si pas de channel => undefined, si le channel dans le cache existe alors => channel_cache, sinon prend le premier du forum
            var channel = this.forum.channels[idChannel];
            this.channelSelected = channel != undefined ? channel : this.forum.channels.length > 0 ? this.forum.channels[0] : undefined;
        }
        else {
            this.channelSelected = this.forum.channels.length > 0 ? this.forum.channels[0] : undefined;
            if (this.channelSelected != undefined)
                this.updateCacheChannel();
        }
    }
    onClickParamForum() {
        console.log("click on param forum");
        this.displayParamForum = !this.displayParamForum;
    }
    onChannelSelect(channel) {
        this.channelSelected = channel;
        this.updateCacheChannel();
    }
    updateCacheChannel() {
        this.cacheSelected.set(this.forum.id, this.channelSelected.id);
    }
    getChannelClass(channel) {
        if (this.channelSelected.id === channel.id) {
            return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
        }
        else {
            return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
        }
    }
}
ForumpanelComponent.ɵfac = function ForumpanelComponent_Factory(t) { return new (t || ForumpanelComponent)(); };
ForumpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumpanelComponent, selectors: [["app-forumpanel"]], inputs: { forum: "forum", user: "user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 45, vars: 14, consts: [[1, "flex-1", "flex", "min-h-screen", "h-screen"], [1, "bg-gray-800", "w-56", "flex-none", "flex", "flex-col", "justify-between"], [1, "hashtag-bar", "text-sm", "leading-relaxed", "overflow-y-auto"], [1, "paramForum", "text-white", "h-12", "bg-gray-800", "w-56", "flex-none", "flex", "items-center", "justify-between", "border-b", "border-gray-900", "px-3", "py-2"], [1, "flex-none", "flex", "hover:bg-gray-900", "rounded", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["d", "M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z", 1, "heroicon-ui"], [1, "rounded-lg"], [1, "px-2", "py-3"], [1, "text-gray-500", "px-2", "hover:text-gray-200", "hover:bg-gray-900"], [1, "flex", "items-center"], [1, "text-xl"], [1, "ml-2"], [1, "py-2", "flex", "items-center", "text-gray-500", "hover:text-gray-200"], [1, "uppercase", "tracking-wide", "font-semibold", "text-xs", 2, "text-align", "center"], ["class", "px-2 py-3", 4, "ngIf"], [1, "bg-gray-850", "px-3", "py-2", "flex", "items-center", "justify-between"], ["href", "#"], ["alt", "avatar", 1, "w-8", "h-8", "rounded-full", 3, "src"], [1, "text-xs", "ml-2"], [1, "text-white"], [1, "text-gray-500", "text-xxs"], [1, "flex", "items-center", "text-gray-500"], ["href", "#", 1, "hover:text-white"], ["fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["href", "#", 1, "ml-3", "hover:text-white"], ["d", "M0 0h24v24H0z", "opacity", ".1", "fill", "none"], ["d", "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"], [1, "flex-1", "flex", "flex-col", 3, "channel", "usersOffline", "usersOnline"], [3, "class", 4, "ngFor", "ngForOf"], [3, "channel", "onClickChannel"]], template: function ForumpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumpanelComponent_Template_button_click_4_listener() { return ctx.onClickParamForum(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tailwind CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ForumpanelComponent_ul_21_Template, 2, 1, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-channelpanel", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("b-gray-900", ctx.displayParamForum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forum.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("paramisshow", !ctx.displayParamForum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.displayParamForum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forum.channels.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.urlPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.pseudo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channel", ctx.channelSelected)("usersOffline", ctx.forum.users)("usersOnline", ctx.forum.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _channelpanel_channelpanel_component__WEBPACK_IMPORTED_MODULE_2__["ChannelpanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _channelitem_channelitem_component__WEBPACK_IMPORTED_MODULE_3__["ChannelitemComponent"]], styles: [".messagebar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 0px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #3F495A;\n}\n\n.hashtag-bar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #1F2225;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.paramForum[_ngcontent-%COMP%] {\n  transition: all 1s ease-out;\n}\n\n.paramForum[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  width: 100%;\n}\n\n.paramForum[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.paramForum[_ngcontent-%COMP%]   .paramisshow[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vZm9ydW1wYW5lbC9mb3J1bXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBRUUsV0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFRRSwyQkFBQTtBQVJGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFBSTtFQUNFLFVBQUE7QUFFTjs7QUFFRTtFQUNFLHdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9mb3J1bS9mb3J1bXBhbmVsL2ZvcnVtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZWJhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzaHRhZy1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0OTVBO1xufVxuXG4uaGFzaHRhZy1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ5NUE7XG59XG5cbi5oYXNodGFnLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyMjI1O1xufVxuXG4uZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGFyYW1Gb3J1bXtcbiAgYnV0dG9ue1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBzcGFuIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICB9XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgLnBhcmFtaXNzaG93e1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumpanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forumpanel',
                templateUrl: './forumpanel.component.html',
                styleUrls: ['./forumpanel.component.scss']
            }]
    }], function () { return []; }, { forum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum/forum.component */ "m5Ef");






const routes = [
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'panel', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map