'use strict';

Blockly.Python.evModules = {};

Blockly.Python.port_photoresistor = function (a) {
    let SENSOR = generator.standart.port[a.getFieldValue("PORT")][1],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_photoresistor = "from RASVERTOR.sensor import photoresistor";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["photoresistor(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
};

Blockly.Python.port_barometer = function (a) {
    let TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_sensor_barometer = "from RASVERTOR.sensor import Barometer";
        if (!Blockly.Python.definitions_.variables.includes("barometer_evolvector = Barometer()")) {
            Blockly.Python.definitions_.variables = "barometer_evolvector = Barometer()\n" +
                                                    Blockly.Python.definitions_.variables;
        }
        let TYPE = a.getFieldValue("VAL");
        return ["barometer_evolvector" + TYPE, Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
};

Blockly.Python.classic_five_button_one = function (a) {
    let SENSOR = a.getFieldValue("PIN"),
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_button = "from RASVERTOR.sensor import button";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["button(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
};

Blockly.Python.classic_five_button_all = function (a) {
    let PIN1 = a.getFieldValue("PIN0"),
        PIN2 = a.getFieldValue("PIN1"),
        PIN3 = a.getFieldValue("PIN2"),
        PIN4 = a.getFieldValue("PIN3"),
        PIN5 = a.getFieldValue("PIN4"),
        VAL0 = Blockly.Python.valueToCode(a, "VAL0", Blockly.Python.ORDER_NONE) || "",
        VAL1 = Blockly.Python.valueToCode(a, "VAL1", Blockly.Python.ORDER_NONE) || "",
        VAL2 = Blockly.Python.valueToCode(a, "VAL2", Blockly.Python.ORDER_NONE) || "",
        VAL3 = Blockly.Python.valueToCode(a, "VAL3", Blockly.Python.ORDER_NONE) || "",
        VAL4 = Blockly.Python.valueToCode(a, "VAL4", Blockly.Python.ORDER_NONE) || "",
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_button = "from RASVERTOR.sensor import button";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + PIN1] = "pinMode(" + PIN1 + ", INPUT)";
        Blockly.Python.setups_["pinMode" + PIN2] = "pinMode(" + PIN2 + ", INPUT)";
        Blockly.Python.setups_["pinMode" + PIN3] = "pinMode(" + PIN3 + ", INPUT)";
        Blockly.Python.setups_["pinMode" + PIN4] = "pinMode(" + PIN4 + ", INPUT)";
        Blockly.Python.setups_["pinMode" + PIN5] = "pinMode(" + PIN5 + ", INPUT)";
        return VAL0 + " = button(" + PIN1 + ")\n" +
            VAL1 + " = button(" + PIN2 + ")\n" +
            VAL2 + " = button(" + PIN3 + ")\n" +
            VAL3 + " = button(" + PIN4 + ")\n" +
            VAL4 + " = button(" + PIN5 + ")";
    } else {
        return ""
    }
};

Blockly.Python.port_button = function (a) {
    let SENSOR = generator.standart.port[a.getFieldValue("PORT")][0],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_button = "from RASVERTOR.sensor import button";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["button(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.port_limit_switch = function (a) {
    let SENSOR = generator.standart.port[a.getFieldValue("PORT")][0],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_button = "from RASVERTOR.sensor import button";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["button(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.classic_two_axis = function (a) {
    let PIN0 = a.getFieldValue("PIN0"),
        PIN1 = a.getFieldValue("PIN1"),
        VAL0 = Blockly.Python.valueToCode(a, "VAL0", Blockly.Python.ORDER_NONE) || "",
        VAL1 = Blockly.Python.valueToCode(a, "VAL1", Blockly.Python.ORDER_NONE) || "",
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_twoTilt = "from RASVERTOR.sensor import twoTilt";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + PIN0] = "pinMode(" + PIN0 + ", INPUT)";
        Blockly.Python.setups_["pinMode" + PIN1] = "pinMode(" + PIN1 + ", INPUT)";
        return "vrem_var = twoTilt(" + PIN0 + ", " + PIN1 + ")\n" +
            VAL0 + " = vrem_var[0]" +
            VAL1 + " = vrem_var[1]";
    } else {
        return ""
    }
}

Blockly.Python.classic_line_digital = function (a) {
    let SENSOR = a.getFieldValue("PIN"),
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_lineSensorDIO = "from RASVERTOR.sensor import lineSensorDIO";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["lineSensorDIO(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.classic_line_analog = function (a) {
    let SENSOR = a.getFieldValue("PIN"),
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_lineSensorAnalog = "from RASVERTOR.sensor import lineSensorAnalog";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["lineSensorAnalog(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.port_line_digital = function (a) {
    let SENSOR = generator.standart.port[a.getFieldValue("PORT")][0],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_lineSensorDIO = "from RASVERTOR.sensor import lineSensorDIO";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["lineSensorDIO(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.port_line_analog = function (a) {
    let SENSOR = generator.standart.port[a.getFieldValue("PORT")][1],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_lineSensorAnalog = "from RASVERTOR.sensor import lineSensorAnalog";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        Blockly.Python.setups_["pinMode" + SENSOR] = "pinMode(" + SENSOR + ", INPUT)";
        return ["lineSensorAnalog(" + SENSOR + ")", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}

Blockly.Python.port_sonic = function (a) {
    var PIN0 = generator.standart.port[a.getFieldValue("PORT")][1],
        PIN1 = generator.standart.port[a.getFieldValue("PORT")][0],
        TYPE = a.getFieldValue("TYPE");
    if (TYPE == "controller") {
        Blockly.Python.definitions_.RASVERTOR_portControl = "from RASVERTOR.portControl import *";
        Blockly.Python.definitions_.RASVERTOR_sensor_lineSensorAnalog = "from RASVERTOR.sensor import initSonar";
        Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
        if (!Blockly.Python.definitions_.variables.includes("sonic_evolvector = initSonar(" + PIN0 + ", " + PIN1 + ")")) {
            Blockly.Python.definitions_.variables = "sonic_evolvector = initSonar(" + PIN0 + ", " + PIN1 + ")\n" +
                                                    Blockly.Python.definitions_.variables;
        }
        return ["sonic_evolvector.readSonar()", Blockly.Python.ORDER_ATOMIC]
    } else {
        return ["", Blockly.Python.ORDER_ATOMIC]
    }
}