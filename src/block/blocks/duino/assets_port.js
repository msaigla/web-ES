Blockly.Blocks.assets = {};
Blockly.Constants.Asset = {};
Blockly.Constants.Asset.HUE = 60;
    
Blockly.Blocks.asset_delay = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("WAIT")
            .appendField("Задержка")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["секунд", "SECONDS"], ["миллисекунд", "MILLI"], ["микросекунд", "MICRO"]]), "TIME");
        this.setTooltip("Блок выполняет остановку выполнения программы на время, указанное в центральном поле. В него может быть помещен блок с числовым значением времени задержки или переменная, которой присвоено это значение. В выпадающем меню выбирается размерность времени (секунды, миллисекунды или микросекунды).");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.asset_millis = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Время после запуска программы");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает время в миллисекундах, которое прошло с момента запуска контроллера. Данное значение времени может быть присвоено переменной типа long.")
    }
};
Blockly.Blocks.asset_abortTimer = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Функция прерывания от таймера:")
            .appendField(new Blockly.FieldTextInput("название функции"), "FUNCTION");
        this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Таймер:")
            .appendField(new Blockly.FieldDropdown([["Timer1", "Timer1"], ["Timer3", "Timer3"]]), "TIMER")
            .appendField("Гц:");
        this.appendStatementInput('DO', "input_statement")
            .appendField('');
        this.setTooltip("В данный блок включается набор действий, которые должны быть выполнены при возникновении прерывания от таймера. Для функции возможно назначение имени и выбор в выпадающем меню таймера, который управляет вызовом прерывания. Справа присоединяется блок с начальным значением частоты прерывания (можно указывать от нескольких десятых до 20000 Гц). В дальнейшем частота вызова данной функции (частота соответствующего таймера) определяется блоком «Частота таймера».");
    }
};
Blockly.Blocks.assetMega_abortTimer = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Функция прерывания от таймера:")
            .appendField(new Blockly.FieldDropdown([
                ["Таймер1 - Канал А", "Timer1, CHANNEL_A"], 
                ["Таймер1 - Канал В", "Timer1, CHANNEL_B"],
                ["Таймер1 - Канал C", "Timer1, CHANNEL_C"],
                ["Таймер2 - Канал А", "Timer2, CHANNEL_A"], 
                ["Таймер2 - Канал В", "Timer2, CHANNEL_B"],
                ["Таймер3 - Канал А", "Timer3, CHANNEL_A"], 
                ["Таймер3 - Канал В", "Timer3, CHANNEL_B"],
                ["Таймер3 - Канал C", "Timer3, CHANNEL_C"],
                ["Таймер4 - Канал А", "Timer4, CHANNEL_A"], 
                ["Таймер4 - Канал В", "Timer4, CHANNEL_B"],
                ["Таймер4 - Канал C", "Timer4, CHANNEL_C"],
                ["Таймер5 - Канал А", "Timer5, CHANNEL_A"], 
                ["Таймер5 - Канал В", "Timer5, CHANNEL_B"],
                ["Таймер5 - Канал C", "Timer5, CHANNEL_C"]
            ]), "TIMER")
            .appendField(". Гц:");
        this.appendStatementInput('DO', "input_statement")
            .appendField('');
        this.setTooltip("В данный блок включается набор действий, которые должны быть выполнены при возникновении прерывания от таймера. Для функции возможен выбор в выпадающем меню таймера, который управляет вызовом прерывания. Справа присоединяется блок с начальным значением частоты прерывания (можно указывать от нескольких десятых до 20000 Гц). В дальнейшем частота вызова данной функции (частота соответствующего таймера) определяется блоком «Частота таймера»");
    }
};
Blockly.Blocks.asset_timerDetachInterrupt = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Запрет вызова прерывания")
            .appendField(new Blockly.FieldDropdown([["Timer1", "Timer1"], ["Timer3", "Timer3"]]), "TIMER");
        this.setTooltip("Блок запрещает вызов функции прерывания по таймеру. В выпадающем меню указывается таймер прерывания, на вызов которого налагается запрет.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.assetMega_timerDetachInterrupt = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Запрет вызова прерывания")
            .appendField(new Blockly.FieldDropdown([
                ["Таймер1 - Канал А", "Timer1, CHANNEL_A"], 
                ["Таймер1 - Канал В", "Timer1, CHANNEL_B"],
                ["Таймер1 - Канал C", "Timer1, CHANNEL_C"],
                ["Таймер2 - Канал А", "Timer2, CHANNEL_A"], 
                ["Таймер2 - Канал В", "Timer2, CHANNEL_B"],
                ["Таймер3 - Канал А", "Timer3, CHANNEL_A"], 
                ["Таймер3 - Канал В", "Timer3, CHANNEL_B"],
                ["Таймер3 - Канал C", "Timer3, CHANNEL_C"],
                ["Таймер4 - Канал А", "Timer4, CHANNEL_A"], 
                ["Таймер4 - Канал В", "Timer4, CHANNEL_B"],
                ["Таймер4 - Канал C", "Timer4, CHANNEL_C"],
                ["Таймер5 - Канал А", "Timer5, CHANNEL_A"], 
                ["Таймер5 - Канал В", "Timer5, CHANNEL_B"],
                ["Таймер5 - Канал C", "Timer5, CHANNEL_C"]
            ]), "TIMER");
        this.setTooltip("Блок запрещает вызов функции прерывания по таймеру. В выпадающем меню указывается таймер прерывания, на вызов которого налагается запрет.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.asset_timerAttachInterrupt = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Разрешение вызова прерывания")
            .appendField(new Blockly.FieldTextInput("имя функции прерывания"), "FUNCTION")
            .appendField("от")
            .appendField(new Blockly.FieldDropdown([["Timer1", "Timer1"], ["Timer3", "Timer3"]]), "TIMER");
        this.setTooltip("Блок разрешает вызов функции прерывания по таймеру, если до этого ее работа была остановлена (запрещена). В поле с именем конкретно указывается имя функции прерывания, которая разрешается. В поле таймера указывается номер таймера, который управляет частотой вызова функции.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.assetMega_timerAttachInterrupt = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Разрешение вызова прерывания от")
            .appendField(new Blockly.FieldDropdown([
                ["Таймер1 - Канал А", "Timer1, CHANNEL_A"], 
                ["Таймер1 - Канал В", "Timer1, CHANNEL_B"],
                ["Таймер1 - Канал C", "Timer1, CHANNEL_C"],
                ["Таймер2 - Канал А", "Timer2, CHANNEL_A"], 
                ["Таймер2 - Канал В", "Timer2, CHANNEL_B"],
                ["Таймер3 - Канал А", "Timer3, CHANNEL_A"], 
                ["Таймер3 - Канал В", "Timer3, CHANNEL_B"],
                ["Таймер3 - Канал C", "Timer3, CHANNEL_C"],
                ["Таймер4 - Канал А", "Timer4, CHANNEL_A"], 
                ["Таймер4 - Канал В", "Timer4, CHANNEL_B"],
                ["Таймер4 - Канал C", "Timer4, CHANNEL_C"],
                ["Таймер5 - Канал А", "Timer5, CHANNEL_A"], 
                ["Таймер5 - Канал В", "Timer5, CHANNEL_B"],
                ["Таймер5 - Канал C", "Timer5, CHANNEL_C"]
            ]), "TIMER");
        this.setTooltip("Блок разрешает вызов функции прерывания по таймеру, если до этого ее работа была остановлена (запрещена). В поле с именем конкретно указывается имя функции прерывания, которая разрешается. В поле таймера указывается номер таймера, который управляет частотой вызова функции.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.asset_timerPWM = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("На цифровом контакте порта")
            .appendField(new Blockly.FieldDropdown(profile["default"].portTimer), "PIN")
            .appendField("установить ШИМ-сигнал с частотой");
        this.appendValueInput("VALUE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Гц и скважностью");
        this.appendDummyInput()
            .appendField("%");
        this.setTooltip("Блок генерирует сигнал с широтно-импульсной модуляцией на цифровом контакте порта 4 или 8 контроллера под управлением таймера 1. Частота сигнала и его скважность указывается в соответствующих полях. Частоту можно задавать в диапазоне от нескольких десятых до 20000 Гц, скважность в диапазоне от 0,1 до 100 %. Одновременно важно контролировать, чтобы никакие другие устройства не работали на таймере 1.");
        this.setInputsInline(true);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.asset_timerPeriod = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Частота таймера:")
            .appendField(new Blockly.FieldDropdown([["Timer1", "Timer1"], ["Timer3", "Timer3"]]), "TIMER")
            .appendField("Гц:");
        this.setTooltip("Посредством данного блока настраивается частота таймеров 1 и 3 (выбор между ними выполняется с помощью выпадающего меню). Значение частоты присоединяется справа в виде числового блока или переменной. Диапазон задания частоты варьируется от нескольких десятых до 20 000 Гц. Данный блок применяется совместно с блоком «Функция прерывания от таймера» и необходим для настройки частоты вызова указанной функции.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.assetMega_timerPeriod = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Частота таймера:")
            .appendField(new Blockly.FieldDropdown([
                ["Таймер1 - Канал А", "Timer1, CHANNEL_A"], 
                ["Таймер1 - Канал В", "Timer1, CHANNEL_B"],
                ["Таймер1 - Канал C", "Timer1, CHANNEL_C"],
                ["Таймер2 - Канал А", "Timer2, CHANNEL_A"], 
                ["Таймер2 - Канал В", "Timer2, CHANNEL_B"],
                ["Таймер3 - Канал А", "Timer3, CHANNEL_A"], 
                ["Таймер3 - Канал В", "Timer3, CHANNEL_B"],
                ["Таймер3 - Канал C", "Timer3, CHANNEL_C"],
                ["Таймер4 - Канал А", "Timer4, CHANNEL_A"], 
                ["Таймер4 - Канал В", "Timer4, CHANNEL_B"],
                ["Таймер4 - Канал C", "Timer4, CHANNEL_C"],
                ["Таймер5 - Канал А", "Timer5, CHANNEL_A"], 
                ["Таймер5 - Канал В", "Timer5, CHANNEL_B"],
                ["Таймер5 - Канал C", "Timer5, CHANNEL_C"]
            ]), "TIMER")
            .appendField("Гц:");
        this.setTooltip("Посредством данного блока настраивается частота таймеров 1 и 3 (выбор между ними выполняется с помощью выпадающего меню). Значение частоты присоединяется справа в виде числового блока или переменной. Диапазон задания частоты варьируется от нескольких десятых до 20 000 Гц. Данный блок применяется совместно с блоком «Функция прерывания от таймера» и необходим для настройки частоты вызова указанной функции.");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
Blockly.Blocks.asset_init = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendDummyInput()
            .appendField("Начальные значения параметров")
        this.appendStatementInput('DO', "input_statement")
            .appendField('');
        this.setTooltip("Блок предназначен для определения начальных значений параметров, используемых в программе, а также для первоначальной настройки или инициализации устройств. Например, в центральное поле данного блока могут помещаться блоки с присвоением начальных значений переменных, с которыми будут выполняться операции в программе, или блоки настройки электронных модулей.")
    }
};
Blockly.Blocks.asset_map = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("VALUE")
            .appendField("Перенос")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("FROM_LOW")
            .appendField("из диапазона: [")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("FROM_HIGH")
            .appendField(",")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("TO_LOW")
            .appendField("] в диапазон: [")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("TO_HIGH")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField(",");
        this.appendDummyInput()
            .appendField("]");
        this.setInputsInline(true);
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок числу из одного числового диапазона (левые поля с границами диапазона) ставит в соответствие число из другого диапазона (правые поля с границами диапазона). То есть он возвращает число, которое может присваиваться переменной соответствующего типа. При этом все числа могут задаваться как в виде числовых блоков, так и в виде блоков с числовыми переменными. Диапазоны задают только закономерность соответствия, поэтому если переносимое число окажется за пределом первоначального диапазона, то соответствующее ему число все равно будет возвращено.")
    }
};
Blockly.Blocks.asset_max = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("MAX")
            .appendField("Ограничение максимума")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("VALUE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("для значения")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок ограничивает максимальное значение переменной. Справа вверху присоединяется блок с максимальным числовым значением, которое может принимать переменная, присоединенная справа внизу. Далее, если конкретное значение данной переменной окажется меньше заданного максимума, блок вернет текущее значение переменной. А если переменная примет значение больше максимума, то блок вернет это максимальное значение.")
    }
};
Blockly.Blocks.asset_min = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("MIN")
            .appendField("Ограничение минимума")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("VALUE")
            .appendField("для значения")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок ограничивает минимальное значение переменной. Справа вверху присоединяется блок с минимальным числовым значением, которое может принимать переменная, присоединенная справа внизу. Далее, если конкретное значение данной переменной окажется больше заданного минимума, блок вернет текущее значение переменной. А если переменная примет значение меньше минимума, то блок вернет это минимальное значение.")
    }
};

Blockly.Blocks.asset_max_min = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("MIN")
            .appendField("Ограничение минимума")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("MAX")
            .appendField("и максимума")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.appendValueInput("VALUE")
            .appendField("для значения")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок ограничивает минимальное и максимальное значения переменной. Справа вверху присоединяется блок с минимальным числовым значением. Под ним указывается максимальное значение. Таким образом, задается допустимый диапазон значений которые может принимать переменная, присоединенная справа внизу. Далее, если конкретное значение данной переменной окажется в этом диапазоне, блок вернет текущее значение переменной. А если переменная примет значение больше максимума, то блок вернет это максимальное значение. Если меньше минимума, то блок вернет минимальное значение.")
    }
};