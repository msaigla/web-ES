'use strict';
var servos = {
    "180": {
        "1": ["25, 24"],
        "2": ["60, 24"],
        "3": ["100, 24"],
        "4": ["100, 20"],
        "5": ["100, 15"],
        "6": ["100, 10"],
        "7": ["100, 8"],
        "8": ["100, 6"],
        "9": ["100, 4"],
        "10": ["100, 3"],
    }
} 

Blockly.Arduino.port_photoresistor = function (a) {
    let sw = generator["default"].port[a.getFieldValue("PORT")][1];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_barometer = function (a) {
    var VAL = a.getFieldValue("VAL");
    Blockly.Arduino.definitions_.define_Barometer="#include <Barometer.h>\n";
    if (!Blockly.Arduino.definitions_.variables.includes("Barometer barometer_lib")) {
        Blockly.Arduino.definitions_.variables = "Barometer barometer_lib;\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["barometer_lib_begin"] = "barometer_lib.begin();";
    return ["barometer_lib" + VAL + "()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_ir_read = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][0];
    let DO = '  if (irrecv.decode(&results))\n  {\n    res=results.value;\n    irrecv.resume();\n    return(res);\n  }\n  else\n  {\n    return(0);\n  }'
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

Blockly.Arduino.port_button = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][0];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_limit_switch = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][0];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_line_analog = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][1];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_line_digital = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][0];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_sonic = function (a) {
    var PIN0 = generator["default"].port[a.getFieldValue("PORT")][1],
        PIN1 = generator["default"].port[a.getFieldValue("PORT")][0];;
    Blockly.Arduino.definitions_.define_SonicRangeEv="#include <SonicRangeEv.h>";
    if (!Blockly.Arduino.definitions_.variables.includes("SonicRangeEv sonic_" + PIN0 + "_" + PIN1 + "_evolvector")) {
        Blockly.Arduino.definitions_.variables = "SonicRangeEv sonic_" + PIN0 + "_" + PIN1 + "_evolvector = SonicRangeEv(" + PIN0 + ", " + PIN1 + ");\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    return ["sonic_" + PIN0 + "_" + PIN1 + "_evolvector.read()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_charecterDisplay = function (a) {
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
    } else if (TYPE == "text") {
        let LANG = a.getFieldValue("LANG");
        if (LANG == "ru") {
            let TEXT = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_ATOMIC) || "",
                ROW = a.getFieldValue("ROW"),
                COL = a.getFieldValue("COL");
            return "OLED_evolvector.setCursor(" + COL + ", " + ROW + ");\nOLED_evolvector.outStr(" + TEXT + ");\n"
        } else if (LANG == "en") {
            let TEXT = Blockly.Arduino.valueToCode(a, "TEXT", Blockly.Arduino.ORDER_ATOMIC) || "",
            ROW = a.getFieldValue("ROW"),
            COL = a.getFieldValue("COL");
            return "OLED_evolvector.setCursor(" + COL + ", " + ROW + ");\nOLED_evolvector.print(" + TEXT + ");\n"
        }
    } else if (TYPE == "clear") {
        return "OLED_evolvector.clear();\n"
    }
    let FLAG = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "true"
    return "OLED_evolvector.setBacklight(" + FLAG + ");\n"
};

Blockly.Arduino.port_led = function (a) {
    let pin = generator["default"].port[a.getFieldValue("PORT")][0];
    let sig = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    if (a.getFieldValue("TYPE") == "with") {
        if (["A7", "A9", "A10", "3", "5", "6", "9", "10", "11", "13"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else if (generator["default"] == generator.mega && ["4", "2", "12"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else {
            return "digitalWrite(" + pin + ", " + sig + ");\n"
        }
    } else {
        return "digitalWrite(" + pin + ", " + sig + ");\n"
    }
};

Blockly.Arduino.port_ledRGB = function (a) {
    let R = Blockly.Arduino.valueToCode(a, "R", Blockly.Arduino.ORDER_ATOMIC) || "1024",
        G = Blockly.Arduino.valueToCode(a, "G", Blockly.Arduino.ORDER_ATOMIC) || "1024",
        B = Blockly.Arduino.valueToCode(a, "B", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.definitions_.define_RGBLightEV_h = "#include <RGBLightEV.h>\n";
    return "color_set(" + R + ", " + G + ", " + B + ");\n"
};

Blockly.Arduino.port_flashlight = function (a) {
    let pin = generator["default"].port[a.getFieldValue("PORT")][0];
    let sig = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    if (a.getFieldValue("TYPE") == "with") {
        if (["A7", "A9", "A10", "3", "5", "6", "9", "10", "11", "13"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else if (generator["default"] == generator.mega && ["4", "2", "12"].includes(pin)) {
            return "analogWrite(" + pin + ", " + sig + ");\n"
        } else {
            return "digitalWrite(" + pin + ", " + sig + ");\n"
        }
    } else {
        return "digitalWrite(" + pin + ", " + sig + ");\n"
    }
};

Blockly.Arduino.port_potentiometer = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][1];
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_buzzer = function (a) {
    let pin = generator["default"].port[a.getFieldValue("PORT")][0],
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
        } else {
            return "noTone(" + pin + ");\n"
        }
    }
};

Blockly.Arduino.portMega_buzzer = function (a) {
    let pin = generator["default"].port[a.getFieldValue("PORT")][0],
        opt = a.getFieldValue("OPTIONS"),
        TIMER = a.getFieldValue("TIMER").split(", ");
    if (!define_var.includes("#define USE_" + TIMER[0].slice(0, -1).toUpperCase() + "_" + TIMER[0].slice(-1) + TIMER[1].slice(-1))) {
        define_var.unshift("#define USE_" + TIMER[0].slice(0, -1).toUpperCase() + "_" + TIMER[0].slice(-1) + TIMER[1].slice(-1));
    }
    Blockly.Arduino.definitions_.define_TimerOne_h = "#include \"BuzzerVertorMega.h\"";
    Blockly.Arduino.setups_["setup_buzzerVertorMega(" + pin + ")"] = "buzzerVertorMega(" + pin + ");";

    if (opt === "tone") {
        let HZ = Blockly.Arduino.valueToCode(a, "HZ", Blockly.Arduino.ORDER_ATOMIC) || "1";
        return "beepOn(" + HZ + ");\n"
    } else {
        return "beepOff();\n"
    }
};

Blockly.Arduino.port_dht = function (a) {
    var sw = generator["default"].port[a.getFieldValue("PORT")][0],
        r = a.getFieldValue("OPTIONS");
    Blockly.Arduino.definitions_.define_DHT="#include \"DHT.h\"";
    if (!Blockly.Arduino.definitions_.variables.includes("DHT dht" + sw + "(" + sw + ", DHT11);")) {
        Blockly.Arduino.definitions_.variables = "DHT dht" + sw + "(" + sw + ", DHT11);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.setups_["dht" + sw + "_begin"] = "dht" + sw + ".begin();";
    return ["dht" + sw + "." + r, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.port_opt_encoder = function (a) {
    let PIN = generator["default"].port[a.getFieldValue("PORT")][0];
    Blockly.Arduino.setups_["setup_button_" + PIN] = "pinMode(" + PIN + ", INPUT);";
    return ["digitalRead(" + PIN + ")", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.port_bluetooth_read = function (a) {
    let SPEED = a.getFieldValue("SPEED"),
        TYPE = a.getFieldValue("TYPE");
    if (!Blockly.Arduino.definitions_.variables.includes("Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");")) {
        Blockly.Arduino.definitions_.variables = "Pultocod bluetooth_evolvector" + SPEED + " = Pultocod(" + SPEED + ");\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_Pultocod_h="#include <Pultocod.h>";
    return ["bluetooth_evolvector" + SPEED + TYPE, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.port_bluetooth_write = function (a) {
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

Blockly.Arduino.port_RTC_get = function (a) {
    if (!Blockly.Arduino.definitions_.variables.includes("Ev_RTC watch_evolvector(RTC_DS1307);")) {
        Blockly.Arduino.definitions_.variables = "Ev_RTC watch_evolvector(RTC_DS1307);\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    Blockly.Arduino.definitions_.define_RTC_h="#include <Ev_RTC.h>";
    return ["watch_evolvector.gettime(\"d-m-Y, H:i:s, D\")", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.port_RTC_set = function (a) {
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

Blockly.Arduino.port_servo = function (a) {
    let SERVO = generator["default"].servo[a.getFieldValue("SERVO")][1],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "init") {
        let MAX_ANGLE = a.getFieldValue("MAX_ANGLE"),
            START_ANGLE = a.getFieldValue("START_ANGLE");
        Blockly.Arduino.definitions_.define_ServoSmooth="#include <ServoSmooth.h>\n";
        if (!Blockly.Arduino.definitions_.variables.includes("uint32_t servoTimer_evolvector")) {
            Blockly.Arduino.definitions_.variables = "uint32_t servoTimer_evolvector;\nuint32_t turnTimer_evolvector;\nfloat msRotate_evolvector;\n" +
                                                    Blockly.Arduino.definitions_.variables;
        }
        if (!Blockly.Arduino.definitions_.variables.includes("ServoSmooth servo" + SERVO + ";")) {
            Blockly.Arduino.definitions_.variables = "ServoSmooth servo" + SERVO + "(" + MAX_ANGLE + ");\n" +
                                                    Blockly.Arduino.definitions_.variables;
        }
        Blockly.Arduino.setups_["setup_button_servo" + SERVO] = "servo" + SERVO + ".attach(" + SERVO + ", " + START_ANGLE + ");\n  servo" + SERVO + ".smoothStart();";
        return ""
    } else {
        let ANGLE = Blockly.Arduino.valueToCode(a, "ANGLE", Blockly.Arduino.ORDER_ATOMIC) || "0"; 
        if (TYPE == "rotate") {
            let SPEED = a.getFieldValue("SPEED")
            Blockly.Arduino.definitions_.define_ServoSmooth="#include <ServoSmooth.h>\n";
            if (a.getFieldValue("SPEED") === "10") {
                return "servo" + SERVO + ".write(" + ANGLE + ");\n"
            }
            let MS_FOR_ROTATE = "msRotate_evolvector = servo" + SERVO + ".getTargetDeg() - " +ANGLE+ ";\nmsRotate_evolvector = abs(msRotate_evolvector) / " + SPEED[0] + " * 1000 + 500;\n"
            return MS_FOR_ROTATE + "servo" + SERVO + ".setSpeed(" + SPEED[0] + ");\nturnTimer_evolvector = millis();\nservoTimer_evolvector = millis();\nwhile (millis() - turnTimer_evolvector <= msRotate_evolvector) {\n  if (millis() - servoTimer_evolvector >= " + SPEED[1] + ") {\n    servoTimer_evolvector += " + SPEED[1] + ";\n    servo" + SERVO + ".tickManual();\n    servo" + SERVO + ".setTargetDeg(" + ANGLE + ");\n  }\n}\n"
        } else if (TYPE == "rotateWithoutTimer") {
            Blockly.Arduino.setups_["setup_button_" + SERVO] = "pinMode(" + SERVO + ", OUTPUT);";
            let DO = '  angle=map(angle, 0, 180, 550, 2400);\n  for (int count = 0; count<5; count++) {\n    digitalWrite(pin, HIGH);\n    delayMicroseconds(angle);\n    digitalWrite(pin, LOW);\n    delayMicroseconds(21000 - angle);\n  }\n'
            Blockly.Arduino.definitions_["define_void_servo_set_evolvector"] = "void servo_set_evolvector(int pin, int angle) {\n" + DO + "\n}\n"
            return "servo_set_evolvector(" + SERVO + ", " + ANGLE + ");\n"
        }
    }
    return ""
};

Blockly.Arduino.port_rotateServo360 = function (a) {
    let SERVO = generator["default"].servo[a.getFieldValue("SERVO")][1],
        SPEED = Blockly.Arduino.valueToCode(a, "SPEED", Blockly.Arduino.ORDER_ATOMIC) || "0";
    Blockly.Arduino.definitions_.define_Servo_h="#include <Servo.h>\n";
    if (!Blockly.Arduino.definitions_.variables.includes("Servo servo" + SERVO + "_evolvector")) {
        Blockly.Arduino.definitions_.variables = "Servo servo" + SERVO + "_evolvector;\n" +
                                                Blockly.Arduino.definitions_.variables;
    }
    SPEED = SPEED.replace('(', '').replace(')', '');
    SPEED = 90 - ((SPEED) * 50 / 100);
    Blockly.Arduino.setups_["setup_button_servo" + SERVO] = "servo" + SERVO + "_evolvector.attach(" + SERVO + ");";
    return "servo" + SERVO + "_evolvector.write(" + SPEED + ");\n"
};

Blockly.Arduino.inout_buildin_led = function () {
    var a = this.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(13, " + a + ");\n"
};

Blockly.Arduino.inout_digital_write = function (a) {
    var a = generator["default"].port[a.getFieldValue("PORT")][0],
        b = Blockly.Arduino.valueToCode(this, "STAT", Blockly.Arduino.ORDER_ATOMIC) || "HIGH";
    Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + ", " + b + ");\n"
};
Blockly.Arduino.inout_digital_read = function (a) {
    var a = generator["default"].port[a.getFieldValue("PORT")][0];
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_analog_write = function (a) {
    var a = generator["default"].port[a.getFieldValue("PORT")][0],
        b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    return "analogWrite(" + a + ", " + b + ");\n"
};
Blockly.Arduino.inout_analog_read = function (a) {
    return ["analogRead(" + generator["default"].port[a.getFieldValue("PORT")][1] + ")", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_tone = function () {
    var a = generator["default"].port[a.getFieldValue("PORT")][1], b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
    return "tone(" + a + ", " + b + ");"
};
Blockly.Arduino.inout_notone = function () {
    var a = generator["default"].port[a.getFieldValue("PORT")][1];
    Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
    return "noTone(" + a + ");"
};
Blockly.Arduino.inout_highlow = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_pinsDigital = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_pinsPWM = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_pinsAnalog = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_printHID = function () {
    let TEXT = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_MEMBER) || '""';
    Blockly.Arduino.definitions_.define_servo="#include \"Keyboard.h\"\n";
    Blockly.Arduino.setups_["setup_serial_Serial"]="Serial.begin(9600);\n";
    Blockly.Arduino.setups_["setup_serial_Keyboard_begin"]="Keyboard.begin();\n";
    return "Keyboard.print(" + TEXT + ");\n"
};

Blockly.Arduino.inout_writeHID = function () {
    Blockly.Arduino.definitions_.define_servo="#include \"Keyboard.h\"\n";
    Blockly.Arduino.setups_["setup_serial_Serial"]="Serial.begin(9600);\n";
    Blockly.Arduino.setups_["setup_serial_Keyboard_begin"]="Keyboard.begin();\n";
    return "Keyboard." + this.getFieldValue("FUNCTION") + "(" + this.getFieldValue("KEY") + ");\n"
};

Blockly.Arduino.serial_print = function(a) {
    let ser=a.getFieldValue("SERIAL"),
        speed=a.getFieldValue("SPEED"),
        LN = a.getFieldValue("LN");
    Blockly.Arduino.setups_["setup_serial_"+ser]=ser+".begin("+speed+");\n";
    if (LN === "WITH") {
        return ser + ".println("+(Blockly.Arduino.valueToCode(a, "CONTENT", Blockly.Arduino.ORDER_MEMBER) || "''")+");\n"
    } else {
        return ser + ".print("+(Blockly.Arduino.valueToCode(a, "CONTENT", Blockly.Arduino.ORDER_MEMBER) || "''")+");\n"
    }
};

Blockly.Arduino.serial_read = function(a) {
    var ser=a.getFieldValue("SERIAL");
    var speed=a.getFieldValue("SPEED");
    Blockly.Arduino.setups_["setup_serial_"+ser]=ser+".begin("+speed+");\n";
    return [ser + ".read()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.gearMotor = function(a) {
    let TURN=a.getFieldValue("TURN"),
        PORT=a.getFieldValue("PORT"),
        FUNC=a.getFieldValue("FUNC");
    if (generator["default"] == generator.mega) {
        Blockly.Arduino.definitions_.define_Pultocod_h="#include <MotorsVM.h>";
        if (!Blockly.Arduino.definitions_.variables.includes("MotorsVM evolvector_M" + PORT + " = MotorsVM(" + PORT + ");")) {
            Blockly.Arduino.definitions_.variables = "MotorsVM evolvector_M" + PORT + " = MotorsVM(" + PORT + ");\n" +
                                                    Blockly.Arduino.definitions_.variables;
        }
    } else {
        if (!Blockly.Arduino.definitions_.variables.includes("MotorsVS_I2C evolvector_M" + PORT + " = MotorsVS_I2C(" + PORT + ");")) {
            Blockly.Arduino.definitions_.variables = "MotorsVS_I2C evolvector_M" + PORT + " = MotorsVS_I2C(" + PORT + ");\n" +
                                                    Blockly.Arduino.definitions_.variables;
        }
        Blockly.Arduino.definitions_.define_Pultocod_h="#include <MotorsVS.h>";
    }
    if (FUNC == ".motorForward(" || FUNC == ".motorBackward(") {
        let SPEED = Blockly.Arduino.valueToCode(a, "SPEED", Blockly.Arduino.ORDER_ATOMIC) || "0";
        return "evolvector_M" + PORT + FUNC + SPEED + ");\n"
    } else {
        return "evolvector_M" + PORT + FUNC + ";\n"
    }
}