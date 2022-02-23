Blockly.Blocks.assets = {};
Blockly.Constants.Asset = {};
Blockly.Constants.Asset.HUE = 60;

Blockly.Blocks.rpi_highlow = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["HIGH", "GPIO.HIGH"], ["LOW", "GPIO.LOW"]]), "BOOL");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем +3.3 вольта (HIGH) или низким 0 вольт (LOW).")
    }
};

Blockly.Blocks.rpi_gpioInit = {
    helpUrl: "",
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Инициализация");
        this.appendDummyInput()
            .appendField("Установить")
            .appendField(new Blockly.FieldDropdown(profile["default"].connectors), "CONN")
            .appendField("на")
            .appendField(new Blockly.FieldDropdown([
                ["вход сигнала", ", GPIO.IN"],
                ["выход сигнала", ", GPIO.OUT"]
            ]), "TYPE");
        this.appendDummyInput()
            .appendField("Включить")
            .appendField(new Blockly.FieldDropdown([
                ["по умолчанию", ""],
                ["стягивающий резистор (Земля)", ", pull_up_down=GPIO.PUD_DOWN"],
                ["подтягивающий резистор (+3.3V)", ", pull_up_down=GPIO.PUD_UP"]
            ]), "RESISTOR");
        this.setTooltip("");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};

Blockly.Blocks.rpi_gpioRead= {
    helpUrl: "",
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с цифрового")
            .appendField(new Blockly.FieldDropdown(profile["default"].connectors2), "CONN");
        this.setOutput(!0, null);
        this.setTooltip("Блоком выполняется считывание сигнала с цифрового контакта. Номер контакта указывается в выпадающем меню. Блок возвращает логическое значение, которое может быть присвоено логической переменной. Также оно может быть использовано в других логических выражениях и блоках.")
    }
};

Blockly.Blocks.rpi_gpioWrite = {
    helpUrl: "",
    init: function () {
        this.setColour("#964b00");
        this.appendValueInput("VALUE")
            .appendField("Вывести на цифровой")
            .appendField(new Blockly.FieldDropdown(profile["default"].connectors), "CONN");
        this.setTooltip("");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};

Blockly.Blocks.rpi_pwm = {
    helpUrl: "",
    init: function () {
        this.setColour("#964b00");
        this.appendValueInput("FREQUENCY")
            .appendField("Контакт(пин) с ШИМ")
            .appendField(new Blockly.FieldDropdown(profile["default"].pwm), "CONN");
        this.setTooltip("");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};