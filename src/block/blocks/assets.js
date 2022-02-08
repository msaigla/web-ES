Blockly.Blocks.assets = {};
Blockly.Constants.Asset = {};
Blockly.Constants.Asset.HUE = 60;
    
Blockly.Blocks.infinite_while = {
    helpUrl: "",
    init: function () {
        this.setColour("#317f43");
        this.appendDummyInput()
            .appendField('Повторять бесконечно');
        this.appendStatementInput('DO', "input_statement")
            .appendField('Действия:');
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('');
    }
};