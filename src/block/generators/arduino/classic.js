'use strict';
var servos = {
    "180": {
        "1": ["5", "20"],
        "2": ["15", "20"],
        "3": ["20", "16"],
        "4": ["30", "16"],
        "5": ["30", "12"],
        "6": ["50", "12"],
        "7": ["50", "8"],
        "8": ["100", "6"],
        "9": ["100", "4"],
        "10": ["100", "3"],
    }
} 

generator["default"] = generator.classic;

Blockly.Arduino.classic = {};
Blockly.Arduino.classic_five_button_one = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT_PULLUP);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_five_button_all = function (a) {
    let PIN0 = a.getFieldValue("PIN0"),
        PIN1 = a.getFieldValue("PIN1"),
        PIN2 = a.getFieldValue("PIN2"),
        PIN3 = a.getFieldValue("PIN3"),
        PIN4 = a.getFieldValue("PIN4");
    let VAL0 = Blockly.Arduino.valueToCode(a, "VAL0", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null,
        VAL1 = Blockly.Arduino.valueToCode(a, "VAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null,
        VAL2 = Blockly.Arduino.valueToCode(a, "VAL2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null,
        VAL3 = Blockly.Arduino.valueToCode(a, "VAL3", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null,
        VAL4 = Blockly.Arduino.valueToCode(a, "VAL4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null;
    Blockly.Arduino.setups_["setup_button_" + PIN0] = "pinMode(" + PIN0 + ", INPUT_PULLUP);";
    Blockly.Arduino.setups_["setup_button_" + PIN1] = "pinMode(" + PIN1 + ", INPUT_PULLUP);";
    Blockly.Arduino.setups_["setup_button_" + PIN2] = "pinMode(" + PIN2 + ", INPUT_PULLUP);";
    Blockly.Arduino.setups_["setup_button_" + PIN3] = "pinMode(" + PIN3 + ", INPUT_PULLUP);";
    Blockly.Arduino.setups_["setup_button_" + PIN4] = "pinMode(" + PIN4 + ", INPUT_PULLUP);";
    let result = "";
    if (VAL0 != null) {
        result += VAL0 + " = digitalRead(" + PIN0 + ");\n";
    }
    if (VAL1 != null) {
        result += VAL1 + " = digitalRead(" + PIN1 + ");\n";
    }
    if (VAL2 != null) {
        result += VAL2 + " = digitalRead(" + PIN2 + ");\n";
    }
    if (VAL3 != null) {
        result += VAL3 + " = digitalRead(" + PIN3 + ");\n";
    }
    if (VAL4 != null) {
        result += VAL4 + " = digitalRead(" + PIN4 + ");\n";
    }
    return result;
};

Blockly.Arduino.classic_two_axis = function (a) {
    let PIN0 = a.getFieldValue("PIN0"),
        PIN1 = a.getFieldValue("PIN1");
    let VAL0 = Blockly.Arduino.valueToCode(a, "VAL0", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null,
        VAL1 = Blockly.Arduino.valueToCode(a, "VAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || null;
    Blockly.Arduino.setups_["setup_button_" + PIN0] = "pinMode(" + PIN0 + ", INPUT);";
    Blockly.Arduino.setups_["setup_button_" + PIN1] = "pinMode(" + PIN1 + ", INPUT);";
    let result = "";
    if (VAL0 != null) {
        result += VAL0 + " = digitalRead(" + PIN0 + ");\n";
    }
    if (VAL1 != null) {
        result += VAL1 + " = digitalRead(" + PIN1 + ");\n";
    }
    return result;
};

Blockly.Arduino.classic_line_analog = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["analogRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_line_digital = function (a) {
    var sw = a.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + sw] = "pinMode(" + sw + ", INPUT);";
    return ["digitalRead(" + sw + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.classic_L298N = function (a) {
    let in1 = a.getFieldValue("IN1");
    let in2 = a.getFieldValue("IN2");
    let in3 = a.getFieldValue("IN3");
    let in4 = a.getFieldValue("IN4");
    let sig1 = Blockly.Arduino.valueToCode(a, "SIGNAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig2 = Blockly.Arduino.valueToCode(a, "SIGNAL2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig3 = Blockly.Arduino.valueToCode(a, "SIGNAL3", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig4 = Blockly.Arduino.valueToCode(a, "SIGNAL4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    Blockly.Arduino.setups_["setup_button_" + in1] = "pinMode(" + in1 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in2] = "pinMode(" + in2 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in3] = "pinMode(" + in3 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in4] = "pinMode(" + in4 + ", OUTPUT);";
    return "digitalWrite(" + in1 + ", " + sig1 + ");\n" +
        "digitalWrite(" + in2 + ", " + sig2 + ");\n" +
        "digitalWrite(" + in3 + ", " + sig3 + ");\n" +
        "digitalWrite(" + in4 + ", " + sig4 + ");\n"
};

Blockly.Arduino.classic_L298N_speed = function (a) {
    let in1 = a.getFieldValue("IN1");
    let in2 = a.getFieldValue("IN2");
    let in3 = a.getFieldValue("IN3");
    let in4 = a.getFieldValue("IN4");
    let sig1 = Blockly.Arduino.valueToCode(a, "SIGNAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    let sig2 = Blockly.Arduino.valueToCode(a, "SIGNAL2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig3 = Blockly.Arduino.valueToCode(a, "SIGNAL3", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    let sig4 = Blockly.Arduino.valueToCode(a, "SIGNAL4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    Blockly.Arduino.setups_["setup_button_" + in1] = "pinMode(" + in1 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in2] = "pinMode(" + in2 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in3] = "pinMode(" + in3 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in4] = "pinMode(" + in4 + ", OUTPUT);";
    return "analogWrite(" + in1 + ", " + sig1 + ");\n" +
        "digitalWrite(" + in2 + ", " + sig2 + ");\n" +
        "analogWrite(" + in3 + ", " + sig3 + ");\n" +
        "digitalWrite(" + in4 + ", " + sig4 + ");\n"
};

Blockly.Arduino.classic_L293D = function (a) {
    let in1 = a.getFieldValue("IN1");
    let in2 = a.getFieldValue("IN2");
    let in3 = a.getFieldValue("IN3");
    let in4 = a.getFieldValue("IN4");
    let sig1 = Blockly.Arduino.valueToCode(a, "SIGNAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig2 = Blockly.Arduino.valueToCode(a, "SIGNAL2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig3 = Blockly.Arduino.valueToCode(a, "SIGNAL3", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig4 = Blockly.Arduino.valueToCode(a, "SIGNAL4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    Blockly.Arduino.setups_["setup_button_" + in1] = "pinMode(" + in1 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in2] = "pinMode(" + in2 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in3] = "pinMode(" + in3 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in4] = "pinMode(" + in4 + ", OUTPUT);";
    return "digitalWrite(" + in1 + ", " + sig1 + ");\n" +
        "digitalWrite(" + in2 + ", " + sig2 + ");\n" +
        "digitalWrite(" + in3 + ", " + sig3 + ");\n" +
        "digitalWrite(" + in4 + ", " + sig4 + ");\n"
};

Blockly.Arduino.classic_L293D_speed = function (a) {
    let in1 = a.getFieldValue("IN1");
    let in2 = a.getFieldValue("IN2");
    let in3 = a.getFieldValue("IN3");
    let in4 = a.getFieldValue("IN4");
    let sig1 = Blockly.Arduino.valueToCode(a, "SIGNAL1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    let sig2 = Blockly.Arduino.valueToCode(a, "SIGNAL2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    let sig3 = Blockly.Arduino.valueToCode(a, "SIGNAL3", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    let sig4 = Blockly.Arduino.valueToCode(a, "SIGNAL4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    Blockly.Arduino.setups_["setup_button_" + in1] = "pinMode(" + in1 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in2] = "pinMode(" + in2 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in3] = "pinMode(" + in3 + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_button_" + in4] = "pinMode(" + in4 + ", OUTPUT);";
    return "analogWrite(" + in1 + ", " + sig1 + ");\n" +
        "digitalWrite(" + in2 + ", " + sig2 + ");\n" +
        "analogWrite(" + in3 + ", " + sig3 + ");\n" +
        "digitalWrite(" + in4 + ", " + sig4 + ");\n"
};

Blockly.Arduino.classic_relay = function (a) {
    let _in = a.getFieldValue("IN");
    let sig = Blockly.Arduino.valueToCode(a, "SIGNAL", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "LOW";
    Blockly.Arduino.setups_["setup_button_" + _in] = "pinMode(" + _in + ", OUTPUT);";
    return "digitalWrite(" + _in + ", " + sig + ");\n"
};

Blockly.Arduino.classic_indicator = function (a) {
    let TYPE = a.getFieldValue("TYPE");
    if (TYPE == "init") {
        let TIMER = a.getFieldValue("TIMER"),
            A = a.getFieldValue("A"), 
            F = a.getFieldValue("F"), 
            B = a.getFieldValue("B"), 
            G = a.getFieldValue("G"), 
            C = a.getFieldValue("C"), 
            D = a.getFieldValue("D"), 
            E = a.getFieldValue("E"), 
            DP = a.getFieldValue("DP"), 
            DIG1 = a.getFieldValue("DIG1"), 
            DIG2 = a.getFieldValue("DIG2"), 
            DIG3 = a.getFieldValue("DIG3"), 
            DIG4 = a.getFieldValue("DIG4");
        Blockly.Arduino.definitions_.define_IndicatorPinEVh="#include <IndicatorPinEV.h>\n";
        Blockly.Arduino.setups_["setup_IndicatorPinEV"] = "IndicatorPinEV(" + TIMER + ", " + A + ", " + F + ", " + B + ", " + G + ", " + C + ", " + D + ", " + E + ", " + DP + ", " + DIG1 + ", " + DIG2 + ", " + DIG3 + ", " + DIG4 + ");\n";
        return ""
    } else if (TYPE == "write") {
        let VALUE = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
        return a.getFieldValue("NUM") + "(" + VALUE + ");\n"
    }
    return ""
};

Blockly.Arduino.classic_led = function (a) {
    let pin = a.getFieldValue("PIN");
    let sig = Blockly.Arduino.valueToCode(a, "LIGHT", Blockly.Arduino.ORDER_ATOMIC) || "1024";
    Blockly.Arduino.setups_["setup_button_" + pin] = "pinMode(" + pin + ", OUTPUT);";
    return "digitalWrite(" + pin + ", " + sig + ");\n"
};

Blockly.Arduino.classic_servo = function (a) {
    let SERVO = a.getFieldValue("SERVO"),
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "init") {
        let MAX_ANGLE = a.getFieldValue("MAX_ANGLE"),
            START_ANGLE = a.getFieldValue("START_ANGLE");
        Blockly.Arduino.definitions_.define_ServoSmooth="#include <ServoSmooth.h>\n";
        if (!Blockly.Arduino.definitions_.variables.includes("uint32_t servoTimer_evolvector")) {
            Blockly.Arduino.definitions_.variables = "uint32_t servoTimer_evolvector;\n" +
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
            SPEED = servos["180"][SPEED];
            if (!Blockly.Arduino.definitions_.variables.includes("uint16_t angle_evolvector_var")) {
                Blockly.Arduino.definitions_.variables = "int16_t angle_evolvector_var;\n" +
                                                        "uint16_t ms_timer_evolvector;" +
                                                        Blockly.Arduino.definitions_.variables;
            }
            // let MS_FOR_ROTATE = "msRotate_evolvector = servo" + SERVO + ".getTargetDeg() - " + ANGLE + ";\nmsRotate_evolvector = abs(msRotate_evolvector) / " + SPEED[0] + " * 1000 + 500;\n"
            let FUNC_ROTATE = 'angle_evolvector_var=' + ANGLE + ';\nservo' + SERVO + '.setSpeed(' + SPEED[0] + ');  // Параметрами  setSpeed(180) и  ms_timer_evolvector задается скорость поворота вала сервопривода\nms_timer_evolvector=' + SPEED[1] + ';\nservoTimer_evolvector = millis();\nwhile (1){\n  if (millis() - servoTimer_evolvector >= ms_timer_evolvector) {\n    servoTimer_evolvector += ms_timer_evolvector;\n    servo' + SERVO + '.tickManual();\n    servo' + SERVO + '.setTargetDeg(angle_evolvector_var);\n  }\n  if(servo' + SERVO + '.getCurrentDeg()>=angle_evolvector_var-1 && servo' + SERVO + '.getCurrentDeg()<=angle_evolvector_var+1)\n  {break;}\n}\n';
            // return MS_FOR_ROTATE + "servo" + SERVO + ".setSpeed(" + SPEED[0] + ");\nturnTimer_evolvector = millis();\nservoTimer_evolvector = millis();\nwhile (millis() - turnTimer_evolvector <= msRotate_evolvector) {\n  if (millis() - servoTimer_evolvector >= " + SPEED[1] + ") {\n    servoTimer_evolvector += " + SPEED[1] + ";\n    servo" + SERVO + ".tickManual();\n    servo" + SERVO + ".setTargetDeg(" + ANGLE + ");\n  }\n}\n"
            return FUNC_ROTATE;
        } else if (TYPE == "rotateWithoutTimer") {
            Blockly.Arduino.setups_["setup_button_" + SERVO] = "pinMode(" + SERVO + ", OUTPUT);";
            let DO = '  angle_evolvector=map(angle, 0, 180, 550, 2400);\n  for (int count = 0; count<5; count++) {\n    digitalWrite(pin, HIGH);\n    delayMicroseconds(angle_evolvector);\n    digitalWrite(pin, LOW);\n    delayMicroseconds(21000 - angle_evolvector);\n  }\n'
            Blockly.Arduino.definitions_["define_void_servo_set_evolvector"] = "void servo_set_evolvector(int pin, int angle_evolvector) {\n" + DO + "\n}\n"
            return "servo_set_evolvector(" + SERVO + ", " + ANGLE + ");\n"
        }
    }
    return ""
};

Blockly.Arduino.classic_rotateServo360 = function (a) {
    let SERVO = a.getFieldValue("SERVO"),
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
Blockly.Arduino.inout_digital_write = function () {
    var a = this.getFieldValue("PIN"), b = Blockly.Arduino.valueToCode(this, "STAT", Blockly.Arduino.ORDER_ATOMIC) || "HIGH";
    Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + ", " + b + ");\n"
};
Blockly.Arduino.inout_digital_read = function () {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_analog_write = function () {
    var a = this.getFieldValue("PIN"), b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    return "analogWrite(" + a + ", " + b + ");\n"
};
Blockly.Arduino.inout_analog_read = function () {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.inout_tone = function () {
    var a = this.getFieldValue("PIN"), b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
    return "tone(" + a + ", " + b + ");"
};
Blockly.Arduino.inout_notone = function () {
    var a = this.getFieldValue("PIN");
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