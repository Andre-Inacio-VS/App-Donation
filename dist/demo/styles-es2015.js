(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Add application styles & imports to this file! */\nhtml.ios{--ion-default-font:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Roboto\",sans-serif}\nhtml.md{--ion-default-font:\"Roboto\",\"Helvetica Neue\",sans-serif}\nbody.backdrop-no-scroll{overflow:hidden}\nhtml.ios ion-modal.modal-card .ion-page>ion-header>ion-toolbar:first-of-type{padding-top:0}\nhtml.ios ion-modal .ion-page{border-radius:inherit}\n.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff)!important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255)!important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0)!important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff)!important}\n.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff)!important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255)!important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0)!important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff)!important}\n.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff)!important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255)!important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0)!important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff)!important}\n.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f)!important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111)!important;--ion-color-contrast:var(--ion-color-success-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-success-shade, #28ba62)!important;--ion-color-tint:var(--ion-color-success-tint, #42d77d)!important}\n.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409)!important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9)!important;--ion-color-contrast:var(--ion-color-warning-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0)!important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08)!important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22)!important}\n.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a)!important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90)!important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f)!important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b)!important}\n.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8)!important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248)!important;--ion-color-contrast:var(--ion-color-light-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0)!important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da)!important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9)!important}\n.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c)!important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156)!important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-medium-shade, #808289)!important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6)!important}\n.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428)!important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40)!important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023)!important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e)!important}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\n.split-pane-visible>.ion-page.split-pane-main{position:relative}\n.ion-page-hidden,[hidden],ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-popover-controller,ion-route,ion-route-redirect,ion-router,ion-select-option,ion-toast-controller{display:none!important}\n.ion-page-invisible{opacity:0}\n.can-go-back>ion-header ion-back-button{display:block}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}\n@supports (padding-top:20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}\n@supports (padding-top:constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}\n@supports (padding-top:env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}\nion-card-header.ion-color .ion-inherit-color,ion-card.ion-color .ion-inherit-color{color:inherit}\n.menu-content{transform:translate3d(0,0,0)}\n.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}\n.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}\n[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}\n.md .menu-content-push,.md .menu-content-reveal{box-shadow:4px 0 16px rgba(0,0,0,.18)}\nion-input input::-webkit-date-and-time-value{text-align:start}\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:700}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\ninput,label,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-moz-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}\n.ion-tappable,[tappable],[tappable] div,[tappable] ion-icon,[tappable] ion-label,[tappable] span,a,a div,a ion-icon,a ion-label,a span,button,button div,button ion-icon,button ion-label,button span,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=checkbox],input[type=radio]{padding:0;box-sizing:border-box}\ninput[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}\ninput[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{--ion-font-family:var(--ion-default-font);width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:var(--ion-font-family)}\nhtml:not(.hydrated) body{display:none}\nhtml.plt-pwa{height:100vh}\nbody{background:var(--ion-background-color);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none;margin:0;padding:0}\na{background-color:transparent;color:var(--ion-color-primary,#3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:26px}\nh2{margin-top:18px;font-size:24px}\nh3{font-size:22px}\nh4{font-size:20px}\nh5{font-size:18px}\nh6{font-size:16px}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n.ion-no-padding{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;padding:0}\n.ion-padding{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}\n@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding{padding-left:unset;padding-right:unset;padding-inline-start:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}\n.ion-padding-top{--padding-top:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px)}\n.ion-padding-start{--padding-start:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px)}\n.ion-padding-end{--padding-end:var(--ion-padding, 16px);padding-right:var(--ion-padding,16px)}\n@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-start{padding-left:unset;padding-inline-start:var(--ion-padding,16px)}.ion-padding-end{padding-right:unset;padding-inline-end:var(--ion-padding,16px)}}\n.ion-padding-bottom{--padding-bottom:var(--ion-padding, 16px);padding-bottom:var(--ion-padding,16px)}\n.ion-padding-vertical{--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}\n.ion-padding-horizontal{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px)}\n.ion-no-margin{--margin-start:0;--margin-end:0;--margin-top:0;--margin-bottom:0;margin:0}\n.ion-margin{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}\n@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-horizontal{padding-left:unset;padding-right:unset;padding-inline-start:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}.ion-margin{margin-left:unset;margin-right:unset;margin-inline-start:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}\n.ion-margin-top{--margin-top:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px)}\n.ion-margin-start{--margin-start:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px)}\n.ion-margin-end{--margin-end:var(--ion-margin, 16px);margin-right:var(--ion-margin,16px)}\n@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-start{margin-left:unset;margin-inline-start:var(--ion-margin,16px)}.ion-margin-end{margin-right:unset;margin-inline-end:var(--ion-margin,16px)}}\n.ion-margin-bottom{--margin-bottom:var(--ion-margin, 16px);margin-bottom:var(--ion-margin,16px)}\n.ion-margin-vertical{--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}\n.ion-margin-horizontal{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px)}\n@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-horizontal{margin-left:unset;margin-right:unset;margin-inline-start:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}\n.ion-float-left{float:left!important}\n.ion-float-right{float:right!important}\n.ion-float-start{float:left!important}\n:host-context([dir=rtl]) .ion-float-start,[dir=rtl] .ion-float-start{float:right!important}\n.ion-float-end{float:right!important}\n:host-context([dir=rtl]) .ion-float-end,[dir=rtl] .ion-float-end{float:left!important}\n.ion-text-center{text-align:center!important}\n.ion-text-justify{text-align:justify!important}\n.ion-text-start{text-align:start!important}\n.ion-text-end{text-align:end!important}\n.ion-text-left{text-align:left!important}\n.ion-text-right{text-align:right!important}\n.ion-text-nowrap{white-space:nowrap!important}\n.ion-text-wrap{white-space:normal!important}\n.ion-text-uppercase{text-transform:uppercase!important}\n.ion-text-lowercase{text-transform:lowercase!important}\n.ion-text-capitalize{text-transform:capitalize!important}\n.ion-align-self-start{align-self:flex-start!important}\n.ion-align-self-end{align-self:flex-end!important}\n.ion-align-self-center{align-self:center!important}\n.ion-align-self-stretch{align-self:stretch!important}\n.ion-align-self-baseline{align-self:baseline!important}\n.ion-align-self-auto{align-self:auto!important}\n.ion-wrap{flex-wrap:wrap!important}\n.ion-nowrap{flex-wrap:nowrap!important}\n.ion-wrap-reverse{flex-wrap:wrap-reverse!important}\n.ion-justify-content-start{justify-content:flex-start!important}\n.ion-justify-content-center{justify-content:center!important}\n.ion-justify-content-end{justify-content:flex-end!important}\n.ion-justify-content-around{justify-content:space-around!important}\n.ion-justify-content-between{justify-content:space-between!important}\n.ion-justify-content-evenly{justify-content:space-evenly!important}\n.ion-align-items-start{align-items:flex-start!important}\n.ion-align-items-center{align-items:center!important}\n.ion-align-items-end{align-items:flex-end!important}\n.ion-align-items-stretch{align-items:stretch!important}\n.ion-align-items-baseline{align-items:baseline!important}\n.ion-hide,.ion-hide-down,.ion-hide-up{display:none!important}\n@media (min-width:576px){.ion-float-sm-left{float:left!important}.ion-float-sm-right{float:right!important}.ion-float-sm-start{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start,[dir=rtl] .ion-float-sm-start{float:right!important}.ion-float-sm-end{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end,[dir=rtl] .ion-float-sm-end{float:left!important}.ion-text-sm-center{text-align:center!important}.ion-text-sm-justify{text-align:justify!important}.ion-text-sm-start{text-align:start!important}.ion-text-sm-end{text-align:end!important}.ion-text-sm-left{text-align:left!important}.ion-text-sm-right{text-align:right!important}.ion-text-sm-nowrap{white-space:nowrap!important}.ion-text-sm-wrap{white-space:normal!important}.ion-text-sm-uppercase{text-transform:uppercase!important}.ion-text-sm-lowercase{text-transform:lowercase!important}.ion-text-sm-capitalize{text-transform:capitalize!important}.ion-hide-sm-up{display:none!important}}\n@media (max-width:575.98px){.ion-hide-sm-down{display:none!important}}\n@media (min-width:768px){.ion-float-md-left{float:left!important}.ion-float-md-right{float:right!important}.ion-float-md-start{float:left!important}:host-context([dir=rtl]) .ion-float-md-start,[dir=rtl] .ion-float-md-start{float:right!important}.ion-float-md-end{float:right!important}:host-context([dir=rtl]) .ion-float-md-end,[dir=rtl] .ion-float-md-end{float:left!important}.ion-text-md-center{text-align:center!important}.ion-text-md-justify{text-align:justify!important}.ion-text-md-start{text-align:start!important}.ion-text-md-end{text-align:end!important}.ion-text-md-left{text-align:left!important}.ion-text-md-right{text-align:right!important}.ion-text-md-nowrap{white-space:nowrap!important}.ion-text-md-wrap{white-space:normal!important}.ion-text-md-uppercase{text-transform:uppercase!important}.ion-text-md-lowercase{text-transform:lowercase!important}.ion-text-md-capitalize{text-transform:capitalize!important}.ion-hide-md-up{display:none!important}}\n@media (max-width:767.98px){.ion-hide-md-down{display:none!important}}\n@media (min-width:992px){.ion-float-lg-left{float:left!important}.ion-float-lg-right{float:right!important}.ion-float-lg-start{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start,[dir=rtl] .ion-float-lg-start{float:right!important}.ion-float-lg-end{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end,[dir=rtl] .ion-float-lg-end{float:left!important}.ion-text-lg-center{text-align:center!important}.ion-text-lg-justify{text-align:justify!important}.ion-text-lg-start{text-align:start!important}.ion-text-lg-end{text-align:end!important}.ion-text-lg-left{text-align:left!important}.ion-text-lg-right{text-align:right!important}.ion-text-lg-nowrap{white-space:nowrap!important}.ion-text-lg-wrap{white-space:normal!important}.ion-text-lg-uppercase{text-transform:uppercase!important}.ion-text-lg-lowercase{text-transform:lowercase!important}.ion-text-lg-capitalize{text-transform:capitalize!important}.ion-hide-lg-up{display:none!important}}\n@media (max-width:991.98px){.ion-hide-lg-down{display:none!important}}\n@media (min-width:1200px){.ion-float-xl-left{float:left!important}.ion-float-xl-right{float:right!important}.ion-float-xl-start{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start,[dir=rtl] .ion-float-xl-start{float:right!important}.ion-float-xl-end{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end,[dir=rtl] .ion-float-xl-end{float:left!important}.ion-text-xl-center{text-align:center!important}.ion-text-xl-justify{text-align:justify!important}.ion-text-xl-start{text-align:start!important}.ion-text-xl-end{text-align:end!important}.ion-text-xl-left{text-align:left!important}.ion-text-xl-right{text-align:right!important}.ion-text-xl-nowrap{white-space:nowrap!important}.ion-text-xl-wrap{white-space:normal!important}.ion-text-xl-uppercase{text-transform:uppercase!important}.ion-text-xl-lowercase{text-transform:lowercase!important}.ion-text-xl-capitalize{text-transform:capitalize!important}.ion-hide-xl-up{display:none!important}}\n@media (max-width:1199.98px){.ion-hide-xl-down{display:none!important}}\n:root {\n  /* fonte */\n  --ion-font-family: 'Varela Round', sans-serif;\n\n  /* barra superior */\n  --ion-toolbar-background: #29065a;\n  --ion-toolbar-color: #fff100;\n\n  --ion-background-color: linear-gradient(180deg, #29065a 0%, #7314fd 100%);\n\n  /* barra inferior */\n  --ion-tab-bar-background: #29065a;\n  --ion-tab-bar-color: #44578a;\n  --ion-tab-bar-color-selected: #fff100;\n\n  /* card */\n  --ion-card-background: linear-gradient(\n    139deg,\n    #831affab 0%,\n    transparent 100%\n  );\n  --ion-item-background: transparent;\n\n  /* text-color */\n  --ion-text-color: white;\n  --ion-text-color-rgb: 255, 255, 255;\n}\n.conteudo {\n  max-width: 500px;\n  margin: auto;\n  text-align: center;\n}\n.img-item {\n  padding: 20px;\n  padding-bottom: 0px;\n  width: 100%;\n  max-width: 400px;\n}\nion-card {\n  cursor: pointer;\n  transition: transform 0.3s;\n}\nion-card:hover {\n  transform: scale(1.02);\n}\n", "",{"version":3,"sources":["styles.css","../node_modules/@ionic/angular/css/ionic.bundle.css"],"names":[],"mappings":"AAAA,mDAAmD;ACAnD,SAAS,wFAAwF;AAAC,QAAQ,uDAAuD;AAAC,wBAAwB,eAAe;AAAC,6EAA6E,aAAa;AAAC,6BAA6B,qBAAqB;AAAC,mBAAmB,4DAA4D,CAAC,yEAAyE,CAAC,sEAAsE,CAAC,uFAAuF,CAAC,mEAAmE,CAAC,iEAAiE;AAAC,qBAAqB,8DAA8D,CAAC,2EAA2E,CAAC,wEAAwE,CAAC,yFAAyF,CAAC,qEAAqE,CAAC,mEAAmE;AAAC,oBAAoB,6DAA6D,CAAC,yEAAyE,CAAC,uEAAuE,CAAC,wFAAwF,CAAC,oEAAoE,CAAC,kEAAkE;AAAC,mBAAmB,4DAA4D,CAAC,yEAAyE,CAAC,sEAAsE,CAAC,uFAAuF,CAAC,mEAAmE,CAAC,iEAAiE;AAAC,mBAAmB,4DAA4D,CAAC,wEAAwE,CAAC,sEAAsE,CAAC,iFAAiF,CAAC,mEAAmE,CAAC,iEAAiE;AAAC,kBAAkB,2DAA2D,CAAC,uEAAuE,CAAC,qEAAqE,CAAC,sFAAsF,CAAC,kEAAkE,CAAC,gEAAgE;AAAC,iBAAiB,0DAA0D,CAAC,wEAAwE,CAAC,oEAAoE,CAAC,+EAA+E,CAAC,iEAAiE,CAAC,+DAA+D;AAAC,kBAAkB,2DAA2D,CAAC,yEAAyE,CAAC,qEAAqE,CAAC,sFAAsF,CAAC,kEAAkE,CAAC,gEAAgE;AAAC,gBAAgB,yDAAyD,CAAC,oEAAoE,CAAC,mEAAmE,CAAC,oFAAoF,CAAC,gEAAgE,CAAC,8DAA8D;AAAC,UAAU,MAAM,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,CAAC,YAAY,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,yBAAyB,CAAC,eAAe,CAAC,SAAS;AAAC,8CAA8C,iBAAiB;AAAC,0RAA0R,sBAAsB;AAAC,oBAAoB,SAAS;AAAC,wCAAwC,aAAa;AAAC,6CAA6C,4BAA4B;AAAC,6BAA6B,KAAK,gDAAgD,CAAC;AAAC,sDAAsD,KAAK,iDAAiD,CAAC,uDAAuD,CAAC,mDAAmD,CAAC,qDAAqD,CAAC;AAAC,iDAAiD,KAAK,4CAA4C,CAAC,kDAAkD,CAAC,8CAA8C,CAAC,gDAAgD,CAAC;AAAC,mFAAmF,aAAa;AAAC,cAAc,4BAA4B;AAAC,mBAAmB,cAAc,CAAC,yBAAyB,CAAC,mBAAmB;AAAC,0BAA0B,sCAAsC;AAAC,mCAAmC,qCAAqC;AAAC,gDAAgD,qCAAqC;AAAC,6CAA6C,gBAAgB;AAAC,4BAA4B,uBAAuB;AAAC,sBAAsB,YAAY,CAAC,QAAQ;AAAC,SAAS,eAAe;AAAC,IAAI,cAAc,CAAC,QAAQ;AAAC,eAAe,eAAe;AAAC,OAAO,eAAe;AAAC,GAAG,UAAU,CAAC,cAAc,CAAC,sBAAsB;AAAC,IAAI,aAAa;AAAC,kBAAkB,+BAA+B,CAAC,aAAa;AAAC,4BAA4B,mBAAmB,CAAC,kBAAkB;AAAC,SAAS,aAAa,CAAC,WAAW,CAAC,YAAY,CAAC,aAAa;AAAC,2BAAsB,gBAAgB;AAAtC,sBAAsB,gBAAgB;AAAC,2BAA2B,QAAQ,CAAC,YAAY,CAAC,aAAa;AAAC,6DAA6D,cAAc,CAAC,yBAAyB;AAAC,qNAAqN,yBAAyB;AAAC,6BAA6B,mBAAmB;AAAC,OAAO,QAAQ,CAAC,eAAe,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,aAAa,CAAC,mBAAmB,CAAC,cAAc,CAAC,yBAAyB;AAAC,WAAW,cAAc;AAAC,kDAAkD,cAAc;AAAC,iDAAiD,SAAS,CAAC,QAAQ;AAAC,uCAAuC,SAAS,CAAC,qBAAqB;AAAC,4FAA4F,WAAW;AAAC,+FAA+F,uBAAuB;AAAC,MAAM,wBAAwB,CAAC,gBAAgB;AAAC,MAAM,SAAS;AAAC,EAAE,qBAAqB,CAAC,uCAAuC,CAAC,uCAAuC,CAAC,0BAA0B;AAAC,KAAK,yCAAyC,CAAC,UAAU,CAAC,WAAW,CAAC,6BAAqB,CAArB,0BAAqB,CAArB,qBAAqB,CAAC,kCAAkC;AAAC,yBAAyB,YAAY;AAAC,aAAa,YAAY;AAAC,KAAK,sCAAsC,CAAC,iCAAiC,CAAC,kCAAkC,CAAC,cAAc,CAAC,UAAU,CAAC,cAAc,CAAC,WAAW,CAAC,eAAe,CAAC,iCAAiC,CAAC,eAAe,CAAC,yBAAyB,CAAC,sBAAsB,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,0BAA0B,CAAC,6BAAqB,CAArB,0BAAqB,CAArB,qBAAqB,CAAC,QAAQ,CAAC,SAAS;AAAC,EAAE,4BAA4B,CAAC,sCAAsC;AAAC,kBAAkB,eAAe,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe;AAAC,GAAG,eAAe,CAAC,cAAc;AAAC,GAAG,eAAe,CAAC,cAAc;AAAC,GAAG,cAAc;AAAC,GAAG,cAAc;AAAC,GAAG,cAAc;AAAC,GAAG,cAAc;AAAC,MAAM,aAAa;AAAC,QAAQ,iBAAiB,CAAC,aAAa,CAAC,aAAa,CAAC,uBAAuB;AAAC,IAAI,SAAS;AAAC,IAAI,aAAa;AAAC,gBAAgB,iBAAiB,CAAC,eAAe,CAAC,eAAe,CAAC,kBAAkB,CAAC,SAAS;AAAC,aAAa,wCAAwC,CAAC,sCAAsC,CAAC,sCAAsC,CAAC,yCAAyC,CAAC,oCAAoC,CAAC,qCAAqC,CAAC,mCAAmC,CAAC,sCAAsC;AAAC,8DAA8D,aAAa,kBAAkB,CAAC,mBAAmB,CAA+C,4CAA4C,CAA6C,0CAA0C,CAAC;AAAC,iBAAiB,sCAAsC,CAAC,mCAAmC;AAAC,mBAAmB,wCAAwC,CAAC,oCAAoC;AAAC,iBAAiB,sCAAsC,CAAC,qCAAqC;AAAC,8DAA8D,mBAAmB,kBAAkB,CAA+C,4CAA4C,CAAC,iBAAiB,mBAAmB,CAA6C,0CAA0C,CAAC;AAAC,oBAAoB,yCAAyC,CAAC,sCAAsC;AAAC,sBAAsB,sCAAsC,CAAC,yCAAyC,CAAC,mCAAmC,CAAC,sCAAsC;AAAC,wBAAwB,wCAAwC,CAAC,sCAAsC,CAAC,oCAAoC,CAAC,qCAAqC;AAAC,eAAe,gBAAgB,CAAC,cAAc,CAAC,cAAc,CAAC,iBAAiB,CAAC,QAAQ;AAAC,YAAY,sCAAsC,CAAC,oCAAoC,CAAC,oCAAoC,CAAC,uCAAuC,CAAC,kCAAkC,CAAC,mCAAmC,CAAC,iCAAiC,CAAC,oCAAoC;AAAC,8DAA8D,wBAAwB,kBAAkB,CAAC,mBAAmB,CAA+C,4CAA4C,CAA6C,0CAA0C,CAAC,YAAY,iBAAiB,CAAC,kBAAkB,CAA6C,0CAA0C,CAA2C,wCAAwC,CAAC;AAAC,gBAAgB,oCAAoC,CAAC,iCAAiC;AAAC,kBAAkB,sCAAsC,CAAC,kCAAkC;AAAC,gBAAgB,oCAAoC,CAAC,mCAAmC;AAAC,8DAA8D,kBAAkB,iBAAiB,CAA6C,0CAA0C,CAAC,gBAAgB,kBAAkB,CAA2C,wCAAwC,CAAC;AAAC,mBAAmB,uCAAuC,CAAC,oCAAoC;AAAC,qBAAqB,oCAAoC,CAAC,uCAAuC,CAAC,iCAAiC,CAAC,oCAAoC;AAAC,uBAAuB,sCAAsC,CAAC,oCAAoC,CAAC,kCAAkC,CAAC,mCAAmC;AAAC,8DAA8D,uBAAuB,iBAAiB,CAAC,kBAAkB,CAA6C,0CAA0C,CAA2C,wCAAwC,CAAC;AAAC,gBAAgB,oBAAoB;AAAC,iBAAiB,qBAAqB;AAAC,iBAAiB,oBAAoB;AAAC,qEAAqE,qBAAqB;AAAC,eAAe,qBAAqB;AAAC,iEAAiE,oBAAoB;AAAC,iBAAiB,2BAA2B;AAAC,kBAAkB,4BAA4B;AAAC,gBAAgB,0BAA0B;AAAC,cAAc,wBAAwB;AAAC,eAAe,yBAAyB;AAAC,gBAAgB,0BAA0B;AAAC,iBAAiB,4BAA4B;AAAC,eAAe,4BAA4B;AAAC,oBAAoB,kCAAkC;AAAC,oBAAoB,kCAAkC;AAAC,qBAAqB,mCAAmC;AAAC,sBAAsB,+BAA+B;AAAC,oBAAoB,6BAA6B;AAAC,uBAAuB,2BAA2B;AAAC,wBAAwB,4BAA4B;AAAC,yBAAyB,6BAA6B;AAAC,qBAAqB,yBAAyB;AAAC,UAAU,wBAAwB;AAAC,YAAY,0BAA0B;AAAC,kBAAkB,gCAAgC;AAAC,2BAA2B,oCAAoC;AAAC,4BAA4B,gCAAgC;AAAC,yBAAyB,kCAAkC;AAAC,4BAA4B,sCAAsC;AAAC,6BAA6B,uCAAuC;AAAC,4BAA4B,sCAAsC;AAAC,uBAAuB,gCAAgC;AAAC,wBAAwB,4BAA4B;AAAC,qBAAqB,8BAA8B;AAAC,yBAAyB,6BAA6B;AAAC,0BAA0B,8BAA8B;AAAC,sCAAsC,sBAAsB;AAAC,yBAAyB,mBAAmB,oBAAoB,CAAC,oBAAoB,qBAAqB,CAAC,oBAAoB,oBAAoB,CAAC,2EAA2E,qBAAqB,CAAC,kBAAkB,qBAAqB,CAAC,uEAAuE,oBAAoB,CAAC,oBAAoB,2BAA2B,CAAC,qBAAqB,4BAA4B,CAAC,mBAAmB,0BAA0B,CAAC,iBAAiB,wBAAwB,CAAC,kBAAkB,yBAAyB,CAAC,mBAAmB,0BAA0B,CAAC,oBAAoB,4BAA4B,CAAC,kBAAkB,4BAA4B,CAAC,uBAAuB,kCAAkC,CAAC,uBAAuB,kCAAkC,CAAC,wBAAwB,mCAAmC,CAAC,gBAAgB,sBAAsB,CAAC;AAAC,4BAA4B,kBAAkB,sBAAsB,CAAC;AAAC,yBAAyB,mBAAmB,oBAAoB,CAAC,oBAAoB,qBAAqB,CAAC,oBAAoB,oBAAoB,CAAC,2EAA2E,qBAAqB,CAAC,kBAAkB,qBAAqB,CAAC,uEAAuE,oBAAoB,CAAC,oBAAoB,2BAA2B,CAAC,qBAAqB,4BAA4B,CAAC,mBAAmB,0BAA0B,CAAC,iBAAiB,wBAAwB,CAAC,kBAAkB,yBAAyB,CAAC,mBAAmB,0BAA0B,CAAC,oBAAoB,4BAA4B,CAAC,kBAAkB,4BAA4B,CAAC,uBAAuB,kCAAkC,CAAC,uBAAuB,kCAAkC,CAAC,wBAAwB,mCAAmC,CAAC,gBAAgB,sBAAsB,CAAC;AAAC,4BAA4B,kBAAkB,sBAAsB,CAAC;AAAC,yBAAyB,mBAAmB,oBAAoB,CAAC,oBAAoB,qBAAqB,CAAC,oBAAoB,oBAAoB,CAAC,2EAA2E,qBAAqB,CAAC,kBAAkB,qBAAqB,CAAC,uEAAuE,oBAAoB,CAAC,oBAAoB,2BAA2B,CAAC,qBAAqB,4BAA4B,CAAC,mBAAmB,0BAA0B,CAAC,iBAAiB,wBAAwB,CAAC,kBAAkB,yBAAyB,CAAC,mBAAmB,0BAA0B,CAAC,oBAAoB,4BAA4B,CAAC,kBAAkB,4BAA4B,CAAC,uBAAuB,kCAAkC,CAAC,uBAAuB,kCAAkC,CAAC,wBAAwB,mCAAmC,CAAC,gBAAgB,sBAAsB,CAAC;AAAC,4BAA4B,kBAAkB,sBAAsB,CAAC;AAAC,0BAA0B,mBAAmB,oBAAoB,CAAC,oBAAoB,qBAAqB,CAAC,oBAAoB,oBAAoB,CAAC,2EAA2E,qBAAqB,CAAC,kBAAkB,qBAAqB,CAAC,uEAAuE,oBAAoB,CAAC,oBAAoB,2BAA2B,CAAC,qBAAqB,4BAA4B,CAAC,mBAAmB,0BAA0B,CAAC,iBAAiB,wBAAwB,CAAC,kBAAkB,yBAAyB,CAAC,mBAAmB,0BAA0B,CAAC,oBAAoB,4BAA4B,CAAC,kBAAkB,4BAA4B,CAAC,uBAAuB,kCAAkC,CAAC,uBAAuB,kCAAkC,CAAC,wBAAwB,mCAAmC,CAAC,gBAAgB,sBAAsB,CAAC;AAAC,6BAA6B,kBAAkB,sBAAsB,CAAC;ADGxmlB;EACE,UAAU;EACV,6CAA6C;;EAE7C,mBAAmB;EACnB,iCAAiC;EACjC,4BAA4B;;EAE5B,yEAAyE;;EAEzE,mBAAmB;EACnB,iCAAiC;EACjC,4BAA4B;EAC5B,qCAAqC;;EAErC,SAAS;EACT;;;;GAIC;EACD,kCAAkC;;EAElC,eAAe;EACf,uBAAuB;EACvB,mCAAmC;AACrC;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;AAEA;EACE,sBAAsB;AACxB","file":"styles.css","sourcesContent":["/* Add application styles & imports to this file! */\n@import '~@ionic/angular/css/ionic.bundle.css';\n\n:root {\n  /* fonte */\n  --ion-font-family: 'Varela Round', sans-serif;\n\n  /* barra superior */\n  --ion-toolbar-background: #29065a;\n  --ion-toolbar-color: #fff100;\n\n  --ion-background-color: linear-gradient(180deg, #29065a 0%, #7314fd 100%);\n\n  /* barra inferior */\n  --ion-tab-bar-background: #29065a;\n  --ion-tab-bar-color: #44578a;\n  --ion-tab-bar-color-selected: #fff100;\n\n  /* card */\n  --ion-card-background: linear-gradient(\n    139deg,\n    #831affab 0%,\n    transparent 100%\n  );\n  --ion-item-background: transparent;\n\n  /* text-color */\n  --ion-text-color: white;\n  --ion-text-color-rgb: 255, 255, 255;\n}\n\n.conteudo {\n  max-width: 500px;\n  margin: auto;\n  text-align: center;\n}\n\n.img-item {\n  padding: 20px;\n  padding-bottom: 0px;\n  width: 100%;\n  max-width: 400px;\n}\n\nion-card {\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\nion-card:hover {\n  transform: scale(1.02);\n}\n","html.ios{--ion-default-font:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Roboto\",sans-serif}html.md{--ion-default-font:\"Roboto\",\"Helvetica Neue\",sans-serif}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card .ion-page>ion-header>ion-toolbar:first-of-type{padding-top:0}html.ios ion-modal .ion-page{border-radius:inherit}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff)!important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255)!important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0)!important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff)!important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff)!important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255)!important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0)!important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff)!important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff)!important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255)!important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0)!important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff)!important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f)!important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111)!important;--ion-color-contrast:var(--ion-color-success-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-success-shade, #28ba62)!important;--ion-color-tint:var(--ion-color-success-tint, #42d77d)!important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409)!important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9)!important;--ion-color-contrast:var(--ion-color-warning-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0)!important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08)!important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22)!important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a)!important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90)!important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f)!important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b)!important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8)!important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248)!important;--ion-color-contrast:var(--ion-color-light-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0)!important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da)!important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9)!important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c)!important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156)!important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-medium-shade, #808289)!important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6)!important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428)!important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40)!important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023)!important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e)!important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}.split-pane-visible>.ion-page.split-pane-main{position:relative}.ion-page-hidden,[hidden],ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-popover-controller,ion-route,ion-route-redirect,ion-router,ion-select-option,ion-toast-controller{display:none!important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top:20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top:constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top:env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card-header.ion-color .ion-inherit-color,ion-card.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{box-shadow:4px 0 16px rgba(0,0,0,.18)}ion-input input::-webkit-date-and-time-value{text-align:start}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}input,label,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}.ion-tappable,[tappable],[tappable] div,[tappable] ion-icon,[tappable] ion-label,[tappable] span,a,a div,a ion-icon,a ion-label,a span,button,button div,button ion-icon,button ion-label,button span,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=checkbox],input[type=radio]{padding:0;box-sizing:border-box}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{--ion-font-family:var(--ion-default-font);width:100%;height:100%;text-size-adjust:100%;font-family:var(--ion-font-family)}html:not(.hydrated) body{display:none}html.plt-pwa{height:100vh}body{background:var(--ion-background-color);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;text-size-adjust:none;margin:0;padding:0}a{background-color:transparent;color:var(--ion-color-primary,#3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;padding:0}.ion-padding{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-top{--padding-top:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px)}.ion-padding-start{--padding-start:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px)}.ion-padding-end{--padding-end:var(--ion-padding, 16px);padding-right:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-start{padding-left:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px)}.ion-padding-end{padding-right:unset;-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-bottom{--padding-bottom:var(--ion-padding, 16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-vertical{--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-horizontal{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px)}.ion-no-margin{--margin-start:0;--margin-end:0;--margin-top:0;--margin-bottom:0;margin:0}.ion-margin{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-horizontal{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}.ion-margin{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-top{--margin-top:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px)}.ion-margin-start{--margin-start:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px)}.ion-margin-end{--margin-end:var(--ion-margin, 16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-start{margin-left:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px)}.ion-margin-end{margin-right:unset;-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-bottom{--margin-bottom:var(--ion-margin, 16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-vertical{--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-horizontal{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-horizontal{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-float-left{float:left!important}.ion-float-right{float:right!important}.ion-float-start{float:left!important}:host-context([dir=rtl]) .ion-float-start,[dir=rtl] .ion-float-start{float:right!important}.ion-float-end{float:right!important}:host-context([dir=rtl]) .ion-float-end,[dir=rtl] .ion-float-end{float:left!important}.ion-text-center{text-align:center!important}.ion-text-justify{text-align:justify!important}.ion-text-start{text-align:start!important}.ion-text-end{text-align:end!important}.ion-text-left{text-align:left!important}.ion-text-right{text-align:right!important}.ion-text-nowrap{white-space:nowrap!important}.ion-text-wrap{white-space:normal!important}.ion-text-uppercase{text-transform:uppercase!important}.ion-text-lowercase{text-transform:lowercase!important}.ion-text-capitalize{text-transform:capitalize!important}.ion-align-self-start{align-self:flex-start!important}.ion-align-self-end{align-self:flex-end!important}.ion-align-self-center{align-self:center!important}.ion-align-self-stretch{align-self:stretch!important}.ion-align-self-baseline{align-self:baseline!important}.ion-align-self-auto{align-self:auto!important}.ion-wrap{flex-wrap:wrap!important}.ion-nowrap{flex-wrap:nowrap!important}.ion-wrap-reverse{flex-wrap:wrap-reverse!important}.ion-justify-content-start{justify-content:flex-start!important}.ion-justify-content-center{justify-content:center!important}.ion-justify-content-end{justify-content:flex-end!important}.ion-justify-content-around{justify-content:space-around!important}.ion-justify-content-between{justify-content:space-between!important}.ion-justify-content-evenly{justify-content:space-evenly!important}.ion-align-items-start{align-items:flex-start!important}.ion-align-items-center{align-items:center!important}.ion-align-items-end{align-items:flex-end!important}.ion-align-items-stretch{align-items:stretch!important}.ion-align-items-baseline{align-items:baseline!important}.ion-hide,.ion-hide-down,.ion-hide-up{display:none!important}@media (min-width:576px){.ion-float-sm-left{float:left!important}.ion-float-sm-right{float:right!important}.ion-float-sm-start{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start,[dir=rtl] .ion-float-sm-start{float:right!important}.ion-float-sm-end{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end,[dir=rtl] .ion-float-sm-end{float:left!important}.ion-text-sm-center{text-align:center!important}.ion-text-sm-justify{text-align:justify!important}.ion-text-sm-start{text-align:start!important}.ion-text-sm-end{text-align:end!important}.ion-text-sm-left{text-align:left!important}.ion-text-sm-right{text-align:right!important}.ion-text-sm-nowrap{white-space:nowrap!important}.ion-text-sm-wrap{white-space:normal!important}.ion-text-sm-uppercase{text-transform:uppercase!important}.ion-text-sm-lowercase{text-transform:lowercase!important}.ion-text-sm-capitalize{text-transform:capitalize!important}.ion-hide-sm-up{display:none!important}}@media (max-width:575.98px){.ion-hide-sm-down{display:none!important}}@media (min-width:768px){.ion-float-md-left{float:left!important}.ion-float-md-right{float:right!important}.ion-float-md-start{float:left!important}:host-context([dir=rtl]) .ion-float-md-start,[dir=rtl] .ion-float-md-start{float:right!important}.ion-float-md-end{float:right!important}:host-context([dir=rtl]) .ion-float-md-end,[dir=rtl] .ion-float-md-end{float:left!important}.ion-text-md-center{text-align:center!important}.ion-text-md-justify{text-align:justify!important}.ion-text-md-start{text-align:start!important}.ion-text-md-end{text-align:end!important}.ion-text-md-left{text-align:left!important}.ion-text-md-right{text-align:right!important}.ion-text-md-nowrap{white-space:nowrap!important}.ion-text-md-wrap{white-space:normal!important}.ion-text-md-uppercase{text-transform:uppercase!important}.ion-text-md-lowercase{text-transform:lowercase!important}.ion-text-md-capitalize{text-transform:capitalize!important}.ion-hide-md-up{display:none!important}}@media (max-width:767.98px){.ion-hide-md-down{display:none!important}}@media (min-width:992px){.ion-float-lg-left{float:left!important}.ion-float-lg-right{float:right!important}.ion-float-lg-start{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start,[dir=rtl] .ion-float-lg-start{float:right!important}.ion-float-lg-end{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end,[dir=rtl] .ion-float-lg-end{float:left!important}.ion-text-lg-center{text-align:center!important}.ion-text-lg-justify{text-align:justify!important}.ion-text-lg-start{text-align:start!important}.ion-text-lg-end{text-align:end!important}.ion-text-lg-left{text-align:left!important}.ion-text-lg-right{text-align:right!important}.ion-text-lg-nowrap{white-space:nowrap!important}.ion-text-lg-wrap{white-space:normal!important}.ion-text-lg-uppercase{text-transform:uppercase!important}.ion-text-lg-lowercase{text-transform:lowercase!important}.ion-text-lg-capitalize{text-transform:capitalize!important}.ion-hide-lg-up{display:none!important}}@media (max-width:991.98px){.ion-hide-lg-down{display:none!important}}@media (min-width:1200px){.ion-float-xl-left{float:left!important}.ion-float-xl-right{float:right!important}.ion-float-xl-start{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start,[dir=rtl] .ion-float-xl-start{float:right!important}.ion-float-xl-end{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end,[dir=rtl] .ion-float-xl-end{float:left!important}.ion-text-xl-center{text-align:center!important}.ion-text-xl-justify{text-align:justify!important}.ion-text-xl-start{text-align:start!important}.ion-text-xl-end{text-align:end!important}.ion-text-xl-left{text-align:left!important}.ion-text-xl-right{text-align:right!important}.ion-text-xl-nowrap{white-space:nowrap!important}.ion-text-xl-wrap{white-space:normal!important}.ion-text-xl-uppercase{text-transform:uppercase!important}.ion-text-xl-lowercase{text-transform:lowercase!important}.ion-text-xl-capitalize{text-transform:capitalize!important}.ion-hide-xl-up{display:none!important}}@media (max-width:1199.98px){.ion-hide-xl-down{display:none!important}}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre.silva\Desktop\ionic-5-angular-10-start-template-npqajv\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map