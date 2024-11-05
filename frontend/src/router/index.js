"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var FooldalLayout_vue_1 = require("@layouts/FooldalLayout.vue");
var routes = [
    {
        name: 'home',
        path: '/',
        component: FooldalLayout_vue_1.default,
        meta: {
            title: 'Főoldal',
        },
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    linkActiveClass: 'active',
    routes: routes,
});
exports.default = router;
