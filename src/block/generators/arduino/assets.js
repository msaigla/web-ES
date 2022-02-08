Blockly.Arduino.infinite_while = function(block) {
    var branch = Blockly.Arduino.statementToCode(block, 'DO');
    return 'while (true) {\n' + branch + '}\n';
};