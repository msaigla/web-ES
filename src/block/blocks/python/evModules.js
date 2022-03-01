'use strict';

Blockly.Blocks.port_photoresistor = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
                ["вывод текста", ""],
            ]), "TYPE")
            .appendField("Подключен к порту");
            // .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.");
    }
};