'use strict';

Blockly.Python.asset = {};
Blockly.Python.asset_delay = function (a) {
    Blockly.Python.definitions_.import_time = "import time";
    let WAIT = Blockly.Python.valueToCode(a, "WAIT", Blockly.Python.ORDER_NONE) || 0;
    switch (a.getFieldValue("TIME")) {
        case "SECONDS":
            return "time.sleep(" + WAIT + ");\n";
        case "MICRO":
            return "time.sleep(" + WAIT + " / 1000000);\n"
        case "MILLI":
            return "time.sleep(" + WAIT + " / 1000);\n";
    }
    return "time.sleep(" + WAIT + ");";
};