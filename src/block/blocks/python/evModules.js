'use strict';

Blockly.Blocks.port_photoresistor = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ]), "TYPE");
        this.setOutput(!0);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.");
    }
};

Blockly.Blocks.classic_five_button_one = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [{'src': "assets/img/components/sensors/Модуль 5 тактовых кнопок_1.png", 'width': 64, 'height': 50, 'alt': 'Белый'}, "white"], 
                [{'src': "assets/img/components/sensors/Модуль 5 тактовых кнопок_2.png", 'width': 64, 'height': 50, 'alt': 'Красный'}, "red"],
                [{'src': "assets/img/components/sensors/Модуль 5 тактовых кнопок_3.png", 'width': 64, 'height': 50, 'alt': 'Желтый'}, "yellow"],
                [{'src': "assets/img/components/sensors/Модуль 5 тактовых кнопок_4.png", 'width': 64, 'height': 50, 'alt': 'Зеленый'}, "green"],
                [{'src': "assets/img/components/sensors/Модуль 5 тактовых кнопок_5.png", 'width': 64, 'height': 50, 'alt': 'Синий'}, "blue"]
            ]), "NUMBER")
        .appendField("5 тактовых кнопок");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ]), "TYPE");
        // this.appendDummyInput()
        //     .appendField("Кнопка подключена к")
        //     .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего состояние одной из пяти кнопок модуля. Кнопка, для которой передается состояние, выбирается из выпадающего списка. Параметр состояния принимает значение 0 при нажатии кнопки и 1 в случае, если кнопка отпущена. Данное значение можно присваивать только переменой типа boolean.');
    }
};


Blockly.Blocks.classic_five_button_all = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.251 Модуль 5 тактовых кнопок.png", 64, 40))
            .appendField("5 тактовых кнопок");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ]), "TYPE");
        this.appendValueInput("VAL0", "Boolean")
            .appendField("Состояние SW0, подключенной к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN0")
            .appendField(", присвоить");
        this.appendValueInput("VAL1", "Boolean")
            .appendField("Состояние SW1, подключенной к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1")
            .appendField(", присвоить");
        this.appendValueInput("VAL2", "Boolean")
            .appendField("Состояние SW2, подключенной к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN2")
            .appendField(", присвоить");
        this.appendValueInput("VAL3", "Boolean")
            .appendField("Состояние SW3, подключенной к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN3")
            .appendField(", присвоить");
        this.appendValueInput("VAL4", "Boolean")
            .appendField("Состояние SW4, подключенной к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN4")
            .appendField(", присвоить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('Блок возвращает логические значения параметров, описывающих состояния всех 5-ти кнопок модуля, и позволяет присвоить их переменным, подключенным к блоку. Параметры состояния принимают значение 0 при нажатии кнопки и 1 в случае, если кнопка отпущена. Данные значения можно присваивать только переменным типа boolean.');
    }
};

Blockly.Blocks.port_button = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [{'src': "assets/img/components/sensors/Модуль-тактовая-кнопка-с-белым-колпачком.png", 'width': 64, 'height': 34, 'alt': 'белый'}, "white"], 
                [{'src': "assets/img/components/sensors/Модуль-тактовая-кнопка-с-зеленым-колпачком.png", 'width': 64, 'height': 34, 'alt': 'зеленый'}, "green"],
                [{'src': "assets/img/components/sensors/Модуль-тактовая-кнопка-с-красным-колпачком.png", 'width': 64, 'height': 34, 'alt': 'красный'}, "red"],
                [{'src': "assets/img/components/sensors/Модуль-тактовая-кнопка-с-серым-колпачком.png", 'width': 64, 'height': 34, 'alt': 'серый'}, "gray"],
                [{'src': "assets/img/components/sensors/Модуль-тактовая-кнопка-с-синим-колпачком.png", 'width': 64, 'height': 34, 'alt': 'синий'}, "blue"]
            ]), "COLOR")
            .appendField("Тактовая кнопка");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ]), "TYPE");
        // this.appendDummyInput()
        //     .appendField("Подключена к порту ")
        //     .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего состояние тактовой кнопки. Параметр состояния принимает значение 1 при нажатии на кнопку и 0 в случае, если кнопка отпущена. Данное значение можно присваивать только переменной типа boolean.");
    }
};

Blockly.Blocks.port_limit_switch = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.125 Модуль концевой выключатель.png", 64, 40))
            .appendField("Концевой выключатель");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ]), "TYPE");
        // this.appendDummyInput()
        //     .appendField("Подключен к порту")
        //     .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего состояние концевого выключателя. Параметр состояния принимает значение 1 при нажатии на контактный датчик выключателя и 0 в случае, если он отпущен. Данное значение можно присваивать только переменной типа boolean.");
    }
};