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
"[project]/src/data/servicesData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Structured services data translated from OLD_project/scripts/jsonButNot.js
// Comments preserved where meaningful. Prices with + indicate starting or variable.
__turbopack_context__.s([
    "categoryFilters",
    ()=>categoryFilters,
    "servicesData",
    ()=>servicesData
]);
const servicesData = [
    {
        category: "Barber Services",
        services: [
            {
                name: "Haircut (Fades/Tapers)",
                price: "$50"
            },
            {
                name: "Haircut & Eyebrows",
                price: "$60"
            },
            {
                name: "Haircut with Hot towel massage",
                price: "$60"
            },
            {
                name: "Haircut with facial",
                price: "$65"
            },
            {
                name: "Haircut with facial & hot towel massage",
                price: "$75"
            },
            {
                name: "Combo A (Haircut & Hot towel Massage & Facial & Eyebrows) — NO BEARD INCLUDED",
                price: "$80"
            },
            {
                name: "Haircut & Beard",
                price: "$70"
            },
            {
                name: "Haircut & Beard & Hot Towel Massage",
                price: "$80"
            },
            {
                name: "Haircut & Beard & Eyebrows",
                price: "$80"
            },
            {
                name: "Haircut & Beard & Facial",
                price: "$85"
            },
            {
                name: "Combo B (Haircut & Beard & Hot towel Massage & Facial & Eyebrows)",
                price: "$100"
            },
            {
                name: "Haircut & Braids",
                price: "$90+ (prices vary on braid style)"
            },
            {
                name: "Beard Only",
                price: "$30"
            },
            {
                name: "Mustache",
                price: "$20"
            },
            {
                name: "Line Up (Razor around the perimeter of Hair)",
                price: "$30"
            },
            {
                name: "Shape Up (Razor around the perimeter of Hair and Beard)",
                price: "$40"
            },
            {
                name: "Haircut Design",
                price: "+$10 (may vary on design)"
            }
        ]
    },
    {
        category: "Beauty Services",
        services: [
            {
                name: "Haircuts are done using scissors ONLY!",
                price: ""
            },
            {
                name: "Haircut (Straight Across) — NO LAYERS",
                price: "$50"
            },
            {
                name: "Haircut Straight Across with Wash & Style",
                price: "$65+"
            },
            {
                name: "Haircut With Layers",
                price: "$65"
            },
            {
                name: "Haircut With Layers & Wash & Style",
                price: "$80+"
            },
            {
                name: "Haircut & Eyebrows",
                price: "$60"
            },
            {
                name: "Haircut & 2 Braids",
                price: "$90"
            },
            {
                name: "2 Braids Only",
                price: "$40"
            },
            {
                name: "Half Head Braids",
                price: "$65+"
            },
            {
                name: "Full Head Braids",
                price: "$80+"
            },
            {
                name: "Box Braids",
                price: "$200+"
            },
            {
                name: "ALL BRAIDS WITH ADDED HAIR IS EXTRA",
                price: ""
            },
            {
                name: "Wash & Style (price may vary on length)",
                price: "Varies"
            },
            {
                name: "Wash & Condition (Light Dry)",
                price: "$25"
            },
            {
                name: "Flat Iron / Curls Only",
                price: "$25+"
            },
            {
                name: "Undercuts",
                price: "$30"
            },
            {
                name: "Full Color",
                price: "$80"
            },
            {
                name: "Full Color & Style",
                price: "$95+"
            },
            {
                name: "Retouch (1in Growth) — Starting at",
                price: "$50"
            },
            {
                name: "Retouch & Style",
                price: "$65+"
            },
            {
                name: "Bleach & Toner",
                price: "$80+"
            },
            {
                name: "Lightening",
                price: "$150+"
            },
            {
                name: "Lowlights",
                price: "$150+"
            },
            {
                name: "Highlights",
                price: "$200+"
            }
        ]
    },
    {
        category: "Other/Add-On Services",
        services: [
            {
                name: "Eyebrow Threading / Waxed",
                price: "$20"
            },
            {
                name: "Eyebrows & Lip",
                price: "$27"
            },
            {
                name: "Full Face (NOT INCLUDING EYEBROWS)",
                price: "$25"
            },
            {
                name: "Full Face & Brows",
                price: "$45"
            },
            {
                name: "Lash Lift",
                price: "$50"
            },
            {
                name: "Lash Lift & Tint",
                price: "$60"
            },
            {
                name: "Lash Lift Touch Up",
                price: "$35"
            },
            {
                name: "Eyebrow Lamination",
                price: "$65"
            },
            {
                name: "Eyebrow Lamination & Tint",
                price: "$75"
            }
        ]
    },
    {
        category: "Permanent Cosmetic Services",
        services: [
            {
                name: "Microblading",
                price: "$400"
            },
            {
                name: "Tattoo Shading",
                price: "$350"
            },
            {
                name: "2-4 Week Touch Up",
                price: "$200"
            }
        ]
    },
    {
        category: "Piercing Services",
        services: [
            {
                name: "Nose Piercing",
                price: "$25"
            },
            {
                name: "Ear Lobe Piercing",
                price: "$55"
            }
        ]
    }
];
const categoryFilters = [
    "Barber Services",
    "Beauty Services",
    "Other/Add-On Services",
    "Permanent Cosmetic Services",
    "Piercing Services"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const metadata = {
    title: "Services | The One Stop Studio"
};
function ServicesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d6ec18573e363e0526a4146673c6f6510f3c2f8d52f6bdc96ca818050d2a50fe") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6ec18573e363e0526a4146673c6f6510f3c2f8d52f6bdc96ca818050d2a50fe";
    }
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "all",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryFilters"]
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const filters = t0;
    let t1;
    bb0: {
        if (activeFilter === "all") {
            t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesData"];
            break bb0;
        }
        let t2;
        if ($[2] !== activeFilter) {
            t2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesData"].filter({
                "ServicesPage[servicesData.filter()]": (cat)=>cat.category === activeFilter
            }["ServicesPage[servicesData.filter()]"]);
            $[2] = activeFilter;
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        t1 = t2;
    }
    const visibleCategories = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 50,
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
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== activeFilter) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filter-buttons",
            children: filters.map({
                "ServicesPage[filters.map()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-filter": f,
                        className: activeFilter === f ? "active" : "",
                        onClick: {
                            "ServicesPage[filters.map() > <button>.onClick]": ()=>setActiveFilter(f)
                        }["ServicesPage[filters.map() > <button>.onClick]"],
                        children: f === "all" ? "Show All" : f.split("/")[0].split(" ")[0]
                    }, f, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 65,
                        columnNumber: 45
                    }, this)
            }["ServicesPage[filters.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = activeFilter;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== visibleCategories) {
        t5 = visibleCategories.map(_ServicesPageVisibleCategoriesMap);
        $[8] = visibleCategories;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "services-container",
            id: "servicesContainer",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            textAlign: "center"
        };
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t7,
            children: [
                "Full dynamic list. Call ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+14247572546",
                    className: "underline",
                    children: "(424) 757-2546"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 101,
                    columnNumber: 48
                }, this),
                " for the latest."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t4 || $[15] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-6xl px-4 py-24",
            children: [
                t3,
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t2,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
}
_s(ServicesPage, "t7f5NoXziLbzmLCl86X+c5sU9bA=");
_c = ServicesPage;
function _ServicesPageVisibleCategoriesMap(category) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "service-column",
        "data-category": category.category,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: category.category
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 133,
                columnNumber: 100
            }, this),
            category.services.map(_ServicesPageVisibleCategoriesMapCategoryServicesMap)
        ]
    }, category.category, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 133,
        columnNumber: 10
    }, this);
}
function _ServicesPageVisibleCategoriesMapCategoryServicesMap(service) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "service-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: service.name
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 136,
                columnNumber: 59
            }, this),
            service.price && service.price.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "price",
                children: service.price
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 136,
                columnNumber: 131
            }, this)
        ]
    }, service.name, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 136,
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

//# sourceMappingURL=src_bd6a0fcd._.js.map