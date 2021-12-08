!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("blockly/core")); else if ("function" == typeof define && define.amd) define(["blockly/core"], t); else {
        var n = "object" == typeof exports ? t(require("blockly/core")) : t(e.Blockly);
        for (var l in n) ("object" == typeof exports ? exports : e)[l] = n[l]
    }
}(this, (function (e) {
    return function (e) {
        var t = {};

        function n(l) {
            if (t[l]) return t[l].exports;
            var a = t[l] = {i: l, l: !1, exports: {}};
            return e[l].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, l) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: l})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var l = Object.create(null);
            if (n.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var a in e) n.d(l, a, function (t) {
                return e[t]
            }.bind(null, a));
            return l
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/dist/", n(n.s = 1)
    }([function (t, n) {
        t.exports = e
    }, function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "TypedVariableModal", (function () {
            return a
        }));
        var l = n(0);
        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */l.Css.register(['\n    .blocklyModalOverlay {\n      width: 100%;\n      height: 100%;\n      left: 0px;\n      top: 0px;\n      position: fixed;\n    }\n    .blocklyModalContainer {\n      background-color: white;\n      border: 1px solid gray;\n      font-family: Helvetica;\n      font-weight: 300;\n      padding: 1em;\n      width: 400px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      box-shadow: 0px 10px 20px grey;\n      z-index: 100;\n      margin: 15% auto;\n    }\n    .blocklyModalHeader {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .blocklyModalHeaderTitle {\n      margin-top: 0;\n      margin-bottom: 0;\n      font-size: 1.2em;\n      line-height: 1.25;\n    }\n    .blocklyModalHeader .blocklyModalBtn {\n      margin-left: auto;\n      height: fit-content;\n    }\n    .blocklyModalBtnClose:before {\n      content: "\\2715";\n    }\n    .blocklyModalBtn {\n      margin-right: .5em;\n      border: 1px solid gray;\n      font-weight: 500;\n      color: gray;\n      border-radius: 25px;\n    }\n    .blocklyModalBtnPrimary {\n      background-color: gray;\n      color: white;\n    }']);

        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */
        class a extends class {
            constructor(e, t) {
                this.title_ = e, this.workspace_ = t, this.lastFocusableEl_ = null, this.firstFocusableEl_ = null, this.htmlDiv_ = null, this.boundEvents_ = [], this.shouldCloseOnOverlayClick = !0, this.shouldCloseOnEsc = !0
            }

            init() {
                this.render()
            }

            dispose() {
                for (const e of this.boundEvents_) l.unbindEvent_(e);
                this.boundEvents_ = [], this.htmlDiv_ && this.htmlDiv_.remove()
            }

            show() {
                l.WidgetDiv.show(this, this.workspace_.RTL, () => this.widgetDispose_()), this.widgetCreate_();
                const e = this.htmlDiv_.querySelectorAll('a[href],area[href], input:not([disabled]), select:not([disabled]),textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
                e.length > 0 && (this.firstFocusableEl_ = e[0], this.lastFocusableEl_ = e[e.length - 1], e[0].classList.contains("blocklyModalBtnClose") && e.length > 1 ? e[1].focus() : this.firstFocusableEl_.focus())
            }

            hide() {
                l.WidgetDiv.hide()
            }

            onCancel_() {
                this.hide()
            }

            widgetCreate_() {
                const e = l.WidgetDiv.DIV;
                l.utils.dom.addClass(this.htmlDiv_, "blocklyModalOpen"), e.appendChild(this.htmlDiv_)
            }

            widgetDispose_() {
                l.utils.dom.removeClass(this.htmlDiv_, "blocklyModalOpen")
            }

            handleBackwardTab_(e) {
                document.activeElement === this.firstFocusableEl_ && (e.preventDefault(), this.lastFocusableEl_.focus())
            }

            handleForwardTab_(e) {
                document.activeElement === this.lastFocusableEl_ && (e.preventDefault(), this.firstFocusableEl_.focus())
            }

            handleKeyDown_(e) {
                if (e.keyCode === l.utils.KeyCodes.TAB) {
                    if (!this.firstFocusableEl_ || this.firstFocusableEl_ === this.lastFocusableEl_) return e.preventDefault(), void e.stopPropagation();
                    e.shiftKey ? this.handleBackwardTab_(e) : this.handleForwardTab_(e)
                } else e.keyCode === l.utils.KeyCodes.ESC && this.shouldCloseOnEsc && this.hide();
                e.stopPropagation()
            }

            addEvent_(e, t, n, a) {
                const i = l.bindEventWithChecks_(e, t, n, a);
                this.boundEvents_.push(i)
            }

            render() {
                this.htmlDiv_ = document.createElement("div"), this.htmlDiv_.className = "blocklyModalOverlay";
                const e = document.createElement("div");
                e.className = "blocklyModalContainer", e.setAttribute("role", "dialog"), e.setAttribute("aria-labelledby", this.title_), this.addEvent_(e, "keydown", this, this.handleKeyDown_), this.shouldCloseOnOverlayClick && (this.addEvent_(this.htmlDiv_, "click", this, this.hide), this.addEvent_(e, "click", this, e => {
                    e.stopPropagation()
                }));
                const t = document.createElement("header");
                t.className = "blocklyModalHeader", this.renderHeader_(t);
                const n = document.createElement("button");
                n.className = "blocklyModalBtn blocklyModalBtnClose", this.addEvent_(n, "click", this, this.onCancel_), t.appendChild(n);
                const l = document.createElement("div");
                l.className = "blocklyModalContent", this.renderContent_(l);
                const a = document.createElement("footer");
                a.className = "blocklyModalFooter", this.renderFooter_(a), e.appendChild(t), e.appendChild(l), e.appendChild(a), this.htmlDiv_.appendChild(e)
            }

            renderHeader_(e) {
                const t = document.createElement("h2");
                t.className = "blocklyModalHeaderTitle", t.appendChild(document.createTextNode(this.title_)), e.appendChild(t)
            }

            renderContent_(e) {
            }

            renderFooter_(e) {
            }
        } {
            constructor(e, t, n, a) {
                super(a && a.TYPED_VAR_MODAL_TITLE || "Создать переменную", e), this.selectedType_ = null, this.variableNameInput_ = null, this.variableTypesDiv_ = null, this.firstTypeInput_ = null, this.btnCallBackName_ = t, this.types_ = n;
                const i = {
                    TYPED_VAR_MODAL_TITLE: "Создать переменную",
                    TYPED_VAR_MODAL_VARIABLE_NAME_LABEL: "Имя переменной: ",
                    TYPED_VAR_MODAL_TYPES_LABEL: "Тип переменной",
                    TYPED_VAR_MODAL_CONFIRM_BUTTON: "Создать",
                    TYPED_VAR_MODAL_CANCEL_BUTTON: "Отмена",
                    TYPED_VAR_MODAL_INVALID_NAME: "Имя недопустимо. Пожалуйста, выберите другое имя."
                };
                l.utils.object.mixin(i, a), this.setLocale(i), this.shouldCloseOnOverlayClick = !1
            }

            init() {
                super.init(), this.workspace_.registerButtonCallback(this.btnCallBackName_, () => {
                    this.show()
                })
            }

            setLocale(e) {
                Object.keys(e).forEach(t => {
                    l.Msg[t] = e[t]
                })
            }

            dispose() {
                super.dispose(), this.workspace_.removeButtonCallback(this.btnCallBackName_)
            }

            getSelectedType_() {
                return this.selectedType_
            }

            widgetDispose_() {
                super.widgetDispose_(), this.resetModalInputs_()
            }

            onConfirm_() {
                const e = this.getValidInput_(), t = this.getSelectedType_() || "";
                console.log("ok")
                if (e) {
                    const n = l.Variables.nameUsedWithAnyType(e, this.workspace_);
                    if (n) {
                        console.log("ok2")
                        let e = "";
                        n.type === t ? e = l.Msg.VARIABLE_ALREADY_EXISTS.replace("%1", n.name) : (e = l.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, e = e.replace("%1", n.name).replace("%2", this.getDisplayName_(n.type))), l.alert(e)
                    } else {
                        if (t === "unsigned char") {
                            this.workspace_.createVariable("unsigned_char_" + e, t), this.hide()
                        } else if (t === "unsigned int") {
                            this.workspace_.createVariable("unsigned_int_" + e, t), this.hide()
                        } else {
                            this.workspace_.createVariable(t.toLowerCase() + "_" + e, t), this.hide()
                        }
                    }
                } else l.alert(l.Msg.TYPED_VAR_MODAL_INVALID_NAME)
            }

            getDisplayName_(e) {
                for (let t = 0; t < this.types_.length; t++) {
                    const n = this.types_[t];
                    if (e === n[1]) return n[0]
                }
                return ""
            }

            getValidInput_() {
                let e = this.variableNameInput_.value;
                return e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e !== l.Msg.RENAME_VARIABLE && e !== l.Msg.NEW_VARIABLE || (e = null)), e
            }

            renderContent_(e) {
                const t = this.createVarNameContainer_();
                this.variableNameInput_ = t.querySelector(".typedModalVariableNameInput");
                const n = document.createElement("div");
                n.className = "typedModalTypes", n.textContent = l.Msg.TYPED_VAR_MODAL_TYPES_LABEL, this.variableTypesDiv_ = this.createVariableTypeContainer_(this.types_), this.resetModalInputs_(), n.appendChild(this.variableTypesDiv_), e.appendChild(t), e.appendChild(n)
            }

            renderFooter_(e) {
                e.appendChild(this.createConfirmBtn_()), e.appendChild(this.createCancelBtn_())
            }

            createConfirmBtn_() {
                const e = document.createElement("button");
                return e.className = "blocklyModalBtn blocklyModalBtnPrimary", e.textContent = l.Msg.TYPED_VAR_MODAL_CONFIRM_BUTTON, this.addEvent_(e, "click", this, this.onConfirm_), e
            }

            createCancelBtn_() {
                const e = document.createElement("button");
                return e.className = "blocklyModalBtn", e.textContent = l.Msg.TYPED_VAR_MODAL_CANCEL_BUTTON, this.addEvent_(e, "click", this, this.onCancel_), e
            }

            resetModalInputs_() {
                this.firstTypeInput_.checked = !0, this.selectedType_ = this.firstTypeInput_.id, this.variableNameInput_.value = ""
            }

            createVariableTypeContainer_(e) {
                const t = document.createElement("ul");
                t.className = "typedModalList";
                for (let n = 0; n < e.length; n++) {
                    const l = e[n], a = l[0], i = l[1], s = document.createElement("li"),
                        o = document.createElement("input");
                    o.className = "typedModalTypes", o.type = "radio", o.id = i, o.name = "blocklyVariableType", this.addEvent_(o, "click", this, e => {
                        this.selectedType_ = e.target.id
                    }), this.firstTypeInput_ = t.querySelector(".typedModalTypes");
                    const r = document.createElement("label");
                    r.textContent = a, r.setAttribute("for", i), s.appendChild(o), s.appendChild(r), t.appendChild(s)
                }
                return t
            }

            createVarNameContainer_() {
                const e = document.createElement("div");
                e.className = "typedModalVariableInputContainer";
                const t = document.createElement("label");
                t.className = "typedModalVariableLabel", t.textContent = l.Msg.TYPED_VAR_MODAL_VARIABLE_NAME_LABEL, t.setAttribute("for", "variableInput");
                const n = document.createElement("input");
                return n.className = "typedModalVariableNameInput", n.type = "text", n.id = "variableInput", e.appendChild(t), e.appendChild(n), e
            }
        }

        l.Css.register(["\n    .typedModalTitle {\n      font-weight: bold;\n      font-size: 1em;\n    }\n    .typedModalVariableInputContainer {\n      margin: 1em 0 1em 0;\n    }\n    .typedModalVariableLabel{\n      margin-right: .5em;\n    }\n    .typedModalTypes ul{\n      display: flex;\n      flex-wrap: wrap;\n      list-style-type: none;\n      padding: 0;\n    }\n    .typedModalTypes li {\n      margin-right: 1em;\n      display: flex;\n    }"])
    }])
}));
//# sourceMappingURL=index.js.map