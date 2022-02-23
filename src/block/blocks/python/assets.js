Blockly.Blocks.asset_delay = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("WAIT")
            .appendField("Задержка")
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["секунд", "SECONDS"], ["миллисекунд", "MILLI"], ["микросекунд", "MICRO"]]), "TIME");
        this.setTooltip("Блок выполняет остановку выполнения программы на время, указанное в центральном поле. В него может быть помещен блок с числовым значением времени задержки или переменная, которой присвоено это значение. В выпадающем меню выбирается размерность времени (секунды, миллисекунды или микросекунды).");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};