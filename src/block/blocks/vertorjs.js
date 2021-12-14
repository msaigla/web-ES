'use strict';
Blockly.Blocks.vertorjs = {};
Blockly.Constants.Vertorjs = {};

Blockly.Blocks.vertorjs_highlow = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "BOOL");
        this.setOutput(!0, null);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.vertorjs_digital_write = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Вывести на цифровой контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.pin), "PIN")
            this.appendValueInput("STAT")
            .appendField("сигнал")
            .setCheck("Boolean");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка сигнала на цифровом контакте. Сигнал представляет собой постоянное напряжение с уровнем 5 вольт (HIGH) или 0 вольт (LOW). Уровень может определяться помещаемым в правое поле блоком: HIGH/LOW, логическим выражением, любым другим, результатом выполнения которого является логическое значение.\nНомер контакта для вывода сигнала выбирается в выпадающем меню.")
    }
};
Blockly.Blocks.vertorjs_digital_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с цифрового контакта (пина)")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.digital), "PIN");
        this.setOutput(!0, null);
        this.setTooltip("Блоком выполняется считывание сигнала с цифрового контакта. Номер контакта указывается в выпадающем меню. Блок возвращает логическое значение, которое может быть присвоено логической переменной. Также оно может быть использовано в других логических выражениях и блоках.")
    }
};
Blockly.Blocks.vertorjs_analog_write = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Вывести на контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.analogWrite), "PIN");
        this.appendValueInput("NUM")
            .appendField("аналоговый сигнал со скважностью")
        this.appendValueInput("HZ")
            .appendField("% с частотой")
        this.appendDummyInput()
            .appendField("Гц")
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка аналогового сигнала на контакте с номером, выбранном из выпадающего списка. Сигнал формируется с помощью широтно-импульсной модуляции (ШИМ) и представляет собой псевдоаналоговый сигнал. Уровень напряжения такого сигнала задается числовым значением, помещенным в виде блока в правое поле. Оно может находится в диапазоне от 0 (0 вольт) до 255 (5 вольт).")
    }
};
Blockly.Blocks.vertorjs_analog_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с аналогового контакта (пина)")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.analogRead), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блоком выполняется считывание сигнала с аналогового контакта, номер которого указывается в выпадающем меню. Блок возвращает число, соответствующее уровню напряжения на контакте. Данное число находится в пределах от 0 (0 вольт) до 1023 (5 вольт). Оно может может быть присвоено любой числовой переменной или использоваться в других арифметических выражениях и блоках.")
    }
};

Blockly.Blocks.vertorjs_watch = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("FUNCTION")
            .appendField("Выполнить")
        this.appendDummyInput()
            .appendField("при изменении сигнала на контакте")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.digital), "PIN")
            .appendField(new Blockly.FieldDropdown([
                ["с «0» на «1»", "rising"],
                ["с «1» на «0»", "falling"],
                ["с «0» на «1», так и с «1» на «0»", "both"]
            ]), "SIG");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_clearWatch = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("ID")
            .appendField("Запрет выполнения прерывания");
        this.appendDummyInput()
            .appendField("при изменении сигнала на контакте");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_digitalPulse = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("VALUE1")
            .appendField("Установить на пине")
            .appendField(new Blockly.FieldDropdown(profile.vertorjs.digital), "PIN")
            .appendField("сигнал");
        this.appendValueInput("VALUE2")
            .appendField("на");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["секунд", "1000"],
                ["миллисекунд", "1"]
            ]), "TYPE_TIME");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_everyAndAfter = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("DELAY")
            .appendField(new Blockly.FieldDropdown([
                ["Каждые", "setInterval("],
                ["Через", "setTimeout("]
            ]), "TYPE");
        this.appendValueInput("FUNCTION")
            .appendField("миллисекунд выполнять Действия");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_changeInterval = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("ID")
            .appendField("Изменить период выполнения");
        this.appendValueInput("VALUE")
            .appendField("на");
        this.appendDummyInput()
            .appendField("миллисекунд");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_clearInterval = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("ID")
            .appendField("Прекратить циклическое выполнение");
        this.setInputsInline(true);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_print = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("VALUE")
            .appendField("Вывести в консоль текст");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_getTime = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Время после запуска контроллера");
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_changeInterval = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("ID")
            .appendField("Изменить период выполнения");
        this.appendValueInput("VALUE")
            .appendField("на");
        this.appendDummyInput()
            .appendField("миллисекунд");
        this.setInputsInline(true);
        // this.appendStatementInput('DO', "input_statement")
        //     .appendField('');
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_clearInterval = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("ID")
            .appendField("Прекратить циклическое выполнение");
        this.setInputsInline(true);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_roundUp = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("VALUE")
            .appendField("Округлить до");
        this.appendDummyInput()
            .appendField("знаков после запятой");
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_led = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendValueInput("VALUE")
            .appendField("Округлить до");
        this.appendDummyInput()
            .appendField("знаков после запятой");
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};