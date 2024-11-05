"use strict";
var __assign = (this && this.__assign) || function () {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderLayout_vue_1 = require("@layouts/HeaderLayout.vue");
var NavbarLayout_vue_1 = require("@layouts/NavbarLayout.vue");
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    components: {
        HeaderLayout: HeaderLayout_vue_1.default,
        NavbarLayout: NavbarLayout_vue_1.default,
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign({
        HeaderLayout: HeaderLayout_vue_1.default,
        NavbarLayout: NavbarLayout_vue_1.default,
    }, {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.HeaderLayout;
    /** @type { [typeof __VLS_components.HeaderLayout, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.NavbarLayout;
    /** @type { [typeof __VLS_components.NavbarLayout, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses[''];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self;
