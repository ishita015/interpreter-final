(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ui-kits-ui-kits-module"],{

/***/ "1mWw":
/*!*************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits.module.ts ***!
  \*************************************************/
/*! exports provided: UiKitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsModule", function() { return UiKitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kits-routing.module */ "TjWR");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ "U7Xu");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ "2/E3");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "ztKk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordions/accordions.component */ "wkmv");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/modals.component */ "2EEf");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alerts/alerts.component */ "9aw5");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "C267");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./badges/badges.component */ "v6wb");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "DTW6");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loaders/loaders.component */ "KHjL");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "mnDI");
/* harmony import */ var _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./buttons-loading/buttons-loading.component */ "oM/W");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-ladda */ "R3i3");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./popover/popover.component */ "os3j");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rating/rating.component */ "xvVx");

























class UiKitsModule {
}
UiKitsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: UiKitsModule });
UiKitsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function UiKitsModule_Factory(t) { return new (t || UiKitsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_13__["NgxEchartsModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
            src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__["SharedDirectivesModule"],
            angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"].forRoot({ style: 'expand-left' }),
            _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UiKitsModule, { declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
        _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
        _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["CardsEcommerceComponent"],
        _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__["AccordionsComponent"],
        _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__["ModalsComponent"],
        _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__["AlertsComponent"],
        _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__["CardMetricsComponent"],
        _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__["BadgesComponent"],
        _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__["CardWidgetsComponent"],
        _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__["LoadersComponent"],
        _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsLoadingComponent"],
        _popover_popover_component__WEBPACK_IMPORTED_MODULE_21__["PopoverComponent"],
        _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__["RatingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_13__["NgxEchartsModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
        src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__["SharedDirectivesModule"], angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"], _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UiKitsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_13__["NgxEchartsModule"],
                    src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
                    src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__["SharedDirectivesModule"],
                    angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"].forRoot({ style: 'expand-left' }),
                    _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitsRoutingModule"]
                ],
                declarations: [
                    _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                    _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                    _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["CardsEcommerceComponent"],
                    _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__["AccordionsComponent"],
                    _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__["ModalsComponent"],
                    _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__["AlertsComponent"],
                    _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__["CardMetricsComponent"],
                    _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__["BadgesComponent"],
                    _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__["CardWidgetsComponent"],
                    _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__["LoadersComponent"],
                    _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsLoadingComponent"],
                    _popover_popover_component__WEBPACK_IMPORTED_MODULE_21__["PopoverComponent"],
                    _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__["RatingComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "2/E3":
/*!********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.ts ***!
  \********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



function CardsComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CardsComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Fancy title");
} }
function CardsComponent_ng_template_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CardsComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsComponent.??fac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 216, vars: 1, consts: [[1, ""], [1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-icon-bg", "card-icon-bg-primary", "o-hidden", "mb-4"], [1, "card-body", "text-center"], [1, "i-Add-User"], [1, "content"], [1, "text-muted", "mt-2", "mb-0"], [1, "lead", "text-primary", "text-24", "mb-2"], [1, "i-Financial"], [1, "i-Checkout-Basket"], [1, "i-Money-2"], [1, "col-lg-6", "col-md-12"], [1, "col-md-4"], [1, "card", "card-icon", "mb-4"], [1, "i-Data-Upload"], [1, "text-muted", "mt-2", "mb-2"], [1, "lead", "text-22", "m-0"], [1, "card", "card-icon-big", "mb-4"], [1, "lead", "text-18", "mt-2", "mb-0"], [1, "i-Gear"], [1, "i-Bell"], [1, "col-md-12"], [1, "card", "mb-4"], ["title", "Simple"], ["ngbTabContent", ""], ["ngbTabTitle", ""], ["title", "Disabled", 3, "disabled"], [1, "col-md-6"], [1, "card", "card-profile-1", "mb-4"], [1, "avatar", "box-shadow-2", "mb-3"], ["src", "./assets/images/faces/16.jpg", "alt", ""], [1, "m-0"], [1, "mt-0"], [1, "btn", "btn-primary", "btn-rounded"], [1, "card-socials-simple", "mt-4"], [1, "i-Linkedin-2"], [1, "i-Facebook-2"], [1, "i-Twitter"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary", "btn-rounded"], [1, "card", "bg-dark", "text-white", "o-hidden", "mb-4"], ["src", "./assets/images/photo-wide-2.jpg", "alt", "Card image", 1, "card-img"], [1, "card-img-overlay"], [1, "card-title", "text-white"], ["href", "#", 1, "card-link"], ["src", "./assets/images/photo-long-1.jpg", "alt", "Card image", 1, "card-img"], [1, "text-center", "pt-4"], [1, "card-title", "mb-2", "text-white"], [1, "separator", "border-top", "mb-2"], [1, "text-small", "font-italic"], [1, "p-1", "text-left", "card-footer", "font-weight-light", "d-flex"], [1, "mr-3", "d-flex", "align-items-center"], [1, "i-Speach-Bubble-6", "mr-1"], [1, "d-flex", "align-items-center"], [1, "i-Calendar-4", "mr-2"], ["src", "./assets/images/photo-long-2.jpg", "alt", "Card image", 1, "card-img"], [1, "card", "mb-4", "o-hidden"], ["src", "./assets/images/photo-wide-2.jpg", "alt", "", 1, "card-img-top"], ["src", "./assets/images/photo-wide-3.jpg", "alt", "", 1, "card-img-top"], [1, "list-group", "list-group-flush"], [1, "list-group-item"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "New Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "4021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Today's Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Total sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "4021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "4021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "4021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "4021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "ngb-tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, CardsComponent_ng_template_97_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ngb-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](99, CardsComponent_ng_template_99_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, CardsComponent_ng_template_100_Template, 3, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "ngb-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](102, CardsComponent_ng_template_102_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Jassica Hike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Contact Jassica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Featured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Card title text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h5", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "03.12.2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h5", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "03.12.2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cumque!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "ul", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2EEf":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");





function ModalsComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_41_Template_button_click_3_listener() { const modal_r8 = ctx.$implicit; return modal_r8.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Date picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_41_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13); return _r9.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_41_Template_button_click_18_listener() { const modal_r8 = ctx.$implicit; return modal_r8.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ModalsComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Profile deletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_43_Template_button_click_3_listener() { const modal_r14 = ctx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\"John Doe\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " profile?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "All information associated to this user profile will be permanently deleted. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_43_Template_button_click_18_listener() { const modal_r14 = ctx.$implicit; return modal_r14.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_43_Template_button_click_20_listener() { const modal_r14 = ctx.$implicit; return modal_r14.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ModalsComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Small Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_45_Template_button_click_3_listener() { const modal_r18 = ctx.$implicit; return modal_r18.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_45_Template_button_click_10_listener() { const modal_r18 = ctx.$implicit; return modal_r18.close("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ModalsComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal With large content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_47_Template_button_click_3_listener() { const modal_r21 = ctx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_ng_template_47_Template_button_click_20_listener() { const modal_r21 = ctx.$implicit; return modal_r21.close("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ModalsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
            console.log(result);
        }, (reason) => {
            console.log('Err!', reason);
        });
    }
    openSmall(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
            .result.then((result) => {
            console.log(result);
        }, (reason) => {
            console.log('Err!', reason);
        });
    }
    confirm(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
            this.confirmResut = `Closed with: ${result}`;
        }, (reason) => {
            this.confirmResut = `Dismissed with: ${reason}`;
        });
    }
}
ModalsComponent.??fac = function ModalsComponent_Factory(t) { return new (t || ModalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ModalsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalsComponent, selectors: [["app-modals"]], decls: 49, vars: 1, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-6"], [1, "card", "mb-3"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-outline-primary", "btn-rounded", 3, "click"], [1, "mb-0", "mt-3"], ["modalBasic", ""], ["modalConfirm", ""], ["modalSmall", ""], ["modalLong", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "picker1"], [1, "input-group"], ["id", "picker1", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["dp", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "icon-regular", "i-Calendar-4"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-rounded", 3, "click"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], [1, "text-primary"], [1, "text-danger"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-danger", "btn-rounded", 3, "click"]], template: function ModalsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Basic Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Launch demo modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Confirm Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44); return ctx.confirm(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Large Content Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](48); return ctx.open(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Launch Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Small Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalsComponent_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46); return ctx.openSmall(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Launch Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ModalsComponent_ng_template_41_Template, 20, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ModalsComponent_ng_template_43_Template, 22, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, ModalsComponent_ng_template_45_Template, 12, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ModalsComponent_ng_template_47_Template, 22, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.confirmResut);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvbW9kYWxzL21vZGFscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modals',
                templateUrl: './modals.component.html',
                styleUrls: ['./modals.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "9aw5":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");






function AlertsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("close", function AlertsComponent_div_11_Template_ngb_alert_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.mainAlert = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Gull makes developent life easier! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AlertsComponent_ngb_alert_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("close", function AlertsComponent_ngb_alert_43_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const alert_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.closeAlert(alert_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const alert_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", alert_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", alert_r5.type, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", alert_r5.message, " ");
} }
function AlertsComponent_ngb_alert_45_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("close", function AlertsComponent_ngb_alert_45_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const alert_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.closeAlertCard(alert_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const alert_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", alert_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", alert_r8.type, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", alert_r8.message, " ");
} }
const ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
class AlertsComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.mainAlert = true;
    }
    ngOnInit() {
        this.alerts = [...ALERTS];
        this.alertCards = [...ALERTS];
    }
    closeAlert(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    closeAlertCard(alert) {
        this.alertCards.splice(this.alertCards.indexOf(alert), 1);
    }
    success() {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 300000 });
    }
    warning() {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
    }
    info() {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
    }
    error() {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
    }
    successBar() {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }
    warningBar() {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }
    infoBar() {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }
    errorBar() {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }
}
AlertsComponent.??fac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
AlertsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 46, vars: 3, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-6"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-rounded", "btn-outline-success", "m-1", 3, "click"], [1, "btn", "btn-rounded", "btn-outline-warning", "m-1", 3, "click"], [1, "btn", "btn-rounded", "btn-outline-info", "m-1", 3, "click"], [1, "btn", "btn-rounded", "btn-outline-danger", "m-1", 3, "click"], [1, "col-md-12"], [3, "type", "close", 4, "ngFor", "ngForOf"], ["class", "alert-card mb-4", 3, "type", "close", 4, "ngFor", "ngForOf"], [1, "alert-card", "text-center", 3, "close"], [1, "btn", "btn-rounded", "btn-warning", "ml-3"], [3, "type", "close"], [1, "text-capitalize"], [1, "alert-card", "mb-4", 3, "type", "close"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AlertsComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Ngx Toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_17_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Launch Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_19_listener() { return ctx.warning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Launch Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_21_listener() { return ctx.info(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Launch Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_23_listener() { return ctx.error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Launch Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Toastr with Progress Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_30_listener() { return ctx.successBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Launch Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_32_listener() { return ctx.warningBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Launch Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_34_listener() { return ctx.infoBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Launch Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlertsComponent_Template_button_click_36_listener() { return ctx.errorBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Launch Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Bootstrap Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, AlertsComponent_ngb_alert_43_Template, 4, 3, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, AlertsComponent_ngb_alert_45_Template, 4, 3, "ngb-alert", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mainAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.alertCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "C267":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardMetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMetricsComponent", function() { return CardMetricsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "DPXB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");





class CardMetricsComponent {
    constructor() {
        this.chartLine1 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [Object.assign(Object.assign({ data: [30, 40, 20, 50, 40, 80, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { lineStyle: Object.assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine2 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [Object.assign(Object.assign({ data: [6, 4, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { lineStyle: Object.assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartLine3 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [Object.assign(Object.assign({ data: [2, 2, 7, 4, 6, 4, 8] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { lineStyle: Object.assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine4 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [Object.assign(Object.assign({ data: [2, 2, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { lineStyle: Object.assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartPie1 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [Object.assign(Object.assign({ name: 'Email Subscription', value: 80 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff), { itemStyle: {
                                borderColor: '#4CAF50',
                            } }), Object.assign(Object.assign({ name: 'Registration', value: 20 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff), { itemStyle: {
                                borderColor: '#df0029',
                            } })]
                }]
        });
        this.chartPie2 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [Object.assign(Object.assign({ name: 'Running', value: 40 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff), { itemStyle: {
                                borderColor: '#ff9800',
                            } }), Object.assign(Object.assign({ name: 'Completed', value: 60 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff), { itemStyle: {
                                borderColor: '#4CAF50',
                            } })]
                }]
        });
        this.chartBar1 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            series: [{
                    type: 'bar',
                    barWidth: 6,
                    itemStyle: Object.assign({ color: '#ff9800' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    data: [{
                            name: 'Bar 1',
                            value: 40
                        }, {
                            name: 'Bar 2',
                            value: 60,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }, {
                            name: 'Bar 3',
                            value: 80,
                        }, {
                            name: 'Bar 4',
                            value: 70,
                        }, {
                            name: 'Bar 5',
                            value: 60,
                        }, {
                            name: 'Bar 6',
                            value: 70,
                        }, {
                            name: 'Bar 7',
                            value: 80,
                        }, {
                            name: 'Bar 8',
                            value: 40,
                        }, {
                            name: 'Bar 9',
                            value: 70,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }]
                }]
        });
    }
    ngOnInit() {
    }
}
CardMetricsComponent.??fac = function CardMetricsComponent_Factory(t) { return new (t || CardMetricsComponent)(); };
CardMetricsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardMetricsComponent, selectors: [["app-card-metrics"]], decls: 181, vars: 24, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-3"], [1, "card", "mb-4"], [1, "card-body"], [1, "mb-3"], [1, "text-20", "text-success", "line-height-1", "mb-3"], [1, "i-Arrow-Up-in-Circle"], [1, "text-muted"], [1, "text-20", "text-danger", "line-height-1", "mb-3"], [1, "i-Arrow-Down-in-Circle"], [1, "mb-1"], [1, "text-22", "text-success", "font-weight-light", "mb-1"], ["echarts", "", 2, "height", "65px", 3, "options", "autoResize"], [1, "text-22", "text-danger", "font-weight-light", "mb-1"], [1, "text-22", "font-weight-light", "mb-1"], [1, "mb-2", "text-muted"], [1, "mb-1", "text-22", "font-weight-light"], ["type", "success", "height", "4px", 3, "value"], ["type", "danger", "height", "4px", 3, "value"], ["type", "warning", "height", "4px", 3, "value"], ["type", "info", "height", "4px", 3, "value"], [1, "col-md-3", "mb-4"], [1, "card"], [1, "mb-0", "text-muted"], ["echarts", "", 2, "height", "140px", 3, "options", "autoResize"], [1, "i-Up", "text-success"], ["echarts", "", 2, "height", "60px", 3, "options", "autoResize"], [1, "i-Down", "text-danger"]], template: function CardMetricsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Card metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Card metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Server status region 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Last down 4 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Server status region 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Last down 8 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Server status region 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Last down 22 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Server status region 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Last down 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Taffic in last 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "13000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Taffic in last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "65058");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Taffic in last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "165058");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Taffic in last 3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "1065058");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Storage Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "ngb-progressbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Most data used in last 3 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Bandwith Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "ngb-progressbar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Most data used in last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Data Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "ngb-progressbar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Most data used in last 5 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Data Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "ngb-progressbar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Most data used in last 4 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Registration/Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "20/80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Project Running/Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "40/60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Registration/Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "20/80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Project Running/Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "40/60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Project Completion Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " 15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Project Completion Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " 15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartLine1)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartLine2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartLine3)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartLine4)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartPie1)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartPie2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartPie1)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartPie2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartBar1)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartBar1)("autoResize", true);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["??a"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvY2FyZC1tZXRyaWNzL2NhcmQtbWV0cmljcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardMetricsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-metrics',
                templateUrl: './card-metrics.component.html',
                styleUrls: ['./card-metrics.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DTW6":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWidgetsComponent", function() { return CardWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "DPXB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");




class CardWidgetsComponent {
    constructor() { }
    ngOnInit() {
        this.chartOption1 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth), {
            series: [Object.assign(Object.assign({ data: [30, 40, 20, 50, 40, 80, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#663399',
                    }, itemStyle: {
                        color: '#663399'
                    } })]
        });
        this.chartOption2 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth), {
            series: [Object.assign(Object.assign({ data: [30, 10, 40, 10, 40, 20, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#ff9800'
                    }, itemStyle: {
                        color: '#ff9800'
                    } })]
        });
        this.chartPie1 = Object.assign(Object.assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [Object.assign(Object.assign({ type: 'pie' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieRing), { label: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelCenterHover, data: [{
                            name: 'Completed',
                            value: 80,
                            itemStyle: {
                                color: '#4CAF50',
                            }
                        }, {
                            name: 'Pending',
                            value: 20,
                            itemStyle: {
                                color: '#df0029',
                            }
                        }] })]
        });
    }
}
CardWidgetsComponent.??fac = function CardWidgetsComponent_Factory(t) { return new (t || CardWidgetsComponent)(); };
CardWidgetsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardWidgetsComponent, selectors: [["app-card-widgets"]], decls: 194, vars: 6, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-6"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title", "m-0"], [1, "text-small", "text-muted"], [1, "col-md-6", "mb-4"], [1, "p-4", "rounded", "d-flex", "align-items-center", "bg-primary", "text-white"], [1, "i-Data-Backup", "text-32", "mr-3"], [1, "text-18", "mb-1", "text-white"], [1, "i-Big-Data", "text-32", "mr-3"], [1, "p-4", "border", "border-light", "rounded", "d-flex", "align-items-center"], [1, "i-Data-Cloud", "text-32", "mr-3"], [1, "text-18", "mb-1"], [1, "i-Data-Download", "text-32", "mr-3"], [1, "card-title"], [1, "d-flex", "align-items-center", "border-bottom-dotted-dim", "pb-3", "mb-3"], ["src", "./assets/images/products/headphone-2.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "flex-grow-1"], [1, "m-0"], [1, "m-0", "text-small", "text-muted"], [1, "font-weight-bold", "text-primary", "text-16"], ["src", "./assets/images/products/headphone-3.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "font-weight-bold", "text-warning", "text-16"], ["src", "./assets/images/products/iphone-2.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "font-weight-bold", "text-danger", "text-16"], [1, "d-flex", "align-items-center"], ["src", "./assets/images/products/headphone-4.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "font-weight-bold", "text-secondary", "text-16"], [1, "col-md-4"], ["src", "./assets/images/faces/2.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "btn", "btn-outline-primary", "btn-rounded", "btn-sm"], ["src", "./assets/images/faces/3.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], ["src", "./assets/images/faces/4.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], ["src", "./assets/images/faces/5.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "card", "card-chart-bottom", "o-hidden", "mb-4"], [1, "text-muted"], [1, "mb-4", "text-primary", "text-24"], ["echarts", "", 2, "height", "260px", 3, "options", "autoResize"], [1, "mb-4", "text-warning", "text-24"], [1, "card"], [1, "table"], [1, "thead-light"], ["scope", "col"], [1, "font-weight-bold", "text-success"], [1, "font-weight-bold"], [1, "text-danger", "font-weight-bold"], [1, "text-warning", "font-weight-bold"], ["echarts", "", 2, "height", "200px", 3, "options", "autoResize"]], template: function CardWidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cards Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Network Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Total: 32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Total: 302");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Space used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Total: 160GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Downloaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Total: 30GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Top Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Wireless Headphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "$450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Headphone Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "$350");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "iPhone 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "$649");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Headphone Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "$150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Top Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "David Hopkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "James Mitchell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Dan Hill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Lorem ipsum dolor sit amet consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Last Week Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "$1250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Last Month Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "$40250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Last Month Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "thead", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Portable Speaker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "+ $1200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Portable Headphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Speaker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Out of stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Low stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartOption1)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartOption2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartPie1)("autoResize", true);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["??a"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvY2FyZC13aWRnZXRzL2NhcmQtd2lkZ2V0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardWidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-widgets',
                templateUrl: './card-widgets.component.html',
                styleUrls: ['./card-widgets.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KHjL":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.ts ***!
  \************************************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LoadersComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadersComponent.??fac = function LoadersComponent_Factory(t) { return new (t || LoadersComponent)(); };
LoadersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadersComponent, selectors: [["app-loaders"]], decls: 63, vars: 0, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "spinner-glow", "spinner-glow-primary", "mr-5"], [1, "spinner-glow", "spinner-glow-secondary", "mr-5"], [1, "spinner-glow", "spinner-glow-warning", "mr-5"], [1, "spinner-glow", "spinner-glow-danger", "mr-5"], [1, "spinner-glow", "spinner-glow-success", "mr-5"], [1, "spinner-glow", "spinner-glow-info", "mr-5"], [1, "spinner-glow", "spinner-glow-light", "mr-5"], [1, "spinner-glow", "spinner-glow-dark", "mr-5"], [1, "spinner", "spinner-primary", "mr-3"], [1, "spinner", "spinner-secondary", "mr-3"], [1, "spinner", "spinner-warning", "mr-3"], [1, "spinner", "spinner-danger", "mr-3"], [1, "spinner", "spinner-success", "mr-3"], [1, "spinner", "spinner-info", "mr-3"], [1, "spinner", "spinner-light", "mr-3"], [1, "spinner", "spinner-dark", "mr-3"], [1, "spinner-bubble", "spinner-bubble-primary", "m-5"], [1, "spinner-bubble", "spinner-bubble-secondary", "m-5"], [1, "spinner-bubble", "spinner-bubble-warning", "m-5"], [1, "spinner-bubble", "spinner-bubble-danger", "m-5"], [1, "spinner-bubble", "spinner-bubble-success", "m-5"], [1, "spinner-bubble", "spinner-bubble-info", "m-5"], [1, "spinner-bubble", "spinner-bubble-light", "m-5"], [1, "spinner-bubble", "spinner-bubble-dark", "m-5"], [1, "loader-bubble", "loader-bubble-primary", "m-5"], [1, "loader-bubble", "loader-bubble-secondary", "m-5"], [1, "loader-bubble", "loader-bubble-success", "m-5"], [1, "loader-bubble", "loader-bubble-warning", "m-5"], [1, "loader-bubble", "loader-bubble-danger", "m-5"], [1, "loader-bubble", "loader-bubble-info", "m-5"], [1, "loader-bubble", "loader-bubble-light", "m-5"], [1, "loader-bubble", "loader-bubble-dark", "m-5"]], template: function LoadersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loaders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Loaders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Loading Spinners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Loading Spinners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Loading Spinners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Loading Spinners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvbG9hZGVycy9sb2FkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoadersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loaders',
                templateUrl: './loaders.component.html',
                styleUrls: ['./loaders.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R3i3":
/*!****************************************************************!*\
  !*** ./node_modules/angular2-ladda/fesm2015/angular2-ladda.js ***!
  \****************************************************************/
/*! exports provided: LaddaConfig, LaddaConfigArgs, LaddaDirective, LaddaModule, configAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfig", function() { return LaddaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfigArgs", function() { return LaddaConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaDirective", function() { return LaddaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaModule", function() { return LaddaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configAttributes", function() { return configAttributes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ladda */ "yhyq");






class LaddaConfigArgs {
}
let configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
let LaddaConfig = class LaddaConfig {
    constructor(config = {}) {
        Object.assign(this, config);
    }
};
LaddaConfig.??fac = function LaddaConfig_Factory(t) { return new (t || LaddaConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](LaddaConfigArgs)); };
LaddaConfig.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LaddaConfig, factory: function (t) { return LaddaConfig.??fac(t); } });
LaddaConfig.ctorParameters = () => [
    { type: LaddaConfigArgs }
];

let LaddaDirective = class LaddaDirective {
    constructor(el, config, platformId) {
        this.platformId = platformId;
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (let attribute in configAttributes) {
            let configValue = config[configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                let value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    ngOnChanges(changes) {
        if (!this.ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes.loading) {
            this.updateLadda(changes.loading.previousValue);
        }
        if (changes.disabled) {
            this.updateDisabled();
        }
    }
    ngOnInit() {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        this.ladda = Object(ladda__WEBPACK_IMPORTED_MODULE_3__["create"])(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(() => { this.updateLadda(false); }, 0);
    }
    ngOnDestroy() {
        if (this.ladda) {
            this.ladda.remove();
        }
    }
    updateLadda(previousValue) {
        let loading = typeof this.loading === 'number' || !!this.loading;
        let wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this.ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this.ladda.start();
        }
        if (typeof this.loading === 'number') {
            this.ladda.setProgress(this.loading);
        }
    }
    updateDisabled() {
        this.el.disabled = this.disabled;
    }
};
LaddaDirective.??fac = function LaddaDirective_Factory(t) { return new (t || LaddaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](LaddaConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
LaddaDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: LaddaDirective, selectors: [["", "ladda", ""]], inputs: { loading: ["ladda", "loading"], disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]] });
LaddaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: LaddaConfigArgs, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LaddaConfig,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ladda')
], LaddaDirective.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LaddaDirective.prototype, "disabled", void 0);
LaddaDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LaddaConfig)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], LaddaDirective);

var LaddaModule_1;
let LaddaModule = LaddaModule_1 = class LaddaModule {
    static forRoot(config) {
        return {
            ngModule: LaddaModule_1,
            providers: [
                { provide: LaddaConfig, useValue: config }
            ]
        };
    }
};
LaddaModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: LaddaModule });
LaddaModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function LaddaModule_Factory(t) { return new (t || LaddaModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LaddaConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: LaddaConfigArgs }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LaddaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ladda]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: LaddaConfigArgs, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [LaddaConfig]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['ladda']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](LaddaModule, { declarations: [LaddaDirective], exports: [LaddaDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LaddaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [LaddaDirective],
                exports: [LaddaDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ladda
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular2-ladda.js.map

/***/ }),

/***/ "RnbG":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "TjWR":
/*!*********************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UiKitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsRoutingModule", function() { return UiKitsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "U7Xu");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards.component */ "2/E3");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "ztKk");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordions/accordions.component */ "wkmv");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "2EEf");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "9aw5");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "C267");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badges/badges.component */ "v6wb");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "DTW6");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loaders/loaders.component */ "KHjL");
/* harmony import */ var _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons-loading/buttons-loading.component */ "oM/W");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover/popover.component */ "os3j");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rating/rating.component */ "xvVx");

















const routes = [
    {
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"]
    },
    {
        path: 'accordions',
        component: _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__["AccordionsComponent"]
    },
    {
        path: 'badges',
        component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__["BadgesComponent"]
    },
    {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"]
    },
    {
        path: 'buttons-loading',
        component: _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_12__["ButtonsLoadingComponent"]
    },
    {
        path: 'cards',
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
    },
    {
        path: 'cards-widget',
        component: _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__["CardWidgetsComponent"]
    },
    {
        path: 'cards-ecommerce',
        component: _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__["CardsEcommerceComponent"]
    },
    {
        path: 'cards-metrics',
        component: _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__["CardMetricsComponent"]
    },
    {
        path: 'modals',
        component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"]
    },
    {
        path: 'loaders',
        component: _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__["LoadersComponent"]
    },
    {
        path: 'popover',
        component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_13__["PopoverComponent"]
    },
    {
        path: 'rating',
        component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"]
    }
];
class UiKitsRoutingModule {
}
UiKitsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: UiKitsRoutingModule });
UiKitsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function UiKitsRoutingModule_Factory(t) { return new (t || UiKitsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UiKitsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UiKitsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "U7Xu":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class ButtonsComponent {
    constructor() {
        this.btnGroupModel = {
            left: true,
            middle: false,
            right: false
        };
    }
    ngOnInit() { }
}
ButtonsComponent.??fac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(); };
ButtonsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 118, vars: 3, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-3"], [1, "card-body"], [1, "card-title"], ["type", "button", 1, "btn", "btn-primary", "m-1"], ["type", "button", 1, "btn", "btn-secondary", "m-1"], ["type", "button", 1, "btn", "btn-success", "m-1"], ["type", "button", 1, "btn", "btn-danger", "m-1"], ["type", "button", 1, "btn", "btn-warning", "m-1"], ["type", "button", 1, "btn", "btn-info", "m-1"], ["type", "button", 1, "btn", "btn-light", "m-1"], ["type", "button", 1, "btn", "btn-dark", "m-1"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-info", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-light", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-dark", "btn-rounded", "m-1"], ["type", "button", 1, "btn", "btn-outline-primary", "m-1"], ["type", "button", 1, "btn", "btn-outline-secondary", "m-1"], ["type", "button", 1, "btn", "btn-outline-success", "m-1"], ["type", "button", 1, "btn", "btn-outline-danger", "m-1"], ["type", "button", 1, "btn", "btn-outline-warning", "m-1"], ["type", "button", 1, "btn", "btn-outline-info", "m-1"], ["type", "button", 1, "btn", "btn-outline-dark", "m-1"], [1, "col-md-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn-primary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "m-1"], ["type", "button", 1, "btn", "btn-success", "btn-block", "m-1"], ["type", "button", 1, "btn", "btn-warning", "btn-block", "m-1"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "m-1"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-1"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "m-1"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "m-1"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "m-1"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "m-1"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Buttons Rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Buttons outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Button group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_80_listener($event) { return ctx.btnGroupModel.left = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Left (pre-checked) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_83_listener($event) { return ctx.btnGroupModel.middle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Middle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_86_listener($event) { return ctx.btnGroupModel.right = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Button block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Big & Small Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.btnGroupModel.left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.btnGroupModel.middle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.btnGroupModel.right);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buttons',
                templateUrl: './buttons.component.html',
                styleUrls: ['./buttons.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oM/W":
/*!****************************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons-loading/buttons-loading.component.ts ***!
  \****************************************************************************/
/*! exports provided: ButtonsLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsLoadingComponent", function() { return ButtonsLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ "vMEl");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-ladda */ "R3i3");





function ButtonsLoadingComponent_btn_loading_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "btn-loading", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ButtonsLoadingComponent_btn_loading_17_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const btn_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.showLoading(btn_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Click me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const btn_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("btnClass", "btn-", btn_r2.name, " btn-rounded m-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", btn_r2.loading);
} }
function ButtonsLoadingComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ButtonsLoadingComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const btn_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.showLoading(btn_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Click me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const btn_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-", btn_r5.name, " btn-rounded ladda-button m-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ladda", btn_r5.loading);
} }
class ButtonsLoadingComponent {
    constructor() {
        this.loadingButtons = [
            {
                name: 'primary',
                loading: false,
            },
            {
                name: 'secondary',
                loading: false,
            },
            {
                name: 'success',
                loading: false,
            },
            {
                name: 'warning',
                loading: false,
            },
            {
                name: 'info',
                loading: false,
            },
            {
                name: 'danger',
                loading: false,
            },
            {
                name: 'light',
                loading: false,
            },
            {
                name: 'dark',
                loading: false,
            }
        ];
        this.laddaButtons = [
            {
                name: 'primary',
                loading: false,
            },
            {
                name: 'secondary',
                loading: false,
            },
            {
                name: 'success',
                loading: false,
            },
            {
                name: 'warning',
                loading: false,
            },
            {
                name: 'info',
                loading: false,
            },
            {
                name: 'danger',
                loading: false,
            },
            {
                name: 'light',
                loading: false,
            },
            {
                name: 'dark',
                loading: false,
            }
        ];
    }
    ngOnInit() { }
    showLoading(btn) {
        btn.loading = true;
        setTimeout(() => {
            btn.loading = false;
        }, 3000);
    }
}
ButtonsLoadingComponent.??fac = function ButtonsLoadingComponent_Factory(t) { return new (t || ButtonsLoadingComponent)(); };
ButtonsLoadingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ButtonsLoadingComponent, selectors: [["app-buttons-loading"]], decls: 25, vars: 2, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], ["loadingText", "Loading...", 3, "btnClass", "loading", "click", 4, "ngFor", "ngForOf"], [1, "card"], [3, "class", "ladda", "click", 4, "ngFor", "ngForOf"], ["loadingText", "Loading...", 3, "btnClass", "loading", "click"], [3, "ladda", "click"]], template: function ButtonsLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Buttons Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Buttons Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Gull Custom Loading Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ButtonsLoadingComponent_btn_loading_17_Template, 2, 2, "btn-loading", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Ladda Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ButtonsLoadingComponent_button_24_Template, 2, 4, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.loadingButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.laddaButtons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"], angular2_ladda__WEBPACK_IMPORTED_MODULE_3__["LaddaDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvYnV0dG9ucy1sb2FkaW5nL2J1dHRvbnMtbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonsLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buttons-loading',
                templateUrl: './buttons-loading.component.html',
                styleUrls: ['./buttons-loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "os3j":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/popover/popover.component.ts ***!
  \************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



function PopoverComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Popover Title");
} }
function PopoverComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Lorem ipsum dolor sit amet consectetur adipisicing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class PopoverComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopoverComponent.??fac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(); };
PopoverComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PopoverComponent, selectors: [["app-popover"]], decls: 63, vars: 3, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2"], ["type", "button", "placement", "right", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2"], ["type", "button", "placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2"], ["type", "button", "placement", "left", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2"], ["popTitle", ""], ["popContent", ""], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "ngbPopover", "popoverTitle"], [1, "card"], ["type", "button", "ngbPopover", "You see, I show up on hover!", "triggers", "mouseenter:mouseleave", "popoverTitle", "Pop title", 1, "btn", "btn-outline-secondary", "btn-rounded"], ["type", "button", "ngbPopover", "What a great tip!", "triggers", "manual", "popoverTitle", "Pop title", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2", 3, "autoClose", "click"], ["p", "ngbPopover"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", "mr-2", 3, "click"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Quick and easy popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Popover on top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Popover on right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Popover on bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Popover on left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "HTML and bindings in popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content or title in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "<ng-template>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, PopoverComponent_ng_template_34_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, PopoverComponent_ng_template_36_Template, 4, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " I've got markup in my popover! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Custom and manual triggers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " You can easily override open and close triggers by specifying event names (separated by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ") in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "triggers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " property. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Alternatively you can take full manual control over popover opening / closing events. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PopoverComponent_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59); return _r4.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Click me to open a popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PopoverComponent_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59); return _r4.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Click me to close a popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbPopover", _r2)("popoverTitle", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popover',
                templateUrl: './popover.component.html',
                styleUrls: ['./popover.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v6wb":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.ts ***!
  \**********************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BadgesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadgesComponent.??fac = function BadgesComponent_Factory(t) { return new (t || BadgesComponent)(); };
BadgesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BadgesComponent, selectors: [["app-badges"]], decls: 113, vars: 0, consts: [[1, "breadcrumb"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-3"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "badge", "badge-pill", "badge-outline-primary", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-secondary", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-success", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-danger", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-warning", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-info", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-outline-dark", "p-2", "mr-1"], [1, "card", "mb-4"], [1, "badge", "badge-primary", "mr-1"], [1, "badge", "badge-secondary", "mr-1"], [1, "badge", "badge-success", "mr-1"], [1, "badge", "badge-danger", "mr-1"], [1, "badge", "badge-warning", "mr-1"], [1, "badge", "badge-info", "mr-1"], [1, "badge", "badge-light", "mr-1"], [1, "badge", "badge-dark", "mr-1"], [1, "badge", "badge-pill", "badge-primary", "mr-1"], [1, "badge", "badge-pill", "badge-secondary", "mr-1"], [1, "badge", "badge-pill", "badge-success", "mr-1"], [1, "badge", "badge-pill", "badge-danger", "mr-1"], [1, "badge", "badge-pill", "badge-warning", "mr-1"], [1, "badge", "badge-pill", "badge-info", "mr-1"], [1, "badge", "badge-pill", "badge-light", "mr-1"], [1, "badge", "badge-pill", "badge-dark", "mr-1"], [1, "badge", "badge-pill", "badge-primary", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-secondary", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-success", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-danger", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-warning", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-info", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-light", "p-2", "mr-1"], [1, "badge", "badge-pill", "badge-dark", "p-2", "mr-1"], ["href", "#", 1, "badge", "badge-primary", "mr-1"], ["href", "#", 1, "badge", "badge-secondary", "mr-1"], ["href", "#", 1, "badge", "badge-success", "mr-1"], ["href", "#", 1, "badge", "badge-danger", "mr-1"], ["href", "#", 1, "badge", "badge-warning", "mr-1"], ["href", "#", 1, "badge", "badge-info", "mr-1"], ["href", "#", 1, "badge", "badge-light", "mr-1"], ["href", "#", 1, "badge", "badge-dark", "mr-1"]], template: function BadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Badge outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Regular Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Badge Pill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Badge Pill with Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Badge link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BadgesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-badges',
                templateUrl: './badges.component.html',
                styleUrls: ['./badges.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wkmv":
/*!******************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.ts ***!
  \******************************************************************/
/*! exports provided: AccordionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionsComponent", function() { return AccordionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "rXAn");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _shared_directives_highlightjs_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/highlightjs.directive */ "TMah");





const _c0 = function () { return { y: "20px", opacity: "0", delay: "0ms", duration: "400ms" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function AccordionsComponent_ng_template_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0)));
} }
function AccordionsComponent_ng_template_13_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " title \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AccordionsComponent_ng_template_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0)));
} }
function AccordionsComponent_ng_template_13_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0)));
} }
function AccordionsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-accordion", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ngb-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AccordionsComponent_ng_template_13_ng_template_3_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AccordionsComponent_ng_template_13_ng_template_5_Template, 5, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AccordionsComponent_ng_template_13_ng_template_6_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ngb-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AccordionsComponent_ng_template_13_ng_template_8_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("closeOthers", true);
} }
function AccordionsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n\t\t\t\t\t  \t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.code);
} }
class AccordionsComponent {
    constructor() {
        this.code = `
<ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
  <ngb-panel title="Simple">
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel>
    <ng-template ngbPanelTitle>
      <span>&#9733; <b>Fancy</b> title &#9733;</span>
    </ng-template>
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel title="Disabled" [disabled]="true">
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
</ngb-accordion>`;
    }
    ngOnInit() {
    }
}
AccordionsComponent.??fac = function AccordionsComponent_Factory(t) { return new (t || AccordionsComponent)(); };
AccordionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AccordionsComponent, selectors: [["app-accordions"]], decls: 16, vars: 0, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, ""], [1, "p-0"], ["title", "Example"], ["ngbTabContent", ""], ["title", "Code"], ["activeIds", "ngb-panel-0", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Accordion"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "Simple"], [1, "m-0"], [3, "highlight"]], template: function AccordionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ngb-tabset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngb-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AccordionsComponent_ng_template_13_Template, 9, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AccordionsComponent_ng_template_15_Template, 5, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _shared_directives_highlightjs_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightjsDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvYWNjb3JkaW9ucy9hY2NvcmRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccordionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accordions',
                templateUrl: './accordions.component.html',
                styleUrls: ['./accordions.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xvVx":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/rating/rating.component.ts ***!
  \**********************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



function RatingComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u2665");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u2665 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const fill_r2 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("full", fill_r2 === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", fill_r2, "%");
} }
class RatingComponent {
    constructor() {
        this.currentRate = 8;
        this.heartRating = 3;
        this.demoRating = 4.4;
    }
    ngOnInit() {
    }
}
RatingComponent.??fac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], decls: 55, vars: 13, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "rating-primary", "text-18", 3, "rate", "rateChange"], ["t", ""], ["max", "5", 1, "rating-danger", "text-18", 3, "rate", "starTemplate", "readonly", "rateChange"], [1, "btn", "btn-rounded", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [1, "card"], [1, "m-0"], ["max", "5", 1, "rating-primary", "mr-3", "mb-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-secondary", "text-20", "m-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-warning", "text-22", "m-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-success", "text-24", "m-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-info", "text-26", "m-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-danger", "text-28", "m-3", 3, "rate", "rateChange"], ["max", "5", 1, "rating-dark", "text-30", "m-3", 3, "rate", "rateChange"], [1, "star"], [1, "half"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Rating component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ngb-rating", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_16_listener($event) { return ctx.currentRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Custom decimal rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Custom rating template provided via a variable. Shows fine-grained rating display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, RatingComponent_ng_template_29_Template, 4, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ngb-rating", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_31_listener($event) { return ctx.heartRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RatingComponent_Template_button_click_37_listener() { return ctx.heartRating = 1.35; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "1.35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RatingComponent_Template_button_click_39_listener() { return ctx.heartRating = 4.72; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "4.72");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Colors & Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "All the rating components are connected to a same variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ngb-rating", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_48_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ngb-rating", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_49_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ngb-rating", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_50_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ngb-rating", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_51_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "ngb-rating", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_52_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "ngb-rating", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_53_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ngb-rating", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_54_listener($event) { return ctx.demoRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.currentRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.heartRating)("starTemplate", _r0)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.heartRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.demoRating);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yhyq":
/*!****************************************!*\
  !*** ./node_modules/ladda/js/ladda.js ***!
  \****************************************/
/*! exports provided: create, bind, stopAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAll", function() { return stopAll; });
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spin.js */ "RnbG");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */

 

// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create( button ) {

	if( typeof button === 'undefined' ) {
		console.warn( "Ladda button target must be defined." );
		return;
	}

	// The button must have the class "ladda-button"
	if ( !button.classList.contains('ladda-button') ) {
		button.classList.add( 'ladda-button' );
	}

	// Style is required, default to "expand-right"
	if( !button.hasAttribute( 'data-style' ) ) {
		button.setAttribute( 'data-style', 'expand-right' );
	}

	// The text contents must be wrapped in a ladda-label
	// element, create one if it doesn't already exist
	if( !button.querySelector( '.ladda-label' ) ) {
		var laddaLabel = document.createElement( 'span' );
		laddaLabel.className = 'ladda-label';
		wrapContent( button, laddaLabel );
	}

	// The spinner component
	var spinner,
		spinnerWrapper = button.querySelector( '.ladda-spinner' );

	// Wrapper element for the spinner
	if( !spinnerWrapper ) {
		spinnerWrapper = document.createElement( 'span' );
		spinnerWrapper.className = 'ladda-spinner';
	}

	button.appendChild( spinnerWrapper );

	// Timer used to delay starting/stopping
	var timer;

	var instance = {

		/**
		 * Enter the loading state.
		 */
		start: function() {

			// Create the spinner if it doesn't already exist
			if( !spinner ) {
				spinner = createSpinner( button );
			}

			button.disabled = true;
			button.setAttribute( 'data-loading', '' );

			clearTimeout( timer );
			spinner.spin( spinnerWrapper );

			this.setProgress( 0 );

			return this; // chain

		},

		/**
		 * Enter the loading state, after a delay.
		 */
		startAfter: function( delay ) {

			clearTimeout( timer );
			timer = setTimeout( function() { instance.start(); }, delay );

			return this; // chain

		},

		/**
		 * Exit the loading state.
		 */
		stop: function() {

			if (instance.isLoading()) {
				button.disabled = false;
				button.removeAttribute( 'data-loading' );	
			}

			// Kill the animation after a delay to make sure it
			// runs for the duration of the button transition
			clearTimeout( timer );

			if( spinner ) {
				timer = setTimeout( function() { spinner.stop(); }, 1000 );
			}

			return this; // chain

		},

		/**
		 * Toggle the loading state on/off.
		 */
		toggle: function() {
			return this.isLoading() ? this.stop() : this.start();
		},

		/**
		 * Sets the width of the visual progress bar inside of
		 * this Ladda button
		 *
		 * @param {Number} progress in the range of 0-1
		 */
		setProgress: function( progress ) {

			// Cap it
			progress = Math.max( Math.min( progress, 1 ), 0 );

			var progressElement = button.querySelector( '.ladda-progress' );

			// Remove the progress bar if we're at 0 progress
			if( progress === 0 && progressElement && progressElement.parentNode ) {
				progressElement.parentNode.removeChild( progressElement );
			}
			else {
				if( !progressElement ) {
					progressElement = document.createElement( 'div' );
					progressElement.className = 'ladda-progress';
					button.appendChild( progressElement );
				}

				progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
			}

		},

		isLoading: function() {

			return button.hasAttribute( 'data-loading' );

		},

		remove: function() {

			clearTimeout( timer );

			button.disabled = false;
			button.removeAttribute( 'data-loading' );

			if( spinner ) {
				spinner.stop();
				spinner = null;
			}

			ALL_INSTANCES.splice( ALL_INSTANCES.indexOf(instance), 1 );

		}

	};

	ALL_INSTANCES.push( instance );

	return instance;

}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind( target, options ) {

	var targets;

	if( typeof target === 'string' ) {
		targets = document.querySelectorAll( target );
	}
	else if( typeof target === 'object' ) {
		targets = [ target ];
	} else {
		throw new Error('target must be string or object');
	}

	options = options || {};

	for( var i = 0; i < targets.length; i++ ) {
		bindElement(targets[i], options);
	}

}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {

	for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
		ALL_INSTANCES[i].stop();
	}

}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType( elem, type ) {

	while ( elem.parentNode && elem.tagName !== type ) {
		elem = elem.parentNode;
	}

	return ( type === elem.tagName ) ? elem : undefined;

}

function createSpinner( button ) {

	var height = button.offsetHeight,
		spinnerColor,
		spinnerLines;

	if( height === 0 ) {
		// We may have an element that is not visible so
		// we attempt to get the height in a different way
		height = parseFloat( window.getComputedStyle( button ).height );
	}

	// If the button is tall we can afford some padding
	if( height > 32 ) {
		height *= 0.8;
	}

	// Prefer an explicit height if one is defined
	if( button.hasAttribute( 'data-spinner-size' ) ) {
		height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
	}

	// Allow buttons to specify the color of the spinner element
	if( button.hasAttribute( 'data-spinner-color' ) ) {
		spinnerColor = button.getAttribute( 'data-spinner-color' );
	}

	// Allow buttons to specify the number of lines of the spinner
	if( button.hasAttribute( 'data-spinner-lines' ) ) {
		spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
	}

	var radius = height * 0.2,
		length = radius * 0.6,
		width = radius < 7 ? 2 : 3;

	return new spin_js__WEBPACK_IMPORTED_MODULE_0__["Spinner"]( {
		color: spinnerColor || '#fff',
		lines: spinnerLines || 12,
		radius: radius,
		length: length,
		width: width,
		animation: 'ladda-spinner-line-fade',
		zIndex: 'auto',
		top: 'auto',
		left: 'auto',
		className: ''
	} );

}

function wrapContent( node, wrapper ) {

	var r = document.createRange();
	r.selectNodeContents( node );
	r.surroundContents( wrapper );
	node.appendChild( wrapper );

}

function bindElement( element, options ) {
	if( typeof element.addEventListener !== 'function' ) {
		return;
	}

	var instance = create( element );
	var timeout = -1;

	element.addEventListener( 'click', function() {

		// If the button belongs to a form, make sure all the
		// fields in that form are filled out
		var valid = true;
		var form = getAncestorOfTagType( element, 'FORM' );

		if( typeof form !== 'undefined' && !form.hasAttribute('novalidate') ) {
			// Modern form validation
			if( typeof form.checkValidity === 'function' ) {
				valid = form.checkValidity();
			}
		}

		if( valid ) {
			// This is asynchronous to avoid an issue where disabling
			// the button prevents forms from submitting
			instance.startAfter( 1 );

			// Set a loading timeout if one is specified
			if( typeof options.timeout === 'number' ) {
				clearTimeout( timeout );
				timeout = setTimeout( instance.stop, options.timeout );
			}

			// Invoke callbacks
			if( typeof options.callback === 'function' ) {
				options.callback.apply( null, [ instance ] );
			}
		}

	}, false );

}


/***/ }),

/***/ "ztKk":
/*!****************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardsEcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsEcommerceComponent", function() { return CardsEcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CardsEcommerceComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsEcommerceComponent.??fac = function CardsEcommerceComponent_Factory(t) { return new (t || CardsEcommerceComponent)(); };
CardsEcommerceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardsEcommerceComponent, selectors: [["app-cards-ecommerce"]], decls: 52, vars: 0, consts: [[1, ""], [1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-lg-3"], [1, "card", "card-ecommerce-1", "mb-4"], [1, "card-body", "text-center"], [1, "i-Cloud", "mb-3"], [1, "text-primary"], [1, "btn", "btn-primary", "btn-rounded"], [1, "card", "card-ecommerce-2", "o-hidden", "mb-4"], ["src", "./assets/images/photo-long-3.jpg", "alt", "", 1, "card-img-top"], [1, "col"], [1, "m-0", "font-weight-bold", "text-muted"], [1, "m-0"], [1, "card-action"], [1, "icon", "i-Add-Cart"], [1, "col-lg-6"], [1, "card", "card-ecommerce-3", "o-hidden", "mb-4"], [1, "d-flex"], ["src", "./assets/images/photo-wide-1.jpg", "alt", "", 1, "card-img-left"], [1, "flex-grow-1", "p-4"], [1, "m-0", "text-small", "text-muted"], [1, "text-muted", "mt-3"], [1, "actions"], [1, "btn", "btn-sm", "rounded-circle", "btn-icon", "btn-outline-primary"]], template: function CardsEcommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Card eCommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "UI Kits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Card eCommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Cloud product one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptates?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Buy now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cloud product one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "$30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Produt featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "By ABC Cafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "$40 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "$55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat esse tempore debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLWtpdHMvY2FyZHMtZWNvbW1lcmNlL2NhcmRzLWVjb21tZXJjZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardsEcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards-ecommerce',
                templateUrl: './cards-ecommerce.component.html',
                styleUrls: ['./cards-ecommerce.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-ui-kits-ui-kits-module.js.map