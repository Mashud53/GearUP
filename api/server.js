var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.cloneElement = function(element, config2, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config2)
        for (propName in void 0 !== config2.key && (key = "" + config2.key), config2)
          !hasOwnProperty.call(config2, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config2.ref || (props[propName] = config2[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config2, children) {
      var propName, props = {}, key = null;
      if (null != config2)
        for (propName in void 0 !== config2.key && (key = "" + config2.key), config2)
          hasOwnProperty.call(config2, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config2[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.2.7";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config2) {
        if (hasOwnProperty.call(config2, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config2.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config2, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config2) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config2, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config2,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config2.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key);
          for (propName in config2)
            !hasOwnProperty.call(config2, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config2.ref || (props[propName] = config2[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config2, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config2)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config2) || "key" in config2 || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key), config2)
            hasOwnProperty.call(config2, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config2[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.7";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production();
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/app.ts
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

// src/config/index.ts
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
var config_default = {
  port: process.env.PORT || 3e3,
  database_url: process.env.DATABASE_URL,
  app_url: process.env.APP_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  stripe_product_key: process.env.STRIPE_PRODUCT_KEY,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET
};

// src/modules/users/user.route.ts
import { Router } from "express";

// src/modules/users/user.service.ts
import bcrypt from "bcryptjs";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
import "process";
import * as path2 from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/client";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": 'enum Role {\n  USER\n  PROVIDER\n  ADMIN\n}\n\nenum RentStatus {\n  PENDING\n  APPROVED\n  REJECTED\n  RETURNED\n  CANCELLED\n}\n\nmodel Gear {\n  id          String  @id @default(uuid())\n  name        String\n  description String\n  price       Float\n  category    String  @db.VarChar(100)\n  brand       String  @db.VarChar(100)\n  available   Boolean @default(true)\n  stock       Int     @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  rentals Rental[]\n  reviews Review[]\n\n  @@map("gears")\n}\n\nmodel Payment {\n  id            String @id @default(uuid())\n  rentalId      String\n  transactionId String @unique\n  amount        Float\n  status        String @default("PENDING")\n  rental        Rental @relation(fields: [rentalId], references: [id])\n\n  createdAt DateTime @default(now())\n}\n\nmodel Profile {\n  id           String  @id @default(uuid())\n  profilePhoto String?\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  @@map("profiles")\n}\n\nmodel Rental {\n  id          String     @id @default(uuid())\n  userId      String\n  gearId      String\n  totalAmount Float\n  status      RentStatus @default(PENDING)\n\n  user User @relation(fields: [userId], references: [id])\n  gear Gear @relation(fields: [gearId], references: [id])\n\n  payments Payment[]\n}\n\nmodel Review {\n  id        String   @id @default(uuid())\n  rating    Int\n  comment   String\n  userId    String\n  gearId    String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  gear Gear @relation(fields: [gearId], references: [id], onDelete: Cascade)\n\n  @@map("reviews")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id       String @id @default(uuid())\n  name     String @db.VarChar(255)\n  email    String @unique\n  password String\n  role     Role?  @default(USER)\n  status   String @default("ACTIVE")\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  profile Profile?\n  rentals Rental[]\n  reviews Review[]\n\n  @@map("users")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Gear":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"category","kind":"scalar","type":"String"},{"name":"brand","kind":"scalar","type":"String"},{"name":"available","kind":"scalar","type":"Boolean"},{"name":"stock","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"rentals","kind":"object","type":"Rental","relationName":"GearToRental"},{"name":"reviews","kind":"object","type":"Review","relationName":"GearToReview"}],"dbName":"gears"},"Payment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rentalId","kind":"scalar","type":"String"},{"name":"transactionId","kind":"scalar","type":"String"},{"name":"amount","kind":"scalar","type":"Float"},{"name":"status","kind":"scalar","type":"String"},{"name":"rental","kind":"object","type":"Rental","relationName":"PaymentToRental"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Profile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ProfileToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"profiles"},"Rental":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"gearId","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"RentStatus"},{"name":"user","kind":"object","type":"User","relationName":"RentalToUser"},{"name":"gear","kind":"object","type":"Gear","relationName":"GearToRental"},{"name":"payments","kind":"object","type":"Payment","relationName":"PaymentToRental"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"gearId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"gear","kind":"object","type":"Gear","relationName":"GearToReview"}],"dbName":"reviews"},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"profile","kind":"object","type":"Profile","relationName":"ProfileToUser"},{"name":"rentals","kind":"object","type":"Rental","relationName":"RentalToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"}],"dbName":"users"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","profile","rentals","gear","reviews","_count","rental","payments","Gear.findUnique","Gear.findUniqueOrThrow","Gear.findFirst","Gear.findFirstOrThrow","Gear.findMany","data","Gear.createOne","Gear.createMany","Gear.createManyAndReturn","Gear.updateOne","Gear.updateMany","Gear.updateManyAndReturn","create","update","Gear.upsertOne","Gear.deleteOne","Gear.deleteMany","having","_avg","_sum","_min","_max","Gear.groupBy","Gear.aggregate","Payment.findUnique","Payment.findUniqueOrThrow","Payment.findFirst","Payment.findFirstOrThrow","Payment.findMany","Payment.createOne","Payment.createMany","Payment.createManyAndReturn","Payment.updateOne","Payment.updateMany","Payment.updateManyAndReturn","Payment.upsertOne","Payment.deleteOne","Payment.deleteMany","Payment.groupBy","Payment.aggregate","Profile.findUnique","Profile.findUniqueOrThrow","Profile.findFirst","Profile.findFirstOrThrow","Profile.findMany","Profile.createOne","Profile.createMany","Profile.createManyAndReturn","Profile.updateOne","Profile.updateMany","Profile.updateManyAndReturn","Profile.upsertOne","Profile.deleteOne","Profile.deleteMany","Profile.groupBy","Profile.aggregate","Rental.findUnique","Rental.findUniqueOrThrow","Rental.findFirst","Rental.findFirstOrThrow","Rental.findMany","Rental.createOne","Rental.createMany","Rental.createManyAndReturn","Rental.updateOne","Rental.updateMany","Rental.updateManyAndReturn","Rental.upsertOne","Rental.deleteOne","Rental.deleteMany","Rental.groupBy","Rental.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","AND","OR","NOT","id","name","email","password","Role","role","status","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","every","some","none","rating","comment","userId","gearId","totalAmount","RentStatus","profilePhoto","rentalId","transactionId","amount","description","price","category","brand","available","stock","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "9QI8YA8FAACzAQAgBwAAtAEAIHMAAMsBADB0AAAZABB1AADLAQAwdgEAAAABdwEArwEAIX1AALEBACF-QACxAQAhlwEBAK8BACGYAQgAzAEAIZkBAQCvAQAhmgEBAK8BACGbASAAzQEAIZwBAgDOAQAhAQAAAAEAIAsDAADFAQAgBgAA0gEAIAoAANUBACBzAADTAQAwdAAAAwAQdQAA0wEAMHYBAK8BACF8AADUAZMBIo8BAQCvAQAhkAEBAK8BACGRAQgAzAEAIQMDAACsAgAgBgAA0QIAIAoAANICACALAwAAxQEAIAYAANIBACAKAADVAQAgcwAA0wEAMHQAAAMAEHUAANMBADB2AQAAAAF8AADUAZMBIo8BAQCvAQAhkAEBAK8BACGRAQgAzAEAIQMAAAADACABAAAEADACAAAFACAJAwAAxQEAIHMAAMMBADB0AAAHABB1AADDAQAwdgEArwEAIX1AALEBACF-QACxAQAhjwEBAK8BACGTAQEAxAEAIQEAAAAHACADAAAAAwAgAQAABAAwAgAABQAgDAMAAMUBACAGAADSAQAgcwAA0QEAMHQAAAoAEHUAANEBADB2AQCvAQAhfUAAsQEAIX5AALEBACGNAQIAzgEAIY4BAQCvAQAhjwEBAK8BACGQAQEArwEAIQIDAACsAgAgBgAA0QIAIAwDAADFAQAgBgAA0gEAIHMAANEBADB0AAAKABB1AADRAQAwdgEAAAABfUAAsQEAIX5AALEBACGNAQIAzgEAIY4BAQCvAQAhjwEBAK8BACGQAQEArwEAIQMAAAAKACABAAALADACAAAMACABAAAAAwAgAQAAAAoAIAoJAADQAQAgcwAAzwEAMHQAABAAEHUAAM8BADB2AQCvAQAhfAEArwEAIX1AALEBACGUAQEArwEAIZUBAQCvAQAhlgEIAMwBACEBCQAA0AIAIAoJAADQAQAgcwAAzwEAMHQAABAAEHUAAM8BADB2AQAAAAF8AQCvAQAhfUAAsQEAIZQBAQCvAQAhlQEBAAAAAZYBCADMAQAhAwAAABAAIAEAABEAMAIAABIAIAEAAAAQACADAAAACgAgAQAACwAwAgAADAAgAQAAAAMAIAEAAAAKACABAAAAAQAgDwUAALMBACAHAAC0AQAgcwAAywEAMHQAABkAEHUAAMsBADB2AQCvAQAhdwEArwEAIX1AALEBACF-QACxAQAhlwEBAK8BACGYAQgAzAEAIZkBAQCvAQAhmgEBAK8BACGbASAAzQEAIZwBAgDOAQAhAgUAAJcCACAHAACYAgAgAwAAABkAIAEAABoAMAIAAAEAIAMAAAAZACABAAAaADACAAABACADAAAAGQAgAQAAGgAwAgAAAQAgDAUAAM4CACAHAADPAgAgdgEAAAABdwEAAAABfUAAAAABfkAAAAABlwEBAAAAAZgBCAAAAAGZAQEAAAABmgEBAAAAAZsBIAAAAAGcAQIAAAABARAAAB4AIAp2AQAAAAF3AQAAAAF9QAAAAAF-QAAAAAGXAQEAAAABmAEIAAAAAZkBAQAAAAGaAQEAAAABmwEgAAAAAZwBAgAAAAEBEAAAIAAwARAAACAAMAwFAAC6AgAgBwAAuwIAIHYBANoBACF3AQDaAQAhfUAA3AEAIX5AANwBACGXAQEA2gEAIZgBCAD5AQAhmQEBANoBACGaAQEA2gEAIZsBIAC5AgAhnAECAOoBACECAAAAAQAgEAAAIwAgCnYBANoBACF3AQDaAQAhfUAA3AEAIX5AANwBACGXAQEA2gEAIZgBCAD5AQAhmQEBANoBACGaAQEA2gEAIZsBIAC5AgAhnAECAOoBACECAAAAGQAgEAAAJQAgAgAAABkAIBAAACUAIAMAAAABACAXAAAeACAYAAAjACABAAAAAQAgAQAAABkAIAUIAAC0AgAgHQAAtQIAIB4AALgCACAfAAC3AgAgIAAAtgIAIA1zAADHAQAwdAAALAAQdQAAxwEAMHYBAKMBACF3AQCjAQAhfUAApQEAIX5AAKUBACGXAQEAowEAIZgBCAC6AQAhmQEBAKMBACGaAQEAowEAIZsBIADIAQAhnAECALYBACEDAAAAGQAgAQAAKwAwHAAALAAgAwAAABkAIAEAABoAMAIAAAEAIAEAAAASACABAAAAEgAgAwAAABAAIAEAABEAMAIAABIAIAMAAAAQACABAAARADACAAASACADAAAAEAAgAQAAEQAwAgAAEgAgBwkAALMCACB2AQAAAAF8AQAAAAF9QAAAAAGUAQEAAAABlQEBAAAAAZYBCAAAAAEBEAAANAAgBnYBAAAAAXwBAAAAAX1AAAAAAZQBAQAAAAGVAQEAAAABlgEIAAAAAQEQAAA2ADABEAAANgAwBwkAALICACB2AQDaAQAhfAEA2gEAIX1AANwBACGUAQEA2gEAIZUBAQDaAQAhlgEIAPkBACECAAAAEgAgEAAAOQAgBnYBANoBACF8AQDaAQAhfUAA3AEAIZQBAQDaAQAhlQEBANoBACGWAQgA-QEAIQIAAAAQACAQAAA7ACACAAAAEAAgEAAAOwAgAwAAABIAIBcAADQAIBgAADkAIAEAAAASACABAAAAEAAgBQgAAK0CACAdAACuAgAgHgAAsQIAIB8AALACACAgAACvAgAgCXMAAMYBADB0AABCABB1AADGAQAwdgEAowEAIXwBAKMBACF9QAClAQAhlAEBAKMBACGVAQEAowEAIZYBCAC6AQAhAwAAABAAIAEAAEEAMBwAAEIAIAMAAAAQACABAAARADACAAASACAJAwAAxQEAIHMAAMMBADB0AAAHABB1AADDAQAwdgEAAAABfUAAsQEAIX5AALEBACGPAQEAAAABkwEBAMQBACEBAAAARQAgAQAAAEUAIAIDAACsAgAgkwEAANYBACADAAAABwAgAQAASAAwAgAARQAgAwAAAAcAIAEAAEgAMAIAAEUAIAMAAAAHACABAABIADACAABFACAGAwAAqwIAIHYBAAAAAX1AAAAAAX5AAAAAAY8BAQAAAAGTAQEAAAABARAAAEwAIAV2AQAAAAF9QAAAAAF-QAAAAAGPAQEAAAABkwEBAAAAAQEQAABOADABEAAATgAwBgMAAKoCACB2AQDaAQAhfUAA3AEAIX5AANwBACGPAQEA2gEAIZMBAQCSAgAhAgAAAEUAIBAAAFEAIAV2AQDaAQAhfUAA3AEAIX5AANwBACGPAQEA2gEAIZMBAQCSAgAhAgAAAAcAIBAAAFMAIAIAAAAHACAQAABTACADAAAARQAgFwAATAAgGAAAUQAgAQAAAEUAIAEAAAAHACAECAAApwIAIB8AAKkCACAgAACoAgAgkwEAANYBACAIcwAAvwEAMHQAAFoAEHUAAL8BADB2AQCjAQAhfUAApQEAIX5AAKUBACGPAQEAowEAIZMBAQDAAQAhAwAAAAcAIAEAAFkAMBwAAFoAIAMAAAAHACABAABIADACAABFACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAgDAACmAgAgBgAAiwIAIAoAAIwCACB2AQAAAAF8AAAAkwECjwEBAAAAAZABAQAAAAGRAQgAAAABARAAAGIAIAV2AQAAAAF8AAAAkwECjwEBAAAAAZABAQAAAAGRAQgAAAABARAAAGQAMAEQAABkADAIAwAApQIAIAYAAPwBACAKAAD9AQAgdgEA2gEAIXwAAPoBkwEijwEBANoBACGQAQEA2gEAIZEBCAD5AQAhAgAAAAUAIBAAAGcAIAV2AQDaAQAhfAAA-gGTASKPAQEA2gEAIZABAQDaAQAhkQEIAPkBACECAAAAAwAgEAAAaQAgAgAAAAMAIBAAAGkAIAMAAAAFACAXAABiACAYAABnACABAAAABQAgAQAAAAMAIAUIAACgAgAgHQAAoQIAIB4AAKQCACAfAACjAgAgIAAAogIAIAhzAAC5AQAwdAAAcAAQdQAAuQEAMHYBAKMBACF8AAC7AZMBIo8BAQCjAQAhkAEBAKMBACGRAQgAugEAIQMAAAADACABAABvADAcAABwACADAAAAAwAgAQAABAAwAgAABQAgAQAAAAwAIAEAAAAMACADAAAACgAgAQAACwAwAgAADAAgAwAAAAoAIAEAAAsAMAIAAAwAIAMAAAAKACABAAALADACAAAMACAJAwAAnwIAIAYAAO4BACB2AQAAAAF9QAAAAAF-QAAAAAGNAQIAAAABjgEBAAAAAY8BAQAAAAGQAQEAAAABARAAAHgAIAd2AQAAAAF9QAAAAAF-QAAAAAGNAQIAAAABjgEBAAAAAY8BAQAAAAGQAQEAAAABARAAAHoAMAEQAAB6ADAJAwAAngIAIAYAAOwBACB2AQDaAQAhfUAA3AEAIX5AANwBACGNAQIA6gEAIY4BAQDaAQAhjwEBANoBACGQAQEA2gEAIQIAAAAMACAQAAB9ACAHdgEA2gEAIX1AANwBACF-QADcAQAhjQECAOoBACGOAQEA2gEAIY8BAQDaAQAhkAEBANoBACECAAAACgAgEAAAfwAgAgAAAAoAIBAAAH8AIAMAAAAMACAXAAB4ACAYAAB9ACABAAAADAAgAQAAAAoAIAUIAACZAgAgHQAAmgIAIB4AAJ0CACAfAACcAgAgIAAAmwIAIApzAAC1AQAwdAAAhgEAEHUAALUBADB2AQCjAQAhfUAApQEAIX5AAKUBACGNAQIAtgEAIY4BAQCjAQAhjwEBAKMBACGQAQEAowEAIQMAAAAKACABAACFAQAwHAAAhgEAIAMAAAAKACABAAALADACAAAMACAOBAAAsgEAIAUAALMBACAHAAC0AQAgcwAArgEAMHQAAIwBABB1AACuAQAwdgEAAAABdwEArwEAIXgBAAAAAXkBAK8BACF7AACwAXsjfAEArwEAIX1AALEBACF-QACxAQAhAQAAAIkBACABAAAAiQEAIA4EAACyAQAgBQAAswEAIAcAALQBACBzAACuAQAwdAAAjAEAEHUAAK4BADB2AQCvAQAhdwEArwEAIXgBAK8BACF5AQCvAQAhewAAsAF7I3wBAK8BACF9QACxAQAhfkAAsQEAIQQEAACWAgAgBQAAlwIAIAcAAJgCACB7AADWAQAgAwAAAIwBACABAACNAQAwAgAAiQEAIAMAAACMAQAgAQAAjQEAMAIAAIkBACADAAAAjAEAIAEAAI0BADACAACJAQAgCwQAAJMCACAFAACUAgAgBwAAlQIAIHYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXsAAAB7A3wBAAAAAX1AAAAAAX5AAAAAAQEQAACRAQAgCHYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXsAAAB7A3wBAAAAAX1AAAAAAX5AAAAAAQEQAACTAQAwARAAAJMBADALBAAA3QEAIAUAAN4BACAHAADfAQAgdgEA2gEAIXcBANoBACF4AQDaAQAheQEA2gEAIXsAANsBeyN8AQDaAQAhfUAA3AEAIX5AANwBACECAAAAiQEAIBAAAJYBACAIdgEA2gEAIXcBANoBACF4AQDaAQAheQEA2gEAIXsAANsBeyN8AQDaAQAhfUAA3AEAIX5AANwBACECAAAAjAEAIBAAAJgBACACAAAAjAEAIBAAAJgBACADAAAAiQEAIBcAAJEBACAYAACWAQAgAQAAAIkBACABAAAAjAEAIAQIAADXAQAgHwAA2QEAICAAANgBACB7AADWAQAgC3MAAKIBADB0AACfAQAQdQAAogEAMHYBAKMBACF3AQCjAQAheAEAowEAIXkBAKMBACF7AACkAXsjfAEAowEAIX1AAKUBACF-QAClAQAhAwAAAIwBACABAACeAQAwHAAAnwEAIAMAAACMAQAgAQAAjQEAMAIAAIkBACALcwAAogEAMHQAAJ8BABB1AACiAQAwdgEAowEAIXcBAKMBACF4AQCjAQAheQEAowEAIXsAAKQBeyN8AQCjAQAhfUAApQEAIX5AAKUBACEOCAAApwEAIB8AAK0BACAgAACtAQAgfwEAAAABgAEBAAAABIEBAQAAAASCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAKwBACGHAQEAAAABiAEBAAAAAYkBAQAAAAEHCAAAqgEAIB8AAKsBACAgAACrAQAgfwAAAHsDgAEAAAB7CYEBAAAAewmGAQAAqQF7IwsIAACnAQAgHwAAqAEAICAAAKgBACB_QAAAAAGAAUAAAAAEgQFAAAAABIIBQAAAAAGDAUAAAAABhAFAAAAAAYUBQAAAAAGGAUAApgEAIQsIAACnAQAgHwAAqAEAICAAAKgBACB_QAAAAAGAAUAAAAAEgQFAAAAABIIBQAAAAAGDAUAAAAABhAFAAAAAAYUBQAAAAAGGAUAApgEAIQh_AgAAAAGAAQIAAAAEgQECAAAABIIBAgAAAAGDAQIAAAABhAECAAAAAYUBAgAAAAGGAQIApwEAIQh_QAAAAAGAAUAAAAAEgQFAAAAABIIBQAAAAAGDAUAAAAABhAFAAAAAAYUBQAAAAAGGAUAAqAEAIQcIAACqAQAgHwAAqwEAICAAAKsBACB_AAAAewOAAQAAAHsJgQEAAAB7CYYBAACpAXsjCH8CAAAAAYABAgAAAAWBAQIAAAAFggECAAAAAYMBAgAAAAGEAQIAAAABhQECAAAAAYYBAgCqAQAhBH8AAAB7A4ABAAAAewmBAQAAAHsJhgEAAKsBeyMOCAAApwEAIB8AAK0BACAgAACtAQAgfwEAAAABgAEBAAAABIEBAQAAAASCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAKwBACGHAQEAAAABiAEBAAAAAYkBAQAAAAELfwEAAAABgAEBAAAABIEBAQAAAASCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAK0BACGHAQEAAAABiAEBAAAAAYkBAQAAAAEOBAAAsgEAIAUAALMBACAHAAC0AQAgcwAArgEAMHQAAIwBABB1AACuAQAwdgEArwEAIXcBAK8BACF4AQCvAQAheQEArwEAIXsAALABeyN8AQCvAQAhfUAAsQEAIX5AALEBACELfwEAAAABgAEBAAAABIEBAQAAAASCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAK0BACGHAQEAAAABiAEBAAAAAYkBAQAAAAEEfwAAAHsDgAEAAAB7CYEBAAAAewmGAQAAqwF7Iwh_QAAAAAGAAUAAAAAEgQFAAAAABIIBQAAAAAGDAUAAAAABhAFAAAAAAYUBQAAAAAGGAUAAqAEAIQsDAADFAQAgcwAAwwEAMHQAAAcAEHUAAMMBADB2AQCvAQAhfUAAsQEAIX5AALEBACGPAQEArwEAIZMBAQDEAQAhnQEAAAcAIJ4BAAAHACADigEAAAMAIIsBAAADACCMAQAAAwAgA4oBAAAKACCLAQAACgAgjAEAAAoAIApzAAC1AQAwdAAAhgEAEHUAALUBADB2AQCjAQAhfUAApQEAIX5AAKUBACGNAQIAtgEAIY4BAQCjAQAhjwEBAKMBACGQAQEAowEAIQ0IAACnAQAgHQAAuAEAIB4AAKcBACAfAACnAQAgIAAApwEAIH8CAAAAAYABAgAAAASBAQIAAAAEggECAAAAAYMBAgAAAAGEAQIAAAABhQECAAAAAYYBAgC3AQAhDQgAAKcBACAdAAC4AQAgHgAApwEAIB8AAKcBACAgAACnAQAgfwIAAAABgAECAAAABIEBAgAAAASCAQIAAAABgwECAAAAAYQBAgAAAAGFAQIAAAABhgECALcBACEIfwgAAAABgAEIAAAABIEBCAAAAASCAQgAAAABgwEIAAAAAYQBCAAAAAGFAQgAAAABhgEIALgBACEIcwAAuQEAMHQAAHAAEHUAALkBADB2AQCjAQAhfAAAuwGTASKPAQEAowEAIZABAQCjAQAhkQEIALoBACENCAAApwEAIB0AALgBACAeAAC4AQAgHwAAuAEAICAAALgBACB_CAAAAAGAAQgAAAAEgQEIAAAABIIBCAAAAAGDAQgAAAABhAEIAAAAAYUBCAAAAAGGAQgAvgEAIQcIAACnAQAgHwAAvQEAICAAAL0BACB_AAAAkwECgAEAAACTAQiBAQAAAJMBCIYBAAC8AZMBIgcIAACnAQAgHwAAvQEAICAAAL0BACB_AAAAkwECgAEAAACTAQiBAQAAAJMBCIYBAAC8AZMBIgR_AAAAkwECgAEAAACTAQiBAQAAAJMBCIYBAAC9AZMBIg0IAACnAQAgHQAAuAEAIB4AALgBACAfAAC4AQAgIAAAuAEAIH8IAAAAAYABCAAAAASBAQgAAAAEggEIAAAAAYMBCAAAAAGEAQgAAAABhQEIAAAAAYYBCAC-AQAhCHMAAL8BADB0AABaABB1AAC_AQAwdgEAowEAIX1AAKUBACF-QAClAQAhjwEBAKMBACGTAQEAwAEAIQ4IAACqAQAgHwAAwgEAICAAAMIBACB_AQAAAAGAAQEAAAAFgQEBAAAABYIBAQAAAAGDAQEAAAABhAEBAAAAAYUBAQAAAAGGAQEAwQEAIYcBAQAAAAGIAQEAAAABiQEBAAAAAQ4IAACqAQAgHwAAwgEAICAAAMIBACB_AQAAAAGAAQEAAAAFgQEBAAAABYIBAQAAAAGDAQEAAAABhAEBAAAAAYUBAQAAAAGGAQEAwQEAIYcBAQAAAAGIAQEAAAABiQEBAAAAAQt_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_QEAIHYBANoBACF8AAD6AZMBIpABAQDaAQAhkQEIAPkBACEFFwAA6QIAIBgAAO0CACCfAQAA6gIAIKABAADsAgAgpQEAAAEAIAsXAAD-AQAwGAAAgwIAMJ8BAAD_AQAwoAEAAIACADChAQAAgQIAIKIBAACCAgAwowEAAIICADCkAQAAggIAMKUBAACCAgAwpgEAAIQCADCnAQAAhQIAMAV2AQAAAAF8AQAAAAF9QAAAAAGVAQEAAAABlgEIAAAAAQIAAAASACAXAACJAgAgAwAAABIAIBcAAIkCACAYAACIAgAgARAAAOsCADAKCQAA0AEAIHMAAM8BADB0AAAQABB1AADPAQAwdgEAAAABfAEArwEAIX1AALEBACGUAQEArwEAIZUBAQAAAAGWAQgAzAEAIQIAAAASACAQAACIAgAgAgAAAIYCACAQAACHAgAgCXMAAIUCADB0AACGAgAQdQAAhQIAMHYBAK8BACF8AQCvAQAhfUAAsQEAIZQBAQCvAQAhlQEBAK8BACGWAQgAzAEAIQlzAACFAgAwdAAAhgIAEHUAAIUCADB2AQCvAQAhfAEArwEAIX1AALEBACGUAQEArwEAIZUBAQCvAQAhlgEIAMwBACEFdgEA2gEAIXwBANoBACF9QADcAQAhlQEBANoBACGWAQgA-QEAIQV2AQDaAQAhfAEA2gEAIX1AANwBACGVAQEA2gEAIZYBCAD5AQAhBXYBAAAAAXwBAAAAAX1AAAAAAZUBAQAAAAGWAQgAAAABBgYAAIsCACAKAACMAgAgdgEAAAABfAAAAJMBApABAQAAAAGRAQgAAAABAxcAAOkCACCfAQAA6gIAIKUBAAABACAEFwAA_gEAMJ8BAAD_AQAwoQEAAIECACClAQAAggIAMAR2AQAAAAF9QAAAAAF-QAAAAAGTAQEAAAABAgAAAEUAIBcAAI0CACADAAAABwAgFwAAjQIAIBgAAJECACAGAAAABwAgEAAAkQIAIHYBANoBACF9QADcAQAhfkAA3AEAIZMBAQCSAgAhBHYBANoBACF9QADcAQAhfkAA3AEAIZMBAQCSAgAhAaIBAQAAAAEDFwAAjQIAIJ8BAACOAgAgpQEAAEUAIAQXAADvAQAwnwEAAPABADChAQAA8gEAIKUBAADzAQAwBBcAAOABADCfAQAA4QEAMKEBAADjAQAgpQEAAOQBADACAwAArAIAIJMBAADWAQAgAAAAAAAAAAUXAADkAgAgGAAA5wIAIJ8BAADlAgAgoAEAAOYCACClAQAAiQEAIAMXAADkAgAgnwEAAOUCACClAQAAiQEAIAAAAAAABRcAAN8CACAYAADiAgAgnwEAAOACACCgAQAA4QIAIKUBAACJAQAgAxcAAN8CACCfAQAA4AIAIKUBAACJAQAgAAAABRcAANoCACAYAADdAgAgnwEAANsCACCgAQAA3AIAIKUBAACJAQAgAxcAANoCACCfAQAA2wIAIKUBAACJAQAgBAQAAJYCACAFAACXAgAgBwAAmAIAIHsAANYBACAAAAAAAAUXAADVAgAgGAAA2AIAIJ8BAADWAgAgoAEAANcCACClAQAABQAgAxcAANUCACCfAQAA1gIAIKUBAAAFACAAAAAAAAGiASAAAAABCxcAAMUCADAYAADJAgAwnwEAAMYCADCgAQAAxwIAMKEBAADIAgAgogEAAPMBADCjAQAA8wEAMKQBAADzAQAwpQEAAPMBADCmAQAAygIAMKcBAAD2AQAwCxcAALwCADAYAADAAgAwnwEAAL0CADCgAQAAvgIAMKEBAAC_AgAgogEAAOQBADCjAQAA5AEAMKQBAADkAQAwpQEAAOQBADCmAQAAwQIAMKcBAADnAQAwBwMAAJ8CACB2AQAAAAF9QAAAAAF-QAAAAAGNAQIAAAABjgEBAAAAAY8BAQAAAAECAAAADAAgFwAAxAIAIAMAAAAMACAXAADEAgAgGAAAwwIAIAEQAADUAgAwAgAAAAwAIBAAAMMCACACAAAA6AEAIBAAAMICACAGdgEA2gEAIX1AANwBACF-QADcAQAhjQECAOoBACGOAQEA2gEAIY8BAQDaAQAhBwMAAJ4CACB2AQDaAQAhfUAA3AEAIX5AANwBACGNAQIA6gEAIY4BAQDaAQAhjwEBANoBACEHAwAAnwIAIHYBAAAAAX1AAAAAAX5AAAAAAY0BAgAAAAGOAQEAAAABjwEBAAAAAQYDAACmAgAgCgAAjAIAIHYBAAAAAXwAAACTAQKPAQEAAAABkQEIAAAAAQIAAAAFACAXAADNAgAgAwAAAAUAIBcAAM0CACAYAADMAgAgARAAANMCADACAAAABQAgEAAAzAIAIAIAAAD3AQAgEAAAywIAIAR2AQDaAQAhfAAA-gGTASKPAQEA2gEAIZEBCAD5AQAhBgMAAKUCACAKAAD9AQAgdgEA2gEAIXwAAPoBkwEijwEBANoBACGRAQgA-QEAIQYDAACmAgAgCgAAjAIAIHYBAAAAAXwAAACTAQKPAQEAAAABkQEIAAAAAQQXAADFAgAwnwEAAMYCADChAQAAyAIAIKUBAADzAQAwBBcAALwCADCfAQAAvQIAMKEBAAC_AgAgpQEAAOQBADADAwAArAIAIAYAANECACAKAADSAgAgAgUAAJcCACAHAACYAgAgAAR2AQAAAAF8AAAAkwECjwEBAAAAAZEBCAAAAAEGdgEAAAABfUAAAAABfkAAAAABjQECAAAAAY4BAQAAAAGPAQEAAAABBwMAAKYCACAGAACLAgAgdgEAAAABfAAAAJMBAo8BAQAAAAGQAQEAAAABkQEIAAAAAQIAAAAFACAXAADVAgAgAwAAAAMAIBcAANUCACAYAADZAgAgCQAAAAMAIAMAAKUCACAGAAD8AQAgEAAA2QIAIHYBANoBACF8AAD6AZMBIo8BAQDaAQAhkAEBANoBACGRAQgA-QEAIQcDAAClAgAgBgAA_AEAIHYBANoBACF8AAD6AZMBIo8BAQDaAQAhkAEBANoBACGRAQgA-QEAIQoFAACUAgAgBwAAlQIAIHYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXsAAAB7A3wBAAAAAX1AAAAAAX5AAAAAAQIAAACJAQAgFwAA2gIAIAMAAACMAQAgFwAA2gIAIBgAAN4CACAMAAAAjAEAIAUAAN4BACAHAADfAQAgEAAA3gIAIHYBANoBACF3AQDaAQAheAEA2gEAIXkBANoBACF7AADbAXsjfAEA2gEAIX1AANwBACF-QADcAQAhCgUAAN4BACAHAADfAQAgdgEA2gEAIXcBANoBACF4AQDaAQAheQEA2gEAIXsAANsBeyN8AQDaAQAhfUAA3AEAIX5AANwBACEKBAAAkwIAIAcAAJUCACB2AQAAAAF3AQAAAAF4AQAAAAF5AQAAAAF7AAAAewN8AQAAAAF9QAAAAAF-QAAAAAECAAAAiQEAIBcAAN8CACADAAAAjAEAIBcAAN8CACAYAADjAgAgDAAAAIwBACAEAADdAQAgBwAA3wEAIBAAAOMCACB2AQDaAQAhdwEA2gEAIXgBANoBACF5AQDaAQAhewAA2wF7I3wBANoBACF9QADcAQAhfkAA3AEAIQoEAADdAQAgBwAA3wEAIHYBANoBACF3AQDaAQAheAEA2gEAIXkBANoBACF7AADbAXsjfAEA2gEAIX1AANwBACF-QADcAQAhCgQAAJMCACAFAACUAgAgdgEAAAABdwEAAAABeAEAAAABeQEAAAABewAAAHsDfAEAAAABfUAAAAABfkAAAAABAgAAAIkBACAXAADkAgAgAwAAAIwBACAXAADkAgAgGAAA6AIAIAwAAACMAQAgBAAA3QEAIAUAAN4BACAQAADoAgAgdgEA2gEAIXcBANoBACF4AQDaAQAheQEA2gEAIXsAANsBeyN8AQDaAQAhfUAA3AEAIX5AANwBACEKBAAA3QEAIAUAAN4BACB2AQDaAQAhdwEA2gEAIXgBANoBACF5AQDaAQAhewAA2wF7I3wBANoBACF9QADcAQAhfkAA3AEAIQsHAADPAgAgdgEAAAABdwEAAAABfUAAAAABfkAAAAABlwEBAAAAAZgBCAAAAAGZAQEAAAABmgEBAAAAAZsBIAAAAAGcAQIAAAABAgAAAAEAIBcAAOkCACAFdgEAAAABfAEAAAABfUAAAAABlQEBAAAAAZYBCAAAAAEDAAAAGQAgFwAA6QIAIBgAAO4CACANAAAAGQAgBwAAuwIAIBAAAO4CACB2AQDaAQAhdwEA2gEAIX1AANwBACF-QADcAQAhlwEBANoBACGYAQgA-QEAIZkBAQDaAQAhmgEBANoBACGbASAAuQIAIZwBAgDqAQAhCwcAALsCACB2AQDaAQAhdwEA2gEAIX1AANwBACF-QADcAQAhlwEBANoBACGYAQgA-QEAIZkBAQDaAQAhmgEBANoBACGbASAAuQIAIZwBAgDqAQAhBHYBAAAAAXwAAACTAQKQAQEAAAABkQEIAAAAAQsFAADOAgAgdgEAAAABdwEAAAABfUAAAAABfkAAAAABlwEBAAAAAZgBCAAAAAGZAQEAAAABmgEBAAAAAZsBIAAAAAGcAQIAAAABAgAAAAEAIBcAAPACACADAAAAGQAgFwAA8AIAIBgAAPQCACANAAAAGQAgBQAAugIAIBAAAPQCACB2AQDaAQAhdwEA2gEAIX1AANwBACF-QADcAQAhlwEBANoBACGYAQgA-QEAIZkBAQDaAQAhmgEBANoBACGbASAAuQIAIZwBAgDqAQAhCwUAALoCACB2AQDaAQAhdwEA2gEAIX1AANwBACF-QADcAQAhlwEBANoBACGYAQgA-QEAIZkBAQDaAQAhmgEBANoBACGbASAAuQIAIZwBAgDqAQAhBnYBAAAAAX1AAAAAAX5AAAAAAY0BAgAAAAGOAQEAAAABkAEBAAAAAQMFBgIHFQUIAAkEAwADBgABCAAIChMHBAQIBAUJAgcNBQgABgEDAAMCAwADBgABAgUOAAcPAAEJAAIBChQAAgUWAAcXAAAAAAUIAA4dAA8eABAfABEgABIAAAAAAAUIAA4dAA8eABAfABEgABIBCQACAQkAAgUIABcdABgeABkfABogABsAAAAAAAUIABcdABgeABkfABogABsBAwADAQMAAwMIACAfACEgACIAAAADCAAgHwAhIAAiAgMAAwYAAQIDAAMGAAEFCAAnHQAoHgApHwAqIAArAAAAAAAFCAAnHQAoHgApHwAqIAArAgMAAwYAAQIDAAMGAAEFCAAwHQAxHgAyHwAzIAA0AAAAAAAFCAAwHQAxHgAyHwAzIAA0AAADCAA5HwA6IAA7AAAAAwgAOR8AOiAAOwsCAQwYAQ0bAQ4cAQ8dAREfARIhChMiCxQkARUmChYnDBkoARopARsqCiEtDSIuEyMvByQwByUxByYyByczByg1Byk3Cio4FCs6Byw8Ci09FS4-By8_BzBACjFDFjJEHDNGBDRHBDVJBDZKBDdLBDhNBDlPCjpQHTtSBDxUCj1VHj5WBD9XBEBYCkFbH0JcI0NdAkReAkVfAkZgAkdhAkhjAkllCkpmJEtoAkxqCk1rJU5sAk9tAlBuClFxJlJyLFNzBVR0BVV1BVZ2BVd3BVh5BVl7Clp8LVt-BVyAAQpdgQEuXoIBBV-DAQVghAEKYYcBL2KIATVjigEDZIsBA2WOAQNmjwEDZ5ABA2iSAQNplAEKapUBNmuXAQNsmQEKbZoBN26bAQNvnAEDcJ0BCnGgAThyoQE8"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
globalThis["__dirname"] = path2.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/modules/users/user.service.ts
import "jsonwebtoken";

// src/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (payload, secret, expairesIn) => {
  const token = jwt.sign(
    payload,
    secret,
    {
      expiresIn: expairesIn
    }
  );
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return {
      success: true,
      data: verifiedToken
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
  ;
};
var jwtUtils = {
  createToken,
  verifyToken
};

// src/modules/users/user.service.ts
var createUserIntoDB = async (payload) => {
  const { name, email, password, profilePhoto } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (isUserExist) {
    throw new Error("User with this email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, Number(config_default.bcrypt_salt_rounds));
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      profile: {
        create: {
          ...profilePhoto && { profilePhoto }
        }
      }
    }
  });
  const user = await prisma.user.findUnique({
    where: {
      id: createdUser.id,
      email: createdUser.email
    },
    include: {
      profile: true
    },
    omit: {
      password: true
    }
  });
  return user;
};
var loginUser = async (payload) => {
  const { email, password } = payload;
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email
    }
  });
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Password is incorrect");
  }
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(jwtPayload, config_default.jwt_access_secret, config_default.jwt_access_expires_in);
  const refreshToken = jwtUtils.createToken(jwtPayload, config_default.jwt_refresh_secret, config_default.jwt_refresh_expires_in);
  return {
    accessToken,
    refreshToken
  };
};
var getMyProfilefromDB = async (userId) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    omit: { password: true },
    include: { profile: true }
  });
  return user;
};
var getAllUsersFromDB = async () => {
  const users = await prisma.user.findMany({
    omit: { password: true }
  });
  return users;
};
var updateUserStatusIntoDB = async (userid, changStatus) => {
  const updateUser = await prisma.user.update({
    where: {
      id: userid
    },
    data: {
      status: changStatus
    },
    omit: {
      password: true
    },
    include: {
      profile: true
    }
  });
  return updateUser;
};
var userService = {
  createUserIntoDB,
  loginUser,
  getMyProfilefromDB,
  getAllUsersFromDB,
  updateUserStatusIntoDB
};

// src/modules/users/user.controller.ts
import httpStatus2 from "http-status";

// src/utils/catchAsync.ts
import httpStatus from "http-status";
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: true,
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to register user",
        error: error.message
      });
    }
  };
};

// src/utils/sendResponse.ts
var sendResponse = (res, data) => {
  res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
    meta: data.meta
  });
};

// src/modules/users/user.controller.ts
var createUser = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await userService.createUserIntoDB(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.CREATED,
    message: "user created successfully",
    data: { result }
  });
});
var loginUser2 = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const { accessToken, refreshToken } = await userService.loginUser(payload);
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1e3 * 60 * 60 * 24 * 7
  });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.OK,
    message: "user login successfully",
    data: { accessToken, refreshToken }
  });
});
var getMyProfile = catchAsync(async (req, res, next) => {
  const profile = await userService.getMyProfilefromDB(req.user?.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.OK,
    message: "user retrieved successfully",
    data: profile
  });
});
var getAllusers = catchAsync(async (req, res, next) => {
  const users = await userService.getAllUsersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.OK,
    message: "users retrieved successfully",
    data: users
  });
});
var updateUserStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const allowedStatus = ["ACTIVE", "SUSPEND"];
  if (!allowedStatus.includes(status)) {
    throw new Error("Invalid status");
  }
  const updateRes = await userService.updateUserStatusIntoDB(id, status);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.OK,
    message: "User Status update successfully",
    data: updateRes
  });
});
var userController = {
  createUser,
  loginUser: loginUser2,
  getMyProfile,
  getAllusers,
  updateUserStatus
};

// src/middleWare/auth.ts
var auth = (...requiredRoles) => {
  return catchAsync(async (req, res, next) => {
    const token = req.cookies.accessToken ? req.cookies.accessToken : req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization?.split(" ")[1] : req.headers.authorization;
    if (!token) {
      throw new Error("You are not logged in. Please log in to access this resource");
    }
    const verifiedToken = jwtUtils.verifyToken(token, config_default.jwt_access_secret);
    if (!verifiedToken.success) {
      throw new Error(verifiedToken.error);
    }
    const { id, name, email, role } = verifiedToken.data;
    if (!requiredRoles.includes(role)) {
      throw new Error("Forbidden. You don't have permission to access this resource.");
    }
    const user = await prisma.user.findUnique({
      where: {
        id,
        name,
        email,
        role
      }
    });
    if (!user) {
      throw new Error("User not found. Please log in again");
    }
    req.user = {
      id,
      name,
      email,
      role
    };
    next();
  });
};

// src/modules/users/user.route.ts
var router = Router();
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/me", auth("USER", "ADMIN", "PROVIDER"), userController.getMyProfile);
router.get("/users", auth("ADMIN"), userController.getAllusers);
router.put("/user/:id", userController.updateUserStatus);
var userRoute = router;

// src/modules/gears/gears.routes.ts
import { Router as Router2 } from "express";

// src/modules/gears/gears.service.ts
var createGearIntoDB = async (payload) => {
  const { name, description, price, category, brand, available, stock } = payload;
  const gearResult = await prisma.gear.create({
    data: {
      name,
      description,
      price,
      category,
      brand,
      available,
      stock
    }
  });
  return gearResult;
};
var getAllGearfromDB = async (query) => {
  const gearResult = await prisma.gear.findMany({
    where: {
      AND: [
        query.category ? { category: query.category } : {},
        query.brand ? { brand: query.brand } : {},
        query.price ? { price: parseFloat(query.price) } : {}
      ]
    }
  });
  return gearResult;
};
var updateGearIntoDB = async (id, payload) => {
  const updateResult = await prisma.gear.update({
    where: { id },
    data: payload
  });
  return updateResult;
};
var getGearDetailsFromDB = async (id) => {
  const result = await prisma.gear.findUniqueOrThrow({
    where: { id }
  });
  return result;
};
var removeGearFromDB = async (id) => {
  await prisma.gear.delete({
    where: { id }
  });
  return null;
};
var getAllGearCateFromDB = async () => {
  console.log("gear categories ========");
  const allCategories = await prisma.gear.findMany({
    select: {
      category: true
    },
    distinct: ["category"]
  });
  return allCategories;
};
var gearServices = {
  createGearIntoDB,
  getAllGearfromDB,
  updateGearIntoDB,
  removeGearFromDB,
  getGearDetailsFromDB,
  getAllGearCateFromDB
};

// src/modules/gears/gears.controller.ts
import httpStatus3 from "http-status";
var createGear = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await gearServices.createGearIntoDB(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.CREATED,
    message: "Gear created successfully",
    data: { result }
  });
});
var getAllGear = catchAsync(async (req, res, next) => {
  const query = req.query;
  const result = await gearServices.getAllGearfromDB(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "Gears retrived successfully",
    data: { result }
  });
});
var updateGear = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  const updateResult = await gearServices.updateGearIntoDB(id, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "Gears Update successfully",
    data: { updateResult }
  });
});
var removeGear = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await gearServices.removeGearFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "Gears Remove successfully"
  });
});
var getGearDetails = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await gearServices.getGearDetailsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "Gears Retrived successfully",
    data: { result }
  });
});
var getAllCategories = catchAsync(async (req, res, next) => {
  const result = await gearServices.getAllGearCateFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "Gears category retrive successfully",
    data: { result }
  });
});
var gearController = {
  createGear,
  getAllGear,
  updateGear,
  removeGear,
  getGearDetails,
  getAllCategories
};

// src/modules/gears/gears.routes.ts
var router2 = Router2();
router2.post("/gear", auth("ADMIN", "PROVIDER"), gearController.createGear);
router2.get("/gear", gearController.getAllGear);
router2.get("/gear/:id", gearController.getGearDetails);
router2.put("/:id", auth("ADMIN", "PROVIDER"), gearController.updateGear);
router2.delete("/gear/:id", auth("ADMIN", "PROVIDER"), gearController.removeGear);
router2.get("/categories", gearController.getAllCategories);
var gearRouter = router2;

// src/modules/payments/payments.routes.ts
import { Router as Router3 } from "express";

// src/modules/payments/payments.service.ts
var import_react = __toESM(require_react(), 1);

// src/lib/stripe.ts
import Stripe from "stripe";
var stripe = new Stripe(config_default.stripe_secret_key);

// src/modules/payments/payments.service.ts
var createCheckoutSession = async (userId, gearId) => {
  const transactionResult = await prisma.$transaction(async (tx) => {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: userId }
    });
    const gear = await prisma.gear.findUniqueOrThrow({
      where: {
        id: gearId
      }
    });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: user.email,
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: gear.name
            },
            unit_amount: Math.round(gear.price * 100)
          }
        }
      ],
      metadata: {
        userId,
        gearId
      },
      success_url: `${config_default.app_url}/create?success=true`,
      cancel_url: `${config_default.app_url}/create?success=false`
    });
    return {
      sessionId: session.id,
      checkoutUrl: session.url
    };
  });
  return transactionResult;
};
var handlePaymentConfirm = async (payload, signature) => {
  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    config_default.stripe_webhook_secret
  );
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.metadata?.userId;
      const gearId = session.metadata?.gearId;
      if (!userId || !gearId) {
        throw new Error("Missing metadata");
      }
      await prisma.$transaction(async (tx) => {
        const gear = await tx.gear.findUniqueOrThrow({
          where: { id: gearId }
        });
        const rental = await tx.rental.create({
          data: {
            userId,
            gearId,
            totalAmount: session.amount_total / 100,
            status: "APPROVED"
          }
        });
        await tx.payment.create({
          data: {
            rentalId: rental.id,
            transactionId: session.payment_intent,
            amount: session.amount_total / 100,
            status: "PAID"
          }
        });
        await tx.gear.update({
          where: { id: gearId },
          data: {
            stock: {
              decrement: 1
            }
          }
        });
      });
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};
var getAllpaymentsFromDB = async (userId) => {
  const result = await prisma.payment.findMany({
    where: {
      rental: {
        userId
      }
    },
    include: {
      rental: {
        include: {
          gear: true
        }
      }
    }
  });
  return result;
};
var getPaymentDetailsFromDB = async (paymentId) => {
  const result = await prisma.payment.findUniqueOrThrow({
    where: {
      id: paymentId
    }
  });
  return result;
};
var paymentService = {
  createCheckoutSession,
  handlePaymentConfirm,
  getAllpaymentsFromDB,
  getPaymentDetailsFromDB
};

// src/modules/payments/payment.controller.ts
import httpStatus4 from "http-status";
var createCheckoutSession2 = catchAsync(async (req, res, next) => {
  const userId = req.user?.id;
  const { gearId } = req.query;
  const result = await paymentService.createCheckoutSession(userId, gearId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: "Checkout complete successfully",
    data: result
  });
});
var handlePaymentConfirm2 = catchAsync(async (req, res, next) => {
  const event = req.body;
  const signature = req.headers["stripe-signature"];
  await paymentService.handlePaymentConfirm(event, signature);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: "payment successfully"
  });
});
var getAllpayments = catchAsync(async (req, res, next) => {
  const userId = req.user?.id;
  const paymentResult = await paymentService.getAllpaymentsFromDB(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: "Payments retrived successfully",
    data: paymentResult
  });
});
var getPaymentDetails = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await paymentService.getPaymentDetailsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: "Payment retrived successfully",
    data: result
  });
});
var paymentController = {
  createCheckoutSession: createCheckoutSession2,
  handlePaymentConfirm: handlePaymentConfirm2,
  getAllpayments,
  getPaymentDetails
};

// src/modules/payments/payments.routes.ts
var router3 = Router3();
router3.post("/checkout", auth("ADMIN", "PROVIDER", "USER"), paymentController.createCheckoutSession);
router3.post("/confirm", paymentController.handlePaymentConfirm);
router3.get("/", auth("PROVIDER", "ADMIN", "USER"), paymentController.getAllpayments);
router3.get("/:id", auth("ADMIN", "PROVIDER"), paymentController.getPaymentDetails);
var paymentRoutes = router3;

// src/modules/rental/rental.route.ts
import { Router as Router4 } from "express";

// src/modules/rental/rental.service.ts
var allRentalFromDB = async () => {
  const result = await prisma.rental.findMany({});
  return result;
};
var getRentalDetails = async (id) => {
  const result = await prisma.rental.findUniqueOrThrow({
    where: {
      id
    }
  });
  return result;
};
var updateRental = async (id, payload) => {
  console.log(id, payload, "rental service==========");
  const updateResult = await prisma.rental.update({
    where: {
      id
    },
    data: { status: payload }
  });
  return updateResult;
};
var rentalService = {
  allRentalFromDB,
  getRentalDetails,
  updateRental
};

// src/modules/rental/rental.controller.ts
import httpStatus5 from "http-status";
var allRentalOrders = catchAsync(async (req, res, next) => {
  const result = await rentalService.allRentalFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.OK,
    message: "Rental retrive successfully",
    data: result
  });
});
var getRentalDetails2 = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await rentalService.getRentalDetails(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.OK,
    message: "Rental Details retrive successfully",
    data: result
  });
});
var updateRental2 = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await rentalService.updateRental(id, status);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.OK,
    message: "Rental Update successfully",
    data: result
  });
});
var rentalController = {
  allRentalOrders,
  getRentalDetails: getRentalDetails2,
  updateRental: updateRental2
};

// src/modules/rental/rental.route.ts
var router4 = Router4();
router4.get("/", auth("ADMIN", "PROVIDER"), rentalController.allRentalOrders);
router4.get("/:id", auth("USER", "ADMIN", "PROVIDER"), rentalController.getRentalDetails);
router4.patch("/:id", auth("ADMIN", "PROVIDER"), rentalController.updateRental);
var rentalRoute = router4;

// src/modules/reviews/reviews.route.ts
import { Router as Router5 } from "express";

// src/modules/reviews/reviews.service.ts
var createReviews = async (userId, rentalId, payload) => {
  const { rating, comment } = payload;
  console.log(payload, rentalId, "review service================");
  return await prisma.$transaction(async (tx) => {
    const rental = await tx.rental.findUniqueOrThrow({
      where: { id: rentalId }
    });
    if (!rental) {
      throw new Error("Rental not found");
    }
    if (rental.userId !== userId) {
      throw new Error("You are not authorize to review this rental");
    }
    const existingReviews = await tx.review.findFirst({
      where: {
        userId,
        gearId: rental.gearId
      }
    });
    if (existingReviews) {
      throw new Error("You have already reviewed this gear");
    }
    await tx.rental.update({
      where: {
        id: rentalId
      },
      data: {
        status: "RETURNED"
      }
    });
    const review = await tx.review.create({
      data: {
        rating,
        comment,
        userId,
        gearId: rental.gearId
      }
    });
    return review;
  });
};
var reviewService = {
  createReviews
};

// src/modules/reviews/reviews.controller.ts
import httpStatus6 from "http-status";
var createReviews2 = catchAsync(async (req, res, next) => {
  const userId = req.user?.id;
  const { id } = req.params;
  const payload = req.body;
  console.log(id, "rental controller=====");
  const result = await reviewService.createReviews(userId, id, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus6.CREATED,
    message: "Review created successfully",
    data: result
  });
});
var reviesController = {
  createReviews: createReviews2
};

// src/modules/reviews/reviews.route.ts
var router5 = Router5();
router5.post("/:id", auth("USER"), reviesController.createReviews);
var reviewRoute = router5;

// src/app.ts
var app = express();
app.use(cors({
  origin: config_default.app_url,
  credentials: true
}));
app.use("/api/payment/confirm", express.raw({ type: "application/json" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hellow GearUp");
});
app.use("/api/auth", userRoute);
app.use("/api", gearRouter);
app.use("/api/payment", paymentRoutes);
app.use("/api/rentals", rentalRoute);
app.use("/api/gearReturn", reviewRoute);
var app_default = app;

// src/server.ts
var PORT = config_default.port;
async function main() {
  try {
    await prisma.$connect();
    console.log("database Connected successfully");
    app_default.listen(PORT, () => {
      console.log(`Server is running port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
main();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
