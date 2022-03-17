'use strict';
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
        opt = a.getFieldValue("OPTIONS"),
        TIMER = a.getFieldValue("TIMER");
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    if (TIMER === "Timer1") {
        Blockly.Arduino.setups_["setup_timer1_init"] = "Timer1.initialize(10);";
        Blockly.Arduino.definitions_.define_TimerOne_h = "#include <TimerOne.h>";
        let DO = '  if(frequince>20)\n  {\n    duty=duty*10;\n    Timer1.pwm(' + pin + ', duty,1000000/frequince);\n  }\n  else\n  {\n    Timer1.disablePwm(' + pin + ');\n  }'
        Blockly.Arduino.definitions_["define_void_buzzer_evolvector"] = "void buzzer_evolvector(int frequince, float duty) {\n" + DO + "\n}\n";
        if (opt === "tone") {
            let HZ = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_ATOMIC) || "1",
                VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_ATOMIC) || "50";
            return "buzzer_evolvector(" + HZ + ", " + VALUE + ");\n"
        } else {
            return "buzzer_evolvector(0, 0);\n"
        }
    } else {
        if (opt === "tone") {
            let HZ = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_ATOMIC) || "1";
            return "tone(" + pin + ", " + HZ + ");\n"
        } else if (opt == "toneTime"){
            let HZ = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_ATOMIC) || "1",
                MS = Blockly.Arduino.valueToCode(a, "MS", Blockly.Arduino.ORDER_ATOMIC) || "1000";
            return "tone(" + pin + ", " + HZ + ", " + MS + ");\n"
        } else {
            return "noTone(" + pin + ");\n"
        }
    }
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