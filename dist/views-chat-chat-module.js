(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-chat-module"],{

/***/ "ADy8":
/*!*********************************************************************!*\
  !*** ./src/app/views/chat/chat-contents/chat-contents.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentsComponent", function() { return ChatContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "aKbQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "rXAn");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/http.service */ "Tdnt");
/* harmony import */ var src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/variables.service */ "R0oX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ "goBR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");



















const _c0 = ["imageModal"];
const _c1 = ["msgForm"];
const _c2 = ["msgInput"];
function ChatContentsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://192.168.0.4:3300/user/", ctx_r0.message.profile_img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message == null ? null : ctx_r0.message.name);
} }
function ChatContentsComponent_div_5_div_1_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r8.msg);
} }
function ChatContentsComponent_div_5_div_1_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", chat_r8.msg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentsComponent_div_5_div_1_div_1_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_div_5_div_1_div_1_a_14_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.downloadUrl(chat_r8.msg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_div_5_div_1_div_1_a_14_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.imgview(chat_r8.msg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatContentsComponent_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatContentsComponent_div_5_div_1_div_1_p_10_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatContentsComponent_div_5_div_1_div_1_p_12_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatContentsComponent_div_5_div_1_div_1_a_14_Template, 5, 0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://192.168.0.4:3300/user/", ctx_r9.login_data.profile_img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.loggeduser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, chat_r8.sendTimestamp * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType != "text");
} }
function ChatContentsComponent_div_5_div_1_div_3_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r8.msg);
} }
function ChatContentsComponent_div_5_div_1_div_3_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", chat_r8.msg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentsComponent_div_5_div_1_div_3_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_div_5_div_1_div_3_a_13_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.download(chat_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_div_5_div_1_div_3_a_13_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r30.imgview(chat_r8, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", chat_r8.msg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentsComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatContentsComponent_div_5_div_1_div_3_p_9_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatContentsComponent_div_5_div_1_div_3_p_11_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatContentsComponent_div_5_div_1_div_3_a_13_Template, 5, 1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.message == null ? null : ctx_r10.message.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, chat_r8.sendTimestamp * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.msgType != "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://192.168.0.4:3300/user/", ctx_r10.message.profile_img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentsComponent_div_5_div_1_div_1_Template, 15, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatContentsComponent_div_5_div_1_div_3_Template, 15, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.senderId == ctx_r7.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r8.senderId == ctx_r7.message.id);
} }
const _c3 = function () { return { suppressScrollX: true }; };
function ChatContentsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentsComponent_div_5_div_1_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messageList);
} }
function ChatContentsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_div_6_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.message_send($event); })("keyup.enter", function ChatContentsComponent_div_6_Template_button_keyup_enter_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.message_send($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChatContentsComponent_div_6_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onSingleFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatContentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 54);
} }
const _c4 = function () { return { scale: ".2", delay: "400ms", duration: "400ms" }; };
const _c5 = function (a1) { return { value: "*", params: a1 }; };
const _c6 = function () { return { y: "120px", delay: "600ms", duration: "400ms" }; };
function ChatContentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a contact and start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c6)));
} }
function ChatContentsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentsComponent_ng_template_9_Template_button_click_1_listener() { const modal_r40 = ctx.$implicit; return modal_r40.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ChatContentsComponent {
    constructor(chatService, service, sanitizer, modalService, variable) {
        this.chatService = chatService;
        this.service = service;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.variable = variable;
        this.user = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeContact = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.incomingmsg = [];
        this.messageList = [];
        this.msg = '';
        this.selectedFile = null;
        this.url = '';
        this.color = 'red';
        this.img = '';
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.loggeduser = JSON.parse(localStorage.getItem('loggeduser'));
        this.login_data = JSON.parse(localStorage.getItem('loginData'));
        this.service.currentMessage.subscribe(message => {
            this.message = (message) ? message : '';
            this.userChat();
        });
        this.service
            .getMessages()
            .subscribe((res) => {
            this.messageList.push(res);
            this.scrollToBottom();
        });
    }
    ngOnDestroy() {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.chatSelectSub) {
            this.chatSelectSub.unsubscribe();
        }
        if (this.chatUpdateSub) {
            this.chatUpdateSub.unsubscribe();
        }
    }
    /*==========Single Image Function Start Here========*/
    onSingleFileChange(event) {
        this.selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        this.service.getSingleImage(formData).subscribe(res => {
            console.log("imagesssssssssss", res);
            if (res['status'] == 1) {
                this.service.sendMessage(res['data'], this.userId, this.message.id, this.message.group_id, 'image');
            }
        });
    }
    /*==========Single Image Function End Here========*/
    userChat() {
        this.service.getUserChat(this.userId, this.message.group_id)
            .subscribe(res => {
            if (res['status'] == 1) {
                this.chat_Obj = res['data'];
                this.messageList = this.chat_Obj;
            }
            else {
                this.messageList = [];
            }
        });
    }
    singleImageUpload() {
        console.log("imagesss file", this.selectedFile);
    }
    message_send(e) {
        console.log(e);
        this.textForm = this.msgForm.form.value.message;
        if (this.textForm != '' && this.textForm != undefined && this.textForm != null) {
            this.service.sendMessage(this.textForm, this.userId, this.message.id, this.message.group_id, 'text');
        }
        this.msgForm.form.reset();
    }
    initMsgForm() {
        setTimeout(() => {
            this.msgForm.reset();
            this.msgInput.first.nativeElement.focus();
            this.scrollToBottom();
        });
    }
    scrollToBottom() {
        setTimeout(() => {
            this.psContainer.update();
            this.psContainer.scrollToBottom(0, 400);
        });
    }
    changeStyle(e) {
        console.log("ppppppp");
    }
    downloadUrl(url, fileName) {
        const a = document.createElement('a');
        console.log(a);
        a.href = url;
        console.log(url);
        a.click();
        a.download = url;
        //a.target="_self"
        document.body.appendChild(a);
        a.style = 'display: none';
    }
    imgview(e) {
        console.log("images", e);
        window.open(e);
    }
}
ChatContentsComponent.ɵfac = function ChatContentsComponent_Factory(t) { return new (t || ChatContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_6__["VariablesService"])); };
ChatContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContentsComponent, selectors: [["app-chat-contents"]], viewQuery: function ChatContentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.psContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgInput = _t);
    } }, inputs: { matSidenav: "matSidenav" }, decls: 11, vars: 5, consts: [[1, "d-flex", "pl-3", "pr-3", "pt-2", "pb-2", "o-hidden", "box-shadow-1", "chat-topbar"], ["appSidebarToggler", "chat-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "i-Right", "ml-0", "mr-3"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "chat-content rtl-ps-none", 3, "perfectScrollbar", 4, "ngIf"], ["class", "pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area", 4, "ngIf"], ["class", "spinner-glow spinner-glow-warning", 4, "ngIf"], ["class", "app-inro-circle", 4, "ngIf"], ["imageModal", ""], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "rounded-circle", "mr-2", 3, "src"], [1, "m-0", "text-title", "text-16", "flex-grow-1"], [1, "chat-content", "rtl-ps-none", 3, "perfectScrollbar"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], [4, "ngIf"], [1, "d-flex", "user"], [1, "avatar-sm", "rounded-circle", "mr-3", 3, "src"], [1, "message", "flex-grow-1"], [1, "d-flex"], [1, "mb-1", "text-title", "text-16", "flex-grow-1"], [1, "text-small", "text-muted"], ["class", "m-0", 4, "ngIf"], [1, "images"], [1, "overlay"], ["class", "icon", 4, "ngIf"], [1, "m-0"], ["id", "show", 1, "zoom", "mr-3", 2, "width", "100px", "height", "100px", 3, "src"], [1, "icon"], ["title", "Download Image", 1, "i-Download", 3, "click"], [1, "ml-2"], ["href", "#", "target", "_blank"], ["title", "View Image", 1, "i-Information", 3, "click"], ["class", "icon", "title", "User Profile", 4, "ngIf"], [1, "avatar-sm", "rounded-circle", "ml-3", 3, "src"], [1, "mr-3", 2, "width", "100px", "height", "100px", 3, "src"], ["title", "User Profile", 1, "icon"], ["target", "_self", "download", "image", 3, "href"], [1, "i-Download", 3, "click"], [1, "i-Information", 3, "click"], [1, "pl-3", "pr-3", "pt-3", "pb-3", "box-shadow-1", "chat-input-area"], [1, "inputForm"], ["msgForm", "ngForm"], [1, "form-group"], ["ngModel", "", "placeholder", "Type your message", "name", "message", "id", "message", "cols", "30", "rows", "3", 1, "form-control", "form-control-rounded"], ["msgInput", ""], [1, "flex-grow-1"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-primary", "mr-2", 3, "click", "keyup.enter"], [1, "i-Paper-Plane"], [1, "image-upload"], ["for", "file-input"], [1, "btn", "btn-icon", "btn-rounded", "btn-outline-primary"], [1, "i-Add-File"], ["id", "file-input", "type", "file", 3, "change"], [1, "spinner-glow", "spinner-glow-warning"], [1, "app-inro-circle"], [1, "border", "rounded-circle", "big-bubble"], [1, "i-Speach-Bubbles"], [1, "text-16"], [1, "modal-header"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "zoom", "mr-3", 2, "width", "473px", "height", "300px", 3, "src"]], template: function ChatContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentsComponent_div_4_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatContentsComponent_div_5_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatContentsComponent_div_6_Template, 15, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatContentsComponent_div_7_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatContentsComponent_div_8_Template, 5, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatContentsComponent_ng_template_9_Template, 6, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.user_chat_img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.loadingCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.loadingCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.variable.loadingCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.variable.loadingCollection);
    } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_9__["SidebarTogglerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".image-upload[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  cursor: pointer;\n}\n\n.images[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n#zoom[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 50%;\n  opacity: 0;\n  transition: .3s ease;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n.images[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.i-Paper-Plane[_ngcontent-%COMP%]:hover {\n  color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2hhdC9jaGF0LWNvbnRlbnRzL2NoYXQtY29udGVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhO0FBQWpCOztBQUdBO0VBRUksV0FBVztFQUNYLGVBQWU7QUFEbkI7O0FBaUJBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFkcEI7O0FBaUJFO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBZGhCOztBQWdCRTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDBDQUEyQztBQWIvQzs7QUFnQkU7RUFDRSxVQUFVO0FBYmQ7O0FBZ0JFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQWJ0Qjs7QUFnQkU7RUFDRSxXQUFXO0FBYmYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jaGF0L2NoYXQtY29udGVudHMvY2hhdC1jb250ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS11cGxvYWQgPiBpbnB1dFxue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbWFnZS11cGxvYWQgaW1nXG57XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLy8gLnpvb20ge1xuICAgIC8vIHBhZGRpbmc6IDUwcHg7XG4gICAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbiAgICAvLyB3aWR0aDogMjAwcHg7XG4gICAgLy8gaGVpZ2h0OiAyMDBweDtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbi8vICAgfVxuICBcbi8vICAgLnpvb206aG92ZXIge1xuLy8gICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFIDkgKi9cbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogU2FmYXJpIDMtOCAqL1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgXG4vLyAgIH1cblxuLmltYWdlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gICN6b29tIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpOztcbiAgfVxuXG4gIC5pbWFnZXM6aG92ZXIgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmktUGFwZXItUGxhbmU6aG92ZXIge1xuICAgIGNvbG9yOiAjZWVlO1xuICB9Il19 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-contents',
                templateUrl: './chat-contents.component.html',
                styleUrls: ['./chat-contents.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_6__["VariablesService"] }]; }, { matSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSidenav']
        }], psContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]]
        }], imageModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageModal', { static: true }]
        }], msgInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['msgInput']
        }], msgForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['msgForm']
        }] }); })();


/***/ }),

/***/ "B/JZ":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ "goBR");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-contents/chat-contents.component */ "ADy8");
/* harmony import */ var _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-left-sidebar/chat-left-sidebar.component */ "UuZN");





class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 5, vars: 0, consts: [["appSidebarContainer", "", 1, "card", "chat-sidebar-container"], ["appSidebarContent", "", 1, "chat-content-wrap"], ["appSidebar", "chat-sidebar", 1, "chat-sidebar-wrap"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat-left-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarContainerDirective"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarContentDirective"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_2__["ChatContentsComponent"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ChatLeftSidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R0oX":
/*!******************************************************!*\
  !*** ./src/app/shared/services/variables.service.ts ***!
  \******************************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class VariablesService {
    constructor() {
        this.loadingCollection = false;
        this.user_chat_img = false;
    }
}
VariablesService.ɵfac = function VariablesService_Factory(t) { return new (t || VariablesService)(); };
VariablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VariablesService, factory: VariablesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UuZN":
/*!*****************************************************************************!*\
  !*** ./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatLeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidebarComponent", function() { return ChatLeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "aKbQ");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/http.service */ "Tdnt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/variables.service */ "R0oX");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");












const _c0 = function (a0) { return { online: a0 }; };
function ChatLeftSidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLeftSidebarComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getChatByContact(contact_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, contact_r1.status === "online"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://192.168.0.4:3300/user/", contact_r1.profile_img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.name);
} }
const _c1 = function () { return { suppressScrollX: true }; };
class ChatLeftSidebarComponent {
    constructor(chatService, service, router, variable) {
        this.chatService = chatService;
        this.service = service;
        this.router = router;
        this.variable = variable;
        this.isSidenavOpen = true;
        this.currentUser = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
        this.login_data = JSON.parse(localStorage.getItem('loginData'));
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.getContactList();
    }
    getContactList() {
        this.service.getContactData(this.userId)
            .subscribe(res => {
            if (res['status'] == 1) {
                this.contacts = res['data'];
            }
        });
    }
    getChatByContact(contact) {
        this.variable.user_chat_img = true;
        console.log("select contact", contact);
        this.variable.loadingCollection = true;
        this.service.changeMessage(contact);
        if (contact.group_id == '0') {
            console.log("group_id", contact.group_id);
            // send request
            this.service.requestSend(this.userId, contact.id).subscribe(res => {
                if (res['status'] == 1) {
                    this.getContactList();
                }
            });
        }
    }
}
ChatLeftSidebarComponent.ɵfac = function ChatLeftSidebarComponent_Factory(t) { return new (t || ChatLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"])); };
ChatLeftSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatLeftSidebarComponent, selectors: [["app-chat-left-sidebar"]], decls: 5, vars: 3, consts: [[1, "border-right"], [1, "contacts-scrollable", "rtl-ps-none", 3, "perfectScrollbar"], [1, "mt-3", "pb-2", "pl-3", "pr-3", "font-weight-bold", "text-muted", "border-bottom"], ["class", "p-3 d-flex border-bottom align-items-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "p-3", "d-flex", "border-bottom", "align-items-center", 3, "ngClass", "click"], ["alt", "", 1, "avatar-sm", "rounded-circle", "mr-3", 3, "src"], [1, ""]], template: function ChatLeftSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLeftSidebarComponent_div_4_Template, 4, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXQvY2hhdC1sZWZ0LXNpZGViYXIvY2hhdC1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatLeftSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-left-sidebar',
                templateUrl: './chat-left-sidebar.component.html',
                styleUrls: ['./chat-left-sidebar.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_shared_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"] }]; }, null); })();


/***/ }),

/***/ "aKbQ":
/*!********************************************!*\
  !*** ./src/app/views/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: User, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class User {
}
class ChatService {
    constructor(http) {
        this.http = http;
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    loadChatData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getAllContacts(), this.getAllChats(), this.getCurrentUser(), (contacts, chats, user) => {
            this.contacts = contacts;
            this.chats = chats;
            this.user = user;
            // console.log('next.willCall')
            this.onUserUpdated.next(user);
            // console.log('next.called')
            // console.log(
            //   "contacts:",
            //   contacts,
            //   "\n chats:",
            //   chats,
            //   "\n currUser:",
            //   user
            // );
        });
    }
    getChatByContact(contactId) {
        this.loadingCollection = true;
        const chatInfo = this.user.chatInfo.find(chat => chat.contactId === contactId);
        if (!chatInfo) {
            return this.createChatCollection(contactId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(chatColl => {
                return this.getChatByContact(contactId);
            }));
        }
        return this.getAllChats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(chats => {
            const chatCollection = chats.find(chat => chat.id === chatInfo.chatId);
            const contact = this.contacts.find(contact => contact.id === contactId);
            this.onChatSelected.next({
                chatCollection: chatCollection,
                contact: contact
            });
            this.loadingCollection = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(chatCollection);
        }));
    }
    createChatCollection(contactId) {
        const contact = this.contacts.find(contact => contact.id === contactId);
        const chatId = (Math.random() * 1000000000).toString();
        const chatCollection = {
            id: chatId,
            chats: []
        };
        const chatInfo = {
            chatId: chatId,
            lastChatTime: new Date(),
            contactId: contact.id,
            contactName: contact.name,
            unread: null
        };
        return this.http
            .post('api/chat-collections', Object.assign({}, chatCollection))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(updatedChatCollection => {
            this.user.chatInfo.push(chatInfo);
            return this.updateUser(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                return this.getCurrentUser()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
                    this.user = user;
                    // console.log(user)
                    this.onUserUpdated.next(user);
                }));
                // return updatedChatCollection
            }));
        }));
    }
    getAllContacts() {
        return this.http.get('api/contacts');
    }
    getAllChats() {
        return this.http.get('api/chat-collections');
    }
    getCurrentUser() {
        return this.http.get('api/chat-user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res[0]));
    }
    updateUser(user) {
        return this.http.put(`api/chat-user/${user.id}`, Object.assign({}, user));
    }
    updateChats(chatId, chats) {
        const chatCollection = {
            id: chatId,
            chats: chats
        };
        return this.http.put('api/chat-collections', chatCollection);
    }
    autoReply(chat) {
        setTimeout(() => {
            this.onChatsUpdated.next(chat);
        }, 1500);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jykL":
/*!*******************************************!*\
  !*** ./src/app/views/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ "tfKl");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "B/JZ");
/* harmony import */ var _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-left-sidebar/chat-left-sidebar.component */ "UuZN");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-contents/chat-contents.component */ "ADy8");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "mnDI");
/* harmony import */ var src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/shared-pipes.module */ "aYsj");











class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
            src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ChatLeftSidebarComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
        src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                    src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]
                ],
                declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ChatLeftSidebarComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tfKl":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "B/JZ");





const routes = [
    {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
    }
];
class ChatRoutingModule {
}
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-chat-chat-module.js.map