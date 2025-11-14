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
    if ($[0] !== "82ab7a3c4736f6dfd833c35c445238f373dea213481429873ec7b41da8944a3f") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82ab7a3c4736f6dfd833c35c445238f373dea213481429873ec7b41da8944a3f";
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
            width: 70,
            height: 70,
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
]);

//# sourceMappingURL=src_components_Header_tsx_f76cbd86._.js.map