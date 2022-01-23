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
        NAMEFUNC = this.getFieldValue("NAMEFUNC"),
        DO = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.definitions_["define_func_" + NAMEFUNC] = "function " + NAMEFUNC + "() {\n" + DO + "\n}\n"
    return [TYPE + NAMEFUNC + ", " + DELAY + ")", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_changeInterval = function () {
    var NAMEFUNC = this.getFieldValue("NAMEFUNC"),
        VALUE = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_ATOMIC) || 100;
    return "changeInterval(" + NAMEFUNC + ", " + VALUE + ");\n"
};

Blockly.JavaScript.vertorjs_clearInterval = function () {
    var NAMEFUNC = this.getFieldValue("NAMEFUNC");
    return "clearInterval(" + NAMEFUNC + ");\n"
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
        DO = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.setups_["BUTTON_" + PIN] = "var BUTTON_" + PIN + "=require('button').connect(" + PIN + ");";
    return "BUTTON_" + PIN + ".on('" + TYPE + "', function(){\n" + DO + "});\n"
};

Blockly.JavaScript.vertorjs_potentiometer = function () {
    var PIN = this.getFieldValue("PIN");
    Blockly.JavaScript.setups_["BUTTON_" + PIN] = "var POTENTIOMETER_" + PIN + "=require('potentiometr').connect(" + PIN + ");";
    return ["POTENTIOMETER_" + PIN + ".read()", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_photorezistor = function () {
    var PIN = this.getFieldValue("PIN");
    Blockly.JavaScript.setups_["BUTTON_" + PIN] = "var PHOTOREZISTOR_" + PIN + "=require('photorezistor').connect(" + PIN + ");";
    return ["PHOTOREZISTOR_" + PIN + ".read()", Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.vertorjs_led = function () {
    var PIN = this.getFieldValue("PIN"),
        TYPE = this.getFieldValue("TYPE");
    Blockly.JavaScript.setups_["LED_" + PIN] = "var LED_" + PIN + "=require('led').connect(" + PIN + ").turnOff();";
    if (TYPE == ".blink(") {
        var LIGHT_ON = Blockly.JavaScript.valueToCode(this, "LIGHT_ON", Blockly.JavaScript.ORDER_ATOMIC) || "2",
            LIGHT_OFF = Blockly.JavaScript.valueToCode(this, "LIGHT_OFF", Blockly.JavaScript.ORDER_ATOMIC) || "3";
            return "LED_" + PIN + TYPE + LIGHT_ON + ", " + LIGHT_OFF + ");\n";      
    } else if (TYPE == ".brightness(") {
        var VALUE = Blockly.JavaScript.valueToCode(this, "LIGHT", Blockly.JavaScript.ORDER_ATOMIC) || "255";
        return "LED_" + PIN + TYPE + VALUE + ");\n";
    } else {
        return "LED_" + PIN + TYPE;
    }
};

Blockly.JavaScript.vertorjs_flashlight = function () {
    var PIN = this.getFieldValue("PIN"),
        TYPE = this.getFieldValue("TYPE");
    Blockly.JavaScript.setups_["FLASHLIGHT_" + PIN] = "var FLASHLIGHT_" + PIN + "=require('led').connect(" + PIN + ").turnOff();";
    if (TYPE == ".blink(") {
        var LIGHT_ON = Blockly.JavaScript.valueToCode(this, "LIGHT_ON", Blockly.JavaScript.ORDER_ATOMIC) || "2",
            LIGHT_OFF = Blockly.JavaScript.valueToCode(this, "LIGHT_OFF", Blockly.JavaScript.ORDER_ATOMIC) || "3";
            return "FLASHLIGHT_" + PIN + TYPE + LIGHT_ON + ", " + LIGHT_OFF + ");\n";      
    } else if (TYPE == ".brightness(") {
        var VALUE = Blockly.JavaScript.valueToCode(this, "LIGHT", Blockly.JavaScript.ORDER_ATOMIC) || "255";
        return "FLASHLIGHT_" + PIN + TYPE + VALUE + ");\n";
    } else {
        return "FLASHLIGHT_" + PIN + TYPE;
    }
};