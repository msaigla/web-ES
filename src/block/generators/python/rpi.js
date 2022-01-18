Blockly.Python.rpi_highlow = function () {
    return ["HIGH" == this.getFieldValue("BOOL") ? "GPIO.HIGH" : "GPIO.LOW", Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python.rpi_gpioInit = function () {
    var a = this.getFieldValue("CONN"), 
        b = this.getFieldValue("TYPE"),
        c = this.getFieldValue("RESISTOR");
    Blockly.Python.definitions_.import_RPi_GPIO_as_GPIO="import RPi.GPIO as GPIO";
    Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
    return "GPIO.setup(" + a + b + c +")\n"
};

Blockly.Python.rpi_gpioWrite = function () {
    var a = this.getFieldValue("CONN"), 
        b = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_ATOMIC) || "GPIO.HIGH";
    Blockly.Python.definitions_.import_RPi_GPIO_as_GPIO="import RPi.GPIO as GPIO";
    Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
    return "GPIO.output(" + a + ", " + b + ")\n"
};

Blockly.Python.rpi_gpioRead = function () {
    var a = this.getFieldValue("CONN");
    Blockly.Python.definitions_.import_RPi_GPIO_as_GPIO="import RPi.GPIO as GPIO";
    Blockly.Python.setups_["GPIO.setmode(GPIO.BCM)"] = "GPIO.setmode(GPIO.BCM)";
    return ["GPIO.input(" + a + ")", Blockly.Python.ORDER_ATOMIC]
};