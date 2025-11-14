(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "37c06c9885277ec37ab9d1a8d72cd0aeda51996cce0df47a9eb41cfb86bf4654") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37c06c9885277ec37ab9d1a8d72cd0aeda51996cce0df47a9eb41cfb86bf4654";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isSpanish = pathname?.startsWith("/es");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[toggleMenu]": ()=>{
                setMenuOpen(_HeaderToggleMenuSetMenuOpen);
            }
        })["Header[toggleMenu]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const toggleMenu = t0;
    const t1 = isSpanish ? "/es" : "/";
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/Assets/The One Stop Studio.jpg",
            alt: "The One Stop Studio",
            width: 50,
            height: 50,
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            className: "logo-link",
            "aria-label": "Home",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "site-title",
            children: "The One Stop Studio"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `burger-menu ${menuOpen ? "active" : ""}`;
    const t6 = isSpanish ? "/es/services" : "/services";
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Header[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Header[<Link>.onClick]"];
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    const t8 = isSpanish ? "Servicios" : "All Services";
    let t9;
    if ($[7] !== t6 || $[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "burger-item",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t6,
                onClick: t7,
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 68,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = isSpanish ? "/es/about" : "/about";
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Header[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Header[<Link>.onClick]"];
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    const t12 = isSpanish ? "Sobre Nosotros" : "About Us";
    let t13;
    if ($[11] !== t10 || $[12] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "burger-item",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t10,
                onClick: t11,
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 88,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t12;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    const t14 = isSpanish ? "/es/coming-soon" : "/coming-soon";
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "Header[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Header[<Link>.onClick]"];
        $[14] = t15;
    } else {
        t15 = $[14];
    }
    const t16 = isSpanish ? "Reservar" : "Book an Appointment";
    let t17;
    if ($[15] !== t14 || $[16] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "burger-item",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t14,
                onClick: t15,
                children: t16
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 108,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t16;
        $[17] = t17;
    } else {
        t17 = $[17];
    }
    const t18 = isSpanish ? "/" : "/es";
    let t19;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Header[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Header[<Link>.onClick]"];
        $[18] = t19;
    } else {
        t19 = $[18];
    }
    const t20 = isSpanish ? "English" : "En Espa\xF1ol";
    let t21;
    if ($[19] !== t18 || $[20] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "burger-item",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t18,
                onClick: t19,
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 128,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[19] = t18;
        $[20] = t20;
        $[21] = t21;
    } else {
        t21 = $[21];
    }
    let t22;
    if ($[22] !== t13 || $[23] !== t17 || $[24] !== t21 || $[25] !== t5 || $[26] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "navbar",
            "aria-label": "Main navigation",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: t5,
                children: [
                    t9,
                    t13,
                    t17,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 137,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t17;
        $[24] = t21;
        $[25] = t5;
        $[26] = t9;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    const t23 = `burger ${menuOpen ? "active" : ""}`;
    const t24 = menuOpen ? "Close menu" : "Open menu";
    let t25;
    let t26;
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bar"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bar"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bar"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[28] = t25;
        $[29] = t26;
        $[30] = t27;
    } else {
        t25 = $[28];
        t26 = $[29];
        t27 = $[30];
    }
    let t28;
    if ($[31] !== menuOpen || $[32] !== t23 || $[33] !== t24) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t23,
            "aria-label": t24,
            "aria-expanded": menuOpen,
            "aria-controls": "main-menu",
            onClick: toggleMenu,
            children: [
                t25,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[31] = menuOpen;
        $[32] = t23;
        $[33] = t24;
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] !== t22 || $[36] !== t28 || $[37] !== t3) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    t3,
                    t4,
                    t22,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 176,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t28;
        $[37] = t3;
        $[38] = t29;
    } else {
        t29 = $[38];
    }
    return t29;
}
_s(Header, "bpMwb7mqh2VY8OCQVwmxGuhBq5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
function _HeaderToggleMenuSetMenuOpen(prev) {
    return !prev;
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const buzzwords = [
    "beautiful",
    "magnificent",
    "spectacular",
    "ravishing",
    "stunning",
    "charming"
];
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f62b5763436ab001c782ed7f598e8bd306414ea0e0d417ec50cd3e013eb3a6c5") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f62b5763436ab001c782ed7f598e8bd306414ea0e0d417ec50cd3e013eb3a6c5";
    }
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[useEffect()]": ()=>{
                const interval = setInterval({
                    "Footer[useEffect() > setInterval()]": ()=>{
                        setAnimate("roll-out");
                        setTimeout({
                            "Footer[useEffect() > setInterval() > setTimeout()]": ()=>{
                                setCurrentIndex(_FooterUseEffectSetIntervalSetTimeoutSetCurrentIndex);
                                setAnimate("roll-in");
                            }
                        }["Footer[useEffect() > setInterval() > setTimeout()]"], 500);
                    }
                }["Footer[useEffect() > setInterval()]"], 3000);
                return ()=>clearInterval(interval);
            }
        })["Footer[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "footer-heading",
            children: "The One Stop Studio"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `buzzword ${animate}`;
    const t4 = buzzwords[currentIndex];
    let t5;
    if ($[4] !== t3 || $[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-section",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Making you",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "buzzword-wrapper",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: t3,
                                children: t4
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 54,
                                columnNumber: 99
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 54,
                            columnNumber: 64
                        }, this),
                        " ",
                        "since 2018."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 54,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "footer-heading",
            children: "Our Location"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
            children: "2922 S Western Ave, Los Angeles, CA 90018"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-section",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "map-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "Map to The One Stop Studio",
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.183041912766!2d-118.30925409106783!3d34.02838015117795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b79db660ffbb%3A0x465d852ad147c4cb!2sThe%20One%20Stop%20Studio!5e0!3m2!1sen!2sus!4v1748734461845!5m2!1sen!2sus",
                        allowFullScreen: true,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 74,
                        columnNumber: 81
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 74,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-section social-links",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.instagram.com/theonestopstudiollc/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Instagram"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 81,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t5) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-content",
            children: [
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[11] = t5;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "© The One Stop Studio .llc, All Rights Reserved."
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 96,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "footer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-container",
                children: [
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 103,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    return t12;
}
_s(Footer, "w1uIyi4uSpsEUaz+ccTHVE0U7rA=");
_c = Footer;
function _FooterUseEffectSetIntervalSetTimeoutSetCurrentIndex(prev) {
    return (prev + 1) % buzzwords.length;
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/data/servicesData.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ServicesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "bd76191967fefa6c56ac9c4dc2e557b38dacbcb6865f099ee2ffdf918561c7a7") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd76191967fefa6c56ac9c4dc2e557b38dacbcb6865f099ee2ffdf918561c7a7";
    }
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ServicesPage[handleFilterClick]": (filter)=>{
                setActiveFilter(filter.toLowerCase());
            }
        })["ServicesPage[handleFilterClick]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleFilterClick = t0;
    let t1;
    if ($[2] !== activeFilter) {
        t1 = ({
            "ServicesPage[isColumnVisible]": (category)=>{
                if (activeFilter === "all") {
                    return true;
                }
                return category.toLowerCase() === activeFilter;
            }
        })["ServicesPage[isColumnVisible]"];
        $[2] = activeFilter;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const isColumnVisible = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "section-title",
            children: "Our Services"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = activeFilter === "all" ? "active" : "";
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("all")
        })["ServicesPage[<button>.onClick]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "all",
            className: t4,
            onClick: t5,
            children: "Show All"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = activeFilter === "barber services" ? "active" : "";
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("barber services")
        })["ServicesPage[<button>.onClick]"];
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "barber services",
            className: t7,
            onClick: t8,
            children: "Barber"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = activeFilter === "beauty services" ? "active" : "";
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("beauty services")
        })["ServicesPage[<button>.onClick]"];
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "beauty services",
            className: t10,
            onClick: t11,
            children: "Beauty"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const t13 = activeFilter === "other/add-on services" ? "active" : "";
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("other/add-on services")
        })["ServicesPage[<button>.onClick]"];
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "other/add-on services",
            className: t13,
            onClick: t14,
            children: "Other"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[16] = t13;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = activeFilter === "permanent cosmetic services" ? "active" : "";
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("permanent cosmetic services")
        })["ServicesPage[<button>.onClick]"];
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "permanent cosmetic services",
            className: t16,
            onClick: t17,
            children: "Permanent Cosmetics"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[19] = t16;
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    const t19 = activeFilter === "piercing services" ? "active" : "";
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ServicesPage[<button>.onClick]": ()=>handleFilterClick("piercing services")
        })["ServicesPage[<button>.onClick]"];
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-filter": "piercing services",
            className: t19,
            onClick: t20,
            children: "Piercings"
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[22] = t19;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] !== t12 || $[25] !== t15 || $[26] !== t18 || $[27] !== t21 || $[28] !== t6 || $[29] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filter-buttons",
            children: [
                t6,
                t9,
                t12,
                t15,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t15;
        $[26] = t18;
        $[27] = t21;
        $[28] = t6;
        $[29] = t9;
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] !== isColumnVisible) {
        t23 = servicesData.map({
            "ServicesPage[(anonymous)()]": (categoryData, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "service-column",
                    "data-category": categoryData.category,
                    style: {
                        display: isColumnVisible(categoryData.category) ? "block" : "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: categoryData.category
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 194,
                            columnNumber: 10
                        }, this),
                        categoryData.services.map(_ServicesPageAnonymousCategoryDataServicesMap)
                    ]
                }, idx, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 192,
                    columnNumber: 61
                }, this)
        }["ServicesPage[(anonymous)()]"]);
        $[31] = isColumnVisible;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "services-container",
            id: "servicesContainer",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[33] = t23;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            textAlign: "center"
        };
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t25,
            children: [
                "Call ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+14247572546",
                    className: "underline",
                    children: "(424) 757-2546"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 220,
                    columnNumber: 31
                }, this),
                " for pricing and appointments."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t22 || $[38] !== t24) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-6xl px-4 py-24",
            children: [
                t3,
                t22,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t24;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t2,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[41] = t27;
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    return t29;
}
_s(ServicesPage, "t7f5NoXziLbzmLCl86X+c5sU9bA=");
_c = ServicesPage;
function _ServicesPageAnonymousCategoryDataServicesMap(service, serviceIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "service-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: service.name
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 252,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "price",
                children: service.price
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 252,
                columnNumber: 80
            }, this)
        ]
    }, serviceIdx, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 252,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_486150c3._.js.map