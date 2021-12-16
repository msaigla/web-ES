'use strict';

generator["default"] = generator.vertorjs;

Blockly.JavaScript.vertorjs = {};

Blockly.JavaScript.vertorjs_highlow = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_digital_write = function () {
    var a = this.getFieldValue("PIN"), b = Blockly.JavaScript.valueToCode(this, "STAT", Blockly.JavaScript.ORDER_ATOMIC) || "HIGH";
    Blockly.JavaScript.setups_["setup_output_" + a] = "pinMode(" + a + ", 'output');";
    return "digitalWrite(" + a + ", " + b + ");\n"
};

Blockly.JavaScript.vertorjs_digital_read = function () {
    var a = this.getFieldValue("PIN");
    Blockly.JavaScript.setups_["setup_input_" + a] = "pinMode(" + a + ", 'input');";
    return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_analog_write = function () {
    var a = this.getFieldValue("PIN"), 
        b = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_ATOMIC),
        HZ = Blockly.JavaScript.valueToCode(this, "HZ", Blockly.JavaScript.ORDER_ATOMIC);
    Blockly.JavaScript.setups_["setup_output_" + a] = "pinMode(" + a + ", 'output');";
    return "analogWrite(" + a + ", " + b + "/100.toFixed(2), {freq: " + HZ + ", soft: true}););\n"
};

Blockly.JavaScript.vertorjs_analog_read = function () {
    var a = this.getFieldValue("PIN");
    Blockly.JavaScript.setups_["setup_output_" + a] = "pinMode(" + a + ", 'analog');";
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_watch = function () {
    var FUNCTION = Blockly.JavaScript.valueToCode(this, "FUNCTION", Blockly.JavaScript.ORDER_ATOMIC) || "";
    Blockly.JavaScript.setups_["setup_output_clearWatch"] = "clearWatch();";
    return ["setWatch(" + FUNCTION + ", " + this.getFieldValue("PIN") + ", {repeat:true, debounce:20, edge:\"" + this.getFieldValue("SIG") + "\"})", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_clearWatch = function () {
    var ID = Blockly.JavaScript.valueToCode(this, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "";
    return "clearWatch(" + ID + ");\n"
};

Blockly.JavaScript.vertorjs_digitalPulse = function () {
    var PIN = this.getFieldValue("PIN"),
        TYPE_TIME = this.getFieldValue("TYPE_TIME"),
        VALUE1 = Blockly.JavaScript.valueToCode(this, "VALUE1", Blockly.JavaScript.ORDER_ATOMIC) || "",
        VALUE2 = Blockly.JavaScript.valueToCode(this, "VALUE2", Blockly.JavaScript.ORDER_ATOMIC) || "";
    Blockly.JavaScript.setups_["setup_output_" + a] = "pinMode(" + a + ", 'output');";
    return "clearWatch(" + PIN + ", " + VALUE1 + ", " + VALUE2 + "*" + TYPE_TIME + ");\n"
};

Blockly.JavaScript.vertorjs_everyAndAfter = function () {
    var DELAY = Blockly.JavaScript.valueToCode(this, "DELAY", Blockly.JavaScript.ORDER_ATOMIC) || "1000",
        TYPE = this.getFieldValue("TYPE"),
        FUNCTION = Blockly.JavaScript.valueToCode(this, "FUNCTION", Blockly.JavaScript.ORDER_ATOMIC) || "";
    return [TYPE + FUNCTION + ", " + DELAY + ")", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_changeInterval = function () {
    var ID = Blockly.JavaScript.valueToCode(this, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "",
        VALUE = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_ATOMIC) || "";
    return "changeInterval(" + ID + ", " + VALUE + ");\n"
};

Blockly.JavaScript.vertorjs_clearInterval = function () {
    var ID = Blockly.JavaScript.valueToCode(this, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "";
    return "clearInterval(" + ID + ");\n"
};

Blockly.JavaScript.vertorjs_print = function () {
    var VALUE = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_ATOMIC) || "\"Hello, world!\"";
    return "print(" + VALUE + ");\n"
};

Blockly.JavaScript.vertorjs_getTime = function () {
    return ["getTime()", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_roundUp = function () {
    var VALUE = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_ATOMIC) || "1";
    return [".toFixed(" + VALUE + ")", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_button = function () {
    var PIN = this.getFieldValue("PIN"),
        TYPE = this.getFieldValue("TYPE"),
        DO = Blockly.JavaScript.statementToCode(this, "DO");;
    Blockly.JavaScript.setups_["BUTTON_" + PIN] = "var BUTTON_" + PIN + "=require('button').connect(" + PIN + ");";
    return "BUTTON_" + PIN + ".on('" + TYPE + "', function(){\n" + DO + "});\n"
};