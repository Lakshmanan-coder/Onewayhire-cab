/*! jQuery UI - v1.11.4 - 2015-06-17
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, sortable.js, slider.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
	function t(t, s) {
		var n, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
	}

	function i(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		scrollParent: function (t) {
			var i = this.css("position"),
				s = "absolute" === i,
				n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				a = this.parents().filter(function () {
					var t = e(this);
					return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
		},
		uniqueId: function () {
			var e = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function (i) {
			return t(i, !isNaN(e.attr(i, "tabindex")))
		},
		tabbable: function (i) {
			var s = e.attr(i, "tabindex"),
				n = isNaN(s);
			return (n || s >= 0) && t(i, !n)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
		function s(t, i, s, a) {
			return e.each(n, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			a = i.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + i] = function (t) {
			return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
				e(this).css(a, s(this, t) + "px")
			})
		}, e.fn["outer" + i] = function (t, n) {
			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
				e(this).css(a, s(this, t, !0, n) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
		focus: function (t) {
			return function (i, s) {
				return "number" == typeof i ? this.each(function () {
					var t = this;
					setTimeout(function () {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		disableSelection: function () {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(e + ".ui-disableSelection", function (e) {
					e.preventDefault()
				})
			}
		}(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function (t) {
			if (void 0 !== t) return this.css("zIndex", t);
			if (this.length)
				for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
					if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					n = n.parent()
				}
			return 0
		}
	}), e.ui.plugin = {
		add: function (t, i, s) {
			var n, a = e.ui[t].prototype;
			for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
		},
		call: function (e, t, i, s) {
			var n, a = e.plugins[t];
			if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
				for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
		}
	};
	var s = 0,
		n = Array.prototype.slice;
	e.cleanData = function (t) {
		return function (i) {
			var s, n, a;
			for (a = 0; null != (n = i[a]); a++) try {
				s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
			} catch (o) {}
			t(i)
		}
	}(e.cleanData), e.widget = function (t, i, s) {
		var n, a, o, r, h = {},
			l = t.split(".")[0];
		return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
			return !!e.data(t, n)
		}, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
			return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
		}, e.extend(o, a, {
			version: s.version,
			_proto: e.extend({}, s),
			_childConstructors: []
		}), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
			return e.isFunction(s) ? (h[t] = function () {
				var e = function () {
						return i.prototype[t].apply(this, arguments)
					},
					n = function (e) {
						return i.prototype[t].apply(this, e)
					};
				return function () {
					var t, i = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
				}
			}(), void 0) : (h[t] = s, void 0)
		}), o.prototype = e.widget.extend(r, {
			widgetEventPrefix: a ? r.widgetEventPrefix || t : t
		}, h, {
			constructor: o,
			namespace: l,
			widgetName: t,
			widgetFullName: n
		}), a ? (e.each(a._childConstructors, function (t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
	}, e.widget.extend = function (t) {
		for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
			for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
		return t
	}, e.widget.bridge = function (t, i) {
		var s = i.prototype.widgetFullName || t;
		e.fn[t] = function (a) {
			var o = "string" == typeof a,
				r = n.call(arguments, 1),
				h = this;
			return o ? this.each(function () {
				var i, n = e.data(this, s);
				return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
			}) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
				var t = e.data(this, s);
				t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
			})), h
		}
	}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (t, i) {
			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (e) {
					e.target === i && this.destroy()
				}
			}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function () {
			return this.element
		},
		option: function (t, i) {
			var s, n, a, o = t;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof t)
				if (o = {}, s = t.split("."), t = s.shift(), s.length) {
					for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
					if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
					n[t] = i
				} else {
					if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
					o[t] = i
				}
			return this._setOptions(o), this
		},
		_setOptions: function (e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function (e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function () {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function () {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function (t, i, s) {
			var n, a = this;
			"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
				function r() {
					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
				}
				"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
				var h = s.match(/^([\w:-]*)\s*(.*)$/),
					l = h[1] + a.eventNamespace,
					u = h[2];
				u ? n.delegate(u, l, r) : i.bind(l, r)
			})
		},
		_off: function (t, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
		},
		_delay: function (e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function (t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function (t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function (t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (t, i, s) {
			var n, a, o = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (t, i) {
		e.Widget.prototype["_" + t] = function (s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	}), e.widget;
	var a = !1;
	e(document).mouseup(function () {
		a = !1
	}), e.widget("ui.mouse", {
		version: "1.11.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function (e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (t) {
			if (!a) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
				var i = this,
					s = 1 === t.which,
					n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
					return i._mouseMove(e)
				}, this._mouseUpDelegate = function (e) {
					return i._mouseUp(e)
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
			}
		},
		_mouseMove: function (t) {
			if (this._mouseMoved) {
				if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
				if (!t.which) return this._mouseUp(t)
			}
			return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function (t) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
		},
		_mouseDistanceMet: function (e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	}), e.widget("ui.sortable", e.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function (e, t, i) {
			return e >= t && t + i > e
		},
		_isFloating: function (e) {
			return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
		},
		_create: function () {
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
		},
		_setOption: function (e, t) {
			this._super(e, t), "handle" === e && this._setHandleClassName()
		},
		_setHandleClassName: function () {
			this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
				(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
			})
		},
		_destroy: function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
			for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function (t, i) {
			var s = null,
				n = !1,
				a = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
				return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
			}), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
				this === t.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function (t, i, s) {
			var n, a, o = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, e.extend(this.offset, {
					click: {
						left: t.pageX - this.offset.left,
						top: t.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
			return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
		},
		_mouseDrag: function (t) {
			var i, s, n, a, o = this.options,
				r = !1;
			for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
					this._rearrange(t, s), this._trigger("change", t, this._uiHash());
					break
				}
			return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (t, i) {
			if (t) {
				if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						a = this.options.axis,
						o = {};
					a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(t)
					})
				} else this._clear(t, i);
				return !1
			}
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (t) {
			var i = this._getItemsAsjQuery(t && t.connected),
				s = [];
			return t = t || {}, e(i).each(function () {
				var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
				i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
			}), !s.length && t.key && s.push(t.key + "="), s.join("&")
		},
		toArray: function (t) {
			var i = this._getItemsAsjQuery(t && t.connected),
				s = [];
			return t = t || {}, i.each(function () {
				s.push(e(t.item || this).attr(t.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function (e) {
			var t = this.positionAbs.left,
				i = t + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				a = e.left,
				o = a + e.width,
				r = e.top,
				h = r + e.height,
				l = this.offset.click.top,
				u = this.offset.click.left,
				d = "x" === this.options.axis || s + l > r && h > s + l,
				c = "y" === this.options.axis || t + u > a && o > t + u,
				p = d && c;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (e) {
			var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
				i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
				s = t && i,
				n = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
		},
		_intersectsWithSides: function (e) {
			var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
				i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
				s = this._getDragVerticalDirection(),
				n = this._getDragHorizontalDirection();
			return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
		},
		_getDragVerticalDirection: function () {
			var e = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== e && (e > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var e = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== e && (e > 0 ? "right" : "left")
		},
		refresh: function (e) {
			return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
		},
		_connectWith: function () {
			var e = this.options;
			return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
		},
		_getItemsAsjQuery: function (t) {
			function i() {
				r.push(this)
			}
			var s, n, a, o, r = [],
				h = [],
				l = this._connectWith();
			if (l && t)
				for (s = l.length - 1; s >= 0; s--)
					for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
			for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
			return e(r)
		},
		_removeCurrentsFromItems: function () {
			var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = e.grep(this.items, function (e) {
				for (var i = 0; t.length > i; i++)
					if (t[i] === e.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (t) {
			this.items = [], this.containers = [this];
			var i, s, n, a, o, r, h, l, u = this.items,
				d = [
					[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
						item: this.currentItem
					}) : e(this.options.items, this.element), this]
				],
				c = this._connectWith();
			if (c && this.ready)
				for (i = c.length - 1; i >= 0; i--)
					for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
						item: this.currentItem
					}) : e(a.options.items, a.element), a]), this.containers.push(a));
			for (i = d.length - 1; i >= 0; i--)
				for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
					item: h,
					instance: o,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function (t) {
			this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, a;
			for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function (t) {
			t = t || this;
			var i, s = t.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function () {
					var s = t.currentItem[0].nodeName.toLowerCase(),
						n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function (e, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
				}
			}), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
		},
		_createTrPlaceholder: function (t, i) {
			var s = this;
			t.children().each(function () {
				e("<td> </td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
			})
		},
		_contactContainers: function (t) {
			var i, s, n, a, o, r, h, l, u, d, c = null,
				p = null;
			for (i = this.containers.length - 1; i >= 0; i--)
				if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
					if (this._intersectsWith(this.containers[i].containerCache)) {
						if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
						c = this.containers[i], p = i
					} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
			if (c)
				if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
				else {
					for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
					if (!a && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
					a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
				}
		},
		_createHelper: function (t) {
			var i = this.options,
				s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function (t) {
			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var e = this.currentItem.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var t, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (t, i) {
			i || (i = this.position);
			var s = "absolute" === t ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				a = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (t) {
			var i, s, n = this.options,
				a = t.pageX,
				o = t.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function (e, t, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (e, t) {
			function i(e, t, i) {
				return function (s) {
					i._trigger(e, s, t._uiHash(t))
				}
			}
			this.reverting = !1;
			var s, n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !t && n.push(function (e) {
					this._trigger("receive", e, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
					this._trigger("update", e, this._uiHash())
				}), this !== this.currentContainer && (t || (n.push(function (e) {
					this._trigger("remove", e, this._uiHash())
				}), n.push(function (e) {
					return function (t) {
						e._trigger("receive", t, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), n.push(function (e) {
					return function (t) {
						e._trigger("update", t, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
				for (s = 0; n.length > s; s++) n[s].call(this, e);
				this._trigger("stop", e, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger: function () {
			e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (t) {
			var i = t || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || e([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: t ? t.element : null
			}
		}
	}), e.widget("ui.slider", e.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function () {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function () {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function () {
			var t, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
			this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
				e(this).data("ui-slider-handle-index", t)
			})
		},
		_createRange: function () {
			var t = this.options,
				i = "";
			t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function () {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function () {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function (t) {
			var i, s, n, a, o, r, h, l, u = this,
				d = this.options;
			return d.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: t.pageX,
				y: t.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
				var i = Math.abs(s - u.values(t));
				(n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
			}), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: t.pageX - h.left - a.width() / 2,
				top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (e) {
			var t = {
					x: e.pageX,
					y: e.pageY
				},
				i = this._normValueFromMouse(t);
			return this._slide(e, this._handleIndex, i), !1
		},
		_mouseStop: function (e) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (e) {
			var t, i, s, n, a;
			return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function (e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
		},
		_slide: function (e, t, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i,
				values: n
			}), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function (e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
		},
		_change: function (e, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
			}
		},
		value: function (e) {
			return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
		},
		values: function (t, i) {
			var s, n, a;
			if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
			if (!arguments.length) return this._values();
			if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			this._refreshValue()
		},
		_setOption: function (t, i) {
			var s, n = 0;
			switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function () {
			var e = this.options.value;
			return e = this._trimAlignValue(e)
		},
		_values: function (e) {
			var t, i, s;
			if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function (e) {
			if (this._valueMin() >= e) return this._valueMin();
			if (e >= this._valueMax()) return this._valueMax();
			var t = this.options.step > 0 ? this.options.step : 1,
				i = (e - this._valueMin()) % t,
				s = e - i;
			return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function () {
			var e = this.options.max,
				t = this._valueMin(),
				i = this.options.step,
				s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
			e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
		},
		_precision: function () {
			var e = this._precisionOf(this.options.step);
			return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
		},
		_precisionOf: function (e) {
			var t = "" + e,
				i = t.indexOf(".");
			return -1 === i ? 0 : t.length - i - 1
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.max
		},
		_refreshValue: function () {
			var t, i, s, n, a, o = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), t = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function (t) {
				var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
				switch (t.keyCode) {
					case e.ui.keyCode.HOME:
					case e.ui.keyCode.END:
					case e.ui.keyCode.PAGE_UP:
					case e.ui.keyCode.PAGE_DOWN:
					case e.ui.keyCode.UP:
					case e.ui.keyCode.RIGHT:
					case e.ui.keyCode.DOWN:
					case e.ui.keyCode.LEFT:
						if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
				}
				switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
					case e.ui.keyCode.HOME:
						n = this._valueMin();
						break;
					case e.ui.keyCode.END:
						n = this._valueMax();
						break;
					case e.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case e.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case e.ui.keyCode.UP:
					case e.ui.keyCode.RIGHT:
						if (s === this._valueMax()) return;
						n = this._trimAlignValue(s + a);
						break;
					case e.ui.keyCode.DOWN:
					case e.ui.keyCode.LEFT:
						if (s === this._valueMin()) return;
						n = this._trimAlignValue(s - a)
				}
				this._slide(t, o, n)
			},
			keyup: function (t) {
				var i = e(t.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
			}
		}
	})
});