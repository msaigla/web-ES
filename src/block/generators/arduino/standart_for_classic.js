'use strict';
Blockly.Arduino.classic = {};
Blockly.Arduino.classic_port_photoresistor = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_barometer = function (a) {
    var VAL= a.getFieldValue("VAL");
    Blockly.Arduino.definitions_.define_Barometer="#include <Barometer.h>\n";
    if (!Blockly.Arduino.definitions_.variables.includes("Barometer barometer_lib")) {
        Blockly.Arduino.definitions_.variables = "Barometer barometer_lib;\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["barometer_lib_begin"] = "barometer_lib.begin();";
    return ["barometer_lib" + VAL + "()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_ir_read = function (a) {
    var sw = a.getFieldValue("PIN");
    let DO = '  if (irrecv.decode(&results_irrecv))\n  {\n    res_ir_evolvector=results_irrecv.value;\n    irrecv.resume();\n    return(res_ir_evolvector);\n  }\n  else\n  {\n    return(0);\n  }'
    Blockly.Arduino.definitions_.define_IRremote="#include <IRremote.h>\n";
    Blockly.Arduino.definitions_["define_read_ir_evolvector"] = "int read_ir_evolvector() {\n" + DO + "\n}\n";
    if (!Blockly.Arduino.definitions_.variables.includes("IRrecv irrecv")) {
        Blockly.Arduino.definitions_.variables = "IRrecv irrecv(" + sw + ");\n" +
                                                "decode_results results_irrecv;\n" +
                                                "int res_ir_evolvector;\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["irrecv_enableIRIn"] = "irrecv.enableIRIn();";
    return ["read_ir_evolvector()", Blockly.Arduino.ORDER_ATOMIC]

};

Blockly.Arduino.classic_port_button = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_limit_switch = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_line_analog = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_line_digital = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_sonic = function (a) {
    var PIN0 = a.getFieldValue("PIN0"),
        PIN1 = a.getFieldValue("PIN1");
    Blockly.Arduino.definitions_.define_SonicRangeEv="#include <SonicRangeEv.h>";
    if (!Blockly.Arduino.definitions_.variables.includes("SonicRangeEv sonic_" + PIN0 + "_" + PIN1 + "_evolvector")) {
        Blockly.Arduino.definitions_.variables = "SonicRangeEv sonic_" + PIN0 + "_" + PIN1 + "_evolvector = SonicRangeEv(" + PIN0 + ", " + PIN1 + ");\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    return ["sonic_" + PIN0 + "_" + PIN1 + "_evolvector.read()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_charecterDisplay = function (a) {
    let TYPE = a.getFieldValue("TYPE");
    Blockly.Arduino.definitions_.define_CharacterDisplayEv_I2C_h = "#include <CharacterDisplayEv_I2C.h>\n";
    if (!Blockly.Arduino.definitions_.variables.includes("CharacterDisplayEv_I2C OLED_evolvector")) {
        Blockly.Arduino.definitions_.variables = "CharacterDisplayEv_I2C OLED_evolvector(0x38,16,2);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["setup_OLED_evolvector_init"] = "OLED_evolvector.init();\n  OLED_evolvector.clear();";
    if (TYPE == "moveLeft") {
        return "OLED_evolvector.scrollDisplayLeft();";
    } else if (TYPE == "moveRight") {
        return "OLED_evolvector.scrollDisplayRight();";
    } if (TYPE == "text") {
        let LANG = a.getFieldValue("LANG");
        if (LANG == "ru") {
            let TEXT = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_ATOMIC) || "",
                ROW = Blockly.Arduino.valueToCode(a, "ROW", Blockly.Arduino.ORDER_ATOMIC) || "1",
                COL = Blockly.Arduino.valueToCode(a, "COL", Blockly.Arduino.ORDER_ATOMIC) || "1";
            return "OLED_evolvector.setCursor(" + COL + ", " + ROW + ");\nOLED_evolvector.outStr(" + TEXT + ");\n"
        } else if (LANG == "en") {
            let TEXT = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_ATOMIC) || "",
                ROW = Blockly.Arduino.valueToCode(a, "ROW", Blockly.Arduino.ORDER_ATOMIC) || "1",
                COL = Blockly.Arduino.valueToCode(a, "COL", Blockly.Arduino.ORDER_ATOMIC) || "1";
            return "OLED_evolvector.setCursor(" + COL + ", " + ROW + ");\nOLED_evolvector.print(" + TEXT + ");\n"
        }
    } else if (TYPE == "clear") {
        return "OLED_evolvector.clear();\n"
    }
    let FLAG = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "true"
    return "OLED_evolvector.setBacklight(" + FLAG + ");\n"
};

Blockly.Arduino.classic_port_led = function (a) {
    let pin = a.getFieldValue("PIN");
    let sig = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    if (a.getFieldValue("TYPE") == "with") {
        if (["A7", "A9", "A10", "3", "5", "6", "9", "10", "11", "13"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else {
            return "digitalWrite(" + pin + ", " + sig + ");\n"
        }
    } else {
        return "digitalWrite(" + pin + ", " + sig + ");\n"
    }
};

Blockly.Arduino.classic_port_ledRGB = function (a) {
    let R = Blockly.Arduino.valueToCode(a, "R", Blockly.Arduino.ORDER_ATOMIC) || "1024",
        G = Blockly.Arduino.valueToCode(a, "G", Blockly.Arduino.ORDER_ATOMIC) || "1024",
        B = Blockly.Arduino.valueToCode(a, "B", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.definitions_.define_RGBLightEV_h = "#include <RGBLightEV.h>\n";
    return "color_set(" + R + ", " + G + ", " + B + ");\n"
};

Blockly.Arduino.classic_port_flashlight = function (a) {
    let pin = a.getFieldValue("PIN");
    let sig = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    if (a.getFieldValue("TYPE") == "with") {
        if (["A7", "A9", "A10", "3", "5", "6", "9", "10", "11", "13"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else {
            return "digitalWrite(" + pin + ", " + sig + ");\n"
        }
    } else {
        return "digitalWrite(" + pin + ", " + sig + ");\n"
    }
};

Blockly.Arduino.classic_port_potentiometer = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_buzzer = function (a) {
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

Blockly.Arduino.classic_port_dht = function (a) {
    var sw = a.getFieldValue("PIN"),
        r = a.getFieldValue("OPTIONS");
    Blockly.Arduino.definitions_.define_DHT="#include \"DHT.h\"";
    if (!Blockly.Arduino.definitions_.variables.includes("DHT dht" + sw + "(" + sw + ", DHT11);")) {
        Blockly.Arduino.definitions_.variables = "DHT dht" + sw + "(" + sw + ", DHT11);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["dht" + sw + "_begin"] = "dht" + sw + ".begin();";
    return ["dht" + sw + "." + r, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_port_opt_encoder = function (a) {
    let PIN = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + PIN] = "pinMode(" + PIN + ", INPUT);";
    return ["digitalRead(" + PIN + ")", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.classic_port_bluetooth_read = function (a) {
    let SPEED = a.getFieldValue("SPEED"),
        TYPE = a.getFieldValue("TYPE");
    if (!Blockly.Arduino.definitions_.variables.includes("Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");")) {
        Blockly.Arduino.definitions_.variables = "Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_Pultocod_h="#include <Pultocod.h>";
    return ["bluetooth_evolvector" + SPEED + TYPE, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.classic_port_bluetooth_write = function (a) {
    let SPEED = a.getFieldValue("SPEED"),
        LN = a.getFieldValue("LN"),
        MSG = Blockly.Arduino.valueToCode(a, "MSG", Blockly.Arduino.ORDER_ATOMIC) || "";
    if (!Blockly.Arduino.definitions_.variables.includes("Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");")) {
        Blockly.Arduino.definitions_.variables = "Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_Pultocod_h="#include <Pultocod.h>";
    return "bluetooth_evolvector" + SPEED + LN + MSG + ");\n"
};

Blockly.Arduino.classic_port_RTC_get = function (a) {
    if (!Blockly.Arduino.definitions_.variables.includes("Ev_RTC watch_evolvector(RTC_DS1307);")) {
        Blockly.Arduino.definitions_.variables = "Ev_RTC watch_evolvector(RTC_DS1307);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_RTC_h="#include <Ev_RTC.h>";
    return ["watch_evolvector.gettime(\"d-m-Y, H:i:s, D\")", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.classic_port_RTC_set = function (a) {
    let SEC = Blockly.Arduino.valueToCode(a, "SEC", Blockly.Arduino.ORDER_ATOMIC) || "35",
        MIN = Blockly.Arduino.valueToCode(a, "MIN", Blockly.Arduino.ORDER_ATOMIC) || "46",
        HOUR = Blockly.Arduino.valueToCode(a, "HOUR", Blockly.Arduino.ORDER_ATOMIC) || "6",
        DAY = Blockly.Arduino.valueToCode(a, "DAY", Blockly.Arduino.ORDER_ATOMIC) || "28",
        MONTH = Blockly.Arduino.valueToCode(a, "MONTH", Blockly.Arduino.ORDER_ATOMIC) || "9",
        YEAR = Blockly.Arduino.valueToCode(a, "YEAR", Blockly.Arduino.ORDER_ATOMIC) || "2021",
        WEEK = Blockly.Arduino.valueToCode(a, "WEEK", Blockly.Arduino.ORDER_ATOMIC) || "2";
    if (!Blockly.Arduino.definitions_.variables.includes("Ev_RTC watch_evolvector(RTC_DS1307);")) {
        Blockly.Arduino.definitions_.variables = "Ev_RTC watch_evolvector(RTC_DS1307);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_RTC_h="#include <Ev_RTC.h>";
    return "watch_evolvector.settime(" + SEC + "," + MIN + "," + HOUR + "," + DAY + "," + MONTH + "," + YEAR + "," + WEEK + ");\n"
};