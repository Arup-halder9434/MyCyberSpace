var T2 = Object.defineProperty;
var ov = a => {
    throw TypeError(a)
};
var w2 = (a, n, s) => n in a ? T2(a, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : a[n] = s;
var ms = (a, n, s) => w2(a, typeof n != "symbol" ? n + "" : n, s),
    Yd = (a, n, s) => n.has(a) || ov("Cannot " + s);
var E = (a, n, s) => (Yd(a, n, "read from private field"), s ? s.call(a) : n.get(a)),
    ce = (a, n, s) => n.has(a) ? ov("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(a) : n.set(a, s),
    te = (a, n, s, r) => (Yd(a, n, "write to private field"), r ? r.call(a, s) : n.set(a, s), s),
    Oe = (a, n, s) => (Yd(a, n, "access private method"), s);
var Uc = (a, n, s, r) => ({
    set _(o) {
        te(a, n, o, s)
    },
    get _() {
        return E(a, n, r)
    }
});

function E2(a, n) {
    for (var s = 0; s < n.length; s++) {
        const r = n[s];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in a)) {
                    const u = Object.getOwnPropertyDescriptor(r, o);
                    u && Object.defineProperty(a, o, u.get ? u : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const u of o)
            if (u.type === "childList")
                for (const d of u.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(o) {
        const u = {};
        return o.integrity && (u.integrity = o.integrity), o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? u.credentials = "include" : o.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const u = s(o);
        fetch(o.href, u)
    }
})();

function H0(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Zd = {
        exports: {}
    },
    Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;

function C2() {
    if (cv) return Gr;
    cv = 1;
    var a = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.fragment");

    function s(r, o, u) {
        var d = null;
        if (u !== void 0 && (d = "" + u), o.key !== void 0 && (d = "" + o.key), "key" in o) {
            u = {};
            for (var m in o) m !== "key" && (u[m] = o[m])
        } else u = o;
        return o = u.ref, {
            $$typeof: a,
            type: r,
            key: d,
            ref: o !== void 0 ? o : null,
            props: u
        }
    }
    return Gr.Fragment = n, Gr.jsx = s, Gr.jsxs = s, Gr
}
var uv;

function A2() {
    return uv || (uv = 1, Zd.exports = C2()), Zd.exports
}
var p = A2(),
    Gd = {
        exports: {}
    };

function N2(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var V0 = {
        exports: {}
    },
    mt = V0.exports = {},
    na, aa;

function rh() {
    throw new Error("setTimeout has not been defined")
}

function oh() {
    throw new Error("clearTimeout has not been defined")
}(function() {
    try {
        typeof setTimeout == "function" ? na = setTimeout : na = rh
    } catch {
        na = rh
    }
    try {
        typeof clearTimeout == "function" ? aa = clearTimeout : aa = oh
    } catch {
        aa = oh
    }
})();

function Y0(a) {
    if (na === setTimeout) return setTimeout(a, 0);
    if ((na === rh || !na) && setTimeout) return na = setTimeout, setTimeout(a, 0);
    try {
        return na(a, 0)
    } catch {
        try {
            return na.call(null, a, 0)
        } catch {
            return na.call(this, a, 0)
        }
    }
}

function j2(a) {
    if (aa === clearTimeout) return clearTimeout(a);
    if ((aa === oh || !aa) && clearTimeout) return aa = clearTimeout, clearTimeout(a);
    try {
        return aa(a)
    } catch {
        try {
            return aa.call(null, a)
        } catch {
            return aa.call(this, a)
        }
    }
}
var Ya = [],
    wl = !1,
    ps, Xc = -1;

function O2() {
    !wl || !ps || (wl = !1, ps.length ? Ya = ps.concat(Ya) : Xc = -1, Ya.length && Z0())
}

function Z0() {
    if (!wl) {
        var a = Y0(O2);
        wl = !0;
        for (var n = Ya.length; n;) {
            for (ps = Ya, Ya = []; ++Xc < n;) ps && ps[Xc].run();
            Xc = -1, n = Ya.length
        }
        ps = null, wl = !1, j2(a)
    }
}
mt.nextTick = function(a) {
    var n = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
    Ya.push(new G0(a, n)), Ya.length === 1 && !wl && Y0(Z0)
};

function G0(a, n) {
    this.fun = a, this.array = n
}
G0.prototype.run = function() {
    this.fun.apply(null, this.array)
};
mt.title = "browser";
mt.browser = !0;
mt.env = {};
mt.argv = [];
mt.version = "";
mt.versions = {};

function $a() {}
mt.on = $a;
mt.addListener = $a;
mt.once = $a;
mt.off = $a;
mt.removeListener = $a;
mt.removeAllListeners = $a;
mt.emit = $a;
mt.prependListener = $a;
mt.prependOnceListener = $a;
mt.listeners = function(a) {
    return []
};
mt.binding = function(a) {
    throw new Error("process.binding is not supported")
};
mt.cwd = function() {
    return "/"
};
mt.chdir = function(a) {
    throw new Error("process.chdir is not supported")
};
mt.umask = function() {
    return 0
};
var R2 = V0.exports;
const El = N2(R2);
var Qr = {},
    Qd = {
        exports: {}
    },
    $d = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;

function M2() {
    return fv || (fv = 1, (function(a) {
        function n(z, Q) {
            var F = z.length;
            z.push(Q);
            e: for (; 0 < F;) {
                var fe = F - 1 >>> 1,
                    me = z[fe];
                if (0 < o(me, Q)) z[fe] = Q, z[F] = me, F = fe;
                else break e
            }
        }

        function s(z) {
            return z.length === 0 ? null : z[0]
        }

        function r(z) {
            if (z.length === 0) return null;
            var Q = z[0],
                F = z.pop();
            if (F !== Q) {
                z[0] = F;
                e: for (var fe = 0, me = z.length, C = me >>> 1; fe < C;) {
                    var Z = 2 * (fe + 1) - 1,
                        X = z[Z],
                        J = Z + 1,
                        ie = z[J];
                    if (0 > o(X, F)) J < me && 0 > o(ie, X) ? (z[fe] = ie, z[J] = F, fe = J) : (z[fe] = X, z[Z] = F, fe = Z);
                    else if (J < me && 0 > o(ie, F)) z[fe] = ie, z[J] = F, fe = J;
                    else break e
                }
            }
            return Q
        }

        function o(z, Q) {
            var F = z.sortIndex - Q.sortIndex;
            return F !== 0 ? F : z.id - Q.id
        }
        if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            a.unstable_now = function() {
                return u.now()
            }
        } else {
            var d = Date,
                m = d.now();
            a.unstable_now = function() {
                return d.now() - m
            }
        }
        var v = [],
            y = [],
            b = 1,
            g = null,
            S = 3,
            T = !1,
            O = !1,
            R = !1,
            A = !1,
            j = typeof setTimeout == "function" ? setTimeout : null,
            H = typeof clearTimeout == "function" ? clearTimeout : null,
            D = typeof setImmediate < "u" ? setImmediate : null;

        function k(z) {
            for (var Q = s(y); Q !== null;) {
                if (Q.callback === null) r(y);
                else if (Q.startTime <= z) r(y), Q.sortIndex = Q.expirationTime, n(v, Q);
                else break;
                Q = s(y)
            }
        }

        function I(z) {
            if (R = !1, k(z), !O)
                if (s(v) !== null) O = !0, W || (W = !0, ve());
                else {
                    var Q = s(y);
                    Q !== null && Ve(I, Q.startTime - z)
                }
        }
        var W = !1,
            K = -1,
            ee = 5,
            we = -1;

        function ae() {
            return A ? !0 : !(a.unstable_now() - we < ee)
        }

        function ye() {
            if (A = !1, W) {
                var z = a.unstable_now();
                we = z;
                var Q = !0;
                try {
                    e: {
                        O = !1,
                        R && (R = !1, H(K), K = -1),
                        T = !0;
                        var F = S;
                        try {
                            t: {
                                for (k(z), g = s(v); g !== null && !(g.expirationTime > z && ae());) {
                                    var fe = g.callback;
                                    if (typeof fe == "function") {
                                        g.callback = null, S = g.priorityLevel;
                                        var me = fe(g.expirationTime <= z);
                                        if (z = a.unstable_now(), typeof me == "function") {
                                            g.callback = me, k(z), Q = !0;
                                            break t
                                        }
                                        g === s(v) && r(v), k(z)
                                    } else r(v);
                                    g = s(v)
                                }
                                if (g !== null) Q = !0;
                                else {
                                    var C = s(y);
                                    C !== null && Ve(I, C.startTime - z), Q = !1
                                }
                            }
                            break e
                        }
                        finally {
                            g = null, S = F, T = !1
                        }
                        Q = void 0
                    }
                }
                finally {
                    Q ? ve() : W = !1
                }
            }
        }
        var ve;
        if (typeof D == "function") ve = function() {
            D(ye)
        };
        else if (typeof MessageChannel < "u") {
            var be = new MessageChannel,
                ze = be.port2;
            be.port1.onmessage = ye, ve = function() {
                ze.postMessage(null)
            }
        } else ve = function() {
            j(ye, 0)
        };

        function Ve(z, Q) {
            K = j(function() {
                z(a.unstable_now())
            }, Q)
        }
        a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(z) {
            z.callback = null
        }, a.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < z ? Math.floor(1e3 / z) : 5
        }, a.unstable_getCurrentPriorityLevel = function() {
            return S
        }, a.unstable_next = function(z) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var Q = 3;
                    break;
                default:
                    Q = S
            }
            var F = S;
            S = Q;
            try {
                return z()
            } finally {
                S = F
            }
        }, a.unstable_requestPaint = function() {
            A = !0
        }, a.unstable_runWithPriority = function(z, Q) {
            switch (z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    z = 3
            }
            var F = S;
            S = z;
            try {
                return Q()
            } finally {
                S = F
            }
        }, a.unstable_scheduleCallback = function(z, Q, F) {
            var fe = a.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? fe + F : fe) : F = fe, z) {
                case 1:
                    var me = -1;
                    break;
                case 2:
                    me = 250;
                    break;
                case 5:
                    me = 1073741823;
                    break;
                case 4:
                    me = 1e4;
                    break;
                default:
                    me = 5e3
            }
            return me = F + me, z = {
                id: b++,
                callback: Q,
                priorityLevel: z,
                startTime: F,
                expirationTime: me,
                sortIndex: -1
            }, F > fe ? (z.sortIndex = F, n(y, z), s(v) === null && z === s(y) && (R ? (H(K), K = -1) : R = !0, Ve(I, F - fe))) : (z.sortIndex = me, n(v, z), O || T || (O = !0, W || (W = !0, ve()))), z
        }, a.unstable_shouldYield = ae, a.unstable_wrapCallback = function(z) {
            var Q = S;
            return function() {
                var F = S;
                S = Q;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = F
                }
            }
        }
    })($d)), $d
}
var dv;

function z2() {
    return dv || (dv = 1, Qd.exports = M2()), Qd.exports
}
var Xd = {
        exports: {}
    },
    xe = {},
    hv;

function D2() {
    if (hv) return xe;
    hv = 1;
    var a = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        u = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        v = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        b = Symbol.for("react.lazy"),
        g = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function T(C) {
        return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var O = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        R = Object.assign,
        A = {};

    function j(C, Z, X) {
        this.props = C, this.context = Z, this.refs = A, this.updater = X || O
    }
    j.prototype.isReactComponent = {}, j.prototype.setState = function(C, Z) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, Z, "setState")
    }, j.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function H() {}
    H.prototype = j.prototype;

    function D(C, Z, X) {
        this.props = C, this.context = Z, this.refs = A, this.updater = X || O
    }
    var k = D.prototype = new H;
    k.constructor = D, R(k, j.prototype), k.isPureReactComponent = !0;
    var I = Array.isArray;

    function W() {}
    var K = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        ee = Object.prototype.hasOwnProperty;

    function we(C, Z, X) {
        var J = X.ref;
        return {
            $$typeof: a,
            type: C,
            key: Z,
            ref: J !== void 0 ? J : null,
            props: X
        }
    }

    function ae(C, Z) {
        return we(C.type, Z, C.props)
    }

    function ye(C) {
        return typeof C == "object" && C !== null && C.$$typeof === a
    }

    function ve(C) {
        var Z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function(X) {
            return Z[X]
        })
    }
    var be = /\/+/g;

    function ze(C, Z) {
        return typeof C == "object" && C !== null && C.key != null ? ve("" + C.key) : Z.toString(36)
    }

    function Ve(C) {
        switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(W, W) : (C.status = "pending", C.then(function(Z) {
                    C.status === "pending" && (C.status = "fulfilled", C.value = Z)
                }, function(Z) {
                    C.status === "pending" && (C.status = "rejected", C.reason = Z)
                })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason
                }
        }
        throw C
    }

    function z(C, Z, X, J, ie) {
        var de = typeof C;
        (de === "undefined" || de === "boolean") && (C = null);
        var je = !1;
        if (C === null) je = !0;
        else switch (de) {
            case "bigint":
            case "string":
            case "number":
                je = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                    case a:
                    case n:
                        je = !0;
                        break;
                    case b:
                        return je = C._init, z(je(C._payload), Z, X, J, ie)
                }
        }
        if (je) return ie = ie(C), je = J === "" ? "." + ze(C, 0) : J, I(ie) ? (X = "", je != null && (X = je.replace(be, "$&/") + "/"), z(ie, Z, X, "", function(cn) {
            return cn
        })) : ie != null && (ye(ie) && (ie = ae(ie, X + (ie.key == null || C && C.key === ie.key ? "" : ("" + ie.key).replace(be, "$&/") + "/") + je)), Z.push(ie)), 1;
        je = 0;
        var Ee = J === "" ? "." : J + ":";
        if (I(C))
            for (var $e = 0; $e < C.length; $e++) J = C[$e], de = Ee + ze(J, $e), je += z(J, Z, X, de, ie);
        else if ($e = T(C), typeof $e == "function")
            for (C = $e.call(C), $e = 0; !(J = C.next()).done;) J = J.value, de = Ee + ze(J, $e++), je += z(J, Z, X, de, ie);
        else if (de === "object") {
            if (typeof C.then == "function") return z(Ve(C), Z, X, J, ie);
            throw Z = String(C), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return je
    }

    function Q(C, Z, X) {
        if (C == null) return C;
        var J = [],
            ie = 0;
        return z(C, J, "", "", function(de) {
            return Z.call(X, de, ie++)
        }), J
    }

    function F(C) {
        if (C._status === -1) {
            var Z = C._result;
            Z = Z(), Z.then(function(X) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = X)
            }, function(X) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = X)
            }), C._status === -1 && (C._status = 0, C._result = Z)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var fe = typeof reportError == "function" ? reportError : function(C) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var Z = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                    error: C
                });
                if (!window.dispatchEvent(Z)) return
            } else if (typeof El == "object" && typeof El.emit == "function") {
                El.emit("uncaughtException", C);
                return
            }
            console.error(C)
        },
        me = {
            map: Q,
            forEach: function(C, Z, X) {
                Q(C, function() {
                    Z.apply(this, arguments)
                }, X)
            },
            count: function(C) {
                var Z = 0;
                return Q(C, function() {
                    Z++
                }), Z
            },
            toArray: function(C) {
                return Q(C, function(Z) {
                    return Z
                }) || []
            },
            only: function(C) {
                if (!ye(C)) throw Error("React.Children.only expected to receive a single React element child.");
                return C
            }
        };
    return xe.Activity = g, xe.Children = me, xe.Component = j, xe.Fragment = s, xe.Profiler = o, xe.PureComponent = D, xe.StrictMode = r, xe.Suspense = v, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, xe.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return K.H.useMemoCache(C)
        }
    }, xe.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }, xe.cacheSignal = function() {
        return null
    }, xe.cloneElement = function(C, Z, X) {
        if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
        var J = R({}, C.props),
            ie = C.key;
        if (Z != null)
            for (de in Z.key !== void 0 && (ie = "" + Z.key), Z) !ee.call(Z, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && Z.ref === void 0 || (J[de] = Z[de]);
        var de = arguments.length - 2;
        if (de === 1) J.children = X;
        else if (1 < de) {
            for (var je = Array(de), Ee = 0; Ee < de; Ee++) je[Ee] = arguments[Ee + 2];
            J.children = je
        }
        return we(C.type, ie, J)
    }, xe.createContext = function(C) {
        return C = {
            $$typeof: d,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, C.Provider = C, C.Consumer = {
            $$typeof: u,
            _context: C
        }, C
    }, xe.createElement = function(C, Z, X) {
        var J, ie = {},
            de = null;
        if (Z != null)
            for (J in Z.key !== void 0 && (de = "" + Z.key), Z) ee.call(Z, J) && J !== "key" && J !== "__self" && J !== "__source" && (ie[J] = Z[J]);
        var je = arguments.length - 2;
        if (je === 1) ie.children = X;
        else if (1 < je) {
            for (var Ee = Array(je), $e = 0; $e < je; $e++) Ee[$e] = arguments[$e + 2];
            ie.children = Ee
        }
        if (C && C.defaultProps)
            for (J in je = C.defaultProps, je) ie[J] === void 0 && (ie[J] = je[J]);
        return we(C, de, ie)
    }, xe.createRef = function() {
        return {
            current: null
        }
    }, xe.forwardRef = function(C) {
        return {
            $$typeof: m,
            render: C
        }
    }, xe.isValidElement = ye, xe.lazy = function(C) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: F
        }
    }, xe.memo = function(C, Z) {
        return {
            $$typeof: y,
            type: C,
            compare: Z === void 0 ? null : Z
        }
    }, xe.startTransition = function(C) {
        var Z = K.T,
            X = {};
        K.T = X;
        try {
            var J = C(),
                ie = K.S;
            ie !== null && ie(X, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(W, fe)
        } catch (de) {
            fe(de)
        } finally {
            Z !== null && X.types !== null && (Z.types = X.types), K.T = Z
        }
    }, xe.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }, xe.use = function(C) {
        return K.H.use(C)
    }, xe.useActionState = function(C, Z, X) {
        return K.H.useActionState(C, Z, X)
    }, xe.useCallback = function(C, Z) {
        return K.H.useCallback(C, Z)
    }, xe.useContext = function(C) {
        return K.H.useContext(C)
    }, xe.useDebugValue = function() {}, xe.useDeferredValue = function(C, Z) {
        return K.H.useDeferredValue(C, Z)
    }, xe.useEffect = function(C, Z) {
        return K.H.useEffect(C, Z)
    }, xe.useEffectEvent = function(C) {
        return K.H.useEffectEvent(C)
    }, xe.useId = function() {
        return K.H.useId()
    }, xe.useImperativeHandle = function(C, Z, X) {
        return K.H.useImperativeHandle(C, Z, X)
    }, xe.useInsertionEffect = function(C, Z) {
        return K.H.useInsertionEffect(C, Z)
    }, xe.useLayoutEffect = function(C, Z) {
        return K.H.useLayoutEffect(C, Z)
    }, xe.useMemo = function(C, Z) {
        return K.H.useMemo(C, Z)
    }, xe.useOptimistic = function(C, Z) {
        return K.H.useOptimistic(C, Z)
    }, xe.useReducer = function(C, Z, X) {
        return K.H.useReducer(C, Z, X)
    }, xe.useRef = function(C) {
        return K.H.useRef(C)
    }, xe.useState = function(C) {
        return K.H.useState(C)
    }, xe.useSyncExternalStore = function(C, Z, X) {
        return K.H.useSyncExternalStore(C, Z, X)
    }, xe.useTransition = function() {
        return K.H.useTransition()
    }, xe.version = "19.2.3", xe
}
var mv;

function $h() {
    return mv || (mv = 1, Xd.exports = D2()), Xd.exports
}
var Id = {
        exports: {}
    },
    Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;

function k2() {
    if (pv) return Bt;
    pv = 1;
    var a = $h();

    function n(v) {
        var y = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++) y += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var r = {
            d: {
                f: s,
                r: function() {
                    throw Error(n(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        o = Symbol.for("react.portal");

    function u(v, y, b) {
        var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: g == null ? null : "" + g,
            children: v,
            containerInfo: y,
            implementation: b
        }
    }
    var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function m(v, y) {
        if (v === "font") return "";
        if (typeof y == "string") return y === "use-credentials" ? y : ""
    }
    return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Bt.createPortal = function(v, y) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(n(299));
        return u(v, y, null, b)
    }, Bt.flushSync = function(v) {
        var y = d.T,
            b = r.p;
        try {
            if (d.T = null, r.p = 2, v) return v()
        } finally {
            d.T = y, r.p = b, r.d.f()
        }
    }, Bt.preconnect = function(v, y) {
        typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(v, y))
    }, Bt.prefetchDNS = function(v) {
        typeof v == "string" && r.d.D(v)
    }, Bt.preinit = function(v, y) {
        if (typeof v == "string" && y && typeof y.as == "string") {
            var b = y.as,
                g = m(b, y.crossOrigin),
                S = typeof y.integrity == "string" ? y.integrity : void 0,
                T = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            b === "style" ? r.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: g,
                integrity: S,
                fetchPriority: T
            }) : b === "script" && r.d.X(v, {
                crossOrigin: g,
                integrity: S,
                fetchPriority: T,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }, Bt.preinitModule = function(v, y) {
        if (typeof v == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = m(y.as, y.crossOrigin);
                    r.d.M(v, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else y == null && r.d.M(v)
    }, Bt.preload = function(v, y) {
        if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var b = y.as,
                g = m(b, y.crossOrigin);
            r.d.L(v, b, {
                crossOrigin: g,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }, Bt.preloadModule = function(v, y) {
        if (typeof v == "string")
            if (y) {
                var b = m(y.as, y.crossOrigin);
                r.d.m(v, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else r.d.m(v)
    }, Bt.requestFormReset = function(v) {
        r.d.r(v)
    }, Bt.unstable_batchedUpdates = function(v, y) {
        return v(y)
    }, Bt.useFormState = function(v, y, b) {
        return d.H.useFormState(v, y, b)
    }, Bt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, Bt.version = "19.2.3", Bt
}
var yv;

function Q0() {
    if (yv) return Id.exports;
    yv = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (n) {
            console.error(n)
        }
    }
    return a(), Id.exports = k2(), Id.exports
}
var gv;

function B2() {
    if (gv) return Qr;
    gv = 1;
    var a = z2(),
        n = $h(),
        s = Q0();

    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function u(e) {
        var t = e,
            i = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? i : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function m(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function v(e) {
        if (u(e) !== e) throw Error(r(188))
    }

    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = u(e), t === null) throw Error(r(188));
            return t !== e ? null : e
        }
        for (var i = e, l = t;;) {
            var c = i.return;
            if (c === null) break;
            var f = c.alternate;
            if (f === null) {
                if (l = c.return, l !== null) {
                    i = l;
                    continue
                }
                break
            }
            if (c.child === f.child) {
                for (f = c.child; f;) {
                    if (f === i) return v(c), e;
                    if (f === l) return v(c), t;
                    f = f.sibling
                }
                throw Error(r(188))
            }
            if (i.return !== l.return) i = c, l = f;
            else {
                for (var h = !1, _ = c.child; _;) {
                    if (_ === i) {
                        h = !0, i = c, l = f;
                        break
                    }
                    if (_ === l) {
                        h = !0, l = c, i = f;
                        break
                    }
                    _ = _.sibling
                }
                if (!h) {
                    for (_ = f.child; _;) {
                        if (_ === i) {
                            h = !0, i = f, l = c;
                            break
                        }
                        if (_ === l) {
                            h = !0, l = f, i = c;
                            break
                        }
                        _ = _.sibling
                    }
                    if (!h) throw Error(r(189))
                }
            }
            if (i.alternate !== l) throw Error(r(190))
        }
        if (i.tag !== 3) throw Error(r(188));
        return i.stateNode.current === i ? e : t
    }

    function b(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = b(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var g = Object.assign,
        S = Symbol.for("react.element"),
        T = Symbol.for("react.transitional.element"),
        O = Symbol.for("react.portal"),
        R = Symbol.for("react.fragment"),
        A = Symbol.for("react.strict_mode"),
        j = Symbol.for("react.profiler"),
        H = Symbol.for("react.consumer"),
        D = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        I = Symbol.for("react.suspense"),
        W = Symbol.for("react.suspense_list"),
        K = Symbol.for("react.memo"),
        ee = Symbol.for("react.lazy"),
        we = Symbol.for("react.activity"),
        ae = Symbol.for("react.memo_cache_sentinel"),
        ye = Symbol.iterator;

    function ve(e) {
        return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var be = Symbol.for("react.client.reference");

    function ze(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === be ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case R:
                return "Fragment";
            case j:
                return "Profiler";
            case A:
                return "StrictMode";
            case I:
                return "Suspense";
            case W:
                return "SuspenseList";
            case we:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case O:
                return "Portal";
            case D:
                return e.displayName || "Context";
            case H:
                return (e._context.displayName || "Context") + ".Consumer";
            case k:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case K:
                return t = e.displayName || null, t !== null ? t : ze(e.type) || "Memo";
            case ee:
                t = e._payload, e = e._init;
                try {
                    return ze(e(t))
                } catch {}
        }
        return null
    }
    var Ve = Array.isArray,
        z = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        fe = [],
        me = -1;

    function C(e) {
        return {
            current: e
        }
    }

    function Z(e) {
        0 > me || (e.current = fe[me], fe[me] = null, me--)
    }

    function X(e, t) {
        me++, fe[me] = e.current, e.current = t
    }
    var J = C(null),
        ie = C(null),
        de = C(null),
        je = C(null);

    function Ee(e, t) {
        switch (X(de, t), X(ie, e), X(J, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Rg(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Rg(t), e = Mg(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        Z(J), X(J, e)
    }

    function $e() {
        Z(J), Z(ie), Z(de)
    }

    function cn(e) {
        e.memoizedState !== null && X(je, e);
        var t = J.current,
            i = Mg(t, e.type);
        t !== i && (X(ie, e), X(J, i))
    }

    function xn(e) {
        ie.current === e && (Z(J), Z(ie)), je.current === e && (Z(je), Hr._currentValue = F)
    }
    var un, Xn;

    function Xt(e) {
        if (un === void 0) try {
            throw Error()
        } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            un = t && t[1] || "", Xn = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + un + e + Xn
    }
    var Gi = !1;

    function Xa(e, t) {
        if (!e || Gi) return "";
        Gi = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var G = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(G.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(G, [])
                                } catch (q) {
                                    var U = q
                                }
                                Reflect.construct(e, [], G)
                            } else {
                                try {
                                    G.call()
                                } catch (q) {
                                    U = q
                                }
                                e.call(G.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (q) {
                                U = q
                            }(G = e()) && typeof G.catch == "function" && G.catch(function() {})
                        }
                    } catch (q) {
                        if (q && U && typeof q.stack == "string") return [q.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = l.DetermineComponentFrameRoot(),
                h = f[0],
                _ = f[1];
            if (h && _) {
                var w = h.split(`
`),
                    L = _.split(`
`);
                for (c = l = 0; l < w.length && !w[l].includes("DetermineComponentFrameRoot");) l++;
                for (; c < L.length && !L[c].includes("DetermineComponentFrameRoot");) c++;
                if (l === w.length || c === L.length)
                    for (l = w.length - 1, c = L.length - 1; 1 <= l && 0 <= c && w[l] !== L[c];) c--;
                for (; 1 <= l && 0 <= c; l--, c--)
                    if (w[l] !== L[c]) {
                        if (l !== 1 || c !== 1)
                            do
                                if (l--, c--, 0 > c || w[l] !== L[c]) {
                                    var V = `
` + w[l].replace(" at new ", " at ");
                                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V
                                }
                        while (1 <= l && 0 <= c);
                        break
                    }
            }
        } finally {
            Gi = !1, Error.prepareStackTrace = i
        }
        return (i = e ? e.displayName || e.name : "") ? Xt(i) : ""
    }

    function ya(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Xt(e.type);
            case 16:
                return Xt("Lazy");
            case 13:
                return e.child !== t && t !== null ? Xt("Suspense Fallback") : Xt("Suspense");
            case 19:
                return Xt("SuspenseList");
            case 0:
            case 15:
                return Xa(e.type, !1);
            case 11:
                return Xa(e.type.render, !1);
            case 1:
                return Xa(e.type, !0);
            case 31:
                return Xt("Activity");
            default:
                return ""
        }
    }

    function Qi(e) {
        try {
            var t = "",
                i = null;
            do t += ya(e, i), i = e, e = e.return; while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var St = Object.prototype.hasOwnProperty,
        Pl = a.unstable_scheduleCallback,
        Jl = a.unstable_cancelCallback,
        qt = a.unstable_shouldYield,
        Ia = a.unstable_requestPaint,
        Ht = a.unstable_now,
        ju = a.unstable_getCurrentPriorityLevel,
        $i = a.unstable_ImmediatePriority,
        wo = a.unstable_UserBlockingPriority,
        Xi = a.unstable_NormalPriority,
        Wl = a.unstable_LowPriority,
        ga = a.unstable_IdlePriority,
        Eo = a.log,
        Ka = a.unstable_setDisableYieldValue,
        Ii = null,
        Vt = null;

    function Un(e) {
        if (typeof Eo == "function" && Ka(e), Vt && typeof Vt.setStrictMode == "function") try {
            Vt.setStrictMode(Ii, e)
        } catch {}
    }
    var Dt = Math.clz32 ? Math.clz32 : In,
        Ou = Math.log,
        er = Math.LN2;

    function In(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Ou(e) / er | 0) | 0
    }
    var ks = 256,
        Bs = 262144,
        Ki = 4194304;

    function Kn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function ge(e, t, i) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var c = 0,
            f = e.suspendedLanes,
            h = e.pingedLanes;
        e = e.warmLanes;
        var _ = l & 134217727;
        return _ !== 0 ? (l = _ & ~f, l !== 0 ? c = Kn(l) : (h &= _, h !== 0 ? c = Kn(h) : i || (i = _ & ~e, i !== 0 && (c = Kn(i))))) : (_ = l & ~f, _ !== 0 ? c = Kn(_) : h !== 0 ? c = Kn(h) : i || (i = l & ~e, i !== 0 && (c = Kn(i)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, i = t & -t, f >= i || f === 32 && (i & 4194048) !== 0) ? t : c
    }

    function it(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Tt(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function kt() {
        var e = Ki;
        return Ki <<= 1, (Ki & 62914560) === 0 && (Ki = 4194304), e
    }

    function Fa(e) {
        for (var t = [], i = 0; 31 > i; i++) t.push(e);
        return t
    }

    function lt(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function It(e, t, i, l, c, f) {
        var h = e.pendingLanes;
        e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
        var _ = e.entanglements,
            w = e.expirationTimes,
            L = e.hiddenUpdates;
        for (i = h & ~i; 0 < i;) {
            var V = 31 - Dt(i),
                G = 1 << V;
            _[V] = 0, w[V] = -1;
            var U = L[V];
            if (U !== null)
                for (L[V] = null, V = 0; V < U.length; V++) {
                    var q = U[V];
                    q !== null && (q.lane &= -536870913)
                }
            i &= ~G
        }
        l !== 0 && Fi(e, l, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(h & ~t))
    }

    function Fi(e, t, i) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var l = 31 - Dt(t);
        e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | i & 261930
    }

    function Kt(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i;) {
            var l = 31 - Dt(i),
                c = 1 << l;
            c & t | e[l] & t && (e[l] |= t), i &= ~c
        }
    }

    function Ft(e, t) {
        var i = t & -t;
        return i = (i & 42) !== 0 ? 1 : Ls(i), (i & (e.suspendedLanes | t)) !== 0 ? 0 : i
    }

    function Ls(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function qn(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Ru() {
        var e = Q.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tv(e.type))
    }

    function gm(e, t) {
        var i = Q.p;
        try {
            return Q.p = e, t()
        } finally {
            Q.p = i
        }
    }
    var Pa = Math.random().toString(36).slice(2),
        Nt = "__reactFiber$" + Pa,
        Pt = "__reactProps$" + Pa,
        Us = "__reactContainer$" + Pa,
        Mu = "__reactEvents$" + Pa,
        d_ = "__reactListeners$" + Pa,
        h_ = "__reactHandles$" + Pa,
        vm = "__reactResources$" + Pa,
        tr = "__reactMarker$" + Pa;

    function zu(e) {
        delete e[Nt], delete e[Pt], delete e[Mu], delete e[d_], delete e[h_]
    }

    function qs(e) {
        var t = e[Nt];
        if (t) return t;
        for (var i = e.parentNode; i;) {
            if (t = i[Us] || i[Nt]) {
                if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
                    for (e = qg(e); e !== null;) {
                        if (i = e[Nt]) return i;
                        e = qg(e)
                    }
                return t
            }
            e = i, i = e.parentNode
        }
        return null
    }

    function Hs(e) {
        if (e = e[Nt] || e[Us]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function nr(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33))
    }

    function Vs(e) {
        var t = e[vm];
        return t || (t = e[vm] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function wt(e) {
        e[tr] = !0
    }
    var bm = new Set,
        _m = {};

    function Pi(e, t) {
        Ys(e, t), Ys(e + "Capture", t)
    }

    function Ys(e, t) {
        for (_m[e] = t, e = 0; e < t.length; e++) bm.add(t[e])
    }
    var m_ = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        xm = {},
        Sm = {};

    function p_(e) {
        return St.call(Sm, e) ? !0 : St.call(xm, e) ? !1 : m_.test(e) ? Sm[e] = !0 : (xm[e] = !0, !1)
    }

    function Co(e, t, i) {
        if (p_(t))
            if (i === null) e.removeAttribute(t);
            else {
                switch (typeof i) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var l = t.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + i)
            }
    }

    function Ao(e, t, i) {
        if (i === null) e.removeAttribute(t);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + i)
        }
    }

    function va(e, t, i, l) {
        if (l === null) e.removeAttribute(i);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(i);
                    return
            }
            e.setAttributeNS(t, i, "" + l)
        }
    }

    function Sn(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Tm(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function y_(e, t, i) {
        var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var c = l.get,
                f = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(h) {
                    i = "" + h, f.call(this, h)
                }
            }), Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }), {
                getValue: function() {
                    return i
                },
                setValue: function(h) {
                    i = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Du(e) {
        if (!e._valueTracker) {
            var t = Tm(e) ? "checked" : "value";
            e._valueTracker = y_(e, t, "" + e[t])
        }
    }

    function wm(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var i = t.getValue(),
            l = "";
        return e && (l = Tm(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== i ? (t.setValue(e), !0) : !1
    }

    function No(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var g_ = /[\n"\\]/g;

    function Tn(e) {
        return e.replace(g_, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function ku(e, t, i, l, c, f, h, _) {
        e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Sn(t)) : e.value !== "" + Sn(t) && (e.value = "" + Sn(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? Bu(e, h, Sn(t)) : i != null ? Bu(e, h, Sn(i)) : l != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Sn(_) : e.removeAttribute("name")
    }

    function Em(e, t, i, l, c, f, h, _) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || i != null) {
            if (!(f !== "submit" && f !== "reset" || t != null)) {
                Du(e);
                return
            }
            i = i != null ? "" + Sn(i) : "", t = t != null ? "" + Sn(t) : i, _ || t === e.value || (e.value = t), e.defaultValue = t
        }
        l = l ? ? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = _ ? e.checked : !!l, e.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h), Du(e)
    }

    function Bu(e, t, i) {
        t === "number" && No(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i)
    }

    function Zs(e, t, i, l) {
        if (e = e.options, t) {
            t = {};
            for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
            for (i = 0; i < e.length; i++) c = t.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && l && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + Sn(i), t = null, c = 0; c < e.length; c++) {
                if (e[c].value === i) {
                    e[c].selected = !0, l && (e[c].defaultSelected = !0);
                    return
                }
                t !== null || e[c].disabled || (t = e[c])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Cm(e, t, i) {
        if (t != null && (t = "" + Sn(t), t !== e.value && (e.value = t), i == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = i != null ? "" + Sn(i) : ""
    }

    function Am(e, t, i, l) {
        if (t == null) {
            if (l != null) {
                if (i != null) throw Error(r(92));
                if (Ve(l)) {
                    if (1 < l.length) throw Error(r(93));
                    l = l[0]
                }
                i = l
            }
            i == null && (i = ""), t = i
        }
        i = Sn(t), e.defaultValue = i, l = e.textContent, l === i && l !== "" && l !== null && (e.value = l), Du(e)
    }

    function Gs(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var v_ = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Nm(e, t, i) {
        var l = t.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, i) : typeof i != "number" || i === 0 || v_.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px"
    }

    function jm(e, t, i) {
        if (t != null && typeof t != "object") throw Error(r(62));
        if (e = e.style, i != null) {
            for (var l in i) !i.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var c in t) l = t[c], t.hasOwnProperty(c) && i[c] !== l && Nm(e, c, l)
        } else
            for (var f in t) t.hasOwnProperty(f) && Nm(e, f, t[f])
    }

    function Lu(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var b_ = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        __ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function jo(e) {
        return __.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    function ba() {}
    var Uu = null;

    function qu(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Qs = null,
        $s = null;

    function Om(e) {
        var t = Hs(e);
        if (t && (e = t.stateNode)) {
            var i = e[Pt] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (ku(e, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), t = i.name, i.type === "radio" && t != null) {
                        for (i = e; i.parentNode;) i = i.parentNode;
                        for (i = i.querySelectorAll('input[name="' + Tn("" + t) + '"][type="radio"]'), t = 0; t < i.length; t++) {
                            var l = i[t];
                            if (l !== e && l.form === e.form) {
                                var c = l[Pt] || null;
                                if (!c) throw Error(r(90));
                                ku(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                            }
                        }
                        for (t = 0; t < i.length; t++) l = i[t], l.form === e.form && wm(l)
                    }
                    break e;
                case "textarea":
                    Cm(e, i.value, i.defaultValue);
                    break e;
                case "select":
                    t = i.value, t != null && Zs(e, !!i.multiple, t, !1)
            }
        }
    }
    var Hu = !1;

    function Rm(e, t, i) {
        if (Hu) return e(t, i);
        Hu = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Hu = !1, (Qs !== null || $s !== null) && (yc(), Qs && (t = Qs, e = $s, $s = Qs = null, Om(t), e)))
                for (t = 0; t < e.length; t++) Om(e[t])
        }
    }

    function ar(e, t) {
        var i = e.stateNode;
        if (i === null) return null;
        var l = i[Pt] || null;
        if (l === null) return null;
        i = l[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (i && typeof i != "function") throw Error(r(231, t, typeof i));
        return i
    }
    var _a = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Vu = !1;
    if (_a) try {
        var ir = {};
        Object.defineProperty(ir, "passive", {
            get: function() {
                Vu = !0
            }
        }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir)
    } catch {
        Vu = !1
    }
    var Ja = null,
        Yu = null,
        Oo = null;

    function Mm() {
        if (Oo) return Oo;
        var e, t = Yu,
            i = t.length,
            l, c = "value" in Ja ? Ja.value : Ja.textContent,
            f = c.length;
        for (e = 0; e < i && t[e] === c[e]; e++);
        var h = i - e;
        for (l = 1; l <= h && t[i - l] === c[f - l]; l++);
        return Oo = c.slice(e, 1 < l ? 1 - l : void 0)
    }

    function Ro(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Mo() {
        return !0
    }

    function zm() {
        return !1
    }

    function Jt(e) {
        function t(i, l, c, f, h) {
            this._reactName = i, this._targetInst = c, this.type = l, this.nativeEvent = f, this.target = h, this.currentTarget = null;
            for (var _ in e) e.hasOwnProperty(_) && (i = e[_], this[_] = i ? i(f) : f[_]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mo : zm, this.isPropagationStopped = zm, this
        }
        return g(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Mo)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Mo)
            },
            persist: function() {},
            isPersistent: Mo
        }), t
    }
    var Ji = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        zo = Jt(Ji),
        sr = g({}, Ji, {
            view: 0,
            detail: 0
        }),
        x_ = Jt(sr),
        Zu, Gu, lr, Do = g({}, sr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: $u,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (Zu = e.screenX - lr.screenX, Gu = e.screenY - lr.screenY) : Gu = Zu = 0, lr = e), Zu)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Gu
            }
        }),
        Dm = Jt(Do),
        S_ = g({}, Do, {
            dataTransfer: 0
        }),
        T_ = Jt(S_),
        w_ = g({}, sr, {
            relatedTarget: 0
        }),
        Qu = Jt(w_),
        E_ = g({}, Ji, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        C_ = Jt(E_),
        A_ = g({}, Ji, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        N_ = Jt(A_),
        j_ = g({}, Ji, {
            data: 0
        }),
        km = Jt(j_),
        O_ = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        R_ = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        M_ = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function z_(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = M_[e]) ? !!t[e] : !1
    }

    function $u() {
        return z_
    }
    var D_ = g({}, sr, {
            key: function(e) {
                if (e.key) {
                    var t = O_[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? R_[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: $u,
            charCode: function(e) {
                return e.type === "keypress" ? Ro(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        k_ = Jt(D_),
        B_ = g({}, Do, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Bm = Jt(B_),
        L_ = g({}, sr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: $u
        }),
        U_ = Jt(L_),
        q_ = g({}, Ji, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        H_ = Jt(q_),
        V_ = g({}, Do, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Y_ = Jt(V_),
        Z_ = g({}, Ji, {
            newState: 0,
            oldState: 0
        }),
        G_ = Jt(Z_),
        Q_ = [9, 13, 27, 32],
        Xu = _a && "CompositionEvent" in window,
        rr = null;
    _a && "documentMode" in document && (rr = document.documentMode);
    var $_ = _a && "TextEvent" in window && !rr,
        Lm = _a && (!Xu || rr && 8 < rr && 11 >= rr),
        Um = " ",
        qm = !1;

    function Hm(e, t) {
        switch (e) {
            case "keyup":
                return Q_.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Vm(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Xs = !1;

    function X_(e, t) {
        switch (e) {
            case "compositionend":
                return Vm(t);
            case "keypress":
                return t.which !== 32 ? null : (qm = !0, Um);
            case "textInput":
                return e = t.data, e === Um && qm ? null : e;
            default:
                return null
        }
    }

    function I_(e, t) {
        if (Xs) return e === "compositionend" || !Xu && Hm(e, t) ? (e = Mm(), Oo = Yu = Ja = null, Xs = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Lm && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var K_ = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ym(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!K_[e.type] : t === "textarea"
    }

    function Zm(e, t, i, l) {
        Qs ? $s ? $s.push(l) : $s = [l] : Qs = l, t = Tc(t, "onChange"), 0 < t.length && (i = new zo("onChange", "change", null, i, l), e.push({
            event: i,
            listeners: t
        }))
    }
    var or = null,
        cr = null;

    function F_(e) {
        Eg(e, 0)
    }

    function ko(e) {
        var t = nr(e);
        if (wm(t)) return e
    }

    function Gm(e, t) {
        if (e === "change") return t
    }
    var Qm = !1;
    if (_a) {
        var Iu;
        if (_a) {
            var Ku = "oninput" in document;
            if (!Ku) {
                var $m = document.createElement("div");
                $m.setAttribute("oninput", "return;"), Ku = typeof $m.oninput == "function"
            }
            Iu = Ku
        } else Iu = !1;
        Qm = Iu && (!document.documentMode || 9 < document.documentMode)
    }

    function Xm() {
        or && (or.detachEvent("onpropertychange", Im), cr = or = null)
    }

    function Im(e) {
        if (e.propertyName === "value" && ko(cr)) {
            var t = [];
            Zm(t, cr, e, qu(e)), Rm(F_, t)
        }
    }

    function P_(e, t, i) {
        e === "focusin" ? (Xm(), or = t, cr = i, or.attachEvent("onpropertychange", Im)) : e === "focusout" && Xm()
    }

    function J_(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ko(cr)
    }

    function W_(e, t) {
        if (e === "click") return ko(t)
    }

    function ex(e, t) {
        if (e === "input" || e === "change") return ko(t)
    }

    function tx(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var fn = typeof Object.is == "function" ? Object.is : tx;

    function ur(e, t) {
        if (fn(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var i = Object.keys(e),
            l = Object.keys(t);
        if (i.length !== l.length) return !1;
        for (l = 0; l < i.length; l++) {
            var c = i[l];
            if (!St.call(t, c) || !fn(e[c], t[c])) return !1
        }
        return !0
    }

    function Km(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Fm(e, t) {
        var i = Km(e);
        e = 0;
        for (var l; i;) {
            if (i.nodeType === 3) {
                if (l = e + i.textContent.length, e <= t && l >= t) return {
                    node: i,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Km(i)
        }
    }

    function Pm(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Jm(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = No(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i) e = t.contentWindow;
            else break;
            t = No(e.document)
        }
        return t
    }

    function Fu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var nx = _a && "documentMode" in document && 11 >= document.documentMode,
        Is = null,
        Pu = null,
        fr = null,
        Ju = !1;

    function Wm(e, t, i) {
        var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Ju || Is == null || Is !== No(l) || (l = Is, "selectionStart" in l && Fu(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), fr && ur(fr, l) || (fr = l, l = Tc(Pu, "onSelect"), 0 < l.length && (t = new zo("onSelect", "select", null, t, i), e.push({
            event: t,
            listeners: l
        }), t.target = Is)))
    }

    function Wi(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i
    }
    var Ks = {
            animationend: Wi("Animation", "AnimationEnd"),
            animationiteration: Wi("Animation", "AnimationIteration"),
            animationstart: Wi("Animation", "AnimationStart"),
            transitionrun: Wi("Transition", "TransitionRun"),
            transitionstart: Wi("Transition", "TransitionStart"),
            transitioncancel: Wi("Transition", "TransitionCancel"),
            transitionend: Wi("Transition", "TransitionEnd")
        },
        Wu = {},
        ep = {};
    _a && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete Ks.animationend.animation, delete Ks.animationiteration.animation, delete Ks.animationstart.animation), "TransitionEvent" in window || delete Ks.transitionend.transition);

    function es(e) {
        if (Wu[e]) return Wu[e];
        if (!Ks[e]) return e;
        var t = Ks[e],
            i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in ep) return Wu[e] = t[i];
        return e
    }
    var tp = es("animationend"),
        np = es("animationiteration"),
        ap = es("animationstart"),
        ax = es("transitionrun"),
        ix = es("transitionstart"),
        sx = es("transitioncancel"),
        ip = es("transitionend"),
        sp = new Map,
        ef = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ef.push("scrollEnd");

    function Hn(e, t) {
        sp.set(e, t), Pi(t, [e])
    }
    var Bo = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return
            } else if (typeof El == "object" && typeof El.emit == "function") {
                El.emit("uncaughtException", e);
                return
            }
            console.error(e)
        },
        wn = [],
        Fs = 0,
        tf = 0;

    function Lo() {
        for (var e = Fs, t = tf = Fs = 0; t < e;) {
            var i = wn[t];
            wn[t++] = null;
            var l = wn[t];
            wn[t++] = null;
            var c = wn[t];
            wn[t++] = null;
            var f = wn[t];
            if (wn[t++] = null, l !== null && c !== null) {
                var h = l.pending;
                h === null ? c.next = c : (c.next = h.next, h.next = c), l.pending = c
            }
            f !== 0 && lp(i, c, f)
        }
    }

    function Uo(e, t, i, l) {
        wn[Fs++] = e, wn[Fs++] = t, wn[Fs++] = i, wn[Fs++] = l, tf |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
    }

    function nf(e, t, i, l) {
        return Uo(e, t, i, l), qo(e)
    }

    function ts(e, t) {
        return Uo(e, null, null, t), qo(e)
    }

    function lp(e, t, i) {
        e.lanes |= i;
        var l = e.alternate;
        l !== null && (l.lanes |= i);
        for (var c = !1, f = e.return; f !== null;) f.childLanes |= i, l = f.alternate, l !== null && (l.childLanes |= i), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
        return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Dt(i), e = f.hiddenUpdates, l = e[c], l === null ? e[c] = [t] : l.push(t), t.lane = i | 536870912), f) : null
    }

    function qo(e) {
        if (50 < zr) throw zr = 0, dd = null, Error(r(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ps = {};

    function lx(e, t, i, l) {
        this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function dn(e, t, i, l) {
        return new lx(e, t, i, l)
    }

    function af(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function xa(e, t) {
        var i = e.alternate;
        return i === null ? (i = dn(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i
    }

    function rp(e, t) {
        e.flags &= 65011714;
        var i = e.alternate;
        return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function Ho(e, t, i, l, c, f) {
        var h = 0;
        if (l = e, typeof e == "function") af(e) && (h = 1);
        else if (typeof e == "string") h = f2(e, i, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case we:
                return e = dn(31, i, t, c), e.elementType = we, e.lanes = f, e;
            case R:
                return ns(i.children, c, f, t);
            case A:
                h = 8, c |= 24;
                break;
            case j:
                return e = dn(12, i, t, c | 2), e.elementType = j, e.lanes = f, e;
            case I:
                return e = dn(13, i, t, c), e.elementType = I, e.lanes = f, e;
            case W:
                return e = dn(19, i, t, c), e.elementType = W, e.lanes = f, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case D:
                        h = 10;
                        break e;
                    case H:
                        h = 9;
                        break e;
                    case k:
                        h = 11;
                        break e;
                    case K:
                        h = 14;
                        break e;
                    case ee:
                        h = 16, l = null;
                        break e
                }
                h = 29, i = Error(r(130, e === null ? "null" : typeof e, "")), l = null
        }
        return t = dn(h, i, t, c), t.elementType = e, t.type = l, t.lanes = f, t
    }

    function ns(e, t, i, l) {
        return e = dn(7, e, l, t), e.lanes = i, e
    }

    function sf(e, t, i) {
        return e = dn(6, e, null, t), e.lanes = i, e
    }

    function op(e) {
        var t = dn(18, null, null, 0);
        return t.stateNode = e, t
    }

    function lf(e, t, i) {
        return t = dn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var cp = new WeakMap;

    function En(e, t) {
        if (typeof e == "object" && e !== null) {
            var i = cp.get(e);
            return i !== void 0 ? i : (t = {
                value: e,
                source: t,
                stack: Qi(t)
            }, cp.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: Qi(t)
        }
    }
    var Js = [],
        Ws = 0,
        Vo = null,
        dr = 0,
        Cn = [],
        An = 0,
        Wa = null,
        Fn = 1,
        Pn = "";

    function Sa(e, t) {
        Js[Ws++] = dr, Js[Ws++] = Vo, Vo = e, dr = t
    }

    function up(e, t, i) {
        Cn[An++] = Fn, Cn[An++] = Pn, Cn[An++] = Wa, Wa = e;
        var l = Fn;
        e = Pn;
        var c = 32 - Dt(l) - 1;
        l &= ~(1 << c), i += 1;
        var f = 32 - Dt(t) + c;
        if (30 < f) {
            var h = c - c % 5;
            f = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, Fn = 1 << 32 - Dt(t) + c | i << c | l, Pn = f + e
        } else Fn = 1 << f | i << c | l, Pn = e
    }

    function rf(e) {
        e.return !== null && (Sa(e, 1), up(e, 1, 0))
    }

    function of (e) {
        for (; e === Vo;) Vo = Js[--Ws], Js[Ws] = null, dr = Js[--Ws], Js[Ws] = null;
        for (; e === Wa;) Wa = Cn[--An], Cn[An] = null, Pn = Cn[--An], Cn[An] = null, Fn = Cn[--An], Cn[An] = null
    }

    function fp(e, t) {
        Cn[An++] = Fn, Cn[An++] = Pn, Cn[An++] = Wa, Fn = t.id, Pn = t.overflow, Wa = e
    }
    var jt = null,
        nt = null,
        qe = !1,
        ei = null,
        Nn = !1,
        cf = Error(r(519));

    function ti(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw hr(En(t, e)), cf
    }

    function dp(e) {
        var t = e.stateNode,
            i = e.type,
            l = e.memoizedProps;
        switch (t[Nt] = e, t[Pt] = l, i) {
            case "dialog":
                ke("cancel", t), ke("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                ke("load", t);
                break;
            case "video":
            case "audio":
                for (i = 0; i < kr.length; i++) ke(kr[i], t);
                break;
            case "source":
                ke("error", t);
                break;
            case "img":
            case "image":
            case "link":
                ke("error", t), ke("load", t);
                break;
            case "details":
                ke("toggle", t);
                break;
            case "input":
                ke("invalid", t), Em(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
                break;
            case "select":
                ke("invalid", t);
                break;
            case "textarea":
                ke("invalid", t), Am(t, l.value, l.defaultValue, l.children)
        }
        i = l.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || l.suppressHydrationWarning === !0 || jg(t.textContent, i) ? (l.popover != null && (ke("beforetoggle", t), ke("toggle", t)), l.onScroll != null && ke("scroll", t), l.onScrollEnd != null && ke("scrollend", t), l.onClick != null && (t.onclick = ba), t = !0) : t = !1, t || ti(e, !0)
    }

    function hp(e) {
        for (jt = e.return; jt;) switch (jt.tag) {
            case 5:
            case 31:
            case 13:
                Nn = !1;
                return;
            case 27:
            case 3:
                Nn = !0;
                return;
            default:
                jt = jt.return
        }
    }

    function el(e) {
        if (e !== jt) return !1;
        if (!qe) return hp(e), qe = !0, !1;
        var t = e.tag,
            i;
        if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Ad(e.type, e.memoizedProps)), i = !i), i && nt && ti(e), hp(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
            nt = Ug(e)
        } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
            nt = Ug(e)
        } else t === 27 ? (t = nt, pi(e.type) ? (e = Md, Md = null, nt = e) : nt = t) : nt = jt ? On(e.stateNode.nextSibling) : null;
        return !0
    }

    function as() {
        nt = jt = null, qe = !1
    }

    function uf() {
        var e = ei;
        return e !== null && (nn === null ? nn = e : nn.push.apply(nn, e), ei = null), e
    }

    function hr(e) {
        ei === null ? ei = [e] : ei.push(e)
    }
    var ff = C(null),
        is = null,
        Ta = null;

    function ni(e, t, i) {
        X(ff, t._currentValue), t._currentValue = i
    }

    function wa(e) {
        e._currentValue = ff.current, Z(ff)
    }

    function df(e, t, i) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === i) break;
            e = e.return
        }
    }

    function hf(e, t, i, l) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null;) {
            var f = c.dependencies;
            if (f !== null) {
                var h = c.child;
                f = f.firstContext;
                e: for (; f !== null;) {
                    var _ = f;
                    f = c;
                    for (var w = 0; w < t.length; w++)
                        if (_.context === t[w]) {
                            f.lanes |= i, _ = f.alternate, _ !== null && (_.lanes |= i), df(f.return, i, e), l || (h = null);
                            break e
                        }
                    f = _.next
                }
            } else if (c.tag === 18) {
                if (h = c.return, h === null) throw Error(r(341));
                h.lanes |= i, f = h.alternate, f !== null && (f.lanes |= i), df(h, i, e), h = null
            } else h = c.child;
            if (h !== null) h.return = c;
            else
                for (h = c; h !== null;) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (c = h.sibling, c !== null) {
                        c.return = h.return, h = c;
                        break
                    }
                    h = h.return
                }
            c = h
        }
    }

    function tl(e, t, i, l) {
        e = null;
        for (var c = t, f = !1; c !== null;) {
            if (!f) {
                if ((c.flags & 524288) !== 0) f = !0;
                else if ((c.flags & 262144) !== 0) break
            }
            if (c.tag === 10) {
                var h = c.alternate;
                if (h === null) throw Error(r(387));
                if (h = h.memoizedProps, h !== null) {
                    var _ = c.type;
                    fn(c.pendingProps.value, h.value) || (e !== null ? e.push(_) : e = [_])
                }
            } else if (c === je.current) {
                if (h = c.alternate, h === null) throw Error(r(387));
                h.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Hr) : e = [Hr])
            }
            c = c.return
        }
        e !== null && hf(t, e, i, l), t.flags |= 262144
    }

    function Yo(e) {
        for (e = e.firstContext; e !== null;) {
            if (!fn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ss(e) {
        is = e, Ta = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function Ot(e) {
        return mp(is, e)
    }

    function Zo(e, t) {
        return is === null && ss(e), mp(e, t)
    }

    function mp(e, t) {
        var i = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: i,
                next: null
            }, Ta === null) {
            if (e === null) throw Error(r(308));
            Ta = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else Ta = Ta.next = t;
        return i
    }
    var rx = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(i, l) {
                        e.push(l)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(i) {
                    return i()
                })
            }
        },
        ox = a.unstable_scheduleCallback,
        cx = a.unstable_NormalPriority,
        pt = {
            $$typeof: D,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function mf() {
        return {
            controller: new rx,
            data: new Map,
            refCount: 0
        }
    }

    function mr(e) {
        e.refCount--, e.refCount === 0 && ox(cx, function() {
            e.controller.abort()
        })
    }
    var pr = null,
        pf = 0,
        nl = 0,
        al = null;

    function ux(e, t) {
        if (pr === null) {
            var i = pr = [];
            pf = 0, nl = vd(), al = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    i.push(l)
                }
            }
        }
        return pf++, t.then(pp, pp), t
    }

    function pp() {
        if (--pf === 0 && pr !== null) {
            al !== null && (al.status = "fulfilled");
            var e = pr;
            pr = null, nl = 0, al = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function fx(e, t) {
        var i = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(c) {
                    i.push(c)
                }
            };
        return e.then(function() {
            l.status = "fulfilled", l.value = t;
            for (var c = 0; c < i.length; c++)(0, i[c])(t)
        }, function(c) {
            for (l.status = "rejected", l.reason = c, c = 0; c < i.length; c++)(0, i[c])(void 0)
        }), l
    }
    var yp = z.S;
    z.S = function(e, t) {
        Wy = Ht(), typeof t == "object" && t !== null && typeof t.then == "function" && ux(e, t), yp !== null && yp(e, t)
    };
    var ls = C(null);

    function yf() {
        var e = ls.current;
        return e !== null ? e : tt.pooledCache
    }

    function Go(e, t) {
        t === null ? X(ls, ls.current) : X(ls, t.pool)
    }

    function gp() {
        var e = yf();
        return e === null ? null : {
            parent: pt._currentValue,
            pool: e
        }
    }
    var il = Error(r(460)),
        gf = Error(r(474)),
        Qo = Error(r(542)),
        $o = {
            then: function() {}
        };

    function vp(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function bp(e, t, i) {
        switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(ba, ba), t = i), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, xp(e), e;
            default:
                if (typeof t.status == "string") t.then(ba, ba);
                else {
                    if (e = tt, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
                    e = t, e.status = "pending", e.then(function(l) {
                        if (t.status === "pending") {
                            var c = t;
                            c.status = "fulfilled", c.value = l
                        }
                    }, function(l) {
                        if (t.status === "pending") {
                            var c = t;
                            c.status = "rejected", c.reason = l
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, xp(e), e
                }
                throw os = t, il
        }
    }

    function rs(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (i) {
            throw i !== null && typeof i == "object" && typeof i.then == "function" ? (os = i, il) : i
        }
    }
    var os = null;

    function _p() {
        if (os === null) throw Error(r(459));
        var e = os;
        return os = null, e
    }

    function xp(e) {
        if (e === il || e === Qo) throw Error(r(483))
    }
    var sl = null,
        yr = 0;

    function Xo(e) {
        var t = yr;
        return yr += 1, sl === null && (sl = []), bp(sl, e, t)
    }

    function gr(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Io(e, t) {
        throw t.$$typeof === S ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Sp(e) {
        function t(M, N) {
            if (e) {
                var B = M.deletions;
                B === null ? (M.deletions = [N], M.flags |= 16) : B.push(N)
            }
        }

        function i(M, N) {
            if (!e) return null;
            for (; N !== null;) t(M, N), N = N.sibling;
            return null
        }

        function l(M) {
            for (var N = new Map; M !== null;) M.key !== null ? N.set(M.key, M) : N.set(M.index, M), M = M.sibling;
            return N
        }

        function c(M, N) {
            return M = xa(M, N), M.index = 0, M.sibling = null, M
        }

        function f(M, N, B) {
            return M.index = B, e ? (B = M.alternate, B !== null ? (B = B.index, B < N ? (M.flags |= 67108866, N) : B) : (M.flags |= 67108866, N)) : (M.flags |= 1048576, N)
        }

        function h(M) {
            return e && M.alternate === null && (M.flags |= 67108866), M
        }

        function _(M, N, B, Y) {
            return N === null || N.tag !== 6 ? (N = sf(B, M.mode, Y), N.return = M, N) : (N = c(N, B), N.return = M, N)
        }

        function w(M, N, B, Y) {
            var ue = B.type;
            return ue === R ? V(M, N, B.props.children, Y, B.key) : N !== null && (N.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ee && rs(ue) === N.type) ? (N = c(N, B.props), gr(N, B), N.return = M, N) : (N = Ho(B.type, B.key, B.props, null, M.mode, Y), gr(N, B), N.return = M, N)
        }

        function L(M, N, B, Y) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== B.containerInfo || N.stateNode.implementation !== B.implementation ? (N = lf(B, M.mode, Y), N.return = M, N) : (N = c(N, B.children || []), N.return = M, N)
        }

        function V(M, N, B, Y, ue) {
            return N === null || N.tag !== 7 ? (N = ns(B, M.mode, Y, ue), N.return = M, N) : (N = c(N, B), N.return = M, N)
        }

        function G(M, N, B) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = sf("" + N, M.mode, B), N.return = M, N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case T:
                        return B = Ho(N.type, N.key, N.props, null, M.mode, B), gr(B, N), B.return = M, B;
                    case O:
                        return N = lf(N, M.mode, B), N.return = M, N;
                    case ee:
                        return N = rs(N), G(M, N, B)
                }
                if (Ve(N) || ve(N)) return N = ns(N, M.mode, B, null), N.return = M, N;
                if (typeof N.then == "function") return G(M, Xo(N), B);
                if (N.$$typeof === D) return G(M, Zo(M, N), B);
                Io(M, N)
            }
            return null
        }

        function U(M, N, B, Y) {
            var ue = N !== null ? N.key : null;
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return ue !== null ? null : _(M, N, "" + B, Y);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case T:
                        return B.key === ue ? w(M, N, B, Y) : null;
                    case O:
                        return B.key === ue ? L(M, N, B, Y) : null;
                    case ee:
                        return B = rs(B), U(M, N, B, Y)
                }
                if (Ve(B) || ve(B)) return ue !== null ? null : V(M, N, B, Y, null);
                if (typeof B.then == "function") return U(M, N, Xo(B), Y);
                if (B.$$typeof === D) return U(M, N, Zo(M, B), Y);
                Io(M, B)
            }
            return null
        }

        function q(M, N, B, Y, ue) {
            if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return M = M.get(B) || null, _(N, M, "" + Y, ue);
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case T:
                        return M = M.get(Y.key === null ? B : Y.key) || null, w(N, M, Y, ue);
                    case O:
                        return M = M.get(Y.key === null ? B : Y.key) || null, L(N, M, Y, ue);
                    case ee:
                        return Y = rs(Y), q(M, N, B, Y, ue)
                }
                if (Ve(Y) || ve(Y)) return M = M.get(B) || null, V(N, M, Y, ue, null);
                if (typeof Y.then == "function") return q(M, N, B, Xo(Y), ue);
                if (Y.$$typeof === D) return q(M, N, B, Zo(N, Y), ue);
                Io(N, Y)
            }
            return null
        }

        function se(M, N, B, Y) {
            for (var ue = null, Ze = null, re = N, Ne = N = 0, Le = null; re !== null && Ne < B.length; Ne++) {
                re.index > Ne ? (Le = re, re = null) : Le = re.sibling;
                var Ge = U(M, re, B[Ne], Y);
                if (Ge === null) {
                    re === null && (re = Le);
                    break
                }
                e && re && Ge.alternate === null && t(M, re), N = f(Ge, N, Ne), Ze === null ? ue = Ge : Ze.sibling = Ge, Ze = Ge, re = Le
            }
            if (Ne === B.length) return i(M, re), qe && Sa(M, Ne), ue;
            if (re === null) {
                for (; Ne < B.length; Ne++) re = G(M, B[Ne], Y), re !== null && (N = f(re, N, Ne), Ze === null ? ue = re : Ze.sibling = re, Ze = re);
                return qe && Sa(M, Ne), ue
            }
            for (re = l(re); Ne < B.length; Ne++) Le = q(re, M, Ne, B[Ne], Y), Le !== null && (e && Le.alternate !== null && re.delete(Le.key === null ? Ne : Le.key), N = f(Le, N, Ne), Ze === null ? ue = Le : Ze.sibling = Le, Ze = Le);
            return e && re.forEach(function(_i) {
                return t(M, _i)
            }), qe && Sa(M, Ne), ue
        }

        function he(M, N, B, Y) {
            if (B == null) throw Error(r(151));
            for (var ue = null, Ze = null, re = N, Ne = N = 0, Le = null, Ge = B.next(); re !== null && !Ge.done; Ne++, Ge = B.next()) {
                re.index > Ne ? (Le = re, re = null) : Le = re.sibling;
                var _i = U(M, re, Ge.value, Y);
                if (_i === null) {
                    re === null && (re = Le);
                    break
                }
                e && re && _i.alternate === null && t(M, re), N = f(_i, N, Ne), Ze === null ? ue = _i : Ze.sibling = _i, Ze = _i, re = Le
            }
            if (Ge.done) return i(M, re), qe && Sa(M, Ne), ue;
            if (re === null) {
                for (; !Ge.done; Ne++, Ge = B.next()) Ge = G(M, Ge.value, Y), Ge !== null && (N = f(Ge, N, Ne), Ze === null ? ue = Ge : Ze.sibling = Ge, Ze = Ge);
                return qe && Sa(M, Ne), ue
            }
            for (re = l(re); !Ge.done; Ne++, Ge = B.next()) Ge = q(re, M, Ne, Ge.value, Y), Ge !== null && (e && Ge.alternate !== null && re.delete(Ge.key === null ? Ne : Ge.key), N = f(Ge, N, Ne), Ze === null ? ue = Ge : Ze.sibling = Ge, Ze = Ge);
            return e && re.forEach(function(S2) {
                return t(M, S2)
            }), qe && Sa(M, Ne), ue
        }

        function et(M, N, B, Y) {
            if (typeof B == "object" && B !== null && B.type === R && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case T:
                        e: {
                            for (var ue = B.key; N !== null;) {
                                if (N.key === ue) {
                                    if (ue = B.type, ue === R) {
                                        if (N.tag === 7) {
                                            i(M, N.sibling), Y = c(N, B.props.children), Y.return = M, M = Y;
                                            break e
                                        }
                                    } else if (N.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ee && rs(ue) === N.type) {
                                        i(M, N.sibling), Y = c(N, B.props), gr(Y, B), Y.return = M, M = Y;
                                        break e
                                    }
                                    i(M, N);
                                    break
                                } else t(M, N);
                                N = N.sibling
                            }
                            B.type === R ? (Y = ns(B.props.children, M.mode, Y, B.key), Y.return = M, M = Y) : (Y = Ho(B.type, B.key, B.props, null, M.mode, Y), gr(Y, B), Y.return = M, M = Y)
                        }
                        return h(M);
                    case O:
                        e: {
                            for (ue = B.key; N !== null;) {
                                if (N.key === ue)
                                    if (N.tag === 4 && N.stateNode.containerInfo === B.containerInfo && N.stateNode.implementation === B.implementation) {
                                        i(M, N.sibling), Y = c(N, B.children || []), Y.return = M, M = Y;
                                        break e
                                    } else {
                                        i(M, N);
                                        break
                                    }
                                else t(M, N);
                                N = N.sibling
                            }
                            Y = lf(B, M.mode, Y),
                            Y.return = M,
                            M = Y
                        }
                        return h(M);
                    case ee:
                        return B = rs(B), et(M, N, B, Y)
                }
                if (Ve(B)) return se(M, N, B, Y);
                if (ve(B)) {
                    if (ue = ve(B), typeof ue != "function") throw Error(r(150));
                    return B = ue.call(B), he(M, N, B, Y)
                }
                if (typeof B.then == "function") return et(M, N, Xo(B), Y);
                if (B.$$typeof === D) return et(M, N, Zo(M, B), Y);
                Io(M, B)
            }
            return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, N !== null && N.tag === 6 ? (i(M, N.sibling), Y = c(N, B), Y.return = M, M = Y) : (i(M, N), Y = sf(B, M.mode, Y), Y.return = M, M = Y), h(M)) : i(M, N)
        }
        return function(M, N, B, Y) {
            try {
                yr = 0;
                var ue = et(M, N, B, Y);
                return sl = null, ue
            } catch (re) {
                if (re === il || re === Qo) throw re;
                var Ze = dn(29, re, null, M.mode);
                return Ze.lanes = Y, Ze.return = M, Ze
            } finally {}
        }
    }
    var cs = Sp(!0),
        Tp = Sp(!1),
        ai = !1;

    function vf(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function bf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function ii(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function si(e, t, i) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Xe & 2) !== 0) {
            var c = l.pending;
            return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, t = qo(e), lp(e, null, i), t
        }
        return Uo(e, l, t, i), qo(e)
    }

    function vr(e, t, i) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, i |= l, t.lanes = i, Kt(e, i)
        }
    }

    function _f(e, t) {
        var i = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, i === l)) {
            var c = null,
                f = null;
            if (i = i.firstBaseUpdate, i !== null) {
                do {
                    var h = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? c = f = h : f = f.next = h, i = i.next
                } while (i !== null);
                f === null ? c = f = t : f = f.next = t
            } else c = f = t;
            i = {
                baseState: l.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: f,
                shared: l.shared,
                callbacks: l.callbacks
            }, e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t
    }
    var xf = !1;

    function br() {
        if (xf) {
            var e = al;
            if (e !== null) throw e
        }
    }

    function _r(e, t, i, l) {
        xf = !1;
        var c = e.updateQueue;
        ai = !1;
        var f = c.firstBaseUpdate,
            h = c.lastBaseUpdate,
            _ = c.shared.pending;
        if (_ !== null) {
            c.shared.pending = null;
            var w = _,
                L = w.next;
            w.next = null, h === null ? f = L : h.next = L, h = w;
            var V = e.alternate;
            V !== null && (V = V.updateQueue, _ = V.lastBaseUpdate, _ !== h && (_ === null ? V.firstBaseUpdate = L : _.next = L, V.lastBaseUpdate = w))
        }
        if (f !== null) {
            var G = c.baseState;
            h = 0, V = L = w = null, _ = f;
            do {
                var U = _.lane & -536870913,
                    q = U !== _.lane;
                if (q ? (Be & U) === U : (l & U) === U) {
                    U !== 0 && U === nl && (xf = !0), V !== null && (V = V.next = {
                        lane: 0,
                        tag: _.tag,
                        payload: _.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var se = e,
                            he = _;U = t;
                        var et = i;
                        switch (he.tag) {
                            case 1:
                                if (se = he.payload, typeof se == "function") {
                                    G = se.call(et, G, U);
                                    break e
                                }
                                G = se;
                                break e;
                            case 3:
                                se.flags = se.flags & -65537 | 128;
                            case 0:
                                if (se = he.payload, U = typeof se == "function" ? se.call(et, G, U) : se, U == null) break e;
                                G = g({}, G, U);
                                break e;
                            case 2:
                                ai = !0
                        }
                    }
                    U = _.callback, U !== null && (e.flags |= 64, q && (e.flags |= 8192), q = c.callbacks, q === null ? c.callbacks = [U] : q.push(U))
                } else q = {
                    lane: U,
                    tag: _.tag,
                    payload: _.payload,
                    callback: _.callback,
                    next: null
                }, V === null ? (L = V = q, w = G) : V = V.next = q, h |= U;
                if (_ = _.next, _ === null) {
                    if (_ = c.shared.pending, _ === null) break;
                    q = _, _ = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null
                }
            } while (!0);
            V === null && (w = G), c.baseState = w, c.firstBaseUpdate = L, c.lastBaseUpdate = V, f === null && (c.shared.lanes = 0), ui |= h, e.lanes = h, e.memoizedState = G
        }
    }

    function wp(e, t) {
        if (typeof e != "function") throw Error(r(191, e));
        e.call(t)
    }

    function Ep(e, t) {
        var i = e.callbacks;
        if (i !== null)
            for (e.callbacks = null, e = 0; e < i.length; e++) wp(i[e], t)
    }
    var ll = C(null),
        Ko = C(0);

    function Cp(e, t) {
        e = za, X(Ko, e), X(ll, t), za = e | t.baseLanes
    }

    function Sf() {
        X(Ko, za), X(ll, ll.current)
    }

    function Tf() {
        za = Ko.current, Z(ll), Z(Ko)
    }
    var hn = C(null),
        jn = null;

    function li(e) {
        var t = e.alternate;
        X(ft, ft.current & 1), X(hn, e), jn === null && (t === null || ll.current !== null || t.memoizedState !== null) && (jn = e)
    }

    function wf(e) {
        X(ft, ft.current), X(hn, e), jn === null && (jn = e)
    }

    function Ap(e) {
        e.tag === 22 ? (X(ft, ft.current), X(hn, e), jn === null && (jn = e)) : ri()
    }

    function ri() {
        X(ft, ft.current), X(hn, hn.current)
    }

    function mn(e) {
        Z(hn), jn === e && (jn = null), Z(ft)
    }
    var ft = C(0);

    function Fo(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated, i === null || Od(i) || Rd(i))) return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Ea = 0,
        Ce = null,
        Je = null,
        yt = null,
        Po = !1,
        rl = !1,
        us = !1,
        Jo = 0,
        xr = 0,
        ol = null,
        dx = 0;

    function rt() {
        throw Error(r(321))
    }

    function Ef(e, t) {
        if (t === null) return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!fn(e[i], t[i])) return !1;
        return !0
    }

    function Cf(e, t, i, l, c, f) {
        return Ea = f, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? uy : Vf, us = !1, f = i(l, c), us = !1, rl && (f = jp(t, i, l, c)), Np(e), f
    }

    function Np(e) {
        z.H = wr;
        var t = Je !== null && Je.next !== null;
        if (Ea = 0, yt = Je = Ce = null, Po = !1, xr = 0, ol = null, t) throw Error(r(300));
        e === null || gt || (e = e.dependencies, e !== null && Yo(e) && (gt = !0))
    }

    function jp(e, t, i, l) {
        Ce = e;
        var c = 0;
        do {
            if (rl && (ol = null), xr = 0, rl = !1, 25 <= c) throw Error(r(301));
            if (c += 1, yt = Je = null, e.updateQueue != null) {
                var f = e.updateQueue;
                f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0)
            }
            z.H = fy, f = t(i, l)
        } while (rl);
        return f
    }

    function hx() {
        var e = z.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? Sr(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Ce.flags |= 1024), t
    }

    function Af() {
        var e = Jo !== 0;
        return Jo = 0, e
    }

    function Nf(e, t, i) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i
    }

    function jf(e) {
        if (Po) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            Po = !1
        }
        Ea = 0, yt = Je = Ce = null, rl = !1, xr = Jo = 0, ol = null
    }

    function Yt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return yt === null ? Ce.memoizedState = yt = e : yt = yt.next = e, yt
    }

    function dt() {
        if (Je === null) {
            var e = Ce.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Je.next;
        var t = yt === null ? Ce.memoizedState : yt.next;
        if (t !== null) yt = t, Je = e;
        else {
            if (e === null) throw Ce.alternate === null ? Error(r(467)) : Error(r(310));
            Je = e, e = {
                memoizedState: Je.memoizedState,
                baseState: Je.baseState,
                baseQueue: Je.baseQueue,
                queue: Je.queue,
                next: null
            }, yt === null ? Ce.memoizedState = yt = e : yt = yt.next = e
        }
        return yt
    }

    function Wo() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Sr(e) {
        var t = xr;
        return xr += 1, ol === null && (ol = []), e = bp(ol, e, t), t = Ce, (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? uy : Vf), e
    }

    function ec(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return Sr(e);
            if (e.$$typeof === D) return Ot(e)
        }
        throw Error(r(438, String(e)))
    }

    function Of(e) {
        var t = null,
            i = Ce.updateQueue;
        if (i !== null && (t = i.memoCache), t == null) {
            var l = Ce.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
                data: l.data.map(function(c) {
                    return c.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), i === null && (i = Wo(), Ce.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
            for (i = t.data[t.index] = Array(e), l = 0; l < e; l++) i[l] = ae;
        return t.index++, i
    }

    function Ca(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function tc(e) {
        var t = dt();
        return Rf(t, Je, e)
    }

    function Rf(e, t, i) {
        var l = e.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = i;
        var c = e.baseQueue,
            f = l.pending;
        if (f !== null) {
            if (c !== null) {
                var h = c.next;
                c.next = f.next, f.next = h
            }
            t.baseQueue = c = f, l.pending = null
        }
        if (f = e.baseState, c === null) e.memoizedState = f;
        else {
            t = c.next;
            var _ = h = null,
                w = null,
                L = t,
                V = !1;
            do {
                var G = L.lane & -536870913;
                if (G !== L.lane ? (Be & G) === G : (Ea & G) === G) {
                    var U = L.revertLane;
                    if (U === 0) w !== null && (w = w.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    }), G === nl && (V = !0);
                    else if ((Ea & U) === U) {
                        L = L.next, U === nl && (V = !0);
                        continue
                    } else G = {
                        lane: 0,
                        revertLane: L.revertLane,
                        gesture: null,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    }, w === null ? (_ = w = G, h = f) : w = w.next = G, Ce.lanes |= U, ui |= U;
                    G = L.action, us && i(f, G), f = L.hasEagerState ? L.eagerState : i(f, G)
                } else U = {
                    lane: G,
                    revertLane: L.revertLane,
                    gesture: L.gesture,
                    action: L.action,
                    hasEagerState: L.hasEagerState,
                    eagerState: L.eagerState,
                    next: null
                }, w === null ? (_ = w = U, h = f) : w = w.next = U, Ce.lanes |= G, ui |= G;
                L = L.next
            } while (L !== null && L !== t);
            if (w === null ? h = f : w.next = _, !fn(f, e.memoizedState) && (gt = !0, V && (i = al, i !== null))) throw i;
            e.memoizedState = f, e.baseState = h, e.baseQueue = w, l.lastRenderedState = f
        }
        return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
    }

    function Mf(e) {
        var t = dt(),
            i = t.queue;
        if (i === null) throw Error(r(311));
        i.lastRenderedReducer = e;
        var l = i.dispatch,
            c = i.pending,
            f = t.memoizedState;
        if (c !== null) {
            i.pending = null;
            var h = c = c.next;
            do f = e(f, h.action), h = h.next; while (h !== c);
            fn(f, t.memoizedState) || (gt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), i.lastRenderedState = f
        }
        return [f, l]
    }

    function Op(e, t, i) {
        var l = Ce,
            c = dt(),
            f = qe;
        if (f) {
            if (i === void 0) throw Error(r(407));
            i = i()
        } else i = t();
        var h = !fn((Je || c).memoizedState, i);
        if (h && (c.memoizedState = i, gt = !0), c = c.queue, kf(zp.bind(null, l, c, e), [e]), c.getSnapshot !== t || h || yt !== null && yt.memoizedState.tag & 1) {
            if (l.flags |= 2048, cl(9, {
                    destroy: void 0
                }, Mp.bind(null, l, c, i, t), null), tt === null) throw Error(r(349));
            f || (Ea & 127) !== 0 || Rp(l, t, i)
        }
        return i
    }

    function Rp(e, t, i) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: i
        }, t = Ce.updateQueue, t === null ? (t = Wo(), Ce.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e))
    }

    function Mp(e, t, i, l) {
        t.value = i, t.getSnapshot = l, Dp(t) && kp(e)
    }

    function zp(e, t, i) {
        return i(function() {
            Dp(t) && kp(e)
        })
    }

    function Dp(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !fn(e, i)
        } catch {
            return !0
        }
    }

    function kp(e) {
        var t = ts(e, 2);
        t !== null && an(t, e, 2)
    }

    function zf(e) {
        var t = Yt();
        if (typeof e == "function") {
            var i = e;
            if (e = i(), us) {
                Un(!0);
                try {
                    i()
                } finally {
                    Un(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ca,
            lastRenderedState: e
        }, t
    }

    function Bp(e, t, i, l) {
        return e.baseState = i, Rf(e, Je, typeof l == "function" ? l : Ca)
    }

    function mx(e, t, i, l, c) {
        if (ic(e)) throw Error(r(485));
        if (e = t.action, e !== null) {
            var f = {
                payload: c,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    f.listeners.push(h)
                }
            };
            z.T !== null ? i(!0) : f.isTransition = !1, l(f), i = t.pending, i === null ? (f.next = t.pending = f, Lp(t, f)) : (f.next = i.next, t.pending = i.next = f)
        }
    }

    function Lp(e, t) {
        var i = t.action,
            l = t.payload,
            c = e.state;
        if (t.isTransition) {
            var f = z.T,
                h = {};
            z.T = h;
            try {
                var _ = i(c, l),
                    w = z.S;
                w !== null && w(h, _), Up(e, t, _)
            } catch (L) {
                Df(e, t, L)
            } finally {
                f !== null && h.types !== null && (f.types = h.types), z.T = f
            }
        } else try {
            f = i(c, l), Up(e, t, f)
        } catch (L) {
            Df(e, t, L)
        }
    }

    function Up(e, t, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(l) {
            qp(e, t, l)
        }, function(l) {
            return Df(e, t, l)
        }) : qp(e, t, i)
    }

    function qp(e, t, i) {
        t.status = "fulfilled", t.value = i, Hp(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, Lp(e, i)))
    }

    function Df(e, t, i) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
            l = l.next;
            do t.status = "rejected", t.reason = i, Hp(t), t = t.next; while (t !== l)
        }
        e.action = null
    }

    function Hp(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Vp(e, t) {
        return t
    }

    function Yp(e, t) {
        if (qe) {
            var i = tt.formState;
            if (i !== null) {
                e: {
                    var l = Ce;
                    if (qe) {
                        if (nt) {
                            t: {
                                for (var c = nt, f = Nn; c.nodeType !== 8;) {
                                    if (!f) {
                                        c = null;
                                        break t
                                    }
                                    if (c = On(c.nextSibling), c === null) {
                                        c = null;
                                        break t
                                    }
                                }
                                f = c.data,
                                c = f === "F!" || f === "F" ? c : null
                            }
                            if (c) {
                                nt = On(c.nextSibling), l = c.data === "F!";
                                break e
                            }
                        }
                        ti(l)
                    }
                    l = !1
                }
                l && (t = i[0])
            }
        }
        return i = Yt(), i.memoizedState = i.baseState = t, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vp,
            lastRenderedState: t
        }, i.queue = l, i = ry.bind(null, Ce, l), l.dispatch = i, l = zf(!1), f = Hf.bind(null, Ce, !1, l.queue), l = Yt(), c = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, l.queue = c, i = mx.bind(null, Ce, c, f, i), c.dispatch = i, l.memoizedState = e, [t, i, !1]
    }

    function Zp(e) {
        var t = dt();
        return Gp(t, Je, e)
    }

    function Gp(e, t, i) {
        if (t = Rf(e, t, Vp)[0], e = tc(Ca)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var l = Sr(t)
        } catch (h) {
            throw h === il ? Qo : h
        } else l = t;
        t = dt();
        var c = t.queue,
            f = c.dispatch;
        return i !== t.memoizedState && (Ce.flags |= 2048, cl(9, {
            destroy: void 0
        }, px.bind(null, c, i), null)), [l, f, e]
    }

    function px(e, t) {
        e.action = t
    }

    function Qp(e) {
        var t = dt(),
            i = Je;
        if (i !== null) return Gp(t, i, e);
        dt(), t = t.memoizedState, i = dt();
        var l = i.queue.dispatch;
        return i.memoizedState = e, [t, l, !1]
    }

    function cl(e, t, i, l) {
        return e = {
            tag: e,
            create: i,
            deps: l,
            inst: t,
            next: null
        }, t = Ce.updateQueue, t === null && (t = Wo(), Ce.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (l = i.next, i.next = e, e.next = l, t.lastEffect = e), e
    }

    function $p() {
        return dt().memoizedState
    }

    function nc(e, t, i, l) {
        var c = Yt();
        Ce.flags |= e, c.memoizedState = cl(1 | t, {
            destroy: void 0
        }, i, l === void 0 ? null : l)
    }

    function ac(e, t, i, l) {
        var c = dt();
        l = l === void 0 ? null : l;
        var f = c.memoizedState.inst;
        Je !== null && l !== null && Ef(l, Je.memoizedState.deps) ? c.memoizedState = cl(t, f, i, l) : (Ce.flags |= e, c.memoizedState = cl(1 | t, f, i, l))
    }

    function Xp(e, t) {
        nc(8390656, 8, e, t)
    }

    function kf(e, t) {
        ac(2048, 8, e, t)
    }

    function yx(e) {
        Ce.flags |= 4;
        var t = Ce.updateQueue;
        if (t === null) t = Wo(), Ce.updateQueue = t, t.events = [e];
        else {
            var i = t.events;
            i === null ? t.events = [e] : i.push(e)
        }
    }

    function Ip(e) {
        var t = dt().memoizedState;
        return yx({
                ref: t,
                nextImpl: e
            }),
            function() {
                if ((Xe & 2) !== 0) throw Error(r(440));
                return t.impl.apply(void 0, arguments)
            }
    }

    function Kp(e, t) {
        return ac(4, 2, e, t)
    }

    function Fp(e, t) {
        return ac(4, 4, e, t)
    }

    function Pp(e, t) {
        if (typeof t == "function") {
            e = e();
            var i = t(e);
            return function() {
                typeof i == "function" ? i() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Jp(e, t, i) {
        i = i != null ? i.concat([e]) : null, ac(4, 4, Pp.bind(null, t, e), i)
    }

    function Bf() {}

    function Wp(e, t) {
        var i = dt();
        t = t === void 0 ? null : t;
        var l = i.memoizedState;
        return t !== null && Ef(t, l[1]) ? l[0] : (i.memoizedState = [e, t], e)
    }

    function ey(e, t) {
        var i = dt();
        t = t === void 0 ? null : t;
        var l = i.memoizedState;
        if (t !== null && Ef(t, l[1])) return l[0];
        if (l = e(), us) {
            Un(!0);
            try {
                e()
            } finally {
                Un(!1)
            }
        }
        return i.memoizedState = [l, t], l
    }

    function Lf(e, t, i) {
        return i === void 0 || (Ea & 1073741824) !== 0 && (Be & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i, e = tg(), Ce.lanes |= e, ui |= e, i)
    }

    function ty(e, t, i, l) {
        return fn(i, t) ? i : ll.current !== null ? (e = Lf(e, i, l), fn(e, t) || (gt = !0), e) : (Ea & 42) === 0 || (Ea & 1073741824) !== 0 && (Be & 261930) === 0 ? (gt = !0, e.memoizedState = i) : (e = tg(), Ce.lanes |= e, ui |= e, t)
    }

    function ny(e, t, i, l, c) {
        var f = Q.p;
        Q.p = f !== 0 && 8 > f ? f : 8;
        var h = z.T,
            _ = {};
        z.T = _, Hf(e, !1, t, i);
        try {
            var w = c(),
                L = z.S;
            if (L !== null && L(_, w), w !== null && typeof w == "object" && typeof w.then == "function") {
                var V = fx(w, l);
                Tr(e, t, V, gn(e))
            } else Tr(e, t, l, gn(e))
        } catch (G) {
            Tr(e, t, {
                then: function() {},
                status: "rejected",
                reason: G
            }, gn())
        } finally {
            Q.p = f, h !== null && _.types !== null && (h.types = _.types), z.T = h
        }
    }

    function gx() {}

    function Uf(e, t, i, l) {
        if (e.tag !== 5) throw Error(r(476));
        var c = ay(e).queue;
        ny(e, c, t, F, i === null ? gx : function() {
            return iy(e), i(l)
        })
    }

    function ay(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ca,
                lastRenderedState: F
            },
            next: null
        };
        var i = {};
        return t.next = {
            memoizedState: i,
            baseState: i,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ca,
                lastRenderedState: i
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function iy(e) {
        var t = ay(e);
        t.next === null && (t = e.alternate.memoizedState), Tr(e, t.next.queue, {}, gn())
    }

    function qf() {
        return Ot(Hr)
    }

    function sy() {
        return dt().memoizedState
    }

    function ly() {
        return dt().memoizedState
    }

    function vx(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var i = gn();
                    e = ii(i);
                    var l = si(t, e, i);
                    l !== null && (an(l, t, i), vr(l, t, i)), t = {
                        cache: mf()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function bx(e, t, i) {
        var l = gn();
        i = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, ic(e) ? oy(t, i) : (i = nf(e, t, i, l), i !== null && (an(i, e, l), cy(i, t, l)))
    }

    function ry(e, t, i) {
        var l = gn();
        Tr(e, t, i, l)
    }

    function Tr(e, t, i, l) {
        var c = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ic(e)) oy(t, c);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
                var h = t.lastRenderedState,
                    _ = f(h, i);
                if (c.hasEagerState = !0, c.eagerState = _, fn(_, h)) return Uo(e, t, c, 0), tt === null && Lo(), !1
            } catch {} finally {}
            if (i = nf(e, t, c, l), i !== null) return an(i, e, l), cy(i, t, l), !0
        }
        return !1
    }

    function Hf(e, t, i, l) {
        if (l = {
                lane: 2,
                revertLane: vd(),
                gesture: null,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ic(e)) {
            if (t) throw Error(r(479))
        } else t = nf(e, i, l, 2), t !== null && an(t, e, 2)
    }

    function ic(e) {
        var t = e.alternate;
        return e === Ce || t !== null && t === Ce
    }

    function oy(e, t) {
        rl = Po = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t
    }

    function cy(e, t, i) {
        if ((i & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, i |= l, t.lanes = i, Kt(e, i)
        }
    }
    var wr = {
        readContext: Ot,
        use: ec,
        useCallback: rt,
        useContext: rt,
        useEffect: rt,
        useImperativeHandle: rt,
        useLayoutEffect: rt,
        useInsertionEffect: rt,
        useMemo: rt,
        useReducer: rt,
        useRef: rt,
        useState: rt,
        useDebugValue: rt,
        useDeferredValue: rt,
        useTransition: rt,
        useSyncExternalStore: rt,
        useId: rt,
        useHostTransitionStatus: rt,
        useFormState: rt,
        useActionState: rt,
        useOptimistic: rt,
        useMemoCache: rt,
        useCacheRefresh: rt
    };
    wr.useEffectEvent = rt;
    var uy = {
            readContext: Ot,
            use: ec,
            useCallback: function(e, t) {
                return Yt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Ot,
            useEffect: Xp,
            useImperativeHandle: function(e, t, i) {
                i = i != null ? i.concat([e]) : null, nc(4194308, 4, Pp.bind(null, t, e), i)
            },
            useLayoutEffect: function(e, t) {
                return nc(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                nc(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var i = Yt();
                t = t === void 0 ? null : t;
                var l = e();
                if (us) {
                    Un(!0);
                    try {
                        e()
                    } finally {
                        Un(!1)
                    }
                }
                return i.memoizedState = [l, t], l
            },
            useReducer: function(e, t, i) {
                var l = Yt();
                if (i !== void 0) {
                    var c = i(t);
                    if (us) {
                        Un(!0);
                        try {
                            i(t)
                        } finally {
                            Un(!1)
                        }
                    }
                } else c = t;
                return l.memoizedState = l.baseState = c, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: c
                }, l.queue = e, e = e.dispatch = bx.bind(null, Ce, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = Yt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = zf(e);
                var t = e.queue,
                    i = ry.bind(null, Ce, t);
                return t.dispatch = i, [e.memoizedState, i]
            },
            useDebugValue: Bf,
            useDeferredValue: function(e, t) {
                var i = Yt();
                return Lf(i, e, t)
            },
            useTransition: function() {
                var e = zf(!1);
                return e = ny.bind(null, Ce, e.queue, !0, !1), Yt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, i) {
                var l = Ce,
                    c = Yt();
                if (qe) {
                    if (i === void 0) throw Error(r(407));
                    i = i()
                } else {
                    if (i = t(), tt === null) throw Error(r(349));
                    (Be & 127) !== 0 || Rp(l, t, i)
                }
                c.memoizedState = i;
                var f = {
                    value: i,
                    getSnapshot: t
                };
                return c.queue = f, Xp(zp.bind(null, l, f, e), [e]), l.flags |= 2048, cl(9, {
                    destroy: void 0
                }, Mp.bind(null, l, f, i, t), null), i
            },
            useId: function() {
                var e = Yt(),
                    t = tt.identifierPrefix;
                if (qe) {
                    var i = Pn,
                        l = Fn;
                    i = (l & ~(1 << 32 - Dt(l) - 1)).toString(32) + i, t = "_" + t + "R_" + i, i = Jo++, 0 < i && (t += "H" + i.toString(32)), t += "_"
                } else i = dx++, t = "_" + t + "r_" + i.toString(32) + "_";
                return e.memoizedState = t
            },
            useHostTransitionStatus: qf,
            useFormState: Yp,
            useActionState: Yp,
            useOptimistic: function(e) {
                var t = Yt();
                t.memoizedState = t.baseState = e;
                var i = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = i, t = Hf.bind(null, Ce, !0, i), i.dispatch = t, [e, t]
            },
            useMemoCache: Of,
            useCacheRefresh: function() {
                return Yt().memoizedState = vx.bind(null, Ce)
            },
            useEffectEvent: function(e) {
                var t = Yt(),
                    i = {
                        impl: e
                    };
                return t.memoizedState = i,
                    function() {
                        if ((Xe & 2) !== 0) throw Error(r(440));
                        return i.impl.apply(void 0, arguments)
                    }
            }
        },
        Vf = {
            readContext: Ot,
            use: ec,
            useCallback: Wp,
            useContext: Ot,
            useEffect: kf,
            useImperativeHandle: Jp,
            useInsertionEffect: Kp,
            useLayoutEffect: Fp,
            useMemo: ey,
            useReducer: tc,
            useRef: $p,
            useState: function() {
                return tc(Ca)
            },
            useDebugValue: Bf,
            useDeferredValue: function(e, t) {
                var i = dt();
                return ty(i, Je.memoizedState, e, t)
            },
            useTransition: function() {
                var e = tc(Ca)[0],
                    t = dt().memoizedState;
                return [typeof e == "boolean" ? e : Sr(e), t]
            },
            useSyncExternalStore: Op,
            useId: sy,
            useHostTransitionStatus: qf,
            useFormState: Zp,
            useActionState: Zp,
            useOptimistic: function(e, t) {
                var i = dt();
                return Bp(i, Je, e, t)
            },
            useMemoCache: Of,
            useCacheRefresh: ly
        };
    Vf.useEffectEvent = Ip;
    var fy = {
        readContext: Ot,
        use: ec,
        useCallback: Wp,
        useContext: Ot,
        useEffect: kf,
        useImperativeHandle: Jp,
        useInsertionEffect: Kp,
        useLayoutEffect: Fp,
        useMemo: ey,
        useReducer: Mf,
        useRef: $p,
        useState: function() {
            return Mf(Ca)
        },
        useDebugValue: Bf,
        useDeferredValue: function(e, t) {
            var i = dt();
            return Je === null ? Lf(i, e, t) : ty(i, Je.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Mf(Ca)[0],
                t = dt().memoizedState;
            return [typeof e == "boolean" ? e : Sr(e), t]
        },
        useSyncExternalStore: Op,
        useId: sy,
        useHostTransitionStatus: qf,
        useFormState: Qp,
        useActionState: Qp,
        useOptimistic: function(e, t) {
            var i = dt();
            return Je !== null ? Bp(i, Je, e, t) : (i.baseState = e, [e, i.queue.dispatch])
        },
        useMemoCache: Of,
        useCacheRefresh: ly
    };
    fy.useEffectEvent = Ip;

    function Yf(e, t, i, l) {
        t = e.memoizedState, i = i(l, t), i = i == null ? t : g({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Zf = {
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var l = gn(),
                c = ii(l);
            c.payload = t, i != null && (c.callback = i), t = si(e, c, l), t !== null && (an(t, e, l), vr(t, e, l))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var l = gn(),
                c = ii(l);
            c.tag = 1, c.payload = t, i != null && (c.callback = i), t = si(e, c, l), t !== null && (an(t, e, l), vr(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = gn(),
                l = ii(i);
            l.tag = 2, t != null && (l.callback = t), t = si(e, l, i), t !== null && (an(t, e, i), vr(t, e, i))
        }
    };

    function dy(e, t, i, l, c, f, h) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, h) : t.prototype && t.prototype.isPureReactComponent ? !ur(i, l) || !ur(c, f) : !0
    }

    function hy(e, t, i, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l), t.state !== e && Zf.enqueueReplaceState(t, t.state, null)
    }

    function fs(e, t) {
        var i = t;
        if ("ref" in t) {
            i = {};
            for (var l in t) l !== "ref" && (i[l] = t[l])
        }
        if (e = e.defaultProps) {
            i === t && (i = g({}, i));
            for (var c in e) i[c] === void 0 && (i[c] = e[c])
        }
        return i
    }

    function my(e) {
        Bo(e)
    }

    function py(e) {
        console.error(e)
    }

    function yy(e) {
        Bo(e)
    }

    function sc(e, t) {
        try {
            var i = e.onUncaughtError;
            i(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function gy(e, t, i) {
        try {
            var l = e.onCaughtError;
            l(i.value, {
                componentStack: i.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (c) {
            setTimeout(function() {
                throw c
            })
        }
    }

    function Gf(e, t, i) {
        return i = ii(i), i.tag = 3, i.payload = {
            element: null
        }, i.callback = function() {
            sc(e, t)
        }, i
    }

    function vy(e) {
        return e = ii(e), e.tag = 3, e
    }

    function by(e, t, i, l) {
        var c = i.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = l.value;
            e.payload = function() {
                return c(f)
            }, e.callback = function() {
                gy(t, i, l)
            }
        }
        var h = i.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            gy(t, i, l), typeof c != "function" && (fi === null ? fi = new Set([this]) : fi.add(this));
            var _ = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: _ !== null ? _ : ""
            })
        })
    }

    function _x(e, t, i, l, c) {
        if (i.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = i.alternate, t !== null && tl(t, i, c, !0), i = hn.current, i !== null) {
                switch (i.tag) {
                    case 31:
                    case 13:
                        return jn === null ? gc() : i.alternate === null && ot === 0 && (ot = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, l === $o ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = new Set([l]) : t.add(l), pd(e, l, c)), !1;
                    case 22:
                        return i.flags |= 65536, l === $o ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = new Set([l]) : i.add(l)), pd(e, l, c)), !1
                }
                throw Error(r(435, i.tag))
            }
            return pd(e, l, c), gc(), !1
        }
        if (qe) return t = hn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, l !== cf && (e = Error(r(422), {
            cause: l
        }), hr(En(e, i)))) : (l !== cf && (t = Error(r(423), {
            cause: l
        }), hr(En(t, i))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = En(l, i), c = Gf(e.stateNode, l, c), _f(e, c), ot !== 4 && (ot = 2)), !1;
        var f = Error(r(520), {
            cause: l
        });
        if (f = En(f, i), Mr === null ? Mr = [f] : Mr.push(f), ot !== 4 && (ot = 2), t === null) return !0;
        l = En(l, i), i = t;
        do {
            switch (i.tag) {
                case 3:
                    return i.flags |= 65536, e = c & -c, i.lanes |= e, e = Gf(i.stateNode, l, e), _f(i, e), !1;
                case 1:
                    if (t = i.type, f = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (fi === null || !fi.has(f)))) return i.flags |= 65536, c &= -c, i.lanes |= c, c = vy(c), by(c, e, i, l), _f(i, c), !1
            }
            i = i.return
        } while (i !== null);
        return !1
    }
    var Qf = Error(r(461)),
        gt = !1;

    function Rt(e, t, i, l) {
        t.child = e === null ? Tp(t, null, i, l) : cs(t, e.child, i, l)
    }

    function _y(e, t, i, l, c) {
        i = i.render;
        var f = t.ref;
        if ("ref" in l) {
            var h = {};
            for (var _ in l) _ !== "ref" && (h[_] = l[_])
        } else h = l;
        return ss(t), l = Cf(e, t, i, h, f, c), _ = Af(), e !== null && !gt ? (Nf(e, t, c), Aa(e, t, c)) : (qe && _ && rf(t), t.flags |= 1, Rt(e, t, l, c), t.child)
    }

    function xy(e, t, i, l, c) {
        if (e === null) {
            var f = i.type;
            return typeof f == "function" && !af(f) && f.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = f, Sy(e, t, f, l, c)) : (e = Ho(i.type, null, l, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (f = e.child, !Wf(e, c)) {
            var h = f.memoizedProps;
            if (i = i.compare, i = i !== null ? i : ur, i(h, l) && e.ref === t.ref) return Aa(e, t, c)
        }
        return t.flags |= 1, e = xa(f, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function Sy(e, t, i, l, c) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (ur(f, l) && e.ref === t.ref)
                if (gt = !1, t.pendingProps = l = f, Wf(e, c))(e.flags & 131072) !== 0 && (gt = !0);
                else return t.lanes = e.lanes, Aa(e, t, c)
        }
        return $f(e, t, i, l, c)
    }

    function Ty(e, t, i, l) {
        var c = l.children,
            f = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (f = f !== null ? f.baseLanes | i : i, e !== null) {
                    for (l = t.child = e.child, c = 0; l !== null;) c = c | l.lanes | l.childLanes, l = l.sibling;
                    l = c & ~f
                } else l = 0, t.child = null;
                return wy(e, t, f, i, l)
            }
            if ((i & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && Go(t, f !== null ? f.cachePool : null), f !== null ? Cp(t, f) : Sf(), Ap(t);
            else return l = t.lanes = 536870912, wy(e, t, f !== null ? f.baseLanes | i : i, i, l)
        } else f !== null ? (Go(t, f.cachePool), Cp(t, f), ri(), t.memoizedState = null) : (e !== null && Go(t, null), Sf(), ri());
        return Rt(e, t, c, i), t.child
    }

    function Er(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling
    }

    function wy(e, t, i, l, c) {
        var f = yf();
        return f = f === null ? null : {
            parent: pt._currentValue,
            pool: f
        }, t.memoizedState = {
            baseLanes: i,
            cachePool: f
        }, e !== null && Go(t, null), Sf(), Ap(t), e !== null && tl(e, t, l, !0), t.childLanes = c, null
    }

    function lc(e, t) {
        return t = oc({
            mode: t.mode,
            children: t.children
        }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function Ey(e, t, i) {
        return cs(t, e.child, null, i), e = lc(t, t.pendingProps), e.flags |= 2, mn(t), t.memoizedState = null, e
    }

    function xx(e, t, i) {
        var l = t.pendingProps,
            c = (t.flags & 128) !== 0;
        if (t.flags &= -129, e === null) {
            if (qe) {
                if (l.mode === "hidden") return e = lc(t, l), t.lanes = 536870912, Er(null, e);
                if (wf(t), (e = nt) ? (e = Lg(e, Nn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Wa !== null ? {
                            id: Fn,
                            overflow: Pn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, i = op(e), i.return = t, t.child = i, jt = t, nt = null)) : e = null, e === null) throw ti(t);
                return t.lanes = 536870912, null
            }
            return lc(t, l)
        }
        var f = e.memoizedState;
        if (f !== null) {
            var h = f.dehydrated;
            if (wf(t), c)
                if (t.flags & 256) t.flags &= -257, t = Ey(e, t, i);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
            else throw Error(r(558));
            else if (gt || tl(e, t, i, !1), c = (i & e.childLanes) !== 0, gt || c) {
                if (l = tt, l !== null && (h = Ft(l, i), h !== 0 && h !== f.retryLane)) throw f.retryLane = h, ts(e, h), an(l, e, h), Qf;
                gc(), t = Ey(e, t, i)
            } else e = f.treeContext, nt = On(h.nextSibling), jt = t, qe = !0, ei = null, Nn = !1, e !== null && fp(t, e), t = lc(t, l), t.flags |= 4096;
            return t
        }
        return e = xa(e.child, {
            mode: l.mode,
            children: l.children
        }), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function rc(e, t) {
        var i = t.ref;
        if (i === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof i != "function" && typeof i != "object") throw Error(r(284));
            (e === null || e.ref !== i) && (t.flags |= 4194816)
        }
    }

    function $f(e, t, i, l, c) {
        return ss(t), i = Cf(e, t, i, l, void 0, c), l = Af(), e !== null && !gt ? (Nf(e, t, c), Aa(e, t, c)) : (qe && l && rf(t), t.flags |= 1, Rt(e, t, i, c), t.child)
    }

    function Cy(e, t, i, l, c, f) {
        return ss(t), t.updateQueue = null, i = jp(t, l, i, c), Np(e), l = Af(), e !== null && !gt ? (Nf(e, t, f), Aa(e, t, f)) : (qe && l && rf(t), t.flags |= 1, Rt(e, t, i, f), t.child)
    }

    function Ay(e, t, i, l, c) {
        if (ss(t), t.stateNode === null) {
            var f = Ps,
                h = i.contextType;
            typeof h == "object" && h !== null && (f = Ot(h)), f = new i(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Zf, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, vf(t), h = i.contextType, f.context = typeof h == "object" && h !== null ? Ot(h) : Ps, f.state = t.memoizedState, h = i.getDerivedStateFromProps, typeof h == "function" && (Yf(t, i, h, l), f.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (h = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), h !== f.state && Zf.enqueueReplaceState(f, f.state, null), _r(t, l, f, c), br(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0
        } else if (e === null) {
            f = t.stateNode;
            var _ = t.memoizedProps,
                w = fs(i, _);
            f.props = w;
            var L = f.context,
                V = i.contextType;
            h = Ps, typeof V == "object" && V !== null && (h = Ot(V));
            var G = i.getDerivedStateFromProps;
            V = typeof G == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, V || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || L !== h) && hy(t, f, l, h), ai = !1;
            var U = t.memoizedState;
            f.state = U, _r(t, l, f, c), br(), L = t.memoizedState, _ || U !== L || ai ? (typeof G == "function" && (Yf(t, i, G, l), L = t.memoizedState), (w = ai || dy(t, i, w, l, U, L, h)) ? (V || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = L), f.props = l, f.state = L, f.context = h, l = w) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            f = t.stateNode, bf(e, t), h = t.memoizedProps, V = fs(i, h), f.props = V, G = t.pendingProps, U = f.context, L = i.contextType, w = Ps, typeof L == "object" && L !== null && (w = Ot(L)), _ = i.getDerivedStateFromProps, (L = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (h !== G || U !== w) && hy(t, f, l, w), ai = !1, U = t.memoizedState, f.state = U, _r(t, l, f, c), br();
            var q = t.memoizedState;
            h !== G || U !== q || ai || e !== null && e.dependencies !== null && Yo(e.dependencies) ? (typeof _ == "function" && (Yf(t, i, _, l), q = t.memoizedState), (V = ai || dy(t, i, V, l, U, q, w) || e !== null && e.dependencies !== null && Yo(e.dependencies)) ? (L || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, q, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, q, w)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = q), f.props = l, f.state = q, f.context = w, l = V) : (typeof f.componentDidUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return f = l, rc(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, i = l && typeof i.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = cs(t, e.child, null, c), t.child = cs(t, null, i, c)) : Rt(e, t, i, c), t.memoizedState = f.state, e = t.child) : e = Aa(e, t, c), e
    }

    function Ny(e, t, i, l) {
        return as(), t.flags |= 256, Rt(e, t, i, l), t.child
    }
    var Xf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function If(e) {
        return {
            baseLanes: e,
            cachePool: gp()
        }
    }

    function Kf(e, t, i) {
        return e = e !== null ? e.childLanes & ~i : 0, t && (e |= yn), e
    }

    function jy(e, t, i) {
        var l = t.pendingProps,
            c = !1,
            f = (t.flags & 128) !== 0,
            h;
        if ((h = f) || (h = e !== null && e.memoizedState === null ? !1 : (ft.current & 2) !== 0), h && (c = !0, t.flags &= -129), h = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (qe) {
                if (c ? li(t) : ri(), (e = nt) ? (e = Lg(e, Nn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Wa !== null ? {
                            id: Fn,
                            overflow: Pn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, i = op(e), i.return = t, t.child = i, jt = t, nt = null)) : e = null, e === null) throw ti(t);
                return Rd(e) ? t.lanes = 32 : t.lanes = 536870912, null
            }
            var _ = l.children;
            return l = l.fallback, c ? (ri(), c = t.mode, _ = oc({
                mode: "hidden",
                children: _
            }, c), l = ns(l, c, i, null), _.return = t, l.return = t, _.sibling = l, t.child = _, l = t.child, l.memoizedState = If(i), l.childLanes = Kf(e, h, i), t.memoizedState = Xf, Er(null, l)) : (li(t), Ff(t, _))
        }
        var w = e.memoizedState;
        if (w !== null && (_ = w.dehydrated, _ !== null)) {
            if (f) t.flags & 256 ? (li(t), t.flags &= -257, t = Pf(e, t, i)) : t.memoizedState !== null ? (ri(), t.child = e.child, t.flags |= 128, t = null) : (ri(), _ = l.fallback, c = t.mode, l = oc({
                mode: "visible",
                children: l.children
            }, c), _ = ns(_, c, i, null), _.flags |= 2, l.return = t, _.return = t, l.sibling = _, t.child = l, cs(t, e.child, null, i), l = t.child, l.memoizedState = If(i), l.childLanes = Kf(e, h, i), t.memoizedState = Xf, t = Er(null, l));
            else if (li(t), Rd(_)) {
                if (h = _.nextSibling && _.nextSibling.dataset, h) var L = h.dgst;
                h = L, l = Error(r(419)), l.stack = "", l.digest = h, hr({
                    value: l,
                    source: null,
                    stack: null
                }), t = Pf(e, t, i)
            } else if (gt || tl(e, t, i, !1), h = (i & e.childLanes) !== 0, gt || h) {
                if (h = tt, h !== null && (l = Ft(h, i), l !== 0 && l !== w.retryLane)) throw w.retryLane = l, ts(e, l), an(h, e, l), Qf;
                Od(_) || gc(), t = Pf(e, t, i)
            } else Od(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, nt = On(_.nextSibling), jt = t, qe = !0, ei = null, Nn = !1, e !== null && fp(t, e), t = Ff(t, l.children), t.flags |= 4096);
            return t
        }
        return c ? (ri(), _ = l.fallback, c = t.mode, w = e.child, L = w.sibling, l = xa(w, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = w.subtreeFlags & 65011712, L !== null ? _ = xa(L, _) : (_ = ns(_, c, i, null), _.flags |= 2), _.return = t, l.return = t, l.sibling = _, t.child = l, Er(null, l), l = t.child, _ = e.child.memoizedState, _ === null ? _ = If(i) : (c = _.cachePool, c !== null ? (w = pt._currentValue, c = c.parent !== w ? {
            parent: w,
            pool: w
        } : c) : c = gp(), _ = {
            baseLanes: _.baseLanes | i,
            cachePool: c
        }), l.memoizedState = _, l.childLanes = Kf(e, h, i), t.memoizedState = Xf, Er(e.child, l)) : (li(t), i = e.child, e = i.sibling, i = xa(i, {
            mode: "visible",
            children: l.children
        }), i.return = t, i.sibling = null, e !== null && (h = t.deletions, h === null ? (t.deletions = [e], t.flags |= 16) : h.push(e)), t.child = i, t.memoizedState = null, i)
    }

    function Ff(e, t) {
        return t = oc({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function oc(e, t) {
        return e = dn(22, e, null, t), e.lanes = 0, e
    }

    function Pf(e, t, i) {
        return cs(t, e.child, null, i), e = Ff(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Oy(e, t, i) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), df(e.return, t, i)
    }

    function Jf(e, t, i, l, c, f) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: i,
            tailMode: c,
            treeForkCount: f
        } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = i, h.tailMode = c, h.treeForkCount = f)
    }

    function Ry(e, t, i) {
        var l = t.pendingProps,
            c = l.revealOrder,
            f = l.tail;
        l = l.children;
        var h = ft.current,
            _ = (h & 2) !== 0;
        if (_ ? (h = h & 1 | 2, t.flags |= 128) : h &= 1, X(ft, h), Rt(e, t, l, i), l = qe ? dr : 0, !_ && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Oy(e, i, t);
            else if (e.tag === 19) Oy(e, i, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        switch (c) {
            case "forwards":
                for (i = t.child, c = null; i !== null;) e = i.alternate, e !== null && Fo(e) === null && (c = i), i = i.sibling;
                i = c, i === null ? (c = t.child, t.child = null) : (c = i.sibling, i.sibling = null), Jf(t, !1, c, i, f, l);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (i = null, c = t.child, t.child = null; c !== null;) {
                    if (e = c.alternate, e !== null && Fo(e) === null) {
                        t.child = c;
                        break
                    }
                    e = c.sibling, c.sibling = i, i = c, c = e
                }
                Jf(t, !0, i, null, f, l);
                break;
            case "together":
                Jf(t, !1, null, null, void 0, l);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Aa(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies), ui |= t.lanes, (i & t.childLanes) === 0)
            if (e !== null) {
                if (tl(e, t, i, !1), (i & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, i = xa(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;) e = e.sibling, i = i.sibling = xa(e, e.pendingProps), i.return = t;
            i.sibling = null
        }
        return t.child
    }

    function Wf(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Yo(e)))
    }

    function Sx(e, t, i) {
        switch (t.tag) {
            case 3:
                Ee(t, t.stateNode.containerInfo), ni(t, pt, e.memoizedState.cache), as();
                break;
            case 27:
            case 5:
                cn(t);
                break;
            case 4:
                Ee(t, t.stateNode.containerInfo);
                break;
            case 10:
                ni(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return t.flags |= 128, wf(t), null;
                break;
            case 13:
                var l = t.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (li(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? jy(e, t, i) : (li(t), e = Aa(e, t, i), e !== null ? e.sibling : null);
                li(t);
                break;
            case 19:
                var c = (e.flags & 128) !== 0;
                if (l = (i & t.childLanes) !== 0, l || (tl(e, t, i, !1), l = (i & t.childLanes) !== 0), c) {
                    if (l) return Ry(e, t, i);
                    t.flags |= 128
                }
                if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), X(ft, ft.current), l) break;
                return null;
            case 22:
                return t.lanes = 0, Ty(e, t, i, t.pendingProps);
            case 24:
                ni(t, pt, e.memoizedState.cache)
        }
        return Aa(e, t, i)
    }

    function My(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) gt = !0;
            else {
                if (!Wf(e, i) && (t.flags & 128) === 0) return gt = !1, Sx(e, t, i);
                gt = (e.flags & 131072) !== 0
            }
        else gt = !1, qe && (t.flags & 1048576) !== 0 && up(t, dr, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    var l = t.pendingProps;
                    if (e = rs(t.elementType), t.type = e, typeof e == "function") af(e) ? (l = fs(e, l), t.tag = 1, t = Ay(null, t, e, l, i)) : (t.tag = 0, t = $f(null, t, e, l, i));
                    else {
                        if (e != null) {
                            var c = e.$$typeof;
                            if (c === k) {
                                t.tag = 11, t = _y(null, t, e, l, i);
                                break e
                            } else if (c === K) {
                                t.tag = 14, t = xy(null, t, e, l, i);
                                break e
                            }
                        }
                        throw t = ze(e) || e, Error(r(306, t, ""))
                    }
                }
                return t;
            case 0:
                return $f(e, t, t.type, t.pendingProps, i);
            case 1:
                return l = t.type, c = fs(l, t.pendingProps), Ay(e, t, l, c, i);
            case 3:
                e: {
                    if (Ee(t, t.stateNode.containerInfo), e === null) throw Error(r(387));l = t.pendingProps;
                    var f = t.memoizedState;c = f.element,
                    bf(e, t),
                    _r(t, l, null, i);
                    var h = t.memoizedState;
                    if (l = h.cache, ni(t, pt, l), l !== f.cache && hf(t, [pt], i, !0), br(), l = h.element, f.isDehydrated)
                        if (f = {
                                element: l,
                                isDehydrated: !1,
                                cache: h.cache
                            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                            t = Ny(e, t, l, i);
                            break e
                        } else if (l !== c) {
                        c = En(Error(r(424)), t), hr(c), t = Ny(e, t, l, i);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (nt = On(e.firstChild), jt = t, qe = !0, ei = null, Nn = !0, i = Tp(t, null, l, i), t.child = i; i;) i.flags = i.flags & -3 | 4096, i = i.sibling
                    } else {
                        if (as(), l === c) {
                            t = Aa(e, t, i);
                            break e
                        }
                        Rt(e, t, l, i)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return rc(e, t), e === null ? (i = Zg(t.type, null, t.pendingProps, null)) ? t.memoizedState = i : qe || (i = t.type, e = t.pendingProps, l = wc(de.current).createElement(i), l[Nt] = t, l[Pt] = e, Mt(l, i, e), wt(l), t.stateNode = l) : t.memoizedState = Zg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return cn(t), e === null && qe && (l = t.stateNode = Hg(t.type, t.pendingProps, de.current), jt = t, Nn = !0, c = nt, pi(t.type) ? (Md = c, nt = On(l.firstChild)) : nt = c), Rt(e, t, t.pendingProps.children, i), rc(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && qe && ((c = l = nt) && (l = Jx(l, t.type, t.pendingProps, Nn), l !== null ? (t.stateNode = l, jt = t, nt = On(l.firstChild), Nn = !1, c = !0) : c = !1), c || ti(t)), cn(t), c = t.type, f = t.pendingProps, h = e !== null ? e.memoizedProps : null, l = f.children, Ad(c, f) ? l = null : h !== null && Ad(c, h) && (t.flags |= 32), t.memoizedState !== null && (c = Cf(e, t, hx, null, null, i), Hr._currentValue = c), rc(e, t), Rt(e, t, l, i), t.child;
            case 6:
                return e === null && qe && ((e = i = nt) && (i = Wx(i, t.pendingProps, Nn), i !== null ? (t.stateNode = i, jt = t, nt = null, e = !0) : e = !1), e || ti(t)), null;
            case 13:
                return jy(e, t, i);
            case 4:
                return Ee(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = cs(t, null, l, i) : Rt(e, t, l, i), t.child;
            case 11:
                return _y(e, t, t.type, t.pendingProps, i);
            case 7:
                return Rt(e, t, t.pendingProps, i), t.child;
            case 8:
                return Rt(e, t, t.pendingProps.children, i), t.child;
            case 12:
                return Rt(e, t, t.pendingProps.children, i), t.child;
            case 10:
                return l = t.pendingProps, ni(t, t.type, l.value), Rt(e, t, l.children, i), t.child;
            case 9:
                return c = t.type._context, l = t.pendingProps.children, ss(t), c = Ot(c), l = l(c), t.flags |= 1, Rt(e, t, l, i), t.child;
            case 14:
                return xy(e, t, t.type, t.pendingProps, i);
            case 15:
                return Sy(e, t, t.type, t.pendingProps, i);
            case 19:
                return Ry(e, t, i);
            case 31:
                return xx(e, t, i);
            case 22:
                return Ty(e, t, i, t.pendingProps);
            case 24:
                return ss(t), l = Ot(pt), e === null ? (c = yf(), c === null && (c = tt, f = mf(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= i), c = f), t.memoizedState = {
                    parent: l,
                    cache: c
                }, vf(t), ni(t, pt, c)) : ((e.lanes & i) !== 0 && (bf(e, t), _r(t, null, null, i), br()), c = e.memoizedState, f = t.memoizedState, c.parent !== l ? (c = {
                    parent: l,
                    cache: l
                }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), ni(t, pt, l)) : (l = f.cache, ni(t, pt, l), l !== c.cache && hf(t, [pt], i, !0))), Rt(e, t, t.pendingProps.children, i), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }

    function Na(e) {
        e.flags |= 4
    }

    function ed(e, t, i, l, c) {
        if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
            if (e.flags |= 16777216, (c & 335544128) === c)
                if (e.stateNode.complete) e.flags |= 8192;
                else if (sg()) e.flags |= 8192;
            else throw os = $o, gf
        } else e.flags &= -16777217
    }

    function zy(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Ig(t))
            if (sg()) e.flags |= 8192;
            else throw os = $o, gf
    }

    function cc(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kt() : 536870912, e.lanes |= t, hl |= t)
    }

    function Cr(e, t) {
        if (!qe) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null;) t.alternate !== null && (i = t), t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var l = null; i !== null;) i.alternate !== null && (l = i), i = i.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function at(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            i = 0,
            l = 0;
        if (t)
            for (var c = e.child; c !== null;) i |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
        else
            for (c = e.child; c !== null;) i |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
        return e.subtreeFlags |= l, e.childLanes = i, t
    }

    function Tx(e, t, i) {
        var l = t.pendingProps;
        switch ( of (t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return at(t), null;
            case 1:
                return at(t), null;
            case 3:
                return i = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), wa(pt), $e(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (el(t) ? Na(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, uf())), at(t), null;
            case 26:
                var c = t.type,
                    f = t.memoizedState;
                return e === null ? (Na(t), f !== null ? (at(t), zy(t, f)) : (at(t), ed(t, c, null, l, i))) : f ? f !== e.memoizedState ? (Na(t), at(t), zy(t, f)) : (at(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Na(t), at(t), ed(t, c, e, l, i)), null;
            case 27:
                if (xn(t), i = de.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Na(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(r(166));
                        return at(t), null
                    }
                    e = J.current, el(t) ? dp(t) : (e = Hg(c, l, i), t.stateNode = e, Na(t))
                }
                return at(t), null;
            case 5:
                if (xn(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Na(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(r(166));
                        return at(t), null
                    }
                    if (f = J.current, el(t)) dp(t);
                    else {
                        var h = wc(de.current);
                        switch (f) {
                            case 1:
                                f = h.createElementNS("http://www.w3.org/2000/svg", c);
                                break;
                            case 2:
                                f = h.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                break;
                            default:
                                switch (c) {
                                    case "svg":
                                        f = h.createElementNS("http://www.w3.org/2000/svg", c);
                                        break;
                                    case "math":
                                        f = h.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                        break;
                                    case "script":
                                        f = h.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                                        break;
                                    case "select":
                                        f = typeof l.is == "string" ? h.createElement("select", {
                                            is: l.is
                                        }) : h.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                                        break;
                                    default:
                                        f = typeof l.is == "string" ? h.createElement(c, {
                                            is: l.is
                                        }) : h.createElement(c)
                                }
                        }
                        f[Nt] = t, f[Pt] = l;
                        e: for (h = t.child; h !== null;) {
                            if (h.tag === 5 || h.tag === 6) f.appendChild(h.stateNode);
                            else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                                h.child.return = h, h = h.child;
                                continue
                            }
                            if (h === t) break e;
                            for (; h.sibling === null;) {
                                if (h.return === null || h.return === t) break e;
                                h = h.return
                            }
                            h.sibling.return = h.return, h = h.sibling
                        }
                        t.stateNode = f;
                        e: switch (Mt(f, c, l), c) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!l.autoFocus;
                                break e;
                            case "img":
                                l = !0;
                                break e;
                            default:
                                l = !1
                        }
                        l && Na(t)
                    }
                }
                return at(t), ed(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, i), null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== l && Na(t);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
                    if (e = de.current, el(t)) {
                        if (e = t.stateNode, i = t.memoizedProps, l = null, c = jt, c !== null) switch (c.tag) {
                            case 27:
                            case 5:
                                l = c.memoizedProps
                        }
                        e[Nt] = t, e = !!(e.nodeValue === i || l !== null && l.suppressHydrationWarning === !0 || jg(e.nodeValue, i)), e || ti(t, !0)
                    } else e = wc(e).createTextNode(l), e[Nt] = t, t.stateNode = e
                }
                return at(t), null;
            case 31:
                if (i = t.memoizedState, e === null || e.memoizedState !== null) {
                    if (l = el(t), i !== null) {
                        if (e === null) {
                            if (!l) throw Error(r(318));
                            if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
                            e[Nt] = t
                        } else as(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        at(t), e = !1
                    } else i = uf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), e = !0;
                    if (!e) return t.flags & 256 ? (mn(t), t) : (mn(t), null);
                    if ((t.flags & 128) !== 0) throw Error(r(558))
                }
                return at(t), null;
            case 13:
                if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (c = el(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!c) throw Error(r(318));
                            if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(r(317));
                            c[Nt] = t
                        } else as(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        at(t), c = !1
                    } else c = uf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
                    if (!c) return t.flags & 256 ? (mn(t), t) : (mn(t), null)
                }
                return mn(t), (t.flags & 128) !== 0 ? (t.lanes = i, t) : (i = l !== null, e = e !== null && e.memoizedState !== null, i && (l = t.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== c && (l.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), cc(t, t.updateQueue), at(t), null);
            case 4:
                return $e(), e === null && Sd(t.stateNode.containerInfo), at(t), null;
            case 10:
                return wa(t.type), at(t), null;
            case 19:
                if (Z(ft), l = t.memoizedState, l === null) return at(t), null;
                if (c = (t.flags & 128) !== 0, f = l.rendering, f === null)
                    if (c) Cr(l, !1);
                    else {
                        if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (f = Fo(e), f !== null) {
                                    for (t.flags |= 128, Cr(l, !1), e = f.updateQueue, t.updateQueue = e, cc(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null;) rp(i, e), i = i.sibling;
                                    return X(ft, ft.current & 1 | 2), qe && Sa(t, l.treeForkCount), t.child
                                }
                                e = e.sibling
                            }
                        l.tail !== null && Ht() > mc && (t.flags |= 128, c = !0, Cr(l, !1), t.lanes = 4194304)
                    }
                else {
                    if (!c)
                        if (e = Fo(f), e !== null) {
                            if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, cc(t, e), Cr(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !qe) return at(t), null
                        } else 2 * Ht() - l.renderingStartTime > mc && i !== 536870912 && (t.flags |= 128, c = !0, Cr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f)
                }
                return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ht(), e.sibling = null, i = ft.current, X(ft, c ? i & 1 | 2 : i & 1), qe && Sa(t, l.treeForkCount), e) : (at(t), null);
            case 22:
            case 23:
                return mn(t), Tf(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), i = t.updateQueue, i !== null && cc(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== i && (t.flags |= 2048), e !== null && Z(ls), null;
            case 24:
                return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), wa(pt), at(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }

    function wx(e, t) {
        switch ( of (t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return wa(pt), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return xn(t), null;
            case 31:
                if (t.memoizedState !== null) {
                    if (mn(t), t.alternate === null) throw Error(r(340));
                    as()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
                if (mn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(r(340));
                    as()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Z(ft), null;
            case 4:
                return $e(), null;
            case 10:
                return wa(t.type), null;
            case 22:
            case 23:
                return mn(t), Tf(), e !== null && Z(ls), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return wa(pt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Dy(e, t) {
        switch ( of (t), t.tag) {
            case 3:
                wa(pt), $e();
                break;
            case 26:
            case 27:
            case 5:
                xn(t);
                break;
            case 4:
                $e();
                break;
            case 31:
                t.memoizedState !== null && mn(t);
                break;
            case 13:
                mn(t);
                break;
            case 19:
                Z(ft);
                break;
            case 10:
                wa(t.type);
                break;
            case 22:
            case 23:
                mn(t), Tf(), e !== null && Z(ls);
                break;
            case 24:
                wa(pt)
        }
    }

    function Ar(e, t) {
        try {
            var i = t.updateQueue,
                l = i !== null ? i.lastEffect : null;
            if (l !== null) {
                var c = l.next;
                i = c;
                do {
                    if ((i.tag & e) === e) {
                        l = void 0;
                        var f = i.create,
                            h = i.inst;
                        l = f(), h.destroy = l
                    }
                    i = i.next
                } while (i !== c)
            }
        } catch (_) {
            Pe(t, t.return, _)
        }
    }

    function oi(e, t, i) {
        try {
            var l = t.updateQueue,
                c = l !== null ? l.lastEffect : null;
            if (c !== null) {
                var f = c.next;
                l = f;
                do {
                    if ((l.tag & e) === e) {
                        var h = l.inst,
                            _ = h.destroy;
                        if (_ !== void 0) {
                            h.destroy = void 0, c = t;
                            var w = i,
                                L = _;
                            try {
                                L()
                            } catch (V) {
                                Pe(c, w, V)
                            }
                        }
                    }
                    l = l.next
                } while (l !== f)
            }
        } catch (V) {
            Pe(t, t.return, V)
        }
    }

    function ky(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var i = e.stateNode;
            try {
                Ep(t, i)
            } catch (l) {
                Pe(e, e.return, l)
            }
        }
    }

    function By(e, t, i) {
        i.props = fs(e.type, e.memoizedProps), i.state = e.memoizedState;
        try {
            i.componentWillUnmount()
        } catch (l) {
            Pe(e, t, l)
        }
    }

    function Nr(e, t) {
        try {
            var i = e.ref;
            if (i !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default:
                        l = e.stateNode
                }
                typeof i == "function" ? e.refCleanup = i(l) : i.current = l
            }
        } catch (c) {
            Pe(e, t, c)
        }
    }

    function Jn(e, t) {
        var i = e.ref,
            l = e.refCleanup;
        if (i !== null)
            if (typeof l == "function") try {
                l()
            } catch (c) {
                Pe(e, t, c)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof i == "function") try {
                i(null)
            } catch (c) {
                Pe(e, t, c)
            } else i.current = null
    }

    function Ly(e) {
        var t = e.type,
            i = e.memoizedProps,
            l = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    i.autoFocus && l.focus();
                    break e;
                case "img":
                    i.src ? l.src = i.src : i.srcSet && (l.srcset = i.srcSet)
            }
        }
        catch (c) {
            Pe(e, e.return, c)
        }
    }

    function td(e, t, i) {
        try {
            var l = e.stateNode;
            $x(l, e.type, i, t), l[Pt] = t
        } catch (c) {
            Pe(e, e.return, c)
        }
    }

    function Uy(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pi(e.type) || e.tag === 4
    }

    function nd(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Uy(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && pi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ad(e, t, i) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = ba));
        else if (l !== 4 && (l === 27 && pi(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
            for (ad(e, t, i), e = e.sibling; e !== null;) ad(e, t, i), e = e.sibling
    }

    function uc(e, t, i) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (l !== 4 && (l === 27 && pi(e.type) && (i = e.stateNode), e = e.child, e !== null))
            for (uc(e, t, i), e = e.sibling; e !== null;) uc(e, t, i), e = e.sibling
    }

    function qy(e) {
        var t = e.stateNode,
            i = e.memoizedProps;
        try {
            for (var l = e.type, c = t.attributes; c.length;) t.removeAttributeNode(c[0]);
            Mt(t, l, i), t[Nt] = e, t[Pt] = i
        } catch (f) {
            Pe(e, e.return, f)
        }
    }
    var ja = !1,
        vt = !1,
        id = !1,
        Hy = typeof WeakSet == "function" ? WeakSet : Set,
        Et = null;

    function Ex(e, t) {
        if (e = e.containerInfo, Ed = Rc, e = Jm(e), Fu(e)) {
            if ("selectionStart" in e) var i = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                i = (i = e.ownerDocument) && i.defaultView || window;
                var l = i.getSelection && i.getSelection();
                if (l && l.rangeCount !== 0) {
                    i = l.anchorNode;
                    var c = l.anchorOffset,
                        f = l.focusNode;
                    l = l.focusOffset;
                    try {
                        i.nodeType, f.nodeType
                    } catch {
                        i = null;
                        break e
                    }
                    var h = 0,
                        _ = -1,
                        w = -1,
                        L = 0,
                        V = 0,
                        G = e,
                        U = null;
                    t: for (;;) {
                        for (var q; G !== i || c !== 0 && G.nodeType !== 3 || (_ = h + c), G !== f || l !== 0 && G.nodeType !== 3 || (w = h + l), G.nodeType === 3 && (h += G.nodeValue.length), (q = G.firstChild) !== null;) U = G, G = q;
                        for (;;) {
                            if (G === e) break t;
                            if (U === i && ++L === c && (_ = h), U === f && ++V === l && (w = h), (q = G.nextSibling) !== null) break;
                            G = U, U = G.parentNode
                        }
                        G = q
                    }
                    i = _ === -1 || w === -1 ? null : {
                        start: _,
                        end: w
                    }
                } else i = null
            }
            i = i || {
                start: 0,
                end: 0
            }
        } else i = null;
        for (Cd = {
                focusedElem: e,
                selectionRange: i
            }, Rc = !1, Et = t; Et !== null;)
            if (t = Et, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Et = e;
            else
                for (; Et !== null;) {
                    switch (t = Et, f = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                                for (i = 0; i < e.length; i++) c = e[i], c.ref.impl = c.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && f !== null) {
                                e = void 0, i = t, c = f.memoizedProps, f = f.memoizedState, l = i.stateNode;
                                try {
                                    var se = fs(i.type, c);
                                    e = l.getSnapshotBeforeUpdate(se, f), l.__reactInternalSnapshotBeforeUpdate = e
                                } catch (he) {
                                    Pe(i, i.return, he)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9) jd(e);
                                else if (i === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        jd(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(r(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Et = e;
                        break
                    }
                    Et = t.return
                }
    }

    function Vy(e, t, i) {
        var l = i.flags;
        switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Ra(e, i), l & 4 && Ar(5, i);
                break;
            case 1:
                if (Ra(e, i), l & 4)
                    if (e = i.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (h) {
                        Pe(i, i.return, h)
                    } else {
                        var c = fs(i.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (h) {
                            Pe(i, i.return, h)
                        }
                    }
                l & 64 && ky(i), l & 512 && Nr(i, i.return);
                break;
            case 3:
                if (Ra(e, i), l & 64 && (e = i.updateQueue, e !== null)) {
                    if (t = null, i.child !== null) switch (i.child.tag) {
                        case 27:
                        case 5:
                            t = i.child.stateNode;
                            break;
                        case 1:
                            t = i.child.stateNode
                    }
                    try {
                        Ep(e, t)
                    } catch (h) {
                        Pe(i, i.return, h)
                    }
                }
                break;
            case 27:
                t === null && l & 4 && qy(i);
            case 26:
            case 5:
                Ra(e, i), t === null && l & 4 && Ly(i), l & 512 && Nr(i, i.return);
                break;
            case 12:
                Ra(e, i);
                break;
            case 31:
                Ra(e, i), l & 4 && Gy(e, i);
                break;
            case 13:
                Ra(e, i), l & 4 && Qy(e, i), l & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = Dx.bind(null, i), e2(e, i))));
                break;
            case 22:
                if (l = i.memoizedState !== null || ja, !l) {
                    t = t !== null && t.memoizedState !== null || vt, c = ja;
                    var f = vt;
                    ja = l, (vt = t) && !f ? Ma(e, i, (i.subtreeFlags & 8772) !== 0) : Ra(e, i), ja = c, vt = f
                }
                break;
            case 30:
                break;
            default:
                Ra(e, i)
        }
    }

    function Yy(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Yy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var st = null,
        Wt = !1;

    function Oa(e, t, i) {
        for (i = i.child; i !== null;) Zy(e, t, i), i = i.sibling
    }

    function Zy(e, t, i) {
        if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
            Vt.onCommitFiberUnmount(Ii, i)
        } catch {}
        switch (i.tag) {
            case 26:
                vt || Jn(i, t), Oa(e, t, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
                break;
            case 27:
                vt || Jn(i, t);
                var l = st,
                    c = Wt;
                pi(i.type) && (st = i.stateNode, Wt = !1), Oa(e, t, i), Lr(i.stateNode), st = l, Wt = c;
                break;
            case 5:
                vt || Jn(i, t);
            case 6:
                if (l = st, c = Wt, st = null, Oa(e, t, i), st = l, Wt = c, st !== null)
                    if (Wt) try {
                        (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode)
                    } catch (f) {
                        Pe(i, t, f)
                    } else try {
                        st.removeChild(i.stateNode)
                    } catch (f) {
                        Pe(i, t, f)
                    }
                break;
            case 18:
                st !== null && (Wt ? (e = st, kg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, i.stateNode), xl(e)) : kg(st, i.stateNode));
                break;
            case 4:
                l = st, c = Wt, st = i.stateNode.containerInfo, Wt = !0, Oa(e, t, i), st = l, Wt = c;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                oi(2, i, t), vt || oi(4, i, t), Oa(e, t, i);
                break;
            case 1:
                vt || (Jn(i, t), l = i.stateNode, typeof l.componentWillUnmount == "function" && By(i, t, l)), Oa(e, t, i);
                break;
            case 21:
                Oa(e, t, i);
                break;
            case 22:
                vt = (l = vt) || i.memoizedState !== null, Oa(e, t, i), vt = l;
                break;
            default:
                Oa(e, t, i)
        }
    }

    function Gy(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
                xl(e)
            } catch (i) {
                Pe(t, t.return, i)
            }
        }
    }

    function Qy(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            xl(e)
        } catch (i) {
            Pe(t, t.return, i)
        }
    }

    function Cx(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Hy), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Hy), t;
            default:
                throw Error(r(435, e.tag))
        }
    }

    function fc(e, t) {
        var i = Cx(e);
        t.forEach(function(l) {
            if (!i.has(l)) {
                i.add(l);
                var c = kx.bind(null, e, l);
                l.then(c, c)
            }
        })
    }

    function en(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var l = 0; l < i.length; l++) {
                var c = i[l],
                    f = e,
                    h = t,
                    _ = h;
                e: for (; _ !== null;) {
                    switch (_.tag) {
                        case 27:
                            if (pi(_.type)) {
                                st = _.stateNode, Wt = !1;
                                break e
                            }
                            break;
                        case 5:
                            st = _.stateNode, Wt = !1;
                            break e;
                        case 3:
                        case 4:
                            st = _.stateNode.containerInfo, Wt = !0;
                            break e
                    }
                    _ = _.return
                }
                if (st === null) throw Error(r(160));
                Zy(f, h, c), st = null, Wt = !1, f = c.alternate, f !== null && (f.return = null), c.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null;) $y(t, e), t = t.sibling
    }
    var Vn = null;

    function $y(e, t) {
        var i = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                en(t, e), tn(e), l & 4 && (oi(3, e, e.return), Ar(3, e), oi(5, e, e.return));
                break;
            case 1:
                en(t, e), tn(e), l & 512 && (vt || i === null || Jn(i, i.return)), l & 64 && ja && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? l : i.concat(l))));
                break;
            case 26:
                var c = Vn;
                if (en(t, e), tn(e), l & 512 && (vt || i === null || Jn(i, i.return)), l & 4) {
                    var f = i !== null ? i.memoizedState : null;
                    if (l = e.memoizedState, i === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type,
                                    i = e.memoizedProps,
                                    c = c.ownerDocument || c;t: switch (l) {
                                        case "title":
                                            f = c.getElementsByTagName("title")[0], (!f || f[tr] || f[Nt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(l), c.head.insertBefore(f, c.querySelector("head > title"))), Mt(f, l, i), f[Nt] = e, wt(f), l = f;
                                            break e;
                                        case "link":
                                            var h = $g("link", "href", c).get(l + (i.href || ""));
                                            if (h) {
                                                for (var _ = 0; _ < h.length; _++)
                                                    if (f = h[_], f.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && f.getAttribute("rel") === (i.rel == null ? null : i.rel) && f.getAttribute("title") === (i.title == null ? null : i.title) && f.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                                                        h.splice(_, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(l), Mt(f, l, i), c.head.appendChild(f);
                                            break;
                                        case "meta":
                                            if (h = $g("meta", "content", c).get(l + (i.content || ""))) {
                                                for (_ = 0; _ < h.length; _++)
                                                    if (f = h[_], f.getAttribute("content") === (i.content == null ? null : "" + i.content) && f.getAttribute("name") === (i.name == null ? null : i.name) && f.getAttribute("property") === (i.property == null ? null : i.property) && f.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && f.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                                                        h.splice(_, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(l), Mt(f, l, i), c.head.appendChild(f);
                                            break;
                                        default:
                                            throw Error(r(468, l))
                                    }
                                    f[Nt] = e,
                                    wt(f),
                                    l = f
                                }
                                e.stateNode = l
                            }
                    else Xg(c, e.type, e.stateNode);
                    else e.stateNode = Qg(c, l, e.memoizedProps);
                    else f !== l ? (f === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : f.count--, l === null ? Xg(c, e.type, e.stateNode) : Qg(c, l, e.memoizedProps)) : l === null && e.stateNode !== null && td(e, e.memoizedProps, i.memoizedProps)
                }
                break;
            case 27:
                en(t, e), tn(e), l & 512 && (vt || i === null || Jn(i, i.return)), i !== null && l & 4 && td(e, e.memoizedProps, i.memoizedProps);
                break;
            case 5:
                if (en(t, e), tn(e), l & 512 && (vt || i === null || Jn(i, i.return)), e.flags & 32) {
                    c = e.stateNode;
                    try {
                        Gs(c, "")
                    } catch (se) {
                        Pe(e, e.return, se)
                    }
                }
                l & 4 && e.stateNode != null && (c = e.memoizedProps, td(e, c, i !== null ? i.memoizedProps : c)), l & 1024 && (id = !0);
                break;
            case 6:
                if (en(t, e), tn(e), l & 4) {
                    if (e.stateNode === null) throw Error(r(162));
                    l = e.memoizedProps, i = e.stateNode;
                    try {
                        i.nodeValue = l
                    } catch (se) {
                        Pe(e, e.return, se)
                    }
                }
                break;
            case 3:
                if (Ac = null, c = Vn, Vn = Ec(t.containerInfo), en(t, e), Vn = c, tn(e), l & 4 && i !== null && i.memoizedState.isDehydrated) try {
                    xl(t.containerInfo)
                } catch (se) {
                    Pe(e, e.return, se)
                }
                id && (id = !1, Xy(e));
                break;
            case 4:
                l = Vn, Vn = Ec(e.stateNode.containerInfo), en(t, e), tn(e), Vn = l;
                break;
            case 12:
                en(t, e), tn(e);
                break;
            case 31:
                en(t, e), tn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fc(e, l)));
                break;
            case 13:
                en(t, e), tn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (hc = Ht()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fc(e, l)));
                break;
            case 22:
                c = e.memoizedState !== null;
                var w = i !== null && i.memoizedState !== null,
                    L = ja,
                    V = vt;
                if (ja = L || c, vt = V || w, en(t, e), vt = V, ja = L, tn(e), l & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (i === null || w || ja || vt || ds(e)), i = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (i === null) {
                            w = i = t;
                            try {
                                if (f = w.stateNode, c) h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    _ = w.stateNode;
                                    var G = w.memoizedProps.style,
                                        U = G != null && G.hasOwnProperty("display") ? G.display : null;
                                    _.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (se) {
                                Pe(w, w.return, se)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (i === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = c ? "" : w.memoizedProps
                            } catch (se) {
                                Pe(w, w.return, se)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (i === null) {
                            w = t;
                            try {
                                var q = w.stateNode;
                                c ? Bg(q, !0) : Bg(w.stateNode, !1)
                            } catch (se) {
                                Pe(w, w.return, se)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        i === t && (i = null), t = t.return
                    }
                    i === t && (i = null), t.sibling.return = t.return, t = t.sibling
                }
                l & 4 && (l = e.updateQueue, l !== null && (i = l.retryQueue, i !== null && (l.retryQueue = null, fc(e, i))));
                break;
            case 19:
                en(t, e), tn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fc(e, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                en(t, e), tn(e)
        }
    }

    function tn(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var i, l = e.return; l !== null;) {
                    if (Uy(l)) {
                        i = l;
                        break
                    }
                    l = l.return
                }
                if (i == null) throw Error(r(160));
                switch (i.tag) {
                    case 27:
                        var c = i.stateNode,
                            f = nd(e);
                        uc(e, f, c);
                        break;
                    case 5:
                        var h = i.stateNode;
                        i.flags & 32 && (Gs(h, ""), i.flags &= -33);
                        var _ = nd(e);
                        uc(e, _, h);
                        break;
                    case 3:
                    case 4:
                        var w = i.stateNode.containerInfo,
                            L = nd(e);
                        ad(e, L, w);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (V) {
                Pe(e, e.return, V)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Xy(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                Xy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function Ra(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Vy(e, t.alternate, t), t = t.sibling
    }

    function ds(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    oi(4, t, t.return), ds(t);
                    break;
                case 1:
                    Jn(t, t.return);
                    var i = t.stateNode;
                    typeof i.componentWillUnmount == "function" && By(t, t.return, i), ds(t);
                    break;
                case 27:
                    Lr(t.stateNode);
                case 26:
                case 5:
                    Jn(t, t.return), ds(t);
                    break;
                case 22:
                    t.memoizedState === null && ds(t);
                    break;
                case 30:
                    ds(t);
                    break;
                default:
                    ds(t)
            }
            e = e.sibling
        }
    }

    function Ma(e, t, i) {
        for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var l = t.alternate,
                c = e,
                f = t,
                h = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Ma(c, f, i), Ar(4, f);
                    break;
                case 1:
                    if (Ma(c, f, i), l = f, c = l.stateNode, typeof c.componentDidMount == "function") try {
                        c.componentDidMount()
                    } catch (L) {
                        Pe(l, l.return, L)
                    }
                    if (l = f, c = l.updateQueue, c !== null) {
                        var _ = l.stateNode;
                        try {
                            var w = c.shared.hiddenCallbacks;
                            if (w !== null)
                                for (c.shared.hiddenCallbacks = null, c = 0; c < w.length; c++) wp(w[c], _)
                        } catch (L) {
                            Pe(l, l.return, L)
                        }
                    }
                    i && h & 64 && ky(f), Nr(f, f.return);
                    break;
                case 27:
                    qy(f);
                case 26:
                case 5:
                    Ma(c, f, i), i && l === null && h & 4 && Ly(f), Nr(f, f.return);
                    break;
                case 12:
                    Ma(c, f, i);
                    break;
                case 31:
                    Ma(c, f, i), i && h & 4 && Gy(c, f);
                    break;
                case 13:
                    Ma(c, f, i), i && h & 4 && Qy(c, f);
                    break;
                case 22:
                    f.memoizedState === null && Ma(c, f, i), Nr(f, f.return);
                    break;
                case 30:
                    break;
                default:
                    Ma(c, f, i)
            }
            t = t.sibling
        }
    }

    function sd(e, t) {
        var i = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && mr(i))
    }

    function ld(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && mr(e))
    }

    function Yn(e, t, i, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Iy(e, t, i, l), t = t.sibling
    }

    function Iy(e, t, i, l) {
        var c = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Yn(e, t, i, l), c & 2048 && Ar(9, t);
                break;
            case 1:
                Yn(e, t, i, l);
                break;
            case 3:
                Yn(e, t, i, l), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && mr(e)));
                break;
            case 12:
                if (c & 2048) {
                    Yn(e, t, i, l), e = t.stateNode;
                    try {
                        var f = t.memoizedProps,
                            h = f.id,
                            _ = f.onPostCommit;
                        typeof _ == "function" && _(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (w) {
                        Pe(t, t.return, w)
                    }
                } else Yn(e, t, i, l);
                break;
            case 31:
                Yn(e, t, i, l);
                break;
            case 13:
                Yn(e, t, i, l);
                break;
            case 23:
                break;
            case 22:
                f = t.stateNode, h = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? Yn(e, t, i, l) : jr(e, t) : f._visibility & 2 ? Yn(e, t, i, l) : (f._visibility |= 2, ul(e, t, i, l, (t.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && sd(h, t);
                break;
            case 24:
                Yn(e, t, i, l), c & 2048 && ld(t.alternate, t);
                break;
            default:
                Yn(e, t, i, l)
        }
    }

    function ul(e, t, i, l, c) {
        for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
            var f = e,
                h = t,
                _ = i,
                w = l,
                L = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    ul(f, h, _, w, c), Ar(8, h);
                    break;
                case 23:
                    break;
                case 22:
                    var V = h.stateNode;
                    h.memoizedState !== null ? V._visibility & 2 ? ul(f, h, _, w, c) : jr(f, h) : (V._visibility |= 2, ul(f, h, _, w, c)), c && L & 2048 && sd(h.alternate, h);
                    break;
                case 24:
                    ul(f, h, _, w, c), c && L & 2048 && ld(h.alternate, h);
                    break;
                default:
                    ul(f, h, _, w, c)
            }
            t = t.sibling
        }
    }

    function jr(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var i = e,
                    l = t,
                    c = l.flags;
                switch (l.tag) {
                    case 22:
                        jr(i, l), c & 2048 && sd(l.alternate, l);
                        break;
                    case 24:
                        jr(i, l), c & 2048 && ld(l.alternate, l);
                        break;
                    default:
                        jr(i, l)
                }
                t = t.sibling
            }
    }
    var Or = 8192;

    function fl(e, t, i) {
        if (e.subtreeFlags & Or)
            for (e = e.child; e !== null;) Ky(e, t, i), e = e.sibling
    }

    function Ky(e, t, i) {
        switch (e.tag) {
            case 26:
                fl(e, t, i), e.flags & Or && e.memoizedState !== null && d2(i, Vn, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                fl(e, t, i);
                break;
            case 3:
            case 4:
                var l = Vn;
                Vn = Ec(e.stateNode.containerInfo), fl(e, t, i), Vn = l;
                break;
            case 22:
                e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Or, Or = 16777216, fl(e, t, i), Or = l) : fl(e, t, i));
                break;
            default:
                fl(e, t, i)
        }
    }

    function Fy(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function Rr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var l = t[i];
                    Et = l, Jy(l, e)
                }
            Fy(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Py(e), e = e.sibling
    }

    function Py(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Rr(e), e.flags & 2048 && oi(9, e, e.return);
                break;
            case 3:
                Rr(e);
                break;
            case 12:
                Rr(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, dc(e)) : Rr(e);
                break;
            default:
                Rr(e)
        }
    }

    function dc(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var l = t[i];
                    Et = l, Jy(l, e)
                }
            Fy(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    oi(8, t, t.return), dc(t);
                    break;
                case 22:
                    i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, dc(t));
                    break;
                default:
                    dc(t)
            }
            e = e.sibling
        }
    }

    function Jy(e, t) {
        for (; Et !== null;) {
            var i = Et;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    oi(8, i, t);
                    break;
                case 23:
                case 22:
                    if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                        var l = i.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    mr(i.memoizedState.cache)
            }
            if (l = i.child, l !== null) l.return = i, Et = l;
            else e: for (i = e; Et !== null;) {
                l = Et;
                var c = l.sibling,
                    f = l.return;
                if (Yy(l), l === i) {
                    Et = null;
                    break e
                }
                if (c !== null) {
                    c.return = f, Et = c;
                    break e
                }
                Et = f
            }
        }
    }
    var Ax = {
            getCacheForType: function(e) {
                var t = Ot(pt),
                    i = t.data.get(e);
                return i === void 0 && (i = e(), t.data.set(e, i)), i
            },
            cacheSignal: function() {
                return Ot(pt).controller.signal
            }
        },
        Nx = typeof WeakMap == "function" ? WeakMap : Map,
        Xe = 0,
        tt = null,
        De = null,
        Be = 0,
        Fe = 0,
        pn = null,
        ci = !1,
        dl = !1,
        rd = !1,
        za = 0,
        ot = 0,
        ui = 0,
        hs = 0,
        od = 0,
        yn = 0,
        hl = 0,
        Mr = null,
        nn = null,
        cd = !1,
        hc = 0,
        Wy = 0,
        mc = 1 / 0,
        pc = null,
        fi = null,
        _t = 0,
        di = null,
        ml = null,
        Da = 0,
        ud = 0,
        fd = null,
        eg = null,
        zr = 0,
        dd = null;

    function gn() {
        return (Xe & 2) !== 0 && Be !== 0 ? Be & -Be : z.T !== null ? vd() : Ru()
    }

    function tg() {
        if (yn === 0)
            if ((Be & 536870912) === 0 || qe) {
                var e = Bs;
                Bs <<= 1, (Bs & 3932160) === 0 && (Bs = 262144), yn = e
            } else yn = 536870912;
        return e = hn.current, e !== null && (e.flags |= 32), yn
    }

    function an(e, t, i) {
        (e === tt && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (pl(e, 0), hi(e, Be, yn, !1)), lt(e, i), ((Xe & 2) === 0 || e !== tt) && (e === tt && ((Xe & 2) === 0 && (hs |= i), ot === 4 && hi(e, Be, yn, !1)), Wn(e))
    }

    function ng(e, t, i) {
        if ((Xe & 6) !== 0) throw Error(r(327));
        var l = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || it(e, t),
            c = l ? Rx(e, t) : md(e, t, !0),
            f = l;
        do {
            if (c === 0) {
                dl && !l && hi(e, t, 0, !1);
                break
            } else {
                if (i = e.current.alternate, f && !jx(i)) {
                    c = md(e, t, !1), f = !1;
                    continue
                }
                if (c === 2) {
                    if (f = t, e.errorRecoveryDisabledLanes & f) var h = 0;
                    else h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var _ = e;c = Mr;
                            var w = _.current.memoizedState.isDehydrated;
                            if (w && (pl(_, h).flags |= 256), h = md(_, h, !1), h !== 2) {
                                if (rd && !w) {
                                    _.errorRecoveryDisabledLanes |= f, hs |= f, c = 4;
                                    break e
                                }
                                f = nn, nn = c, f !== null && (nn === null ? nn = f : nn.push.apply(nn, f))
                            }
                            c = h
                        }
                        if (f = !1, c !== 2) continue
                    }
                }
                if (c === 1) {
                    pl(e, 0), hi(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e, f = c, f) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            hi(l, t, yn, !ci);
                            break e;
                        case 2:
                            nn = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (c = hc + 300 - Ht(), 10 < c)) {
                        if (hi(l, t, yn, !ci), ge(l, 0, !0) !== 0) break e;
                        Da = t, l.timeoutHandle = zg(ag.bind(null, l, i, nn, pc, cd, t, yn, hs, hl, ci, f, "Throttled", -0, 0), c);
                        break e
                    }
                    ag(l, i, nn, pc, cd, t, yn, hs, hl, ci, f, null, -0, 0)
                }
            }
            break
        } while (!0);
        Wn(e)
    }

    function ag(e, t, i, l, c, f, h, _, w, L, V, G, U, q) {
        if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
            G = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: ba
            }, Ky(t, f, G);
            var se = (f & 62914560) === f ? hc - Ht() : (f & 4194048) === f ? Wy - Ht() : 0;
            if (se = h2(G, se), se !== null) {
                Da = f, e.cancelPendingCommit = se(fg.bind(null, e, t, f, i, l, c, h, _, w, V, G, null, U, q)), hi(e, f, h, !L);
                return
            }
        }
        fg(e, t, f, i, l, c, h, _, w)
    }

    function jx(e) {
        for (var t = e;;) {
            var i = t.tag;
            if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
                for (var l = 0; l < i.length; l++) {
                    var c = i[l],
                        f = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!fn(f(), c)) return !1
                    } catch {
                        return !1
                    }
                }
            if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function hi(e, t, i, l) {
        t &= ~od, t &= ~hs, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
        for (var c = t; 0 < c;) {
            var f = 31 - Dt(c),
                h = 1 << f;
            l[f] = -1, c &= ~h
        }
        i !== 0 && Fi(e, i, t)
    }

    function yc() {
        return (Xe & 6) === 0 ? (Dr(0), !1) : !0
    }

    function hd() {
        if (De !== null) {
            if (Fe === 0) var e = De.return;
            else e = De, Ta = is = null, jf(e), sl = null, yr = 0, e = De;
            for (; e !== null;) Dy(e.alternate, e), e = e.return;
            De = null
        }
    }

    function pl(e, t) {
        var i = e.timeoutHandle;
        i !== -1 && (e.timeoutHandle = -1, Kx(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Da = 0, hd(), tt = e, De = i = xa(e.current, null), Be = t, Fe = 0, pn = null, ci = !1, dl = it(e, t), rd = !1, hl = yn = od = hs = ui = ot = 0, nn = Mr = null, cd = !1, (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements, l &= t; 0 < l;) {
                var c = 31 - Dt(l),
                    f = 1 << c;
                t |= e[c], l &= ~f
            }
        return za = t, Lo(), i
    }

    function ig(e, t) {
        Ce = null, z.H = wr, t === il || t === Qo ? (t = _p(), Fe = 3) : t === gf ? (t = _p(), Fe = 4) : Fe = t === Qf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, pn = t, De === null && (ot = 1, sc(e, En(t, e.current)))
    }

    function sg() {
        var e = hn.current;
        return e === null ? !0 : (Be & 4194048) === Be ? jn === null : (Be & 62914560) === Be || (Be & 536870912) !== 0 ? e === jn : !1
    }

    function lg() {
        var e = z.H;
        return z.H = wr, e === null ? wr : e
    }

    function rg() {
        var e = z.A;
        return z.A = Ax, e
    }

    function gc() {
        ot = 4, ci || (Be & 4194048) !== Be && hn.current !== null || (dl = !0), (ui & 134217727) === 0 && (hs & 134217727) === 0 || tt === null || hi(tt, Be, yn, !1)
    }

    function md(e, t, i) {
        var l = Xe;
        Xe |= 2;
        var c = lg(),
            f = rg();
        (tt !== e || Be !== t) && (pc = null, pl(e, t)), t = !1;
        var h = ot;
        e: do try {
                if (Fe !== 0 && De !== null) {
                    var _ = De,
                        w = pn;
                    switch (Fe) {
                        case 8:
                            hd(), h = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            hn.current === null && (t = !0);
                            var L = Fe;
                            if (Fe = 0, pn = null, yl(e, _, w, L), i && dl) {
                                h = 0;
                                break e
                            }
                            break;
                        default:
                            L = Fe, Fe = 0, pn = null, yl(e, _, w, L)
                    }
                }
                Ox(), h = ot;
                break
            } catch (V) {
                ig(e, V)
            }
            while (!0);
            return t && e.shellSuspendCounter++, Ta = is = null, Xe = l, z.H = c, z.A = f, De === null && (tt = null, Be = 0, Lo()), h
    }

    function Ox() {
        for (; De !== null;) og(De)
    }

    function Rx(e, t) {
        var i = Xe;
        Xe |= 2;
        var l = lg(),
            c = rg();
        tt !== e || Be !== t ? (pc = null, mc = Ht() + 500, pl(e, t)) : dl = it(e, t);
        e: do try {
                if (Fe !== 0 && De !== null) {
                    t = De;
                    var f = pn;
                    t: switch (Fe) {
                        case 1:
                            Fe = 0, pn = null, yl(e, t, f, 1);
                            break;
                        case 2:
                        case 9:
                            if (vp(f)) {
                                Fe = 0, pn = null, cg(t);
                                break
                            }
                            t = function() {
                                Fe !== 2 && Fe !== 9 || tt !== e || (Fe = 7), Wn(e)
                            }, f.then(t, t);
                            break e;
                        case 3:
                            Fe = 7;
                            break e;
                        case 4:
                            Fe = 5;
                            break e;
                        case 7:
                            vp(f) ? (Fe = 0, pn = null, cg(t)) : (Fe = 0, pn = null, yl(e, t, f, 7));
                            break;
                        case 5:
                            var h = null;
                            switch (De.tag) {
                                case 26:
                                    h = De.memoizedState;
                                case 5:
                                case 27:
                                    var _ = De;
                                    if (h ? Ig(h) : _.stateNode.complete) {
                                        Fe = 0, pn = null;
                                        var w = _.sibling;
                                        if (w !== null) De = w;
                                        else {
                                            var L = _.return;
                                            L !== null ? (De = L, vc(L)) : De = null
                                        }
                                        break t
                                    }
                            }
                            Fe = 0, pn = null, yl(e, t, f, 5);
                            break;
                        case 6:
                            Fe = 0, pn = null, yl(e, t, f, 6);
                            break;
                        case 8:
                            hd(), ot = 6;
                            break e;
                        default:
                            throw Error(r(462))
                    }
                }
                Mx();
                break
            } catch (V) {
                ig(e, V)
            }
            while (!0);
            return Ta = is = null, z.H = l, z.A = c, Xe = i, De !== null ? 0 : (tt = null, Be = 0, Lo(), ot)
    }

    function Mx() {
        for (; De !== null && !qt();) og(De)
    }

    function og(e) {
        var t = My(e.alternate, e, za);
        e.memoizedProps = e.pendingProps, t === null ? vc(e) : De = t
    }

    function cg(e) {
        var t = e,
            i = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Cy(i, t, t.pendingProps, t.type, void 0, Be);
                break;
            case 11:
                t = Cy(i, t, t.pendingProps, t.type.render, t.ref, Be);
                break;
            case 5:
                jf(t);
            default:
                Dy(i, t), t = De = rp(t, za), t = My(i, t, za)
        }
        e.memoizedProps = e.pendingProps, t === null ? vc(e) : De = t
    }

    function yl(e, t, i, l) {
        Ta = is = null, jf(t), sl = null, yr = 0;
        var c = t.return;
        try {
            if (_x(e, c, t, i, Be)) {
                ot = 1, sc(e, En(i, e.current)), De = null;
                return
            }
        } catch (f) {
            if (c !== null) throw De = c, f;
            ot = 1, sc(e, En(i, e.current)), De = null;
            return
        }
        t.flags & 32768 ? (qe || l === 1 ? e = !0 : dl || (Be & 536870912) !== 0 ? e = !1 : (ci = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = hn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ug(t, e)) : vc(t)
    }

    function vc(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                ug(t, ci);
                return
            }
            e = t.return;
            var i = Tx(t.alternate, t, za);
            if (i !== null) {
                De = i;
                return
            }
            if (t = t.sibling, t !== null) {
                De = t;
                return
            }
            De = t = e
        } while (t !== null);
        ot === 0 && (ot = 5)
    }

    function ug(e, t) {
        do {
            var i = wx(e.alternate, e);
            if (i !== null) {
                i.flags &= 32767, De = i;
                return
            }
            if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
                De = e;
                return
            }
            De = e = i
        } while (e !== null);
        ot = 6, De = null
    }

    function fg(e, t, i, l, c, f, h, _, w) {
        e.cancelPendingCommit = null;
        do bc(); while (_t !== 0);
        if ((Xe & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (f = t.lanes | t.childLanes, f |= tf, It(e, i, f, h, _, w), e === tt && (De = tt = null, Be = 0), ml = t, di = e, Da = i, ud = f, fd = c, eg = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Bx(Xi, function() {
                    return yg(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
                l = z.T, z.T = null, c = Q.p, Q.p = 2, h = Xe, Xe |= 4;
                try {
                    Ex(e, t, i)
                } finally {
                    Xe = h, Q.p = c, z.T = l
                }
            }
            _t = 1, dg(), hg(), mg()
        }
    }

    function dg() {
        if (_t === 1) {
            _t = 0;
            var e = di,
                t = ml,
                i = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || i) {
                i = z.T, z.T = null;
                var l = Q.p;
                Q.p = 2;
                var c = Xe;
                Xe |= 4;
                try {
                    $y(t, e);
                    var f = Cd,
                        h = Jm(e.containerInfo),
                        _ = f.focusedElem,
                        w = f.selectionRange;
                    if (h !== _ && _ && _.ownerDocument && Pm(_.ownerDocument.documentElement, _)) {
                        if (w !== null && Fu(_)) {
                            var L = w.start,
                                V = w.end;
                            if (V === void 0 && (V = L), "selectionStart" in _) _.selectionStart = L, _.selectionEnd = Math.min(V, _.value.length);
                            else {
                                var G = _.ownerDocument || document,
                                    U = G && G.defaultView || window;
                                if (U.getSelection) {
                                    var q = U.getSelection(),
                                        se = _.textContent.length,
                                        he = Math.min(w.start, se),
                                        et = w.end === void 0 ? he : Math.min(w.end, se);
                                    !q.extend && he > et && (h = et, et = he, he = h);
                                    var M = Fm(_, he),
                                        N = Fm(_, et);
                                    if (M && N && (q.rangeCount !== 1 || q.anchorNode !== M.node || q.anchorOffset !== M.offset || q.focusNode !== N.node || q.focusOffset !== N.offset)) {
                                        var B = G.createRange();
                                        B.setStart(M.node, M.offset), q.removeAllRanges(), he > et ? (q.addRange(B), q.extend(N.node, N.offset)) : (B.setEnd(N.node, N.offset), q.addRange(B))
                                    }
                                }
                            }
                        }
                        for (G = [], q = _; q = q.parentNode;) q.nodeType === 1 && G.push({
                            element: q,
                            left: q.scrollLeft,
                            top: q.scrollTop
                        });
                        for (typeof _.focus == "function" && _.focus(), _ = 0; _ < G.length; _++) {
                            var Y = G[_];
                            Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top
                        }
                    }
                    Rc = !!Ed, Cd = Ed = null
                } finally {
                    Xe = c, Q.p = l, z.T = i
                }
            }
            e.current = t, _t = 2
        }
    }

    function hg() {
        if (_t === 2) {
            _t = 0;
            var e = di,
                t = ml,
                i = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || i) {
                i = z.T, z.T = null;
                var l = Q.p;
                Q.p = 2;
                var c = Xe;
                Xe |= 4;
                try {
                    Vy(e, t.alternate, t)
                } finally {
                    Xe = c, Q.p = l, z.T = i
                }
            }
            _t = 3
        }
    }

    function mg() {
        if (_t === 4 || _t === 3) {
            _t = 0, Ia();
            var e = di,
                t = ml,
                i = Da,
                l = eg;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _t = 5 : (_t = 0, ml = di = null, pg(e, e.pendingLanes));
            var c = e.pendingLanes;
            if (c === 0 && (fi = null), qn(i), t = t.stateNode, Vt && typeof Vt.onCommitFiberRoot == "function") try {
                Vt.onCommitFiberRoot(Ii, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                t = z.T, c = Q.p, Q.p = 2, z.T = null;
                try {
                    for (var f = e.onRecoverableError, h = 0; h < l.length; h++) {
                        var _ = l[h];
                        f(_.value, {
                            componentStack: _.stack
                        })
                    }
                } finally {
                    z.T = t, Q.p = c
                }
            }(Da & 3) !== 0 && bc(), Wn(e), c = e.pendingLanes, (i & 261930) !== 0 && (c & 42) !== 0 ? e === dd ? zr++ : (zr = 0, dd = e) : zr = 0, Dr(0)
        }
    }

    function pg(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, mr(t)))
    }

    function bc() {
        return dg(), hg(), mg(), yg()
    }

    function yg() {
        if (_t !== 5) return !1;
        var e = di,
            t = ud;
        ud = 0;
        var i = qn(Da),
            l = z.T,
            c = Q.p;
        try {
            Q.p = 32 > i ? 32 : i, z.T = null, i = fd, fd = null;
            var f = di,
                h = Da;
            if (_t = 0, ml = di = null, Da = 0, (Xe & 6) !== 0) throw Error(r(331));
            var _ = Xe;
            if (Xe |= 4, Py(f.current), Iy(f, f.current, h, i), Xe = _, Dr(0, !1), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
                Vt.onPostCommitFiberRoot(Ii, f)
            } catch {}
            return !0
        } finally {
            Q.p = c, z.T = l, pg(e, t)
        }
    }

    function gg(e, t, i) {
        t = En(i, t), t = Gf(e.stateNode, t, 2), e = si(e, t, 2), e !== null && (lt(e, 2), Wn(e))
    }

    function Pe(e, t, i) {
        if (e.tag === 3) gg(e, e, i);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    gg(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fi === null || !fi.has(l))) {
                        e = En(i, e), i = vy(2), l = si(t, i, 2), l !== null && (by(i, l, t, e), lt(l, 2), Wn(l));
                        break
                    }
                }
                t = t.return
            }
    }

    function pd(e, t, i) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Nx;
            var c = new Set;
            l.set(t, c)
        } else c = l.get(t), c === void 0 && (c = new Set, l.set(t, c));
        c.has(i) || (rd = !0, c.add(i), e = zx.bind(null, e, t, i), t.then(e, e))
    }

    function zx(e, t, i) {
        var l = e.pingCache;
        l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, tt === e && (Be & i) === i && (ot === 4 || ot === 3 && (Be & 62914560) === Be && 300 > Ht() - hc ? (Xe & 2) === 0 && pl(e, 0) : od |= i, hl === Be && (hl = 0)), Wn(e)
    }

    function vg(e, t) {
        t === 0 && (t = kt()), e = ts(e, t), e !== null && (lt(e, t), Wn(e))
    }

    function Dx(e) {
        var t = e.memoizedState,
            i = 0;
        t !== null && (i = t.retryLane), vg(e, i)
    }

    function kx(e, t) {
        var i = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var l = e.stateNode,
                    c = e.memoizedState;
                c !== null && (i = c.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        l !== null && l.delete(t), vg(e, i)
    }

    function Bx(e, t) {
        return Pl(e, t)
    }
    var _c = null,
        gl = null,
        yd = !1,
        xc = !1,
        gd = !1,
        mi = 0;

    function Wn(e) {
        e !== gl && e.next === null && (gl === null ? _c = gl = e : gl = gl.next = e), xc = !0, yd || (yd = !0, Ux())
    }

    function Dr(e, t) {
        if (!gd && xc) {
            gd = !0;
            do
                for (var i = !1, l = _c; l !== null;) {
                    if (e !== 0) {
                        var c = l.pendingLanes;
                        if (c === 0) var f = 0;
                        else {
                            var h = l.suspendedLanes,
                                _ = l.pingedLanes;
                            f = (1 << 31 - Dt(42 | e) + 1) - 1, f &= c & ~(h & ~_), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (i = !0, Sg(l, f))
                    } else f = Be, f = ge(l, l === tt ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (f & 3) === 0 || it(l, f) || (i = !0, Sg(l, f));
                    l = l.next
                }
            while (i);
            gd = !1
        }
    }

    function Lx() {
        bg()
    }

    function bg() {
        xc = yd = !1;
        var e = 0;
        mi !== 0 && Ix() && (e = mi);
        for (var t = Ht(), i = null, l = _c; l !== null;) {
            var c = l.next,
                f = _g(l, t);
            f === 0 ? (l.next = null, i === null ? _c = c : i.next = c, c === null && (gl = i)) : (i = l, (e !== 0 || (f & 3) !== 0) && (xc = !0)), l = c
        }
        _t !== 0 && _t !== 5 || Dr(e), mi !== 0 && (mi = 0)
    }

    function _g(e, t) {
        for (var i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f;) {
            var h = 31 - Dt(f),
                _ = 1 << h,
                w = c[h];
            w === -1 ? ((_ & i) === 0 || (_ & l) !== 0) && (c[h] = Tt(_, t)) : w <= t && (e.expiredLanes |= _), f &= ~_
        }
        if (t = tt, i = Be, i = ge(e, e === t ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, i === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Jl(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((i & 3) === 0 || it(e, i)) {
            if (t = i & -i, t === e.callbackPriority) return t;
            switch (l !== null && Jl(l), qn(i)) {
                case 2:
                case 8:
                    i = wo;
                    break;
                case 32:
                    i = Xi;
                    break;
                case 268435456:
                    i = ga;
                    break;
                default:
                    i = Xi
            }
            return l = xg.bind(null, e), i = Pl(i, l), e.callbackPriority = t, e.callbackNode = i, t
        }
        return l !== null && l !== null && Jl(l), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function xg(e, t) {
        if (_t !== 0 && _t !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var i = e.callbackNode;
        if (bc() && e.callbackNode !== i) return null;
        var l = Be;
        return l = ge(e, e === tt ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (ng(e, l, t), _g(e, Ht()), e.callbackNode != null && e.callbackNode === i ? xg.bind(null, e) : null)
    }

    function Sg(e, t) {
        if (bc()) return null;
        ng(e, t, !0)
    }

    function Ux() {
        Fx(function() {
            (Xe & 6) !== 0 ? Pl($i, Lx) : bg()
        })
    }

    function vd() {
        if (mi === 0) {
            var e = nl;
            e === 0 && (e = ks, ks <<= 1, (ks & 261888) === 0 && (ks = 256)), mi = e
        }
        return mi
    }

    function Tg(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : jo("" + e)
    }

    function wg(e, t) {
        var i = t.ownerDocument.createElement("input");
        return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e
    }

    function qx(e, t, i, l, c) {
        if (t === "submit" && i && i.stateNode === c) {
            var f = Tg((c[Pt] || null).action),
                h = l.submitter;
            h && (t = (t = h[Pt] || null) ? Tg(t.formAction) : h.getAttribute("formAction"), t !== null && (f = t, h = null));
            var _ = new zo("action", "action", null, l, c);
            e.push({
                event: _,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (mi !== 0) {
                                var w = h ? wg(c, h) : new FormData(c);
                                Uf(i, {
                                    pending: !0,
                                    data: w,
                                    method: c.method,
                                    action: f
                                }, null, w)
                            }
                        } else typeof f == "function" && (_.preventDefault(), w = h ? wg(c, h) : new FormData(c), Uf(i, {
                            pending: !0,
                            data: w,
                            method: c.method,
                            action: f
                        }, f, w))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var bd = 0; bd < ef.length; bd++) {
        var _d = ef[bd],
            Hx = _d.toLowerCase(),
            Vx = _d[0].toUpperCase() + _d.slice(1);
        Hn(Hx, "on" + Vx)
    }
    Hn(tp, "onAnimationEnd"), Hn(np, "onAnimationIteration"), Hn(ap, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(ax, "onTransitionRun"), Hn(ix, "onTransitionStart"), Hn(sx, "onTransitionCancel"), Hn(ip, "onTransitionEnd"), Ys("onMouseEnter", ["mouseout", "mouseover"]), Ys("onMouseLeave", ["mouseout", "mouseover"]), Ys("onPointerEnter", ["pointerout", "pointerover"]), Ys("onPointerLeave", ["pointerout", "pointerover"]), Pi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Yx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kr));

    function Eg(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var l = e[i],
                c = l.event;
            l = l.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var _ = l[h],
                            w = _.instance,
                            L = _.currentTarget;
                        if (_ = _.listener, w !== f && c.isPropagationStopped()) break e;
                        f = _, c.currentTarget = L;
                        try {
                            f(c)
                        } catch (V) {
                            Bo(V)
                        }
                        c.currentTarget = null, f = w
                    } else
                        for (h = 0; h < l.length; h++) {
                            if (_ = l[h], w = _.instance, L = _.currentTarget, _ = _.listener, w !== f && c.isPropagationStopped()) break e;
                            f = _, c.currentTarget = L;
                            try {
                                f(c)
                            } catch (V) {
                                Bo(V)
                            }
                            c.currentTarget = null, f = w
                        }
            }
        }
    }

    function ke(e, t) {
        var i = t[Mu];
        i === void 0 && (i = t[Mu] = new Set);
        var l = e + "__bubble";
        i.has(l) || (Cg(t, e, 2, !1), i.add(l))
    }

    function xd(e, t, i) {
        var l = 0;
        t && (l |= 4), Cg(i, e, l, t)
    }
    var Sc = "_reactListening" + Math.random().toString(36).slice(2);

    function Sd(e) {
        if (!e[Sc]) {
            e[Sc] = !0, bm.forEach(function(i) {
                i !== "selectionchange" && (Yx.has(i) || xd(i, !1, e), xd(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Sc] || (t[Sc] = !0, xd("selectionchange", !1, t))
        }
    }

    function Cg(e, t, i, l) {
        switch (tv(t)) {
            case 2:
                var c = y2;
                break;
            case 8:
                c = g2;
                break;
            default:
                c = Ld
        }
        i = c.bind(null, t, i, e), c = void 0, !Vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: c
        }) : e.addEventListener(t, i, !0) : c !== void 0 ? e.addEventListener(t, i, {
            passive: c
        }) : e.addEventListener(t, i, !1)
    }

    function Td(e, t, i, l, c) {
        var f = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var h = l.tag;
            if (h === 3 || h === 4) {
                var _ = l.stateNode.containerInfo;
                if (_ === c) break;
                if (h === 4)
                    for (h = l.return; h !== null;) {
                        var w = h.tag;
                        if ((w === 3 || w === 4) && h.stateNode.containerInfo === c) return;
                        h = h.return
                    }
                for (; _ !== null;) {
                    if (h = qs(_), h === null) return;
                    if (w = h.tag, w === 5 || w === 6 || w === 26 || w === 27) {
                        l = f = h;
                        continue e
                    }
                    _ = _.parentNode
                }
            }
            l = l.return
        }
        Rm(function() {
            var L = f,
                V = qu(i),
                G = [];
            e: {
                var U = sp.get(e);
                if (U !== void 0) {
                    var q = zo,
                        se = e;
                    switch (e) {
                        case "keypress":
                            if (Ro(i) === 0) break e;
                        case "keydown":
                        case "keyup":
                            q = k_;
                            break;
                        case "focusin":
                            se = "focus", q = Qu;
                            break;
                        case "focusout":
                            se = "blur", q = Qu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            q = Qu;
                            break;
                        case "click":
                            if (i.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            q = Dm;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            q = T_;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            q = U_;
                            break;
                        case tp:
                        case np:
                        case ap:
                            q = C_;
                            break;
                        case ip:
                            q = H_;
                            break;
                        case "scroll":
                        case "scrollend":
                            q = x_;
                            break;
                        case "wheel":
                            q = Y_;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            q = N_;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            q = Bm;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            q = G_
                    }
                    var he = (t & 4) !== 0,
                        et = !he && (e === "scroll" || e === "scrollend"),
                        M = he ? U !== null ? U + "Capture" : null : U;
                    he = [];
                    for (var N = L, B; N !== null;) {
                        var Y = N;
                        if (B = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || B === null || M === null || (Y = ar(N, M), Y != null && he.push(Br(N, Y, B))), et) break;
                        N = N.return
                    }
                    0 < he.length && (U = new q(U, se, null, i, V), G.push({
                        event: U,
                        listeners: he
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (U = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", U && i !== Uu && (se = i.relatedTarget || i.fromElement) && (qs(se) || se[Us])) break e;
                    if ((q || U) && (U = V.window === V ? V : (U = V.ownerDocument) ? U.defaultView || U.parentWindow : window, q ? (se = i.relatedTarget || i.toElement, q = L, se = se ? qs(se) : null, se !== null && (et = u(se), he = se.tag, se !== et || he !== 5 && he !== 27 && he !== 6) && (se = null)) : (q = null, se = L), q !== se)) {
                        if (he = Dm, Y = "onMouseLeave", M = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (he = Bm, Y = "onPointerLeave", M = "onPointerEnter", N = "pointer"), et = q == null ? U : nr(q), B = se == null ? U : nr(se), U = new he(Y, N + "leave", q, i, V), U.target = et, U.relatedTarget = B, Y = null, qs(V) === L && (he = new he(M, N + "enter", se, i, V), he.target = B, he.relatedTarget = et, Y = he), et = Y, q && se) t: {
                            for (he = Zx, M = q, N = se, B = 0, Y = M; Y; Y = he(Y)) B++;Y = 0;
                            for (var ue = N; ue; ue = he(ue)) Y++;
                            for (; 0 < B - Y;) M = he(M),
                            B--;
                            for (; 0 < Y - B;) N = he(N),
                            Y--;
                            for (; B--;) {
                                if (M === N || N !== null && M === N.alternate) {
                                    he = M;
                                    break t
                                }
                                M = he(M), N = he(N)
                            }
                            he = null
                        }
                        else he = null;
                        q !== null && Ag(G, U, q, he, !1), se !== null && et !== null && Ag(G, et, se, he, !0)
                    }
                }
                e: {
                    if (U = L ? nr(L) : window, q = U.nodeName && U.nodeName.toLowerCase(), q === "select" || q === "input" && U.type === "file") var Ze = Gm;
                    else if (Ym(U))
                        if (Qm) Ze = ex;
                        else {
                            Ze = J_;
                            var re = P_
                        }
                    else q = U.nodeName,
                    !q || q.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? L && Lu(L.elementType) && (Ze = Gm) : Ze = W_;
                    if (Ze && (Ze = Ze(e, L))) {
                        Zm(G, Ze, i, V);
                        break e
                    }
                    re && re(e, U, L),
                    e === "focusout" && L && U.type === "number" && L.memoizedProps.value != null && Bu(U, "number", U.value)
                }
                switch (re = L ? nr(L) : window, e) {
                    case "focusin":
                        (Ym(re) || re.contentEditable === "true") && (Is = re, Pu = L, fr = null);
                        break;
                    case "focusout":
                        fr = Pu = Is = null;
                        break;
                    case "mousedown":
                        Ju = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ju = !1, Wm(G, i, V);
                        break;
                    case "selectionchange":
                        if (nx) break;
                    case "keydown":
                    case "keyup":
                        Wm(G, i, V)
                }
                var Ne;
                if (Xu) e: {
                    switch (e) {
                        case "compositionstart":
                            var Le = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Le = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Le = "onCompositionUpdate";
                            break e
                    }
                    Le = void 0
                }
                else Xs ? Hm(e, i) && (Le = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Le = "onCompositionStart");Le && (Lm && i.locale !== "ko" && (Xs || Le !== "onCompositionStart" ? Le === "onCompositionEnd" && Xs && (Ne = Mm()) : (Ja = V, Yu = "value" in Ja ? Ja.value : Ja.textContent, Xs = !0)), re = Tc(L, Le), 0 < re.length && (Le = new km(Le, e, null, i, V), G.push({
                    event: Le,
                    listeners: re
                }), Ne ? Le.data = Ne : (Ne = Vm(i), Ne !== null && (Le.data = Ne)))),
                (Ne = $_ ? X_(e, i) : I_(e, i)) && (Le = Tc(L, "onBeforeInput"), 0 < Le.length && (re = new km("onBeforeInput", "beforeinput", null, i, V), G.push({
                    event: re,
                    listeners: Le
                }), re.data = Ne)),
                qx(G, e, L, i, V)
            }
            Eg(G, t)
        })
    }

    function Br(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }

    function Tc(e, t) {
        for (var i = t + "Capture", l = []; e !== null;) {
            var c = e,
                f = c.stateNode;
            if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = ar(e, i), c != null && l.unshift(Br(e, c, f)), c = ar(e, t), c != null && l.push(Br(e, c, f))), e.tag === 3) return l;
            e = e.return
        }
        return []
    }

    function Zx(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Ag(e, t, i, l, c) {
        for (var f = t._reactName, h = []; i !== null && i !== l;) {
            var _ = i,
                w = _.alternate,
                L = _.stateNode;
            if (_ = _.tag, w !== null && w === l) break;
            _ !== 5 && _ !== 26 && _ !== 27 || L === null || (w = L, c ? (L = ar(i, f), L != null && h.unshift(Br(i, L, w))) : c || (L = ar(i, f), L != null && h.push(Br(i, L, w)))), i = i.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Gx = /\r\n?/g,
        Qx = /\u0000|\uFFFD/g;

    function Ng(e) {
        return (typeof e == "string" ? e : "" + e).replace(Gx, `
`).replace(Qx, "")
    }

    function jg(e, t) {
        return t = Ng(t), Ng(e) === t
    }

    function We(e, t, i, l, c, f) {
        switch (i) {
            case "children":
                typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Gs(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Gs(e, "" + l);
                break;
            case "className":
                Ao(e, "class", l);
                break;
            case "tabIndex":
                Ao(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ao(e, i, l);
                break;
            case "style":
                jm(e, l, f);
                break;
            case "data":
                if (t !== "object") {
                    Ao(e, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (t !== "a" || i !== "href")) {
                    e.removeAttribute(i);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(i);
                    break
                }
                l = jo("" + l), e.setAttribute(i, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof f == "function" && (i === "formAction" ? (t !== "input" && We(e, t, "name", c.name, c, null), We(e, t, "formEncType", c.formEncType, c, null), We(e, t, "formMethod", c.formMethod, c, null), We(e, t, "formTarget", c.formTarget, c, null)) : (We(e, t, "encType", c.encType, c, null), We(e, t, "method", c.method, c, null), We(e, t, "target", c.target, c, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(i);
                    break
                }
                l = jo("" + l), e.setAttribute(i, l);
                break;
            case "onClick":
                l != null && (e.onclick = ba);
                break;
            case "onScroll":
                l != null && ke("scroll", e);
                break;
            case "onScrollEnd":
                l != null && ke("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
                    if (i = l.__html, i != null) {
                        if (c.children != null) throw Error(r(60));
                        e.innerHTML = i
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                i = jo("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "" + l) : e.removeAttribute(i);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(i, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, l) : e.removeAttribute(i);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(i, l) : e.removeAttribute(i);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(i) : e.setAttribute(i, l);
                break;
            case "popover":
                ke("beforetoggle", e), ke("toggle", e), Co(e, "popover", l);
                break;
            case "xlinkActuate":
                va(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                va(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                va(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                va(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                va(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                va(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                va(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                va(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                va(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Co(e, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = b_.get(i) || i, Co(e, i, l))
        }
    }

    function wd(e, t, i, l, c, f) {
        switch (i) {
            case "style":
                jm(e, l, f);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
                    if (i = l.__html, i != null) {
                        if (c.children != null) throw Error(r(60));
                        e.innerHTML = i
                    }
                }
                break;
            case "children":
                typeof l == "string" ? Gs(e, l) : (typeof l == "number" || typeof l == "bigint") && Gs(e, "" + l);
                break;
            case "onScroll":
                l != null && ke("scroll", e);
                break;
            case "onScrollEnd":
                l != null && ke("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = ba);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!_m.hasOwnProperty(i)) e: {
                    if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), t = i.slice(2, c ? i.length - 7 : void 0), f = e[Pt] || null, f = f != null ? f[i] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof l == "function")) {
                        typeof f != "function" && f !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, l, c);
                        break e
                    }
                    i in e ? e[i] = l : l === !0 ? e.setAttribute(i, "") : Co(e, i, l)
                }
        }
    }

    function Mt(e, t, i) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                ke("error", e), ke("load", e);
                var l = !1,
                    c = !1,
                    f;
                for (f in i)
                    if (i.hasOwnProperty(f)) {
                        var h = i[f];
                        if (h != null) switch (f) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                c = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                We(e, t, f, h, i, null)
                        }
                    }
                c && We(e, t, "srcSet", i.srcSet, i, null), l && We(e, t, "src", i.src, i, null);
                return;
            case "input":
                ke("invalid", e);
                var _ = f = h = c = null,
                    w = null,
                    L = null;
                for (l in i)
                    if (i.hasOwnProperty(l)) {
                        var V = i[l];
                        if (V != null) switch (l) {
                            case "name":
                                c = V;
                                break;
                            case "type":
                                h = V;
                                break;
                            case "checked":
                                w = V;
                                break;
                            case "defaultChecked":
                                L = V;
                                break;
                            case "value":
                                f = V;
                                break;
                            case "defaultValue":
                                _ = V;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (V != null) throw Error(r(137, t));
                                break;
                            default:
                                We(e, t, l, V, i, null)
                        }
                    }
                Em(e, f, _, w, L, h, c, !1);
                return;
            case "select":
                ke("invalid", e), l = h = f = null;
                for (c in i)
                    if (i.hasOwnProperty(c) && (_ = i[c], _ != null)) switch (c) {
                        case "value":
                            f = _;
                            break;
                        case "defaultValue":
                            h = _;
                            break;
                        case "multiple":
                            l = _;
                        default:
                            We(e, t, c, _, i, null)
                    }
                t = f, i = h, e.multiple = !!l, t != null ? Zs(e, !!l, t, !1) : i != null && Zs(e, !!l, i, !0);
                return;
            case "textarea":
                ke("invalid", e), f = c = l = null;
                for (h in i)
                    if (i.hasOwnProperty(h) && (_ = i[h], _ != null)) switch (h) {
                        case "value":
                            l = _;
                            break;
                        case "defaultValue":
                            c = _;
                            break;
                        case "children":
                            f = _;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (_ != null) throw Error(r(91));
                            break;
                        default:
                            We(e, t, h, _, i, null)
                    }
                Am(e, l, c, f);
                return;
            case "option":
                for (w in i)
                    if (i.hasOwnProperty(w) && (l = i[w], l != null)) switch (w) {
                        case "selected":
                            e.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            We(e, t, w, l, i, null)
                    }
                return;
            case "dialog":
                ke("beforetoggle", e), ke("toggle", e), ke("cancel", e), ke("close", e);
                break;
            case "iframe":
            case "object":
                ke("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < kr.length; l++) ke(kr[l], e);
                break;
            case "image":
                ke("error", e), ke("load", e);
                break;
            case "details":
                ke("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                ke("error", e), ke("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (L in i)
                    if (i.hasOwnProperty(L) && (l = i[L], l != null)) switch (L) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            We(e, t, L, l, i, null)
                    }
                return;
            default:
                if (Lu(t)) {
                    for (V in i) i.hasOwnProperty(V) && (l = i[V], l !== void 0 && wd(e, t, V, l, i, void 0));
                    return
                }
        }
        for (_ in i) i.hasOwnProperty(_) && (l = i[_], l != null && We(e, t, _, l, i, null))
    }

    function $x(e, t, i, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var c = null,
                    f = null,
                    h = null,
                    _ = null,
                    w = null,
                    L = null,
                    V = null;
                for (q in i) {
                    var G = i[q];
                    if (i.hasOwnProperty(q) && G != null) switch (q) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            w = G;
                        default:
                            l.hasOwnProperty(q) || We(e, t, q, null, l, G)
                    }
                }
                for (var U in l) {
                    var q = l[U];
                    if (G = i[U], l.hasOwnProperty(U) && (q != null || G != null)) switch (U) {
                        case "type":
                            f = q;
                            break;
                        case "name":
                            c = q;
                            break;
                        case "checked":
                            L = q;
                            break;
                        case "defaultChecked":
                            V = q;
                            break;
                        case "value":
                            h = q;
                            break;
                        case "defaultValue":
                            _ = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null) throw Error(r(137, t));
                            break;
                        default:
                            q !== G && We(e, t, U, q, l, G)
                    }
                }
                ku(e, h, _, w, L, V, f, c);
                return;
            case "select":
                q = h = _ = U = null;
                for (f in i)
                    if (w = i[f], i.hasOwnProperty(f) && w != null) switch (f) {
                        case "value":
                            break;
                        case "multiple":
                            q = w;
                        default:
                            l.hasOwnProperty(f) || We(e, t, f, null, l, w)
                    }
                for (c in l)
                    if (f = l[c], w = i[c], l.hasOwnProperty(c) && (f != null || w != null)) switch (c) {
                        case "value":
                            U = f;
                            break;
                        case "defaultValue":
                            _ = f;
                            break;
                        case "multiple":
                            h = f;
                        default:
                            f !== w && We(e, t, c, f, l, w)
                    }
                t = _, i = h, l = q, U != null ? Zs(e, !!i, U, !1) : !!l != !!i && (t != null ? Zs(e, !!i, t, !0) : Zs(e, !!i, i ? [] : "", !1));
                return;
            case "textarea":
                q = U = null;
                for (_ in i)
                    if (c = i[_], i.hasOwnProperty(_) && c != null && !l.hasOwnProperty(_)) switch (_) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            We(e, t, _, null, l, c)
                    }
                for (h in l)
                    if (c = l[h], f = i[h], l.hasOwnProperty(h) && (c != null || f != null)) switch (h) {
                        case "value":
                            U = c;
                            break;
                        case "defaultValue":
                            q = c;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(r(91));
                            break;
                        default:
                            c !== f && We(e, t, h, c, l, f)
                    }
                Cm(e, U, q);
                return;
            case "option":
                for (var se in i)
                    if (U = i[se], i.hasOwnProperty(se) && U != null && !l.hasOwnProperty(se)) switch (se) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            We(e, t, se, null, l, U)
                    }
                for (w in l)
                    if (U = l[w], q = i[w], l.hasOwnProperty(w) && U !== q && (U != null || q != null)) switch (w) {
                        case "selected":
                            e.selected = U && typeof U != "function" && typeof U != "symbol";
                            break;
                        default:
                            We(e, t, w, U, l, q)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var he in i) U = i[he], i.hasOwnProperty(he) && U != null && !l.hasOwnProperty(he) && We(e, t, he, null, l, U);
                for (L in l)
                    if (U = l[L], q = i[L], l.hasOwnProperty(L) && U !== q && (U != null || q != null)) switch (L) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null) throw Error(r(137, t));
                            break;
                        default:
                            We(e, t, L, U, l, q)
                    }
                return;
            default:
                if (Lu(t)) {
                    for (var et in i) U = i[et], i.hasOwnProperty(et) && U !== void 0 && !l.hasOwnProperty(et) && wd(e, t, et, void 0, l, U);
                    for (V in l) U = l[V], q = i[V], !l.hasOwnProperty(V) || U === q || U === void 0 && q === void 0 || wd(e, t, V, U, l, q);
                    return
                }
        }
        for (var M in i) U = i[M], i.hasOwnProperty(M) && U != null && !l.hasOwnProperty(M) && We(e, t, M, null, l, U);
        for (G in l) U = l[G], q = i[G], !l.hasOwnProperty(G) || U === q || U == null && q == null || We(e, t, G, U, l, q)
    }

    function Og(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function Xx() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), l = 0; l < i.length; l++) {
                var c = i[l],
                    f = c.transferSize,
                    h = c.initiatorType,
                    _ = c.duration;
                if (f && _ && Og(h)) {
                    for (h = 0, _ = c.responseEnd, l += 1; l < i.length; l++) {
                        var w = i[l],
                            L = w.startTime;
                        if (L > _) break;
                        var V = w.transferSize,
                            G = w.initiatorType;
                        V && Og(G) && (w = w.responseEnd, h += V * (w < _ ? 1 : (_ - L) / (w - L)))
                    }
                    if (--l, t += 8 * (f + h) / (c.duration / 1e3), e++, 10 < e) break
                }
            }
            if (0 < e) return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
    }
    var Ed = null,
        Cd = null;

    function wc(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Rg(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Mg(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Ad(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Nd = null;

    function Ix() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Nd ? !1 : (Nd = e, !0) : (Nd = null, !1)
    }
    var zg = typeof setTimeout == "function" ? setTimeout : void 0,
        Kx = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Dg = typeof Promise == "function" ? Promise : void 0,
        Fx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dg < "u" ? function(e) {
            return Dg.resolve(null).then(e).catch(Px)
        } : zg;

    function Px(e) {
        setTimeout(function() {
            throw e
        })
    }

    function pi(e) {
        return e === "head"
    }

    function kg(e, t) {
        var i = t,
            l = 0;
        do {
            var c = i.nextSibling;
            if (e.removeChild(i), c && c.nodeType === 8)
                if (i = c.data, i === "/$" || i === "/&") {
                    if (l === 0) {
                        e.removeChild(c), xl(t);
                        return
                    }
                    l--
                } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") l++;
            else if (i === "html") Lr(e.ownerDocument.documentElement);
            else if (i === "head") {
                i = e.ownerDocument.head, Lr(i);
                for (var f = i.firstChild; f;) {
                    var h = f.nextSibling,
                        _ = f.nodeName;
                    f[tr] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && f.rel.toLowerCase() === "stylesheet" || i.removeChild(f), f = h
                }
            } else i === "body" && Lr(e.ownerDocument.body);
            i = c
        } while (i);
        xl(t)
    }

    function Bg(e, t) {
        var i = e;
        e = 0;
        do {
            var l = i.nextSibling;
            if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), l && l.nodeType === 8)
                if (i = l.data, i === "/$") {
                    if (e === 0) break;
                    e--
                } else i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
            i = l
        } while (i)
    }

    function jd(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var i = t;
            switch (t = t.nextSibling, i.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    jd(i), zu(i);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (i.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(i)
        }
    }

    function Jx(e, t, i, l) {
        for (; e.nodeType === 1;) {
            var c = i;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (l) {
                if (!e[tr]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var f = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && e.getAttribute("name") === f) return e
            } else return e;
            if (e = On(e.nextSibling), e === null) break
        }
        return null
    }

    function Wx(e, t, i) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = On(e.nextSibling), e === null)) return null;
        return e
    }

    function Lg(e, t) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = On(e.nextSibling), e === null)) return null;
        return e
    }

    function Od(e) {
        return e.data === "$?" || e.data === "$~"
    }

    function Rd(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }

    function e2(e, t) {
        var i = e.ownerDocument;
        if (e.data === "$~") e._reactRetry = t;
        else if (e.data !== "$?" || i.readyState !== "loading") t();
        else {
            var l = function() {
                t(), i.removeEventListener("DOMContentLoaded", l)
            };
            i.addEventListener("DOMContentLoaded", l), e._reactRetry = l
        }
    }

    function On(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                if (t === "/$" || t === "/&") return null
            }
        }
        return e
    }
    var Md = null;

    function Ug(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "/$" || i === "/&") {
                    if (t === 0) return On(e.nextSibling);
                    t--
                } else i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }

    function qg(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
                    if (t === 0) return e;
                    t--
                } else i !== "/$" && i !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Hg(e, t, i) {
        switch (t = wc(i), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(r(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(r(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }

    function Lr(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        zu(e)
    }
    var Rn = new Map,
        Vg = new Set;

    function Ec(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var ka = Q.d;
    Q.d = {
        f: t2,
        r: n2,
        D: a2,
        C: i2,
        L: s2,
        m: l2,
        X: o2,
        S: r2,
        M: c2
    };

    function t2() {
        var e = ka.f(),
            t = yc();
        return e || t
    }

    function n2(e) {
        var t = Hs(e);
        t !== null && t.tag === 5 && t.type === "form" ? iy(t) : ka.r(e)
    }
    var vl = typeof document > "u" ? null : document;

    function Yg(e, t, i) {
        var l = vl;
        if (l && typeof t == "string" && t) {
            var c = Tn(t);
            c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Vg.has(c) || (Vg.add(c), e = {
                rel: e,
                crossOrigin: i,
                href: t
            }, l.querySelector(c) === null && (t = l.createElement("link"), Mt(t, "link", e), wt(t), l.head.appendChild(t)))
        }
    }

    function a2(e) {
        ka.D(e), Yg("dns-prefetch", e, null)
    }

    function i2(e, t) {
        ka.C(e, t), Yg("preconnect", e, t)
    }

    function s2(e, t, i) {
        ka.L(e, t, i);
        var l = vl;
        if (l && e && t) {
            var c = 'link[rel="preload"][as="' + Tn(t) + '"]';
            t === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + Tn(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + Tn(i.imageSizes) + '"]')) : c += '[href="' + Tn(e) + '"]';
            var f = c;
            switch (t) {
                case "style":
                    f = bl(e);
                    break;
                case "script":
                    f = _l(e)
            }
            Rn.has(f) || (e = g({
                rel: "preload",
                href: t === "image" && i && i.imageSrcSet ? void 0 : e,
                as: t
            }, i), Rn.set(f, e), l.querySelector(c) !== null || t === "style" && l.querySelector(Ur(f)) || t === "script" && l.querySelector(qr(f)) || (t = l.createElement("link"), Mt(t, "link", e), wt(t), l.head.appendChild(t)))
        }
    }

    function l2(e, t) {
        ka.m(e, t);
        var i = vl;
        if (i && e) {
            var l = t && typeof t.as == "string" ? t.as : "script",
                c = 'link[rel="modulepreload"][as="' + Tn(l) + '"][href="' + Tn(e) + '"]',
                f = c;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    f = _l(e)
            }
            if (!Rn.has(f) && (e = g({
                    rel: "modulepreload",
                    href: e
                }, t), Rn.set(f, e), i.querySelector(c) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (i.querySelector(qr(f))) return
                }
                l = i.createElement("link"), Mt(l, "link", e), wt(l), i.head.appendChild(l)
            }
        }
    }

    function r2(e, t, i) {
        ka.S(e, t, i);
        var l = vl;
        if (l && e) {
            var c = Vs(l).hoistableStyles,
                f = bl(e);
            t = t || "default";
            var h = c.get(f);
            if (!h) {
                var _ = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(Ur(f))) _.loading = 5;
                else {
                    e = g({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, i), (i = Rn.get(f)) && zd(e, i);
                    var w = h = l.createElement("link");
                    wt(w), Mt(w, "link", e), w._p = new Promise(function(L, V) {
                        w.onload = L, w.onerror = V
                    }), w.addEventListener("load", function() {
                        _.loading |= 1
                    }), w.addEventListener("error", function() {
                        _.loading |= 2
                    }), _.loading |= 4, Cc(h, t, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: _
                }, c.set(f, h)
            }
        }
    }

    function o2(e, t) {
        ka.X(e, t);
        var i = vl;
        if (i && e) {
            var l = Vs(i).hoistableScripts,
                c = _l(e),
                f = l.get(c);
            f || (f = i.querySelector(qr(c)), f || (e = g({
                src: e,
                async: !0
            }, t), (t = Rn.get(c)) && Dd(e, t), f = i.createElement("script"), wt(f), Mt(f, "link", e), i.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, l.set(c, f))
        }
    }

    function c2(e, t) {
        ka.M(e, t);
        var i = vl;
        if (i && e) {
            var l = Vs(i).hoistableScripts,
                c = _l(e),
                f = l.get(c);
            f || (f = i.querySelector(qr(c)), f || (e = g({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Rn.get(c)) && Dd(e, t), f = i.createElement("script"), wt(f), Mt(f, "link", e), i.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, l.set(c, f))
        }
    }

    function Zg(e, t, i, l) {
        var c = (c = de.current) ? Ec(c) : null;
        if (!c) throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof i.precedence == "string" && typeof i.href == "string" ? (t = bl(i.href), i = Vs(c).hoistableStyles, l = i.get(t), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, i.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
                    e = bl(i.href);
                    var f = Vs(c).hoistableStyles,
                        h = f.get(e);
                    if (h || (c = c.ownerDocument || c, h = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, f.set(e, h), (f = c.querySelector(Ur(e))) && !f._p && (h.instance = f, h.state.loading = 5), Rn.has(e) || (i = {
                            rel: "preload",
                            as: "style",
                            href: i.href,
                            crossOrigin: i.crossOrigin,
                            integrity: i.integrity,
                            media: i.media,
                            hrefLang: i.hrefLang,
                            referrerPolicy: i.referrerPolicy
                        }, Rn.set(e, i), f || u2(c, e, i, h.state))), t && l === null) throw Error(r(528, ""));
                    return h
                }
                if (t && l !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _l(i), i = Vs(c).hoistableScripts, l = i.get(t), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, i.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, e))
        }
    }

    function bl(e) {
        return 'href="' + Tn(e) + '"'
    }

    function Ur(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Gg(e) {
        return g({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function u2(e, t, i, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
            return l.loading |= 1
        }), t.addEventListener("error", function() {
            return l.loading |= 2
        }), Mt(t, "link", i), wt(t), e.head.appendChild(t))
    }

    function _l(e) {
        return '[src="' + Tn(e) + '"]'
    }

    function qr(e) {
        return "script[async]" + e
    }

    function Qg(e, t, i) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Tn(i.href) + '"]');
                if (l) return t.instance = l, wt(l), l;
                var c = g({}, i, {
                    "data-href": i.href,
                    "data-precedence": i.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"), wt(l), Mt(l, "style", c), Cc(l, i.precedence, e), t.instance = l;
            case "stylesheet":
                c = bl(i.href);
                var f = e.querySelector(Ur(c));
                if (f) return t.state.loading |= 4, t.instance = f, wt(f), f;
                l = Gg(i), (c = Rn.get(c)) && zd(l, c), f = (e.ownerDocument || e).createElement("link"), wt(f);
                var h = f;
                return h._p = new Promise(function(_, w) {
                    h.onload = _, h.onerror = w
                }), Mt(f, "link", l), t.state.loading |= 4, Cc(f, i.precedence, e), t.instance = f;
            case "script":
                return f = _l(i.src), (c = e.querySelector(qr(f))) ? (t.instance = c, wt(c), c) : (l = i, (c = Rn.get(f)) && (l = g({}, i), Dd(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), wt(c), Mt(c, "link", l), e.head.appendChild(c), t.instance = c);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Cc(l, i.precedence, e));
        return t.instance
    }

    function Cc(e, t, i) {
        for (var l = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = l.length ? l[l.length - 1] : null, f = c, h = 0; h < l.length; h++) {
            var _ = l[h];
            if (_.dataset.precedence === t) f = _;
            else if (f !== c) break
        }
        f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild))
    }

    function zd(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Dd(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Ac = null;

    function $g(e, t, i) {
        if (Ac === null) {
            var l = new Map,
                c = Ac = new Map;
            c.set(i, l)
        } else c = Ac, l = c.get(i), l || (l = new Map, c.set(i, l));
        if (l.has(e)) return l;
        for (l.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
            var f = i[c];
            if (!(f[tr] || f[Nt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = f.getAttribute(t) || "";
                h = e + h;
                var _ = l.get(h);
                _ ? _.push(f) : l.set(h, [f])
            }
        }
        return l
    }

    function Xg(e, t, i) {
        e = e.ownerDocument || e, e.head.insertBefore(i, t === "title" ? e.querySelector("head > title") : null)
    }

    function f2(e, t, i) {
        if (i === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Ig(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }

    function d2(e, t, i, l) {
        if (i.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (i.state.loading & 4) === 0) {
            if (i.instance === null) {
                var c = bl(l.href),
                    f = t.querySelector(Ur(c));
                if (f) {
                    t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Nc.bind(e), t.then(e, e)), i.state.loading |= 4, i.instance = f, wt(f);
                    return
                }
                f = t.ownerDocument || t, l = Gg(l), (c = Rn.get(c)) && zd(l, c), f = f.createElement("link"), wt(f);
                var h = f;
                h._p = new Promise(function(_, w) {
                    h.onload = _, h.onerror = w
                }), Mt(f, "link", l), i.instance = f
            }
            e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(i, t), (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++, i = Nc.bind(e), t.addEventListener("load", i), t.addEventListener("error", i))
        }
    }
    var kd = 0;

    function h2(e, t) {
        return e.stylesheets && e.count === 0 && Oc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(i) {
            var l = setTimeout(function() {
                if (e.stylesheets && Oc(e, e.stylesheets), e.unsuspend) {
                    var f = e.unsuspend;
                    e.unsuspend = null, f()
                }
            }, 6e4 + t);
            0 < e.imgBytes && kd === 0 && (kd = 62500 * Xx());
            var c = setTimeout(function() {
                if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Oc(e, e.stylesheets), e.unsuspend)) {
                    var f = e.unsuspend;
                    e.unsuspend = null, f()
                }
            }, (e.imgBytes > kd ? 50 : 800) + t);
            return e.unsuspend = i,
                function() {
                    e.unsuspend = null, clearTimeout(l), clearTimeout(c)
                }
        } : null
    }

    function Nc() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Oc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var jc = null;

    function Oc(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, jc = new Map, t.forEach(m2, e), jc = null, Nc.call(e))
    }

    function m2(e, t) {
        if (!(t.state.loading & 4)) {
            var i = jc.get(e);
            if (i) var l = i.get(null);
            else {
                i = new Map, jc.set(e, i);
                for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
                    var h = c[f];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (i.set(h.dataset.precedence, h), l = h)
                }
                l && i.set(null, l)
            }
            c = t.instance, h = c.getAttribute("data-precedence"), f = i.get(h) || l, f === l && i.set(null, c), i.set(h, c), this.count++, l = Nc.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4
        }
    }
    var Hr = {
        $$typeof: D,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };

    function p2(e, t, i, l, c, f, h, _, w) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fa(0), this.hiddenUpdates = Fa(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map
    }

    function Kg(e, t, i, l, c, f, h, _, w, L, V, G) {
        return e = new p2(e, t, i, h, w, L, V, G, _), t = 1, f === !0 && (t |= 24), f = dn(3, null, null, t), e.current = f, f.stateNode = e, t = mf(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
            element: l,
            isDehydrated: i,
            cache: t
        }, vf(f), e
    }

    function Fg(e) {
        return e ? (e = Ps, e) : Ps
    }

    function Pg(e, t, i, l, c, f) {
        c = Fg(c), l.context === null ? l.context = c : l.pendingContext = c, l = ii(t), l.payload = {
            element: i
        }, f = f === void 0 ? null : f, f !== null && (l.callback = f), i = si(e, l, t), i !== null && (an(i, e, t), vr(i, e, t))
    }

    function Jg(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }

    function Bd(e, t) {
        Jg(e, t), (e = e.alternate) && Jg(e, t)
    }

    function Wg(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = ts(e, 67108864);
            t !== null && an(t, e, 67108864), Bd(e, 67108864)
        }
    }

    function ev(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = gn();
            t = Ls(t);
            var i = ts(e, t);
            i !== null && an(i, e, t), Bd(e, t)
        }
    }
    var Rc = !0;

    function y2(e, t, i, l) {
        var c = z.T;
        z.T = null;
        var f = Q.p;
        try {
            Q.p = 2, Ld(e, t, i, l)
        } finally {
            Q.p = f, z.T = c
        }
    }

    function g2(e, t, i, l) {
        var c = z.T;
        z.T = null;
        var f = Q.p;
        try {
            Q.p = 8, Ld(e, t, i, l)
        } finally {
            Q.p = f, z.T = c
        }
    }

    function Ld(e, t, i, l) {
        if (Rc) {
            var c = Ud(l);
            if (c === null) Td(e, t, l, Mc, i), nv(e, l);
            else if (b2(c, e, t, i, l)) l.stopPropagation();
            else if (nv(e, l), t & 4 && -1 < v2.indexOf(e)) {
                for (; c !== null;) {
                    var f = Hs(c);
                    if (f !== null) switch (f.tag) {
                        case 3:
                            if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                                var h = Kn(f.pendingLanes);
                                if (h !== 0) {
                                    var _ = f;
                                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; h;) {
                                        var w = 1 << 31 - Dt(h);
                                        _.entanglements[1] |= w, h &= ~w
                                    }
                                    Wn(f), (Xe & 6) === 0 && (mc = Ht() + 500, Dr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            _ = ts(f, 2), _ !== null && an(_, f, 2), yc(), Bd(f, 2)
                    }
                    if (f = Ud(l), f === null && Td(e, t, l, Mc, i), f === c) break;
                    c = f
                }
                c !== null && l.stopPropagation()
            } else Td(e, t, l, null, i)
        }
    }

    function Ud(e) {
        return e = qu(e), qd(e)
    }
    var Mc = null;

    function qd(e) {
        if (Mc = null, e = qs(e), e !== null) {
            var t = u(e);
            if (t === null) e = null;
            else {
                var i = t.tag;
                if (i === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (i === 31) {
                    if (e = m(t), e !== null) return e;
                    e = null
                } else if (i === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return Mc = e, null
    }

    function tv(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (ju()) {
                    case $i:
                        return 2;
                    case wo:
                        return 8;
                    case Xi:
                    case Wl:
                        return 32;
                    case ga:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Hd = !1,
        yi = null,
        gi = null,
        vi = null,
        Vr = new Map,
        Yr = new Map,
        bi = [],
        v2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function nv(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                yi = null;
                break;
            case "dragenter":
            case "dragleave":
                gi = null;
                break;
            case "mouseover":
            case "mouseout":
                vi = null;
                break;
            case "pointerover":
            case "pointerout":
                Vr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Yr.delete(t.pointerId)
        }
    }

    function Zr(e, t, i, l, c, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: l,
            nativeEvent: f,
            targetContainers: [c]
        }, t !== null && (t = Hs(t), t !== null && Wg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e)
    }

    function b2(e, t, i, l, c) {
        switch (t) {
            case "focusin":
                return yi = Zr(yi, e, t, i, l, c), !0;
            case "dragenter":
                return gi = Zr(gi, e, t, i, l, c), !0;
            case "mouseover":
                return vi = Zr(vi, e, t, i, l, c), !0;
            case "pointerover":
                var f = c.pointerId;
                return Vr.set(f, Zr(Vr.get(f) || null, e, t, i, l, c)), !0;
            case "gotpointercapture":
                return f = c.pointerId, Yr.set(f, Zr(Yr.get(f) || null, e, t, i, l, c)), !0
        }
        return !1
    }

    function av(e) {
        var t = qs(e.target);
        if (t !== null) {
            var i = u(t);
            if (i !== null) {
                if (t = i.tag, t === 13) {
                    if (t = d(i), t !== null) {
                        e.blockedOn = t, gm(e.priority, function() {
                            ev(i)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = m(i), t !== null) {
                        e.blockedOn = t, gm(e.priority, function() {
                            ev(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function zc(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var i = Ud(e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var l = new i.constructor(i.type, i);
                Uu = l, i.target.dispatchEvent(l), Uu = null
            } else return t = Hs(i), t !== null && Wg(t), e.blockedOn = i, !1;
            t.shift()
        }
        return !0
    }

    function iv(e, t, i) {
        zc(e) && i.delete(t)
    }

    function _2() {
        Hd = !1, yi !== null && zc(yi) && (yi = null), gi !== null && zc(gi) && (gi = null), vi !== null && zc(vi) && (vi = null), Vr.forEach(iv), Yr.forEach(iv)
    }

    function Dc(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Hd || (Hd = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, _2)))
    }
    var kc = null;

    function sv(e) {
        kc !== e && (kc = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            kc === e && (kc = null);
            for (var t = 0; t < e.length; t += 3) {
                var i = e[t],
                    l = e[t + 1],
                    c = e[t + 2];
                if (typeof l != "function") {
                    if (qd(l || i) === null) continue;
                    break
                }
                var f = Hs(i);
                f !== null && (e.splice(t, 3), t -= 3, Uf(f, {
                    pending: !0,
                    data: c,
                    method: i.method,
                    action: l
                }, l, c))
            }
        }))
    }

    function xl(e) {
        function t(w) {
            return Dc(w, e)
        }
        yi !== null && Dc(yi, e), gi !== null && Dc(gi, e), vi !== null && Dc(vi, e), Vr.forEach(t), Yr.forEach(t);
        for (var i = 0; i < bi.length; i++) {
            var l = bi[i];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < bi.length && (i = bi[0], i.blockedOn === null);) av(i), i.blockedOn === null && bi.shift();
        if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
            for (l = 0; l < i.length; l += 3) {
                var c = i[l],
                    f = i[l + 1],
                    h = c[Pt] || null;
                if (typeof f == "function") h || sv(i);
                else if (h) {
                    var _ = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (c = f, h = f[Pt] || null) _ = h.formAction;
                        else if (qd(c) !== null) continue
                    } else _ = h.action;
                    typeof _ == "function" ? i[l + 1] = _ : (i.splice(l, 3), l -= 3), sv(i)
                }
            }
    }

    function lv() {
        function e(f) {
            f.canIntercept && f.info === "react-transition" && f.intercept({
                handler: function() {
                    return new Promise(function(h) {
                        return c = h
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function t() {
            c !== null && (c(), c = null), l || setTimeout(i, 20)
        }

        function i() {
            if (!l && !navigation.transition) {
                var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, {
                    state: f.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1,
                c = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(i, 100),
                function() {
                    l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null)
                }
        }
    }

    function Vd(e) {
        this._internalRoot = e
    }
    Bc.prototype.render = Vd.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        var i = t.current,
            l = gn();
        Pg(i, l, e, t, null, null)
    }, Bc.prototype.unmount = Vd.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Pg(e.current, 2, null, e, null, null), yc(), t[Us] = null
        }
    };

    function Bc(e) {
        this._internalRoot = e
    }
    Bc.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ru();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < bi.length && t !== 0 && t < bi[i].priority; i++);
            bi.splice(i, 0, e), i === 0 && av(e)
        }
    };
    var rv = n.version;
    if (rv !== "19.2.3") throw Error(r(527, rv, "19.2.3"));
    Q.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
        return e = y(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e
    };
    var x2 = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Lc.isDisabled && Lc.supportsFiber) try {
            Ii = Lc.inject(x2), Vt = Lc
        } catch {}
    }
    return Qr.createRoot = function(e, t) {
        if (!o(e)) throw Error(r(299));
        var i = !1,
            l = "",
            c = my,
            f = py,
            h = yy;
        return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError)), t = Kg(e, 1, !1, null, null, i, l, null, c, f, h, lv), e[Us] = t.current, Sd(e), new Vd(t)
    }, Qr.hydrateRoot = function(e, t, i) {
        if (!o(e)) throw Error(r(299));
        var l = !1,
            c = "",
            f = my,
            h = py,
            _ = yy,
            w = null;
        return i != null && (i.unstable_strictMode === !0 && (l = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (f = i.onUncaughtError), i.onCaughtError !== void 0 && (h = i.onCaughtError), i.onRecoverableError !== void 0 && (_ = i.onRecoverableError), i.formState !== void 0 && (w = i.formState)), t = Kg(e, 1, !0, t, i ? ? null, l, c, w, f, h, _, lv), t.context = Fg(null), i = t.current, l = gn(), l = Ls(l), c = ii(l), c.callback = null, si(i, c, l), i = l, t.current.lanes = i, lt(t, i), Wn(t), e[Us] = t.current, Sd(e), new Bc(t)
    }, Qr.version = "19.2.3", Qr
}
var vv;

function L2() {
    if (vv) return Gd.exports;
    vv = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (n) {
            console.error(n)
        }
    }
    return a(), Gd.exports = B2(), Gd.exports
}
var U2 = L2(),
    x = $h();
const $ = H0(x),
    yu = E2({
        __proto__: null,
        default: $
    }, [x]);
var Xh = Q0();
const $0 = H0(Xh);
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function eo() {
    return eo = Object.assign ? Object.assign.bind() : function(a) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r])
        }
        return a
    }, eo.apply(this, arguments)
}
var Mi;
(function(a) {
    a.Pop = "POP", a.Push = "PUSH", a.Replace = "REPLACE"
})(Mi || (Mi = {}));
const bv = "popstate";

function q2(a) {
    a === void 0 && (a = {});

    function n(r, o) {
        let {
            pathname: u,
            search: d,
            hash: m
        } = r.location;
        return ch("", {
            pathname: u,
            search: d,
            hash: m
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function s(r, o) {
        return typeof o == "string" ? o : nu(o)
    }
    return V2(n, s, null, a)
}

function bt(a, n) {
    if (a === !1 || a === null || typeof a > "u") throw new Error(n)
}

function X0(a, n) {
    if (!a) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}

function H2() {
    return Math.random().toString(36).substr(2, 8)
}

function _v(a, n) {
    return {
        usr: a.state,
        key: a.key,
        idx: n
    }
}

function ch(a, n, s, r) {
    return s === void 0 && (s = null), eo({
        pathname: typeof a == "string" ? a : a.pathname,
        search: "",
        hash: ""
    }, typeof n == "string" ? $l(n) : n, {
        state: s,
        key: n && n.key || r || H2()
    })
}

function nu(a) {
    let {
        pathname: n = "/",
        search: s = "",
        hash: r = ""
    } = a;
    return s && s !== "?" && (n += s.charAt(0) === "?" ? s : "?" + s), r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r), n
}

function $l(a) {
    let n = {};
    if (a) {
        let s = a.indexOf("#");
        s >= 0 && (n.hash = a.substr(s), a = a.substr(0, s));
        let r = a.indexOf("?");
        r >= 0 && (n.search = a.substr(r), a = a.substr(0, r)), a && (n.pathname = a)
    }
    return n
}

function V2(a, n, s, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: u = !1
    } = r, d = o.history, m = Mi.Pop, v = null, y = b();
    y == null && (y = 0, d.replaceState(eo({}, d.state, {
        idx: y
    }), ""));

    function b() {
        return (d.state || {
            idx: null
        }).idx
    }

    function g() {
        m = Mi.Pop;
        let A = b(),
            j = A == null ? null : A - y;
        y = A, v && v({
            action: m,
            location: R.location,
            delta: j
        })
    }

    function S(A, j) {
        m = Mi.Push;
        let H = ch(R.location, A, j);
        y = b() + 1;
        let D = _v(H, y),
            k = R.createHref(H);
        try {
            d.pushState(D, "", k)
        } catch (I) {
            if (I instanceof DOMException && I.name === "DataCloneError") throw I;
            o.location.assign(k)
        }
        u && v && v({
            action: m,
            location: R.location,
            delta: 1
        })
    }

    function T(A, j) {
        m = Mi.Replace;
        let H = ch(R.location, A, j);
        y = b();
        let D = _v(H, y),
            k = R.createHref(H);
        d.replaceState(D, "", k), u && v && v({
            action: m,
            location: R.location,
            delta: 0
        })
    }

    function O(A) {
        let j = o.location.origin !== "null" ? o.location.origin : o.location.href,
            H = typeof A == "string" ? A : nu(A);
        return H = H.replace(/ $/, "%20"), bt(j, "No window.location.(origin|href) available to create URL for href: " + H), new URL(H, j)
    }
    let R = {
        get action() {
            return m
        },
        get location() {
            return a(o, d)
        },
        listen(A) {
            if (v) throw new Error("A history only accepts one active listener");
            return o.addEventListener(bv, g), v = A, () => {
                o.removeEventListener(bv, g), v = null
            }
        },
        createHref(A) {
            return n(o, A)
        },
        createURL: O,
        encodeLocation(A) {
            let j = O(A);
            return {
                pathname: j.pathname,
                search: j.search,
                hash: j.hash
            }
        },
        push: S,
        replace: T,
        go(A) {
            return d.go(A)
        }
    };
    return R
}
var xv;
(function(a) {
    a.data = "data", a.deferred = "deferred", a.redirect = "redirect", a.error = "error"
})(xv || (xv = {}));

function Y2(a, n, s) {
    return s === void 0 && (s = "/"), Z2(a, n, s)
}

function Z2(a, n, s, r) {
    let o = typeof n == "string" ? $l(n) : n,
        u = Ih(o.pathname || "/", s);
    if (u == null) return null;
    let d = I0(a);
    G2(d);
    let m = null;
    for (let v = 0; m == null && v < d.length; ++v) {
        let y = nS(u);
        m = W2(d[v], y)
    }
    return m
}

function I0(a, n, s, r) {
    n === void 0 && (n = []), s === void 0 && (s = []), r === void 0 && (r = "");
    let o = (u, d, m) => {
        let v = {
            relativePath: m === void 0 ? u.path || "" : m,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: d,
            route: u
        };
        v.relativePath.startsWith("/") && (bt(v.relativePath.startsWith(r), 'Absolute route path "' + v.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), v.relativePath = v.relativePath.slice(r.length));
        let y = Di([r, v.relativePath]),
            b = s.concat(v);
        u.children && u.children.length > 0 && (bt(u.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + y + '".')), I0(u.children, n, b, y)), !(u.path == null && !u.index) && n.push({
            path: y,
            score: P2(y, u.index),
            routesMeta: b
        })
    };
    return a.forEach((u, d) => {
        var m;
        if (u.path === "" || !((m = u.path) != null && m.includes("?"))) o(u, d);
        else
            for (let v of K0(u.path)) o(u, d, v)
    }), n
}

function K0(a) {
    let n = a.split("/");
    if (n.length === 0) return [];
    let [s, ...r] = n, o = s.endsWith("?"), u = s.replace(/\?$/, "");
    if (r.length === 0) return o ? [u, ""] : [u];
    let d = K0(r.join("/")),
        m = [];
    return m.push(...d.map(v => v === "" ? u : [u, v].join("/"))), o && m.push(...d), m.map(v => a.startsWith("/") && v === "" ? "/" : v)
}

function G2(a) {
    a.sort((n, s) => n.score !== s.score ? s.score - n.score : J2(n.routesMeta.map(r => r.childrenIndex), s.routesMeta.map(r => r.childrenIndex)))
}
const Q2 = /^:[\w-]+$/,
    $2 = 3,
    X2 = 2,
    I2 = 1,
    K2 = 10,
    F2 = -2,
    Sv = a => a === "*";

function P2(a, n) {
    let s = a.split("/"),
        r = s.length;
    return s.some(Sv) && (r += F2), n && (r += X2), s.filter(o => !Sv(o)).reduce((o, u) => o + (Q2.test(u) ? $2 : u === "" ? I2 : K2), r)
}

function J2(a, n) {
    return a.length === n.length && a.slice(0, -1).every((r, o) => r === n[o]) ? a[a.length - 1] - n[n.length - 1] : 0
}

function W2(a, n, s) {
    let {
        routesMeta: r
    } = a, o = {}, u = "/", d = [];
    for (let m = 0; m < r.length; ++m) {
        let v = r[m],
            y = m === r.length - 1,
            b = u === "/" ? n : n.slice(u.length) || "/",
            g = eS({
                path: v.relativePath,
                caseSensitive: v.caseSensitive,
                end: y
            }, b),
            S = v.route;
        if (!g) return null;
        Object.assign(o, g.params), d.push({
            params: o,
            pathname: Di([u, g.pathname]),
            pathnameBase: lS(Di([u, g.pathnameBase])),
            route: S
        }), g.pathnameBase !== "/" && (u = Di([u, g.pathnameBase]))
    }
    return d
}

function eS(a, n) {
    typeof a == "string" && (a = {
        path: a,
        caseSensitive: !1,
        end: !0
    });
    let [s, r] = tS(a.path, a.caseSensitive, a.end), o = n.match(s);
    if (!o) return null;
    let u = o[0],
        d = u.replace(/(.)\/+$/, "$1"),
        m = o.slice(1);
    return {
        params: r.reduce((y, b, g) => {
            let {
                paramName: S,
                isOptional: T
            } = b;
            if (S === "*") {
                let R = m[g] || "";
                d = u.slice(0, u.length - R.length).replace(/(.)\/+$/, "$1")
            }
            const O = m[g];
            return T && !O ? y[S] = void 0 : y[S] = (O || "").replace(/%2F/g, "/"), y
        }, {}),
        pathname: u,
        pathnameBase: d,
        pattern: a
    }
}

function tS(a, n, s) {
    n === void 0 && (n = !1), s === void 0 && (s = !0), X0(a === "*" || !a.endsWith("*") || a.endsWith("/*"), 'Route path "' + a + '" will be treated as if it were ' + ('"' + a.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + a.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, v) => (r.push({
            paramName: m,
            isOptional: v != null
        }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return a.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : a !== "" && a !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, n ? void 0 : "i"), r]
}

function nS(a) {
    try {
        return a.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return X0(!1, 'The URL path "' + a + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + n + ").")), a
    }
}

function Ih(a, n) {
    if (n === "/") return a;
    if (!a.toLowerCase().startsWith(n.toLowerCase())) return null;
    let s = n.endsWith("/") ? n.length - 1 : n.length,
        r = a.charAt(s);
    return r && r !== "/" ? null : a.slice(s) || "/"
}

function aS(a, n) {
    n === void 0 && (n = "/");
    let {
        pathname: s,
        search: r = "",
        hash: o = ""
    } = typeof a == "string" ? $l(a) : a;
    return {
        pathname: s ? s.startsWith("/") ? s : iS(s, n) : n,
        search: rS(r),
        hash: oS(o)
    }
}

function iS(a, n) {
    let s = n.replace(/\/+$/, "").split("/");
    return a.split("/").forEach(o => {
        o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o)
    }), s.length > 1 ? s.join("/") : "/"
}

function Kd(a, n, s, r) {
    return "Cannot include a '" + a + "' character in a manually specified " + ("`to." + n + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function sS(a) {
    return a.filter((n, s) => s === 0 || n.route.path && n.route.path.length > 0)
}

function F0(a, n) {
    let s = sS(a);
    return n ? s.map((r, o) => o === s.length - 1 ? r.pathname : r.pathnameBase) : s.map(r => r.pathnameBase)
}

function P0(a, n, s, r) {
    r === void 0 && (r = !1);
    let o;
    typeof a == "string" ? o = $l(a) : (o = eo({}, a), bt(!o.pathname || !o.pathname.includes("?"), Kd("?", "pathname", "search", o)), bt(!o.pathname || !o.pathname.includes("#"), Kd("#", "pathname", "hash", o)), bt(!o.search || !o.search.includes("#"), Kd("#", "search", "hash", o)));
    let u = a === "" || o.pathname === "",
        d = u ? "/" : o.pathname,
        m;
    if (d == null) m = s;
    else {
        let g = n.length - 1;
        if (!r && d.startsWith("..")) {
            let S = d.split("/");
            for (; S[0] === "..";) S.shift(), g -= 1;
            o.pathname = S.join("/")
        }
        m = g >= 0 ? n[g] : "/"
    }
    let v = aS(o, m),
        y = d && d !== "/" && d.endsWith("/"),
        b = (u || d === ".") && s.endsWith("/");
    return !v.pathname.endsWith("/") && (y || b) && (v.pathname += "/"), v
}
const Di = a => a.join("/").replace(/\/\/+/g, "/"),
    lS = a => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
    rS = a => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a,
    oS = a => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a;

function cS(a) {
    return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a
}
const J0 = ["post", "put", "patch", "delete"];
new Set(J0);
const uS = ["get", ...J0];
new Set(uS);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function to() {
    return to = Object.assign ? Object.assign.bind() : function(a) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r])
        }
        return a
    }, to.apply(this, arguments)
}
const Kh = x.createContext(null),
    fS = x.createContext(null),
    zs = x.createContext(null),
    gu = x.createContext(null),
    Zi = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    W0 = x.createContext(null);

function dS(a, n) {
    let {
        relative: s
    } = n === void 0 ? {} : n;
    vo() || bt(!1);
    let {
        basename: r,
        navigator: o
    } = x.useContext(zs), {
        hash: u,
        pathname: d,
        search: m
    } = n1(a, {
        relative: s
    }), v = d;
    return r !== "/" && (v = d === "/" ? r : Di([r, d])), o.createHref({
        pathname: v,
        search: m,
        hash: u
    })
}

function vo() {
    return x.useContext(gu) != null
}

function Xl() {
    return vo() || bt(!1), x.useContext(gu).location
}

function e1(a) {
    x.useContext(zs).static || x.useLayoutEffect(a)
}

function t1() {
    let {
        isDataRoute: a
    } = x.useContext(Zi);
    return a ? AS() : hS()
}

function hS() {
    vo() || bt(!1);
    let a = x.useContext(Kh),
        {
            basename: n,
            future: s,
            navigator: r
        } = x.useContext(zs),
        {
            matches: o
        } = x.useContext(Zi),
        {
            pathname: u
        } = Xl(),
        d = JSON.stringify(F0(o, s.v7_relativeSplatPath)),
        m = x.useRef(!1);
    return e1(() => {
        m.current = !0
    }), x.useCallback(function(y, b) {
        if (b === void 0 && (b = {}), !m.current) return;
        if (typeof y == "number") {
            r.go(y);
            return
        }
        let g = P0(y, JSON.parse(d), u, b.relative === "path");
        a == null && n !== "/" && (g.pathname = g.pathname === "/" ? n : Di([n, g.pathname])), (b.replace ? r.replace : r.push)(g, b.state, b)
    }, [n, r, d, u, a])
}
const mS = x.createContext(null);

function pS(a) {
    let n = x.useContext(Zi).outlet;
    return n && x.createElement(mS.Provider, {
        value: a
    }, n)
}

function n1(a, n) {
    let {
        relative: s
    } = n === void 0 ? {} : n, {
        future: r
    } = x.useContext(zs), {
        matches: o
    } = x.useContext(Zi), {
        pathname: u
    } = Xl(), d = JSON.stringify(F0(o, r.v7_relativeSplatPath));
    return x.useMemo(() => P0(a, JSON.parse(d), u, s === "path"), [a, d, u, s])
}

function yS(a, n) {
    return gS(a, n)
}

function gS(a, n, s, r) {
    vo() || bt(!1);
    let {
        navigator: o
    } = x.useContext(zs), {
        matches: u
    } = x.useContext(Zi), d = u[u.length - 1], m = d ? d.params : {};
    d && d.pathname;
    let v = d ? d.pathnameBase : "/";
    d && d.route;
    let y = Xl(),
        b;
    if (n) {
        var g;
        let A = typeof n == "string" ? $l(n) : n;
        v === "/" || (g = A.pathname) != null && g.startsWith(v) || bt(!1), b = A
    } else b = y;
    let S = b.pathname || "/",
        T = S;
    if (v !== "/") {
        let A = v.replace(/^\//, "").split("/");
        T = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/")
    }
    let O = Y2(a, {
            pathname: T
        }),
        R = SS(O && O.map(A => Object.assign({}, A, {
            params: Object.assign({}, m, A.params),
            pathname: Di([v, o.encodeLocation ? o.encodeLocation(A.pathname).pathname : A.pathname]),
            pathnameBase: A.pathnameBase === "/" ? v : Di([v, o.encodeLocation ? o.encodeLocation(A.pathnameBase).pathname : A.pathnameBase])
        })), u, s, r);
    return n && R ? x.createElement(gu.Provider, {
        value: {
            location: to({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, b),
            navigationType: Mi.Pop
        }
    }, R) : R
}

function vS() {
    let a = CS(),
        n = cS(a) ? a.status + " " + a.statusText : a instanceof Error ? a.message : JSON.stringify(a),
        s = a instanceof Error ? a.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), s ? x.createElement("pre", {
        style: o
    }, s) : null, null)
}
const bS = x.createElement(vS, null);
class _S extends x.Component {
    constructor(n) {
        super(n), this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, s) {
        return s.location !== n.location || s.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : s.error,
            location: s.location,
            revalidation: n.revalidation || s.revalidation
        }
    }
    componentDidCatch(n, s) {
        console.error("React Router caught the following error during render", n, s)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Zi.Provider, {
            value: this.props.routeContext
        }, x.createElement(W0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function xS(a) {
    let {
        routeContext: n,
        match: s,
        children: r
    } = a, o = x.useContext(Kh);
    return o && o.static && o.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = s.route.id), x.createElement(Zi.Provider, {
        value: n
    }, r)
}

function SS(a, n, s, r) {
    var o;
    if (n === void 0 && (n = []), s === void 0 && (s = null), r === void 0 && (r = null), a == null) {
        var u;
        if (!s) return null;
        if (s.errors) a = s.matches;
        else if ((u = r) != null && u.v7_partialHydration && n.length === 0 && !s.initialized && s.matches.length > 0) a = s.matches;
        else return null
    }
    let d = a,
        m = (o = s) == null ? void 0 : o.errors;
    if (m != null) {
        let b = d.findIndex(g => g.route.id && (m == null ? void 0 : m[g.route.id]) !== void 0);
        b >= 0 || bt(!1), d = d.slice(0, Math.min(d.length, b + 1))
    }
    let v = !1,
        y = -1;
    if (s && r && r.v7_partialHydration)
        for (let b = 0; b < d.length; b++) {
            let g = d[b];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (y = b), g.route.id) {
                let {
                    loaderData: S,
                    errors: T
                } = s, O = g.route.loader && S[g.route.id] === void 0 && (!T || T[g.route.id] === void 0);
                if (g.route.lazy || O) {
                    v = !0, y >= 0 ? d = d.slice(0, y + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight((b, g, S) => {
        let T, O = !1,
            R = null,
            A = null;
        s && (T = m && g.route.id ? m[g.route.id] : void 0, R = g.route.errorElement || bS, v && (y < 0 && S === 0 ? (NS("route-fallback"), O = !0, A = null) : y === S && (O = !0, A = g.route.hydrateFallbackElement || null)));
        let j = n.concat(d.slice(0, S + 1)),
            H = () => {
                let D;
                return T ? D = R : O ? D = A : g.route.Component ? D = x.createElement(g.route.Component, null) : g.route.element ? D = g.route.element : D = b, x.createElement(xS, {
                    match: g,
                    routeContext: {
                        outlet: b,
                        matches: j,
                        isDataRoute: s != null
                    },
                    children: D
                })
            };
        return s && (g.route.ErrorBoundary || g.route.errorElement || S === 0) ? x.createElement(_S, {
            location: s.location,
            revalidation: s.revalidation,
            component: R,
            error: T,
            children: H(),
            routeContext: {
                outlet: null,
                matches: j,
                isDataRoute: !0
            }
        }) : H()
    }, null)
}
var a1 = (function(a) {
        return a.UseBlocker = "useBlocker", a.UseRevalidator = "useRevalidator", a.UseNavigateStable = "useNavigate", a
    })(a1 || {}),
    i1 = (function(a) {
        return a.UseBlocker = "useBlocker", a.UseLoaderData = "useLoaderData", a.UseActionData = "useActionData", a.UseRouteError = "useRouteError", a.UseNavigation = "useNavigation", a.UseRouteLoaderData = "useRouteLoaderData", a.UseMatches = "useMatches", a.UseRevalidator = "useRevalidator", a.UseNavigateStable = "useNavigate", a.UseRouteId = "useRouteId", a
    })(i1 || {});

function TS(a) {
    let n = x.useContext(Kh);
    return n || bt(!1), n
}

function wS(a) {
    let n = x.useContext(fS);
    return n || bt(!1), n
}

function ES(a) {
    let n = x.useContext(Zi);
    return n || bt(!1), n
}

function s1(a) {
    let n = ES(),
        s = n.matches[n.matches.length - 1];
    return s.route.id || bt(!1), s.route.id
}

function CS() {
    var a;
    let n = x.useContext(W0),
        s = wS(i1.UseRouteError),
        r = s1();
    return n !== void 0 ? n : (a = s.errors) == null ? void 0 : a[r]
}

function AS() {
    let {
        router: a
    } = TS(a1.UseNavigateStable), n = s1(), s = x.useRef(!1);
    return e1(() => {
        s.current = !0
    }), x.useCallback(function(o, u) {
        u === void 0 && (u = {}), s.current && (typeof o == "number" ? a.navigate(o) : a.navigate(o, to({
            fromRouteId: n
        }, u)))
    }, [a, n])
}
const Tv = {};

function NS(a, n, s) {
    Tv[a] || (Tv[a] = !0)
}

function jS(a) {
    return pS(a.context)
}

function au(a) {
    bt(!1)
}

function OS(a) {
    let {
        basename: n = "/",
        children: s = null,
        location: r,
        navigationType: o = Mi.Pop,
        navigator: u,
        static: d = !1,
        future: m
    } = a;
    vo() && bt(!1);
    let v = n.replace(/^\/*/, "/"),
        y = x.useMemo(() => ({
            basename: v,
            navigator: u,
            static: d,
            future: to({
                v7_relativeSplatPath: !1
            }, m)
        }), [v, m, u, d]);
    typeof r == "string" && (r = $l(r));
    let {
        pathname: b = "/",
        search: g = "",
        hash: S = "",
        state: T = null,
        key: O = "default"
    } = r, R = x.useMemo(() => {
        let A = Ih(b, v);
        return A == null ? null : {
            location: {
                pathname: A,
                search: g,
                hash: S,
                state: T,
                key: O
            },
            navigationType: o
        }
    }, [v, b, g, S, T, O, o]);
    return R == null ? null : x.createElement(zs.Provider, {
        value: y
    }, x.createElement(gu.Provider, {
        children: s,
        value: R
    }))
}

function RS(a) {
    let {
        children: n,
        location: s
    } = a;
    return yS(uh(n), s)
}
new Promise(() => {});

function uh(a, n) {
    n === void 0 && (n = []);
    let s = [];
    return x.Children.forEach(a, (r, o) => {
        if (!x.isValidElement(r)) return;
        let u = [...n, o];
        if (r.type === x.Fragment) {
            s.push.apply(s, uh(r.props.children, u));
            return
        }
        r.type !== au && bt(!1), !r.props.index || !r.props.children || bt(!1);
        let d = {
            id: r.props.id || u.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (d.children = uh(r.props.children, u)), s.push(d)
    }), s
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fh() {
    return fh = Object.assign ? Object.assign.bind() : function(a) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r])
        }
        return a
    }, fh.apply(this, arguments)
}

function MS(a, n) {
    if (a == null) return {};
    var s = {},
        r = Object.keys(a),
        o, u;
    for (u = 0; u < r.length; u++) o = r[u], !(n.indexOf(o) >= 0) && (s[o] = a[o]);
    return s
}

function zS(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}

function DS(a, n) {
    return a.button === 0 && (!n || n === "_self") && !zS(a)
}
const kS = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    BS = "6";
try {
    window.__reactRouterVersion = BS
} catch {}
const LS = "startTransition",
    wv = yu[LS];

function US(a) {
    let {
        basename: n,
        children: s,
        future: r,
        window: o
    } = a, u = x.useRef();
    u.current == null && (u.current = q2({
        window: o,
        v5Compat: !0
    }));
    let d = u.current,
        [m, v] = x.useState({
            action: d.action,
            location: d.location
        }),
        {
            v7_startTransition: y
        } = r || {},
        b = x.useCallback(g => {
            y && wv ? wv(() => v(g)) : v(g)
        }, [v, y]);
    return x.useLayoutEffect(() => d.listen(b), [d, b]), x.createElement(OS, {
        basename: n,
        children: s,
        location: m.location,
        navigationType: m.action,
        navigator: d,
        future: r
    })
}
const qS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    HS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    As = x.forwardRef(function(n, s) {
        let {
            onClick: r,
            relative: o,
            reloadDocument: u,
            replace: d,
            state: m,
            target: v,
            to: y,
            preventScrollReset: b,
            unstable_viewTransition: g
        } = n, S = MS(n, kS), {
            basename: T
        } = x.useContext(zs), O, R = !1;
        if (typeof y == "string" && HS.test(y) && (O = y, qS)) try {
            let D = new URL(window.location.href),
                k = y.startsWith("//") ? new URL(D.protocol + y) : new URL(y),
                I = Ih(k.pathname, T);
            k.origin === D.origin && I != null ? y = I + k.search + k.hash : R = !0
        } catch {}
        let A = dS(y, {
                relative: o
            }),
            j = VS(y, {
                replace: d,
                state: m,
                target: v,
                preventScrollReset: b,
                relative: o,
                unstable_viewTransition: g
            });

        function H(D) {
            r && r(D), D.defaultPrevented || j(D)
        }
        return x.createElement("a", fh({}, S, {
            href: O || A,
            onClick: R || u ? r : H,
            ref: s,
            target: v
        }))
    });
var Ev;
(function(a) {
    a.UseScrollRestoration = "useScrollRestoration", a.UseSubmit = "useSubmit", a.UseSubmitFetcher = "useSubmitFetcher", a.UseFetcher = "useFetcher", a.useViewTransitionState = "useViewTransitionState"
})(Ev || (Ev = {}));
var Cv;
(function(a) {
    a.UseFetcher = "useFetcher", a.UseFetchers = "useFetchers", a.UseScrollRestoration = "useScrollRestoration"
})(Cv || (Cv = {}));

function VS(a, n) {
    let {
        target: s,
        replace: r,
        state: o,
        preventScrollReset: u,
        relative: d,
        unstable_viewTransition: m
    } = n === void 0 ? {} : n, v = t1(), y = Xl(), b = n1(a, {
        relative: d
    });
    return x.useCallback(g => {
        if (DS(g, s)) {
            g.preventDefault();
            let S = r !== void 0 ? r : nu(y) === nu(b);
            v(a, {
                replace: S,
                state: o,
                preventScrollReset: u,
                relative: d,
                unstable_viewTransition: m
            })
        }
    }, [y, v, b, r, o, s, a, u, d, m])
}
var Il = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(a) {
            return this.listeners.add(a), this.onSubscribe(), () => {
                this.listeners.delete(a), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    YS = {
        setTimeout: (a, n) => setTimeout(a, n),
        clearTimeout: a => clearTimeout(a),
        setInterval: (a, n) => setInterval(a, n),
        clearInterval: a => clearInterval(a)
    },
    Ti, Qh, j0, ZS = (j0 = class {
        constructor() {
            ce(this, Ti, YS);
            ce(this, Qh, !1)
        }
        setTimeoutProvider(a) {
            te(this, Ti, a)
        }
        setTimeout(a, n) {
            return E(this, Ti).setTimeout(a, n)
        }
        clearTimeout(a) {
            E(this, Ti).clearTimeout(a)
        }
        setInterval(a, n) {
            return E(this, Ti).setInterval(a, n)
        }
        clearInterval(a) {
            E(this, Ti).clearInterval(a)
        }
    }, Ti = new WeakMap, Qh = new WeakMap, j0),
    ys = new ZS;

function GS(a) {
    setTimeout(a, 0)
}
var Ns = typeof window > "u" || "Deno" in globalThis;

function $t() {}

function QS(a, n) {
    return typeof a == "function" ? a(n) : a
}

function dh(a) {
    return typeof a == "number" && a >= 0 && a !== 1 / 0
}

function l1(a, n) {
    return Math.max(a + (n || 0) - Date.now(), 0)
}

function ki(a, n) {
    return typeof a == "function" ? a(n) : a
}

function kn(a, n) {
    return typeof a == "function" ? a(n) : a
}

function Av(a, n) {
    const {
        type: s = "all",
        exact: r,
        fetchStatus: o,
        predicate: u,
        queryKey: d,
        stale: m
    } = a;
    if (d) {
        if (r) {
            if (n.queryHash !== Fh(d, n.options)) return !1
        } else if (!no(n.queryKey, d)) return !1
    }
    if (s !== "all") {
        const v = n.isActive();
        if (s === "active" && !v || s === "inactive" && v) return !1
    }
    return !(typeof m == "boolean" && n.isStale() !== m || o && o !== n.state.fetchStatus || u && !u(n))
}

function Nv(a, n) {
    const {
        exact: s,
        status: r,
        predicate: o,
        mutationKey: u
    } = a;
    if (u) {
        if (!n.options.mutationKey) return !1;
        if (s) {
            if (js(n.options.mutationKey) !== js(u)) return !1
        } else if (!no(n.options.mutationKey, u)) return !1
    }
    return !(r && n.state.status !== r || o && !o(n))
}

function Fh(a, n) {
    return ((n == null ? void 0 : n.queryKeyHashFn) || js)(a)
}

function js(a) {
    return JSON.stringify(a, (n, s) => hh(s) ? Object.keys(s).sort().reduce((r, o) => (r[o] = s[o], r), {}) : s)
}

function no(a, n) {
    return a === n ? !0 : typeof a != typeof n ? !1 : a && n && typeof a == "object" && typeof n == "object" ? Object.keys(n).every(s => no(a[s], n[s])) : !1
}
var $S = Object.prototype.hasOwnProperty;

function r1(a, n) {
    if (a === n) return a;
    const s = jv(a) && jv(n);
    if (!s && !(hh(a) && hh(n))) return n;
    const o = (s ? a : Object.keys(a)).length,
        u = s ? n : Object.keys(n),
        d = u.length,
        m = s ? new Array(d) : {};
    let v = 0;
    for (let y = 0; y < d; y++) {
        const b = s ? y : u[y],
            g = a[b],
            S = n[b];
        if (g === S) {
            m[b] = g, (s ? y < o : $S.call(a, b)) && v++;
            continue
        }
        if (g === null || S === null || typeof g != "object" || typeof S != "object") {
            m[b] = S;
            continue
        }
        const T = r1(g, S);
        m[b] = T, T === g && v++
    }
    return o === d && v === o ? a : m
}

function iu(a, n) {
    if (!n || Object.keys(a).length !== Object.keys(n).length) return !1;
    for (const s in a)
        if (a[s] !== n[s]) return !1;
    return !0
}

function jv(a) {
    return Array.isArray(a) && a.length === Object.keys(a).length
}

function hh(a) {
    if (!Ov(a)) return !1;
    const n = a.constructor;
    if (n === void 0) return !0;
    const s = n.prototype;
    return !(!Ov(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(a) !== Object.prototype)
}

function Ov(a) {
    return Object.prototype.toString.call(a) === "[object Object]"
}

function XS(a) {
    return new Promise(n => {
        ys.setTimeout(n, a)
    })
}

function mh(a, n, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(a, n) : s.structuralSharing !== !1 ? r1(a, n) : n
}

function IS(a, n, s = 0) {
    const r = [...a, n];
    return s && r.length > s ? r.slice(1) : r
}

function KS(a, n, s = 0) {
    const r = [n, ...a];
    return s && r.length > s ? r.slice(0, -1) : r
}
var Ph = Symbol();

function o1(a, n) {
    return !a.queryFn && (n != null && n.initialPromise) ? () => n.initialPromise : !a.queryFn || a.queryFn === Ph ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)) : a.queryFn
}

function c1(a, n) {
    return typeof a == "function" ? a(...n) : !!a
}
var gs, wi, Al, O0, FS = (O0 = class extends Il {
        constructor() {
            super();
            ce(this, gs);
            ce(this, wi);
            ce(this, Al);
            te(this, Al, n => {
                if (!Ns && window.addEventListener) {
                    const s = () => n();
                    return window.addEventListener("visibilitychange", s, !1), () => {
                        window.removeEventListener("visibilitychange", s)
                    }
                }
            })
        }
        onSubscribe() {
            E(this, wi) || this.setEventListener(E(this, Al))
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || ((n = E(this, wi)) == null || n.call(this), te(this, wi, void 0))
        }
        setEventListener(n) {
            var s;
            te(this, Al, n), (s = E(this, wi)) == null || s.call(this), te(this, wi, n(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(n) {
            E(this, gs) !== n && (te(this, gs, n), this.onFocus())
        }
        onFocus() {
            const n = this.isFocused();
            this.listeners.forEach(s => {
                s(n)
            })
        }
        isFocused() {
            var n;
            return typeof E(this, gs) == "boolean" ? E(this, gs) : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !== "hidden"
        }
    }, gs = new WeakMap, wi = new WeakMap, Al = new WeakMap, O0),
    Jh = new FS;

function ph() {
    let a, n;
    const s = new Promise((o, u) => {
        a = o, n = u
    });
    s.status = "pending", s.catch(() => {});

    function r(o) {
        Object.assign(s, o), delete s.resolve, delete s.reject
    }
    return s.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), a(o)
    }, s.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), n(o)
    }, s
}
var PS = GS;

function JS() {
    let a = [],
        n = 0,
        s = m => {
            m()
        },
        r = m => {
            m()
        },
        o = PS;
    const u = m => {
            n ? a.push(m) : o(() => {
                s(m)
            })
        },
        d = () => {
            const m = a;
            a = [], m.length && o(() => {
                r(() => {
                    m.forEach(v => {
                        s(v)
                    })
                })
            })
        };
    return {
        batch: m => {
            let v;
            n++;
            try {
                v = m()
            } finally {
                n--, n || d()
            }
            return v
        },
        batchCalls: m => (...v) => {
            u(() => {
                m(...v)
            })
        },
        schedule: u,
        setNotifyFunction: m => {
            s = m
        },
        setBatchNotifyFunction: m => {
            r = m
        },
        setScheduler: m => {
            o = m
        }
    }
}
var xt = JS(),
    Nl, Ei, jl, R0, WS = (R0 = class extends Il {
        constructor() {
            super();
            ce(this, Nl, !0);
            ce(this, Ei);
            ce(this, jl);
            te(this, jl, n => {
                if (!Ns && window.addEventListener) {
                    const s = () => n(!0),
                        r = () => n(!1);
                    return window.addEventListener("online", s, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", s), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            E(this, Ei) || this.setEventListener(E(this, jl))
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || ((n = E(this, Ei)) == null || n.call(this), te(this, Ei, void 0))
        }
        setEventListener(n) {
            var s;
            te(this, jl, n), (s = E(this, Ei)) == null || s.call(this), te(this, Ei, n(this.setOnline.bind(this)))
        }
        setOnline(n) {
            E(this, Nl) !== n && (te(this, Nl, n), this.listeners.forEach(r => {
                r(n)
            }))
        }
        isOnline() {
            return E(this, Nl)
        }
    }, Nl = new WeakMap, Ei = new WeakMap, jl = new WeakMap, R0),
    su = new WS;

function eT(a) {
    return Math.min(1e3 * 2 ** a, 3e4)
}

function u1(a) {
    return (a ? ? "online") === "online" ? su.isOnline() : !0
}
var yh = class extends Error {
    constructor(a) {
        super("CancelledError"), this.revert = a == null ? void 0 : a.revert, this.silent = a == null ? void 0 : a.silent
    }
};

function f1(a) {
    let n = !1,
        s = 0,
        r;
    const o = ph(),
        u = () => o.status !== "pending",
        d = R => {
            var A;
            if (!u()) {
                const j = new yh(R);
                S(j), (A = a.onCancel) == null || A.call(a, j)
            }
        },
        m = () => {
            n = !0
        },
        v = () => {
            n = !1
        },
        y = () => Jh.isFocused() && (a.networkMode === "always" || su.isOnline()) && a.canRun(),
        b = () => u1(a.networkMode) && a.canRun(),
        g = R => {
            u() || (r == null || r(), o.resolve(R))
        },
        S = R => {
            u() || (r == null || r(), o.reject(R))
        },
        T = () => new Promise(R => {
            var A;
            r = j => {
                (u() || y()) && R(j)
            }, (A = a.onPause) == null || A.call(a)
        }).then(() => {
            var R;
            r = void 0, u() || (R = a.onContinue) == null || R.call(a)
        }),
        O = () => {
            if (u()) return;
            let R;
            const A = s === 0 ? a.initialPromise : void 0;
            try {
                R = A ? ? a.fn()
            } catch (j) {
                R = Promise.reject(j)
            }
            Promise.resolve(R).then(g).catch(j => {
                var W;
                if (u()) return;
                const H = a.retry ? ? (Ns ? 0 : 3),
                    D = a.retryDelay ? ? eT,
                    k = typeof D == "function" ? D(s, j) : D,
                    I = H === !0 || typeof H == "number" && s < H || typeof H == "function" && H(s, j);
                if (n || !I) {
                    S(j);
                    return
                }
                s++, (W = a.onFail) == null || W.call(a, s, j), XS(k).then(() => y() ? void 0 : T()).then(() => {
                    n ? S(j) : O()
                })
            })
        };
    return {
        promise: o,
        status: () => o.status,
        cancel: d,
        continue: () => (r == null || r(), o),
        cancelRetry: m,
        continueRetry: v,
        canStart: b,
        start: () => (b() ? O() : T().then(O), o)
    }
}
var vs, M0, d1 = (M0 = class {
        constructor() {
            ce(this, vs)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), dh(this.gcTime) && te(this, vs, ys.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(a) {
            this.gcTime = Math.max(this.gcTime || 0, a ? ? (Ns ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            E(this, vs) && (ys.clearTimeout(E(this, vs)), te(this, vs, void 0))
        }
    }, vs = new WeakMap, M0),
    bs, Ol, Dn, _s, Ct, ho, xs, Zn, La, z0, tT = (z0 = class extends d1 {
        constructor(n) {
            super();
            ce(this, Zn);
            ce(this, bs);
            ce(this, Ol);
            ce(this, Dn);
            ce(this, _s);
            ce(this, Ct);
            ce(this, ho);
            ce(this, xs);
            te(this, xs, !1), te(this, ho, n.defaultOptions), this.setOptions(n.options), this.observers = [], te(this, _s, n.client), te(this, Dn, E(this, _s).getQueryCache()), this.queryKey = n.queryKey, this.queryHash = n.queryHash, te(this, bs, Mv(this.options)), this.state = n.state ? ? E(this, bs), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var n;
            return (n = E(this, Ct)) == null ? void 0 : n.promise
        }
        setOptions(n) {
            if (this.options = { ...E(this, ho),
                    ...n
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const s = Mv(this.options);
                s.data !== void 0 && (this.setState(Rv(s.data, s.dataUpdatedAt)), te(this, bs, s))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && E(this, Dn).remove(this)
        }
        setData(n, s) {
            const r = mh(this.state.data, n, this.options);
            return Oe(this, Zn, La).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: s == null ? void 0 : s.updatedAt,
                manual: s == null ? void 0 : s.manual
            }), r
        }
        setState(n, s) {
            Oe(this, Zn, La).call(this, {
                type: "setState",
                state: n,
                setStateOptions: s
            })
        }
        cancel(n) {
            var r, o;
            const s = (r = E(this, Ct)) == null ? void 0 : r.promise;
            return (o = E(this, Ct)) == null || o.cancel(n), s ? s.then($t).catch($t) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(E(this, bs))
        }
        isActive() {
            return this.observers.some(n => kn(n.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ph || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(n => ki(n.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(n = 0) {
            return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !l1(this.state.dataUpdatedAt, n)
        }
        onFocus() {
            var s;
            const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
            n == null || n.refetch({
                cancelRefetch: !1
            }), (s = E(this, Ct)) == null || s.continue()
        }
        onOnline() {
            var s;
            const n = this.observers.find(r => r.shouldFetchOnReconnect());
            n == null || n.refetch({
                cancelRefetch: !1
            }), (s = E(this, Ct)) == null || s.continue()
        }
        addObserver(n) {
            this.observers.includes(n) || (this.observers.push(n), this.clearGcTimeout(), E(this, Dn).notify({
                type: "observerAdded",
                query: this,
                observer: n
            }))
        }
        removeObserver(n) {
            this.observers.includes(n) && (this.observers = this.observers.filter(s => s !== n), this.observers.length || (E(this, Ct) && (E(this, xs) ? E(this, Ct).cancel({
                revert: !0
            }) : E(this, Ct).cancelRetry()), this.scheduleGc()), E(this, Dn).notify({
                type: "observerRemoved",
                query: this,
                observer: n
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Oe(this, Zn, La).call(this, {
                type: "invalidate"
            })
        }
        async fetch(n, s) {
            var v, y, b, g, S, T, O, R, A, j, H, D;
            if (this.state.fetchStatus !== "idle" && ((v = E(this, Ct)) == null ? void 0 : v.status()) !== "rejected") {
                if (this.state.data !== void 0 && (s != null && s.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (E(this, Ct)) return E(this, Ct).continueRetry(), E(this, Ct).promise
            }
            if (n && this.setOptions(n), !this.options.queryFn) {
                const k = this.observers.find(I => I.options.queryFn);
                k && this.setOptions(k.options)
            }
            const r = new AbortController,
                o = k => {
                    Object.defineProperty(k, "signal", {
                        enumerable: !0,
                        get: () => (te(this, xs, !0), r.signal)
                    })
                },
                u = () => {
                    const k = o1(this.options, s),
                        W = (() => {
                            const K = {
                                client: E(this, _s),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(K), K
                        })();
                    return te(this, xs, !1), this.options.persister ? this.options.persister(k, W, this) : k(W)
                },
                m = (() => {
                    const k = {
                        fetchOptions: s,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: E(this, _s),
                        state: this.state,
                        fetchFn: u
                    };
                    return o(k), k
                })();
            (y = this.options.behavior) == null || y.onFetch(m, this), te(this, Ol, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((b = m.fetchOptions) == null ? void 0 : b.meta)) && Oe(this, Zn, La).call(this, {
                type: "fetch",
                meta: (g = m.fetchOptions) == null ? void 0 : g.meta
            }), te(this, Ct, f1({
                initialPromise: s == null ? void 0 : s.initialPromise,
                fn: m.fetchFn,
                onCancel: k => {
                    k instanceof yh && k.revert && this.setState({ ...E(this, Ol),
                        fetchStatus: "idle"
                    }), r.abort()
                },
                onFail: (k, I) => {
                    Oe(this, Zn, La).call(this, {
                        type: "failed",
                        failureCount: k,
                        error: I
                    })
                },
                onPause: () => {
                    Oe(this, Zn, La).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Oe(this, Zn, La).call(this, {
                        type: "continue"
                    })
                },
                retry: m.options.retry,
                retryDelay: m.options.retryDelay,
                networkMode: m.options.networkMode,
                canRun: () => !0
            }));
            try {
                const k = await E(this, Ct).start();
                if (k === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(k), (T = (S = E(this, Dn).config).onSuccess) == null || T.call(S, k, this), (R = (O = E(this, Dn).config).onSettled) == null || R.call(O, k, this.state.error, this), k
            } catch (k) {
                if (k instanceof yh) {
                    if (k.silent) return E(this, Ct).promise;
                    if (k.revert) {
                        if (this.state.data === void 0) throw k;
                        return this.state.data
                    }
                }
                throw Oe(this, Zn, La).call(this, {
                    type: "error",
                    error: k
                }), (j = (A = E(this, Dn).config).onError) == null || j.call(A, k, this), (D = (H = E(this, Dn).config).onSettled) == null || D.call(H, this.state.data, k, this), k
            } finally {
                this.scheduleGc()
            }
        }
    }, bs = new WeakMap, Ol = new WeakMap, Dn = new WeakMap, _s = new WeakMap, Ct = new WeakMap, ho = new WeakMap, xs = new WeakMap, Zn = new WeakSet, La = function(n) {
        const s = r => {
            switch (n.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: n.failureCount,
                        fetchFailureReason: n.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...h1(r.data, this.options),
                        fetchMeta: n.meta ? ? null
                    };
                case "success":
                    const o = { ...r,
                        ...Rv(n.data, n.dataUpdatedAt),
                        dataUpdateCount: r.dataUpdateCount + 1,
                        ...!n.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return te(this, Ol, n.manual ? o : void 0), o;
                case "error":
                    const u = n.error;
                    return { ...r,
                        error: u,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: u,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...n.state
                    }
            }
        };
        this.state = s(this.state), xt.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), E(this, Dn).notify({
                query: this,
                type: "updated",
                action: n
            })
        })
    }, z0);

function h1(a, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: u1(n.networkMode) ? "fetching" : "paused",
        ...a === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Rv(a, n) {
    return {
        data: a,
        dataUpdatedAt: n ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Mv(a) {
    const n = typeof a.initialData == "function" ? a.initialData() : a.initialData,
        s = n !== void 0,
        r = s ? typeof a.initialDataUpdatedAt == "function" ? a.initialDataUpdatedAt() : a.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var sn, He, mo, Gt, Ss, Rl, Ua, Ci, po, Ml, zl, Ts, ws, Ai, Dl, Ke, $r, gh, vh, bh, _h, xh, Sh, Th, m1, D0, nT = (D0 = class extends Il {
    constructor(n, s) {
        super();
        ce(this, Ke);
        ce(this, sn);
        ce(this, He);
        ce(this, mo);
        ce(this, Gt);
        ce(this, Ss);
        ce(this, Rl);
        ce(this, Ua);
        ce(this, Ci);
        ce(this, po);
        ce(this, Ml);
        ce(this, zl);
        ce(this, Ts);
        ce(this, ws);
        ce(this, Ai);
        ce(this, Dl, new Set);
        this.options = s, te(this, sn, n), te(this, Ci, null), te(this, Ua, ph()), this.bindMethods(), this.setOptions(s)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (E(this, He).addObserver(this), zv(E(this, He), this.options) ? Oe(this, Ke, $r).call(this) : this.updateResult(), Oe(this, Ke, _h).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return wh(E(this, He), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return wh(E(this, He), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, Oe(this, Ke, xh).call(this), Oe(this, Ke, Sh).call(this), E(this, He).removeObserver(this)
    }
    setOptions(n) {
        const s = this.options,
            r = E(this, He);
        if (this.options = E(this, sn).defaultQueryOptions(n), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof kn(this.options.enabled, E(this, He)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Oe(this, Ke, Th).call(this), E(this, He).setOptions(this.options), s._defaulted && !iu(this.options, s) && E(this, sn).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: E(this, He),
            observer: this
        });
        const o = this.hasListeners();
        o && Dv(E(this, He), r, this.options, s) && Oe(this, Ke, $r).call(this), this.updateResult(), o && (E(this, He) !== r || kn(this.options.enabled, E(this, He)) !== kn(s.enabled, E(this, He)) || ki(this.options.staleTime, E(this, He)) !== ki(s.staleTime, E(this, He))) && Oe(this, Ke, gh).call(this);
        const u = Oe(this, Ke, vh).call(this);
        o && (E(this, He) !== r || kn(this.options.enabled, E(this, He)) !== kn(s.enabled, E(this, He)) || u !== E(this, Ai)) && Oe(this, Ke, bh).call(this, u)
    }
    getOptimisticResult(n) {
        const s = E(this, sn).getQueryCache().build(E(this, sn), n),
            r = this.createResult(s, n);
        return iT(this, r) && (te(this, Gt, r), te(this, Rl, this.options), te(this, Ss, E(this, He).state)), r
    }
    getCurrentResult() {
        return E(this, Gt)
    }
    trackResult(n, s) {
        return new Proxy(n, {
            get: (r, o) => (this.trackProp(o), s == null || s(o), o === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && E(this, Ua).status === "pending" && E(this, Ua).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(r, o))
        })
    }
    trackProp(n) {
        E(this, Dl).add(n)
    }
    getCurrentQuery() {
        return E(this, He)
    }
    refetch({ ...n
    } = {}) {
        return this.fetch({ ...n
        })
    }
    fetchOptimistic(n) {
        const s = E(this, sn).defaultQueryOptions(n),
            r = E(this, sn).getQueryCache().build(E(this, sn), s);
        return r.fetch().then(() => this.createResult(r, s))
    }
    fetch(n) {
        return Oe(this, Ke, $r).call(this, { ...n,
            cancelRefetch: n.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), E(this, Gt)))
    }
    createResult(n, s) {
        var we;
        const r = E(this, He),
            o = this.options,
            u = E(this, Gt),
            d = E(this, Ss),
            m = E(this, Rl),
            y = n !== r ? n.state : E(this, mo),
            {
                state: b
            } = n;
        let g = { ...b
            },
            S = !1,
            T;
        if (s._optimisticResults) {
            const ae = this.hasListeners(),
                ye = !ae && zv(n, s),
                ve = ae && Dv(n, r, s, o);
            (ye || ve) && (g = { ...g,
                ...h1(b.data, n.options)
            }), s._optimisticResults === "isRestoring" && (g.fetchStatus = "idle")
        }
        let {
            error: O,
            errorUpdatedAt: R,
            status: A
        } = g;
        T = g.data;
        let j = !1;
        if (s.placeholderData !== void 0 && T === void 0 && A === "pending") {
            let ae;
            u != null && u.isPlaceholderData && s.placeholderData === (m == null ? void 0 : m.placeholderData) ? (ae = u.data, j = !0) : ae = typeof s.placeholderData == "function" ? s.placeholderData((we = E(this, zl)) == null ? void 0 : we.state.data, E(this, zl)) : s.placeholderData, ae !== void 0 && (A = "success", T = mh(u == null ? void 0 : u.data, ae, s), S = !0)
        }
        if (s.select && T !== void 0 && !j)
            if (u && T === (d == null ? void 0 : d.data) && s.select === E(this, po)) T = E(this, Ml);
            else try {
                te(this, po, s.select), T = s.select(T), T = mh(u == null ? void 0 : u.data, T, s), te(this, Ml, T), te(this, Ci, null)
            } catch (ae) {
                te(this, Ci, ae)
            }
        E(this, Ci) && (O = E(this, Ci), T = E(this, Ml), R = Date.now(), A = "error");
        const H = g.fetchStatus === "fetching",
            D = A === "pending",
            k = A === "error",
            I = D && H,
            W = T !== void 0,
            ee = {
                status: A,
                fetchStatus: g.fetchStatus,
                isPending: D,
                isSuccess: A === "success",
                isError: k,
                isInitialLoading: I,
                isLoading: I,
                data: T,
                dataUpdatedAt: g.dataUpdatedAt,
                error: O,
                errorUpdatedAt: R,
                failureCount: g.fetchFailureCount,
                failureReason: g.fetchFailureReason,
                errorUpdateCount: g.errorUpdateCount,
                isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
                isFetchedAfterMount: g.dataUpdateCount > y.dataUpdateCount || g.errorUpdateCount > y.errorUpdateCount,
                isFetching: H,
                isRefetching: H && !D,
                isLoadingError: k && !W,
                isPaused: g.fetchStatus === "paused",
                isPlaceholderData: S,
                isRefetchError: k && W,
                isStale: Wh(n, s),
                refetch: this.refetch,
                promise: E(this, Ua),
                isEnabled: kn(s.enabled, n) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const ae = be => {
                    ee.status === "error" ? be.reject(ee.error) : ee.data !== void 0 && be.resolve(ee.data)
                },
                ye = () => {
                    const be = te(this, Ua, ee.promise = ph());
                    ae(be)
                },
                ve = E(this, Ua);
            switch (ve.status) {
                case "pending":
                    n.queryHash === r.queryHash && ae(ve);
                    break;
                case "fulfilled":
                    (ee.status === "error" || ee.data !== ve.value) && ye();
                    break;
                case "rejected":
                    (ee.status !== "error" || ee.error !== ve.reason) && ye();
                    break
            }
        }
        return ee
    }
    updateResult() {
        const n = E(this, Gt),
            s = this.createResult(E(this, He), this.options);
        if (te(this, Ss, E(this, He).state), te(this, Rl, this.options), E(this, Ss).data !== void 0 && te(this, zl, E(this, He)), iu(s, n)) return;
        te(this, Gt, s);
        const r = () => {
            if (!n) return !0;
            const {
                notifyOnChangeProps: o
            } = this.options, u = typeof o == "function" ? o() : o;
            if (u === "all" || !u && !E(this, Dl).size) return !0;
            const d = new Set(u ? ? E(this, Dl));
            return this.options.throwOnError && d.add("error"), Object.keys(E(this, Gt)).some(m => {
                const v = m;
                return E(this, Gt)[v] !== n[v] && d.has(v)
            })
        };
        Oe(this, Ke, m1).call(this, {
            listeners: r()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Oe(this, Ke, _h).call(this)
    }
}, sn = new WeakMap, He = new WeakMap, mo = new WeakMap, Gt = new WeakMap, Ss = new WeakMap, Rl = new WeakMap, Ua = new WeakMap, Ci = new WeakMap, po = new WeakMap, Ml = new WeakMap, zl = new WeakMap, Ts = new WeakMap, ws = new WeakMap, Ai = new WeakMap, Dl = new WeakMap, Ke = new WeakSet, $r = function(n) {
    Oe(this, Ke, Th).call(this);
    let s = E(this, He).fetch(this.options, n);
    return n != null && n.throwOnError || (s = s.catch($t)), s
}, gh = function() {
    Oe(this, Ke, xh).call(this);
    const n = ki(this.options.staleTime, E(this, He));
    if (Ns || E(this, Gt).isStale || !dh(n)) return;
    const r = l1(E(this, Gt).dataUpdatedAt, n) + 1;
    te(this, Ts, ys.setTimeout(() => {
        E(this, Gt).isStale || this.updateResult()
    }, r))
}, vh = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, He)) : this.options.refetchInterval) ? ? !1
}, bh = function(n) {
    Oe(this, Ke, Sh).call(this), te(this, Ai, n), !(Ns || kn(this.options.enabled, E(this, He)) === !1 || !dh(E(this, Ai)) || E(this, Ai) === 0) && te(this, ws, ys.setInterval(() => {
        (this.options.refetchIntervalInBackground || Jh.isFocused()) && Oe(this, Ke, $r).call(this)
    }, E(this, Ai)))
}, _h = function() {
    Oe(this, Ke, gh).call(this), Oe(this, Ke, bh).call(this, Oe(this, Ke, vh).call(this))
}, xh = function() {
    E(this, Ts) && (ys.clearTimeout(E(this, Ts)), te(this, Ts, void 0))
}, Sh = function() {
    E(this, ws) && (ys.clearInterval(E(this, ws)), te(this, ws, void 0))
}, Th = function() {
    const n = E(this, sn).getQueryCache().build(E(this, sn), this.options);
    if (n === E(this, He)) return;
    const s = E(this, He);
    te(this, He, n), te(this, mo, n.state), this.hasListeners() && (s == null || s.removeObserver(this), n.addObserver(this))
}, m1 = function(n) {
    xt.batch(() => {
        n.listeners && this.listeners.forEach(s => {
            s(E(this, Gt))
        }), E(this, sn).getQueryCache().notify({
            query: E(this, He),
            type: "observerResultsUpdated"
        })
    })
}, D0);

function aT(a, n) {
    return kn(n.enabled, a) !== !1 && a.state.data === void 0 && !(a.state.status === "error" && n.retryOnMount === !1)
}

function zv(a, n) {
    return aT(a, n) || a.state.data !== void 0 && wh(a, n, n.refetchOnMount)
}

function wh(a, n, s) {
    if (kn(n.enabled, a) !== !1 && ki(n.staleTime, a) !== "static") {
        const r = typeof s == "function" ? s(a) : s;
        return r === "always" || r !== !1 && Wh(a, n)
    }
    return !1
}

function Dv(a, n, s, r) {
    return (a !== n || kn(r.enabled, a) === !1) && (!s.suspense || a.state.status !== "error") && Wh(a, s)
}

function Wh(a, n) {
    return kn(n.enabled, a) !== !1 && a.isStaleByTime(ki(n.staleTime, a))
}

function iT(a, n) {
    return !iu(a.getCurrentResult(), n)
}

function kv(a) {
    return {
        onFetch: (n, s) => {
            var b, g, S, T, O;
            const r = n.options,
                o = (S = (g = (b = n.fetchOptions) == null ? void 0 : b.meta) == null ? void 0 : g.fetchMore) == null ? void 0 : S.direction,
                u = ((T = n.state.data) == null ? void 0 : T.pages) || [],
                d = ((O = n.state.data) == null ? void 0 : O.pageParams) || [];
            let m = {
                    pages: [],
                    pageParams: []
                },
                v = 0;
            const y = async () => {
                let R = !1;
                const A = D => {
                        Object.defineProperty(D, "signal", {
                            enumerable: !0,
                            get: () => (n.signal.aborted ? R = !0 : n.signal.addEventListener("abort", () => {
                                R = !0
                            }), n.signal)
                        })
                    },
                    j = o1(n.options, n.fetchOptions),
                    H = async (D, k, I) => {
                        if (R) return Promise.reject();
                        if (k == null && D.pages.length) return Promise.resolve(D);
                        const K = (() => {
                                const ye = {
                                    client: n.client,
                                    queryKey: n.queryKey,
                                    pageParam: k,
                                    direction: I ? "backward" : "forward",
                                    meta: n.options.meta
                                };
                                return A(ye), ye
                            })(),
                            ee = await j(K),
                            {
                                maxPages: we
                            } = n.options,
                            ae = I ? KS : IS;
                        return {
                            pages: ae(D.pages, ee, we),
                            pageParams: ae(D.pageParams, k, we)
                        }
                    };
                if (o && u.length) {
                    const D = o === "backward",
                        k = D ? sT : Bv,
                        I = {
                            pages: u,
                            pageParams: d
                        },
                        W = k(r, I);
                    m = await H(I, W, D)
                } else {
                    const D = a ? ? u.length;
                    do {
                        const k = v === 0 ? d[0] ? ? r.initialPageParam : Bv(r, m);
                        if (v > 0 && k == null) break;
                        m = await H(m, k), v++
                    } while (v < D)
                }
                return m
            };
            n.options.persister ? n.fetchFn = () => {
                var R, A;
                return (A = (R = n.options).persister) == null ? void 0 : A.call(R, y, {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal
                }, s)
            } : n.fetchFn = y
        }
    }
}

function Bv(a, {
    pages: n,
    pageParams: s
}) {
    const r = n.length - 1;
    return n.length > 0 ? a.getNextPageParam(n[r], n, s[r], s) : void 0
}

function sT(a, {
    pages: n,
    pageParams: s
}) {
    var r;
    return n.length > 0 ? (r = a.getPreviousPageParam) == null ? void 0 : r.call(a, n[0], n, s[0], s) : void 0
}
var yo, ia, Qt, Es, sa, xi, k0, lT = (k0 = class extends d1 {
    constructor(n) {
        super();
        ce(this, sa);
        ce(this, yo);
        ce(this, ia);
        ce(this, Qt);
        ce(this, Es);
        te(this, yo, n.client), this.mutationId = n.mutationId, te(this, Qt, n.mutationCache), te(this, ia, []), this.state = n.state || p1(), this.setOptions(n.options), this.scheduleGc()
    }
    setOptions(n) {
        this.options = n, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        E(this, ia).includes(n) || (E(this, ia).push(n), this.clearGcTimeout(), E(this, Qt).notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        te(this, ia, E(this, ia).filter(s => s !== n)), this.scheduleGc(), E(this, Qt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        E(this, ia).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, Qt).remove(this))
    }
    continue () {
        var n;
        return ((n = E(this, Es)) == null ? void 0 : n.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(n) {
        var d, m, v, y, b, g, S, T, O, R, A, j, H, D, k, I, W, K, ee, we;
        const s = () => {
                Oe(this, sa, xi).call(this, {
                    type: "continue"
                })
            },
            r = {
                client: E(this, yo),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        te(this, Es, f1({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, r) : Promise.reject(new Error("No mutationFn found")),
            onFail: (ae, ye) => {
                Oe(this, sa, xi).call(this, {
                    type: "failed",
                    failureCount: ae,
                    error: ye
                })
            },
            onPause: () => {
                Oe(this, sa, xi).call(this, {
                    type: "pause"
                })
            },
            onContinue: s,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, Qt).canRun(this)
        }));
        const o = this.state.status === "pending",
            u = !E(this, Es).canStart();
        try {
            if (o) s();
            else {
                Oe(this, sa, xi).call(this, {
                    type: "pending",
                    variables: n,
                    isPaused: u
                }), await ((m = (d = E(this, Qt).config).onMutate) == null ? void 0 : m.call(d, n, this, r));
                const ye = await ((y = (v = this.options).onMutate) == null ? void 0 : y.call(v, n, r));
                ye !== this.state.context && Oe(this, sa, xi).call(this, {
                    type: "pending",
                    context: ye,
                    variables: n,
                    isPaused: u
                })
            }
            const ae = await E(this, Es).start();
            return await ((g = (b = E(this, Qt).config).onSuccess) == null ? void 0 : g.call(b, ae, n, this.state.context, this, r)), await ((T = (S = this.options).onSuccess) == null ? void 0 : T.call(S, ae, n, this.state.context, r)), await ((R = (O = E(this, Qt).config).onSettled) == null ? void 0 : R.call(O, ae, null, this.state.variables, this.state.context, this, r)), await ((j = (A = this.options).onSettled) == null ? void 0 : j.call(A, ae, null, n, this.state.context, r)), Oe(this, sa, xi).call(this, {
                type: "success",
                data: ae
            }), ae
        } catch (ae) {
            try {
                throw await ((D = (H = E(this, Qt).config).onError) == null ? void 0 : D.call(H, ae, n, this.state.context, this, r)), await ((I = (k = this.options).onError) == null ? void 0 : I.call(k, ae, n, this.state.context, r)), await ((K = (W = E(this, Qt).config).onSettled) == null ? void 0 : K.call(W, void 0, ae, this.state.variables, this.state.context, this, r)), await ((we = (ee = this.options).onSettled) == null ? void 0 : we.call(ee, void 0, ae, n, this.state.context, r)), ae
            } finally {
                Oe(this, sa, xi).call(this, {
                    type: "error",
                    error: ae
                })
            }
        } finally {
            E(this, Qt).runNext(this)
        }
    }
}, yo = new WeakMap, ia = new WeakMap, Qt = new WeakMap, Es = new WeakMap, sa = new WeakSet, xi = function(n) {
    const s = r => {
        switch (n.type) {
            case "failed":
                return { ...r,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return { ...r,
                    isPaused: !0
                };
            case "continue":
                return { ...r,
                    isPaused: !1
                };
            case "pending":
                return { ...r,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...r,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...r,
                    data: void 0,
                    error: n.error,
                    failureCount: r.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = s(this.state), xt.batch(() => {
        E(this, ia).forEach(r => {
            r.onMutationUpdate(n)
        }), E(this, Qt).notify({
            mutation: this,
            type: "updated",
            action: n
        })
    })
}, k0);

function p1() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var qa, Gn, go, B0, rT = (B0 = class extends Il {
    constructor(n = {}) {
        super();
        ce(this, qa);
        ce(this, Gn);
        ce(this, go);
        this.config = n, te(this, qa, new Set), te(this, Gn, new Map), te(this, go, 0)
    }
    build(n, s, r) {
        const o = new lT({
            client: n,
            mutationCache: this,
            mutationId: ++Uc(this, go)._,
            options: n.defaultMutationOptions(s),
            state: r
        });
        return this.add(o), o
    }
    add(n) {
        E(this, qa).add(n);
        const s = qc(n);
        if (typeof s == "string") {
            const r = E(this, Gn).get(s);
            r ? r.push(n) : E(this, Gn).set(s, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (E(this, qa).delete(n)) {
            const s = qc(n);
            if (typeof s == "string") {
                const r = E(this, Gn).get(s);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(n);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === n && E(this, Gn).delete(s)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const s = qc(n);
        if (typeof s == "string") {
            const r = E(this, Gn).get(s),
                o = r == null ? void 0 : r.find(u => u.state.status === "pending");
            return !o || o === n
        } else return !0
    }
    runNext(n) {
        var r;
        const s = qc(n);
        if (typeof s == "string") {
            const o = (r = E(this, Gn).get(s)) == null ? void 0 : r.find(u => u !== n && u.state.isPaused);
            return (o == null ? void 0 : o.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        xt.batch(() => {
            E(this, qa).forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }), E(this, qa).clear(), E(this, Gn).clear()
        })
    }
    getAll() {
        return Array.from(E(this, qa))
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(r => Nv(s, r))
    }
    findAll(n = {}) {
        return this.getAll().filter(s => Nv(n, s))
    }
    notify(n) {
        xt.batch(() => {
            this.listeners.forEach(s => {
                s(n)
            })
        })
    }
    resumePausedMutations() {
        const n = this.getAll().filter(s => s.state.isPaused);
        return xt.batch(() => Promise.all(n.map(s => s.continue().catch($t))))
    }
}, qa = new WeakMap, Gn = new WeakMap, go = new WeakMap, B0);

function qc(a) {
    var n;
    return (n = a.options.scope) == null ? void 0 : n.id
}
var Ha, Ni, ln, Va, Za, Ic, Eh, L0, oT = (L0 = class extends Il {
        constructor(s, r) {
            super();
            ce(this, Za);
            ce(this, Ha);
            ce(this, Ni);
            ce(this, ln);
            ce(this, Va);
            te(this, Ha, s), this.setOptions(r), this.bindMethods(), Oe(this, Za, Ic).call(this)
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(s) {
            var o;
            const r = this.options;
            this.options = E(this, Ha).defaultMutationOptions(s), iu(this.options, r) || E(this, Ha).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: E(this, ln),
                observer: this
            }), r != null && r.mutationKey && this.options.mutationKey && js(r.mutationKey) !== js(this.options.mutationKey) ? this.reset() : ((o = E(this, ln)) == null ? void 0 : o.state.status) === "pending" && E(this, ln).setOptions(this.options)
        }
        onUnsubscribe() {
            var s;
            this.hasListeners() || (s = E(this, ln)) == null || s.removeObserver(this)
        }
        onMutationUpdate(s) {
            Oe(this, Za, Ic).call(this), Oe(this, Za, Eh).call(this, s)
        }
        getCurrentResult() {
            return E(this, Ni)
        }
        reset() {
            var s;
            (s = E(this, ln)) == null || s.removeObserver(this), te(this, ln, void 0), Oe(this, Za, Ic).call(this), Oe(this, Za, Eh).call(this)
        }
        mutate(s, r) {
            var o;
            return te(this, Va, r), (o = E(this, ln)) == null || o.removeObserver(this), te(this, ln, E(this, Ha).getMutationCache().build(E(this, Ha), this.options)), E(this, ln).addObserver(this), E(this, ln).execute(s)
        }
    }, Ha = new WeakMap, Ni = new WeakMap, ln = new WeakMap, Va = new WeakMap, Za = new WeakSet, Ic = function() {
        var r;
        const s = ((r = E(this, ln)) == null ? void 0 : r.state) ? ? p1();
        te(this, Ni, { ...s,
            isPending: s.status === "pending",
            isSuccess: s.status === "success",
            isError: s.status === "error",
            isIdle: s.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        })
    }, Eh = function(s) {
        xt.batch(() => {
            var r, o, u, d, m, v, y, b;
            if (E(this, Va) && this.hasListeners()) {
                const g = E(this, Ni).variables,
                    S = E(this, Ni).context,
                    T = {
                        client: E(this, Ha),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                (s == null ? void 0 : s.type) === "success" ? ((o = (r = E(this, Va)).onSuccess) == null || o.call(r, s.data, g, S, T), (d = (u = E(this, Va)).onSettled) == null || d.call(u, s.data, null, g, S, T)) : (s == null ? void 0 : s.type) === "error" && ((v = (m = E(this, Va)).onError) == null || v.call(m, s.error, g, S, T), (b = (y = E(this, Va)).onSettled) == null || b.call(y, void 0, s.error, g, S, T))
            }
            this.listeners.forEach(g => {
                g(E(this, Ni))
            })
        })
    }, L0),
    la, U0, cT = (U0 = class extends Il {
        constructor(n = {}) {
            super();
            ce(this, la);
            this.config = n, te(this, la, new Map)
        }
        build(n, s, r) {
            const o = s.queryKey,
                u = s.queryHash ? ? Fh(o, s);
            let d = this.get(u);
            return d || (d = new tT({
                client: n,
                queryKey: o,
                queryHash: u,
                options: n.defaultQueryOptions(s),
                state: r,
                defaultOptions: n.getQueryDefaults(o)
            }), this.add(d)), d
        }
        add(n) {
            E(this, la).has(n.queryHash) || (E(this, la).set(n.queryHash, n), this.notify({
                type: "added",
                query: n
            }))
        }
        remove(n) {
            const s = E(this, la).get(n.queryHash);
            s && (n.destroy(), s === n && E(this, la).delete(n.queryHash), this.notify({
                type: "removed",
                query: n
            }))
        }
        clear() {
            xt.batch(() => {
                this.getAll().forEach(n => {
                    this.remove(n)
                })
            })
        }
        get(n) {
            return E(this, la).get(n)
        }
        getAll() {
            return [...E(this, la).values()]
        }
        find(n) {
            const s = {
                exact: !0,
                ...n
            };
            return this.getAll().find(r => Av(s, r))
        }
        findAll(n = {}) {
            const s = this.getAll();
            return Object.keys(n).length > 0 ? s.filter(r => Av(n, r)) : s
        }
        notify(n) {
            xt.batch(() => {
                this.listeners.forEach(s => {
                    s(n)
                })
            })
        }
        onFocus() {
            xt.batch(() => {
                this.getAll().forEach(n => {
                    n.onFocus()
                })
            })
        }
        onOnline() {
            xt.batch(() => {
                this.getAll().forEach(n => {
                    n.onOnline()
                })
            })
        }
    }, la = new WeakMap, U0),
    ut, ji, Oi, kl, Bl, Ri, Ll, Ul, q0, uT = (q0 = class {
        constructor(a = {}) {
            ce(this, ut);
            ce(this, ji);
            ce(this, Oi);
            ce(this, kl);
            ce(this, Bl);
            ce(this, Ri);
            ce(this, Ll);
            ce(this, Ul);
            te(this, ut, a.queryCache || new cT), te(this, ji, a.mutationCache || new rT), te(this, Oi, a.defaultOptions || {}), te(this, kl, new Map), te(this, Bl, new Map), te(this, Ri, 0)
        }
        mount() {
            Uc(this, Ri)._++, E(this, Ri) === 1 && (te(this, Ll, Jh.subscribe(async a => {
                a && (await this.resumePausedMutations(), E(this, ut).onFocus())
            })), te(this, Ul, su.subscribe(async a => {
                a && (await this.resumePausedMutations(), E(this, ut).onOnline())
            })))
        }
        unmount() {
            var a, n;
            Uc(this, Ri)._--, E(this, Ri) === 0 && ((a = E(this, Ll)) == null || a.call(this), te(this, Ll, void 0), (n = E(this, Ul)) == null || n.call(this), te(this, Ul, void 0))
        }
        isFetching(a) {
            return E(this, ut).findAll({ ...a,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(a) {
            return E(this, ji).findAll({ ...a,
                status: "pending"
            }).length
        }
        getQueryData(a) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: a
            });
            return (s = E(this, ut).get(n.queryHash)) == null ? void 0 : s.state.data
        }
        ensureQueryData(a) {
            const n = this.defaultQueryOptions(a),
                s = E(this, ut).build(this, n),
                r = s.state.data;
            return r === void 0 ? this.fetchQuery(a) : (a.revalidateIfStale && s.isStaleByTime(ki(n.staleTime, s)) && this.prefetchQuery(n), Promise.resolve(r))
        }
        getQueriesData(a) {
            return E(this, ut).findAll(a).map(({
                queryKey: n,
                state: s
            }) => {
                const r = s.data;
                return [n, r]
            })
        }
        setQueryData(a, n, s) {
            const r = this.defaultQueryOptions({
                    queryKey: a
                }),
                o = E(this, ut).get(r.queryHash),
                u = o == null ? void 0 : o.state.data,
                d = QS(n, u);
            if (d !== void 0) return E(this, ut).build(this, r).setData(d, { ...s,
                manual: !0
            })
        }
        setQueriesData(a, n, s) {
            return xt.batch(() => E(this, ut).findAll(a).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, n, s)]))
        }
        getQueryState(a) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: a
            });
            return (s = E(this, ut).get(n.queryHash)) == null ? void 0 : s.state
        }
        removeQueries(a) {
            const n = E(this, ut);
            xt.batch(() => {
                n.findAll(a).forEach(s => {
                    n.remove(s)
                })
            })
        }
        resetQueries(a, n) {
            const s = E(this, ut);
            return xt.batch(() => (s.findAll(a).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...a
            }, n)))
        }
        cancelQueries(a, n = {}) {
            const s = {
                    revert: !0,
                    ...n
                },
                r = xt.batch(() => E(this, ut).findAll(a).map(o => o.cancel(s)));
            return Promise.all(r).then($t).catch($t)
        }
        invalidateQueries(a, n = {}) {
            return xt.batch(() => (E(this, ut).findAll(a).forEach(s => {
                s.invalidate()
            }), (a == null ? void 0 : a.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...a,
                type: (a == null ? void 0 : a.refetchType) ? ? (a == null ? void 0 : a.type) ? ? "active"
            }, n)))
        }
        refetchQueries(a, n = {}) {
            const s = { ...n,
                    cancelRefetch: n.cancelRefetch ? ? !0
                },
                r = xt.batch(() => E(this, ut).findAll(a).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let u = o.fetch(void 0, s);
                    return s.throwOnError || (u = u.catch($t)), o.state.fetchStatus === "paused" ? Promise.resolve() : u
                }));
            return Promise.all(r).then($t)
        }
        fetchQuery(a) {
            const n = this.defaultQueryOptions(a);
            n.retry === void 0 && (n.retry = !1);
            const s = E(this, ut).build(this, n);
            return s.isStaleByTime(ki(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
        }
        prefetchQuery(a) {
            return this.fetchQuery(a).then($t).catch($t)
        }
        fetchInfiniteQuery(a) {
            return a.behavior = kv(a.pages), this.fetchQuery(a)
        }
        prefetchInfiniteQuery(a) {
            return this.fetchInfiniteQuery(a).then($t).catch($t)
        }
        ensureInfiniteQueryData(a) {
            return a.behavior = kv(a.pages), this.ensureQueryData(a)
        }
        resumePausedMutations() {
            return su.isOnline() ? E(this, ji).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return E(this, ut)
        }
        getMutationCache() {
            return E(this, ji)
        }
        getDefaultOptions() {
            return E(this, Oi)
        }
        setDefaultOptions(a) {
            te(this, Oi, a)
        }
        setQueryDefaults(a, n) {
            E(this, kl).set(js(a), {
                queryKey: a,
                defaultOptions: n
            })
        }
        getQueryDefaults(a) {
            const n = [...E(this, kl).values()],
                s = {};
            return n.forEach(r => {
                no(a, r.queryKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        setMutationDefaults(a, n) {
            E(this, Bl).set(js(a), {
                mutationKey: a,
                defaultOptions: n
            })
        }
        getMutationDefaults(a) {
            const n = [...E(this, Bl).values()],
                s = {};
            return n.forEach(r => {
                no(a, r.mutationKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        defaultQueryOptions(a) {
            if (a._defaulted) return a;
            const n = { ...E(this, Oi).queries,
                ...this.getQueryDefaults(a.queryKey),
                ...a,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = Fh(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.queryFn === Ph && (n.enabled = !1), n
        }
        defaultMutationOptions(a) {
            return a != null && a._defaulted ? a : { ...E(this, Oi).mutations,
                ...(a == null ? void 0 : a.mutationKey) && this.getMutationDefaults(a.mutationKey),
                ...a,
                _defaulted: !0
            }
        }
        clear() {
            E(this, ut).clear(), E(this, ji).clear()
        }
    }, ut = new WeakMap, ji = new WeakMap, Oi = new WeakMap, kl = new WeakMap, Bl = new WeakMap, Ri = new WeakMap, Ll = new WeakMap, Ul = new WeakMap, q0),
    y1 = x.createContext(void 0),
    g1 = a => {
        const n = x.useContext(y1);
        if (!n) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return n
    },
    fT = ({
        client: a,
        children: n
    }) => (x.useEffect(() => (a.mount(), () => {
        a.unmount()
    }), [a]), p.jsx(y1.Provider, {
        value: a,
        children: n
    })),
    v1 = x.createContext(!1),
    dT = () => x.useContext(v1);
v1.Provider;

function hT() {
    let a = !1;
    return {
        clearReset: () => {
            a = !1
        },
        reset: () => {
            a = !0
        },
        isReset: () => a
    }
}
var mT = x.createContext(hT()),
    pT = () => x.useContext(mT),
    yT = (a, n) => {
        (a.suspense || a.throwOnError || a.experimental_prefetchInRender) && (n.isReset() || (a.retryOnMount = !1))
    },
    gT = a => {
        x.useEffect(() => {
            a.clearReset()
        }, [a])
    },
    vT = ({
        result: a,
        errorResetBoundary: n,
        throwOnError: s,
        query: r,
        suspense: o
    }) => a.isError && !n.isReset() && !a.isFetching && r && (o && a.data === void 0 || c1(s, [a.error, r])),
    bT = a => {
        if (a.suspense) {
            const s = o => o === "static" ? o : Math.max(o ? ? 1e3, 1e3),
                r = a.staleTime;
            a.staleTime = typeof r == "function" ? (...o) => s(r(...o)) : s(r), typeof a.gcTime == "number" && (a.gcTime = Math.max(a.gcTime, 1e3))
        }
    },
    _T = (a, n) => a.isLoading && a.isFetching && !n,
    xT = (a, n) => (a == null ? void 0 : a.suspense) && n.isPending,
    Lv = (a, n, s) => n.fetchOptimistic(a).catch(() => {
        s.clearReset()
    });

function ST(a, n, s) {
    var g, S, T, O, R;
    const r = dT(),
        o = pT(),
        u = g1(),
        d = u.defaultQueryOptions(a);
    (S = (g = u.getDefaultOptions().queries) == null ? void 0 : g._experimental_beforeQuery) == null || S.call(g, d), d._optimisticResults = r ? "isRestoring" : "optimistic", bT(d), yT(d, o), gT(o);
    const m = !u.getQueryCache().get(d.queryHash),
        [v] = x.useState(() => new n(u, d)),
        y = v.getOptimisticResult(d),
        b = !r && a.subscribed !== !1;
    if (x.useSyncExternalStore(x.useCallback(A => {
            const j = b ? v.subscribe(xt.batchCalls(A)) : $t;
            return v.updateResult(), j
        }, [v, b]), () => v.getCurrentResult(), () => v.getCurrentResult()), x.useEffect(() => {
            v.setOptions(d)
        }, [d, v]), xT(d, y)) throw Lv(d, v, o);
    if (vT({
            result: y,
            errorResetBoundary: o,
            throwOnError: d.throwOnError,
            query: u.getQueryCache().get(d.queryHash),
            suspense: d.suspense
        })) throw y.error;
    if ((O = (T = u.getDefaultOptions().queries) == null ? void 0 : T._experimental_afterQuery) == null || O.call(T, d, y), d.experimental_prefetchInRender && !Ns && _T(y, r)) {
        const A = m ? Lv(d, v, o) : (R = u.getQueryCache().get(d.queryHash)) == null ? void 0 : R.promise;
        A == null || A.catch($t).finally(() => {
            v.updateResult()
        })
    }
    return d.notifyOnChangeProps ? y : v.trackResult(y)
}

function TT(a, n) {
    return ST(a, nT)
}

function wT(a, n) {
    const s = g1(),
        [r] = x.useState(() => new oT(s, a));
    x.useEffect(() => {
        r.setOptions(a)
    }, [r, a]);
    const o = x.useSyncExternalStore(x.useCallback(d => r.subscribe(xt.batchCalls(d)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        u = x.useCallback((d, m) => {
            r.mutate(d, m).catch($t)
        }, [r]);
    if (o.error && c1(r.options.throwOnError, [o.error])) throw o.error;
    return { ...o,
        mutate: u,
        mutateAsync: o.mutate
    }
}
const Ch = new Set;

function em() {
    const a = b1();
    Ch.forEach(n => n(a))
}

function ET(a) {
    return Ch.add(a), () => {
        Ch.delete(a)
    }
}

function Uv(a) {
    a ? document.body.classList.add("dark") : document.body.classList.remove("dark")
}
let ca = null;

function CT() {
    ca && (ca.onchange = null, ca = null), document.body.classList.add("dark"), em()
}

function AT() {
    ca && (ca.onchange = null, ca = null), document.body.classList.remove("dark"), em()
}

function NT() {
    ca && (ca.onchange = null);
    const a = window.matchMedia("(prefers-color-scheme: dark)");
    a.onchange = n => {
        Uv(n.matches)
    }, ca = a, Uv(a.matches), em()
}

function b1() {
    return ca ? "auto" : document.body.classList.contains("dark") ? "dark" : "light"
}
const _1 = x.createContext(null);

function jT({
    children: a
}) {
    const [n, s] = x.useState(() => b1());
    x.useEffect(() => ET(u => {
        s(u)
    }), []);
    const r = x.useMemo(() => ({
        mode: n,
        switchToDarkMode: CT,
        switchToLightMode: AT,
        switchToAutoMode: NT
    }), [n]);
    return p.jsx(_1.Provider, {
        value: r,
        children: a
    })
}

function OT() {
    const a = x.useContext(_1);
    if (!a) throw new Error("useThemeMode must be used within a ThemeModeProvider");
    return a
}

function At(a, n, {
    checkForDefaultPrevented: s = !0
} = {}) {
    return function(o) {
        if (a == null || a(o), s === !1 || !o.defaultPrevented) return n == null ? void 0 : n(o)
    }
}

function qv(a, n) {
    if (typeof a == "function") return a(n);
    a != null && (a.current = n)
}

function vu(...a) {
    return n => {
        let s = !1;
        const r = a.map(o => {
            const u = qv(o, n);
            return !s && typeof u == "function" && (s = !0), u
        });
        if (s) return () => {
            for (let o = 0; o < r.length; o++) {
                const u = r[o];
                typeof u == "function" ? u() : qv(a[o], null)
            }
        }
    }
}

function da(...a) {
    return x.useCallback(vu(...a), a)
}

function bo(a, n = []) {
    let s = [];

    function r(u, d) {
        const m = x.createContext(d),
            v = s.length;
        s = [...s, d];
        const y = g => {
            var j;
            const {
                scope: S,
                children: T,
                ...O
            } = g, R = ((j = S == null ? void 0 : S[a]) == null ? void 0 : j[v]) || m, A = x.useMemo(() => O, Object.values(O));
            return p.jsx(R.Provider, {
                value: A,
                children: T
            })
        };
        y.displayName = u + "Provider";

        function b(g, S) {
            var R;
            const T = ((R = S == null ? void 0 : S[a]) == null ? void 0 : R[v]) || m,
                O = x.useContext(T);
            if (O) return O;
            if (d !== void 0) return d;
            throw new Error(`\`${g}\` must be used within \`${u}\``)
        }
        return [y, b]
    }
    const o = () => {
        const u = s.map(d => x.createContext(d));
        return function(m) {
            const v = (m == null ? void 0 : m[a]) || u;
            return x.useMemo(() => ({
                [`__scope${a}`]: { ...m,
                    [a]: v
                }
            }), [m, v])
        }
    };
    return o.scopeName = a, [r, RT(o, ...n)]
}

function RT(...a) {
    const n = a[0];
    if (a.length === 1) return n;
    const s = () => {
        const r = a.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(u) {
            const d = r.reduce((m, {
                useScope: v,
                scopeName: y
            }) => {
                const g = v(u)[`__scope${y}`];
                return { ...m,
                    ...g
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${n.scopeName}`]: d
            }), [d])
        }
    };
    return s.scopeName = n.scopeName, s
}

function MT(a) {
    const n = zT(a),
        s = x.forwardRef((r, o) => {
            const {
                children: u,
                ...d
            } = r, m = x.Children.toArray(u), v = m.find(kT);
            if (v) {
                const y = v.props.children,
                    b = m.map(g => g === v ? x.Children.count(y) > 1 ? x.Children.only(null) : x.isValidElement(y) ? y.props.children : null : g);
                return p.jsx(n, { ...d,
                    ref: o,
                    children: x.isValidElement(y) ? x.cloneElement(y, void 0, b) : null
                })
            }
            return p.jsx(n, { ...d,
                ref: o,
                children: u
            })
        });
    return s.displayName = `${a}.Slot`, s
}

function zT(a) {
    const n = x.forwardRef((s, r) => {
        const {
            children: o,
            ...u
        } = s;
        if (x.isValidElement(o)) {
            const d = LT(o),
                m = BT(u, o.props);
            return o.type !== x.Fragment && (m.ref = r ? vu(r, d) : d), x.cloneElement(o, m)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    });
    return n.displayName = `${a}.SlotClone`, n
}
var DT = Symbol("radix.slottable");

function kT(a) {
    return x.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === DT
}

function BT(a, n) {
    const s = { ...n
    };
    for (const r in n) {
        const o = a[r],
            u = n[r];
        /^on[A-Z]/.test(r) ? o && u ? s[r] = (...m) => {
            const v = u(...m);
            return o(...m), v
        } : o && (s[r] = o) : r === "style" ? s[r] = { ...o,
            ...u
        } : r === "className" && (s[r] = [o, u].filter(Boolean).join(" "))
    }
    return { ...a,
        ...s
    }
}

function LT(a) {
    var r, o;
    let n = (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : r.get,
        s = n && "isReactWarning" in n && n.isReactWarning;
    return s ? a.ref : (n = (o = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : o.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}
var UT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    on = UT.reduce((a, n) => {
        const s = MT(`Primitive.${n}`),
            r = x.forwardRef((o, u) => {
                const {
                    asChild: d,
                    ...m
                } = o, v = d ? s : n;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), p.jsx(v, { ...m,
                    ref: u
                })
            });
        return r.displayName = `Primitive.${n}`, { ...a,
            [n]: r
        }
    }, {});

function qT(a, n) {
    a && Xh.flushSync(() => a.dispatchEvent(n))
}

function _o(a) {
    const n = x.useRef(a);
    return x.useEffect(() => {
        n.current = a
    }), x.useMemo(() => (...s) => {
        var r;
        return (r = n.current) == null ? void 0 : r.call(n, ...s)
    }, [])
}

function HT(a, n = globalThis == null ? void 0 : globalThis.document) {
    const s = _o(a);
    x.useEffect(() => {
        const r = o => {
            o.key === "Escape" && s(o)
        };
        return n.addEventListener("keydown", r, {
            capture: !0
        }), () => n.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [s, n])
}
var VT = "DismissableLayer",
    Ah = "dismissableLayer.update",
    YT = "dismissableLayer.pointerDownOutside",
    ZT = "dismissableLayer.focusOutside",
    Hv, x1 = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    S1 = x.forwardRef((a, n) => {
        const {
            disableOutsidePointerEvents: s = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: u,
            onInteractOutside: d,
            onDismiss: m,
            ...v
        } = a, y = x.useContext(x1), [b, g] = x.useState(null), S = (b == null ? void 0 : b.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, T] = x.useState({}), O = da(n, K => g(K)), R = Array.from(y.layers), [A] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), j = R.indexOf(A), H = b ? R.indexOf(b) : -1, D = y.layersWithOutsidePointerEventsDisabled.size > 0, k = H >= j, I = $T(K => {
            const ee = K.target,
                we = [...y.branches].some(ae => ae.contains(ee));
            !k || we || (o == null || o(K), d == null || d(K), K.defaultPrevented || m == null || m())
        }, S), W = XT(K => {
            const ee = K.target;
            [...y.branches].some(ae => ae.contains(ee)) || (u == null || u(K), d == null || d(K), K.defaultPrevented || m == null || m())
        }, S);
        return HT(K => {
            H === y.layers.size - 1 && (r == null || r(K), !K.defaultPrevented && m && (K.preventDefault(), m()))
        }, S), x.useEffect(() => {
            if (b) return s && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (Hv = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(b)), y.layers.add(b), Vv(), () => {
                s && y.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Hv)
            }
        }, [b, S, s, y]), x.useEffect(() => () => {
            b && (y.layers.delete(b), y.layersWithOutsidePointerEventsDisabled.delete(b), Vv())
        }, [b, y]), x.useEffect(() => {
            const K = () => T({});
            return document.addEventListener(Ah, K), () => document.removeEventListener(Ah, K)
        }, []), p.jsx(on.div, { ...v,
            ref: O,
            style: {
                pointerEvents: D ? k ? "auto" : "none" : void 0,
                ...a.style
            },
            onFocusCapture: At(a.onFocusCapture, W.onFocusCapture),
            onBlurCapture: At(a.onBlurCapture, W.onBlurCapture),
            onPointerDownCapture: At(a.onPointerDownCapture, I.onPointerDownCapture)
        })
    });
S1.displayName = VT;
var GT = "DismissableLayerBranch",
    QT = x.forwardRef((a, n) => {
        const s = x.useContext(x1),
            r = x.useRef(null),
            o = da(n, r);
        return x.useEffect(() => {
            const u = r.current;
            if (u) return s.branches.add(u), () => {
                s.branches.delete(u)
            }
        }, [s.branches]), p.jsx(on.div, { ...a,
            ref: o
        })
    });
QT.displayName = GT;

function $T(a, n = globalThis == null ? void 0 : globalThis.document) {
    const s = _o(a),
        r = x.useRef(!1),
        o = x.useRef(() => {});
    return x.useEffect(() => {
        const u = m => {
                if (m.target && !r.current) {
                    let v = function() {
                        T1(YT, s, y, {
                            discrete: !0
                        })
                    };
                    const y = {
                        originalEvent: m
                    };
                    m.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = v, n.addEventListener("click", o.current, {
                        once: !0
                    })) : v()
                } else n.removeEventListener("click", o.current);
                r.current = !1
            },
            d = window.setTimeout(() => {
                n.addEventListener("pointerdown", u)
            }, 0);
        return () => {
            window.clearTimeout(d), n.removeEventListener("pointerdown", u), n.removeEventListener("click", o.current)
        }
    }, [n, s]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function XT(a, n = globalThis == null ? void 0 : globalThis.document) {
    const s = _o(a),
        r = x.useRef(!1);
    return x.useEffect(() => {
        const o = u => {
            u.target && !r.current && T1(ZT, s, {
                originalEvent: u
            }, {
                discrete: !1
            })
        };
        return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o)
    }, [n, s]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Vv() {
    const a = new CustomEvent(Ah);
    document.dispatchEvent(a)
}

function T1(a, n, s, {
    discrete: r
}) {
    const o = s.originalEvent.target,
        u = new CustomEvent(a, {
            bubbles: !1,
            cancelable: !0,
            detail: s
        });
    n && o.addEventListener(a, n, {
        once: !0
    }), r ? qT(o, u) : o.dispatchEvent(u)
}
var Li = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    IT = yu[" useId ".trim().toString()] || (() => {}),
    KT = 0;

function w1(a) {
    const [n, s] = x.useState(IT());
    return Li(() => {
        s(r => r ? ? String(KT++))
    }, [a]), n ? `radix-${n}` : ""
}
const FT = ["top", "right", "bottom", "left"],
    Ui = Math.min,
    vn = Math.max,
    lu = Math.round,
    Hc = Math.floor,
    ua = a => ({
        x: a,
        y: a
    }),
    PT = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    JT = {
        start: "end",
        end: "start"
    };

function Nh(a, n, s) {
    return vn(a, Ui(n, s))
}

function Ga(a, n) {
    return typeof a == "function" ? a(n) : a
}

function Qa(a) {
    return a.split("-")[0]
}

function Kl(a) {
    return a.split("-")[1]
}

function tm(a) {
    return a === "x" ? "y" : "x"
}

function nm(a) {
    return a === "y" ? "height" : "width"
}
const WT = new Set(["top", "bottom"]);

function oa(a) {
    return WT.has(Qa(a)) ? "y" : "x"
}

function am(a) {
    return tm(oa(a))
}

function ew(a, n, s) {
    s === void 0 && (s = !1);
    const r = Kl(a),
        o = am(a),
        u = nm(o);
    let d = o === "x" ? r === (s ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return n.reference[u] > n.floating[u] && (d = ru(d)), [d, ru(d)]
}

function tw(a) {
    const n = ru(a);
    return [jh(a), n, jh(n)]
}

function jh(a) {
    return a.replace(/start|end/g, n => JT[n])
}
const Yv = ["left", "right"],
    Zv = ["right", "left"],
    nw = ["top", "bottom"],
    aw = ["bottom", "top"];

function iw(a, n, s) {
    switch (a) {
        case "top":
        case "bottom":
            return s ? n ? Zv : Yv : n ? Yv : Zv;
        case "left":
        case "right":
            return n ? nw : aw;
        default:
            return []
    }
}

function sw(a, n, s, r) {
    const o = Kl(a);
    let u = iw(Qa(a), s === "start", r);
    return o && (u = u.map(d => d + "-" + o), n && (u = u.concat(u.map(jh)))), u
}

function ru(a) {
    return a.replace(/left|right|bottom|top/g, n => PT[n])
}

function lw(a) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...a
    }
}

function E1(a) {
    return typeof a != "number" ? lw(a) : {
        top: a,
        right: a,
        bottom: a,
        left: a
    }
}

function ou(a) {
    const {
        x: n,
        y: s,
        width: r,
        height: o
    } = a;
    return {
        width: r,
        height: o,
        top: s,
        left: n,
        right: n + r,
        bottom: s + o,
        x: n,
        y: s
    }
}

function Gv(a, n, s) {
    let {
        reference: r,
        floating: o
    } = a;
    const u = oa(n),
        d = am(n),
        m = nm(d),
        v = Qa(n),
        y = u === "y",
        b = r.x + r.width / 2 - o.width / 2,
        g = r.y + r.height / 2 - o.height / 2,
        S = r[m] / 2 - o[m] / 2;
    let T;
    switch (v) {
        case "top":
            T = {
                x: b,
                y: r.y - o.height
            };
            break;
        case "bottom":
            T = {
                x: b,
                y: r.y + r.height
            };
            break;
        case "right":
            T = {
                x: r.x + r.width,
                y: g
            };
            break;
        case "left":
            T = {
                x: r.x - o.width,
                y: g
            };
            break;
        default:
            T = {
                x: r.x,
                y: r.y
            }
    }
    switch (Kl(n)) {
        case "start":
            T[d] -= S * (s && y ? -1 : 1);
            break;
        case "end":
            T[d] += S * (s && y ? -1 : 1);
            break
    }
    return T
}
const rw = async (a, n, s) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: u = [],
        platform: d
    } = s, m = u.filter(Boolean), v = await (d.isRTL == null ? void 0 : d.isRTL(n));
    let y = await d.getElementRects({
            reference: a,
            floating: n,
            strategy: o
        }),
        {
            x: b,
            y: g
        } = Gv(y, r, v),
        S = r,
        T = {},
        O = 0;
    for (let R = 0; R < m.length; R++) {
        const {
            name: A,
            fn: j
        } = m[R], {
            x: H,
            y: D,
            data: k,
            reset: I
        } = await j({
            x: b,
            y: g,
            initialPlacement: r,
            placement: S,
            strategy: o,
            middlewareData: T,
            rects: y,
            platform: d,
            elements: {
                reference: a,
                floating: n
            }
        });
        b = H ? ? b, g = D ? ? g, T = { ...T,
            [A]: { ...T[A],
                ...k
            }
        }, I && O <= 50 && (O++, typeof I == "object" && (I.placement && (S = I.placement), I.rects && (y = I.rects === !0 ? await d.getElementRects({
            reference: a,
            floating: n,
            strategy: o
        }) : I.rects), {
            x: b,
            y: g
        } = Gv(y, S, v)), R = -1)
    }
    return {
        x: b,
        y: g,
        placement: S,
        strategy: o,
        middlewareData: T
    }
};
async function ao(a, n) {
    var s;
    n === void 0 && (n = {});
    const {
        x: r,
        y: o,
        platform: u,
        rects: d,
        elements: m,
        strategy: v
    } = a, {
        boundary: y = "clippingAncestors",
        rootBoundary: b = "viewport",
        elementContext: g = "floating",
        altBoundary: S = !1,
        padding: T = 0
    } = Ga(n, a), O = E1(T), A = m[S ? g === "floating" ? "reference" : "floating" : g], j = ou(await u.getClippingRect({
        element: (s = await (u.isElement == null ? void 0 : u.isElement(A))) == null || s ? A : A.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(m.floating)),
        boundary: y,
        rootBoundary: b,
        strategy: v
    })), H = g === "floating" ? {
        x: r,
        y: o,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference, D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(m.floating)), k = await (u.isElement == null ? void 0 : u.isElement(D)) ? await (u.getScale == null ? void 0 : u.getScale(D)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, I = ou(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: m,
        rect: H,
        offsetParent: D,
        strategy: v
    }) : H);
    return {
        top: (j.top - I.top + O.top) / k.y,
        bottom: (I.bottom - j.bottom + O.bottom) / k.y,
        left: (j.left - I.left + O.left) / k.x,
        right: (I.right - j.right + O.right) / k.x
    }
}
const ow = a => ({
        name: "arrow",
        options: a,
        async fn(n) {
            const {
                x: s,
                y: r,
                placement: o,
                rects: u,
                platform: d,
                elements: m,
                middlewareData: v
            } = n, {
                element: y,
                padding: b = 0
            } = Ga(a, n) || {};
            if (y == null) return {};
            const g = E1(b),
                S = {
                    x: s,
                    y: r
                },
                T = am(o),
                O = nm(T),
                R = await d.getDimensions(y),
                A = T === "y",
                j = A ? "top" : "left",
                H = A ? "bottom" : "right",
                D = A ? "clientHeight" : "clientWidth",
                k = u.reference[O] + u.reference[T] - S[T] - u.floating[O],
                I = S[T] - u.reference[T],
                W = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(y));
            let K = W ? W[D] : 0;
            (!K || !await (d.isElement == null ? void 0 : d.isElement(W))) && (K = m.floating[D] || u.floating[O]);
            const ee = k / 2 - I / 2,
                we = K / 2 - R[O] / 2 - 1,
                ae = Ui(g[j], we),
                ye = Ui(g[H], we),
                ve = ae,
                be = K - R[O] - ye,
                ze = K / 2 - R[O] / 2 + ee,
                Ve = Nh(ve, ze, be),
                z = !v.arrow && Kl(o) != null && ze !== Ve && u.reference[O] / 2 - (ze < ve ? ae : ye) - R[O] / 2 < 0,
                Q = z ? ze < ve ? ze - ve : ze - be : 0;
            return {
                [T]: S[T] + Q,
                data: {
                    [T]: Ve,
                    centerOffset: ze - Ve - Q,
                    ...z && {
                        alignmentOffset: Q
                    }
                },
                reset: z
            }
        }
    }),
    cw = function(a) {
        return a === void 0 && (a = {}), {
            name: "flip",
            options: a,
            async fn(n) {
                var s, r;
                const {
                    placement: o,
                    middlewareData: u,
                    rects: d,
                    initialPlacement: m,
                    platform: v,
                    elements: y
                } = n, {
                    mainAxis: b = !0,
                    crossAxis: g = !0,
                    fallbackPlacements: S,
                    fallbackStrategy: T = "bestFit",
                    fallbackAxisSideDirection: O = "none",
                    flipAlignment: R = !0,
                    ...A
                } = Ga(a, n);
                if ((s = u.arrow) != null && s.alignmentOffset) return {};
                const j = Qa(o),
                    H = oa(m),
                    D = Qa(m) === m,
                    k = await (v.isRTL == null ? void 0 : v.isRTL(y.floating)),
                    I = S || (D || !R ? [ru(m)] : tw(m)),
                    W = O !== "none";
                !S && W && I.push(...sw(m, R, O, k));
                const K = [m, ...I],
                    ee = await ao(n, A),
                    we = [];
                let ae = ((r = u.flip) == null ? void 0 : r.overflows) || [];
                if (b && we.push(ee[j]), g) {
                    const ze = ew(o, d, k);
                    we.push(ee[ze[0]], ee[ze[1]])
                }
                if (ae = [...ae, {
                        placement: o,
                        overflows: we
                    }], !we.every(ze => ze <= 0)) {
                    var ye, ve;
                    const ze = (((ye = u.flip) == null ? void 0 : ye.index) || 0) + 1,
                        Ve = K[ze];
                    if (Ve && (!(g === "alignment" ? H !== oa(Ve) : !1) || ae.every(F => oa(F.placement) === H ? F.overflows[0] > 0 : !0))) return {
                        data: {
                            index: ze,
                            overflows: ae
                        },
                        reset: {
                            placement: Ve
                        }
                    };
                    let z = (ve = ae.filter(Q => Q.overflows[0] <= 0).sort((Q, F) => Q.overflows[1] - F.overflows[1])[0]) == null ? void 0 : ve.placement;
                    if (!z) switch (T) {
                        case "bestFit":
                            {
                                var be;
                                const Q = (be = ae.filter(F => {
                                    if (W) {
                                        const fe = oa(F.placement);
                                        return fe === H || fe === "y"
                                    }
                                    return !0
                                }).map(F => [F.placement, F.overflows.filter(fe => fe > 0).reduce((fe, me) => fe + me, 0)]).sort((F, fe) => F[1] - fe[1])[0]) == null ? void 0 : be[0];Q && (z = Q);
                                break
                            }
                        case "initialPlacement":
                            z = m;
                            break
                    }
                    if (o !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function Qv(a, n) {
    return {
        top: a.top - n.height,
        right: a.right - n.width,
        bottom: a.bottom - n.height,
        left: a.left - n.width
    }
}

function $v(a) {
    return FT.some(n => a[n] >= 0)
}
const uw = function(a) {
        return a === void 0 && (a = {}), {
            name: "hide",
            options: a,
            async fn(n) {
                const {
                    rects: s
                } = n, {
                    strategy: r = "referenceHidden",
                    ...o
                } = Ga(a, n);
                switch (r) {
                    case "referenceHidden":
                        {
                            const u = await ao(n, { ...o,
                                    elementContext: "reference"
                                }),
                                d = Qv(u, s.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: d,
                                    referenceHidden: $v(d)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const u = await ao(n, { ...o,
                                    altBoundary: !0
                                }),
                                d = Qv(u, s.floating);
                            return {
                                data: {
                                    escapedOffsets: d,
                                    escaped: $v(d)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    C1 = new Set(["left", "top"]);
async function fw(a, n) {
    const {
        placement: s,
        platform: r,
        elements: o
    } = a, u = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), d = Qa(s), m = Kl(s), v = oa(s) === "y", y = C1.has(d) ? -1 : 1, b = u && v ? -1 : 1, g = Ga(n, a);
    let {
        mainAxis: S,
        crossAxis: T,
        alignmentAxis: O
    } = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis
    };
    return m && typeof O == "number" && (T = m === "end" ? O * -1 : O), v ? {
        x: T * b,
        y: S * y
    } : {
        x: S * y,
        y: T * b
    }
}
const dw = function(a) {
        return a === void 0 && (a = 0), {
            name: "offset",
            options: a,
            async fn(n) {
                var s, r;
                const {
                    x: o,
                    y: u,
                    placement: d,
                    middlewareData: m
                } = n, v = await fw(n, a);
                return d === ((s = m.offset) == null ? void 0 : s.placement) && (r = m.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + v.x,
                    y: u + v.y,
                    data: { ...v,
                        placement: d
                    }
                }
            }
        }
    },
    hw = function(a) {
        return a === void 0 && (a = {}), {
            name: "shift",
            options: a,
            async fn(n) {
                const {
                    x: s,
                    y: r,
                    placement: o
                } = n, {
                    mainAxis: u = !0,
                    crossAxis: d = !1,
                    limiter: m = {
                        fn: A => {
                            let {
                                x: j,
                                y: H
                            } = A;
                            return {
                                x: j,
                                y: H
                            }
                        }
                    },
                    ...v
                } = Ga(a, n), y = {
                    x: s,
                    y: r
                }, b = await ao(n, v), g = oa(Qa(o)), S = tm(g);
                let T = y[S],
                    O = y[g];
                if (u) {
                    const A = S === "y" ? "top" : "left",
                        j = S === "y" ? "bottom" : "right",
                        H = T + b[A],
                        D = T - b[j];
                    T = Nh(H, T, D)
                }
                if (d) {
                    const A = g === "y" ? "top" : "left",
                        j = g === "y" ? "bottom" : "right",
                        H = O + b[A],
                        D = O - b[j];
                    O = Nh(H, O, D)
                }
                const R = m.fn({ ...n,
                    [S]: T,
                    [g]: O
                });
                return { ...R,
                    data: {
                        x: R.x - s,
                        y: R.y - r,
                        enabled: {
                            [S]: u,
                            [g]: d
                        }
                    }
                }
            }
        }
    },
    mw = function(a) {
        return a === void 0 && (a = {}), {
            options: a,
            fn(n) {
                const {
                    x: s,
                    y: r,
                    placement: o,
                    rects: u,
                    middlewareData: d
                } = n, {
                    offset: m = 0,
                    mainAxis: v = !0,
                    crossAxis: y = !0
                } = Ga(a, n), b = {
                    x: s,
                    y: r
                }, g = oa(o), S = tm(g);
                let T = b[S],
                    O = b[g];
                const R = Ga(m, n),
                    A = typeof R == "number" ? {
                        mainAxis: R,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...R
                    };
                if (v) {
                    const D = S === "y" ? "height" : "width",
                        k = u.reference[S] - u.floating[D] + A.mainAxis,
                        I = u.reference[S] + u.reference[D] - A.mainAxis;
                    T < k ? T = k : T > I && (T = I)
                }
                if (y) {
                    var j, H;
                    const D = S === "y" ? "width" : "height",
                        k = C1.has(Qa(o)),
                        I = u.reference[g] - u.floating[D] + (k && ((j = d.offset) == null ? void 0 : j[g]) || 0) + (k ? 0 : A.crossAxis),
                        W = u.reference[g] + u.reference[D] + (k ? 0 : ((H = d.offset) == null ? void 0 : H[g]) || 0) - (k ? A.crossAxis : 0);
                    O < I ? O = I : O > W && (O = W)
                }
                return {
                    [S]: T,
                    [g]: O
                }
            }
        }
    },
    pw = function(a) {
        return a === void 0 && (a = {}), {
            name: "size",
            options: a,
            async fn(n) {
                var s, r;
                const {
                    placement: o,
                    rects: u,
                    platform: d,
                    elements: m
                } = n, {
                    apply: v = () => {},
                    ...y
                } = Ga(a, n), b = await ao(n, y), g = Qa(o), S = Kl(o), T = oa(o) === "y", {
                    width: O,
                    height: R
                } = u.floating;
                let A, j;
                g === "top" || g === "bottom" ? (A = g, j = S === (await (d.isRTL == null ? void 0 : d.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (j = g, A = S === "end" ? "top" : "bottom");
                const H = R - b.top - b.bottom,
                    D = O - b.left - b.right,
                    k = Ui(R - b[A], H),
                    I = Ui(O - b[j], D),
                    W = !n.middlewareData.shift;
                let K = k,
                    ee = I;
                if ((s = n.middlewareData.shift) != null && s.enabled.x && (ee = D), (r = n.middlewareData.shift) != null && r.enabled.y && (K = H), W && !S) {
                    const ae = vn(b.left, 0),
                        ye = vn(b.right, 0),
                        ve = vn(b.top, 0),
                        be = vn(b.bottom, 0);
                    T ? ee = O - 2 * (ae !== 0 || ye !== 0 ? ae + ye : vn(b.left, b.right)) : K = R - 2 * (ve !== 0 || be !== 0 ? ve + be : vn(b.top, b.bottom))
                }
                await v({ ...n,
                    availableWidth: ee,
                    availableHeight: K
                });
                const we = await d.getDimensions(m.floating);
                return O !== we.width || R !== we.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function bu() {
    return typeof window < "u"
}

function Fl(a) {
    return A1(a) ? (a.nodeName || "").toLowerCase() : "#document"
}

function bn(a) {
    var n;
    return (a == null || (n = a.ownerDocument) == null ? void 0 : n.defaultView) || window
}

function pa(a) {
    var n;
    return (n = (A1(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : n.documentElement
}

function A1(a) {
    return bu() ? a instanceof Node || a instanceof bn(a).Node : !1
}

function Qn(a) {
    return bu() ? a instanceof Element || a instanceof bn(a).Element : !1
}

function ha(a) {
    return bu() ? a instanceof HTMLElement || a instanceof bn(a).HTMLElement : !1
}

function Xv(a) {
    return !bu() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof bn(a).ShadowRoot
}
const yw = new Set(["inline", "contents"]);

function xo(a) {
    const {
        overflow: n,
        overflowX: s,
        overflowY: r,
        display: o
    } = $n(a);
    return /auto|scroll|overlay|hidden|clip/.test(n + r + s) && !yw.has(o)
}
const gw = new Set(["table", "td", "th"]);

function vw(a) {
    return gw.has(Fl(a))
}
const bw = [":popover-open", ":modal"];

function _u(a) {
    return bw.some(n => {
        try {
            return a.matches(n)
        } catch {
            return !1
        }
    })
}
const _w = ["transform", "translate", "scale", "rotate", "perspective"],
    xw = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    Sw = ["paint", "layout", "strict", "content"];

function im(a) {
    const n = sm(),
        s = Qn(a) ? $n(a) : a;
    return _w.some(r => s[r] ? s[r] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !n && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !n && (s.filter ? s.filter !== "none" : !1) || xw.some(r => (s.willChange || "").includes(r)) || Sw.some(r => (s.contain || "").includes(r))
}

function Tw(a) {
    let n = qi(a);
    for (; ha(n) && !ql(n);) {
        if (im(n)) return n;
        if (_u(n)) return null;
        n = qi(n)
    }
    return null
}

function sm() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const ww = new Set(["html", "body", "#document"]);

function ql(a) {
    return ww.has(Fl(a))
}

function $n(a) {
    return bn(a).getComputedStyle(a)
}

function xu(a) {
    return Qn(a) ? {
        scrollLeft: a.scrollLeft,
        scrollTop: a.scrollTop
    } : {
        scrollLeft: a.scrollX,
        scrollTop: a.scrollY
    }
}

function qi(a) {
    if (Fl(a) === "html") return a;
    const n = a.assignedSlot || a.parentNode || Xv(a) && a.host || pa(a);
    return Xv(n) ? n.host : n
}

function N1(a) {
    const n = qi(a);
    return ql(n) ? a.ownerDocument ? a.ownerDocument.body : a.body : ha(n) && xo(n) ? n : N1(n)
}

function io(a, n, s) {
    var r;
    n === void 0 && (n = []), s === void 0 && (s = !0);
    const o = N1(a),
        u = o === ((r = a.ownerDocument) == null ? void 0 : r.body),
        d = bn(o);
    if (u) {
        const m = Oh(d);
        return n.concat(d, d.visualViewport || [], xo(o) ? o : [], m && s ? io(m) : [])
    }
    return n.concat(o, io(o, [], s))
}

function Oh(a) {
    return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null
}

function j1(a) {
    const n = $n(a);
    let s = parseFloat(n.width) || 0,
        r = parseFloat(n.height) || 0;
    const o = ha(a),
        u = o ? a.offsetWidth : s,
        d = o ? a.offsetHeight : r,
        m = lu(s) !== u || lu(r) !== d;
    return m && (s = u, r = d), {
        width: s,
        height: r,
        $: m
    }
}

function lm(a) {
    return Qn(a) ? a : a.contextElement
}

function Cl(a) {
    const n = lm(a);
    if (!ha(n)) return ua(1);
    const s = n.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: u
        } = j1(n);
    let d = (u ? lu(s.width) : s.width) / r,
        m = (u ? lu(s.height) : s.height) / o;
    return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
        x: d,
        y: m
    }
}
const Ew = ua(0);

function O1(a) {
    const n = bn(a);
    return !sm() || !n.visualViewport ? Ew : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}

function Cw(a, n, s) {
    return n === void 0 && (n = !1), !s || n && s !== bn(a) ? !1 : n
}

function Os(a, n, s, r) {
    n === void 0 && (n = !1), s === void 0 && (s = !1);
    const o = a.getBoundingClientRect(),
        u = lm(a);
    let d = ua(1);
    n && (r ? Qn(r) && (d = Cl(r)) : d = Cl(a));
    const m = Cw(u, s, r) ? O1(u) : ua(0);
    let v = (o.left + m.x) / d.x,
        y = (o.top + m.y) / d.y,
        b = o.width / d.x,
        g = o.height / d.y;
    if (u) {
        const S = bn(u),
            T = r && Qn(r) ? bn(r) : r;
        let O = S,
            R = Oh(O);
        for (; R && r && T !== O;) {
            const A = Cl(R),
                j = R.getBoundingClientRect(),
                H = $n(R),
                D = j.left + (R.clientLeft + parseFloat(H.paddingLeft)) * A.x,
                k = j.top + (R.clientTop + parseFloat(H.paddingTop)) * A.y;
            v *= A.x, y *= A.y, b *= A.x, g *= A.y, v += D, y += k, O = bn(R), R = Oh(O)
        }
    }
    return ou({
        width: b,
        height: g,
        x: v,
        y
    })
}

function Su(a, n) {
    const s = xu(a).scrollLeft;
    return n ? n.left + s : Os(pa(a)).left + s
}

function R1(a, n) {
    const s = a.getBoundingClientRect(),
        r = s.left + n.scrollLeft - Su(a, s),
        o = s.top + n.scrollTop;
    return {
        x: r,
        y: o
    }
}

function Aw(a) {
    let {
        elements: n,
        rect: s,
        offsetParent: r,
        strategy: o
    } = a;
    const u = o === "fixed",
        d = pa(r),
        m = n ? _u(n.floating) : !1;
    if (r === d || m && u) return s;
    let v = {
            scrollLeft: 0,
            scrollTop: 0
        },
        y = ua(1);
    const b = ua(0),
        g = ha(r);
    if ((g || !g && !u) && ((Fl(r) !== "body" || xo(d)) && (v = xu(r)), ha(r))) {
        const T = Os(r);
        y = Cl(r), b.x = T.x + r.clientLeft, b.y = T.y + r.clientTop
    }
    const S = d && !g && !u ? R1(d, v) : ua(0);
    return {
        width: s.width * y.x,
        height: s.height * y.y,
        x: s.x * y.x - v.scrollLeft * y.x + b.x + S.x,
        y: s.y * y.y - v.scrollTop * y.y + b.y + S.y
    }
}

function Nw(a) {
    return Array.from(a.getClientRects())
}

function jw(a) {
    const n = pa(a),
        s = xu(a),
        r = a.ownerDocument.body,
        o = vn(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
        u = vn(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
    let d = -s.scrollLeft + Su(a);
    const m = -s.scrollTop;
    return $n(r).direction === "rtl" && (d += vn(n.clientWidth, r.clientWidth) - o), {
        width: o,
        height: u,
        x: d,
        y: m
    }
}
const Iv = 25;

function Ow(a, n) {
    const s = bn(a),
        r = pa(a),
        o = s.visualViewport;
    let u = r.clientWidth,
        d = r.clientHeight,
        m = 0,
        v = 0;
    if (o) {
        u = o.width, d = o.height;
        const b = sm();
        (!b || b && n === "fixed") && (m = o.offsetLeft, v = o.offsetTop)
    }
    const y = Su(r);
    if (y <= 0) {
        const b = r.ownerDocument,
            g = b.body,
            S = getComputedStyle(g),
            T = b.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0,
            O = Math.abs(r.clientWidth - g.clientWidth - T);
        O <= Iv && (u -= O)
    } else y <= Iv && (u += y);
    return {
        width: u,
        height: d,
        x: m,
        y: v
    }
}
const Rw = new Set(["absolute", "fixed"]);

function Mw(a, n) {
    const s = Os(a, !0, n === "fixed"),
        r = s.top + a.clientTop,
        o = s.left + a.clientLeft,
        u = ha(a) ? Cl(a) : ua(1),
        d = a.clientWidth * u.x,
        m = a.clientHeight * u.y,
        v = o * u.x,
        y = r * u.y;
    return {
        width: d,
        height: m,
        x: v,
        y
    }
}

function Kv(a, n, s) {
    let r;
    if (n === "viewport") r = Ow(a, s);
    else if (n === "document") r = jw(pa(a));
    else if (Qn(n)) r = Mw(n, s);
    else {
        const o = O1(a);
        r = {
            x: n.x - o.x,
            y: n.y - o.y,
            width: n.width,
            height: n.height
        }
    }
    return ou(r)
}

function M1(a, n) {
    const s = qi(a);
    return s === n || !Qn(s) || ql(s) ? !1 : $n(s).position === "fixed" || M1(s, n)
}

function zw(a, n) {
    const s = n.get(a);
    if (s) return s;
    let r = io(a, [], !1).filter(m => Qn(m) && Fl(m) !== "body"),
        o = null;
    const u = $n(a).position === "fixed";
    let d = u ? qi(a) : a;
    for (; Qn(d) && !ql(d);) {
        const m = $n(d),
            v = im(d);
        !v && m.position === "fixed" && (o = null), (u ? !v && !o : !v && m.position === "static" && !!o && Rw.has(o.position) || xo(d) && !v && M1(a, d)) ? r = r.filter(b => b !== d) : o = m, d = qi(d)
    }
    return n.set(a, r), r
}

function Dw(a) {
    let {
        element: n,
        boundary: s,
        rootBoundary: r,
        strategy: o
    } = a;
    const d = [...s === "clippingAncestors" ? _u(n) ? [] : zw(n, this._c) : [].concat(s), r],
        m = d[0],
        v = d.reduce((y, b) => {
            const g = Kv(n, b, o);
            return y.top = vn(g.top, y.top), y.right = Ui(g.right, y.right), y.bottom = Ui(g.bottom, y.bottom), y.left = vn(g.left, y.left), y
        }, Kv(n, m, o));
    return {
        width: v.right - v.left,
        height: v.bottom - v.top,
        x: v.left,
        y: v.top
    }
}

function kw(a) {
    const {
        width: n,
        height: s
    } = j1(a);
    return {
        width: n,
        height: s
    }
}

function Bw(a, n, s) {
    const r = ha(n),
        o = pa(n),
        u = s === "fixed",
        d = Os(a, !0, u, n);
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const v = ua(0);

    function y() {
        v.x = Su(o)
    }
    if (r || !r && !u)
        if ((Fl(n) !== "body" || xo(o)) && (m = xu(n)), r) {
            const T = Os(n, !0, u, n);
            v.x = T.x + n.clientLeft, v.y = T.y + n.clientTop
        } else o && y();
    u && !r && o && y();
    const b = o && !r && !u ? R1(o, m) : ua(0),
        g = d.left + m.scrollLeft - v.x - b.x,
        S = d.top + m.scrollTop - v.y - b.y;
    return {
        x: g,
        y: S,
        width: d.width,
        height: d.height
    }
}

function Fd(a) {
    return $n(a).position === "static"
}

function Fv(a, n) {
    if (!ha(a) || $n(a).position === "fixed") return null;
    if (n) return n(a);
    let s = a.offsetParent;
    return pa(a) === s && (s = s.ownerDocument.body), s
}

function z1(a, n) {
    const s = bn(a);
    if (_u(a)) return s;
    if (!ha(a)) {
        let o = qi(a);
        for (; o && !ql(o);) {
            if (Qn(o) && !Fd(o)) return o;
            o = qi(o)
        }
        return s
    }
    let r = Fv(a, n);
    for (; r && vw(r) && Fd(r);) r = Fv(r, n);
    return r && ql(r) && Fd(r) && !im(r) ? s : r || Tw(a) || s
}
const Lw = async function(a) {
    const n = this.getOffsetParent || z1,
        s = this.getDimensions,
        r = await s(a.floating);
    return {
        reference: Bw(a.reference, await n(a.floating), a.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function Uw(a) {
    return $n(a).direction === "rtl"
}
const qw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Aw,
    getDocumentElement: pa,
    getClippingRect: Dw,
    getOffsetParent: z1,
    getElementRects: Lw,
    getClientRects: Nw,
    getDimensions: kw,
    getScale: Cl,
    isElement: Qn,
    isRTL: Uw
};

function D1(a, n) {
    return a.x === n.x && a.y === n.y && a.width === n.width && a.height === n.height
}

function Hw(a, n) {
    let s = null,
        r;
    const o = pa(a);

    function u() {
        var m;
        clearTimeout(r), (m = s) == null || m.disconnect(), s = null
    }

    function d(m, v) {
        m === void 0 && (m = !1), v === void 0 && (v = 1), u();
        const y = a.getBoundingClientRect(),
            {
                left: b,
                top: g,
                width: S,
                height: T
            } = y;
        if (m || n(), !S || !T) return;
        const O = Hc(g),
            R = Hc(o.clientWidth - (b + S)),
            A = Hc(o.clientHeight - (g + T)),
            j = Hc(b),
            D = {
                rootMargin: -O + "px " + -R + "px " + -A + "px " + -j + "px",
                threshold: vn(0, Ui(1, v)) || 1
            };
        let k = !0;

        function I(W) {
            const K = W[0].intersectionRatio;
            if (K !== v) {
                if (!k) return d();
                K ? d(!1, K) : r = setTimeout(() => {
                    d(!1, 1e-7)
                }, 1e3)
            }
            K === 1 && !D1(y, a.getBoundingClientRect()) && d(), k = !1
        }
        try {
            s = new IntersectionObserver(I, { ...D,
                root: o.ownerDocument
            })
        } catch {
            s = new IntersectionObserver(I, D)
        }
        s.observe(a)
    }
    return d(!0), u
}

function Vw(a, n, s, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: u = !0,
        elementResize: d = typeof ResizeObserver == "function",
        layoutShift: m = typeof IntersectionObserver == "function",
        animationFrame: v = !1
    } = r, y = lm(a), b = o || u ? [...y ? io(y) : [], ...io(n)] : [];
    b.forEach(j => {
        o && j.addEventListener("scroll", s, {
            passive: !0
        }), u && j.addEventListener("resize", s)
    });
    const g = y && m ? Hw(y, s) : null;
    let S = -1,
        T = null;
    d && (T = new ResizeObserver(j => {
        let [H] = j;
        H && H.target === y && T && (T.unobserve(n), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
            var D;
            (D = T) == null || D.observe(n)
        })), s()
    }), y && !v && T.observe(y), T.observe(n));
    let O, R = v ? Os(a) : null;
    v && A();

    function A() {
        const j = Os(a);
        R && !D1(R, j) && s(), R = j, O = requestAnimationFrame(A)
    }
    return s(), () => {
        var j;
        b.forEach(H => {
            o && H.removeEventListener("scroll", s), u && H.removeEventListener("resize", s)
        }), g == null || g(), (j = T) == null || j.disconnect(), T = null, v && cancelAnimationFrame(O)
    }
}
const Yw = dw,
    Zw = hw,
    Gw = cw,
    Qw = pw,
    $w = uw,
    Pv = ow,
    Xw = mw,
    Iw = (a, n, s) => {
        const r = new Map,
            o = {
                platform: qw,
                ...s
            },
            u = { ...o.platform,
                _c: r
            };
        return rw(a, n, { ...o,
            platform: u
        })
    };
var Kw = typeof document < "u",
    Fw = function() {},
    Kc = Kw ? x.useLayoutEffect : Fw;

function cu(a, n) {
    if (a === n) return !0;
    if (typeof a != typeof n) return !1;
    if (typeof a == "function" && a.toString() === n.toString()) return !0;
    let s, r, o;
    if (a && n && typeof a == "object") {
        if (Array.isArray(a)) {
            if (s = a.length, s !== n.length) return !1;
            for (r = s; r-- !== 0;)
                if (!cu(a[r], n[r])) return !1;
            return !0
        }
        if (o = Object.keys(a), s = o.length, s !== Object.keys(n).length) return !1;
        for (r = s; r-- !== 0;)
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
        for (r = s; r-- !== 0;) {
            const u = o[r];
            if (!(u === "_owner" && a.$$typeof) && !cu(a[u], n[u])) return !1
        }
        return !0
    }
    return a !== a && n !== n
}

function k1(a) {
    return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Jv(a, n) {
    const s = k1(a);
    return Math.round(n * s) / s
}

function Pd(a) {
    const n = x.useRef(a);
    return Kc(() => {
        n.current = a
    }), n
}

function Pw(a) {
    a === void 0 && (a = {});
    const {
        placement: n = "bottom",
        strategy: s = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: u,
            floating: d
        } = {},
        transform: m = !0,
        whileElementsMounted: v,
        open: y
    } = a, [b, g] = x.useState({
        x: 0,
        y: 0,
        strategy: s,
        placement: n,
        middlewareData: {},
        isPositioned: !1
    }), [S, T] = x.useState(r);
    cu(S, r) || T(r);
    const [O, R] = x.useState(null), [A, j] = x.useState(null), H = x.useCallback(F => {
        F !== W.current && (W.current = F, R(F))
    }, []), D = x.useCallback(F => {
        F !== K.current && (K.current = F, j(F))
    }, []), k = u || O, I = d || A, W = x.useRef(null), K = x.useRef(null), ee = x.useRef(b), we = v != null, ae = Pd(v), ye = Pd(o), ve = Pd(y), be = x.useCallback(() => {
        if (!W.current || !K.current) return;
        const F = {
            placement: n,
            strategy: s,
            middleware: S
        };
        ye.current && (F.platform = ye.current), Iw(W.current, K.current, F).then(fe => {
            const me = { ...fe,
                isPositioned: ve.current !== !1
            };
            ze.current && !cu(ee.current, me) && (ee.current = me, Xh.flushSync(() => {
                g(me)
            }))
        })
    }, [S, n, s, ye, ve]);
    Kc(() => {
        y === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, g(F => ({ ...F,
            isPositioned: !1
        })))
    }, [y]);
    const ze = x.useRef(!1);
    Kc(() => (ze.current = !0, () => {
        ze.current = !1
    }), []), Kc(() => {
        if (k && (W.current = k), I && (K.current = I), k && I) {
            if (ae.current) return ae.current(k, I, be);
            be()
        }
    }, [k, I, be, ae, we]);
    const Ve = x.useMemo(() => ({
            reference: W,
            floating: K,
            setReference: H,
            setFloating: D
        }), [H, D]),
        z = x.useMemo(() => ({
            reference: k,
            floating: I
        }), [k, I]),
        Q = x.useMemo(() => {
            const F = {
                position: s,
                left: 0,
                top: 0
            };
            if (!z.floating) return F;
            const fe = Jv(z.floating, b.x),
                me = Jv(z.floating, b.y);
            return m ? { ...F,
                transform: "translate(" + fe + "px, " + me + "px)",
                ...k1(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: s,
                left: fe,
                top: me
            }
        }, [s, m, z.floating, b.x, b.y]);
    return x.useMemo(() => ({ ...b,
        update: be,
        refs: Ve,
        elements: z,
        floatingStyles: Q
    }), [b, be, Ve, z, Q])
}
const Jw = a => {
        function n(s) {
            return {}.hasOwnProperty.call(s, "current")
        }
        return {
            name: "arrow",
            options: a,
            fn(s) {
                const {
                    element: r,
                    padding: o
                } = typeof a == "function" ? a(s) : a;
                return r && n(r) ? r.current != null ? Pv({
                    element: r.current,
                    padding: o
                }).fn(s) : {} : r ? Pv({
                    element: r,
                    padding: o
                }).fn(s) : {}
            }
        }
    },
    Ww = (a, n) => ({ ...Yw(a),
        options: [a, n]
    }),
    eE = (a, n) => ({ ...Zw(a),
        options: [a, n]
    }),
    tE = (a, n) => ({ ...Xw(a),
        options: [a, n]
    }),
    nE = (a, n) => ({ ...Gw(a),
        options: [a, n]
    }),
    aE = (a, n) => ({ ...Qw(a),
        options: [a, n]
    }),
    iE = (a, n) => ({ ...$w(a),
        options: [a, n]
    }),
    sE = (a, n) => ({ ...Jw(a),
        options: [a, n]
    });
var lE = "Arrow",
    B1 = x.forwardRef((a, n) => {
        const {
            children: s,
            width: r = 10,
            height: o = 5,
            ...u
        } = a;
        return p.jsx(on.svg, { ...u,
            ref: n,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: a.asChild ? s : p.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
B1.displayName = lE;
var rE = B1;

function oE(a) {
    const [n, s] = x.useState(void 0);
    return Li(() => {
        if (a) {
            s({
                width: a.offsetWidth,
                height: a.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const u = o[0];
                let d, m;
                if ("borderBoxSize" in u) {
                    const v = u.borderBoxSize,
                        y = Array.isArray(v) ? v[0] : v;
                    d = y.inlineSize, m = y.blockSize
                } else d = a.offsetWidth, m = a.offsetHeight;
                s({
                    width: d,
                    height: m
                })
            });
            return r.observe(a, {
                box: "border-box"
            }), () => r.unobserve(a)
        } else s(void 0)
    }, [a]), n
}
var L1 = "Popper",
    [U1, q1] = bo(L1),
    [g6, H1] = U1(L1),
    V1 = "PopperAnchor",
    Y1 = x.forwardRef((a, n) => {
        const {
            __scopePopper: s,
            virtualRef: r,
            ...o
        } = a, u = H1(V1, s), d = x.useRef(null), m = da(n, d), v = x.useRef(null);
        return x.useEffect(() => {
            const y = v.current;
            v.current = (r == null ? void 0 : r.current) || d.current, y !== v.current && u.onAnchorChange(v.current)
        }), r ? null : p.jsx(on.div, { ...o,
            ref: m
        })
    });
Y1.displayName = V1;
var rm = "PopperContent",
    [cE, uE] = U1(rm),
    Z1 = x.forwardRef((a, n) => {
        var je, Ee, $e, cn, xn, un;
        const {
            __scopePopper: s,
            side: r = "bottom",
            sideOffset: o = 0,
            align: u = "center",
            alignOffset: d = 0,
            arrowPadding: m = 0,
            avoidCollisions: v = !0,
            collisionBoundary: y = [],
            collisionPadding: b = 0,
            sticky: g = "partial",
            hideWhenDetached: S = !1,
            updatePositionStrategy: T = "optimized",
            onPlaced: O,
            ...R
        } = a, A = H1(rm, s), [j, H] = x.useState(null), D = da(n, Xn => H(Xn)), [k, I] = x.useState(null), W = oE(k), K = (W == null ? void 0 : W.width) ? ? 0, ee = (W == null ? void 0 : W.height) ? ? 0, we = r + (u !== "center" ? "-" + u : ""), ae = typeof b == "number" ? b : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...b
        }, ye = Array.isArray(y) ? y : [y], ve = ye.length > 0, be = {
            padding: ae,
            boundary: ye.filter(dE),
            altBoundary: ve
        }, {
            refs: ze,
            floatingStyles: Ve,
            placement: z,
            isPositioned: Q,
            middlewareData: F
        } = Pw({
            strategy: "fixed",
            placement: we,
            whileElementsMounted: (...Xn) => Vw(...Xn, {
                animationFrame: T === "always"
            }),
            elements: {
                reference: A.anchor
            },
            middleware: [Ww({
                mainAxis: o + ee,
                alignmentAxis: d
            }), v && eE({
                mainAxis: !0,
                crossAxis: !1,
                limiter: g === "partial" ? tE() : void 0,
                ...be
            }), v && nE({ ...be
            }), aE({ ...be,
                apply: ({
                    elements: Xn,
                    rects: Xt,
                    availableWidth: Gi,
                    availableHeight: Xa
                }) => {
                    const {
                        width: ya,
                        height: Qi
                    } = Xt.reference, St = Xn.floating.style;
                    St.setProperty("--radix-popper-available-width", `${Gi}px`), St.setProperty("--radix-popper-available-height", `${Xa}px`), St.setProperty("--radix-popper-anchor-width", `${ya}px`), St.setProperty("--radix-popper-anchor-height", `${Qi}px`)
                }
            }), k && sE({
                element: k,
                padding: m
            }), hE({
                arrowWidth: K,
                arrowHeight: ee
            }), S && iE({
                strategy: "referenceHidden",
                ...be
            })]
        }), [fe, me] = $1(z), C = _o(O);
        Li(() => {
            Q && (C == null || C())
        }, [Q, C]);
        const Z = (je = F.arrow) == null ? void 0 : je.x,
            X = (Ee = F.arrow) == null ? void 0 : Ee.y,
            J = (($e = F.arrow) == null ? void 0 : $e.centerOffset) !== 0,
            [ie, de] = x.useState();
        return Li(() => {
            j && de(window.getComputedStyle(j).zIndex)
        }, [j]), p.jsx("div", {
            ref: ze.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Ve,
                transform: Q ? Ve.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ie,
                "--radix-popper-transform-origin": [(cn = F.transformOrigin) == null ? void 0 : cn.x, (xn = F.transformOrigin) == null ? void 0 : xn.y].join(" "),
                ...((un = F.hide) == null ? void 0 : un.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: a.dir,
            children: p.jsx(cE, {
                scope: s,
                placedSide: fe,
                onArrowChange: I,
                arrowX: Z,
                arrowY: X,
                shouldHideArrow: J,
                children: p.jsx(on.div, {
                    "data-side": fe,
                    "data-align": me,
                    ...R,
                    ref: D,
                    style: { ...R.style,
                        animation: Q ? void 0 : "none"
                    }
                })
            })
        })
    });
Z1.displayName = rm;
var G1 = "PopperArrow",
    fE = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Q1 = x.forwardRef(function(n, s) {
        const {
            __scopePopper: r,
            ...o
        } = n, u = uE(G1, r), d = fE[u.placedSide];
        return p.jsx("span", {
            ref: u.onArrowChange,
            style: {
                position: "absolute",
                left: u.arrowX,
                top: u.arrowY,
                [d]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[u.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[u.placedSide],
                visibility: u.shouldHideArrow ? "hidden" : void 0
            },
            children: p.jsx(rE, { ...o,
                ref: s,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Q1.displayName = G1;

function dE(a) {
    return a !== null
}
var hE = a => ({
    name: "transformOrigin",
    options: a,
    fn(n) {
        var A, j, H;
        const {
            placement: s,
            rects: r,
            middlewareData: o
        } = n, d = ((A = o.arrow) == null ? void 0 : A.centerOffset) !== 0, m = d ? 0 : a.arrowWidth, v = d ? 0 : a.arrowHeight, [y, b] = $1(s), g = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[b], S = (((j = o.arrow) == null ? void 0 : j.x) ? ? 0) + m / 2, T = (((H = o.arrow) == null ? void 0 : H.y) ? ? 0) + v / 2;
        let O = "",
            R = "";
        return y === "bottom" ? (O = d ? g : `${S}px`, R = `${-v}px`) : y === "top" ? (O = d ? g : `${S}px`, R = `${r.floating.height+v}px`) : y === "right" ? (O = `${-v}px`, R = d ? g : `${T}px`) : y === "left" && (O = `${r.floating.width+v}px`, R = d ? g : `${T}px`), {
            data: {
                x: O,
                y: R
            }
        }
    }
});

function $1(a) {
    const [n, s = "center"] = a.split("-");
    return [n, s]
}
var mE = Y1,
    pE = Z1,
    yE = Q1,
    gE = "Portal",
    X1 = x.forwardRef((a, n) => {
        var m;
        const {
            container: s,
            ...r
        } = a, [o, u] = x.useState(!1);
        Li(() => u(!0), []);
        const d = s || o && ((m = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : m.body);
        return d ? $0.createPortal(p.jsx(on.div, { ...r,
            ref: n
        }), d) : null
    });
X1.displayName = gE;

function vE(a, n) {
    return x.useReducer((s, r) => n[s][r] ? ? s, a)
}
var Tu = a => {
    const {
        present: n,
        children: s
    } = a, r = bE(n), o = typeof s == "function" ? s({
        present: r.isPresent
    }) : x.Children.only(s), u = da(r.ref, _E(o));
    return typeof s == "function" || r.isPresent ? x.cloneElement(o, {
        ref: u
    }) : null
};
Tu.displayName = "Presence";

function bE(a) {
    const [n, s] = x.useState(), r = x.useRef(null), o = x.useRef(a), u = x.useRef("none"), d = a ? "mounted" : "unmounted", [m, v] = vE(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const y = Vc(r.current);
        u.current = m === "mounted" ? y : "none"
    }, [m]), Li(() => {
        const y = r.current,
            b = o.current;
        if (b !== a) {
            const S = u.current,
                T = Vc(y);
            a ? v("MOUNT") : T === "none" || (y == null ? void 0 : y.display) === "none" ? v("UNMOUNT") : v(b && S !== T ? "ANIMATION_OUT" : "UNMOUNT"), o.current = a
        }
    }, [a, v]), Li(() => {
        if (n) {
            let y;
            const b = n.ownerDocument.defaultView ? ? window,
                g = T => {
                    const R = Vc(r.current).includes(CSS.escape(T.animationName));
                    if (T.target === n && R && (v("ANIMATION_END"), !o.current)) {
                        const A = n.style.animationFillMode;
                        n.style.animationFillMode = "forwards", y = b.setTimeout(() => {
                            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = A)
                        })
                    }
                },
                S = T => {
                    T.target === n && (u.current = Vc(r.current))
                };
            return n.addEventListener("animationstart", S), n.addEventListener("animationcancel", g), n.addEventListener("animationend", g), () => {
                b.clearTimeout(y), n.removeEventListener("animationstart", S), n.removeEventListener("animationcancel", g), n.removeEventListener("animationend", g)
            }
        } else v("ANIMATION_END")
    }, [n, v]), {
        isPresent: ["mounted", "unmountSuspended"].includes(m),
        ref: x.useCallback(y => {
            r.current = y ? getComputedStyle(y) : null, s(y)
        }, [])
    }
}

function Vc(a) {
    return (a == null ? void 0 : a.animationName) || "none"
}

function _E(a) {
    var r, o;
    let n = (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : r.get,
        s = n && "isReactWarning" in n && n.isReactWarning;
    return s ? a.ref : (n = (o = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : o.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}
var xE = Symbol("radix.slottable");

function SE(a) {
    const n = ({
        children: s
    }) => p.jsx(p.Fragment, {
        children: s
    });
    return n.displayName = `${a}.Slottable`, n.__radixId = xE, n
}
var TE = yu[" useInsertionEffect ".trim().toString()] || Li;

function I1({
    prop: a,
    defaultProp: n,
    onChange: s = () => {},
    caller: r
}) {
    const [o, u, d] = wE({
        defaultProp: n,
        onChange: s
    }), m = a !== void 0, v = m ? a : o; {
        const b = x.useRef(a !== void 0);
        x.useEffect(() => {
            const g = b.current;
            g !== m && console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), b.current = m
        }, [m, r])
    }
    const y = x.useCallback(b => {
        var g;
        if (m) {
            const S = EE(b) ? b(a) : b;
            S !== a && ((g = d.current) == null || g.call(d, S))
        } else u(b)
    }, [m, a, u, d]);
    return [v, y]
}

function wE({
    defaultProp: a,
    onChange: n
}) {
    const [s, r] = x.useState(a), o = x.useRef(s), u = x.useRef(n);
    return TE(() => {
        u.current = n
    }, [n]), x.useEffect(() => {
        var d;
        o.current !== s && ((d = u.current) == null || d.call(u, s), o.current = s)
    }, [s, o]), [s, r, u]
}

function EE(a) {
    return typeof a == "function"
}
var CE = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    AE = "VisuallyHidden",
    K1 = x.forwardRef((a, n) => p.jsx(on.span, { ...a,
        ref: n,
        style: { ...CE,
            ...a.style
        }
    }));
K1.displayName = AE;
var NE = K1,
    [wu] = bo("Tooltip", [q1]),
    om = q1(),
    F1 = "TooltipProvider",
    jE = 700,
    Wv = "tooltip.open",
    [OE, P1] = wu(F1),
    J1 = a => {
        const {
            __scopeTooltip: n,
            delayDuration: s = jE,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: u
        } = a, d = x.useRef(!0), m = x.useRef(!1), v = x.useRef(0);
        return x.useEffect(() => {
            const y = v.current;
            return () => window.clearTimeout(y)
        }, []), p.jsx(OE, {
            scope: n,
            isOpenDelayedRef: d,
            delayDuration: s,
            onOpen: x.useCallback(() => {
                window.clearTimeout(v.current), d.current = !1
            }, []),
            onClose: x.useCallback(() => {
                window.clearTimeout(v.current), v.current = window.setTimeout(() => d.current = !0, r)
            }, [r]),
            isPointerInTransitRef: m,
            onPointerInTransitChange: x.useCallback(y => {
                m.current = y
            }, []),
            disableHoverableContent: o,
            children: u
        })
    };
J1.displayName = F1;
var W1 = "Tooltip",
    [v6, So] = wu(W1),
    Rh = "TooltipTrigger",
    RE = x.forwardRef((a, n) => {
        const {
            __scopeTooltip: s,
            ...r
        } = a, o = So(Rh, s), u = P1(Rh, s), d = om(s), m = x.useRef(null), v = da(n, m, o.onTriggerChange), y = x.useRef(!1), b = x.useRef(!1), g = x.useCallback(() => y.current = !1, []);
        return x.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), p.jsx(mE, {
            asChild: !0,
            ...d,
            children: p.jsx(on.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: v,
                onPointerMove: At(a.onPointerMove, S => {
                    S.pointerType !== "touch" && !b.current && !u.isPointerInTransitRef.current && (o.onTriggerEnter(), b.current = !0)
                }),
                onPointerLeave: At(a.onPointerLeave, () => {
                    o.onTriggerLeave(), b.current = !1
                }),
                onPointerDown: At(a.onPointerDown, () => {
                    o.open && o.onClose(), y.current = !0, document.addEventListener("pointerup", g, {
                        once: !0
                    })
                }),
                onFocus: At(a.onFocus, () => {
                    y.current || o.onOpen()
                }),
                onBlur: At(a.onBlur, o.onClose),
                onClick: At(a.onClick, o.onClose)
            })
        })
    });
RE.displayName = Rh;
var cm = "TooltipPortal",
    [ME, zE] = wu(cm, {
        forceMount: void 0
    }),
    eb = a => {
        const {
            __scopeTooltip: n,
            forceMount: s,
            children: r,
            container: o
        } = a, u = So(cm, n);
        return p.jsx(ME, {
            scope: n,
            forceMount: s,
            children: p.jsx(Tu, {
                present: s || u.open,
                children: p.jsx(X1, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
eb.displayName = cm;
var Hl = "TooltipContent",
    tb = x.forwardRef((a, n) => {
        const s = zE(Hl, a.__scopeTooltip),
            {
                forceMount: r = s.forceMount,
                side: o = "top",
                ...u
            } = a,
            d = So(Hl, a.__scopeTooltip);
        return p.jsx(Tu, {
            present: r || d.open,
            children: d.disableHoverableContent ? p.jsx(nb, {
                side: o,
                ...u,
                ref: n
            }) : p.jsx(DE, {
                side: o,
                ...u,
                ref: n
            })
        })
    }),
    DE = x.forwardRef((a, n) => {
        const s = So(Hl, a.__scopeTooltip),
            r = P1(Hl, a.__scopeTooltip),
            o = x.useRef(null),
            u = da(n, o),
            [d, m] = x.useState(null),
            {
                trigger: v,
                onClose: y
            } = s,
            b = o.current,
            {
                onPointerInTransitChange: g
            } = r,
            S = x.useCallback(() => {
                m(null), g(!1)
            }, [g]),
            T = x.useCallback((O, R) => {
                const A = O.currentTarget,
                    j = {
                        x: O.clientX,
                        y: O.clientY
                    },
                    H = qE(j, A.getBoundingClientRect()),
                    D = HE(j, H),
                    k = VE(R.getBoundingClientRect()),
                    I = ZE([...D, ...k]);
                m(I), g(!0)
            }, [g]);
        return x.useEffect(() => () => S(), [S]), x.useEffect(() => {
            if (v && b) {
                const O = A => T(A, b),
                    R = A => T(A, v);
                return v.addEventListener("pointerleave", O), b.addEventListener("pointerleave", R), () => {
                    v.removeEventListener("pointerleave", O), b.removeEventListener("pointerleave", R)
                }
            }
        }, [v, b, T, S]), x.useEffect(() => {
            if (d) {
                const O = R => {
                    const A = R.target,
                        j = {
                            x: R.clientX,
                            y: R.clientY
                        },
                        H = (v == null ? void 0 : v.contains(A)) || (b == null ? void 0 : b.contains(A)),
                        D = !YE(j, d);
                    H ? S() : D && (S(), y())
                };
                return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O)
            }
        }, [v, b, d, y, S]), p.jsx(nb, { ...a,
            ref: u
        })
    }),
    [kE, BE] = wu(W1, {
        isInside: !1
    }),
    LE = SE("TooltipContent"),
    nb = x.forwardRef((a, n) => {
        const {
            __scopeTooltip: s,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            ...m
        } = a, v = So(Hl, s), y = om(s), {
            onClose: b
        } = v;
        return x.useEffect(() => (document.addEventListener(Wv, b), () => document.removeEventListener(Wv, b)), [b]), x.useEffect(() => {
            if (v.trigger) {
                const g = S => {
                    const T = S.target;
                    T != null && T.contains(v.trigger) && b()
                };
                return window.addEventListener("scroll", g, {
                    capture: !0
                }), () => window.removeEventListener("scroll", g, {
                    capture: !0
                })
            }
        }, [v.trigger, b]), p.jsx(S1, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: g => g.preventDefault(),
            onDismiss: b,
            children: p.jsxs(pE, {
                "data-state": v.stateAttribute,
                ...y,
                ...m,
                ref: n,
                style: { ...m.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [p.jsx(LE, {
                    children: r
                }), p.jsx(kE, {
                    scope: s,
                    isInside: !0,
                    children: p.jsx(NE, {
                        id: v.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
tb.displayName = Hl;
var ab = "TooltipArrow",
    UE = x.forwardRef((a, n) => {
        const {
            __scopeTooltip: s,
            ...r
        } = a, o = om(s);
        return BE(ab, s).isInside ? null : p.jsx(yE, { ...o,
            ...r,
            ref: n
        })
    });
UE.displayName = ab;

function qE(a, n) {
    const s = Math.abs(n.top - a.y),
        r = Math.abs(n.bottom - a.y),
        o = Math.abs(n.right - a.x),
        u = Math.abs(n.left - a.x);
    switch (Math.min(s, r, o, u)) {
        case u:
            return "left";
        case o:
            return "right";
        case s:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function HE(a, n, s = 5) {
    const r = [];
    switch (n) {
        case "top":
            r.push({
                x: a.x - s,
                y: a.y + s
            }, {
                x: a.x + s,
                y: a.y + s
            });
            break;
        case "bottom":
            r.push({
                x: a.x - s,
                y: a.y - s
            }, {
                x: a.x + s,
                y: a.y - s
            });
            break;
        case "left":
            r.push({
                x: a.x + s,
                y: a.y - s
            }, {
                x: a.x + s,
                y: a.y + s
            });
            break;
        case "right":
            r.push({
                x: a.x - s,
                y: a.y - s
            }, {
                x: a.x - s,
                y: a.y + s
            });
            break
    }
    return r
}

function VE(a) {
    const {
        top: n,
        right: s,
        bottom: r,
        left: o
    } = a;
    return [{
        x: o,
        y: n
    }, {
        x: s,
        y: n
    }, {
        x: s,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function YE(a, n) {
    const {
        x: s,
        y: r
    } = a;
    let o = !1;
    for (let u = 0, d = n.length - 1; u < n.length; d = u++) {
        const m = n[u],
            v = n[d],
            y = m.x,
            b = m.y,
            g = v.x,
            S = v.y;
        b > r != S > r && s < (g - y) * (r - b) / (S - b) + y && (o = !o)
    }
    return o
}

function ZE(a) {
    const n = a.slice();
    return n.sort((s, r) => s.x < r.x ? -1 : s.x > r.x ? 1 : s.y < r.y ? -1 : s.y > r.y ? 1 : 0), GE(n)
}

function GE(a) {
    if (a.length <= 1) return a.slice();
    const n = [];
    for (let r = 0; r < a.length; r++) {
        const o = a[r];
        for (; n.length >= 2;) {
            const u = n[n.length - 1],
                d = n[n.length - 2];
            if ((u.x - d.x) * (o.y - d.y) >= (u.y - d.y) * (o.x - d.x)) n.pop();
            else break
        }
        n.push(o)
    }
    n.pop();
    const s = [];
    for (let r = a.length - 1; r >= 0; r--) {
        const o = a[r];
        for (; s.length >= 2;) {
            const u = s[s.length - 1],
                d = s[s.length - 2];
            if ((u.x - d.x) * (o.y - d.y) >= (u.y - d.y) * (o.x - d.x)) s.pop();
            else break
        }
        s.push(o)
    }
    return s.pop(), n.length === 1 && s.length === 1 && n[0].x === s[0].x && n[0].y === s[0].y ? n : n.concat(s)
}
var QE = J1,
    $E = eb,
    ib = tb;
const XE = "_content_1hxhe_2",
    IE = {
        content: XE
    },
    KE = QE,
    FE = x.forwardRef(({
        className: a,
        sideOffset: n = 4,
        ...s
    }, r) => p.jsx($E, {
        children: p.jsx(ib, {
            ref: r,
            sideOffset: n,
            className: `${IE.content} ${a||""}`,
            ...s
        })
    }));
FE.displayName = ib.displayName;

function PE(a) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        s = document.createElement("style");
    s.type = "text/css", n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = a : s.appendChild(document.createTextNode(a))
}
const JE = a => {
        switch (a) {
            case "success":
                return tC;
            case "info":
                return aC;
            case "warning":
                return nC;
            case "error":
                return iC;
            default:
                return null
        }
    },
    WE = Array(12).fill(0),
    eC = ({
        visible: a,
        className: n
    }) => $.createElement("div", {
        className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
        "data-visible": a
    }, $.createElement("div", {
        className: "sonner-spinner"
    }, WE.map((s, r) => $.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    tC = $.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, $.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    nC = $.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, $.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    aC = $.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, $.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    iC = $.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, $.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    sC = $.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, $.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), $.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    lC = () => {
        const [a, n] = $.useState(document.hidden);
        return $.useEffect(() => {
            const s = () => {
                n(document.hidden)
            };
            return document.addEventListener("visibilitychange", s), () => window.removeEventListener("visibilitychange", s)
        }, []), a
    };
let Mh = 1;
class rC {
    constructor() {
        this.subscribe = n => (this.subscribers.push(n), () => {
            const s = this.subscribers.indexOf(n);
            this.subscribers.splice(s, 1)
        }), this.publish = n => {
            this.subscribers.forEach(s => s(n))
        }, this.addToast = n => {
            this.publish(n), this.toasts = [...this.toasts, n]
        }, this.create = n => {
            var s;
            const {
                message: r,
                ...o
            } = n, u = typeof(n == null ? void 0 : n.id) == "number" || ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : Mh++, d = this.toasts.find(v => v.id === u), m = n.dismissible === void 0 ? !0 : n.dismissible;
            return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), d ? this.toasts = this.toasts.map(v => v.id === u ? (this.publish({ ...v,
                ...n,
                id: u,
                title: r
            }), { ...v,
                ...n,
                id: u,
                dismissible: m,
                title: r
            }) : v) : this.addToast({
                title: r,
                ...o,
                dismissible: m,
                id: u
            }), u
        }, this.dismiss = n => (n ? (this.dismissedToasts.add(n), requestAnimationFrame(() => this.subscribers.forEach(s => s({
            id: n,
            dismiss: !0
        })))) : this.toasts.forEach(s => {
            this.subscribers.forEach(r => r({
                id: s.id,
                dismiss: !0
            }))
        }), n), this.message = (n, s) => this.create({ ...s,
            message: n
        }), this.error = (n, s) => this.create({ ...s,
            message: n,
            type: "error"
        }), this.success = (n, s) => this.create({ ...s,
            type: "success",
            message: n
        }), this.info = (n, s) => this.create({ ...s,
            type: "info",
            message: n
        }), this.warning = (n, s) => this.create({ ...s,
            type: "warning",
            message: n
        }), this.loading = (n, s) => this.create({ ...s,
            type: "loading",
            message: n
        }), this.promise = (n, s) => {
            if (!s) return;
            let r;
            s.loading !== void 0 && (r = this.create({ ...s,
                promise: n,
                type: "loading",
                message: s.loading,
                description: typeof s.description != "function" ? s.description : void 0
            }));
            const o = Promise.resolve(n instanceof Function ? n() : n);
            let u = r !== void 0,
                d;
            const m = o.then(async y => {
                    if (d = ["resolve", y], $.isValidElement(y)) u = !1, this.create({
                        id: r,
                        type: "default",
                        message: y
                    });
                    else if (cC(y) && !y.ok) {
                        u = !1;
                        const g = typeof s.error == "function" ? await s.error(`HTTP error! status: ${y.status}`) : s.error,
                            S = typeof s.description == "function" ? await s.description(`HTTP error! status: ${y.status}`) : s.description,
                            O = typeof g == "object" && !$.isValidElement(g) ? g : {
                                message: g
                            };
                        this.create({
                            id: r,
                            type: "error",
                            description: S,
                            ...O
                        })
                    } else if (y instanceof Error) {
                        u = !1;
                        const g = typeof s.error == "function" ? await s.error(y) : s.error,
                            S = typeof s.description == "function" ? await s.description(y) : s.description,
                            O = typeof g == "object" && !$.isValidElement(g) ? g : {
                                message: g
                            };
                        this.create({
                            id: r,
                            type: "error",
                            description: S,
                            ...O
                        })
                    } else if (s.success !== void 0) {
                        u = !1;
                        const g = typeof s.success == "function" ? await s.success(y) : s.success,
                            S = typeof s.description == "function" ? await s.description(y) : s.description,
                            O = typeof g == "object" && !$.isValidElement(g) ? g : {
                                message: g
                            };
                        this.create({
                            id: r,
                            type: "success",
                            description: S,
                            ...O
                        })
                    }
                }).catch(async y => {
                    if (d = ["reject", y], s.error !== void 0) {
                        u = !1;
                        const b = typeof s.error == "function" ? await s.error(y) : s.error,
                            g = typeof s.description == "function" ? await s.description(y) : s.description,
                            T = typeof b == "object" && !$.isValidElement(b) ? b : {
                                message: b
                            };
                        this.create({
                            id: r,
                            type: "error",
                            description: g,
                            ...T
                        })
                    }
                }).finally(() => {
                    u && (this.dismiss(r), r = void 0), s.finally == null || s.finally.call(s)
                }),
                v = () => new Promise((y, b) => m.then(() => d[0] === "reject" ? b(d[1]) : y(d[1])).catch(b));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: v
            } : Object.assign(r, {
                unwrap: v
            })
        }, this.custom = (n, s) => {
            const r = (s == null ? void 0 : s.id) || Mh++;
            return this.create({
                jsx: n(r),
                id: r,
                ...s
            }), r
        }, this.getActiveToasts = () => this.toasts.filter(n => !this.dismissedToasts.has(n.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
    }
}
const rn = new rC,
    oC = (a, n) => {
        const s = (n == null ? void 0 : n.id) || Mh++;
        return rn.addToast({
            title: a,
            ...n,
            id: s
        }), s
    },
    cC = a => a && typeof a == "object" && "ok" in a && typeof a.ok == "boolean" && "status" in a && typeof a.status == "number",
    uC = oC,
    fC = () => rn.toasts,
    dC = () => rn.getActiveToasts(),
    e0 = Object.assign(uC, {
        success: rn.success,
        info: rn.info,
        warning: rn.warning,
        error: rn.error,
        custom: rn.custom,
        message: rn.message,
        promise: rn.promise,
        dismiss: rn.dismiss,
        loading: rn.loading
    }, {
        getHistory: fC,
        getToasts: dC
    });
PE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");

function Yc(a) {
    return a.label !== void 0
}
const hC = 3,
    mC = "24px",
    pC = "16px",
    t0 = 4e3,
    yC = 356,
    gC = 14,
    vC = 45,
    bC = 200;

function ea(...a) {
    return a.filter(Boolean).join(" ")
}

function _C(a) {
    const [n, s] = a.split("-"), r = [];
    return n && r.push(n), s && r.push(s), r
}
const xC = a => {
    var n, s, r, o, u, d, m, v, y;
    const {
        invert: b,
        toast: g,
        unstyled: S,
        interacting: T,
        setHeights: O,
        visibleToasts: R,
        heights: A,
        index: j,
        toasts: H,
        expanded: D,
        removeToast: k,
        defaultRichColors: I,
        closeButton: W,
        style: K,
        cancelButtonStyle: ee,
        actionButtonStyle: we,
        className: ae = "",
        descriptionClassName: ye = "",
        duration: ve,
        position: be,
        gap: ze,
        expandByDefault: Ve,
        classNames: z,
        icons: Q,
        closeButtonAriaLabel: F = "Close toast"
    } = a, [fe, me] = $.useState(null), [C, Z] = $.useState(null), [X, J] = $.useState(!1), [ie, de] = $.useState(!1), [je, Ee] = $.useState(!1), [$e, cn] = $.useState(!1), [xn, un] = $.useState(!1), [Xn, Xt] = $.useState(0), [Gi, Xa] = $.useState(0), ya = $.useRef(g.duration || ve || t0), Qi = $.useRef(null), St = $.useRef(null), Pl = j === 0, Jl = j + 1 <= R, qt = g.type, Ia = g.dismissible !== !1, Ht = g.className || "", ju = g.descriptionClassName || "", $i = $.useMemo(() => A.findIndex(ge => ge.toastId === g.id) || 0, [A, g.id]), wo = $.useMemo(() => {
        var ge;
        return (ge = g.closeButton) != null ? ge : W
    }, [g.closeButton, W]), Xi = $.useMemo(() => g.duration || ve || t0, [g.duration, ve]), Wl = $.useRef(0), ga = $.useRef(0), Eo = $.useRef(0), Ka = $.useRef(null), [Ii, Vt] = be.split("-"), Un = $.useMemo(() => A.reduce((ge, it, Tt) => Tt >= $i ? ge : ge + it.height, 0), [A, $i]), Dt = lC(), Ou = g.invert || b, er = qt === "loading";
    ga.current = $.useMemo(() => $i * ze + Un, [$i, Un]), $.useEffect(() => {
        ya.current = Xi
    }, [Xi]), $.useEffect(() => {
        J(!0)
    }, []), $.useEffect(() => {
        const ge = St.current;
        if (ge) {
            const it = ge.getBoundingClientRect().height;
            return Xa(it), O(Tt => [{
                toastId: g.id,
                height: it,
                position: g.position
            }, ...Tt]), () => O(Tt => Tt.filter(kt => kt.toastId !== g.id))
        }
    }, [O, g.id]), $.useLayoutEffect(() => {
        if (!X) return;
        const ge = St.current,
            it = ge.style.height;
        ge.style.height = "auto";
        const Tt = ge.getBoundingClientRect().height;
        ge.style.height = it, Xa(Tt), O(kt => kt.find(lt => lt.toastId === g.id) ? kt.map(lt => lt.toastId === g.id ? { ...lt,
            height: Tt
        } : lt) : [{
            toastId: g.id,
            height: Tt,
            position: g.position
        }, ...kt])
    }, [X, g.title, g.description, O, g.id, g.jsx, g.action, g.cancel]);
    const In = $.useCallback(() => {
        de(!0), Xt(ga.current), O(ge => ge.filter(it => it.toastId !== g.id)), setTimeout(() => {
            k(g)
        }, bC)
    }, [g, k, O, ga]);
    $.useEffect(() => {
        if (g.promise && qt === "loading" || g.duration === 1 / 0 || g.type === "loading") return;
        let ge;
        return D || T || Dt ? (() => {
            if (Eo.current < Wl.current) {
                const kt = new Date().getTime() - Wl.current;
                ya.current = ya.current - kt
            }
            Eo.current = new Date().getTime()
        })() : (() => {
            ya.current !== 1 / 0 && (Wl.current = new Date().getTime(), ge = setTimeout(() => {
                g.onAutoClose == null || g.onAutoClose.call(g, g), In()
            }, ya.current))
        })(), () => clearTimeout(ge)
    }, [D, T, g, qt, Dt, In]), $.useEffect(() => {
        g.delete && (In(), g.onDismiss == null || g.onDismiss.call(g, g))
    }, [In, g.delete]);

    function ks() {
        var ge;
        if (Q != null && Q.loading) {
            var it;
            return $.createElement("div", {
                className: ea(z == null ? void 0 : z.loader, g == null || (it = g.classNames) == null ? void 0 : it.loader, "sonner-loader"),
                "data-visible": qt === "loading"
            }, Q.loading)
        }
        return $.createElement(eC, {
            className: ea(z == null ? void 0 : z.loader, g == null || (ge = g.classNames) == null ? void 0 : ge.loader),
            visible: qt === "loading"
        })
    }
    const Bs = g.icon || (Q == null ? void 0 : Q[qt]) || JE(qt);
    var Ki, Kn;
    return $.createElement("li", {
        tabIndex: 0,
        ref: St,
        className: ea(ae, Ht, z == null ? void 0 : z.toast, g == null || (n = g.classNames) == null ? void 0 : n.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[qt], g == null || (s = g.classNames) == null ? void 0 : s[qt]),
        "data-sonner-toast": "",
        "data-rich-colors": (Ki = g.richColors) != null ? Ki : I,
        "data-styled": !(g.jsx || g.unstyled || S),
        "data-mounted": X,
        "data-promise": !!g.promise,
        "data-swiped": xn,
        "data-removed": ie,
        "data-visible": Jl,
        "data-y-position": Ii,
        "data-x-position": Vt,
        "data-index": j,
        "data-front": Pl,
        "data-swiping": je,
        "data-dismissible": Ia,
        "data-type": qt,
        "data-invert": Ou,
        "data-swipe-out": $e,
        "data-swipe-direction": C,
        "data-expanded": !!(D || Ve && X),
        "data-testid": g.testId,
        style: {
            "--index": j,
            "--toasts-before": j,
            "--z-index": H.length - j,
            "--offset": `${ie?Xn:ga.current}px`,
            "--initial-height": Ve ? "auto" : `${Gi}px`,
            ...K,
            ...g.style
        },
        onDragEnd: () => {
            Ee(!1), me(null), Ka.current = null
        },
        onPointerDown: ge => {
            ge.button !== 2 && (er || !Ia || (Qi.current = new Date, Xt(ga.current), ge.target.setPointerCapture(ge.pointerId), ge.target.tagName !== "BUTTON" && (Ee(!0), Ka.current = {
                x: ge.clientX,
                y: ge.clientY
            })))
        },
        onPointerUp: () => {
            var ge, it, Tt;
            if ($e || !Ia) return;
            Ka.current = null;
            const kt = Number(((ge = St.current) == null ? void 0 : ge.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                Fa = Number(((it = St.current) == null ? void 0 : it.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                lt = new Date().getTime() - ((Tt = Qi.current) == null ? void 0 : Tt.getTime()),
                It = fe === "x" ? kt : Fa,
                Fi = Math.abs(It) / lt;
            if (Math.abs(It) >= vC || Fi > .11) {
                Xt(ga.current), g.onDismiss == null || g.onDismiss.call(g, g), Z(fe === "x" ? kt > 0 ? "right" : "left" : Fa > 0 ? "down" : "up"), In(), cn(!0);
                return
            } else {
                var Kt, Ft;
                (Kt = St.current) == null || Kt.style.setProperty("--swipe-amount-x", "0px"), (Ft = St.current) == null || Ft.style.setProperty("--swipe-amount-y", "0px")
            }
            un(!1), Ee(!1), me(null)
        },
        onPointerMove: ge => {
            var it, Tt, kt;
            if (!Ka.current || !Ia || ((it = window.getSelection()) == null ? void 0 : it.toString().length) > 0) return;
            const lt = ge.clientY - Ka.current.y,
                It = ge.clientX - Ka.current.x;
            var Fi;
            const Kt = (Fi = a.swipeDirections) != null ? Fi : _C(be);
            !fe && (Math.abs(It) > 1 || Math.abs(lt) > 1) && me(Math.abs(It) > Math.abs(lt) ? "x" : "y");
            let Ft = {
                x: 0,
                y: 0
            };
            const Ls = qn => 1 / (1.5 + Math.abs(qn) / 20);
            if (fe === "y") {
                if (Kt.includes("top") || Kt.includes("bottom"))
                    if (Kt.includes("top") && lt < 0 || Kt.includes("bottom") && lt > 0) Ft.y = lt;
                    else {
                        const qn = lt * Ls(lt);
                        Ft.y = Math.abs(qn) < Math.abs(lt) ? qn : lt
                    }
            } else if (fe === "x" && (Kt.includes("left") || Kt.includes("right")))
                if (Kt.includes("left") && It < 0 || Kt.includes("right") && It > 0) Ft.x = It;
                else {
                    const qn = It * Ls(It);
                    Ft.x = Math.abs(qn) < Math.abs(It) ? qn : It
                }(Math.abs(Ft.x) > 0 || Math.abs(Ft.y) > 0) && un(!0), (Tt = St.current) == null || Tt.style.setProperty("--swipe-amount-x", `${Ft.x}px`), (kt = St.current) == null || kt.style.setProperty("--swipe-amount-y", `${Ft.y}px`)
        }
    }, wo && !g.jsx && qt !== "loading" ? $.createElement("button", {
        "aria-label": F,
        "data-disabled": er,
        "data-close-button": !0,
        onClick: er || !Ia ? () => {} : () => {
            In(), g.onDismiss == null || g.onDismiss.call(g, g)
        },
        className: ea(z == null ? void 0 : z.closeButton, g == null || (r = g.classNames) == null ? void 0 : r.closeButton)
    }, (Kn = Q == null ? void 0 : Q.close) != null ? Kn : sC) : null, (qt || g.icon || g.promise) && g.icon !== null && ((Q == null ? void 0 : Q[qt]) !== null || g.icon) ? $.createElement("div", {
        "data-icon": "",
        className: ea(z == null ? void 0 : z.icon, g == null || (o = g.classNames) == null ? void 0 : o.icon)
    }, g.promise || g.type === "loading" && !g.icon ? g.icon || ks() : null, g.type !== "loading" ? Bs : null) : null, $.createElement("div", {
        "data-content": "",
        className: ea(z == null ? void 0 : z.content, g == null || (u = g.classNames) == null ? void 0 : u.content)
    }, $.createElement("div", {
        "data-title": "",
        className: ea(z == null ? void 0 : z.title, g == null || (d = g.classNames) == null ? void 0 : d.title)
    }, g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title), g.description ? $.createElement("div", {
        "data-description": "",
        className: ea(ye, ju, z == null ? void 0 : z.description, g == null || (m = g.classNames) == null ? void 0 : m.description)
    }, typeof g.description == "function" ? g.description() : g.description) : null), $.isValidElement(g.cancel) ? g.cancel : g.cancel && Yc(g.cancel) ? $.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: g.cancelButtonStyle || ee,
        onClick: ge => {
            Yc(g.cancel) && Ia && (g.cancel.onClick == null || g.cancel.onClick.call(g.cancel, ge), In())
        },
        className: ea(z == null ? void 0 : z.cancelButton, g == null || (v = g.classNames) == null ? void 0 : v.cancelButton)
    }, g.cancel.label) : null, $.isValidElement(g.action) ? g.action : g.action && Yc(g.action) ? $.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: g.actionButtonStyle || we,
        onClick: ge => {
            Yc(g.action) && (g.action.onClick == null || g.action.onClick.call(g.action, ge), !ge.defaultPrevented && In())
        },
        className: ea(z == null ? void 0 : z.actionButton, g == null || (y = g.classNames) == null ? void 0 : y.actionButton)
    }, g.action.label) : null)
};

function n0() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const a = document.documentElement.getAttribute("dir");
    return a === "auto" || !a ? window.getComputedStyle(document.documentElement).direction : a
}

function SC(a, n) {
    const s = {};
    return [a, n].forEach((r, o) => {
        const u = o === 1,
            d = u ? "--mobile-offset" : "--offset",
            m = u ? pC : mC;

        function v(y) {
            ["top", "right", "bottom", "left"].forEach(b => {
                s[`${d}-${b}`] = typeof y == "number" ? `${y}px` : y
            })
        }
        typeof r == "number" || typeof r == "string" ? v(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(y => {
            r[y] === void 0 ? s[`${d}-${y}`] = m : s[`${d}-${y}`] = typeof r[y] == "number" ? `${r[y]}px` : r[y]
        }) : v(m)
    }), s
}
const TC = $.forwardRef(function(n, s) {
        const {
            id: r,
            invert: o,
            position: u = "bottom-right",
            hotkey: d = ["altKey", "KeyT"],
            expand: m,
            closeButton: v,
            className: y,
            offset: b,
            mobileOffset: g,
            theme: S = "light",
            richColors: T,
            duration: O,
            style: R,
            visibleToasts: A = hC,
            toastOptions: j,
            dir: H = n0(),
            gap: D = gC,
            icons: k,
            containerAriaLabel: I = "Notifications"
        } = n, [W, K] = $.useState([]), ee = $.useMemo(() => r ? W.filter(X => X.toasterId === r) : W.filter(X => !X.toasterId), [W, r]), we = $.useMemo(() => Array.from(new Set([u].concat(ee.filter(X => X.position).map(X => X.position)))), [ee, u]), [ae, ye] = $.useState([]), [ve, be] = $.useState(!1), [ze, Ve] = $.useState(!1), [z, Q] = $.useState(S !== "system" ? S : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), F = $.useRef(null), fe = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), me = $.useRef(null), C = $.useRef(!1), Z = $.useCallback(X => {
            K(J => {
                var ie;
                return (ie = J.find(de => de.id === X.id)) != null && ie.delete || rn.dismiss(X.id), J.filter(({
                    id: de
                }) => de !== X.id)
            })
        }, []);
        return $.useEffect(() => rn.subscribe(X => {
            if (X.dismiss) {
                requestAnimationFrame(() => {
                    K(J => J.map(ie => ie.id === X.id ? { ...ie,
                        delete: !0
                    } : ie))
                });
                return
            }
            setTimeout(() => {
                $0.flushSync(() => {
                    K(J => {
                        const ie = J.findIndex(de => de.id === X.id);
                        return ie !== -1 ? [...J.slice(0, ie), { ...J[ie],
                            ...X
                        }, ...J.slice(ie + 1)] : [X, ...J]
                    })
                })
            })
        }), [W]), $.useEffect(() => {
            if (S !== "system") {
                Q(S);
                return
            }
            if (S === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")), typeof window > "u") return;
            const X = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                X.addEventListener("change", ({
                    matches: J
                }) => {
                    Q(J ? "dark" : "light")
                })
            } catch {
                X.addListener(({
                    matches: ie
                }) => {
                    try {
                        Q(ie ? "dark" : "light")
                    } catch (de) {
                        console.error(de)
                    }
                })
            }
        }, [S]), $.useEffect(() => {
            W.length <= 1 && be(!1)
        }, [W]), $.useEffect(() => {
            const X = J => {
                var ie;
                if (d.every(Ee => J[Ee] || J.code === Ee)) {
                    var je;
                    be(!0), (je = F.current) == null || je.focus()
                }
                J.code === "Escape" && (document.activeElement === F.current || (ie = F.current) != null && ie.contains(document.activeElement)) && be(!1)
            };
            return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X)
        }, [d]), $.useEffect(() => {
            if (F.current) return () => {
                me.current && (me.current.focus({
                    preventScroll: !0
                }), me.current = null, C.current = !1)
            }
        }, [F.current]), $.createElement("section", {
            ref: s,
            "aria-label": `${I} ${fe}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, we.map((X, J) => {
            var ie;
            const [de, je] = X.split("-");
            return ee.length ? $.createElement("ol", {
                key: X,
                dir: H === "auto" ? n0() : H,
                tabIndex: -1,
                ref: F,
                className: y,
                "data-sonner-toaster": !0,
                "data-sonner-theme": z,
                "data-y-position": de,
                "data-x-position": je,
                style: {
                    "--front-toast-height": `${((ie=ae[0])==null?void 0:ie.height)||0}px`,
                    "--width": `${yC}px`,
                    "--gap": `${D}px`,
                    ...R,
                    ...SC(b, g)
                },
                onBlur: Ee => {
                    C.current && !Ee.currentTarget.contains(Ee.relatedTarget) && (C.current = !1, me.current && (me.current.focus({
                        preventScroll: !0
                    }), me.current = null))
                },
                onFocus: Ee => {
                    Ee.target instanceof HTMLElement && Ee.target.dataset.dismissible === "false" || C.current || (C.current = !0, me.current = Ee.relatedTarget)
                },
                onMouseEnter: () => be(!0),
                onMouseMove: () => be(!0),
                onMouseLeave: () => {
                    ze || be(!1)
                },
                onDragEnd: () => be(!1),
                onPointerDown: Ee => {
                    Ee.target instanceof HTMLElement && Ee.target.dataset.dismissible === "false" || Ve(!0)
                },
                onPointerUp: () => Ve(!1)
            }, ee.filter(Ee => !Ee.position && J === 0 || Ee.position === X).map((Ee, $e) => {
                var cn, xn;
                return $.createElement(xC, {
                    key: Ee.id,
                    icons: k,
                    index: $e,
                    toast: Ee,
                    defaultRichColors: T,
                    duration: (cn = j == null ? void 0 : j.duration) != null ? cn : O,
                    className: j == null ? void 0 : j.className,
                    descriptionClassName: j == null ? void 0 : j.descriptionClassName,
                    invert: o,
                    visibleToasts: A,
                    closeButton: (xn = j == null ? void 0 : j.closeButton) != null ? xn : v,
                    interacting: ze,
                    position: X,
                    style: j == null ? void 0 : j.style,
                    unstyled: j == null ? void 0 : j.unstyled,
                    classNames: j == null ? void 0 : j.classNames,
                    cancelButtonStyle: j == null ? void 0 : j.cancelButtonStyle,
                    actionButtonStyle: j == null ? void 0 : j.actionButtonStyle,
                    closeButtonAriaLabel: j == null ? void 0 : j.closeButtonAriaLabel,
                    removeToast: Z,
                    toasts: ee.filter(un => un.position == Ee.position),
                    heights: ae.filter(un => un.position == Ee.position),
                    setHeights: ye,
                    expandByDefault: m,
                    gap: D,
                    expanded: ve,
                    swipeDirections: n.swipeDirections
                })
            })) : null
        }))
    }),
    wC = "_toaster_uhdob_2",
    EC = "_toast_uhdob_2",
    CC = "_content_uhdob_35",
    AC = "_title_uhdob_43",
    NC = "_description_uhdob_50",
    jC = "_icon_uhdob_56",
    OC = "_actionButton_uhdob_66",
    RC = "_cancelButton_uhdob_93",
    MC = "_closeButton_uhdob_119",
    Ba = {
        toaster: wC,
        toast: EC,
        content: CC,
        title: AC,
        description: NC,
        icon: jC,
        actionButton: OC,
        cancelButton: RC,
        closeButton: MC
    },
    zC = ({
        className: a,
        ...n
    }) => p.jsx(TC, {
        className: `${Ba.toaster} ${a??""}`,
        toastOptions: {
            unstyled: !0,
            classNames: {
                toast: Ba.toast,
                content: Ba.content,
                title: Ba.title,
                actionButton: Ba.actionButton,
                cancelButton: Ba.cancelButton,
                closeButton: Ba.closeButton,
                description: Ba.description,
                icon: Ba.icon
            }
        },
        ...n
    }),
    DC = () => {
        let a = Xl(),
            n = x.useMemo(() => {
                let s = a.hash;
                const r = o => o.slice(1);
                return s ? document.getElementById(r(s)) : null
            }, [a]);
        return x.useEffect(() => {
            n && n.scrollIntoView({
                behavior: "smooth",
                inline: "nearest"
            })
        }, [n]), null
    },
    kC = new uT({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1e3
            }
        }
    }),
    BC = ({
        children: a
    }) => p.jsx(fT, {
        client: kC,
        children: p.jsxs(jT, {
            children: [p.jsx(DC, {}), p.jsxs(KE, {
                children: [a, p.jsx(zC, {})]
            })]
        })
    });
var LC = Symbol.for("react.lazy"),
    uu = yu[" use ".trim().toString()];

function UC(a) {
    return typeof a == "object" && a !== null && "then" in a
}

function sb(a) {
    return a != null && typeof a == "object" && "$$typeof" in a && a.$$typeof === LC && "_payload" in a && UC(a._payload)
}

function qC(a) {
    const n = HC(a),
        s = x.forwardRef((r, o) => {
            let {
                children: u,
                ...d
            } = r;
            sb(u) && typeof uu == "function" && (u = uu(u._payload));
            const m = x.Children.toArray(u),
                v = m.find(YC);
            if (v) {
                const y = v.props.children,
                    b = m.map(g => g === v ? x.Children.count(y) > 1 ? x.Children.only(null) : x.isValidElement(y) ? y.props.children : null : g);
                return p.jsx(n, { ...d,
                    ref: o,
                    children: x.isValidElement(y) ? x.cloneElement(y, void 0, b) : null
                })
            }
            return p.jsx(n, { ...d,
                ref: o,
                children: u
            })
        });
    return s.displayName = `${a}.Slot`, s
}
var lb = qC("Slot");

function HC(a) {
    const n = x.forwardRef((s, r) => {
        let {
            children: o,
            ...u
        } = s;
        if (sb(o) && typeof uu == "function" && (o = uu(o._payload)), x.isValidElement(o)) {
            const d = GC(o),
                m = ZC(u, o.props);
            return o.type !== x.Fragment && (m.ref = r ? vu(r, d) : d), x.cloneElement(o, m)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    });
    return n.displayName = `${a}.SlotClone`, n
}
var VC = Symbol("radix.slottable");

function YC(a) {
    return x.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === VC
}

function ZC(a, n) {
    const s = { ...n
    };
    for (const r in n) {
        const o = a[r],
            u = n[r];
        /^on[A-Z]/.test(r) ? o && u ? s[r] = (...m) => {
            const v = u(...m);
            return o(...m), v
        } : o && (s[r] = o) : r === "style" ? s[r] = { ...o,
            ...u
        } : r === "className" && (s[r] = [o, u].filter(Boolean).join(" "))
    }
    return { ...a,
        ...s
    }
}

function GC(a) {
    var r, o;
    let n = (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : r.get,
        s = n && "isReactWarning" in n && n.isReactWarning;
    return s ? a.ref : (n = (o = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : o.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}
const QC = "_button_n60sf_2",
    $C = "_sm_n60sf_37",
    XC = "_md_n60sf_43",
    IC = "_lg_n60sf_49",
    KC = "_icon_n60sf_57",
    FC = "_primary_n60sf_102",
    PC = "_secondary_n60sf_120",
    JC = "_destructive_n60sf_136",
    WC = "_outline_n60sf_160",
    eA = "_ghost_n60sf_180",
    tA = "_link_n60sf_197",
    nA = "_disabled_n60sf_229",
    aA = "_dark_n60sf_236",
    Zc = {
        button: QC,
        sm: $C,
        md: XC,
        lg: IC,
        icon: KC,
        "icon-md": "_icon-md_n60sf_58",
        "icon-sm": "_icon-sm_n60sf_64",
        "icon-lg": "_icon-lg_n60sf_70",
        primary: FC,
        secondary: PC,
        destructive: JC,
        outline: WC,
        ghost: eA,
        link: tA,
        disabled: nA,
        dark: aA
    },
    Bn = $.forwardRef(({
        children: a,
        variant: n = "primary",
        size: s = "md",
        asChild: r = !1,
        className: o,
        disabled: u,
        type: d = "button",
        ...m
    }, v) => {
        const y = r ? lb : "button";
        return p.jsx(y, {
            ref: v,
            type: d,
            className: `
        ${Zc.button} 
        ${Zc[n]} 
        ${Zc[s]} 
        ${u?Zc.disabled:""} 
        ${o||""}
      `,
            disabled: u,
            ...m,
            children: a
        })
    });
Bn.displayName = "Button";
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iA = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    rb = (...a) => a.filter((n, s, r) => !!n && n.trim() !== "" && r.indexOf(n) === s).join(" ").trim();
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sA = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lA = x.forwardRef(({
    color: a = "currentColor",
    size: n = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: u,
    iconNode: d,
    ...m
}, v) => x.createElement("svg", {
    ref: v,
    ...sA,
    width: n,
    height: n,
    stroke: a,
    strokeWidth: r ? Number(s) * 24 / Number(n) : s,
    className: rb("lucide", o),
    ...m
}, [...d.map(([y, b]) => x.createElement(y, b)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (a, n) => {
    const s = x.forwardRef(({
        className: r,
        ...o
    }, u) => x.createElement(lA, {
        ref: u,
        iconNode: n,
        className: rb(`lucide-${iA(a)}`, r),
        ...o
    }));
    return s.displayName = `${a}`, s
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rA = [
        ["path", {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }]
    ],
    oA = Ae("Activity", rA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cA = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    ob = Ae("ArrowRight", cA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uA = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    fA = Ae("Award", uA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dA = [
        ["path", {
            d: "M12 8V4H8",
            key: "hb8ula"
        }],
        ["rect", {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }],
        ["path", {
            d: "M2 14h2",
            key: "vft8re"
        }],
        ["path", {
            d: "M20 14h2",
            key: "4cs60a"
        }],
        ["path", {
            d: "M15 13v2",
            key: "1xurst"
        }],
        ["path", {
            d: "M9 13v2",
            key: "rq6x2g"
        }]
    ],
    Fc = Ae("Bot", dA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hA = [
        ["path", {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            key: "hh9hay"
        }],
        ["path", {
            d: "m3.3 7 8.7 5 8.7-5",
            key: "g66t2b"
        }],
        ["path", {
            d: "M12 22V12",
            key: "d0xqtd"
        }]
    ],
    mA = Ae("Box", hA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pA = [
        ["path", {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }]
    ],
    a0 = Ae("Briefcase", pA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yA = [
        ["path", {
            d: "m8 2 1.88 1.88",
            key: "fmnt4t"
        }],
        ["path", {
            d: "M14.12 3.88 16 2",
            key: "qol33r"
        }],
        ["path", {
            d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
            key: "d7y7pr"
        }],
        ["path", {
            d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
            key: "xs1cw7"
        }],
        ["path", {
            d: "M12 20v-9",
            key: "1qisl0"
        }],
        ["path", {
            d: "M6.53 9C4.6 8.8 3 7.1 3 5",
            key: "32zzws"
        }],
        ["path", {
            d: "M6 13H2",
            key: "82j7cp"
        }],
        ["path", {
            d: "M3 21c0-2.1 1.7-3.9 3.8-4",
            key: "4p0ekp"
        }],
        ["path", {
            d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
            key: "18gb23"
        }],
        ["path", {
            d: "M22 13h-4",
            key: "1jl80f"
        }],
        ["path", {
            d: "M17.2 17c2.1.1 3.8 1.9 3.8 4",
            key: "k3fwyw"
        }]
    ],
    Pc = Ae("Bug", yA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gA = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    vA = Ae("CircleCheck", gA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bA = [
        ["path", {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }]
    ],
    _A = Ae("Cloud", bA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xA = [
        ["path", {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }],
        ["path", {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }],
        ["path", {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }]
    ],
    Jc = Ae("CodeXml", xA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SA = [
        ["rect", {
            width: "16",
            height: "16",
            x: "4",
            y: "4",
            rx: "2",
            key: "14l7u7"
        }],
        ["rect", {
            width: "6",
            height: "6",
            x: "9",
            y: "9",
            rx: "1",
            key: "5aljv4"
        }],
        ["path", {
            d: "M15 2v2",
            key: "13l42r"
        }],
        ["path", {
            d: "M15 20v2",
            key: "15mkzm"
        }],
        ["path", {
            d: "M2 15h2",
            key: "1gxd5l"
        }],
        ["path", {
            d: "M2 9h2",
            key: "1bbxkp"
        }],
        ["path", {
            d: "M20 15h2",
            key: "19e6y8"
        }],
        ["path", {
            d: "M20 9h2",
            key: "19tzq7"
        }],
        ["path", {
            d: "M9 2v2",
            key: "165o2o"
        }],
        ["path", {
            d: "M9 20v2",
            key: "i2bqo8"
        }]
    ],
    i0 = Ae("Cpu", SA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TA = [
        ["ellipse", {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }],
        ["path", {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }],
        ["path", {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }]
    ],
    wA = Ae("Database", TA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EA = [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["polyline", {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }]
    ],
    CA = Ae("Download", EA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AA = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    NA = Ae("ExternalLink", AA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jA = [
        ["line", {
            x1: "6",
            x2: "6",
            y1: "3",
            y2: "15",
            key: "17qcm7"
        }],
        ["circle", {
            cx: "18",
            cy: "6",
            r: "3",
            key: "1h7g24"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }],
        ["path", {
            d: "M18 9a9 9 0 0 1-9 9",
            key: "n2h4wq"
        }]
    ],
    OA = Ae("GitBranch", jA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RA = [
        ["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }],
        ["path", {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }]
    ],
    Eu = Ae("Github", RA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MA = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ],
    Wc = Ae("Globe", MA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zA = [
        ["path", {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }],
        ["path", {
            d: "M22 10v6",
            key: "1lu8f3"
        }],
        ["path", {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }]
    ],
    DA = Ae("GraduationCap", zA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kA = [
        ["path", {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }],
        ["path", {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }],
        ["path", {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }]
    ],
    BA = Ae("Layers", kA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LA = [
        ["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }],
        ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]
    ],
    um = Ae("Linkedin", LA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UA = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    cb = Ae("Lock", UA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qA = [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ],
    ub = Ae("Mail", qA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HA = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    VA = Ae("MapPin", HA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YA = [
        ["path", {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza"
        }],
        ["path", {
            d: "M11 12 5.12 2.2",
            key: "qhuxz6"
        }],
        ["path", {
            d: "m13 12 5.88-9.8",
            key: "hbye0f"
        }],
        ["path", {
            d: "M8 7h8",
            key: "i86dvs"
        }],
        ["circle", {
            cx: "12",
            cy: "17",
            r: "5",
            key: "qbz8iq"
        }],
        ["path", {
            d: "M12 18v-2h-.5",
            key: "fawc4q"
        }]
    ],
    s0 = Ae("Medal", YA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZA = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    GA = Ae("Menu", ZA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QA = [
        ["path", {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }]
    ],
    $A = Ae("MessageCircle", QA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XA = [
        ["polyline", {
            points: "4 14 10 14 10 20",
            key: "11kfnr"
        }],
        ["polyline", {
            points: "20 10 14 10 14 4",
            key: "rlmsce"
        }],
        ["line", {
            x1: "14",
            x2: "21",
            y1: "10",
            y2: "3",
            key: "o5lafz"
        }],
        ["line", {
            x1: "3",
            x2: "10",
            y1: "21",
            y2: "14",
            key: "1atl0r"
        }]
    ],
    IA = Ae("Minimize2", XA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KA = [
        ["path", {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }],
        ["path", {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }],
        ["path", {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }]
    ],
    FA = Ae("Scan", KA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PA = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ],
    fb = Ae("Search", PA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JA = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    db = Ae("Send", JA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WA = [
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "2",
            rx: "2",
            ry: "2",
            key: "ngkwjq"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            ry: "2",
            key: "iecqi9"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "6",
            y2: "6",
            key: "16zg32"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "18",
            y2: "18",
            key: "nzw8ys"
        }]
    ],
    eN = Ae("Server", WA);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tN = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    Gc = Ae("ShieldCheck", tN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nN = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ],
    fm = Ae("Shield", nN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aN = [
        ["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]
    ],
    iN = Ae("Star", aN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sN = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]
    ],
    lN = Ae("Target", sN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rN = [
        ["polyline", {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }],
        ["line", {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }]
    ],
    Jd = Ae("Terminal", rN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oN = [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ],
    cN = Ae("TriangleAlert", oN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uN = [
        ["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }],
        ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }],
        ["path", {
            d: "M4 22h16",
            key: "57wxv0"
        }],
        ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }],
        ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }],
        ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }]
    ],
    fN = Ae("Trophy", uN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dN = [
        ["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }]
    ],
    dm = Ae("Twitter", dN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hN = [
        ["rect", {
            width: "8",
            height: "8",
            x: "3",
            y: "3",
            rx: "2",
            key: "by2w9f"
        }],
        ["path", {
            d: "M7 11v4a2 2 0 0 0 2 2h4",
            key: "xkn7yn"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "13",
            y: "13",
            rx: "2",
            key: "1cgmvn"
        }]
    ],
    mN = Ae("Workflow", hN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pN = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    yN = Ae("X", pN);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gN = [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ],
    vN = Ae("Zap", gN),
    bN = "_container_uq5ip_1",
    _N = "_bioSection_uq5ip_7",
    xN = "_bioContent_uq5ip_11",
    SN = "_imageWrapper_uq5ip_18",
    TN = "_profileImage_uq5ip_25",
    wN = "_initials_uq5ip_39",
    EN = "_imageDecoration_uq5ip_47",
    CN = "_bioText_uq5ip_63",
    AN = "_pageTitle_uq5ip_67",
    NN = "_roleTitle_uq5ip_76",
    jN = "_highlight_uq5ip_84",
    ON = "_description_uq5ip_88",
    RN = "_actions_uq5ip_95",
    MN = "_resumeBtn_uq5ip_99",
    zN = "_skillsSection_uq5ip_103",
    DN = "_sectionTitle_uq5ip_107",
    kN = "_skillsGrid_uq5ip_115",
    BN = "_skillCategory_uq5ip_121",
    LN = "_categoryTitle_uq5ip_134",
    UN = "_skillTags_uq5ip_141",
    qN = "_tag_uq5ip_147",
    HN = "_securityTag_uq5ip_154",
    VN = "_devTag_uq5ip_159",
    YN = "_toolTag_uq5ip_164",
    ZN = "_timelineSection_uq5ip_169",
    GN = "_timeline_uq5ip_169",
    QN = "_timelineItem_uq5ip_179",
    $N = "_timelineMarker_uq5ip_190",
    XN = "_timelineIcon_uq5ip_197",
    IN = "_timelineLine_uq5ip_210",
    KN = "_timelineContent_uq5ip_222",
    FN = "_timelineYear_uq5ip_226",
    PN = "_timelineTitle_uq5ip_234",
    JN = "_timelineCompany_uq5ip_241",
    WN = "_timelineDescription_uq5ip_248",
    _e = {
        container: bN,
        bioSection: _N,
        bioContent: xN,
        imageWrapper: SN,
        profileImage: TN,
        initials: wN,
        imageDecoration: EN,
        bioText: CN,
        pageTitle: AN,
        roleTitle: NN,
        highlight: jN,
        description: ON,
        actions: RN,
        resumeBtn: MN,
        skillsSection: zN,
        sectionTitle: DN,
        skillsGrid: kN,
        skillCategory: BN,
        categoryTitle: LN,
        skillTags: UN,
        tag: qN,
        securityTag: HN,
        devTag: VN,
        toolTag: YN,
        timelineSection: ZN,
        timeline: GN,
        timelineItem: QN,
        timelineMarker: $N,
        timelineIcon: XN,
        timelineLine: IN,
        timelineContent: KN,
        timelineYear: FN,
        timelineTitle: PN,
        timelineCompany: JN,
        timelineDescription: WN
    };

function e4() {
    const a = {
            cybersecurity: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Incident Response", "Ethical Hacking", "OWASP Top 10"],
            development: ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "GraphQL", "Tailwind CSS"],
            tools: ["Burp Suite", "Metasploit", "Wireshark", "Docker", "Git", "Linux", "AWS"]
        },
        n = [{
            year: "2023 - Present",
            title: "Senior Security Engineer",
            company: "TechGuard Solutions",
            description: "Leading security assessments and implementing secure SDLC practices.",
            icon: p.jsx(a0, {
                size: 20
            })
        }, {
            year: "2021 - 2023",
            title: "Full Stack Developer",
            company: "Creative Web Agency",
            description: "Built scalable web applications using React and Node.js for various clients.",
            icon: p.jsx(a0, {
                size: 20
            })
        }, {
            year: "2020",
            title: "B.Sc. Computer Science",
            company: "University of Technology",
            description: "Graduated with honors, specializing in Network Security.",
            icon: p.jsx(DA, {
                size: 20
            })
        }, {
            year: "2019",
            title: "Certified Ethical Hacker (CEH)",
            company: "EC-Council",
            description: "Achieved certification for advanced ethical hacking skills.",
            icon: p.jsx(fA, {
                size: 20
            })
        }];
    return p.jsxs("div", {
        className: _e.container,
        children: [p.jsx("section", {
            className: _e.bioSection,
            children: p.jsxs("div", {
                className: _e.bioContent,
                children: [p.jsxs("div", {
                    className: _e.imageWrapper,
                    children: [p.jsx("div", {
                        className: _e.profileImage,
                        children: p.jsx("span", {
                            className: _e.initials,
                            children: "AH"
                        })
                    }), p.jsx("div", {
                        className: _e.imageDecoration
                    })]
                }), p.jsxs("div", {
                    className: _e.bioText,
                    children: [p.jsx("h1", {
                        className: _e.pageTitle,
                        children: "About Me"
                    }), p.jsxs("h2", {
                        className: _e.roleTitle,
                        children: ["Cybersecurity Enthusiast & ", p.jsx("br", {}), p.jsx("span", {
                            className: _e.highlight,
                            children: "Creative Developer"
                        })]
                    }), p.jsx("p", {
                        className: _e.description,
                        children: "I am Arup Halder, a passionate professional sitting at the intersection of cybersecurity and software development. With over 5 years of experience, I specialize in building applications that are not only visually stunning and performant but also fundamentally secure."
                    }), p.jsx("p", {
                        className: _e.description,
                        children: "My journey began in competitive hacking (CTFs) which naturally evolved into a love for building the very systems I used to break. Today, I help companies secure their digital assets while delivering exceptional user experiences."
                    }), p.jsx("div", {
                        className: _e.actions,
                        children: p.jsxs(Bn, {
                            size: "lg",
                            className: _e.resumeBtn,
                            children: [p.jsx(CA, {
                                size: 18
                            }), " Download Resume"]
                        })
                    })]
                })]
            })
        }), p.jsxs("section", {
            className: _e.skillsSection,
            children: [p.jsx("h2", {
                className: _e.sectionTitle,
                children: "Technical Arsenal"
            }), p.jsxs("div", {
                className: _e.skillsGrid,
                children: [p.jsxs("div", {
                    className: _e.skillCategory,
                    children: [p.jsx("h3", {
                        className: _e.categoryTitle,
                        children: "Cybersecurity"
                    }), p.jsx("div", {
                        className: _e.skillTags,
                        children: a.cybersecurity.map(s => p.jsx("span", {
                            className: `${_e.tag} ${_e.securityTag}`,
                            children: s
                        }, s))
                    })]
                }), p.jsxs("div", {
                    className: _e.skillCategory,
                    children: [p.jsx("h3", {
                        className: _e.categoryTitle,
                        children: "Development"
                    }), p.jsx("div", {
                        className: _e.skillTags,
                        children: a.development.map(s => p.jsx("span", {
                            className: `${_e.tag} ${_e.devTag}`,
                            children: s
                        }, s))
                    })]
                }), p.jsxs("div", {
                    className: _e.skillCategory,
                    children: [p.jsx("h3", {
                        className: _e.categoryTitle,
                        children: "Tools & Platforms"
                    }), p.jsx("div", {
                        className: _e.skillTags,
                        children: a.tools.map(s => p.jsx("span", {
                            className: `${_e.tag} ${_e.toolTag}`,
                            children: s
                        }, s))
                    })]
                })]
            })]
        }), p.jsxs("section", {
            className: _e.timelineSection,
            children: [p.jsx("h2", {
                className: _e.sectionTitle,
                children: "Journey So Far"
            }), p.jsx("div", {
                className: _e.timeline,
                children: n.map((s, r) => p.jsxs("div", {
                    className: _e.timelineItem,
                    children: [p.jsxs("div", {
                        className: _e.timelineMarker,
                        children: [p.jsx("div", {
                            className: _e.timelineIcon,
                            children: s.icon
                        }), p.jsx("div", {
                            className: _e.timelineLine
                        })]
                    }), p.jsxs("div", {
                        className: _e.timelineContent,
                        children: [p.jsx("span", {
                            className: _e.timelineYear,
                            children: s.year
                        }), p.jsx("h3", {
                            className: _e.timelineTitle,
                            children: s.title
                        }), p.jsx("h4", {
                            className: _e.timelineCompany,
                            children: s.company
                        }), p.jsx("p", {
                            className: _e.timelineDescription,
                            children: s.description
                        })]
                    })]
                }, r))
            })]
        })]
    })
}
const t4 = "_uiSwitch_e7ui5_1",
    n4 = "_slider_e7ui5_17",
    a4 = "_circle_e7ui5_29",
    Wd = {
        uiSwitch: t4,
        slider: n4,
        circle: a4
    },
    l0 = ({
        className: a
    }) => {
        const {
            mode: n,
            switchToLightMode: s,
            switchToDarkMode: r
        } = OT(), o = n === "dark", u = d => {
            d.target.checked ? r() : s()
        };
        return p.jsxs("label", {
            className: `${Wd.uiSwitch} ${a||""}`,
            children: [p.jsx("input", {
                type: "checkbox",
                checked: o,
                onChange: u,
                "aria-label": "Toggle dark mode"
            }), p.jsx("div", {
                className: Wd.slider,
                children: p.jsx("div", {
                    className: Wd.circle
                })
            })]
        })
    },
    i4 = "_input_1pney_2",
    s4 = {
        input: i4
    },
    Jr = x.forwardRef(({
        className: a,
        ...n
    }, s) => p.jsx("input", {
        ref: s,
        className: `${s4.input} ${a||""}`,
        ...n
    }));
Jr.displayName = "Input";
const l4 = "_container_drxlx_1",
    r4 = "_toggleButton_drxlx_13",
    o4 = "_hidden_drxlx_38",
    c4 = "_pulseRing_drxlx_44",
    u4 = "_chatWindow_drxlx_68",
    f4 = "_open_drxlx_93",
    d4 = "_header_drxlx_100",
    h4 = "_headerTitle_drxlx_109",
    m4 = "_avatar_drxlx_115",
    p4 = "_status_drxlx_134",
    y4 = "_statusDot_drxlx_142",
    g4 = "_closeButton_drxlx_150",
    v4 = "_messagesArea_drxlx_160",
    b4 = "_messageRow_drxlx_170",
    _4 = "_userRow_drxlx_177",
    x4 = "_botRow_drxlx_182",
    S4 = "_messageAvatar_drxlx_186",
    T4 = "_messageContent_drxlx_199",
    w4 = "_bubble_drxlx_205",
    E4 = "_botBubble_drxlx_214",
    C4 = "_userBubble_drxlx_220",
    A4 = "_timestamp_drxlx_226",
    N4 = "_optionsContainer_drxlx_238",
    j4 = "_optionButton_drxlx_244",
    O4 = "_typingBubble_drxlx_262",
    R4 = "_typingDot_drxlx_270",
    M4 = "_inputArea_drxlx_299",
    z4 = "_chatInput_drxlx_308",
    D4 = "_sendButton_drxlx_313",
    Ue = {
        container: l4,
        toggleButton: r4,
        hidden: o4,
        pulseRing: c4,
        chatWindow: u4,
        open: f4,
        header: d4,
        headerTitle: h4,
        avatar: m4,
        status: p4,
        statusDot: y4,
        closeButton: g4,
        messagesArea: v4,
        messageRow: b4,
        userRow: _4,
        botRow: x4,
        messageAvatar: S4,
        messageContent: T4,
        bubble: w4,
        botBubble: E4,
        userBubble: C4,
        timestamp: A4,
        optionsContainer: N4,
        optionButton: j4,
        typingBubble: O4,
        typingDot: R4,
        inputArea: M4,
        chatInput: z4,
        sendButton: D4
    },
    k4 = [{
        label: "Who is Arup?",
        action: "who_is_arup"
    }, {
        label: "View Services",
        action: "view_services"
    }, {
        label: "See Projects",
        action: "see_projects"
    }, {
        label: "Contact Arup",
        action: "contact_arup"
    }, {
        label: "Download Resume",
        action: "download_resume"
    }],
    B4 = () => {
        const [a, n] = x.useState(!1), [s, r] = x.useState(!1), [o, u] = x.useState(""), [d, m] = x.useState([{
            id: "init-1",
            sender: "bot",
            text: "Hi! 👋 I'm Arup's assistant. How can I help you today?",
            type: "text",
            timestamp: new Date
        }, {
            id: "init-2",
            sender: "bot",
            type: "options",
            options: k4,
            timestamp: new Date
        }]), v = x.useRef(null), y = x.useRef(null), b = t1(), g = () => {
            var j;
            (j = v.current) == null || j.scrollIntoView({
                behavior: "smooth"
            })
        };
        x.useEffect(() => {
            a && (g(), setTimeout(() => {
                var j;
                return (j = y.current) == null ? void 0 : j.focus()
            }, 300))
        }, [a, d]);
        const S = () => {
                n(!a)
            },
            T = (j, H) => {
                const D = j.toLowerCase();
                let k = "",
                    I = null;
                if (H) switch (H) {
                    case "who_is_arup":
                        k = "Arup is a Cybersecurity Expert and Penetration Tester, Bug Bounty Hunter, Web Security Expert & OSINT Specialist.";
                        break;
                    case "view_services":
                        k = "I offer a range of services including Cybersecurity Consulting, Ethical Hacking, and Web Development. Taking you to the Services page...", I = () => b("/services");
                        break;
                    case "see_projects":
                        k = "Check out my latest work! I've built various secure web applications and tools. Redirecting to Projects...", I = () => b("/projects");
                        break;
                    case "contact_arup":
                        k = "Ready to collaborate? Let's get in touch. Opening the contact form...", I = () => b("/contact");
                        break;
                    case "download_resume":
                        k = "You can find the resume download option on the About page. Taking you there...", I = () => b("/about");
                        break;
                    default:
                        k = "I'm not sure about that one."
                } else D.includes("hire") || D.includes("work") || D.includes("job") || D.includes("freelance") ? (k = "I'm always open to discussing new opportunities! Please reach out via the contact form.", I = () => b("/contact")) : D.includes("security") || D.includes("hack") || D.includes("pentest") || D.includes("audit") ? (k = "I specialize in cybersecurity, including consulting and ethical hacking. Check out my services page for more details.", I = () => b("/services")) : D.includes("project") || D.includes("portfolio") || D.includes("app") ? (k = "You can see my latest work and case studies on the Projects page.", I = () => b("/projects")) : D.includes("skill") || D.includes("tool") || D.includes("tech") || D.includes("stack") ? (k = "I use a variety of modern tools and technologies like React, Node.js, and various security tools. See the full list on the Tools page.", I = () => b("/tools")) : D.includes("certificate") || D.includes("award") || D.includes("achievement") ? (k = "I've earned several certifications and awards. You can view them on the Achievements page.", I = () => b("/achievements")) : D.includes("hello") || D.includes("hi") || D.includes("hey") ? k = "Hello there! How can I assist you with Arup's portfolio today?" : (k = "I'm not sure I understand. Would you like to contact Arup directly?", I = () => b("/contact"));
                return {
                    responseText: k,
                    linkAction: I
                }
            },
            O = async (j, H) => {
                r(!0), await new Promise(W => setTimeout(W, 1e3 + Math.random() * 500));
                const {
                    responseText: D,
                    linkAction: k
                } = T(j, H), I = {
                    id: Date.now().toString(),
                    sender: "bot",
                    text: D,
                    type: "text",
                    timestamp: new Date
                };
                m(W => [...W, I]), r(!1), k && setTimeout(() => {
                    k()
                }, 1500)
            },
            R = j => {
                if (j == null || j.preventDefault(), !o.trim()) return;
                const H = {
                    id: Date.now().toString(),
                    sender: "user",
                    text: o,
                    type: "text",
                    timestamp: new Date
                };
                m(k => [...k, H]);
                const D = o;
                u(""), O(D)
            },
            A = j => {
                const H = {
                    id: Date.now().toString(),
                    sender: "user",
                    text: j.label,
                    type: "text",
                    timestamp: new Date
                };
                m(D => [...D, H]), O(j.label, j.action)
            };
        return p.jsxs("div", {
            className: Ue.container,
            children: [p.jsxs("div", {
                className: `${Ue.chatWindow} ${a?Ue.open:""}`,
                children: [p.jsxs("div", {
                    className: Ue.header,
                    children: [p.jsxs("div", {
                        className: Ue.headerTitle,
                        children: [p.jsx("div", {
                            className: Ue.avatar,
                            children: p.jsx(Fc, {
                                size: 20
                            })
                        }), p.jsxs("div", {
                            children: [p.jsx("h3", {
                                children: "Help Bot"
                            }), p.jsxs("span", {
                                className: Ue.status,
                                children: [p.jsx("span", {
                                    className: Ue.statusDot
                                }), " Online"]
                            })]
                        })]
                    }), p.jsx(Bn, {
                        variant: "ghost",
                        size: "icon-sm",
                        onClick: S,
                        className: Ue.closeButton,
                        "aria-label": "Close chat",
                        children: p.jsx(IA, {
                            size: 18
                        })
                    })]
                }), p.jsxs("div", {
                    className: Ue.messagesArea,
                    children: [d.map(j => {
                        var H;
                        return p.jsxs("div", {
                            className: `${Ue.messageRow} ${j.sender==="user"?Ue.userRow:Ue.botRow}`,
                            children: [j.sender === "bot" && j.type === "text" && p.jsx("div", {
                                className: Ue.messageAvatar,
                                children: p.jsx(Fc, {
                                    size: 16
                                })
                            }), p.jsxs("div", {
                                className: Ue.messageContent,
                                children: [j.type === "text" ? p.jsx("div", {
                                    className: `${Ue.bubble} ${j.sender==="user"?Ue.userBubble:Ue.botBubble}`,
                                    children: j.text
                                }) : p.jsx("div", {
                                    className: Ue.optionsContainer,
                                    children: (H = j.options) == null ? void 0 : H.map(D => p.jsx("button", {
                                        className: Ue.optionButton,
                                        onClick: () => A(D),
                                        children: D.label
                                    }, D.action))
                                }), j.type === "text" && p.jsx("span", {
                                    className: Ue.timestamp,
                                    children: j.timestamp.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })
                                })]
                            })]
                        }, j.id)
                    }), s && p.jsxs("div", {
                        className: `${Ue.messageRow} ${Ue.botRow}`,
                        children: [p.jsx("div", {
                            className: Ue.messageAvatar,
                            children: p.jsx(Fc, {
                                size: 16
                            })
                        }), p.jsxs("div", {
                            className: `${Ue.bubble} ${Ue.botBubble} ${Ue.typingBubble}`,
                            children: [p.jsx("span", {
                                className: Ue.typingDot
                            }), p.jsx("span", {
                                className: Ue.typingDot
                            }), p.jsx("span", {
                                className: Ue.typingDot
                            })]
                        })]
                    }), p.jsx("div", {
                        ref: v
                    })]
                }), p.jsxs("form", {
                    className: Ue.inputArea,
                    onSubmit: R,
                    children: [p.jsx(Jr, {
                        ref: y,
                        value: o,
                        onChange: j => u(j.target.value),
                        placeholder: "Type a message...",
                        className: Ue.chatInput
                    }), p.jsx(Bn, {
                        type: "submit",
                        size: "icon-md",
                        variant: "primary",
                        disabled: !o.trim() || s,
                        className: Ue.sendButton,
                        children: p.jsx(db, {
                            size: 18
                        })
                    })]
                })]
            }), p.jsxs("button", {
                className: `${Ue.toggleButton} ${a?Ue.hidden:""}`,
                onClick: S,
                "aria-label": "Open help chat",
                children: [p.jsx($A, {
                    size: 28
                }), p.jsx("span", {
                    className: Ue.pulseRing
                })]
            })]
        })
    },
    L4 = "_layoutContainer_tkqhx_1",
    U4 = "_header_tkqhx_10",
    q4 = "_navContainer_tkqhx_22",
    H4 = "_logo_tkqhx_31",
    V4 = "_logoHighlight_tkqhx_40",
    Y4 = "_desktopNav_tkqhx_44",
    Z4 = "_navLink_tkqhx_50",
    G4 = "_activeNavLink_tkqhx_63",
    Q4 = "_mobileNavToggle_tkqhx_78",
    $4 = "_mobileMenu_tkqhx_84",
    X4 = "_mobileNavLinks_tkqhx_96",
    I4 = "_mobileNavLink_tkqhx_96",
    K4 = "_activeMobileNavLink_tkqhx_110",
    F4 = "_mainContent_tkqhx_114",
    P4 = "_footer_tkqhx_121",
    J4 = "_footerContent_tkqhx_128",
    W4 = "_footerBrand_tkqhx_138",
    ej = "_footerLinks_tkqhx_150",
    tj = "_socialLink_tkqhx_155",
    nj = "_copyright_tkqhx_165",
    ct = {
        layoutContainer: L4,
        header: U4,
        navContainer: q4,
        logo: H4,
        logoHighlight: V4,
        desktopNav: Y4,
        navLink: Z4,
        activeNavLink: G4,
        mobileNavToggle: Q4,
        mobileMenu: $4,
        mobileNavLinks: X4,
        mobileNavLink: I4,
        activeMobileNavLink: K4,
        mainContent: F4,
        footer: P4,
        footerContent: J4,
        footerBrand: W4,
        footerLinks: ej,
        socialLink: tj,
        copyright: nj
    },
    Ds = ({
        children: a
    }) => {
        const [n, s] = x.useState(!1), r = Xl(), o = [{
            name: "Home",
            path: "/"
        }, {
            name: "About",
            path: "/about"
        }, {
            name: "Tools",
            path: "/tools"
        }, {
            name: "Achievements",
            path: "/achievements"
        }, {
            name: "Services",
            path: "/services"
        }, {
            name: "Projects",
            path: "/projects"
        }, {
            name: "Contact",
            path: "/contact"
        }], u = () => {
            s(!n)
        };
        return p.jsxs("div", {
            className: ct.layoutContainer,
            children: [p.jsxs("header", {
                className: ct.header,
                children: [p.jsxs("div", {
                    className: ct.navContainer,
                    children: [p.jsxs(As, {
                        to: "/",
                        className: ct.logo,
                        children: ["Arup", p.jsx("span", {
                            className: ct.logoHighlight,
                            children: "Halder"
                        })]
                    }), p.jsxs("nav", {
                        className: ct.desktopNav,
                        children: [o.map(d => p.jsx(As, {
                            to: d.path,
                            className: `${ct.navLink} ${r.pathname===d.path?ct.activeNavLink:""}`,
                            children: d.name
                        }, d.path)), p.jsx(l0, {})]
                    }), p.jsxs("div", {
                        className: ct.mobileNavToggle,
                        children: [p.jsx(l0, {}), p.jsx(Bn, {
                            variant: "ghost",
                            size: "icon-md",
                            onClick: u,
                            "aria-label": "Toggle menu",
                            children: n ? p.jsx(yN, {
                                size: 24
                            }) : p.jsx(GA, {
                                size: 24
                            })
                        })]
                    })]
                }), n && p.jsx("div", {
                    className: ct.mobileMenu,
                    children: p.jsx("nav", {
                        className: ct.mobileNavLinks,
                        children: o.map(d => p.jsx(As, {
                            to: d.path,
                            className: `${ct.mobileNavLink} ${r.pathname===d.path?ct.activeMobileNavLink:""}`,
                            onClick: () => s(!1),
                            children: d.name
                        }, d.path))
                    })
                })]
            }), p.jsx("main", {
                className: ct.mainContent,
                children: a
            }), p.jsx("footer", {
                className: ct.footer,
                children: p.jsxs("div", {
                    className: ct.footerContent,
                    children: [p.jsxs("div", {
                        className: ct.footerBrand,
                        children: [p.jsx("h3", {
                            children: "Arup Halder"
                        }), p.jsx("p", {
                            children: "Penetration Tester, Bug Bounty Hunter & Web Security Expert"
                        })]
                    }), p.jsxs("div", {
                        className: ct.footerLinks,
                        children: [p.jsx("a", {
                            href: "https://github.com/Arup-halder9434",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: ct.socialLink,
                            children: p.jsx(Eu, {
                                size: 20
                            })
                        }), p.jsx("a", {
                            href: "https://whatsapp.com/channel/0029VacESNGISTkK7ZQARc1n",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: ct.socialLink,
                            children: p.jsx(um, {
                                size: 20
                            })
                        }), p.jsx("a", {
                            href: "https://x.com/aruphalder7694",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: ct.socialLink,
                            children: p.jsx(dm, {
                                size: 20
                            })
                        })]
                    }), p.jsxs("div", {
                        className: ct.copyright,
                        children: ["© ", new Date().getFullYear(), " Arup Halder. mycyberspace.digital. All rights reserved."]
                    })]
                })
            }), p.jsx(B4, {})]
        })
    },
    aj = [Ds],
    ij = "_container_175ep_1",
    sj = "_header_175ep_8",
    lj = "_title_175ep_16",
    rj = "_subtitle_175ep_26",
    oj = "_categories_175ep_32",
    cj = "_categorySection_175ep_38",
    uj = "_categoryHeader_175ep_42",
    fj = "_categoryIconWrapper_175ep_51",
    dj = "_categoryTitle_175ep_62",
    hj = "_categoryDescription_175ep_70",
    mj = "_toolsGrid_175ep_76",
    pj = "_toolCard_175ep_82",
    yj = "_toolIcon_175ep_101",
    gj = "_toolContent_175ep_107",
    vj = "_toolName_175ep_112",
    bj = "_toolDescription_175ep_120",
    _j = "_glowEffect_175ep_127",
    zt = {
        container: ij,
        header: sj,
        title: lj,
        subtitle: rj,
        categories: oj,
        categorySection: cj,
        categoryHeader: uj,
        categoryIconWrapper: fj,
        categoryTitle: dj,
        categoryDescription: hj,
        toolsGrid: mj,
        toolCard: pj,
        toolIcon: yj,
        toolContent: gj,
        toolName: vj,
        toolDescription: bj,
        glowEffect: _j
    };

function xj() {
    const a = [{
        title: "Cybersecurity Tools",
        description: "The arsenal I use for penetration testing and vulnerability assessment.",
        icon: p.jsx(fm, {
            size: 24
        }),
        tools: [{
            name: "Burp Suite",
            description: "Web vulnerability scanner & proxy",
            icon: p.jsx(Pc, {
                size: 20
            })
        }, {
            name: "Metasploit",
            description: "Penetration testing framework",
            icon: p.jsx(Jd, {
                size: 20
            })
        }, {
            name: "Nmap",
            description: "Network discovery and security auditing",
            icon: p.jsx(fb, {
                size: 20
            })
        }, {
            name: "Wireshark",
            description: "Network protocol analyzer",
            icon: p.jsx(oA, {
                size: 20
            })
        }, {
            name: "OWASP ZAP",
            description: "Integrated penetration testing tool",
            icon: p.jsx(vN, {
                size: 20
            })
        }, {
            name: "Nikto",
            description: "Web server scanner",
            icon: p.jsx(Wc, {
                size: 20
            })
        }, {
            name: "John the Ripper",
            description: "Password cracker",
            icon: p.jsx(cb, {
                size: 20
            })
        }, {
            name: "Hashcat",
            description: "Advanced password recovery",
            icon: p.jsx(i0, {
                size: 20
            })
        }]
    }, {
        title: "Network Defense",
        description: "Technologies I use to build secure and scalable applications.",
        icon: p.jsx(Jc, {
            size: 24
        }),
        tools: [{
            name: "Aircrack-ng",
            description: " Wi-Fi network security",
            icon: p.jsx(Jd, {
                size: 20
            })
        }, {
            name: "KisMAC",
            description: " Brute force attacks and exploiting flaws",
            icon: p.jsx(OA, {
                size: 20
            })
        }, 
        }, )
        , 
         {
            name: "Cisco",
            description: "Best for network access control",
            icon: p.jsx(Jc, {
                size: 20
            })
        }, {
            name: "ESET",
            description: "Best overall network security tool",
            icon: p.jsx(wA, {
                size: 20
            })
        }
    }, {
        title: "AI / Bug Bounty Tools",
        description: "Tools for automating workflows and leveraging AI.",
        icon: p.jsx(Fc, {
            size: 24
        }),
        tools: [{
            name: "Python",
            description: "Scripting & automation",
            icon: p.jsx(Jd, {
                size: 20
            })
        }, {
            name: "TensorFlow",
            description: "Machine learning library",
            icon: p.jsx(i0, {
                size: 20
            })
        }, {
            name: "Selenium",
            description: "Browser automation",
            icon: p.jsx(Wc, {
                size: 20
            })
        }, {
            name: "Jenkins",
            description: "CI/CD automation server",
            icon: p.jsx(mN, {
                size: 20
            })
        }, {
            name: "Terraform",
            description: "Infrastructure as Code",
            icon: p.jsx(BA, {
                size: 20
            })
        }, {
            name: "Ansible",
            description: "Configuration management",
            icon: p.jsx(_A, {
                size: 20
            })
        }]
    }];
    return p.jsxs("div", {
        className: zt.container,
        children: [p.jsxs("header", {
            className: zt.header,
            children: [p.jsx("h1", {
                className: zt.title,
                children: "Tools & Technologies"
            }), p.jsx("p", {
                className: zt.subtitle,
                children: "A curated list of the software, libraries, and frameworks I use on a daily basis to break and build things."
            })]
        }), p.jsx("div", {
            className: zt.categories,
            children: a.map((n, s) => p.jsxs("section", {
                className: zt.categorySection,
                children: [p.jsxs("div", {
                    className: zt.categoryHeader,
                    children: [p.jsx("div", {
                        className: zt.categoryIconWrapper,
                        children: n.icon
                    }), p.jsxs("div", {
                        children: [p.jsx("h2", {
                            className: zt.categoryTitle,
                            children: n.title
                        }), p.jsx("p", {
                            className: zt.categoryDescription,
                            children: n.description
                        })]
                    })]
                }), p.jsx("div", {
                    className: zt.toolsGrid,
                    children: n.tools.map((r, o) => p.jsxs("div", {
                        className: zt.toolCard,
                        children: [p.jsx("div", {
                            className: zt.toolIcon,
                            children: r.icon
                        }), p.jsxs("div", {
                            className: zt.toolContent,
                            children: [p.jsx("h3", {
                                className: zt.toolName,
                                children: r.name
                            }), p.jsx("p", {
                                className: zt.toolDescription,
                                children: r.description
                            })]
                        }), p.jsx("div", {
                            className: zt.glowEffect
                        })]
                    }, o))
                })]
            }, s))
        })]
    })
}
const Sj = [Ds],
    Tj = "_badge_1m09g_2",
    wj = "_destructive_1m09g_27",
    Ej = "_secondary_1m09g_37",
    Cj = "_outline_1m09g_47",
    Aj = "_success_1m09g_57",
    Nj = "_warning_1m09g_67",
    r0 = {
        badge: Tj,
        default: "_default_1m09g_17",
        destructive: wj,
        secondary: Ej,
        outline: Cj,
        success: Aj,
        warning: Nj
    },
    hb = ({
        variant: a = "default",
        className: n,
        children: s,
        ...r
    }) => p.jsx("div", {
        className: `${r0.badge} ${r0[a]} ${n||""}`,
        ...r,
        children: s
    }),
    jj = "_card_12y14_1",
    Oj = "_imageContainer_12y14_18",
    Rj = "_image_12y14_18",
    Mj = "_placeholderImage_12y14_37",
    zj = "_overlay_12y14_49",
    Dj = "_links_12y14_68",
    kj = "_content_12y14_79",
    Bj = "_header_12y14_86",
    Lj = "_title_12y14_94",
    Uj = "_categoryBadge_12y14_103",
    qj = "_description_12y14_109",
    Hj = "_techStack_12y14_121",
    Vj = "_techTag_12y14_128",
    Zt = {
        card: jj,
        imageContainer: Oj,
        image: Rj,
        placeholderImage: Mj,
        overlay: zj,
        links: Dj,
        content: kj,
        header: Bj,
        title: Lj,
        categoryBadge: Uj,
        description: qj,
        techStack: Hj,
        techTag: Vj
    },
    mb = ({
        project: a
    }) => {
        var n;
        return p.jsxs("div", {
            className: Zt.card,
            children: [p.jsxs("div", {
                className: Zt.imageContainer,
                children: [a.imageUrl ? p.jsx("img", {
                    src: a.imageUrl,
                    alt: a.title,
                    className: Zt.image
                }) : p.jsx("div", {
                    className: Zt.placeholderImage,
                    children: p.jsx("span", {
                        children: a.title
                    })
                }), p.jsx("div", {
                    className: Zt.overlay,
                    children: p.jsxs("div", {
                        className: Zt.links,
                        children: [a.githubUrl && p.jsx(Bn, {
                            asChild: !0,
                            variant: "secondary",
                            size: "icon-md",
                            className: Zt.iconButton,
                            children: p.jsx("a", {
                                href: a.githubUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "View Source Code",
                                children: p.jsx(Eu, {
                                    size: 20
                                })
                            })
                        }), a.liveUrl && p.jsx(Bn, {
                            asChild: !0,
                            variant: "primary",
                            size: "icon-md",
                            className: Zt.iconButton,
                            children: p.jsx("a", {
                                href: a.liveUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "View Live Demo",
                                children: p.jsx(NA, {
                                    size: 20
                                })
                            })
                        })]
                    })
                })]
            }), p.jsxs("div", {
                className: Zt.content,
                children: [p.jsxs("div", {
                    className: Zt.header,
                    children: [p.jsx("h3", {
                        className: Zt.title,
                        children: a.title
                    }), p.jsx(hb, {
                        variant: "outline",
                        className: Zt.categoryBadge,
                        children: a.category
                    })]
                }), p.jsx("p", {
                    className: Zt.description,
                    children: a.description
                }), p.jsx("div", {
                    className: Zt.techStack,
                    children: (n = a.techStack) == null ? void 0 : n.map(s => p.jsxs("span", {
                        className: Zt.techTag,
                        children: ["#", s]
                    }, s))
                })]
            })]
        })
    },
    Yj = "_skeleton_3rn52_2",
    Zj = {
        skeleton: Yj
    };

function ra({
    className: a,
    ...n
}) {
    return p.jsx("div", {
        className: `${Zj.skeleton} ${a??""}`,
        ...n
    })
}
var Qe;
(function(a) {
    a.assertEqual = o => {};

    function n(o) {}
    a.assertIs = n;

    function s(o) {
        throw new Error
    }
    a.assertNever = s, a.arrayToEnum = o => {
        const u = {};
        for (const d of o) u[d] = d;
        return u
    }, a.getValidEnumValues = o => {
        const u = a.objectKeys(o).filter(m => typeof o[o[m]] != "number"),
            d = {};
        for (const m of u) d[m] = o[m];
        return a.objectValues(d)
    }, a.objectValues = o => a.objectKeys(o).map(function(u) {
        return o[u]
    }), a.objectKeys = typeof Object.keys == "function" ? o => Object.keys(o) : o => {
        const u = [];
        for (const d in o) Object.prototype.hasOwnProperty.call(o, d) && u.push(d);
        return u
    }, a.find = (o, u) => {
        for (const d of o)
            if (u(d)) return d
    }, a.isInteger = typeof Number.isInteger == "function" ? o => Number.isInteger(o) : o => typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o;

    function r(o, u = " | ") {
        return o.map(d => typeof d == "string" ? `'${d}'` : d).join(u)
    }
    a.joinValues = r, a.jsonStringifyReplacer = (o, u) => typeof u == "bigint" ? u.toString() : u
})(Qe || (Qe = {}));
var o0;
(function(a) {
    a.mergeShapes = (n, s) => ({ ...n,
        ...s
    })
})(o0 || (o0 = {}));
const le = Qe.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    Si = a => {
        switch (typeof a) {
            case "undefined":
                return le.undefined;
            case "string":
                return le.string;
            case "number":
                return Number.isNaN(a) ? le.nan : le.number;
            case "boolean":
                return le.boolean;
            case "function":
                return le.function;
            case "bigint":
                return le.bigint;
            case "symbol":
                return le.symbol;
            case "object":
                return Array.isArray(a) ? le.array : a === null ? le.null : a.then && typeof a.then == "function" && a.catch && typeof a.catch == "function" ? le.promise : typeof Map < "u" && a instanceof Map ? le.map : typeof Set < "u" && a instanceof Set ? le.set : typeof Date < "u" && a instanceof Date ? le.date : le.object;
            default:
                return le.unknown
        }
    },
    P = Qe.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class ma extends Error {
    get errors() {
        return this.issues
    }
    constructor(n) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const s = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, s) : this.__proto__ = s, this.name = "ZodError", this.issues = n
    }
    format(n) {
        const s = n || function(u) {
                return u.message
            },
            r = {
                _errors: []
            },
            o = u => {
                for (const d of u.issues)
                    if (d.code === "invalid_union") d.unionErrors.map(o);
                    else if (d.code === "invalid_return_type") o(d.returnTypeError);
                else if (d.code === "invalid_arguments") o(d.argumentsError);
                else if (d.path.length === 0) r._errors.push(s(d));
                else {
                    let m = r,
                        v = 0;
                    for (; v < d.path.length;) {
                        const y = d.path[v];
                        v === d.path.length - 1 ? (m[y] = m[y] || {
                            _errors: []
                        }, m[y]._errors.push(s(d))) : m[y] = m[y] || {
                            _errors: []
                        }, m = m[y], v++
                    }
                }
            };
        return o(this), r
    }
    static assert(n) {
        if (!(n instanceof ma)) throw new Error(`Not a ZodError: ${n}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Qe.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(n = s => s.message) {
        const s = {},
            r = [];
        for (const o of this.issues)
            if (o.path.length > 0) {
                const u = o.path[0];
                s[u] = s[u] || [], s[u].push(n(o))
            } else r.push(n(o));
        return {
            formErrors: r,
            fieldErrors: s
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
ma.create = a => new ma(a);
const zh = (a, n) => {
    let s;
    switch (a.code) {
        case P.invalid_type:
            a.received === le.undefined ? s = "Required" : s = `Expected ${a.expected}, received ${a.received}`;
            break;
        case P.invalid_literal:
            s = `Invalid literal value, expected ${JSON.stringify(a.expected,Qe.jsonStringifyReplacer)}`;
            break;
        case P.unrecognized_keys:
            s = `Unrecognized key(s) in object: ${Qe.joinValues(a.keys,", ")}`;
            break;
        case P.invalid_union:
            s = "Invalid input";
            break;
        case P.invalid_union_discriminator:
            s = `Invalid discriminator value. Expected ${Qe.joinValues(a.options)}`;
            break;
        case P.invalid_enum_value:
            s = `Invalid enum value. Expected ${Qe.joinValues(a.options)}, received '${a.received}'`;
            break;
        case P.invalid_arguments:
            s = "Invalid function arguments";
            break;
        case P.invalid_return_type:
            s = "Invalid function return type";
            break;
        case P.invalid_date:
            s = "Invalid date";
            break;
        case P.invalid_string:
            typeof a.validation == "object" ? "includes" in a.validation ? (s = `Invalid input: must include "${a.validation.includes}"`, typeof a.validation.position == "number" && (s = `${s} at one or more positions greater than or equal to ${a.validation.position}`)) : "startsWith" in a.validation ? s = `Invalid input: must start with "${a.validation.startsWith}"` : "endsWith" in a.validation ? s = `Invalid input: must end with "${a.validation.endsWith}"` : Qe.assertNever(a.validation) : a.validation !== "regex" ? s = `Invalid ${a.validation}` : s = "Invalid";
            break;
        case P.too_small:
            a.type === "array" ? s = `Array must contain ${a.exact?"exactly":a.inclusive?"at least":"more than"} ${a.minimum} element(s)` : a.type === "string" ? s = `String must contain ${a.exact?"exactly":a.inclusive?"at least":"over"} ${a.minimum} character(s)` : a.type === "number" ? s = `Number must be ${a.exact?"exactly equal to ":a.inclusive?"greater than or equal to ":"greater than "}${a.minimum}` : a.type === "bigint" ? s = `Number must be ${a.exact?"exactly equal to ":a.inclusive?"greater than or equal to ":"greater than "}${a.minimum}` : a.type === "date" ? s = `Date must be ${a.exact?"exactly equal to ":a.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(a.minimum))}` : s = "Invalid input";
            break;
        case P.too_big:
            a.type === "array" ? s = `Array must contain ${a.exact?"exactly":a.inclusive?"at most":"less than"} ${a.maximum} element(s)` : a.type === "string" ? s = `String must contain ${a.exact?"exactly":a.inclusive?"at most":"under"} ${a.maximum} character(s)` : a.type === "number" ? s = `Number must be ${a.exact?"exactly":a.inclusive?"less than or equal to":"less than"} ${a.maximum}` : a.type === "bigint" ? s = `BigInt must be ${a.exact?"exactly":a.inclusive?"less than or equal to":"less than"} ${a.maximum}` : a.type === "date" ? s = `Date must be ${a.exact?"exactly":a.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(a.maximum))}` : s = "Invalid input";
            break;
        case P.custom:
            s = "Invalid input";
            break;
        case P.invalid_intersection_types:
            s = "Intersection results could not be merged";
            break;
        case P.not_multiple_of:
            s = `Number must be a multiple of ${a.multipleOf}`;
            break;
        case P.not_finite:
            s = "Number must be finite";
            break;
        default:
            s = n.defaultError, Qe.assertNever(a)
    }
    return {
        message: s
    }
};
let Gj = zh;

function Qj() {
    return Gj
}
const $j = a => {
    const {
        data: n,
        path: s,
        errorMaps: r,
        issueData: o
    } = a, u = [...s, ...o.path || []], d = { ...o,
        path: u
    };
    if (o.message !== void 0) return { ...o,
        path: u,
        message: o.message
    };
    let m = "";
    const v = r.filter(y => !!y).slice().reverse();
    for (const y of v) m = y(d, {
        data: n,
        defaultError: m
    }).message;
    return { ...o,
        path: u,
        message: m
    }
};

function ne(a, n) {
    const s = Qj(),
        r = $j({
            issueData: n,
            data: a.data,
            path: a.path,
            errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, s, s === zh ? void 0 : zh].filter(o => !!o)
        });
    a.common.issues.push(r)
}
class _n {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(n, s) {
        const r = [];
        for (const o of s) {
            if (o.status === "aborted") return Se;
            o.status === "dirty" && n.dirty(), r.push(o.value)
        }
        return {
            status: n.value,
            value: r
        }
    }
    static async mergeObjectAsync(n, s) {
        const r = [];
        for (const o of s) {
            const u = await o.key,
                d = await o.value;
            r.push({
                key: u,
                value: d
            })
        }
        return _n.mergeObjectSync(n, r)
    }
    static mergeObjectSync(n, s) {
        const r = {};
        for (const o of s) {
            const {
                key: u,
                value: d
            } = o;
            if (u.status === "aborted" || d.status === "aborted") return Se;
            u.status === "dirty" && n.dirty(), d.status === "dirty" && n.dirty(), u.value !== "__proto__" && (typeof d.value < "u" || o.alwaysSet) && (r[u.value] = d.value)
        }
        return {
            status: n.value,
            value: r
        }
    }
}
const Se = Object.freeze({
        status: "aborted"
    }),
    Xr = a => ({
        status: "dirty",
        value: a
    }),
    Ln = a => ({
        status: "valid",
        value: a
    }),
    c0 = a => a.status === "aborted",
    u0 = a => a.status === "dirty",
    Vl = a => a.status === "valid",
    fu = a => typeof Promise < "u" && a instanceof Promise;
var oe;
(function(a) {
    a.errToObj = n => typeof n == "string" ? {
        message: n
    } : n || {}, a.toString = n => typeof n == "string" ? n : n == null ? void 0 : n.message
})(oe || (oe = {}));
class Hi {
    constructor(n, s, r, o) {
        this._cachedPath = [], this.parent = n, this.data = s, this._path = r, this._key = o
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const f0 = (a, n) => {
    if (Vl(n)) return {
        success: !0,
        data: n.value
    };
    if (!a.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const s = new ma(a.common.issues);
            return this._error = s, this._error
        }
    }
};

function Me(a) {
    if (!a) return {};
    const {
        errorMap: n,
        invalid_type_error: s,
        required_error: r,
        description: o
    } = a;
    if (n && (s || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return n ? {
        errorMap: n,
        description: o
    } : {
        errorMap: (d, m) => {
            const {
                message: v
            } = a;
            return d.code === "invalid_enum_value" ? {
                message: v ? ? m.defaultError
            } : typeof m.data > "u" ? {
                message: v ? ? r ? ? m.defaultError
            } : d.code !== "invalid_type" ? {
                message: m.defaultError
            } : {
                message: v ? ? s ? ? m.defaultError
            }
        },
        description: o
    }
}
class Ye {
    get description() {
        return this._def.description
    }
    _getType(n) {
        return Si(n.data)
    }
    _getOrReturnCtx(n, s) {
        return s || {
            common: n.parent.common,
            data: n.data,
            parsedType: Si(n.data),
            schemaErrorMap: this._def.errorMap,
            path: n.path,
            parent: n.parent
        }
    }
    _processInputParams(n) {
        return {
            status: new _n,
            ctx: {
                common: n.parent.common,
                data: n.data,
                parsedType: Si(n.data),
                schemaErrorMap: this._def.errorMap,
                path: n.path,
                parent: n.parent
            }
        }
    }
    _parseSync(n) {
        const s = this._parse(n);
        if (fu(s)) throw new Error("Synchronous parse encountered promise.");
        return s
    }
    _parseAsync(n) {
        const s = this._parse(n);
        return Promise.resolve(s)
    }
    parse(n, s) {
        const r = this.safeParse(n, s);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(n, s) {
        const r = {
                common: {
                    issues: [],
                    async: (s == null ? void 0 : s.async) ? ? !1,
                    contextualErrorMap: s == null ? void 0 : s.errorMap
                },
                path: (s == null ? void 0 : s.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: n,
                parsedType: Si(n)
            },
            o = this._parseSync({
                data: n,
                path: r.path,
                parent: r
            });
        return f0(r, o)
    }
    "~validate" (n) {
        var r, o;
        const s = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: Si(n)
        };
        if (!this["~standard"].async) try {
            const u = this._parseSync({
                data: n,
                path: [],
                parent: s
            });
            return Vl(u) ? {
                value: u.value
            } : {
                issues: s.common.issues
            }
        } catch (u) {
            (o = (r = u == null ? void 0 : u.message) == null ? void 0 : r.toLowerCase()) != null && o.includes("encountered") && (this["~standard"].async = !0), s.common = {
                issues: [],
                async: !0
            }
        }
        return this._parseAsync({
            data: n,
            path: [],
            parent: s
        }).then(u => Vl(u) ? {
            value: u.value
        } : {
            issues: s.common.issues
        })
    }
    async parseAsync(n, s) {
        const r = await this.safeParseAsync(n, s);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(n, s) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: s == null ? void 0 : s.errorMap,
                    async: !0
                },
                path: (s == null ? void 0 : s.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: n,
                parsedType: Si(n)
            },
            o = this._parse({
                data: n,
                path: r.path,
                parent: r
            }),
            u = await (fu(o) ? o : Promise.resolve(o));
        return f0(r, u)
    }
    refine(n, s) {
        const r = o => typeof s == "string" || typeof s > "u" ? {
            message: s
        } : typeof s == "function" ? s(o) : s;
        return this._refinement((o, u) => {
            const d = n(o),
                m = () => u.addIssue({
                    code: P.custom,
                    ...r(o)
                });
            return typeof Promise < "u" && d instanceof Promise ? d.then(v => v ? !0 : (m(), !1)) : d ? !0 : (m(), !1)
        })
    }
    refinement(n, s) {
        return this._refinement((r, o) => n(r) ? !0 : (o.addIssue(typeof s == "function" ? s(r, o) : s), !1))
    }
    _refinement(n) {
        return new Zl({
            schema: this,
            typeName: Te.ZodEffects,
            effect: {
                type: "refinement",
                refinement: n
            }
        })
    }
    superRefine(n) {
        return this._refinement(n)
    }
    constructor(n) {
        this.spa = this.safeParseAsync, this._def = n, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: s => this["~validate"](s)
        }
    }
    optional() {
        return Bi.create(this, this._def)
    }
    nullable() {
        return Gl.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return fa.create(this)
    }
    promise() {
        return pu.create(this, this._def)
    }
    or(n) {
        return hu.create([this, n], this._def)
    }
    and(n) {
        return mu.create(this, n, this._def)
    }
    transform(n) {
        return new Zl({ ...Me(this._def),
            schema: this,
            typeName: Te.ZodEffects,
            effect: {
                type: "transform",
                transform: n
            }
        })
    }
    default (n) {
        const s = typeof n == "function" ? n : () => n;
        return new Bh({ ...Me(this._def),
            innerType: this,
            defaultValue: s,
            typeName: Te.ZodDefault
        })
    }
    brand() {
        return new p3({
            typeName: Te.ZodBranded,
            type: this,
            ...Me(this._def)
        })
    } catch (n) {
        const s = typeof n == "function" ? n : () => n;
        return new Lh({ ...Me(this._def),
            innerType: this,
            catchValue: s,
            typeName: Te.ZodCatch
        })
    }
    describe(n) {
        const s = this.constructor;
        return new s({ ...this._def,
            description: n
        })
    }
    pipe(n) {
        return hm.create(this, n)
    }
    readonly() {
        return Uh.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Xj = /^c[^\s-]{8,}$/i,
    Ij = /^[0-9a-z]+$/,
    Kj = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    Fj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Pj = /^[a-z0-9_-]{21}$/i,
    Jj = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    Wj = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    e3 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    t3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let eh;
const n3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    a3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    i3 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    s3 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    l3 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    r3 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    pb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    o3 = new RegExp(`^${pb}$`);

function yb(a) {
    let n = "[0-5]\\d";
    a.precision ? n = `${n}\\.\\d{${a.precision}}` : a.precision == null && (n = `${n}(\\.\\d+)?`);
    const s = a.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${n})${s}`
}

function c3(a) {
    return new RegExp(`^${yb(a)}$`)
}

function u3(a) {
    let n = `${pb}T${yb(a)}`;
    const s = [];
    return s.push(a.local ? "Z?" : "Z"), a.offset && s.push("([+-]\\d{2}:?\\d{2})"), n = `${n}(${s.join("|")})`, new RegExp(`^${n}$`)
}

function f3(a, n) {
    return !!((n === "v4" || !n) && n3.test(a) || (n === "v6" || !n) && i3.test(a))
}

function d3(a, n) {
    if (!Jj.test(a)) return !1;
    try {
        const [s] = a.split(".");
        if (!s) return !1;
        const r = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "="),
            o = JSON.parse(atob(r));
        return !(typeof o != "object" || o === null || "typ" in o && (o == null ? void 0 : o.typ) !== "JWT" || !o.alg || n && o.alg !== n)
    } catch {
        return !1
    }
}

function h3(a, n) {
    return !!((n === "v4" || !n) && a3.test(a) || (n === "v6" || !n) && s3.test(a))
}
class zi extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = String(n.data)), this._getType(n) !== le.string) {
            const u = this._getOrReturnCtx(n);
            return ne(u, {
                code: P.invalid_type,
                expected: le.string,
                received: u.parsedType
            }), Se
        }
        const r = new _n;
        let o;
        for (const u of this._def.checks)
            if (u.kind === "min") n.data.length < u.value && (o = this._getOrReturnCtx(n, o), ne(o, {
                code: P.too_small,
                minimum: u.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: u.message
            }), r.dirty());
            else if (u.kind === "max") n.data.length > u.value && (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.too_big,
            maximum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message
        }), r.dirty());
        else if (u.kind === "length") {
            const d = n.data.length > u.value,
                m = n.data.length < u.value;
            (d || m) && (o = this._getOrReturnCtx(n, o), d ? ne(o, {
                code: P.too_big,
                maximum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message
            }) : m && ne(o, {
                code: P.too_small,
                minimum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message
            }), r.dirty())
        } else if (u.kind === "email") e3.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "email",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "emoji") eh || (eh = new RegExp(t3, "u")), eh.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "emoji",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "uuid") Fj.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "uuid",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "nanoid") Pj.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "nanoid",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "cuid") Xj.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "cuid",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "cuid2") Ij.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "cuid2",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "ulid") Kj.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "ulid",
            code: P.invalid_string,
            message: u.message
        }), r.dirty());
        else if (u.kind === "url") try {
            new URL(n.data)
        } catch {
            o = this._getOrReturnCtx(n, o), ne(o, {
                validation: "url",
                code: P.invalid_string,
                message: u.message
            }), r.dirty()
        } else u.kind === "regex" ? (u.regex.lastIndex = 0, u.regex.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "regex",
            code: P.invalid_string,
            message: u.message
        }), r.dirty())) : u.kind === "trim" ? n.data = n.data.trim() : u.kind === "includes" ? n.data.includes(u.value, u.position) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: {
                includes: u.value,
                position: u.position
            },
            message: u.message
        }), r.dirty()) : u.kind === "toLowerCase" ? n.data = n.data.toLowerCase() : u.kind === "toUpperCase" ? n.data = n.data.toUpperCase() : u.kind === "startsWith" ? n.data.startsWith(u.value) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: {
                startsWith: u.value
            },
            message: u.message
        }), r.dirty()) : u.kind === "endsWith" ? n.data.endsWith(u.value) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: {
                endsWith: u.value
            },
            message: u.message
        }), r.dirty()) : u.kind === "datetime" ? u3(u).test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: "datetime",
            message: u.message
        }), r.dirty()) : u.kind === "date" ? o3.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: "date",
            message: u.message
        }), r.dirty()) : u.kind === "time" ? c3(u).test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.invalid_string,
            validation: "time",
            message: u.message
        }), r.dirty()) : u.kind === "duration" ? Wj.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "duration",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : u.kind === "ip" ? f3(n.data, u.version) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "ip",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : u.kind === "jwt" ? d3(n.data, u.alg) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "jwt",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : u.kind === "cidr" ? h3(n.data, u.version) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "cidr",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : u.kind === "base64" ? l3.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "base64",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : u.kind === "base64url" ? r3.test(n.data) || (o = this._getOrReturnCtx(n, o), ne(o, {
            validation: "base64url",
            code: P.invalid_string,
            message: u.message
        }), r.dirty()) : Qe.assertNever(u);
        return {
            status: r.value,
            value: n.data
        }
    }
    _regex(n, s, r) {
        return this.refinement(o => n.test(o), {
            validation: s,
            code: P.invalid_string,
            ...oe.errToObj(r)
        })
    }
    _addCheck(n) {
        return new zi({ ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    email(n) {
        return this._addCheck({
            kind: "email",
            ...oe.errToObj(n)
        })
    }
    url(n) {
        return this._addCheck({
            kind: "url",
            ...oe.errToObj(n)
        })
    }
    emoji(n) {
        return this._addCheck({
            kind: "emoji",
            ...oe.errToObj(n)
        })
    }
    uuid(n) {
        return this._addCheck({
            kind: "uuid",
            ...oe.errToObj(n)
        })
    }
    nanoid(n) {
        return this._addCheck({
            kind: "nanoid",
            ...oe.errToObj(n)
        })
    }
    cuid(n) {
        return this._addCheck({
            kind: "cuid",
            ...oe.errToObj(n)
        })
    }
    cuid2(n) {
        return this._addCheck({
            kind: "cuid2",
            ...oe.errToObj(n)
        })
    }
    ulid(n) {
        return this._addCheck({
            kind: "ulid",
            ...oe.errToObj(n)
        })
    }
    base64(n) {
        return this._addCheck({
            kind: "base64",
            ...oe.errToObj(n)
        })
    }
    base64url(n) {
        return this._addCheck({
            kind: "base64url",
            ...oe.errToObj(n)
        })
    }
    jwt(n) {
        return this._addCheck({
            kind: "jwt",
            ...oe.errToObj(n)
        })
    }
    ip(n) {
        return this._addCheck({
            kind: "ip",
            ...oe.errToObj(n)
        })
    }
    cidr(n) {
        return this._addCheck({
            kind: "cidr",
            ...oe.errToObj(n)
        })
    }
    datetime(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: n
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof(n == null ? void 0 : n.precision) > "u" ? null : n == null ? void 0 : n.precision,
            offset: (n == null ? void 0 : n.offset) ? ? !1,
            local: (n == null ? void 0 : n.local) ? ? !1,
            ...oe.errToObj(n == null ? void 0 : n.message)
        })
    }
    date(n) {
        return this._addCheck({
            kind: "date",
            message: n
        })
    }
    time(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: n
        }) : this._addCheck({
            kind: "time",
            precision: typeof(n == null ? void 0 : n.precision) > "u" ? null : n == null ? void 0 : n.precision,
            ...oe.errToObj(n == null ? void 0 : n.message)
        })
    }
    duration(n) {
        return this._addCheck({
            kind: "duration",
            ...oe.errToObj(n)
        })
    }
    regex(n, s) {
        return this._addCheck({
            kind: "regex",
            regex: n,
            ...oe.errToObj(s)
        })
    }
    includes(n, s) {
        return this._addCheck({
            kind: "includes",
            value: n,
            position: s == null ? void 0 : s.position,
            ...oe.errToObj(s == null ? void 0 : s.message)
        })
    }
    startsWith(n, s) {
        return this._addCheck({
            kind: "startsWith",
            value: n,
            ...oe.errToObj(s)
        })
    }
    endsWith(n, s) {
        return this._addCheck({
            kind: "endsWith",
            value: n,
            ...oe.errToObj(s)
        })
    }
    min(n, s) {
        return this._addCheck({
            kind: "min",
            value: n,
            ...oe.errToObj(s)
        })
    }
    max(n, s) {
        return this._addCheck({
            kind: "max",
            value: n,
            ...oe.errToObj(s)
        })
    }
    length(n, s) {
        return this._addCheck({
            kind: "length",
            value: n,
            ...oe.errToObj(s)
        })
    }
    nonempty(n) {
        return this.min(1, oe.errToObj(n))
    }
    trim() {
        return new zi({ ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new zi({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new zi({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(n => n.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(n => n.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(n => n.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(n => n.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(n => n.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(n => n.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(n => n.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(n => n.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(n => n.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(n => n.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(n => n.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(n => n.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(n => n.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(n => n.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(n => n.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(n => n.kind === "base64url")
    }
    get minLength() {
        let n = null;
        for (const s of this._def.checks) s.kind === "min" && (n === null || s.value > n) && (n = s.value);
        return n
    }
    get maxLength() {
        let n = null;
        for (const s of this._def.checks) s.kind === "max" && (n === null || s.value < n) && (n = s.value);
        return n
    }
}
zi.create = a => new zi({
    checks: [],
    typeName: Te.ZodString,
    coerce: (a == null ? void 0 : a.coerce) ? ? !1,
    ...Me(a)
});

function m3(a, n) {
    const s = (a.toString().split(".")[1] || "").length,
        r = (n.toString().split(".")[1] || "").length,
        o = s > r ? s : r,
        u = Number.parseInt(a.toFixed(o).replace(".", "")),
        d = Number.parseInt(n.toFixed(o).replace(".", ""));
    return u % d / 10 ** o
}
class so extends Ye {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(n) {
        if (this._def.coerce && (n.data = Number(n.data)), this._getType(n) !== le.number) {
            const u = this._getOrReturnCtx(n);
            return ne(u, {
                code: P.invalid_type,
                expected: le.number,
                received: u.parsedType
            }), Se
        }
        let r;
        const o = new _n;
        for (const u of this._def.checks) u.kind === "int" ? Qe.isInteger(n.data) || (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.invalid_type,
            expected: "integer",
            received: "float",
            message: u.message
        }), o.dirty()) : u.kind === "min" ? (u.inclusive ? n.data < u.value : n.data <= u.value) && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.too_small,
            minimum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message
        }), o.dirty()) : u.kind === "max" ? (u.inclusive ? n.data > u.value : n.data >= u.value) && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.too_big,
            maximum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message
        }), o.dirty()) : u.kind === "multipleOf" ? m3(n.data, u.value) !== 0 && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.not_multiple_of,
            multipleOf: u.value,
            message: u.message
        }), o.dirty()) : u.kind === "finite" ? Number.isFinite(n.data) || (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.not_finite,
            message: u.message
        }), o.dirty()) : Qe.assertNever(u);
        return {
            status: o.value,
            value: n.data
        }
    }
    gte(n, s) {
        return this.setLimit("min", n, !0, oe.toString(s))
    }
    gt(n, s) {
        return this.setLimit("min", n, !1, oe.toString(s))
    }
    lte(n, s) {
        return this.setLimit("max", n, !0, oe.toString(s))
    }
    lt(n, s) {
        return this.setLimit("max", n, !1, oe.toString(s))
    }
    setLimit(n, s, r, o) {
        return new so({ ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: s,
                inclusive: r,
                message: oe.toString(o)
            }]
        })
    }
    _addCheck(n) {
        return new so({ ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    int(n) {
        return this._addCheck({
            kind: "int",
            message: oe.toString(n)
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: oe.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: oe.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: oe.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: oe.toString(n)
        })
    }
    multipleOf(n, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: oe.toString(s)
        })
    }
    finite(n) {
        return this._addCheck({
            kind: "finite",
            message: oe.toString(n)
        })
    }
    safe(n) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: oe.toString(n)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: oe.toString(n)
        })
    }
    get minValue() {
        let n = null;
        for (const s of this._def.checks) s.kind === "min" && (n === null || s.value > n) && (n = s.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const s of this._def.checks) s.kind === "max" && (n === null || s.value < n) && (n = s.value);
        return n
    }
    get isInt() {
        return !!this._def.checks.find(n => n.kind === "int" || n.kind === "multipleOf" && Qe.isInteger(n.value))
    }
    get isFinite() {
        let n = null,
            s = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (s === null || r.value > s) && (s = r.value) : r.kind === "max" && (n === null || r.value < n) && (n = r.value)
        }
        return Number.isFinite(s) && Number.isFinite(n)
    }
}
so.create = a => new so({
    checks: [],
    typeName: Te.ZodNumber,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...Me(a)
});
class lo extends Ye {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(n) {
        if (this._def.coerce) try {
            n.data = BigInt(n.data)
        } catch {
            return this._getInvalidInput(n)
        }
        if (this._getType(n) !== le.bigint) return this._getInvalidInput(n);
        let r;
        const o = new _n;
        for (const u of this._def.checks) u.kind === "min" ? (u.inclusive ? n.data < u.value : n.data <= u.value) && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.too_small,
            type: "bigint",
            minimum: u.value,
            inclusive: u.inclusive,
            message: u.message
        }), o.dirty()) : u.kind === "max" ? (u.inclusive ? n.data > u.value : n.data >= u.value) && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.too_big,
            type: "bigint",
            maximum: u.value,
            inclusive: u.inclusive,
            message: u.message
        }), o.dirty()) : u.kind === "multipleOf" ? n.data % u.value !== BigInt(0) && (r = this._getOrReturnCtx(n, r), ne(r, {
            code: P.not_multiple_of,
            multipleOf: u.value,
            message: u.message
        }), o.dirty()) : Qe.assertNever(u);
        return {
            status: o.value,
            value: n.data
        }
    }
    _getInvalidInput(n) {
        const s = this._getOrReturnCtx(n);
        return ne(s, {
            code: P.invalid_type,
            expected: le.bigint,
            received: s.parsedType
        }), Se
    }
    gte(n, s) {
        return this.setLimit("min", n, !0, oe.toString(s))
    }
    gt(n, s) {
        return this.setLimit("min", n, !1, oe.toString(s))
    }
    lte(n, s) {
        return this.setLimit("max", n, !0, oe.toString(s))
    }
    lt(n, s) {
        return this.setLimit("max", n, !1, oe.toString(s))
    }
    setLimit(n, s, r, o) {
        return new lo({ ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: s,
                inclusive: r,
                message: oe.toString(o)
            }]
        })
    }
    _addCheck(n) {
        return new lo({ ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: oe.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: oe.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: oe.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: oe.toString(n)
        })
    }
    multipleOf(n, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: oe.toString(s)
        })
    }
    get minValue() {
        let n = null;
        for (const s of this._def.checks) s.kind === "min" && (n === null || s.value > n) && (n = s.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const s of this._def.checks) s.kind === "max" && (n === null || s.value < n) && (n = s.value);
        return n
    }
}
lo.create = a => new lo({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (a == null ? void 0 : a.coerce) ? ? !1,
    ...Me(a)
});
class Dh extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = !!n.data), this._getType(n) !== le.boolean) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.boolean,
                received: r.parsedType
            }), Se
        }
        return Ln(n.data)
    }
}
Dh.create = a => new Dh({
    typeName: Te.ZodBoolean,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...Me(a)
});
class du extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = new Date(n.data)), this._getType(n) !== le.date) {
            const u = this._getOrReturnCtx(n);
            return ne(u, {
                code: P.invalid_type,
                expected: le.date,
                received: u.parsedType
            }), Se
        }
        if (Number.isNaN(n.data.getTime())) {
            const u = this._getOrReturnCtx(n);
            return ne(u, {
                code: P.invalid_date
            }), Se
        }
        const r = new _n;
        let o;
        for (const u of this._def.checks) u.kind === "min" ? n.data.getTime() < u.value && (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.too_small,
            message: u.message,
            inclusive: !0,
            exact: !1,
            minimum: u.value,
            type: "date"
        }), r.dirty()) : u.kind === "max" ? n.data.getTime() > u.value && (o = this._getOrReturnCtx(n, o), ne(o, {
            code: P.too_big,
            message: u.message,
            inclusive: !0,
            exact: !1,
            maximum: u.value,
            type: "date"
        }), r.dirty()) : Qe.assertNever(u);
        return {
            status: r.value,
            value: new Date(n.data.getTime())
        }
    }
    _addCheck(n) {
        return new du({ ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    min(n, s) {
        return this._addCheck({
            kind: "min",
            value: n.getTime(),
            message: oe.toString(s)
        })
    }
    max(n, s) {
        return this._addCheck({
            kind: "max",
            value: n.getTime(),
            message: oe.toString(s)
        })
    }
    get minDate() {
        let n = null;
        for (const s of this._def.checks) s.kind === "min" && (n === null || s.value > n) && (n = s.value);
        return n != null ? new Date(n) : null
    }
    get maxDate() {
        let n = null;
        for (const s of this._def.checks) s.kind === "max" && (n === null || s.value < n) && (n = s.value);
        return n != null ? new Date(n) : null
    }
}
du.create = a => new du({
    checks: [],
    coerce: (a == null ? void 0 : a.coerce) || !1,
    typeName: Te.ZodDate,
    ...Me(a)
});
class d0 extends Ye {
    _parse(n) {
        if (this._getType(n) !== le.symbol) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.symbol,
                received: r.parsedType
            }), Se
        }
        return Ln(n.data)
    }
}
d0.create = a => new d0({
    typeName: Te.ZodSymbol,
    ...Me(a)
});
class h0 extends Ye {
    _parse(n) {
        if (this._getType(n) !== le.undefined) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.undefined,
                received: r.parsedType
            }), Se
        }
        return Ln(n.data)
    }
}
h0.create = a => new h0({
    typeName: Te.ZodUndefined,
    ...Me(a)
});
class m0 extends Ye {
    _parse(n) {
        if (this._getType(n) !== le.null) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.null,
                received: r.parsedType
            }), Se
        }
        return Ln(n.data)
    }
}
m0.create = a => new m0({
    typeName: Te.ZodNull,
    ...Me(a)
});
class p0 extends Ye {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(n) {
        return Ln(n.data)
    }
}
p0.create = a => new p0({
    typeName: Te.ZodAny,
    ...Me(a)
});
class y0 extends Ye {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(n) {
        return Ln(n.data)
    }
}
y0.create = a => new y0({
    typeName: Te.ZodUnknown,
    ...Me(a)
});
class Vi extends Ye {
    _parse(n) {
        const s = this._getOrReturnCtx(n);
        return ne(s, {
            code: P.invalid_type,
            expected: le.never,
            received: s.parsedType
        }), Se
    }
}
Vi.create = a => new Vi({
    typeName: Te.ZodNever,
    ...Me(a)
});
class g0 extends Ye {
    _parse(n) {
        if (this._getType(n) !== le.undefined) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.void,
                received: r.parsedType
            }), Se
        }
        return Ln(n.data)
    }
}
g0.create = a => new g0({
    typeName: Te.ZodVoid,
    ...Me(a)
});
class fa extends Ye {
    _parse(n) {
        const {
            ctx: s,
            status: r
        } = this._processInputParams(n), o = this._def;
        if (s.parsedType !== le.array) return ne(s, {
            code: P.invalid_type,
            expected: le.array,
            received: s.parsedType
        }), Se;
        if (o.exactLength !== null) {
            const d = s.data.length > o.exactLength.value,
                m = s.data.length < o.exactLength.value;
            (d || m) && (ne(s, {
                code: d ? P.too_big : P.too_small,
                minimum: m ? o.exactLength.value : void 0,
                maximum: d ? o.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: o.exactLength.message
            }), r.dirty())
        }
        if (o.minLength !== null && s.data.length < o.minLength.value && (ne(s, {
                code: P.too_small,
                minimum: o.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: o.minLength.message
            }), r.dirty()), o.maxLength !== null && s.data.length > o.maxLength.value && (ne(s, {
                code: P.too_big,
                maximum: o.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: o.maxLength.message
            }), r.dirty()), s.common.async) return Promise.all([...s.data].map((d, m) => o.type._parseAsync(new Hi(s, d, s.path, m)))).then(d => _n.mergeArray(r, d));
        const u = [...s.data].map((d, m) => o.type._parseSync(new Hi(s, d, s.path, m)));
        return _n.mergeArray(r, u)
    }
    get element() {
        return this._def.type
    }
    min(n, s) {
        return new fa({ ...this._def,
            minLength: {
                value: n,
                message: oe.toString(s)
            }
        })
    }
    max(n, s) {
        return new fa({ ...this._def,
            maxLength: {
                value: n,
                message: oe.toString(s)
            }
        })
    }
    length(n, s) {
        return new fa({ ...this._def,
            exactLength: {
                value: n,
                message: oe.toString(s)
            }
        })
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
fa.create = (a, n) => new fa({
    type: a,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Te.ZodArray,
    ...Me(n)
});

function Sl(a) {
    if (a instanceof ht) {
        const n = {};
        for (const s in a.shape) {
            const r = a.shape[s];
            n[s] = Bi.create(Sl(r))
        }
        return new ht({ ...a._def,
            shape: () => n
        })
    } else return a instanceof fa ? new fa({ ...a._def,
        type: Sl(a.element)
    }) : a instanceof Bi ? Bi.create(Sl(a.unwrap())) : a instanceof Gl ? Gl.create(Sl(a.unwrap())) : a instanceof Rs ? Rs.create(a.items.map(n => Sl(n))) : a
}
class ht extends Ye {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const n = this._def.shape(),
            s = Qe.objectKeys(n);
        return this._cached = {
            shape: n,
            keys: s
        }, this._cached
    }
    _parse(n) {
        if (this._getType(n) !== le.object) {
            const y = this._getOrReturnCtx(n);
            return ne(y, {
                code: P.invalid_type,
                expected: le.object,
                received: y.parsedType
            }), Se
        }
        const {
            status: r,
            ctx: o
        } = this._processInputParams(n), {
            shape: u,
            keys: d
        } = this._getCached(), m = [];
        if (!(this._def.catchall instanceof Vi && this._def.unknownKeys === "strip"))
            for (const y in o.data) d.includes(y) || m.push(y);
        const v = [];
        for (const y of d) {
            const b = u[y],
                g = o.data[y];
            v.push({
                key: {
                    status: "valid",
                    value: y
                },
                value: b._parse(new Hi(o, g, o.path, y)),
                alwaysSet: y in o.data
            })
        }
        if (this._def.catchall instanceof Vi) {
            const y = this._def.unknownKeys;
            if (y === "passthrough")
                for (const b of m) v.push({
                    key: {
                        status: "valid",
                        value: b
                    },
                    value: {
                        status: "valid",
                        value: o.data[b]
                    }
                });
            else if (y === "strict") m.length > 0 && (ne(o, {
                code: P.unrecognized_keys,
                keys: m
            }), r.dirty());
            else if (y !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const y = this._def.catchall;
            for (const b of m) {
                const g = o.data[b];
                v.push({
                    key: {
                        status: "valid",
                        value: b
                    },
                    value: y._parse(new Hi(o, g, o.path, b)),
                    alwaysSet: b in o.data
                })
            }
        }
        return o.common.async ? Promise.resolve().then(async () => {
            const y = [];
            for (const b of v) {
                const g = await b.key,
                    S = await b.value;
                y.push({
                    key: g,
                    value: S,
                    alwaysSet: b.alwaysSet
                })
            }
            return y
        }).then(y => _n.mergeObjectSync(r, y)) : _n.mergeObjectSync(r, v)
    }
    get shape() {
        return this._def.shape()
    }
    strict(n) {
        return oe.errToObj, new ht({ ...this._def,
            unknownKeys: "strict",
            ...n !== void 0 ? {
                errorMap: (s, r) => {
                    var u, d;
                    const o = ((d = (u = this._def).errorMap) == null ? void 0 : d.call(u, s, r).message) ? ? r.defaultError;
                    return s.code === "unrecognized_keys" ? {
                        message: oe.errToObj(n).message ? ? o
                    } : {
                        message: o
                    }
                }
            } : {}
        })
    }
    strip() {
        return new ht({ ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new ht({ ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(n) {
        return new ht({ ...this._def,
            shape: () => ({ ...this._def.shape(),
                ...n
            })
        })
    }
    merge(n) {
        return new ht({
            unknownKeys: n._def.unknownKeys,
            catchall: n._def.catchall,
            shape: () => ({ ...this._def.shape(),
                ...n._def.shape()
            }),
            typeName: Te.ZodObject
        })
    }
    setKey(n, s) {
        return this.augment({
            [n]: s
        })
    }
    catchall(n) {
        return new ht({ ...this._def,
            catchall: n
        })
    }
    pick(n) {
        const s = {};
        for (const r of Qe.objectKeys(n)) n[r] && this.shape[r] && (s[r] = this.shape[r]);
        return new ht({ ...this._def,
            shape: () => s
        })
    }
    omit(n) {
        const s = {};
        for (const r of Qe.objectKeys(this.shape)) n[r] || (s[r] = this.shape[r]);
        return new ht({ ...this._def,
            shape: () => s
        })
    }
    deepPartial() {
        return Sl(this)
    }
    partial(n) {
        const s = {};
        for (const r of Qe.objectKeys(this.shape)) {
            const o = this.shape[r];
            n && !n[r] ? s[r] = o : s[r] = o.optional()
        }
        return new ht({ ...this._def,
            shape: () => s
        })
    }
    required(n) {
        const s = {};
        for (const r of Qe.objectKeys(this.shape))
            if (n && !n[r]) s[r] = this.shape[r];
            else {
                let u = this.shape[r];
                for (; u instanceof Bi;) u = u._def.innerType;
                s[r] = u
            }
        return new ht({ ...this._def,
            shape: () => s
        })
    }
    keyof() {
        return gb(Qe.objectKeys(this.shape))
    }
}
ht.create = (a, n) => new ht({
    shape: () => a,
    unknownKeys: "strip",
    catchall: Vi.create(),
    typeName: Te.ZodObject,
    ...Me(n)
});
ht.strictCreate = (a, n) => new ht({
    shape: () => a,
    unknownKeys: "strict",
    catchall: Vi.create(),
    typeName: Te.ZodObject,
    ...Me(n)
});
ht.lazycreate = (a, n) => new ht({
    shape: a,
    unknownKeys: "strip",
    catchall: Vi.create(),
    typeName: Te.ZodObject,
    ...Me(n)
});
class hu extends Ye {
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n), r = this._def.options;

        function o(u) {
            for (const m of u)
                if (m.result.status === "valid") return m.result;
            for (const m of u)
                if (m.result.status === "dirty") return s.common.issues.push(...m.ctx.common.issues), m.result;
            const d = u.map(m => new ma(m.ctx.common.issues));
            return ne(s, {
                code: P.invalid_union,
                unionErrors: d
            }), Se
        }
        if (s.common.async) return Promise.all(r.map(async u => {
            const d = { ...s,
                common: { ...s.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await u._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: d
                }),
                ctx: d
            }
        })).then(o); {
            let u;
            const d = [];
            for (const v of r) {
                const y = { ...s,
                        common: { ...s.common,
                            issues: []
                        },
                        parent: null
                    },
                    b = v._parseSync({
                        data: s.data,
                        path: s.path,
                        parent: y
                    });
                if (b.status === "valid") return b;
                b.status === "dirty" && !u && (u = {
                    result: b,
                    ctx: y
                }), y.common.issues.length && d.push(y.common.issues)
            }
            if (u) return s.common.issues.push(...u.ctx.common.issues), u.result;
            const m = d.map(v => new ma(v));
            return ne(s, {
                code: P.invalid_union,
                unionErrors: m
            }), Se
        }
    }
    get options() {
        return this._def.options
    }
}
hu.create = (a, n) => new hu({
    options: a,
    typeName: Te.ZodUnion,
    ...Me(n)
});

function kh(a, n) {
    const s = Si(a),
        r = Si(n);
    if (a === n) return {
        valid: !0,
        data: a
    };
    if (s === le.object && r === le.object) {
        const o = Qe.objectKeys(n),
            u = Qe.objectKeys(a).filter(m => o.indexOf(m) !== -1),
            d = { ...a,
                ...n
            };
        for (const m of u) {
            const v = kh(a[m], n[m]);
            if (!v.valid) return {
                valid: !1
            };
            d[m] = v.data
        }
        return {
            valid: !0,
            data: d
        }
    } else if (s === le.array && r === le.array) {
        if (a.length !== n.length) return {
            valid: !1
        };
        const o = [];
        for (let u = 0; u < a.length; u++) {
            const d = a[u],
                m = n[u],
                v = kh(d, m);
            if (!v.valid) return {
                valid: !1
            };
            o.push(v.data)
        }
        return {
            valid: !0,
            data: o
        }
    } else return s === le.date && r === le.date && +a == +n ? {
        valid: !0,
        data: a
    } : {
        valid: !1
    }
}
class mu extends Ye {
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n), o = (u, d) => {
            if (c0(u) || c0(d)) return Se;
            const m = kh(u.value, d.value);
            return m.valid ? ((u0(u) || u0(d)) && s.dirty(), {
                status: s.value,
                value: m.data
            }) : (ne(r, {
                code: P.invalid_intersection_types
            }), Se)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([u, d]) => o(u, d)) : o(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
mu.create = (a, n, s) => new mu({
    left: a,
    right: n,
    typeName: Te.ZodIntersection,
    ...Me(s)
});
class Rs extends Ye {
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== le.array) return ne(r, {
            code: P.invalid_type,
            expected: le.array,
            received: r.parsedType
        }), Se;
        if (r.data.length < this._def.items.length) return ne(r, {
            code: P.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), Se;
        !this._def.rest && r.data.length > this._def.items.length && (ne(r, {
            code: P.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), s.dirty());
        const u = [...r.data].map((d, m) => {
            const v = this._def.items[m] || this._def.rest;
            return v ? v._parse(new Hi(r, d, r.path, m)) : null
        }).filter(d => !!d);
        return r.common.async ? Promise.all(u).then(d => _n.mergeArray(s, d)) : _n.mergeArray(s, u)
    }
    get items() {
        return this._def.items
    }
    rest(n) {
        return new Rs({ ...this._def,
            rest: n
        })
    }
}
Rs.create = (a, n) => {
    if (!Array.isArray(a)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Rs({
        items: a,
        typeName: Te.ZodTuple,
        rest: null,
        ...Me(n)
    })
};
class v0 extends Ye {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== le.map) return ne(r, {
            code: P.invalid_type,
            expected: le.map,
            received: r.parsedType
        }), Se;
        const o = this._def.keyType,
            u = this._def.valueType,
            d = [...r.data.entries()].map(([m, v], y) => ({
                key: o._parse(new Hi(r, m, r.path, [y, "key"])),
                value: u._parse(new Hi(r, v, r.path, [y, "value"]))
            }));
        if (r.common.async) {
            const m = new Map;
            return Promise.resolve().then(async () => {
                for (const v of d) {
                    const y = await v.key,
                        b = await v.value;
                    if (y.status === "aborted" || b.status === "aborted") return Se;
                    (y.status === "dirty" || b.status === "dirty") && s.dirty(), m.set(y.value, b.value)
                }
                return {
                    status: s.value,
                    value: m
                }
            })
        } else {
            const m = new Map;
            for (const v of d) {
                const y = v.key,
                    b = v.value;
                if (y.status === "aborted" || b.status === "aborted") return Se;
                (y.status === "dirty" || b.status === "dirty") && s.dirty(), m.set(y.value, b.value)
            }
            return {
                status: s.value,
                value: m
            }
        }
    }
}
v0.create = (a, n, s) => new v0({
    valueType: n,
    keyType: a,
    typeName: Te.ZodMap,
    ...Me(s)
});
class ro extends Ye {
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== le.set) return ne(r, {
            code: P.invalid_type,
            expected: le.set,
            received: r.parsedType
        }), Se;
        const o = this._def;
        o.minSize !== null && r.data.size < o.minSize.value && (ne(r, {
            code: P.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message
        }), s.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ne(r, {
            code: P.too_big,
            maximum: o.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.maxSize.message
        }), s.dirty());
        const u = this._def.valueType;

        function d(v) {
            const y = new Set;
            for (const b of v) {
                if (b.status === "aborted") return Se;
                b.status === "dirty" && s.dirty(), y.add(b.value)
            }
            return {
                status: s.value,
                value: y
            }
        }
        const m = [...r.data.values()].map((v, y) => u._parse(new Hi(r, v, r.path, y)));
        return r.common.async ? Promise.all(m).then(v => d(v)) : d(m)
    }
    min(n, s) {
        return new ro({ ...this._def,
            minSize: {
                value: n,
                message: oe.toString(s)
            }
        })
    }
    max(n, s) {
        return new ro({ ...this._def,
            maxSize: {
                value: n,
                message: oe.toString(s)
            }
        })
    }
    size(n, s) {
        return this.min(n, s).max(n, s)
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
ro.create = (a, n) => new ro({
    valueType: a,
    minSize: null,
    maxSize: null,
    typeName: Te.ZodSet,
    ...Me(n)
});
class b0 extends Ye {
    get schema() {
        return this._def.getter()
    }
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n);
        return this._def.getter()._parse({
            data: s.data,
            path: s.path,
            parent: s
        })
    }
}
b0.create = (a, n) => new b0({
    getter: a,
    typeName: Te.ZodLazy,
    ...Me(n)
});
class _0 extends Ye {
    _parse(n) {
        if (n.data !== this._def.value) {
            const s = this._getOrReturnCtx(n);
            return ne(s, {
                received: s.data,
                code: P.invalid_literal,
                expected: this._def.value
            }), Se
        }
        return {
            status: "valid",
            value: n.data
        }
    }
    get value() {
        return this._def.value
    }
}
_0.create = (a, n) => new _0({
    value: a,
    typeName: Te.ZodLiteral,
    ...Me(n)
});

function gb(a, n) {
    return new Yl({
        values: a,
        typeName: Te.ZodEnum,
        ...Me(n)
    })
}
class Yl extends Ye {
    _parse(n) {
        if (typeof n.data != "string") {
            const s = this._getOrReturnCtx(n),
                r = this._def.values;
            return ne(s, {
                expected: Qe.joinValues(r),
                received: s.parsedType,
                code: P.invalid_type
            }), Se
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(n.data)) {
            const s = this._getOrReturnCtx(n),
                r = this._def.values;
            return ne(s, {
                received: s.data,
                code: P.invalid_enum_value,
                options: r
            }), Se
        }
        return Ln(n.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const n = {};
        for (const s of this._def.values) n[s] = s;
        return n
    }
    get Values() {
        const n = {};
        for (const s of this._def.values) n[s] = s;
        return n
    }
    get Enum() {
        const n = {};
        for (const s of this._def.values) n[s] = s;
        return n
    }
    extract(n, s = this._def) {
        return Yl.create(n, { ...this._def,
            ...s
        })
    }
    exclude(n, s = this._def) {
        return Yl.create(this.options.filter(r => !n.includes(r)), { ...this._def,
            ...s
        })
    }
}
Yl.create = gb;
class x0 extends Ye {
    _parse(n) {
        const s = Qe.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(n);
        if (r.parsedType !== le.string && r.parsedType !== le.number) {
            const o = Qe.objectValues(s);
            return ne(r, {
                expected: Qe.joinValues(o),
                received: r.parsedType,
                code: P.invalid_type
            }), Se
        }
        if (this._cache || (this._cache = new Set(Qe.getValidEnumValues(this._def.values))), !this._cache.has(n.data)) {
            const o = Qe.objectValues(s);
            return ne(r, {
                received: r.data,
                code: P.invalid_enum_value,
                options: o
            }), Se
        }
        return Ln(n.data)
    }
    get enum() {
        return this._def.values
    }
}
x0.create = (a, n) => new x0({
    values: a,
    typeName: Te.ZodNativeEnum,
    ...Me(n)
});
class pu extends Ye {
    unwrap() {
        return this._def.type
    }
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n);
        if (s.parsedType !== le.promise && s.common.async === !1) return ne(s, {
            code: P.invalid_type,
            expected: le.promise,
            received: s.parsedType
        }), Se;
        const r = s.parsedType === le.promise ? s.data : Promise.resolve(s.data);
        return Ln(r.then(o => this._def.type.parseAsync(o, {
            path: s.path,
            errorMap: s.common.contextualErrorMap
        })))
    }
}
pu.create = (a, n) => new pu({
    type: a,
    typeName: Te.ZodPromise,
    ...Me(n)
});
class Zl extends Ye {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n), o = this._def.effect || null, u = {
            addIssue: d => {
                ne(r, d), d.fatal ? s.abort() : s.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (u.addIssue = u.addIssue.bind(u), o.type === "preprocess") {
            const d = o.transform(r.data, u);
            if (r.common.async) return Promise.resolve(d).then(async m => {
                if (s.value === "aborted") return Se;
                const v = await this._def.schema._parseAsync({
                    data: m,
                    path: r.path,
                    parent: r
                });
                return v.status === "aborted" ? Se : v.status === "dirty" || s.value === "dirty" ? Xr(v.value) : v
            }); {
                if (s.value === "aborted") return Se;
                const m = this._def.schema._parseSync({
                    data: d,
                    path: r.path,
                    parent: r
                });
                return m.status === "aborted" ? Se : m.status === "dirty" || s.value === "dirty" ? Xr(m.value) : m
            }
        }
        if (o.type === "refinement") {
            const d = m => {
                const v = o.refinement(m, u);
                if (r.common.async) return Promise.resolve(v);
                if (v instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return m
            };
            if (r.common.async === !1) {
                const m = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return m.status === "aborted" ? Se : (m.status === "dirty" && s.dirty(), d(m.value), {
                    status: s.value,
                    value: m.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(m => m.status === "aborted" ? Se : (m.status === "dirty" && s.dirty(), d(m.value).then(() => ({
                status: s.value,
                value: m.value
            }))))
        }
        if (o.type === "transform")
            if (r.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Vl(d)) return Se;
                const m = o.transform(d.value, u);
                if (m instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: s.value,
                    value: m
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(d => Vl(d) ? Promise.resolve(o.transform(d.value, u)).then(m => ({
                status: s.value,
                value: m
            })) : Se);
        Qe.assertNever(o)
    }
}
Zl.create = (a, n, s) => new Zl({
    schema: a,
    typeName: Te.ZodEffects,
    effect: n,
    ...Me(s)
});
Zl.createWithPreprocess = (a, n, s) => new Zl({
    schema: n,
    effect: {
        type: "preprocess",
        transform: a
    },
    typeName: Te.ZodEffects,
    ...Me(s)
});
class Bi extends Ye {
    _parse(n) {
        return this._getType(n) === le.undefined ? Ln(void 0) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
Bi.create = (a, n) => new Bi({
    innerType: a,
    typeName: Te.ZodOptional,
    ...Me(n)
});
class Gl extends Ye {
    _parse(n) {
        return this._getType(n) === le.null ? Ln(null) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
Gl.create = (a, n) => new Gl({
    innerType: a,
    typeName: Te.ZodNullable,
    ...Me(n)
});
class Bh extends Ye {
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n);
        let r = s.data;
        return s.parsedType === le.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: s.path,
            parent: s
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Bh.create = (a, n) => new Bh({
    innerType: a,
    typeName: Te.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Me(n)
});
class Lh extends Ye {
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n), r = { ...s,
            common: { ...s.common,
                issues: []
            }
        }, o = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: { ...r
            }
        });
        return fu(o) ? o.then(u => ({
            status: "valid",
            value: u.status === "valid" ? u.value : this._def.catchValue({
                get error() {
                    return new ma(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new ma(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Lh.create = (a, n) => new Lh({
    innerType: a,
    typeName: Te.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Me(n)
});
class S0 extends Ye {
    _parse(n) {
        if (this._getType(n) !== le.nan) {
            const r = this._getOrReturnCtx(n);
            return ne(r, {
                code: P.invalid_type,
                expected: le.nan,
                received: r.parsedType
            }), Se
        }
        return {
            status: "valid",
            value: n.data
        }
    }
}
S0.create = a => new S0({
    typeName: Te.ZodNaN,
    ...Me(a)
});
class p3 extends Ye {
    _parse(n) {
        const {
            ctx: s
        } = this._processInputParams(n), r = s.data;
        return this._def.type._parse({
            data: r,
            path: s.path,
            parent: s
        })
    }
    unwrap() {
        return this._def.type
    }
}
class hm extends Ye {
    _parse(n) {
        const {
            status: s,
            ctx: r
        } = this._processInputParams(n);
        if (r.common.async) return (async () => {
            const u = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return u.status === "aborted" ? Se : u.status === "dirty" ? (s.dirty(), Xr(u.value)) : this._def.out._parseAsync({
                data: u.value,
                path: r.path,
                parent: r
            })
        })(); {
            const o = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return o.status === "aborted" ? Se : o.status === "dirty" ? (s.dirty(), {
                status: "dirty",
                value: o.value
            }) : this._def.out._parseSync({
                data: o.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(n, s) {
        return new hm({ in: n,
            out: s,
            typeName: Te.ZodPipeline
        })
    }
}
class Uh extends Ye {
    _parse(n) {
        const s = this._def.innerType._parse(n),
            r = o => (Vl(o) && (o.value = Object.freeze(o.value)), o);
        return fu(s) ? s.then(o => r(o)) : r(s)
    }
    unwrap() {
        return this._def.innerType
    }
}
Uh.create = (a, n) => new Uh({
    innerType: a,
    typeName: Te.ZodReadonly,
    ...Me(n)
});
var Te;
(function(a) {
    a.ZodString = "ZodString", a.ZodNumber = "ZodNumber", a.ZodNaN = "ZodNaN", a.ZodBigInt = "ZodBigInt", a.ZodBoolean = "ZodBoolean", a.ZodDate = "ZodDate", a.ZodSymbol = "ZodSymbol", a.ZodUndefined = "ZodUndefined", a.ZodNull = "ZodNull", a.ZodAny = "ZodAny", a.ZodUnknown = "ZodUnknown", a.ZodNever = "ZodNever", a.ZodVoid = "ZodVoid", a.ZodArray = "ZodArray", a.ZodObject = "ZodObject", a.ZodUnion = "ZodUnion", a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", a.ZodIntersection = "ZodIntersection", a.ZodTuple = "ZodTuple", a.ZodRecord = "ZodRecord", a.ZodMap = "ZodMap", a.ZodSet = "ZodSet", a.ZodFunction = "ZodFunction", a.ZodLazy = "ZodLazy", a.ZodLiteral = "ZodLiteral", a.ZodEnum = "ZodEnum", a.ZodEffects = "ZodEffects", a.ZodNativeEnum = "ZodNativeEnum", a.ZodOptional = "ZodOptional", a.ZodNullable = "ZodNullable", a.ZodDefault = "ZodDefault", a.ZodCatch = "ZodCatch", a.ZodPromise = "ZodPromise", a.ZodBranded = "ZodBranded", a.ZodPipeline = "ZodPipeline", a.ZodReadonly = "ZodReadonly"
})(Te || (Te = {}));
const Qc = zi.create,
    y3 = Dh.create;
Vi.create;
fa.create;
const vb = ht.create;
hu.create;
mu.create;
Rs.create;
const g3 = Yl.create;
pu.create;
Bi.create;
Gl.create;
class v3 {
    constructor() {
        this.keyToValue = new Map, this.valueToKey = new Map
    }
    set(n, s) {
        this.keyToValue.set(n, s), this.valueToKey.set(s, n)
    }
    getByKey(n) {
        return this.keyToValue.get(n)
    }
    getByValue(n) {
        return this.valueToKey.get(n)
    }
    clear() {
        this.keyToValue.clear(), this.valueToKey.clear()
    }
}
class bb {
    constructor(n) {
        this.generateIdentifier = n, this.kv = new v3
    }
    register(n, s) {
        this.kv.getByValue(n) || (s || (s = this.generateIdentifier(n)), this.kv.set(s, n))
    }
    clear() {
        this.kv.clear()
    }
    getIdentifier(n) {
        return this.kv.getByValue(n)
    }
    getValue(n) {
        return this.kv.getByKey(n)
    }
}
class b3 extends bb {
    constructor() {
        super(n => n.name), this.classToAllowedProps = new Map
    }
    register(n, s) {
        typeof s == "object" ? (s.allowProps && this.classToAllowedProps.set(n, s.allowProps), super.register(n, s.identifier)) : super.register(n, s)
    }
    getAllowedProps(n) {
        return this.classToAllowedProps.get(n)
    }
}

function _3(a) {
    if ("values" in Object) return Object.values(a);
    const n = [];
    for (const s in a) a.hasOwnProperty(s) && n.push(a[s]);
    return n
}

function x3(a, n) {
    const s = _3(a);
    if ("find" in s) return s.find(n);
    const r = s;
    for (let o = 0; o < r.length; o++) {
        const u = r[o];
        if (n(u)) return u
    }
}

function Ql(a, n) {
    Object.entries(a).forEach(([s, r]) => n(r, s))
}

function eu(a, n) {
    return a.indexOf(n) !== -1
}

function T0(a, n) {
    for (let s = 0; s < a.length; s++) {
        const r = a[s];
        if (n(r)) return r
    }
}
class S3 {
    constructor() {
        this.transfomers = {}
    }
    register(n) {
        this.transfomers[n.name] = n
    }
    findApplicable(n) {
        return x3(this.transfomers, s => s.isApplicable(n))
    }
    findByName(n) {
        return this.transfomers[n]
    }
}
const T3 = a => Object.prototype.toString.call(a).slice(8, -1),
    _b = a => typeof a > "u",
    w3 = a => a === null,
    oo = a => typeof a != "object" || a === null || a === Object.prototype ? !1 : Object.getPrototypeOf(a) === null ? !0 : Object.getPrototypeOf(a) === Object.prototype,
    qh = a => oo(a) && Object.keys(a).length === 0,
    Yi = a => Array.isArray(a),
    E3 = a => typeof a == "string",
    C3 = a => typeof a == "number" && !isNaN(a),
    A3 = a => typeof a == "boolean",
    N3 = a => a instanceof RegExp,
    co = a => a instanceof Map,
    uo = a => a instanceof Set,
    xb = a => T3(a) === "Symbol",
    j3 = a => a instanceof Date && !isNaN(a.valueOf()),
    O3 = a => a instanceof Error,
    w0 = a => typeof a == "number" && isNaN(a),
    R3 = a => A3(a) || w3(a) || _b(a) || C3(a) || E3(a) || xb(a),
    M3 = a => typeof a == "bigint",
    z3 = a => a === 1 / 0 || a === -1 / 0,
    D3 = a => ArrayBuffer.isView(a) && !(a instanceof DataView),
    k3 = a => a instanceof URL,
    Sb = a => a.replace(/\./g, "\\."),
    th = a => a.map(String).map(Sb).join("."),
    Wr = a => {
        const n = [];
        let s = "";
        for (let o = 0; o < a.length; o++) {
            let u = a.charAt(o);
            if (u === "\\" && a.charAt(o + 1) === ".") {
                s += ".", o++;
                continue
            }
            if (u === ".") {
                n.push(s), s = "";
                continue
            }
            s += u
        }
        const r = s;
        return n.push(r), n
    };

function ta(a, n, s, r) {
    return {
        isApplicable: a,
        annotation: n,
        transform: s,
        untransform: r
    }
}
const Tb = [ta(_b, "undefined", () => null, () => {}), ta(M3, "bigint", a => a.toString(), a => typeof BigInt < "u" ? BigInt(a) : (console.error("Please add a BigInt polyfill."), a)), ta(j3, "Date", a => a.toISOString(), a => new Date(a)), ta(O3, "Error", (a, n) => {
    const s = {
        name: a.name,
        message: a.message
    };
    return n.allowedErrorProps.forEach(r => {
        s[r] = a[r]
    }), s
}, (a, n) => {
    const s = new Error(a.message);
    return s.name = a.name, s.stack = a.stack, n.allowedErrorProps.forEach(r => {
        s[r] = a[r]
    }), s
}), ta(N3, "regexp", a => "" + a, a => {
    const n = a.slice(1, a.lastIndexOf("/")),
        s = a.slice(a.lastIndexOf("/") + 1);
    return new RegExp(n, s)
}), ta(uo, "set", a => [...a.values()], a => new Set(a)), ta(co, "map", a => [...a.entries()], a => new Map(a)), ta(a => w0(a) || z3(a), "number", a => w0(a) ? "NaN" : a > 0 ? "Infinity" : "-Infinity", Number), ta(a => a === 0 && 1 / a === -1 / 0, "number", () => "-0", Number), ta(k3, "URL", a => a.toString(), a => new URL(a))];

function Cu(a, n, s, r) {
    return {
        isApplicable: a,
        annotation: n,
        transform: s,
        untransform: r
    }
}
const wb = Cu((a, n) => xb(a) ? !!n.symbolRegistry.getIdentifier(a) : !1, (a, n) => ["symbol", n.symbolRegistry.getIdentifier(a)], a => a.description, (a, n, s) => {
        const r = s.symbolRegistry.getValue(n[1]);
        if (!r) throw new Error("Trying to deserialize unknown symbol");
        return r
    }),
    B3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((a, n) => (a[n.name] = n, a), {}),
    Eb = Cu(D3, a => ["typed-array", a.constructor.name], a => [...a], (a, n) => {
        const s = B3[n[1]];
        if (!s) throw new Error("Trying to deserialize unknown typed array");
        return new s(a)
    });

function Cb(a, n) {
    return a != null && a.constructor ? !!n.classRegistry.getIdentifier(a.constructor) : !1
}
const Ab = Cu(Cb, (a, n) => ["class", n.classRegistry.getIdentifier(a.constructor)], (a, n) => {
        const s = n.classRegistry.getAllowedProps(a.constructor);
        if (!s) return { ...a
        };
        const r = {};
        return s.forEach(o => {
            r[o] = a[o]
        }), r
    }, (a, n, s) => {
        const r = s.classRegistry.getValue(n[1]);
        if (!r) throw new Error(`Trying to deserialize unknown class '${n[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
        return Object.assign(Object.create(r.prototype), a)
    }),
    Nb = Cu((a, n) => !!n.customTransformerRegistry.findApplicable(a), (a, n) => ["custom", n.customTransformerRegistry.findApplicable(a).name], (a, n) => n.customTransformerRegistry.findApplicable(a).serialize(a), (a, n, s) => {
        const r = s.customTransformerRegistry.findByName(n[1]);
        if (!r) throw new Error("Trying to deserialize unknown custom value");
        return r.deserialize(a)
    }),
    L3 = [Ab, wb, Nb, Eb],
    E0 = (a, n) => {
        const s = T0(L3, o => o.isApplicable(a, n));
        if (s) return {
            value: s.transform(a, n),
            type: s.annotation(a, n)
        };
        const r = T0(Tb, o => o.isApplicable(a, n));
        if (r) return {
            value: r.transform(a, n),
            type: r.annotation
        }
    },
    jb = {};
Tb.forEach(a => {
    jb[a.annotation] = a
});
const U3 = (a, n, s) => {
        if (Yi(n)) switch (n[0]) {
            case "symbol":
                return wb.untransform(a, n, s);
            case "class":
                return Ab.untransform(a, n, s);
            case "custom":
                return Nb.untransform(a, n, s);
            case "typed-array":
                return Eb.untransform(a, n, s);
            default:
                throw new Error("Unknown transformation: " + n)
        } else {
            const r = jb[n];
            if (!r) throw new Error("Unknown transformation: " + n);
            return r.untransform(a, s)
        }
    },
    Tl = (a, n) => {
        if (n > a.size) throw new Error("index out of bounds");
        const s = a.keys();
        for (; n > 0;) s.next(), n--;
        return s.next().value
    };

function Ob(a) {
    if (eu(a, "__proto__")) throw new Error("__proto__ is not allowed as a property");
    if (eu(a, "prototype")) throw new Error("prototype is not allowed as a property");
    if (eu(a, "constructor")) throw new Error("constructor is not allowed as a property")
}
const q3 = (a, n) => {
        Ob(n);
        for (let s = 0; s < n.length; s++) {
            const r = n[s];
            if (uo(a)) a = Tl(a, +r);
            else if (co(a)) {
                const o = +r,
                    u = +n[++s] == 0 ? "key" : "value",
                    d = Tl(a, o);
                switch (u) {
                    case "key":
                        a = d;
                        break;
                    case "value":
                        a = a.get(d);
                        break
                }
            } else a = a[r]
        }
        return a
    },
    Hh = (a, n, s) => {
        if (Ob(n), n.length === 0) return s(a);
        let r = a;
        for (let u = 0; u < n.length - 1; u++) {
            const d = n[u];
            if (Yi(r)) {
                const m = +d;
                r = r[m]
            } else if (oo(r)) r = r[d];
            else if (uo(r)) {
                const m = +d;
                r = Tl(r, m)
            } else if (co(r)) {
                if (u === n.length - 2) break;
                const v = +d,
                    y = +n[++u] == 0 ? "key" : "value",
                    b = Tl(r, v);
                switch (y) {
                    case "key":
                        r = b;
                        break;
                    case "value":
                        r = r.get(b);
                        break
                }
            }
        }
        const o = n[n.length - 1];
        if (Yi(r) ? r[+o] = s(r[+o]) : oo(r) && (r[o] = s(r[o])), uo(r)) {
            const u = Tl(r, +o),
                d = s(u);
            u !== d && (r.delete(u), r.add(d))
        }
        if (co(r)) {
            const u = +n[n.length - 2],
                d = Tl(r, u);
            switch (+o == 0 ? "key" : "value") {
                case "key":
                    {
                        const v = s(d);r.set(v, r.get(d)),
                        v !== d && r.delete(d);
                        break
                    }
                case "value":
                    {
                        r.set(d, s(r.get(d)));
                        break
                    }
            }
        }
        return a
    };

function Vh(a, n, s = []) {
    if (!a) return;
    if (!Yi(a)) {
        Ql(a, (u, d) => Vh(u, n, [...s, ...Wr(d)]));
        return
    }
    const [r, o] = a;
    o && Ql(o, (u, d) => {
        Vh(u, n, [...s, ...Wr(d)])
    }), n(r, s)
}

function H3(a, n, s) {
    return Vh(n, (r, o) => {
        a = Hh(a, o, u => U3(u, r, s))
    }), a
}

function V3(a, n) {
    function s(r, o) {
        const u = q3(a, Wr(o));
        r.map(Wr).forEach(d => {
            a = Hh(a, d, () => u)
        })
    }
    if (Yi(n)) {
        const [r, o] = n;
        r.forEach(u => {
            a = Hh(a, Wr(u), () => a)
        }), o && Ql(o, s)
    } else Ql(n, s);
    return a
}
const Y3 = (a, n) => oo(a) || Yi(a) || co(a) || uo(a) || Cb(a, n);

function Z3(a, n, s) {
    const r = s.get(a);
    r ? r.push(n) : s.set(a, [n])
}

function G3(a, n) {
    const s = {};
    let r;
    return a.forEach(o => {
        if (o.length <= 1) return;
        n || (o = o.map(m => m.map(String)).sort((m, v) => m.length - v.length));
        const [u, ...d] = o;
        u.length === 0 ? r = d.map(th) : s[th(u)] = d.map(th)
    }), r ? qh(s) ? [r] : [r, s] : qh(s) ? void 0 : s
}
const Rb = (a, n, s, r, o = [], u = [], d = new Map) => {
    const m = R3(a);
    if (!m) {
        Z3(a, o, n);
        const T = d.get(a);
        if (T) return r ? {
            transformedValue: null
        } : T
    }
    if (!Y3(a, s)) {
        const T = E0(a, s),
            O = T ? {
                transformedValue: T.value,
                annotations: [T.type]
            } : {
                transformedValue: a
            };
        return m || d.set(a, O), O
    }
    if (eu(u, a)) return {
        transformedValue: null
    };
    const v = E0(a, s),
        y = (v == null ? void 0 : v.value) ? ? a,
        b = Yi(y) ? [] : {},
        g = {};
    Ql(y, (T, O) => {
        if (O === "__proto__" || O === "constructor" || O === "prototype") throw new Error(`Detected property ${O}. This is a prototype pollution risk, please remove it from your object.`);
        const R = Rb(T, n, s, r, [...o, O], [...u, a], d);
        b[O] = R.transformedValue, Yi(R.annotations) ? g[O] = R.annotations : oo(R.annotations) && Ql(R.annotations, (A, j) => {
            g[Sb(O) + "." + j] = A
        })
    });
    const S = qh(g) ? {
        transformedValue: b,
        annotations: v ? [v.type] : void 0
    } : {
        transformedValue: b,
        annotations: v ? [v.type, g] : g
    };
    return m || d.set(a, S), S
};

function Mb(a) {
    return Object.prototype.toString.call(a).slice(8, -1)
}

function C0(a) {
    return Mb(a) === "Array"
}

function Q3(a) {
    if (Mb(a) !== "Object") return !1;
    const n = Object.getPrototypeOf(a);
    return !!n && n.constructor === Object && n === Object.prototype
}

function $3(a, n, s, r, o) {
    const u = {}.propertyIsEnumerable.call(r, n) ? "enumerable" : "nonenumerable";
    u === "enumerable" && (a[n] = s), o && u === "nonenumerable" && Object.defineProperty(a, n, {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
    })
}

function Yh(a, n = {}) {
    if (C0(a)) return a.map(o => Yh(o, n));
    if (!Q3(a)) return a;
    const s = Object.getOwnPropertyNames(a),
        r = Object.getOwnPropertySymbols(a);
    return [...s, ...r].reduce((o, u) => {
        if (C0(n.props) && !n.props.includes(u)) return o;
        const d = a[u],
            m = Yh(d, n);
        return $3(o, u, m, a, n.nonenumerable), o
    }, {})
}
class Re {
    constructor({
        dedupe: n = !1
    } = {}) {
        this.classRegistry = new b3, this.symbolRegistry = new bb(s => s.description ? ? ""), this.customTransformerRegistry = new S3, this.allowedErrorProps = [], this.dedupe = n
    }
    serialize(n) {
        const s = new Map,
            r = Rb(n, s, this, this.dedupe),
            o = {
                json: r.transformedValue
            };
        r.annotations && (o.meta = { ...o.meta,
            values: r.annotations
        });
        const u = G3(s, this.dedupe);
        return u && (o.meta = { ...o.meta,
            referentialEqualities: u
        }), o
    }
    deserialize(n) {
        const {
            json: s,
            meta: r
        } = n;
        let o = Yh(s);
        return r != null && r.values && (o = H3(o, r.values, this)), r != null && r.referentialEqualities && (o = V3(o, r.referentialEqualities)), o
    }
    stringify(n) {
        return JSON.stringify(this.serialize(n))
    }
    parse(n) {
        return this.deserialize(JSON.parse(n))
    }
    registerClass(n, s) {
        this.classRegistry.register(n, s)
    }
    registerSymbol(n, s) {
        this.symbolRegistry.register(n, s)
    }
    registerCustom(n, s) {
        this.customTransformerRegistry.register({
            name: s,
            ...n
        })
    }
    allowErrorProps(...n) {
        this.allowedErrorProps.push(...n)
    }
}
Re.defaultInstance = new Re;
Re.serialize = Re.defaultInstance.serialize.bind(Re.defaultInstance);
Re.deserialize = Re.defaultInstance.deserialize.bind(Re.defaultInstance);
Re.stringify = Re.defaultInstance.stringify.bind(Re.defaultInstance);
Re.parse = Re.defaultInstance.parse.bind(Re.defaultInstance);
Re.registerClass = Re.defaultInstance.registerClass.bind(Re.defaultInstance);
Re.registerSymbol = Re.defaultInstance.registerSymbol.bind(Re.defaultInstance);
Re.registerCustom = Re.defaultInstance.registerCustom.bind(Re.defaultInstance);
Re.allowErrorProps = Re.defaultInstance.allowErrorProps.bind(Re.defaultInstance);
Re.serialize;
Re.deserialize;
Re.stringify;
Re.parse;
Re.registerClass;
Re.registerCustom;
Re.registerSymbol;
Re.allowErrorProps;
const X3 = ["automation", "cybersecurity", "other", "web_development"],
    I3 = vb({
        category: g3(X3).optional(),
        featured: y3().optional()
    }),
    K3 = async (a = {}, n) => {
        const s = I3.parse(a),
            r = new URLSearchParams({
                input: Re.stringify(s)
            }),
            o = await fetch(`/_api/projects/list?${r.toString()}`, {
                method: "GET",
                ...n,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        if (!o.ok) {
            const u = Re.parse(await o.text());
            throw new Error(u.error)
        }
        return Re.parse(await o.text())
    },
    zb = ({
        filters: a,
        queryOptions: n
    } = {}) => TT({
        queryKey: ["projects", a],
        queryFn: () => K3(a),
        ...n
    }),
    F3 = "_container_1rwgj_1",
    P3 = "_hero_1rwgj_6",
    J3 = "_heroContent_1rwgj_16",
    W3 = "_heroText_1rwgj_25",
    eO = "_greeting_1rwgj_32",
    tO = "_name_1rwgj_39",
    nO = "_title_1rwgj_73",
    aO = "_gradientText_1rwgj_81",
    iO = "_description_1rwgj_87",
    sO = "_ctaButtons_1rwgj_95",
    lO = "_primaryBtn_1rwgj_101",
    rO = "_socialLinks_1rwgj_105",
    oO = "_socialIcon_1rwgj_111",
    cO = "_heroVisual_1rwgj_121",
    uO = "_blob_1rwgj_131",
    fO = "_blob2_1rwgj_144",
    dO = "_glassCard_1rwgj_157",
    hO = "_profileImageContainer_1rwgj_175",
    mO = "_profileImage_1rwgj_175",
    pO = "_codeSnippet_1rwgj_198",
    yO = "_keyword_1rwgj_205",
    gO = "_string_1rwgj_206",
    vO = "_statsSection_1rwgj_208",
    bO = "_statsGrid_1rwgj_215",
    _O = "_statCard_1rwgj_223",
    xO = "_statValue_1rwgj_237",
    SO = "_statLabel_1rwgj_245",
    TO = "_section_1rwgj_250",
    wO = "_sectionHeader_1rwgj_256",
    EO = "_sectionTitle_1rwgj_263",
    CO = "_projectsGrid_1rwgj_270",
    AO = "_skeletonCard_1rwgj_276",
    NO = "_methodologyGrid_1rwgj_283",
    jO = "_methodologyCard_1rwgj_290",
    OO = "_stepHeader_1rwgj_308",
    RO = "_stepIconWrapper_1rwgj_316",
    MO = "_stepNumber_1rwgj_327",
    zO = "_stepTitle_1rwgj_336",
    DO = "_stepDescription_1rwgj_344",
    pe = {
        container: F3,
        hero: P3,
        heroContent: J3,
        heroText: W3,
        greeting: eO,
        name: tO,
        title: nO,
        gradientText: aO,
        description: iO,
        ctaButtons: sO,
        primaryBtn: lO,
        socialLinks: rO,
        socialIcon: oO,
        heroVisual: cO,
        blob: uO,
        blob2: fO,
        glassCard: dO,
        profileImageContainer: hO,
        profileImage: mO,
        codeSnippet: pO,
        keyword: yO,
        string: gO,
        statsSection: vO,
        statsGrid: bO,
        statCard: _O,
        statValue: xO,
        statLabel: SO,
        section: TO,
        sectionHeader: wO,
        sectionTitle: EO,
        projectsGrid: CO,
        skeletonCard: AO,
        methodologyGrid: NO,
        methodologyCard: jO,
        stepHeader: OO,
        stepIconWrapper: RO,
        stepNumber: MO,
        stepTitle: zO,
        stepDescription: DO
    };

function kO() {
    const {
        data: a,
        isLoading: n
    } = zb({
        filters: {
            featured: !0
        }
    }), s = [{
        label: "Years Experience",
        value: "5+"
    }, {
        label: "Projects Completed",
        value: "30+"
    }, {
        label: "Certifications",
        value: "8"
    }, {
        label: "Happy Clients",
        value: "15+"
    }], r = [{
        title: "Reconnaissance",
        description: "Understanding the target environment",
        icon: p.jsx(fb, {
            size: 24
        })
    }, {
        title: "Scanning & Enumeration",
        description: "Finding vulnerabilities",
        icon: p.jsx(FA, {
            size: 24
        })
    }, {
        title: "Exploitation (Ethical)",
        description: "Proof-of-concept testing",
        icon: p.jsx(lN, {
            size: 24
        })
    }, {
        title: "Risk Analysis",
        description: "Severity & impact assessment",
        icon: p.jsx(cN, {
            size: 24
        })
    }, {
        title: "Mitigation",
        description: "Security recommendations & fixes",
        icon: p.jsx(fm, {
            size: 24
        })
    }];
    return p.jsxs("div", {
        className: pe.container,
        children: [p.jsx("section", {
            className: pe.hero,
            children: p.jsxs("div", {
                className: pe.heroContent,
                children: [p.jsxs("div", {
                    className: pe.heroText,
                    children: [p.jsx("h2", {
                        className: pe.greeting,
                        children: "Hello, I'm"
                    }), p.jsx("h1", {
                        className: pe.name,
                        children: "Arup Halder"
                    }), p.jsxs("h3", {
                        className: pe.title,
                        children: [p.jsx("span", {
                            className: pe.gradientText,
                            children: "Penetration Tester"
                        }), " ", "& Bug Bounty Hunter"]
                    }), p.jsx("p", {
                        className: pe.description,
                        children: "Web Security Expert & OSINT Specialist. I find vulnerabilities before the bad guys do. Passionate about ethical hacking, security research, and protecting digital assets."
                    }), p.jsxs("div", {
                        className: pe.ctaButtons,
                        children: [p.jsx(Bn, {
                            asChild: !0,
                            size: "lg",
                            className: pe.primaryBtn,
                            children: p.jsxs(As, {
                                to: "/projects",
                                children: ["View Projects ", p.jsx(ob, {
                                    size: 18
                                })]
                            })
                        }), p.jsx(Bn, {
                            asChild: !0,
                            variant: "outline",
                            size: "lg",
                            children: p.jsx(As, {
                                to: "/contact",
                                children: "Contact Me"
                            })
                        })]
                    }), p.jsxs("div", {
                        className: pe.socialLinks,
                        children: [p.jsx("a", {
                            href: "https://github.com/Arup-halder9434",
                            className: pe.socialIcon,
                            "aria-label": "GitHub",
                            children: p.jsx(Eu, {
                                size: 24
                            })
                        }), p.jsx("a", {
                            href: "https://whatsapp.com/channel/0029VacESNGISTkK7ZQARc1n",
                            className: pe.socialIcon,
                            "aria-label": "Whatsapp",
                            children: p.jsx(um, {
                                size: 24
                            })
                        }), p.jsx("a", {
                            href: "https://x.com/aruphalder7694",
                            className: pe.socialIcon,
                            "aria-label": "Twitter",
                            children: p.jsx(dm, {
                                size: 24
                            })
                        }), p.jsx("a", {
                            href: "aruphalder934@gmail.com",
                            className: pe.socialIcon,
                            "aria-label": "Email",
                            children: p.jsx(ub, {
                                size: 24
                            })
                        })]
                    })]
                }), p.jsxs("div", {
                    className: pe.heroVisual,
                    children: [p.jsx("div", {
                        className: pe.blob
                    }), p.jsx("div", {
                        className: pe.blob2
                    }), p.jsx("div", {
                        className: pe.glassCard,
                        children: p.jsx("div", {
                            className: pe.codeSnippet,
                            children: p.jsx("pre", {
                                children: p.jsxs("code", {
                                    children: [p.jsx("span", {
                                        className: pe.keyword,
                                        children: "const"
                                    }), " developer = ", "{", `
`, "  ", "name: ", p.jsx("span", {
                                        className: pe.string,
                                        children: '"Arup"'
                                    }), ",", `
`, "  ", "role: ", p.jsx("span", {
                                        className: pe.string,
                                        children: '"Pentester"'
                                    }), ",", `
`, "  ", "skills: [", p.jsx("span", {
                                        className: pe.string,
                                        children: '"Bug Bounty"'
                                    }), ", ", p.jsx("span", {
                                        className: pe.string,
                                        children: '"OSINT"'
                                    }), "]", `
`, "}", ";"]
                                })
                            })
                        })
                    }), p.jsx("div", {
                        className: pe.profileImageContainer,
                        children: p.jsx("img", {
                            src: "/cyber/image/image.jpg",
                            alt: "Arup Halder",
                            className: pe.profileImage
                        })
                    })]
                })]
            })
        }), p.jsx("section", {
            className: pe.statsSection,
            children: p.jsx("div", {
                className: pe.statsGrid,
                children: s.map((o, u) => p.jsxs("div", {
                    className: pe.statCard,
                    children: [p.jsx("div", {
                        className: pe.statValue,
                        children: o.value
                    }), p.jsx("div", {
                        className: pe.statLabel,
                        children: o.label
                    })]
                }, u))
            })
        }), p.jsxs("section", {
            className: pe.section,
            children: [p.jsxs("div", {
                className: pe.sectionHeader,
                children: [p.jsx("h2", {
                    className: pe.sectionTitle,
                    children: "Featured Projects"
                }), p.jsx(Bn, {
                    asChild: !0,
                    variant: "link",
                    children: p.jsx(As, {
                        to: "/projects",
                        children: "View All Projects →"
                    })
                })]
            }), n ? p.jsx("div", {
                className: pe.projectsGrid,
                children: [1, 2, 3].map(o => p.jsxs("div", {
                    className: pe.skeletonCard,
                    children: [p.jsx(ra, {
                        style: {
                            height: "200px",
                            width: "100%"
                        }
                    }), p.jsxs("div", {
                        style: {
                            padding: "1.5rem"
                        },
                        children: [p.jsx(ra, {
                            style: {
                                height: "24px",
                                width: "70%",
                                marginBottom: "1rem"
                            }
                        }), p.jsx(ra, {
                            style: {
                                height: "16px",
                                width: "100%",
                                marginBottom: "0.5rem"
                            }
                        }), p.jsx(ra, {
                            style: {
                                height: "16px",
                                width: "90%"
                            }
                        })]
                    })]
                }, o))
            }) : p.jsx("div", {
                className: pe.projectsGrid,
                children: a == null ? void 0 : a.map(o => p.jsx(mb, {
                    project: o
                }, o.id))
            })]
        }), p.jsxs("section", {
            className: pe.section,
            children: [p.jsx("h2", {
                className: pe.sectionTitle,
                children: "Penetration Testing Methodology"
            }), p.jsx("div", {
                className: pe.methodologyGrid,
                children: r.map((o, u) => p.jsxs("div", {
                    className: pe.methodologyCard,
                    children: [p.jsxs("div", {
                        className: pe.stepHeader,
                        children: [p.jsx("div", {
                            className: pe.stepIconWrapper,
                            children: o.icon
                        }), p.jsxs("span", {
                            className: pe.stepNumber,
                            children: ["0", u + 1]
                        })]
                    }), p.jsx("h3", {
                        className: pe.stepTitle,
                        children: o.title
                    }), p.jsx("p", {
                        className: pe.stepDescription,
                        children: o.description
                    })]
                }, u))
            })]
        })]
    })
}
const BO = [Ds],
    LO = "_formItem_1udnp_2",
    UO = "_formLabel_1udnp_9",
    qO = "_error_1udnp_18",
    HO = "_formControl_1udnp_22",
    VO = "_formDescription_1udnp_31",
    YO = "_formMessage_1udnp_39",
    Ms = {
        formItem: LO,
        formLabel: UO,
        error: qO,
        formControl: HO,
        formDescription: VO,
        formMessage: YO
    };

function ZO({
    defaultValues: a = {},
    schema: n
}) {
    const [s, r] = $.useState(a), [o, u] = $.useState({}), d = $.useCallback((S, T) => {
        u(O => nh(O, S, T))
    }, []), m = S => S.code === P.unrecognized_keys, v = $.useCallback(() => {
        if (!n) return !0;
        try {
            return XO(n).parse(s), u({}), !0
        } catch (S) {
            if (S instanceof ma) {
                const T = S.errors.filter(m),
                    O = S.errors.filter(A => !m(A));
                if (T.length > 0) throw new Error("Extra properties detected in form values:" + T.map(A => A.message).join(", ") + ". Either update the schema or remove these values");
                const R = {};
                if (O.forEach(A => {
                        const j = A.path.join("."),
                            H = typeof A.message == "string" ? A.message : String(A.message);
                        Object.assign(R, {});
                        const D = nh(R, j, H);
                        Object.assign(R, D)
                    }), u(R), O.length === 0 && T.length > 0) throw new Error(`Form contains extra properties: ${T.map(A=>A.message).join(", ")}`)
            }
            return console.error("Form validation failed", S), !1
        }
    }, [n, s]), y = $.useCallback((S, T) => {
        if (!n) return;
        const O = n.safeParse(s);
        u(R => {
            let A = { ...R
            };
            return T != null && T.shallow ? Bb(A, S) !== void 0 && (A = A0(A, S, {
                shallow: !0
            })) : A = A0(A, S), O.success || O.error.errors.forEach(j => {
                const H = j.path.join(".");
                if (T != null && T.shallow ? H === S : H === S || H.startsWith(S + ".")) {
                    const k = typeof j.message == "string" ? j.message : String(j.message);
                    A = nh(A, H, k)
                }
            }), A
        })
    }, [n, s]), b = $.useCallback(S => T => {
        T.preventDefault(), v() && S(s)
    }, [v, s]), g = x.useRef(s);
    return x.useEffect(() => {
        const S = [];
        for (const T of Object.keys(s)) s[T] !== g.current[T] && Array.isArray(s[T]) && Array.isArray(g.current[T]) && s[T].length !== g.current[T].length && S.push(T);
        g.current = s;
        for (const T of S) y(T, {
            shallow: !0
        })
    }, [s, y]), {
        values: s,
        errors: o,
        setValues: r,
        validateField: y,
        validateForm: v,
        setFieldError: d,
        handleSubmit: b,
        defaultValues: a
    }
}

function GO(a) {
    const {
        children: n,
        values: s,
        errors: r,
        setValues: o,
        validateField: u,
        validateForm: d,
        setFieldError: m
    } = a;
    return p.jsx(Db.Provider, {
        value: {
            values: s,
            errors: r,
            setValues: o,
            validateField: u,
            validateForm: d,
            setFieldError: m
        },
        children: n
    })
}
const Ir = $.forwardRef(({
    name: a,
    className: n,
    ...s
}, r) => {
    const o = $.useId();
    return p.jsx(kb.Provider, {
        value: {
            id: o,
            name: a
        },
        children: p.jsx("div", {
            ref: r,
            className: `${Ms.formItem} ${n||""}`,
            ...s
        })
    })
});
Ir.displayName = "FormItem";
const Kr = $.forwardRef(({
    className: a,
    ...n
}, s) => {
    const {
        formItemId: r,
        error: o
    } = Au();
    return p.jsx("label", {
        ref: s,
        className: `${Ms.formLabel} ${o?Ms.error:""} ${a||""}`,
        htmlFor: r,
        ...n
    })
});
Kr.displayName = "FormLabel";
const Fr = $.forwardRef(({
    className: a,
    ...n
}, s) => {
    const {
        formItemId: r,
        error: o,
        formMessageId: u,
        onBlur: d
    } = Au();
    return p.jsx(lb, {
        ref: s,
        id: r,
        className: `${Ms.formControl} ${o?Ms.error:""} ${a||""}`,
        "aria-invalid": !!o,
        "aria-describedby": o ? u : void 0,
        onBlur: d,
        ...n
    })
});
Fr.displayName = "FormControl";
const QO = $.forwardRef(({
    className: a,
    ...n
}, s) => {
    const {
        formDescriptionId: r
    } = Au();
    return p.jsx("p", {
        ref: s,
        id: r,
        className: `${Ms.formDescription} ${a||""}`,
        ...n
    })
});
QO.displayName = "FormDescription";
const Pr = $.forwardRef(({
    className: a,
    children: n,
    ...s
}, r) => {
    const {
        formMessageId: o,
        error: u
    } = Au(), d = u ? u.message : n;
    return d ? p.jsx("p", {
        ref: r,
        id: o,
        className: `${Ms.formMessage} ${a||""}`,
        ...s,
        children: d
    }) : null
});
Pr.displayName = "FormMessage";
const Db = $.createContext(void 0);

function $O() {
    const a = $.useContext(Db);
    if (!a) throw new Error("useFormContext must be inside <Form>");
    return a
}
const kb = $.createContext(null);

function Au() {
    const a = $O(),
        n = $.useContext(kb);
    if (!n) throw new Error("<FormLabel> and <FormControl> must live inside <FormItem>");
    const {
        id: s,
        name: r
    } = n, o = Bb(a.errors, r), u = typeof o == "string" ? o : void 0;
    return {
        id: s,
        name: r,
        error: u ? {
            message: u
        } : void 0,
        formItemId: `${s}-form-item`,
        formDescriptionId: `${s}-form-item-description`,
        formMessageId: `${s}-form-item-message`,
        onBlur: () => a.validateField(r),
        validateShallow: () => a.validateField(r, {
            shallow: !0
        })
    }
}

function Bb(a, n) {
    const s = n.split(".");
    let r = a;
    for (const o of s) {
        if (r == null) return;
        /^\d+$/.test(o) && Array.isArray(r) ? r = r[+o] : r = r[o]
    }
    return r
}

function nh(a, n, s) {
    const r = n.split("."),
        o = r.pop(),
        u = { ...a
        };
    let d = u;
    for (let m = 0; m < r.length; m++) {
        const v = r[m],
            y = r[m + 1];
        d[v] == null ? d[v] = /^\d+$/.test(y) ? [] : {} : Array.isArray(d[v]) ? d[v] = [...d[v]] : typeof d[v] == "object" && (d[v] = { ...d[v]
        }), d = d[v]
    }
    return /^\d+$/.test(o) && Array.isArray(d) ? d[+o] = s : d[o] = s, u
}

function A0(a, n, s) {
    const r = n.split("."),
        o = r.pop();
    let u = a;
    const d = [];
    for (const m of r) {
        if (u[m] == null) return a;
        d.push({
            parent: u,
            key: m
        }), u = u[m]
    }
    if (u && typeof u == "object" && o in u && (s != null && s.shallow ? typeof u[o] == "string" ? delete u[o] : typeof u[o] == "object" && !Array.isArray(u[o]) && "message" in u[o] && delete u[o].message : delete u[o]), !(s != null && s.shallow))
        for (let m = d.length - 1; m >= 0; m--) {
            const {
                parent: v,
                key: y
            } = d[m], b = v[y], g = b && !Array.isArray(b) && Object.keys(b).length === 0, S = Array.isArray(b) && b.length === 0;
            (g || S) && delete v[y]
        }
    return a
}

function XO(a) {
    return a instanceof ht ? a.strict() : a
}
const IO = "_textarea_1eqdo_2",
    KO = "_noResize_1eqdo_44",
    FO = "_clear_1eqdo_48",
    ah = {
        textarea: IO,
        noResize: KO,
        clear: FO
    },
    Lb = x.forwardRef(({
        className: a,
        disableResize: n = !1,
        variant: s = "default",
        ...r
    }, o) => {
        const u = n ? ah.noResize : "";
        return p.jsx("textarea", {
            ref: o,
            className: `${ah.textarea} ${u} ${ah[s]} ${a||""}`,
            ...r
        })
    });
Lb.displayName = "Textarea";
const Ub = vb({
        name: Qc().min(1, "Name is required"),
        email: Qc().email("Invalid email address"),
        subject: Qc().min(1, "Subject is required"),
        message: Qc().min(1, "Message is required")
    }),
    PO = async (a, n) => {
        const s = Ub.parse(a),
            r = await fetch("/_api/contact/submit", {
                method: "POST",
                body: Re.stringify(s),
                ...n,
                headers: {
                    "Content-Type": "application/json",
                    ...(n == null ? void 0 : n.headers) ? ? {}
                }
            });
        if (!r.ok) {
            const o = Re.parse(await r.text());
            throw new Error(o.error)
        }
        return Re.parse(await r.text())
    },
    JO = ({
        mutationOptions: a
    } = {}) => wT({
        mutationFn: PO,
        ...a
    }),
    WO = "_container_nqsj6_1",
    eR = "_header_nqsj6_8",
    tR = "_title_nqsj6_13",
    nR = "_subtitle_nqsj6_21",
    aR = "_contentWrapper_nqsj6_28",
    iR = "_infoSide_nqsj6_39",
    sR = "_infoCard_nqsj6_47",
    lR = "_infoTitle_nqsj6_52",
    rR = "_infoText_nqsj6_59",
    oR = "_contactDetails_nqsj6_65",
    cR = "_contactItem_nqsj6_72",
    uR = "_iconBox_nqsj6_78",
    fR = "_label_nqsj6_89",
    dR = "_value_nqsj6_96",
    hR = "_socialTitle_nqsj6_106",
    mR = "_socialIcons_nqsj6_112",
    pR = "_socialBtn_nqsj6_117",
    yR = "_circle1_nqsj6_133",
    gR = "_circle2_nqsj6_144",
    vR = "_formSide_nqsj6_155",
    bR = "_form_nqsj6_155",
    _R = "_formGrid_nqsj6_166",
    xR = "_submitBtn_nqsj6_172",
    Ie = {
        container: WO,
        header: eR,
        title: tR,
        subtitle: nR,
        contentWrapper: aR,
        infoSide: iR,
        infoCard: sR,
        infoTitle: lR,
        infoText: rR,
        contactDetails: oR,
        contactItem: cR,
        iconBox: uR,
        label: fR,
        value: dR,
        socialTitle: hR,
        socialIcons: mR,
        socialBtn: pR,
        circle1: yR,
        circle2: gR,
        formSide: vR,
        form: bR,
        formGrid: _R,
        submitBtn: xR
    };

function SR() {
    const a = ZO({
            defaultValues: {
                name: "",
                email: "",
                subject: "",
                message: ""
            },
            schema: Ub
        }),
        {
            mutate: n,
            isPending: s
        } = JO({
            mutationOptions: {
                onSuccess: () => {
                    e0.success("Message sent successfully!", {
                        description: "I'll get back to you as soon as possible."
                    }), a.setValues({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    })
                },
                onError: o => {
                    e0.error("Failed to send message", {
                        description: o.message || "Please try again later."
                    })
                }
            }
        }),
        r = o => {
            n(o)
        };
    return p.jsxs("div", {
        className: Ie.container,
        children: [p.jsxs("div", {
            className: Ie.header,
            children: [p.jsx("h1", {
                className: Ie.title,
                children: "Get In Touch"
            }), p.jsx("p", {
                className: Ie.subtitle,
                children: "Have a project in mind or want to discuss security? I'd love to hear from you."
            })]
        }), p.jsxs("div", {
            className: Ie.contentWrapper,
            children: [p.jsxs("div", {
                className: Ie.infoSide,
                children: [p.jsxs("div", {
                    className: Ie.infoCard,
                    children: [p.jsx("h3", {
                        className: Ie.infoTitle,
                        children: "Contact Information"
                    }), p.jsx("p", {
                        className: Ie.infoText,
                        children: "Feel free to reach out through the form or via my direct contact details."
                    }), p.jsxs("div", {
                        className: Ie.contactDetails,
                        children: [p.jsxs("div", {
                            className: Ie.contactItem,
                            children: [p.jsx("div", {
                                className: Ie.iconBox,
                                children: p.jsx(ub, {
                                    size: 20
                                })
                            }), p.jsxs("div", {
                                children: [p.jsx("span", {
                                    className: Ie.label,
                                    children: "Email"
                                }), p.jsx("a", {
                                    href: "aruphalder934@gmail.com",
                                    className: Ie.value,
                                    children: "aruphalder934@gmail.com"
                                })]
                            })]
                        }), p.jsxs("div", {
                            className: Ie.contactItem,
                            children: [p.jsx("div", {
                                className: Ie.iconBox,
                                children: p.jsx(VA, {
                                    size: 20
                                })
                            }), p.jsxs("div", {
                                children: [p.jsx("span", {
                                    className: Ie.label,
                                    children: "Location"
                                }), p.jsx("span", {
                                    className: Ie.value,
                                    children: "New York, USA (Remote Available)"
                                })]
                            })]
                        })]
                    }), p.jsxs("div", {
                        className: Ie.socials,
                        children: [p.jsx("h4", {
                            className: Ie.socialTitle,
                            children: "Follow Me"
                        }), p.jsxs("div", {
                            className: Ie.socialIcons,
                            children: [p.jsx("a", {
                                href: "https://github.com/Arup-halder9434",
                                className: Ie.socialBtn,
                                "aria-label": "GitHub",
                                children: p.jsx(Eu, {
                                    size: 20
                                })
                            }), p.jsx("a", {
                                href: "https://whatsapp.com/channel/0029VacESNGISTkK7ZQARc1n",
                                className: Ie.socialBtn,
                                "aria-label": "Whatsapp",
                                children: p.jsx(um, {
                                    size: 20
                                })
                            }), p.jsx("a", {
                                href: "https://x.com/aruphalder7694",
                                className: Ie.socialBtn,
                                "aria-label": "Twitter",
                                children: p.jsx(dm, {
                                    size: 20
                                })
                            })]
                        })]
                    })]
                }), p.jsx("div", {
                    className: Ie.circle1
                }), p.jsx("div", {
                    className: Ie.circle2
                })]
            }), p.jsx("div", {
                className: Ie.formSide,
                children: p.jsx(GO, { ...a,
                    children: p.jsxs("form", {
                        onSubmit: a.handleSubmit(r),
                        className: Ie.form,
                        children: [p.jsxs("div", {
                            className: Ie.formGrid,
                            children: [p.jsxs(Ir, {
                                name: "name",
                                children: [p.jsx(Kr, {
                                    children: "Name"
                                }), p.jsx(Fr, {
                                    children: p.jsx(Jr, {
                                        placeholder: "Your name",
                                        value: a.values.name,
                                        onChange: o => a.setValues(u => ({ ...u,
                                            name: o.target.value
                                        }))
                                    })
                                }), p.jsx(Pr, {})]
                            }), p.jsxs(Ir, {
                                name: "email",
                                children: [p.jsx(Kr, {
                                    children: "Email"
                                }), p.jsx(Fr, {
                                    children: p.jsx(Jr, {
                                        type: "email",
                                        placeholder: "your@email.com",
                                        value: a.values.email,
                                        onChange: o => a.setValues(u => ({ ...u,
                                            email: o.target.value
                                        }))
                                    })
                                }), p.jsx(Pr, {})]
                            })]
                        }), p.jsxs(Ir, {
                            name: "subject",
                            children: [p.jsx(Kr, {
                                children: "Subject"
                            }), p.jsx(Fr, {
                                children: p.jsx(Jr, {
                                    placeholder: "What is this regarding?",
                                    value: a.values.subject,
                                    onChange: o => a.setValues(u => ({ ...u,
                                        subject: o.target.value
                                    }))
                                })
                            }), p.jsx(Pr, {})]
                        }), p.jsxs(Ir, {
                            name: "message",
                            children: [p.jsx(Kr, {
                                children: "Message"
                            }), p.jsx(Fr, {
                                children: p.jsx(Lb, {
                                    placeholder: "Tell me about your project or inquiry...",
                                    rows: 5,
                                    value: a.values.message,
                                    onChange: o => a.setValues(u => ({ ...u,
                                        message: o.target.value
                                    }))
                                })
                            }), p.jsx(Pr, {})]
                        }), p.jsx(Bn, {
                            type: "submit",
                            size: "lg",
                            className: Ie.submitBtn,
                            disabled: s,
                            children: s ? "Sending..." : p.jsxs(p.Fragment, {
                                children: ["Send Message ", p.jsx(db, {
                                    size: 18
                                })]
                            })
                        })]
                    })
                })
            })]
        })]
    })
}
const TR = [Ds];

function N0(a) {
    const n = wR(a),
        s = x.forwardRef((r, o) => {
            const {
                children: u,
                ...d
            } = r, m = x.Children.toArray(u), v = m.find(CR);
            if (v) {
                const y = v.props.children,
                    b = m.map(g => g === v ? x.Children.count(y) > 1 ? x.Children.only(null) : x.isValidElement(y) ? y.props.children : null : g);
                return p.jsx(n, { ...d,
                    ref: o,
                    children: x.isValidElement(y) ? x.cloneElement(y, void 0, b) : null
                })
            }
            return p.jsx(n, { ...d,
                ref: o,
                children: u
            })
        });
    return s.displayName = `${a}.Slot`, s
}

function wR(a) {
    const n = x.forwardRef((s, r) => {
        const {
            children: o,
            ...u
        } = s;
        if (x.isValidElement(o)) {
            const d = NR(o),
                m = AR(u, o.props);
            return o.type !== x.Fragment && (m.ref = r ? vu(r, d) : d), x.cloneElement(o, m)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    });
    return n.displayName = `${a}.SlotClone`, n
}
var ER = Symbol("radix.slottable");

function CR(a) {
    return x.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === ER
}

function AR(a, n) {
    const s = { ...n
    };
    for (const r in n) {
        const o = a[r],
            u = n[r];
        /^on[A-Z]/.test(r) ? o && u ? s[r] = (...m) => {
            const v = u(...m);
            return o(...m), v
        } : o && (s[r] = o) : r === "style" ? s[r] = { ...o,
            ...u
        } : r === "className" && (s[r] = [o, u].filter(Boolean).join(" "))
    }
    return { ...a,
        ...s
    }
}

function NR(a) {
    var r, o;
    let n = (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : r.get,
        s = n && "isReactWarning" in n && n.isReactWarning;
    return s ? a.ref : (n = (o = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : o.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}

function jR(a) {
    const n = a + "CollectionProvider",
        [s, r] = bo(n),
        [o, u] = s(n, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        d = R => {
            const {
                scope: A,
                children: j
            } = R, H = $.useRef(null), D = $.useRef(new Map).current;
            return p.jsx(o, {
                scope: A,
                itemMap: D,
                collectionRef: H,
                children: j
            })
        };
    d.displayName = n;
    const m = a + "CollectionSlot",
        v = N0(m),
        y = $.forwardRef((R, A) => {
            const {
                scope: j,
                children: H
            } = R, D = u(m, j), k = da(A, D.collectionRef);
            return p.jsx(v, {
                ref: k,
                children: H
            })
        });
    y.displayName = m;
    const b = a + "CollectionItemSlot",
        g = "data-radix-collection-item",
        S = N0(b),
        T = $.forwardRef((R, A) => {
            const {
                scope: j,
                children: H,
                ...D
            } = R, k = $.useRef(null), I = da(A, k), W = u(b, j);
            return $.useEffect(() => (W.itemMap.set(k, {
                ref: k,
                ...D
            }), () => void W.itemMap.delete(k))), p.jsx(S, {
                [g]: "",
                ref: I,
                children: H
            })
        });
    T.displayName = b;

    function O(R) {
        const A = u(a + "CollectionConsumer", R);
        return $.useCallback(() => {
            const H = A.collectionRef.current;
            if (!H) return [];
            const D = Array.from(H.querySelectorAll(`[${g}]`));
            return Array.from(A.itemMap.values()).sort((W, K) => D.indexOf(W.ref.current) - D.indexOf(K.ref.current))
        }, [A.collectionRef, A.itemMap])
    }
    return [{
        Provider: d,
        Slot: y,
        ItemSlot: T
    }, O, r]
}
var OR = x.createContext(void 0);

function qb(a) {
    const n = x.useContext(OR);
    return a || n || "ltr"
}
var ih = "rovingFocusGroup.onEntryFocus",
    RR = {
        bubbles: !1,
        cancelable: !0
    },
    To = "RovingFocusGroup",
    [Zh, Hb, MR] = jR(To),
    [zR, Vb] = bo(To, [MR]),
    [DR, kR] = zR(To),
    Yb = x.forwardRef((a, n) => p.jsx(Zh.Provider, {
        scope: a.__scopeRovingFocusGroup,
        children: p.jsx(Zh.Slot, {
            scope: a.__scopeRovingFocusGroup,
            children: p.jsx(BR, { ...a,
                ref: n
            })
        })
    }));
Yb.displayName = To;
var BR = x.forwardRef((a, n) => {
        const {
            __scopeRovingFocusGroup: s,
            orientation: r,
            loop: o = !1,
            dir: u,
            currentTabStopId: d,
            defaultCurrentTabStopId: m,
            onCurrentTabStopIdChange: v,
            onEntryFocus: y,
            preventScrollOnEntryFocus: b = !1,
            ...g
        } = a, S = x.useRef(null), T = da(n, S), O = qb(u), [R, A] = I1({
            prop: d,
            defaultProp: m ? ? null,
            onChange: v,
            caller: To
        }), [j, H] = x.useState(!1), D = _o(y), k = Hb(s), I = x.useRef(!1), [W, K] = x.useState(0);
        return x.useEffect(() => {
            const ee = S.current;
            if (ee) return ee.addEventListener(ih, D), () => ee.removeEventListener(ih, D)
        }, [D]), p.jsx(DR, {
            scope: s,
            orientation: r,
            dir: O,
            loop: o,
            currentTabStopId: R,
            onItemFocus: x.useCallback(ee => A(ee), [A]),
            onItemShiftTab: x.useCallback(() => H(!0), []),
            onFocusableItemAdd: x.useCallback(() => K(ee => ee + 1), []),
            onFocusableItemRemove: x.useCallback(() => K(ee => ee - 1), []),
            children: p.jsx(on.div, {
                tabIndex: j || W === 0 ? -1 : 0,
                "data-orientation": r,
                ...g,
                ref: T,
                style: {
                    outline: "none",
                    ...a.style
                },
                onMouseDown: At(a.onMouseDown, () => {
                    I.current = !0
                }),
                onFocus: At(a.onFocus, ee => {
                    const we = !I.current;
                    if (ee.target === ee.currentTarget && we && !j) {
                        const ae = new CustomEvent(ih, RR);
                        if (ee.currentTarget.dispatchEvent(ae), !ae.defaultPrevented) {
                            const ye = k().filter(z => z.focusable),
                                ve = ye.find(z => z.active),
                                be = ye.find(z => z.id === R),
                                Ve = [ve, be, ...ye].filter(Boolean).map(z => z.ref.current);
                            Qb(Ve, b)
                        }
                    }
                    I.current = !1
                }),
                onBlur: At(a.onBlur, () => H(!1))
            })
        })
    }),
    Zb = "RovingFocusGroupItem",
    Gb = x.forwardRef((a, n) => {
        const {
            __scopeRovingFocusGroup: s,
            focusable: r = !0,
            active: o = !1,
            tabStopId: u,
            children: d,
            ...m
        } = a, v = w1(), y = u || v, b = kR(Zb, s), g = b.currentTabStopId === y, S = Hb(s), {
            onFocusableItemAdd: T,
            onFocusableItemRemove: O,
            currentTabStopId: R
        } = b;
        return x.useEffect(() => {
            if (r) return T(), () => O()
        }, [r, T, O]), p.jsx(Zh.ItemSlot, {
            scope: s,
            id: y,
            focusable: r,
            active: o,
            children: p.jsx(on.span, {
                tabIndex: g ? 0 : -1,
                "data-orientation": b.orientation,
                ...m,
                ref: n,
                onMouseDown: At(a.onMouseDown, A => {
                    r ? b.onItemFocus(y) : A.preventDefault()
                }),
                onFocus: At(a.onFocus, () => b.onItemFocus(y)),
                onKeyDown: At(a.onKeyDown, A => {
                    if (A.key === "Tab" && A.shiftKey) {
                        b.onItemShiftTab();
                        return
                    }
                    if (A.target !== A.currentTarget) return;
                    const j = qR(A, b.orientation, b.dir);
                    if (j !== void 0) {
                        if (A.metaKey || A.ctrlKey || A.altKey || A.shiftKey) return;
                        A.preventDefault();
                        let D = S().filter(k => k.focusable).map(k => k.ref.current);
                        if (j === "last") D.reverse();
                        else if (j === "prev" || j === "next") {
                            j === "prev" && D.reverse();
                            const k = D.indexOf(A.currentTarget);
                            D = b.loop ? HR(D, k + 1) : D.slice(k + 1)
                        }
                        setTimeout(() => Qb(D))
                    }
                }),
                children: typeof d == "function" ? d({
                    isCurrentTabStop: g,
                    hasTabStop: R != null
                }) : d
            })
        })
    });
Gb.displayName = Zb;
var LR = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function UR(a, n) {
    return n !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a
}

function qR(a, n, s) {
    const r = UR(a.key, s);
    if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return LR[r]
}

function Qb(a, n = !1) {
    const s = document.activeElement;
    for (const r of a)
        if (r === s || (r.focus({
                preventScroll: n
            }), document.activeElement !== s)) return
}

function HR(a, n) {
    return a.map((s, r) => a[(n + r) % a.length])
}
var VR = Yb,
    YR = Gb,
    Nu = "Tabs",
    [ZR] = bo(Nu, [Vb]),
    $b = Vb(),
    [GR, mm] = ZR(Nu),
    Xb = x.forwardRef((a, n) => {
        const {
            __scopeTabs: s,
            value: r,
            onValueChange: o,
            defaultValue: u,
            orientation: d = "horizontal",
            dir: m,
            activationMode: v = "automatic",
            ...y
        } = a, b = qb(m), [g, S] = I1({
            prop: r,
            onChange: o,
            defaultProp: u ? ? "",
            caller: Nu
        });
        return p.jsx(GR, {
            scope: s,
            baseId: w1(),
            value: g,
            onValueChange: S,
            orientation: d,
            dir: b,
            activationMode: v,
            children: p.jsx(on.div, {
                dir: b,
                "data-orientation": d,
                ...y,
                ref: n
            })
        })
    });
Xb.displayName = Nu;
var Ib = "TabsList",
    Kb = x.forwardRef((a, n) => {
        const {
            __scopeTabs: s,
            loop: r = !0,
            ...o
        } = a, u = mm(Ib, s), d = $b(s);
        return p.jsx(VR, {
            asChild: !0,
            ...d,
            orientation: u.orientation,
            dir: u.dir,
            loop: r,
            children: p.jsx(on.div, {
                role: "tablist",
                "aria-orientation": u.orientation,
                ...o,
                ref: n
            })
        })
    });
Kb.displayName = Ib;
var Fb = "TabsTrigger",
    Pb = x.forwardRef((a, n) => {
        const {
            __scopeTabs: s,
            value: r,
            disabled: o = !1,
            ...u
        } = a, d = mm(Fb, s), m = $b(s), v = e_(d.baseId, r), y = t_(d.baseId, r), b = r === d.value;
        return p.jsx(YR, {
            asChild: !0,
            ...m,
            focusable: !o,
            active: b,
            children: p.jsx(on.button, {
                type: "button",
                role: "tab",
                "aria-selected": b,
                "aria-controls": y,
                "data-state": b ? "active" : "inactive",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                id: v,
                ...u,
                ref: n,
                onMouseDown: At(a.onMouseDown, g => {
                    !o && g.button === 0 && g.ctrlKey === !1 ? d.onValueChange(r) : g.preventDefault()
                }),
                onKeyDown: At(a.onKeyDown, g => {
                    [" ", "Enter"].includes(g.key) && d.onValueChange(r)
                }),
                onFocus: At(a.onFocus, () => {
                    const g = d.activationMode !== "manual";
                    !b && !o && g && d.onValueChange(r)
                })
            })
        })
    });
Pb.displayName = Fb;
var Jb = "TabsContent",
    Wb = x.forwardRef((a, n) => {
        const {
            __scopeTabs: s,
            value: r,
            forceMount: o,
            children: u,
            ...d
        } = a, m = mm(Jb, s), v = e_(m.baseId, r), y = t_(m.baseId, r), b = r === m.value, g = x.useRef(b);
        return x.useEffect(() => {
            const S = requestAnimationFrame(() => g.current = !1);
            return () => cancelAnimationFrame(S)
        }, []), p.jsx(Tu, {
            present: o || b,
            children: ({
                present: S
            }) => p.jsx(on.div, {
                "data-state": b ? "active" : "inactive",
                "data-orientation": m.orientation,
                role: "tabpanel",
                "aria-labelledby": v,
                hidden: !S,
                id: y,
                tabIndex: 0,
                ...d,
                ref: n,
                style: { ...a.style,
                    animationDuration: g.current ? "0s" : void 0
                },
                children: S && u
            })
        })
    });
Wb.displayName = Jb;

function e_(a, n) {
    return `${a}-trigger-${n}`
}

function t_(a, n) {
    return `${a}-content-${n}`
}
var QR = Xb,
    n_ = Kb,
    a_ = Pb,
    i_ = Wb;
const $R = "_tabsList_22vco_2",
    XR = "_tabsTrigger_22vco_16",
    IR = "_tabsContent_22vco_92",
    pm = {
        tabsList: $R,
        tabsTrigger: XR,
        tabsContent: IR
    },
    KR = QR,
    s_ = x.forwardRef(({
        className: a,
        ...n
    }, s) => p.jsx(n_, {
        ref: s,
        className: `${pm.tabsList} ${a||""}`,
        ...n
    }));
s_.displayName = n_.displayName;
const l_ = x.forwardRef(({
    className: a,
    ...n
}, s) => p.jsx(a_, {
    ref: s,
    className: `${pm.tabsTrigger} ${a||""}`,
    ...n
}));
l_.displayName = a_.displayName;
const FR = x.forwardRef(({
    className: a,
    ...n
}, s) => p.jsx(i_, {
    ref: s,
    className: `${pm.tabsContent} ${a||""}`,
    ...n
}));
FR.displayName = i_.displayName;
const PR = "_container_rqfk7_1",
    JR = "_header_rqfk7_8",
    WR = "_title_rqfk7_13",
    e5 = "_subtitle_rqfk7_23",
    t5 = "_controls_rqfk7_30",
    n5 = "_tabs_rqfk7_36",
    a5 = "_tabsList_rqfk7_40",
    i5 = "_tabTrigger_rqfk7_45",
    s5 = "_grid_rqfk7_49",
    l5 = "_skeletonWrapper_rqfk7_55",
    r5 = "_emptyState_rqfk7_60",
    Mn = {
        container: PR,
        header: JR,
        title: WR,
        subtitle: e5,
        controls: t5,
        tabs: n5,
        tabsList: a5,
        tabTrigger: i5,
        grid: s5,
        skeletonWrapper: l5,
        emptyState: r5
    };

function o5() {
    const [a, n] = x.useState("all"), s = a === "all" ? {} : {
        category: a
    }, {
        data: r,
        isLoading: o
    } = zb({
        filters: s
    }), u = [{
        id: "all",
        label: "All Projects"
    }, {
        id: "cybersecurity",
        label: "Cybersecurity"
    }, {
        id: "Network_Security",
        label: "Protected Network"
    }, {
        id: "automation",
        label: "OSINT & Recon"
    }];
    return p.jsxs("div", {
        className: Mn.container,
        children: [p.jsxs("div", {
            className: Mn.header,
            children: [p.jsx("h1", {
                className: Mn.title,
                children: "My Projects"
            }), p.jsx("p", {
                className: Mn.subtitle,
                children: "A collection of my work in cybersecurity, penetration testing, bug bounty hunting, and OSINT."
            })]
        }), p.jsx("div", {
            className: Mn.controls,
            children: p.jsx(KR, {
                defaultValue: "all",
                value: a,
                onValueChange: n,
                className: Mn.tabs,
                children: p.jsx(s_, {
                    "data-variant": "pill",
                    className: Mn.tabsList,
                    children: u.map(d => p.jsx(l_, {
                        value: d.id,
                        className: Mn.tabTrigger,
                        children: d.label
                    }, d.id))
                })
            })
        }), o ? p.jsx("div", {
            className: Mn.grid,
            children: [1, 2, 3, 4, 5, 6].map(d => p.jsxs("div", {
                className: Mn.skeletonWrapper,
                children: [p.jsx(ra, {
                    style: {
                        height: "200px",
                        width: "100%",
                        borderRadius: "var(--radius) var(--radius) 0 0"
                    }
                }), p.jsxs("div", {
                    style: {
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                        borderTop: "none",
                        borderRadius: "0 0 var(--radius) var(--radius)"
                    },
                    children: [p.jsx(ra, {
                        style: {
                            height: "24px",
                            width: "60%",
                            marginBottom: "1rem"
                        }
                    }), p.jsx(ra, {
                        style: {
                            height: "16px",
                            width: "100%",
                            marginBottom: "0.5rem"
                        }
                    }), p.jsx(ra, {
                        style: {
                            height: "16px",
                            width: "90%",
                            marginBottom: "1rem"
                        }
                    }), p.jsxs("div", {
                        style: {
                            display: "flex",
                            gap: "0.5rem"
                        },
                        children: [p.jsx(ra, {
                            style: {
                                height: "20px",
                                width: "50px"
                            }
                        }), p.jsx(ra, {
                            style: {
                                height: "20px",
                                width: "50px"
                            }
                        })]
                    })]
                })]
            }, d))
        }) : p.jsx(p.Fragment, {
            children: r && r.length > 0 ? p.jsx("div", {
                className: Mn.grid,
                children: r.map(d => p.jsx(mb, {
                    project: d
                }, d.id))
            }) : p.jsx("div", {
                className: Mn.emptyState,
                children: p.jsx("p", {
                    children: "No projects found in this category."
                })
            })
        })]
    })
}
const c5 = [Ds],
    u5 = "_container_44zrr_1",
    f5 = "_header_44zrr_8",
    d5 = "_title_44zrr_16",
    h5 = "_subtitle_44zrr_26",
    m5 = "_servicesGrid_44zrr_32",
    p5 = "_serviceCard_44zrr_38",
    y5 = "_iconContainer_44zrr_72",
    g5 = "_serviceTitle_44zrr_91",
    v5 = "_serviceDescription_44zrr_99",
    b5 = "_deliverablesContainer_44zrr_107",
    _5 = "_deliverablesTitle_44zrr_114",
    x5 = "_deliverablesList_44zrr_123",
    S5 = "_deliverableItem_44zrr_132",
    T5 = "_checkIcon_44zrr_140",
    w5 = "_cardFooter_44zrr_145",
    E5 = "_ctaButton_44zrr_149",
    Lt = {
        container: u5,
        header: f5,
        title: d5,
        subtitle: h5,
        servicesGrid: m5,
        serviceCard: p5,
        iconContainer: y5,
        serviceTitle: g5,
        serviceDescription: v5,
        deliverablesContainer: b5,
        deliverablesTitle: _5,
        deliverablesList: x5,
        deliverableItem: S5,
        checkIcon: T5,
        cardFooter: w5,
        ctaButton: E5
    };

function C5() {
    const a = [{
        id: "consulting",
        title: "Cybersecurity Consulting",
        description: "Comprehensive security strategies tailored to your business needs. I help organizations identify risks and implement robust defense mechanisms.",
        icon: p.jsx(fm, {
            size: 32
        }),
        deliverables: ["Security Risk Assessment", "Compliance Guidance (GDPR, ISO)", "Security Architecture Review", "Incident Response Planning"]
    }, {
        id: "web-security",
        title: "Website Security",
        description: "Protect your web assets from malicious attacks. I perform thorough assessments to find and fix vulnerabilities before hackers exploit them.",
        icon: p.jsx(cb, {
            size: 32
        }),
        deliverables: ["Vulnerability Assessment", "Penetration Testing", "Security Hardening", "SSL/TLS Configuration"]
    }, {
        id: "ethical-hacking",
        title: "Ethical Hacking",
        description: "Simulated cyberattacks to test your defenses. I use the same tools and techniques as malicious hackers to expose weak points.",
        icon: p.jsx(Wc, {
            size: 32
        }),
        deliverables: ["Black Box Testing", "Red Team Exercises", "Social Engineering Tests", "Detailed Remediation Reports"]
    }, {
        id: "web-dev",
        title: "Secure Web Development",
        description: "Building high-performance websites with security baked in from the start. No more choosing between speed, aesthetics, and safety.",
        icon: p.jsx(Jc, {
            size: 32
        }),
        deliverables: ["Full-Stack Development", "Secure Coding Practices", "Performance Optimization", "Modern UI/UX Design"]
    }];
    return p.jsxs("div", {
        className: Lt.container,
        children: [p.jsxs("header", {
            className: Lt.header,
            children: [p.jsx("h1", {
                className: Lt.title,
                children: "Services"
            }), p.jsx("p", {
                className: Lt.subtitle,
                children: "Specialized services to secure your digital infrastructure and build resilient web applications."
            })]
        }), p.jsx("div", {
            className: Lt.servicesGrid,
            children: a.map(n => p.jsxs("div", {
                className: Lt.serviceCard,
                children: [p.jsx("div", {
                    className: Lt.iconContainer,
                    children: n.icon
                }), p.jsx("h2", {
                    className: Lt.serviceTitle,
                    children: n.title
                }), p.jsx("p", {
                    className: Lt.serviceDescription,
                    children: n.description
                }), p.jsxs("div", {
                    className: Lt.deliverablesContainer,
                    children: [p.jsx("h3", {
                        className: Lt.deliverablesTitle,
                        children: "What you get:"
                    }), p.jsx("ul", {
                        className: Lt.deliverablesList,
                        children: n.deliverables.map((s, r) => p.jsxs("li", {
                            className: Lt.deliverableItem,
                            children: [p.jsx(vA, {
                                size: 16,
                                className: Lt.checkIcon
                            }), p.jsx("span", {
                                children: s
                            })]
                        }, r))
                    })]
                }), p.jsx("div", {
                    className: Lt.cardFooter,
                    children: p.jsx(Bn, {
                        asChild: !0,
                        className: Lt.ctaButton,
                        children: p.jsxs(As, {
                            to: "/contact",
                            children: ["Get Started ", p.jsx(ob, {
                                size: 16
                            })]
                        })
                    })
                })]
            }, n.id))
        })]
    })
}
const A5 = [Ds],
    N5 = "_container_9xv4g_1",
    j5 = "_header_9xv4g_8",
    O5 = "_title_9xv4g_16",
    R5 = "_subtitle_9xv4g_26",
    M5 = "_grid_9xv4g_32",
    z5 = "_card_9xv4g_38",
    D5 = "_cardHeader_9xv4g_56",
    k5 = "_iconWrapper_9xv4g_63",
    B5 = "_certification_9xv4g_73",
    L5 = "_award_9xv4g_78",
    U5 = "_hackathon_9xv4g_83",
    q5 = "_bugbounty_9xv4g_88",
    H5 = "_cardContent_9xv4g_93",
    V5 = "_cardTitle_9xv4g_98",
    Y5 = "_issuer_9xv4g_106",
    Z5 = "_cardDescription_9xv4g_114",
    G5 = "_cardFooter_9xv4g_121",
    Q5 = "_date_9xv4g_129",
    $5 = "_starIcon_9xv4g_135",
    Ut = {
        container: N5,
        header: j5,
        title: O5,
        subtitle: R5,
        grid: M5,
        card: z5,
        cardHeader: D5,
        iconWrapper: k5,
        certification: B5,
        award: L5,
        hackathon: U5,
        bugbounty: q5,
        cardContent: H5,
        cardTitle: V5,
        issuer: Y5,
        cardDescription: Z5,
        cardFooter: G5,
        date: Q5,
        starIcon: $5
    };

function X5() {
    const a = [{
            id: "cert-1",
            title: "Certified Ethical Hacker (CEH)",
            description: "Mastered the latest ethical hacking tools and methodologies.",
            date: "2023",
            category: "Certification",
            issuer: "EC-Council",
            icon: p.jsx(Gc, {
                size: 24
            })
        }, {
            id: "cert-2",
            title: "OSCP (Offensive Security Certified Professional)",
            description: "Demonstrated practical understanding of penetration testing process and lifecycle.",
            date: "2022",
            category: "Certification",
            issuer: "OffSec",
            icon: p.jsx(Gc, {
                size: 24
            })
        }, {
            id: "cert-3",
            title: "AWS Certified Solutions Architect",
            description: "Validated expertise in designing distributed systems on AWS.",
            date: "2023",
            category: "Certification",
            issuer: "Amazon Web Services",
            icon: p.jsx(Gc, {
                size: 24
            })
        }, {
            id: "cert-4",
            title: "CompTIA Security+",
            description: "Core knowledge required of any cybersecurity role.",
            date: "2021",
            category: "Certification",
            issuer: "CompTIA",
            icon: p.jsx(Gc, {
                size: 24
            })
        }, {
            id: "award-1",
            title: "Best Security Researcher 2023",
            description: "Awarded for outstanding contributions to the open source security community.",
            date: "Dec 2023",
            category: "Award",
            issuer: "CyberSec Global",
            icon: p.jsx(fN, {
                size: 24
            })
        }, {
            id: "hack-1",
            title: "Global Cyber Hackathon Winner",
            description: "Secured 1st place among 500+ participants in the CTF challenge.",
            date: "Nov 2023",
            category: "Hackathon",
            icon: p.jsx(s0, {
                size: 24
            })
        }, {
            id: "hack-2",
            title: "DefCon Red Team Challenge",
            description: "Top 10 finalist in the prestigious red teaming event.",
            date: "Aug 2023",
            category: "Hackathon",
            icon: p.jsx(s0, {
                size: 24
            })
        }, {
            id: "bounty-1",
            title: "Google Hall of Fame",
            description: "Acknowledged for discovering a critical XSS vulnerability in Google Cloud Console.",
            date: "2023",
            category: "Bug Bounty",
            icon: p.jsx(Pc, {
                size: 24
            })
        }, {
            id: "bounty-2",
            title: "Microsoft Security Response Center",
            description: "Recognized for responsible disclosure of an authentication bypass issue.",
            date: "2022",
            category: "Bug Bounty",
            icon: p.jsx(Pc, {
                size: 24
            })
        }, {
            id: "bounty-3",
            title: "Meta Whitehat Program",
            description: "Awarded bounty for identifying a privacy leak in Instagram API.",
            date: "2022",
            category: "Bug Bounty",
            icon: p.jsx(Pc, {
                size: 24
            })
        }],
        n = s => {
            switch (s) {
                case "Certification":
                    return "default";
                case "Award":
                    return "warning";
                case "Hackathon":
                    return "secondary";
                case "Bug Bounty":
                    return "destructive";
                default:
                    return "outline"
            }
        };
    return p.jsxs("div", {
        className: Ut.container,
        children: [p.jsxs("header", {
            className: Ut.header,
            children: [p.jsx("h1", {
                className: Ut.title,
                children: "Achievements"
            }), p.jsx("p", {
                className: Ut.subtitle,
                children: "A timeline of my professional milestones, certifications, and recognitions in the field of cybersecurity and development."
            })]
        }), p.jsx("div", {
            className: Ut.grid,
            children: a.map(s => p.jsxs("div", {
                className: Ut.card,
                children: [p.jsxs("div", {
                    className: Ut.cardHeader,
                    children: [p.jsx("div", {
                        className: `${Ut.iconWrapper} ${Ut[s.category.replace(/\s+/g,"").toLowerCase()]}`,
                        children: s.icon
                    }), p.jsx(hb, {
                        variant: n(s.category),
                        children: s.category
                    })]
                }), p.jsxs("div", {
                    className: Ut.cardContent,
                    children: [p.jsx("h3", {
                        className: Ut.cardTitle,
                        children: s.title
                    }), s.issuer && p.jsxs("span", {
                        className: Ut.issuer,
                        children: ["Issued by ", s.issuer]
                    }), p.jsx("p", {
                        className: Ut.cardDescription,
                        children: s.description
                    })]
                }), p.jsxs("div", {
                    className: Ut.cardFooter,
                    children: [p.jsx("span", {
                        className: Ut.date,
                        children: s.date
                    }), p.jsx(iN, {
                        size: 16,
                        className: Ut.starIcon
                    })]
                })]
            }, s.id))
        })]
    })
}
const I5 = [Ds];
window.requestIdleCallback || (window.requestIdleCallback = a => {
    setTimeout(a, 1)
});
const K5 = new Map([
        ["./pages/about.tsx", "/about"],
        ["./pages/tools.tsx", "/tools"],
        ["./pages/_index.tsx", "/"],
        ["./pages/contact.tsx", "/contact"],
        ["./pages/projects.tsx", "/projects"],
        ["./pages/services.tsx", "/services"],
        ["./pages/achievements.tsx", "/achievements"]
    ]),
    F5 = new Map([
        ["./pages/about.tsx", e4],
        ["./pages/tools.tsx", xj],
        ["./pages/_index.tsx", kO],
        ["./pages/contact.tsx", SR],
        ["./pages/projects.tsx", o5],
        ["./pages/services.tsx", C5],
        ["./pages/achievements.tsx", X5]
    ]);

function P5(a) {
    const n = F5.get(a);
    return p.jsx(n, {})
}

function r_({
    trie: a,
    fileNameToRoute: n,
    makePageRoute: s
}) {
    return [...a.topLevel.map(r => p.jsx(au, {
        path: n.get(r),
        element: s(r)
    }, n.get(r))), ...Array.from(a.trie.entries()).map(([r, o], u) => p.jsx(au, {
        element: p.jsx(r, {
            children: p.jsx(jS, {})
        }),
        children: r_({
            trie: o,
            fileNameToRoute: n,
            makePageRoute: s
        })
    }, u))]
}

function J5(a) {
    const n = {
        topLevel: [],
        trie: new Map
    };
    return Object.entries(a).forEach(([s, r]) => {
        let o = n;
        for (const u of r) o.trie.has(u) || o.trie.set(u, {
            topLevel: [],
            trie: new Map
        }), o = o.trie.get(u);
        o.topLevel.push(s)
    }), n
}

function W5() {
    return p.jsxs("div", {
        children: [p.jsx("h1", {
            children: "Not Found"
        }), p.jsx("p", {
            children: "The page you are looking for does not exist."
        }), p.jsxs("p", {
            children: ["Go back to the ", p.jsx("a", {
                href: "/",
                style: {
                    color: "blue"
                },
                children: "home page"
            }), "."]
        })]
    })
}

function e6() {
    return p.jsx(US, {
        children: p.jsx(BC, {
            children: p.jsxs(RS, {
                children: [r_({
                    trie: J5({
                        "./pages/about.tsx": aj,
                        "./pages/tools.tsx": Sj,
                        "./pages/_index.tsx": BO,
                        "./pages/contact.tsx": TR,
                        "./pages/projects.tsx": c5,
                        "./pages/services.tsx": A5,
                        "./pages/achievements.tsx": I5
                    }),
                    fileNameToRoute: K5,
                    makePageRoute: P5
                }), p.jsx(au, {
                    path: "*",
                    element: p.jsx(W5, {})
                })]
            })
        })
    })
}
var o_ = (a => (a.BASE = "base", a.BODY = "body", a.HEAD = "head", a.HTML = "html", a.LINK = "link", a.META = "meta", a.NOSCRIPT = "noscript", a.SCRIPT = "script", a.STYLE = "style", a.TITLE = "title", a.FRAGMENT = "Symbol(react.fragment)", a))(o_ || {}),
    sh = {
        link: {
            rel: ["amphtml", "canonical", "alternate"]
        },
        script: {
            type: ["application/ld+json"]
        },
        meta: {
            charset: "",
            name: ["generator", "robots", "description"],
            property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
        }
    };
Object.values(o_);
var ym = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};
Object.entries(ym).reduce((a, [n, s]) => (a[s] = n, a), {});
var fo = "data-rh",
    t6 = a => Array.isArray(a) ? a.join("") : a,
    n6 = (a, n) => {
        const s = Object.keys(a);
        for (let r = 0; r < s.length; r += 1)
            if (n[s[r]] && n[s[r]].includes(a[s[r]])) return !0;
        return !1
    },
    lh = (a, n) => Array.isArray(a) ? a.reduce((s, r) => (n6(r, n) ? s.priority.push(r) : s.default.push(r), s), {
        priority: [],
        default: []
    }) : {
        default: a,
        priority: []
    },
    a6 = ["noscript", "script", "style"],
    Gh = (a, n = !0) => n === !1 ? String(a) : String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"),
    c_ = a => Object.keys(a).reduce((n, s) => {
        const r = typeof a[s] < "u" ? `${s}="${a[s]}"` : `${s}`;
        return n ? `${n} ${r}` : r
    }, ""),
    i6 = (a, n, s, r) => {
        const o = c_(s),
            u = t6(n);
        return o ? `<${a} ${fo}="true" ${o}>${Gh(u,r)}</${a}>` : `<${a} ${fo}="true">${Gh(u,r)}</${a}>`
    },
    s6 = (a, n, s = !0) => n.reduce((r, o) => {
        const u = o,
            d = Object.keys(u).filter(y => !(y === "innerHTML" || y === "cssText")).reduce((y, b) => {
                const g = typeof u[b] > "u" ? b : `${b}="${Gh(u[b],s)}"`;
                return y ? `${y} ${g}` : g
            }, ""),
            m = u.innerHTML || u.cssText || "",
            v = a6.indexOf(a) === -1;
        return `${r}<${a} ${fo}="true" ${d}${v?"/>":`>${m}</${a}>`}`
    }, ""),
    u_ = (a, n = {}) => Object.keys(a).reduce((s, r) => {
        const o = ym[r];
        return s[o || r] = a[r], s
    }, n),
    l6 = (a, n, s) => {
        const r = {
                key: n,
                [fo]: !0
            },
            o = u_(s, r);
        return [$.createElement("title", o, n)]
    },
    tu = (a, n) => n.map((s, r) => {
        const o = {
            key: r,
            [fo]: !0
        };
        return Object.keys(s).forEach(u => {
            const m = ym[u] || u;
            if (m === "innerHTML" || m === "cssText") {
                const v = s.innerHTML || s.cssText;
                o.dangerouslySetInnerHTML = {
                    __html: v
                }
            } else o[m] = s[u]
        }), $.createElement(a, o)
    }),
    zn = (a, n, s = !0) => {
        switch (a) {
            case "title":
                return {
                    toComponent: () => l6(a, n.title, n.titleAttributes),
                    toString: () => i6(a, n.title, n.titleAttributes, s)
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: () => u_(n),
                    toString: () => c_(n)
                };
            default:
                return {
                    toComponent: () => tu(a, n),
                    toString: () => s6(a, n, s)
                }
        }
    },
    r6 = ({
        metaTags: a,
        linkTags: n,
        scriptTags: s,
        encode: r
    }) => {
        const o = lh(a, sh.meta),
            u = lh(n, sh.link),
            d = lh(s, sh.script);
        return {
            priorityMethods: {
                toComponent: () => [...tu("meta", o.priority), ...tu("link", u.priority), ...tu("script", d.priority)],
                toString: () => `${zn("meta",o.priority,r)} ${zn("link",u.priority,r)} ${zn("script",d.priority,r)}`
            },
            metaTags: o.default,
            linkTags: u.default,
            scriptTags: d.default
        }
    },
    o6 = a => {
        const {
            baseTag: n,
            bodyAttributes: s,
            encode: r = !0,
            htmlAttributes: o,
            noscriptTags: u,
            styleTags: d,
            title: m = "",
            titleAttributes: v,
            prioritizeSeoTags: y
        } = a;
        let {
            linkTags: b,
            metaTags: g,
            scriptTags: S
        } = a, T = {
            toComponent: () => {},
            toString: () => ""
        };
        return y && ({
            priorityMethods: T,
            linkTags: b,
            metaTags: g,
            scriptTags: S
        } = r6(a)), {
            priority: T,
            base: zn("base", n, r),
            bodyAttributes: zn("bodyAttributes", s, r),
            htmlAttributes: zn("htmlAttributes", o, r),
            link: zn("link", b, r),
            meta: zn("meta", g, r),
            noscript: zn("noscript", u, r),
            script: zn("script", S, r),
            style: zn("style", d, r),
            title: zn("title", {
                title: m,
                titleAttributes: v
            }, r)
        }
    },
    c6 = o6,
    $c = [],
    f_ = !!(typeof window < "u" && window.document && window.document.createElement),
    u6 = class {
        constructor(a, n) {
            ms(this, "instances", []);
            ms(this, "canUseDOM", f_);
            ms(this, "context");
            ms(this, "value", {
                setHelmet: a => {
                    this.context.helmet = a
                },
                helmetInstances: {
                    get: () => this.canUseDOM ? $c : this.instances,
                    add: a => {
                        (this.canUseDOM ? $c : this.instances).push(a)
                    },
                    remove: a => {
                        const n = (this.canUseDOM ? $c : this.instances).indexOf(a);
                        (this.canUseDOM ? $c : this.instances).splice(n, 1)
                    }
                }
            });
            this.context = a, this.canUseDOM = n || !1, n || (a.helmet = c6({
                baseTag: [],
                bodyAttributes: {},
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            }))
        }
    },
    f6 = {},
    d6 = $.createContext(f6),
    Cs, h6 = (Cs = class extends x.Component {
        constructor(s) {
            super(s);
            ms(this, "helmetData");
            this.helmetData = new u6(this.props.context || {}, Cs.canUseDOM)
        }
        render() {
            return $.createElement(d6.Provider, {
                value: this.helmetData.value
            }, this.props.children)
        }
    }, ms(Cs, "canUseDOM", f_), Cs);
window.requestIdleCallback || (window.requestIdleCallback = a => {
    setTimeout(a, 1)
});
window.cancelIdleCallback || (window.cancelIdleCallback = a => {
    clearTimeout(a)
});
const m6 = document.getElementById("root");
U2.createRoot(m6).render(p.jsx(h6, {
    children: p.jsx(e6, {})
}));