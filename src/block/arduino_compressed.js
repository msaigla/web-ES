var generator = {
    classic: {
        digital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"],
        ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"]],
        analog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"]],
        serial: [["Serial", "Serial"], ["Serial1", "Serial1"]],
        speed: [["9600", "9600"], ["38400", "38400"], ["57600", "57600"], ["74880", "74880"], ["115000", "115000"]],
        port: [["1", ["13", "A3"]], ["2", ["10", "A10"]], ["3", ["9", "A9"]], ["4", ["19", "A1"]], ["5", ["1", "0"]], ["6", ["18", "A0"]],
                ["7", ["3", "2"]], ["8", ["20", "A2"]], ["9", ["3", "2"]],
            ],
        servo: {
            "servo1": ["servo1", "8"],
            "servo2": ["servo2", "12"]
        }
    },
    standart: {
        port: {
            "1": ["21", "A3"], 
            "2": ["4", "A6"], 
            "3": ["6", "A7"], 
            "4": ["9", "A9"], 
            "5": ["20", "A2"],
            "6": ["5", "A1"],
            "7": ["13", "A0"],
            "8": ["10", "A10"]
        },
        servo: {
            "S1": ["S1", "11"], 
            "S2": ["S2", "7"],
            "S3": ["S3", "23"], 
            "S4": ["S4", "22"],
            "S5": ["S5", "8"],
            "S6": ["S6", "12"]
        }
    }, 
    mega: { 
        port: {
            "1": ["4", "A0"], 
            "2": ["5", "A1"], 
            "3": ["2", "A2"], 
            "4": ["3", "A3"], 
            "5": ["6", "A4"],
            "6": ["50", "A5"],
            "7": ["13", "A6"],
            "8": ["12", "A7"],
            "9": ["11", "A8"],
            "10": ["10", "A9"],
            "11": ["15", "A10"],
            "12": ["14", "A11"]
        },
        servo: {
            "S1": ["S1", "26"], 
            "S2": ["S2", "27"], 
            "S3": ["S3", "28"], 
            "S4": ["S4", "29"], 
            "S5": ["S5", "30"], 
            "S6": ["S6", "31"],
            "S7": ["S7", "32"], 
            "S8": ["S8", "33"], 
            "S9": ["S9", "34"], 
            "S10": ["S10", "35"], 
            "S11": ["S11", "36"], 
            "S12": ["S12", "37"]
        }
    }
};

var define_var = ["\n"];

;(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD
        define(['./blockly_compressed.js'], factory);
    } else if (typeof exports === 'object') { // Node.js
        module.exports = factory(require('./blockly_compressed.js'));
    } else { // Browser
        root.Blockly.Arduino = factory(root.Blockly);
    }
}(this, function (Blockly) {
    'use strict';
    Blockly.Arduino = new Blockly.Generator("Arduino");
    Blockly.Arduino.addReservedWords("break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,String,boolean,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," + Object.getOwnPropertyNames(Blockly.utils.global).join(","));
    Blockly.Arduino.ORDER_ATOMIC = 0;
    Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;
    Blockly.Arduino.ORDER_NEW = 1.1;
    Blockly.Arduino.ORDER_MEMBER = 1.2;
    Blockly.Arduino.ORDER_FUNCTION_CALL = 2;
    Blockly.Arduino.ORDER_INCREMENT = 3;
    Blockly.Arduino.ORDER_DECREMENT = 3;
    Blockly.Arduino.ORDER_BITWISE_NOT = 4.1;
    Blockly.Arduino.ORDER_UNARY_PLUS = 4.2;
    Blockly.Arduino.ORDER_UNARY_NEGATION = 4.3;
    Blockly.Arduino.ORDER_LOGICAL_NOT = 4.4;
    Blockly.Arduino.ORDER_TYPEOF = 4.5;
    Blockly.Arduino.ORDER_VOID = 4.6;
    Blockly.Arduino.ORDER_DELETE = 4.7;
    Blockly.Arduino.ORDER_AWAIT = 4.8;
    Blockly.Arduino.ORDER_EXPONENTIATION = 5;
    Blockly.Arduino.ORDER_MULTIPLICATION = 5.1;
    Blockly.Arduino.ORDER_DIVISION = 5.2;
    Blockly.Arduino.ORDER_MODULUS = 5.3;
    Blockly.Arduino.ORDER_SUBTRACTION = 6.1;
    Blockly.Arduino.ORDER_ADDITION = 6.2;
    Blockly.Arduino.ORDER_BITWISE_SHIFT = 7;
    Blockly.Arduino.ORDER_RELATIONAL = 8;
    Blockly.Arduino.ORDER_IN = 8;
    Blockly.Arduino.ORDER_INSTANCEOF = 8;
    Blockly.Arduino.ORDER_EQUALITY = 9;
    Blockly.Arduino.ORDER_BITWISE_AND = 10;
    Blockly.Arduino.ORDER_BITWISE_XOR = 11;
    Blockly.Arduino.ORDER_BITWISE_OR = 12;
    Blockly.Arduino.ORDER_LOGICAL_AND = 13;
    Blockly.Arduino.ORDER_LOGICAL_OR = 14;
    Blockly.Arduino.ORDER_CONDITIONAL = 15;
    Blockly.Arduino.ORDER_ASSIGNMENT = 16;
    Blockly.Arduino.ORDER_YIELD = 17;
    Blockly.Arduino.ORDER_COMMA = 18;
    Blockly.Arduino.ORDER_NONE = 99;
    Blockly.Arduino.ORDER_OVERRIDES = [[Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_MEMBER], [Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_FUNCTION_CALL], [Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_MEMBER], [Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_FUNCTION_CALL], [Blockly.Arduino.ORDER_LOGICAL_NOT, Blockly.Arduino.ORDER_LOGICAL_NOT], [Blockly.Arduino.ORDER_MULTIPLICATION, Blockly.Arduino.ORDER_MULTIPLICATION], [Blockly.Arduino.ORDER_ADDITION,
        Blockly.Arduino.ORDER_ADDITION], [Blockly.Arduino.ORDER_LOGICAL_AND, Blockly.Arduino.ORDER_LOGICAL_AND], [Blockly.Arduino.ORDER_LOGICAL_OR, Blockly.Arduino.ORDER_LOGICAL_OR]];
    Blockly.Arduino.isInitialized = !1;
    var all_var;
    Blockly.Arduino.init = function (a) {
        Blockly.Arduino.definitions_ = Object.create(null);
        Blockly.Arduino.setups_ = Object.create(null);
        Blockly.Arduino.functionNames_ = Object.create(null);
        Blockly.Arduino.variableDB_ ? Blockly.Arduino.variableDB_.reset() : Blockly.Arduino.variableDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
        Blockly.Arduino.variableDB_.setVariableMap(a.getVariableMap());
        for (var b = [], c = Blockly.Variables.allDeveloperVariables(a), d = 0; d < c.length; d++) b.push(Blockly.Arduino.variableDB_.getName(c[d], Blockly.Names.DEVELOPER_VARIABLE_TYPE));
        all_var = Blockly.Variables.allUsedVarModels(a);
        a = all_var;
        var result_variables = "";
        for (d = 0; d < a.length; d++){
            b.push(Blockly.Arduino.variableDB_.getName(a[d].getId(), Blockly.VARIABLE_CATEGORY_NAME));
            result_variables = result_variables + (a[d]["type"] != "" ? ((a[d]["type"] != "String" ? a[d]["type"].toLowerCase() : a[d]["type"]) + " " + a[d]["name"] + ";\n") : "");
        }
        Blockly.Arduino.definitions_.variables = "";
        b.length && (Blockly.Arduino.definitions_.variables += result_variables);
        this.isInitialized = !0
    };

    Blockly.Arduino.finish = function (a) {
        a = "  " + a.replace(/\n/g, "\n  ");
        a = a.replace(/\n\s+$/, "\n");
        a = "void loop() {\n" + a + "\n}";
        var b = [], c = [], d;
        for (d in Blockly.Arduino.definitions_) {
            var e = Blockly.Arduino.definitions_[d];
            e.match(/^#include/) ? b.push(e) : c.push(e)
        }
        e = [];
        console.log(b);
        console.log(c);
        let pinsDefault = "";
        if (Blockly.Arduino.setups_["setup_initBasis"] !== undefined) {
            pinsDefault = "pinsDefault();\n"
        }
        console.log(define_var);
        let dv = define_var;
        define_var = ["\n"]
        for (d in Blockly.Arduino.setups_) e.push(Blockly.Arduino.setups_[d]);
        return (dv.join("\n") + b.join("\n") + "\n\n" + c.join("\n") + "\nvoid setup() {\n  " + pinsDefault + e.join("\n  ") + "\n}\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
    };
    Blockly.Arduino.scrubNakedValue = function (a) {
        return a + ";\n"
    };
    Blockly.Arduino.quote_ = function (a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
        if (a.length <= 1) {
            return "'" + a + "'";
        } else {
            return "\"" + a + "\"";
        }
    };
    Blockly.Arduino.multiline_quote_ = function (a) {
        return a.split(/\n/g).map(Blockly.Arduino.quote_).join(" + '\\n' +\n")
    };
    Blockly.Arduino.scrub_ = function (a, b, c) {
        var d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
            var e = a.getCommentText();
            e && (e = Blockly.utils.string.wrap(e, Blockly.Arduino.COMMENT_WRAP - 3), d += Blockly.Arduino.prefixLines(e + "\n", "// "));
            for (var f = 0; f < a.inputList.length; f++) a.inputList[f].type == Blockly.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = Blockly.Arduino.allNestedComments(e)) && (d += Blockly.Arduino.prefixLines(e, "// "))
        }
        a = a.nextConnection && a.nextConnection.targetBlock();
        c = c ? "" : Blockly.Arduino.blockToCode(a);
        return d + b + c
    };
    Blockly.Arduino.getAdjusted = function (a, b, c, d, e) {
        c = c || 0;
        e = e || Blockly.Arduino.ORDER_NONE;
        a.workspace.options.oneBasedIndex && c--;
        var f = a.workspace.options.oneBasedIndex ? "1" : "0";
        a = 0 < c ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_ADDITION) || f : 0 > c ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_SUBTRACTION) || f : d ? Blockly.Arduino.valueToCode(a, b, Blockly.Arduino.ORDER_UNARY_NEGATION) || f : Blockly.Arduino.valueToCode(a, b, e) || f;
        if (Blockly.isNumber(a)) a = Number(a) + c, d &&
        (a = -a); else {
            if (0 < c) {
                a = a + " + " + c;
                var g = Blockly.Arduino.ORDER_ADDITION
            } else 0 > c && (a = a + " - " + -c, g = Blockly.Arduino.ORDER_SUBTRACTION);
            d && (a = c ? "-(" + a + ")" : "-" + a, g = Blockly.Arduino.ORDER_UNARY_NEGATION);
            g = Math.floor(g);
            e = Math.floor(e);
            g && e >= g && (a = "(" + a + ")")
        }
        return a
    };
    Blockly.Arduino.colour = {};
    Blockly.Arduino.colour_picker = function (a) {
        return [Blockly.Arduino.quote_(a.getFieldValue("COLOUR")), Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.colour_random = function (a) {
        return [Blockly.Arduino.provideFunction_("colourRandom", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "() {", "  var num = Math.floor(Math.random() * Math.pow(2, 24));", "  return '#' + ('00000' + num.toString(16)).substr(-6);", "}"]) + "()", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.colour_rgb = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "RED", Blockly.Arduino.ORDER_NONE) || 0,
            c = Blockly.Arduino.valueToCode(a, "GREEN", Blockly.Arduino.ORDER_NONE) || 0;
        a = Blockly.Arduino.valueToCode(a, "BLUE", Blockly.Arduino.ORDER_NONE) || 0;
        return [Blockly.Arduino.provideFunction_("colourRgb", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;",
            "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;", "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.colour_blend = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "COLOUR1", Blockly.Arduino.ORDER_NONE) || "'#000000'",
            c = Blockly.Arduino.valueToCode(a, "COLOUR2", Blockly.Arduino.ORDER_NONE) || "'#000000'";
        a = Blockly.Arduino.valueToCode(a, "RATIO", Blockly.Arduino.ORDER_NONE) || .5;
        return [Blockly.Arduino.provideFunction_("colourBlend", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);",
            "  var g1 = parseInt(c1.substring(3, 5), 16);", "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);", "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);",
            "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists = {};
    Blockly.Arduino.lists_create_empty = function (a) {
        return ["[]", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.lists_create_with = function (a) {
        for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Arduino.valueToCode(a, "ADD" + c, Blockly.Arduino.ORDER_NONE) || "null";
        return ["[" + b.join(", ") + "]", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.lists_repeat = function (a) {
        var b = Blockly.Arduino.provideFunction_("listsRepeat", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
            c = Blockly.Arduino.valueToCode(a, "ITEM", Blockly.Arduino.ORDER_NONE) || "null";
        a = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_NONE) || "0";
        return [b + "(" + c + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists_length = function (a) {
        return [(Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + ".length", Blockly.Arduino.ORDER_MEMBER]
    };
    Blockly.Arduino.lists_isEmpty = function (a) {
        return ["!" + (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + ".length", Blockly.Arduino.ORDER_LOGICAL_NOT]
    };
    Blockly.Arduino.lists_indexOf = function (a) {
        var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
            c = Blockly.Arduino.valueToCode(a, "FIND", Blockly.Arduino.ORDER_NONE) || "''";
        b = (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "[]") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.Arduino.ORDER_ADDITION] : [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists_getIndex = function (a) {
        var b = a.getFieldValue("MODE") || "GET", c = a.getFieldValue("WHERE") || "FROM_START",
            d = Blockly.Arduino.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.Arduino.ORDER_NONE : Blockly.Arduino.ORDER_MEMBER) || "[]";
        switch (c) {
            case "FIRST":
                if ("GET" == b) return [d + "[0]", Blockly.Arduino.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".shift()", Blockly.Arduino.ORDER_MEMBER];
                if ("REMOVE" == b) return d + ".shift();\n";
                break;
            case "LAST":
                if ("GET" == b) return [d + ".slice(-1)[0]", Blockly.Arduino.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".pop()", Blockly.Arduino.ORDER_MEMBER];
                if ("REMOVE" == b) return d + ".pop();\n";
                break;
            case "FROM_START":
                a = Blockly.Arduino.getAdjusted(a, "AT");
                if ("GET" == b) return [d + "[" + a + "]", Blockly.Arduino.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ".splice(" + a + ", 1);\n";
                break;
            case "FROM_END":
                a = Blockly.Arduino.getAdjusted(a, "AT", 1, !0);
                if ("GET" == b) return [d + ".slice(" + a + ")[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
                if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Arduino.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ".splice(" + a + ", 1);";
                break;
            case "RANDOM":
                d = Blockly.Arduino.provideFunction_("listsGetRandomItem", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];", "  }", "}"]) + "(" + d + ", " + ("GET" != b) + ")";
                if ("GET" == b || "GET_REMOVE" == b) return [d,
                    Blockly.Arduino.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ";\n"
        }
        throw Error("Unhandled combination (lists_getIndex).");
    };
    Blockly.Arduino.lists_setIndex = function (a) {
        function b() {
            if (c.match(/^\w+$/)) return "";
            var g = Blockly.Arduino.variableDB_.getDistinctName("tmpList", Blockly.VARIABLE_CATEGORY_NAME),
                h = "var " + g + " = " + c + ";\n";
            c = g;
            return h
        }

        var c = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]",
            d = a.getFieldValue("MODE") || "GET", e = a.getFieldValue("WHERE") || "FROM_START",
            f = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "null";
        switch (e) {
            case "FIRST":
                if ("SET" == d) return c +
                    "[0] = " + f + ";\n";
                if ("INSERT" == d) return c + ".unshift(" + f + ");\n";
                break;
            case "LAST":
                if ("SET" == d) return a = b(), a + (c + "[" + c + ".length - 1] = " + f + ";\n");
                if ("INSERT" == d) return c + ".push(" + f + ");\n";
                break;
            case "FROM_START":
                e = Blockly.Arduino.getAdjusted(a, "AT");
                if ("SET" == d) return c + "[" + e + "] = " + f + ";\n";
                if ("INSERT" == d) return c + ".splice(" + e + ", 0, " + f + ");\n";
                break;
            case "FROM_END":
                e = Blockly.Arduino.getAdjusted(a, "AT", 1, !1, Blockly.Arduino.ORDER_SUBTRACTION);
                a = b();
                if ("SET" == d) return a + (c + "[" + c + ".length - " + e +
                    "] = " + f + ";\n");
                if ("INSERT" == d) return a + (c + ".splice(" + c + ".length - " + e + ", 0, " + f + ");\n");
                break;
            case "RANDOM":
                a = b();
                e = Blockly.Arduino.variableDB_.getDistinctName("tmpX", Blockly.VARIABLE_CATEGORY_NAME);
                a += "var " + e + " = Math.floor(Math.random() * " + c + ".length);\n";
                if ("SET" == d) return a + (c + "[" + e + "] = " + f + ";\n");
                if ("INSERT" == d) return a + (c + ".splice(" + e + ", 0, " + f + ");\n")
        }
        throw Error("Unhandled combination (lists_setIndex).");
    };
    Blockly.Arduino.lists.getIndex_ = function (a, b, c) {
        return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
    };
    Blockly.Arduino.lists_getSublist = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]",
            c = a.getFieldValue("WHERE1"), d = a.getFieldValue("WHERE2");
        if ("FIRST" == c && "LAST" == d) b += ".slice(0)"; else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == d) {
            switch (c) {
                case "FROM_START":
                    var e = Blockly.Arduino.getAdjusted(a, "AT1");
                    break;
                case "FROM_END":
                    e = Blockly.Arduino.getAdjusted(a, "AT1", 1, !1, Blockly.Arduino.ORDER_SUBTRACTION);
                    e = b + ".length - " + e;
                    break;
                case "FIRST":
                    e =
                        "0";
                    break;
                default:
                    throw Error("Unhandled option (lists_getSublist).");
            }
            switch (d) {
                case "FROM_START":
                    a = Blockly.Arduino.getAdjusted(a, "AT2", 1);
                    break;
                case "FROM_END":
                    a = Blockly.Arduino.getAdjusted(a, "AT2", 0, !1, Blockly.Arduino.ORDER_SUBTRACTION);
                    a = b + ".length - " + a;
                    break;
                case "LAST":
                    a = b + ".length";
                    break;
                default:
                    throw Error("Unhandled option (lists_getSublist).");
            }
            b = b + ".slice(" + e + ", " + a + ")"
        } else {
            e = Blockly.Arduino.getAdjusted(a, "AT1");
            a = Blockly.Arduino.getAdjusted(a, "AT2");
            var f = Blockly.Arduino.lists.getIndex_,
                g = {FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd"};
            b = Blockly.Arduino.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + f("sequence", c, "at1") + ";", "  var end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" ==
            d ? ", " + a : "") + ")"
        }
        return [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists_sort = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_FUNCTION_CALL) || "[]",
            c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
        a = a.getFieldValue("TYPE");
        var d = Blockly.Arduino.provideFunction_("listsGetSortCompare", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },",
            '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"]);
        return [b + ".slice().sort(" + d + '("' + a + '", ' + c + "))", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists_split = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "INPUT", Blockly.Arduino.ORDER_MEMBER),
            c = Blockly.Arduino.valueToCode(a, "DELIM", Blockly.Arduino.ORDER_NONE) || "''";
        a = a.getFieldValue("MODE");
        if ("SPLIT" == a) b || (b = "''"), a = "split"; else if ("JOIN" == a) b || (b = "[]"), a = "join"; else throw Error("Unknown mode: " + a);
        return [b + "." + a + "(" + c + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.lists_reverse = function (a) {
        return [(Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_FUNCTION_CALL) || "[]") + ".slice().reverse()", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.logic = {};
    Blockly.Arduino.controls_if = function (a) {
        var b = 0, c = "";
        Blockly.Arduino.STATEMENT_PREFIX && (c += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX, a));
        do {
            var d = Blockly.Arduino.valueToCode(a, "IF" + b, Blockly.Arduino.ORDER_NONE) || "false";
            var e = Blockly.Arduino.statementToCode(a, "DO" + b);
            Blockly.Arduino.STATEMENT_SUFFIX && (e = Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a), Blockly.Arduino.INDENT) + e);
            c += (0 < b ? " else " : "") + "if (" +
                d + ") {\n" + e + "}";
            ++b
        } while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || Blockly.Arduino.STATEMENT_SUFFIX) e = Blockly.Arduino.statementToCode(a, "ELSE"), Blockly.Arduino.STATEMENT_SUFFIX && (e = Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a), Blockly.Arduino.INDENT) + e), c += " else {\n" + e + "}";
        return c + "\n"
    };
    Blockly.Arduino.controls_ifelse = Blockly.Arduino.controls_if;
    Blockly.Arduino.logic_compare = function (a) {
        var b = {EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">="}[a.getFieldValue("OP")],
            c = "==" == b || "!=" == b ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL,
            d = Blockly.Arduino.valueToCode(a, "A", c) || "0";
        a = Blockly.Arduino.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c]
    };
    Blockly.Arduino.logic_operation = function (a) {
        var b = "AND" == a.getFieldValue("OP") ? "&&" : "||",
            c = "&&" == b ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR,
            d = Blockly.Arduino.valueToCode(a, "A", c);
        a = Blockly.Arduino.valueToCode(a, "B", c);
        if (d || a) {
            var e = "&&" == b ? "true" : "false";
            d || (d = e);
            a || (a = e)
        } else a = d = "false";
        return [d + " " + b + " " + a, c]
    };
    Blockly.Arduino.logic_negate = function (a) {
        var b = Blockly.Arduino.ORDER_LOGICAL_NOT;
        return ["!" + (Blockly.Arduino.valueToCode(a, "BOOL", b) || "true"), b]
    };
    Blockly.Arduino.logic_boolean = function (a) {
        return ["TRUE" == a.getFieldValue("BOOL") ? "true" : "false", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.logic_null = function (a) {
        return ["null", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.logic_ternary = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "IF", Blockly.Arduino.ORDER_CONDITIONAL) || "false",
            c = Blockly.Arduino.valueToCode(a, "THEN", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
        a = Blockly.Arduino.valueToCode(a, "ELSE", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
        return [b + " ? " + c + " : " + a, Blockly.Arduino.ORDER_CONDITIONAL]
    };
    Blockly.Arduino.base = {};
    Blockly.Arduino.base_delay = function () {
        return "delay(" + (Blockly.Arduino.valueToCode(this, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC) || "1000") + ");\n"
    };
    Blockly.Arduino.base_map = function () {
        var a = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_NONE),
            b = Blockly.Arduino.valueToCode(this, "DMAX", Blockly.Arduino.ORDER_ATOMIC);
        return ["map(" + a + ", 0, 1024, 0, " + b + ")", Blockly.Arduino.ORDER_NONE]
    };
    Blockly.Arduino.inout_initBasis = function () {
        Blockly.Arduino.definitions_.define_servo="#include <controlAllPins.h>\n";
        Blockly.Arduino.setups_["setup_initBasis"] = "";
        return ""
    };

    Blockly.Arduino.servo_read_degrees = function() {
        var a=this.getFieldValue("PIN");
        Blockly.Arduino.definitions_.define_servo="#include &lt;Servo.h&gt;\n";
        Blockly.Arduino.definitions_["var_servo"+a]="Servo servo_"+a+";\n";
        Blockly.Arduino.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";
        return"servo_"+a+".read()"
    };
    
    Blockly.Arduino.asset = {};
    Blockly.Arduino.asset_delay = function (a) {
        let WAIT = Blockly.Arduino.valueToCode(a, "WAIT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        switch (a.getFieldValue("TIME")) {
            case "SECONDS":
                return "delay(" + WAIT + " * 1000);\n";
            case "MICRO":
                return "delayMicroseconds(" + WAIT + ");\n"
            case "MILLI":
                return "delay(" + WAIT + ");\n";
        }
        return "delay(" + WAIT + ");";
    };
    Blockly.Arduino.asset_millis = function (a) {
        return ["millis()", Blockly.Arduino.ORDER_ATOMIC];;
    };
    Blockly.Arduino.asset_abortTimer = function (a) {
        let TIMER = a.getFieldValue("TIMER"),
            FUNCTION = a.getFieldValue("FUNCTION"),
            WAIT = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1,
            DO = Blockly.Arduino.statementToCode(a, "DO");
        Blockly.Arduino.definitions_["define_" + FUNCTION] = "void " + FUNCTION + "() {\n" + DO + "\n}\n";
        if (TIMER === "Timer1") {
            Blockly.Arduino.definitions_.define_TimerOne_h = "#include <TimerOne.h>";
        } else {
            Blockly.Arduino.definitions_.define_TimerThree_h = "#include <TimerThree.h>";
        }
        // Blockly.Arduino.setups_[TIMER + ".setPeriod()"] = TIMER + ".setPeriod((1000000 / " + WAIT + " ));";
        Blockly.Arduino.setups_[TIMER + ".initialize()"] = TIMER + ".initialize((1000000 / " + WAIT + " ));";
        Blockly.Arduino.setups_[TIMER + ".attachInterrupt()"] = TIMER + ".attachInterrupt(" + FUNCTION + ");";
        return ""
    };
    Blockly.Arduino.asset_timerDetachInterrupt= function (a) {
        return a.getFieldValue("TIMER") + ".detachInterrupt();\n"
    };
    Blockly.Arduino.asset_timerAttachInterrupt= function (a) {
        return a.getFieldValue("TIMER") + ".attachInterrupt(" + a.getFieldValue("FUNCTION") + ");\n"
    };
    Blockly.Arduino.asset_timerPWM = function (a) {
        let pin = a.getFieldValue("PIN"),
            HZ = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1,
            VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 50;
        Blockly.Arduino.definitions_.define_TimerOne_h = "#include <TimerOne.h>";
        Blockly.Arduino.setups_["setup_output_" + pin] = "pinMode(" + pin + ", OUTPUT);";
        Blockly.Arduino.setups_["Timer1.initialize()"] = "Timer1.initialize(50000);";
        return "Timer1.pwm(" + pin + ", " + VALUE + ", " + HZ + ");\n"
    };
    Blockly.Arduino.asset_timerPeriod = function (a) {
        let WAIT = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1,
            TIMER = a.getFieldValue("TIMER");
        return TIMER + ".setPeriod((1000000 / " + WAIT + " ));"
    };
    Blockly.Arduino.asset_init = function (a) {
        let DO = Blockly.Arduino.statementToCode(a, "DO");
        Blockly.Arduino.definitions_["define_initialization"] = "void initialization () {\n" + DO + "\n}\n";
        Blockly.Arduino.setups_["initialization"] = "initialization();";
        return ""
    };
    Blockly.Arduino.asset_map = function (a) { 
        let VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let FROM_LOW = Blockly.Arduino.valueToCode(a, "FROM_LOW", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let FROM_HIGH = Blockly.Arduino.valueToCode(a, "FROM_HIGH", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let TO_LOW = Blockly.Arduino.valueToCode(a, "TO_LOW", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let TO_HIGH = Blockly.Arduino.valueToCode(a, "TO_HIGH", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        return ["map(" + VALUE + ", " 
                    + FROM_LOW + ", " 
                    + FROM_HIGH + ", " 
                    + TO_LOW + ", " 
                    + TO_HIGH + ")", Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.asset_max = function (a) {
        let VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let MAX = Blockly.Arduino.valueToCode(a, "MAX", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        return [VALUE + ">" + MAX + " ? " + MAX + " : " + VALUE, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.asset_min = function (a) {
        let VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let MIN = Blockly.Arduino.valueToCode(a, "MIN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        return [VALUE + "<" + MIN + " ? " + MIN + " : " + VALUE, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.asset_max_min = function (a) {
        let VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let MAX = Blockly.Arduino.valueToCode(a, "MAX", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        let MIN = Blockly.Arduino.valueToCode(a, "MIN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        return [VALUE + "<=" + MIN + "?" + MIN + ":(" + VALUE + ">=" + MAX + "?" + MAX + ":" + VALUE + ")", Blockly.Arduino.ORDER_ATOMIC];
    };
    
    Blockly.Arduino.loops = {};
    Blockly.Arduino.controls_repeat_ext = function (a) {
        var b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : Blockly.Arduino.valueToCode(a, "TIMES", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
            c = Blockly.Arduino.statementToCode(a, "DO");
        c = Blockly.Arduino.addLoopTrap(c, a);
        a = "";
        var d = Blockly.Arduino.variableDB_.getDistinctName("count", Blockly.VARIABLE_CATEGORY_NAME), e = b;
        b.match(/^\w+$/) || Blockly.isNumber(b) || (e = Blockly.Arduino.variableDB_.getDistinctName("repeat_end", Blockly.VARIABLE_CATEGORY_NAME),
            a += "var " + e + " = " + b + ";\n");
        return a + ("for (int " + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + c + "}\n")
    };
    Blockly.Arduino.controls_repeat = Blockly.Arduino.controls_repeat_ext;
    Blockly.Arduino.controls_whileUntil = function (a) {
        var b = "UNTIL" == a.getFieldValue("MODE"),
            c = Blockly.Arduino.valueToCode(a, "BOOL", b ? Blockly.Arduino.ORDER_LOGICAL_NOT : Blockly.Arduino.ORDER_NONE) || "false",
            d = Blockly.Arduino.statementToCode(a, "DO");
        d = Blockly.Arduino.addLoopTrap(d, a);
        b && (c = "!" + c);
        return "while (" + c + ") {\n" + d + "}\n"
    };
    Blockly.Arduino.controls_for = function (a) {
        var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME),
            c = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
            d = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
            e = Blockly.Arduino.valueToCode(a, "BY", Blockly.Arduino.ORDER_ASSIGNMENT) || "1",
            f = Blockly.Arduino.statementToCode(a, "DO");
        f = Blockly.Arduino.addLoopTrap(f, a);
        if (Blockly.isNumber(c) && Blockly.isNumber(d) &&
            Blockly.isNumber(e)) {
            var g = Number(c) <= Number(d);
            a = "for (" + b + " = " + c + "; " + b + (g ? " <= " : " >= ") + d + "; " + b;
            b = Math.abs(Number(e));
            a = (1 == b ? a + (g ? "++" : "--") : a + ((g ? " += " : " -= ") + b)) + (") {\n" + f + "}\n")
        } else a = "", g = c, c.match(/^\w+$/) || Blockly.isNumber(c) || (g = Blockly.Arduino.variableDB_.getDistinctName(b + "_start", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + g + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || Blockly.isNumber(d) || (c = Blockly.Arduino.variableDB_.getDistinctName(b + "_end", Blockly.VARIABLE_CATEGORY_NAME), a +=
            "var " + c + " = " + d + ";\n"), d = Blockly.Arduino.variableDB_.getDistinctName(b + "_inc", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + d + " = ", a = Blockly.isNumber(e) ? a + (Math.abs(e) + ";\n") : a + ("Math.abs(" + e + ");\n"), a = a + ("if (" + g + " > " + c + ") {\n") + (Blockly.Arduino.INDENT + d + " = -" + d + ";\n"), a += "}\n", a += "for (" + b + " = " + g + "; " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + d + ") {\n" + f + "}\n";
        return a
    };
    Blockly.Arduino.controls_forEach = function (a) {
        var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME),
            c = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_ASSIGNMENT) || "[]",
            d = Blockly.Arduino.statementToCode(a, "DO");
        d = Blockly.Arduino.addLoopTrap(d, a);
        a = "";
        var e = c;
        c.match(/^\w+$/) || (e = Blockly.Arduino.variableDB_.getDistinctName(b + "_list", Blockly.VARIABLE_CATEGORY_NAME), a += "var " + e + " = " + c + ";\n");
        c = Blockly.Arduino.variableDB_.getDistinctName(b +
            "_index", Blockly.VARIABLE_CATEGORY_NAME);
        d = Blockly.Arduino.INDENT + b + " = " + e + "[" + c + "];\n" + d;
        return a + ("for (var " + c + " in " + e + ") {\n" + d + "}\n")
    };
    Blockly.Arduino.controls_flow_statements = function (a) {
        var b = "";
        Blockly.Arduino.STATEMENT_PREFIX && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX, a));
        Blockly.Arduino.STATEMENT_SUFFIX && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a));
        if (Blockly.Arduino.STATEMENT_PREFIX) {
            var c = Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);
            c && !c.suppressPrefixSuffix && (b += Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,
                c))
        }
        switch (a.getFieldValue("FLOW")) {
            case "BREAK":
                return b + "break;\n";
            case "CONTINUE":
                return b + "continue;\n"
        }
        throw Error("Unknown flow statement.");
    };
    Blockly.Arduino.loops_break = function (a) {
        return "break;\n";
    }
    Blockly.Arduino.math = {};
    Blockly.Arduino.math_number = function (a) {
        a = Number(a.getFieldValue("NUM"));
        return [a, 0 <= a ? Blockly.Arduino.ORDER_ATOMIC : Blockly.Arduino.ORDER_UNARY_NEGATION]
    };
    Blockly.Arduino.math_arithmetic = function (a) {
        var b = {
            ADD: [" + ", Blockly.Arduino.ORDER_ADDITION],
            MINUS: [" - ", Blockly.Arduino.ORDER_SUBTRACTION],
            MULTIPLY: [" * ", Blockly.Arduino.ORDER_MULTIPLICATION],
            DIVIDE: [" / ", Blockly.Arduino.ORDER_DIVISION],
            POWER: [null, Blockly.Arduino.ORDER_NONE]
        }[a.getFieldValue("OP")], c = b[0];
        b = b[1];
        var d = Blockly.Arduino.valueToCode(a, "A", b) || "0";
        a = Blockly.Arduino.valueToCode(a, "B", b) || "0";
        return c ? [d + c + a, b] : [".pow(" + d + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.math_whole_part_division = function (a) {
        let NUMBER1 = (Blockly.Arduino.valueToCode(a, "NUMBER1", Blockly.Arduino.ORDER_MEMBER) || 0); 
        let NUMBER2 = (Blockly.Arduino.valueToCode(a, "NUMBER2", Blockly.Arduino.ORDER_MEMBER) || 1);
        return  [NUMBER1 + " / " + NUMBER2 + " - (" + NUMBER1 + " % " + NUMBER2 + ")", Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.math_boolean_in_numeric = function (a){
        let VAL = Blockly.Arduino.valueToCode(a, "VAL", Blockly.Arduino.ORDER_MEMBER) || "false";
        return ["(" + VAL + " ? 1 : 0 )", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.math_increment_and_decrement = function (a) {
        let NUM = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_MEMBER) || 0; 
        let INC_DEC = a.getFieldValue("INC_DEC");
        return  NUM + INC_DEC + ";\n";
    };
    Blockly.Arduino.math_one_action = function (a) {
        let VAL1 = Blockly.Arduino.valueToCode(a, "VAL1", Blockly.Arduino.ORDER_MEMBER) || 0; 
        let VAL2 = Blockly.Arduino.valueToCode(a, "VAL2", Blockly.Arduino.ORDER_MEMBER) || 0;
        let ACTION = a.getFieldValue("ACTION");
        return VAL1 + ACTION + VAL2 + ";\n";
    };
    Blockly.Arduino.math_random = function (a) {
        let MIN = Blockly.Arduino.valueToCode(a, "MIN", Blockly.Arduino.ORDER_MEMBER) || 0; 
        let MAX = Blockly.Arduino.valueToCode(a, "MAX", Blockly.Arduino.ORDER_MEMBER) || 0;
        return  ["random(" + MIN + ", " + MAX + ")", Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.math_single = function (a) {
        var b = a.getFieldValue("OP");
        Blockly.Arduino.definitions_.define_math_h = "#include <math.h>\n";
        if ("NEG" == b) return a = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_UNARY_NEGATION) || "0", "-" == a[0] && (a = " " + a), ["-" + a, Blockly.Arduino.ORDER_UNARY_NEGATION];
        a = "SIN" == b || "COS" == b || "TAN" == b ? Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_DIVISION) || "0" : Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_NONE) || "0";
        switch (b) {
            case "ABS":
                var c = "abs(" + a + ")";
                break;
            case "ROOT":
                c = "sqrt(" + a + ")";
                break;
            case "LN":
                c = "log(" + a + ")";
                break;
            case "EXP":
                c = "exp(" + a + ")";
                break;
            case "POW10":
                c = "pow(10," + a + ")";
                break;
            case "ROUND":
                c = "round(" + a + ")";
                break;
            case "ROUNDUP":
                c = "ceil(" + a + ")";
                break;
            case "ROUNDDOWN":
                c = "floor(" + a + ")";
                break;
            case "SIN":
                c = "sin(" + a + ")";
                break;
            case "COS":
                c = "cos(" + a + ")";
                break;
            case "TAN":
                c = "tan(" + a + ")"
        }
        if (c) return [c, Blockly.Arduino.ORDER_FUNCTION_CALL];
        switch (b) {
            case "LOG10":
                c = "log10(" + a +")";
                break;
            case "ASIN":
                c = "asin(" + a + ")";
                break;
            case "ACOS":
                c = "acos(" + a + ")";
                break;
            case "ATAN":
                c = "atan(" + a + ")";
                break;
            default:
                throw Error("Unknown math operator: " + b);
        }
        return [c, Blockly.Arduino.ORDER_DIVISION]
    };
    Blockly.Arduino.math_constant = function (a) {
        return {
            PI: ["PI", Blockly.Arduino.ORDER_MEMBER],
            E: ["E", Blockly.Arduino.ORDER_MEMBER],
            GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", Blockly.Arduino.ORDER_DIVISION],
            SQRT2: ["SQRT2", Blockly.Arduino.ORDER_MEMBER],
            SQRT1_2: ["SQRT1_2", Blockly.Arduino.ORDER_MEMBER],
            INFINITY: ["Infinity", Blockly.Arduino.ORDER_ATOMIC]
        }[a.getFieldValue("CONSTANT")]
    };
    Blockly.Arduino.math_number_property = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Arduino.ORDER_MODULUS) || "0",
            c = a.getFieldValue("PROPERTY");
        Blockly.Arduino.definitions_.define_math_h = "#include <math.h>\n";
        if ("PRIME" == c) return [Blockly.Arduino.provideFunction_("mathIsPrime", ["boolean " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(int n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.",
            "  if (isnan(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (int x = 6; x <= sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]) + "(" + b + ")", Blockly.Arduino.ORDER_FUNCTION_CALL];
        switch (c) {
            case "EVEN":
                var d = b + " % 2 == 0";
                break;
            case "ODD":
                d = "abs(" + b + " % 2) == 1";
                break;
            case "WHOLE":
                d = "(abs(round(" + b + ") - " + b + ") < 0.001 ? true : false)";
                break;
            case "POSITIVE":
                d =
                    b + " > 0";
                break;
            case "NEGATIVE":
                d = b + " < 0";
                break;
            case "DIVISIBLE_BY":
                a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MODULUS) || "0", d = b + " % " + a + " == 0"
        }
        return [d, Blockly.Arduino.ORDER_EQUALITY]
    };
    Blockly.Arduino.math_change = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "DELTA", Blockly.Arduino.ORDER_ADDITION) || "0";
        a = Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
        return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
    };
    Blockly.Arduino.math_round = Blockly.Arduino.math_single;
    Blockly.Arduino.math_trig = Blockly.Arduino.math_single;
    Blockly.Arduino.math_on_list = function (a) {
        var b = a.getFieldValue("OP");
        switch (b) {
            case "SUM":
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_MEMBER) || "[]";
                a += ".reduce(function(x, y) {return x + y;})";
                break;
            case "MIN":
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = "Math.min.apply(null, " + a + ")";
                break;
            case "MAX":
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = "Math.max.apply(null, " + a + ")";
                break;
            case "AVERAGE":
                b = Blockly.Arduino.provideFunction_("mathMean",
                    ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = b + "(" + a + ")";
                break;
            case "MEDIAN":
                b = Blockly.Arduino.provideFunction_("mathMedian", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;",
                    "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = b + "(" + a + ")";
                break;
            case "MODE":
                b = Blockly.Arduino.provideFunction_("mathModes", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(values) {", "  var modes = [];",
                    "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);", "  }", "  for (var j = 0; j < counts.length; j++) {",
                    "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"]);
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = b + "(" + a + ")";
                break;
            case "STD_DEV":
                b = Blockly.Arduino.provideFunction_("mathStandardDeviation", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;",
                    "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);", "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"]);
                a = Blockly.Arduino.valueToCode(a, "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = b + "(" + a + ")";
                break;
            case "RANDOM":
                b = Blockly.Arduino.provideFunction_("mathRandomList", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
                a = Blockly.Arduino.valueToCode(a,
                    "LIST", Blockly.Arduino.ORDER_NONE) || "[]";
                a = b + "(" + a + ")";
                break;
            default:
                throw Error("Unknown operator: " + b);
        }
        return [a, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.math_modulo = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "DIVIDEND", Blockly.Arduino.ORDER_MODULUS) || "0";
        a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MODULUS) || "0";
        return [b + " % " + a, Blockly.Arduino.ORDER_MODULUS]
    };
    Blockly.Arduino.math_constrain = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_NONE) || "0",
            c = Blockly.Arduino.valueToCode(a, "LOW", Blockly.Arduino.ORDER_NONE) || "0";
        a = Blockly.Arduino.valueToCode(a, "HIGH", Blockly.Arduino.ORDER_NONE) || "Infinity";
        return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.math_random_int = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_NONE) || "0";
        a = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_NONE) || "0";
        return [Blockly.Arduino.provideFunction_("mathRandomInt", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);",
            "}"]) + "(" + b + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.math_random_float = function (a) {
        return ["Math.random()", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.math_atan2 = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "X", Blockly.Arduino.ORDER_NONE) || "0";
        return ["Math.atan2(" + (Blockly.Arduino.valueToCode(a, "Y", Blockly.Arduino.ORDER_NONE) || "0") + ", " + b + ") / Math.PI * 180", Blockly.Arduino.ORDER_DIVISION]
    };
    Blockly.Arduino.procedures = {};
    Blockly.Arduino.procedures_defreturn = function () {
        var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE),
            b = Blockly.Arduino.statementToCode(this, "STACK");
        Blockly.Arduino.INFINITE_LOOP_TRAP && (b = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + b);
        var c = Blockly.Arduino.valueToCode(this, "RETURN", Blockly.Arduino.ORDER_NONE) || "0";
        console.log(c);
        var d = "void";
        if (c[0]) {
            var type_obj = c[0].charCodeAt();
            if (48 <= type_obj && type_obj <= 57 || type_obj === 45) {
                if (c.indexOf(".") !== -1) {
                    d = "float";
                } else {
                    d = "int";
                }
            } else if (type_obj === 34){
                d = "string";
            } else if (type_obj === 39) {
                console.log(all_var);
                d = "char";
            } else {
                if (c.indexOf("digitalRead") !== -1) {
                    d = "int";
                } else if (c.indexOf("Serial") !== -1) {
                    d = "string";
                } else if (c.indexOf("HIGH") !== -1 || c.indexOf("LOW") !== -1) {
                    d = "boolean";
                } else {
                    all_var.forEach(function(entry) {
                        if (entry["name"] === c) {
                            d = entry["type"].toLowerCase();
                        }
                        console.log(entry["name"]);
                    });
                }
            }
        }
        
        c && (c = "  return " + c + ";\n");
        for (var e = [], f = 0; f < this.arguments_.length; f++) { 
            e[f] = "int " + Blockly.Arduino.variableDB_.getName(this.arguments_[f], Blockly.Variables.NAME_TYPE);
        }
        b = d + " " + a + "(" + e.join(", ") + ") {\n" + b + c + "}\n";
        b = Blockly.Arduino.scrub_(this, b);
        Blockly.Arduino.definitions_[a] = b;
        return null
    };
    Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;
    Blockly.Arduino.procedures_callreturn = function (a) {
        for (var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"), Blockly.PROCEDURE_CATEGORY_NAME), c = [], d = a.getVars(), e = 0; e < d.length; e++) 
            c[e] = Blockly.Arduino.valueToCode(a, "ARG" + e, Blockly.Arduino.ORDER_NONE) || "null";
        return [b + "(" + c.join(", ") + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.procedures_callnoreturn = function (a) {
        return Blockly.Arduino.procedures_callreturn(a)[0] + ";\n"
    };
    Blockly.Arduino.procedures_ifreturn = function (a) {
        var b = "if (" + (Blockly.Arduino.valueToCode(a, "CONDITION", Blockly.Arduino.ORDER_NONE) || "false") + ") {\n";
        Blockly.Arduino.STATEMENT_SUFFIX && (b += Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX, a), Blockly.Arduino.INDENT));
        a.hasReturnValue_ ? (a = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_NONE) || "null", b += Blockly.Arduino.INDENT + "return " + a + ";\n") : b += Blockly.Arduino.INDENT +
            "return;\n";
        return b + "}\n"
    };
    Blockly.Arduino.texts = {};
    Blockly.Arduino.text = function (a) {
        return [Blockly.Arduino.quote_(a.getFieldValue("TEXT")), Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.text_multiline = function (a) {
        a = Blockly.Arduino.multiline_quote_(a.getFieldValue("TEXT"));
        var b = -1 != a.indexOf("+") ? Blockly.Arduino.ORDER_ADDITION : Blockly.Arduino.ORDER_ATOMIC;
        return [a, b]
    };
    Blockly.Arduino.text.forceString_ = function (a) {
        return Blockly.Arduino.text.forceString_.strRegExp.test(a) ? [a, Blockly.Arduino.ORDER_ATOMIC] : ["String(" + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;
    Blockly.Arduino.text_join = function (a) {
        switch (a.itemCount_) {
            case 0:
                return ["\"\"", Blockly.Arduino.ORDER_ATOMIC];
            case 1:
                return a = Blockly.Arduino.valueToCode(a, "ADD0", Blockly.Arduino.ORDER_NONE) || "''", Blockly.Arduino.text.forceString_(a);
            case 2:
                var b = Blockly.Arduino.valueToCode(a, "ADD0", Blockly.Arduino.ORDER_NONE) || "''";
                a = Blockly.Arduino.valueToCode(a, "ADD1", Blockly.Arduino.ORDER_NONE) || "''";
                a = Blockly.Arduino.text.forceString_(b)[0] + " + " + Blockly.Arduino.text.forceString_(a)[0];
                return [a, Blockly.Arduino.ORDER_ADDITION];
            default:
                b = Array(a.itemCount_);
                for (var c = 0; c < a.itemCount_; c++) b[c] = Blockly.Arduino.valueToCode(a, "ADD" + c, Blockly.Arduino.ORDER_NONE) || "''";
                a = "[" + b.join(",") + "].join('')";
                return [a, Blockly.Arduino.ORDER_FUNCTION_CALL]
        }
    };
    Blockly.Arduino.text_append = function (a) {
        var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
        a = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_NONE) || "''";
        return b + " += " + Blockly.Arduino.text.forceString_(a)[0] + ";\n"
    };
    Blockly.Arduino.text_length = function (a) {
        return [(Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "''") + ".length()", Blockly.Arduino.ORDER_MEMBER]
    };
    Blockly.Arduino.text_isEmpty = function (a) {
        return ["!" + (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "''") + ".length", Blockly.Arduino.ORDER_LOGICAL_NOT]
    };
    Blockly.Arduino.text_indexOf = function (a) {
        var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
            c = Blockly.Arduino.valueToCode(a, "FIND", Blockly.Arduino.ORDER_NONE) || "''";
        b = (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.Arduino.ORDER_ADDITION] : [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_charAt = function (a) {
        var b = a.getFieldValue("WHERE") || "FROM_START",
            c = Blockly.Arduino.valueToCode(a, "VALUE", "RANDOM" == b ? Blockly.Arduino.ORDER_NONE : Blockly.Arduino.ORDER_MEMBER) || "''";
        switch (b) {
            case "FIRST":
                return [c + ".charAt(0)", Blockly.Arduino.ORDER_FUNCTION_CALL];
            case "LAST":
                return [c + ".slice(-1)", Blockly.Arduino.ORDER_FUNCTION_CALL];
            case "FROM_START":
                return a = Blockly.Arduino.getAdjusted(a, "AT"), [c + ".charAt(" + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL];
            case "FROM_END":
                return a =
                    Blockly.Arduino.getAdjusted(a, "AT", 1, !0), [c + ".slice(" + a + ").charAt(0)", Blockly.Arduino.ORDER_FUNCTION_CALL];
            case "RANDOM":
                return [Blockly.Arduino.provideFunction_("textRandomLetter", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(text) {", "  var x = Math.floor(Math.random() * text.length);", "  return text[x];", "}"]) + "(" + c + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
        }
        throw Error("Unhandled option (text_charAt).");
    };
    Blockly.Arduino.text.getIndex_ = function (a, b, c) {
        return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
    };
    Blockly.Arduino.text_subString = function (a) {
        let STR = Blockly.Arduino.valueToCode(a, "STR", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "",
            FROM = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0, 
            TO = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null;
        if (TO) {
            return [STR + ".substring(" + FROM + ", " + TO + ")", Blockly.Arduino.ORDER_ATOMIC]
        } else {
            return [STR + ".substring(" + FROM + ")", Blockly.Arduino.ORDER_ATOMIC]
        }
    }
    Blockly.Arduino.text_getSubstring = function (a) {
        var b = a.getFieldValue("WHERE1"), c = a.getFieldValue("WHERE2"),
            d = "FROM_END" != b && "LAST" != b && "FROM_END" != c && "LAST" != c,
            e = Blockly.Arduino.valueToCode(a, "STRING", d ? Blockly.Arduino.ORDER_MEMBER : Blockly.Arduino.ORDER_NONE) || "''";
        if ("FIRST" == b && "LAST" == c) return [e, Blockly.Arduino.ORDER_NONE];
        if (e.match(/^'?\w+'?$/) || d) {
            switch (b) {
                case "FROM_START":
                    d = Blockly.Arduino.getAdjusted(a, "AT1");
                    break;
                case "FROM_END":
                    d = Blockly.Arduino.getAdjusted(a, "AT1",
                        1, !1, Blockly.Arduino.ORDER_SUBTRACTION);
                    d = e + ".length - " + d;
                    break;
                case "FIRST":
                    d = "0";
                    break;
                default:
                    throw Error("Unhandled option (text_getSubstring).");
            }
            switch (c) {
                case "FROM_START":
                    a = Blockly.Arduino.getAdjusted(a, "AT2", 1);
                    break;
                case "FROM_END":
                    a = Blockly.Arduino.getAdjusted(a, "AT2", 0, !1, Blockly.Arduino.ORDER_SUBTRACTION);
                    a = e + ".length - " + a;
                    break;
                case "LAST":
                    a = e + ".length";
                    break;
                default:
                    throw Error("Unhandled option (text_getSubstring).");
            }
            b = e + ".slice(" + d + ", " + a + ")"
        } else {
            d = Blockly.Arduino.getAdjusted(a,
                "AT1");
            a = Blockly.Arduino.getAdjusted(a, "AT2");
            var f = Blockly.Arduino.text.getIndex_,
                g = {FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd"};
            b = Blockly.Arduino.provideFunction_("subsequence" + g[b] + g[c], ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == b || "FROM_START" == b ? ", at1" : "") + ("FROM_END" == c || "FROM_START" == c ? ", at2" : "") + ") {", "  var start = " + f("sequence", b, "at1") + ";", "  var end = " + f("sequence", c, "at2") + " + 1;", "  return sequence.slice(start, end);",
                "}"]) + "(" + e + ("FROM_END" == b || "FROM_START" == b ? ", " + d : "") + ("FROM_END" == c || "FROM_START" == c ? ", " + a : "") + ")"
        }
        return [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_changeCase = function (a) {
        var b = {UPPERCASE: ".toUpperCase()", LOWERCASE: ".toLowerCase()", TITLECASE: null}[a.getFieldValue("CASE")];
        a = Blockly.Arduino.valueToCode(a, "TEXT", b ? Blockly.Arduino.ORDER_MEMBER : Blockly.Arduino.ORDER_NONE) || "''";
        return [b ? a + b : Blockly.Arduino.provideFunction_("textToTitleCase", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(str) {", "  return str.replace(/\\S+/g,", "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});",
            "}"]) + "(" + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_trim = function (a) {
        var b = {
            LEFT: ".replace(/^[\\s\\xa0]+/, '')",
            RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
            BOTH: ".trim()"
        }[a.getFieldValue("MODE")];
        return [(Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_MEMBER) || "''") + b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_print = function (a) {
        return "window.alert(" + (Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_NONE) || "''") + ");\n"
    };
    Blockly.Arduino.text_prompt_ext = function (a) {
        var b = "window.prompt(" + (a.getField("TEXT") ? Blockly.Arduino.quote_(a.getFieldValue("TEXT")) : Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_NONE) || "''") + ")";
        "NUMBER" == a.getFieldValue("TYPE") && (b = "Number(" + b + ")");
        return [b, Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_prompt = Blockly.Arduino.text_prompt_ext;
    Blockly.Arduino.text_count = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_NONE) || "''";
        a = Blockly.Arduino.valueToCode(a, "SUB", Blockly.Arduino.ORDER_NONE) || "''";
        return [Blockly.Arduino.provideFunction_("textCount", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle) {", "  if (needle.length === 0) {", "    return haystack.length + 1;", "  } else {", "    return haystack.split(needle).length - 1;", "  }", "}"]) + "(" + b + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_replace = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_NONE) || "''",
            c = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_NONE) || "''";
        a = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_NONE) || "''";
        return [Blockly.Arduino.provideFunction_("textReplace", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(haystack, needle, replacement) {", '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")',
            '                 .replace(/\\x08/g,"\\\\x08");', "  return haystack.replace(new RegExp(needle, 'g'), replacement);", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_reverse = function (a) {
        return [(Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_MEMBER) || "''") + ".split('').reverse().join('')", Blockly.Arduino.ORDER_FUNCTION_CALL]
    };
    Blockly.Arduino.text_equals = function (a) {
        let STR1 = Blockly.Arduino.valueToCode(a, "STR1", Blockly.Arduino.ORDER_NONE) || "\"\"";
        let STR2 = Blockly.Arduino.valueToCode(a, "STR2", Blockly.Arduino.ORDER_NONE) || "\"\"";
        return [STR1 + ".equals(" + STR2 + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.variables = {};
    Blockly.Arduino.variables_get = function (a) {
        return [
            Blockly.Arduino.variableDB_.
            getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME), Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.variables_set = function (a) {
        var b = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || "0";
        return Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME) + " = " + b + ";\n"
    };
    Blockly.Arduino.variablesDynamic = {};
    Blockly.Arduino.variables_get_dynamic = Blockly.Arduino.variables_get;
    Blockly.Arduino.variables_set_dynamic = Blockly.Arduino.variables_set;
    return Blockly.Arduino;
}));


//# sourceMappingURL=Arduino_compressed.js.map
