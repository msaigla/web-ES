'use strict';

Blockly.Blocks.port_photoresistor = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updatePhotoresistor(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.");
    },
    updatePhotoresistor: function(value) {
        this.removeInput("P", /* no error */ true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT");
        }
    }
};

Blockly.Blocks.port_barometer = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Барометр ВЭЛ10.282.png", 64, 40))
            .appendField("Барометр");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Определить атмосферное давление в Паскалях", ".readPressurePascals()"], 
                ["Определить атмосферное давление в мм рт.ст.", ".readPressureMillimetersHg()"], 
                ["Определить высоту над уровнем море", ".readAltitude()"],
                ["Определить температуру окружающей среды", ".readTemperatureC()"]
            ]), "VAL");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Числовое значение параметра можно присваивать переменным следующих типов: int, float, long. Модуль подключается к контроллеру через разъем с интерфейсом i2c.");
    }
};

Blockly.Blocks.classic_five_button_one = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateFiveButton(value);
        return value;
    },
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
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0);
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего состояние одной из пяти кнопок модуля. Кнопка, для которой передается состояние, выбирается из выпадающего списка. Параметр состояния принимает значение 0 при нажатии кнопки и 1 в случае, если кнопка отпущена. Данное значение можно присваивать только переменой типа boolean.');
    },
    updateFiveButton: function(value) {
        this.removeInput("P", /* no error */ true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Кнопка подключена к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        }
    }
};


Blockly.Blocks.classic_five_button_all = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateFiveButton(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.251 Модуль 5 тактовых кнопок.png", 64, 40))
            .appendField("5 тактовых кнопок");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('Блок возвращает логические значения параметров, описывающих состояния всех 5-ти кнопок модуля, и позволяет присвоить их переменным, подключенным к блоку. Параметры состояния принимают значение 0 при нажатии кнопки и 1 в случае, если кнопка отпущена. Данные значения можно присваивать только переменным типа boolean.');
    },
    updateFiveButton: function(value) {
        this.removeInput("VAL0", /* no error */ true);
        this.removeInput("VAL1", /* no error */ true);
        this.removeInput("VAL2", /* no error */ true);
        this.removeInput("VAL3", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("VAL0")
                .appendField("Состояние SW0, подключенной к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN0")
                .appendField(", присвоить");
            this.appendValueInput("VAL1")
                .appendField("Состояние SW1, подключенной к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1")
                .appendField(", присвоить");
            this.appendValueInput("VAL2")
                .appendField("Состояние SW2, подключенной к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN2")
                .appendField(", присвоить");
            this.appendValueInput("VAL3")
                .appendField("Состояние SW3, подключенной к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN3")
                .appendField(", присвоить");
            this.appendValueInput("VAL4")
                .appendField("Состояние SW4, подключенной к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN4")
                .appendField(", присвоить");
        }
    }
};

Blockly.Blocks.port_button = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateButton(value);
        return value;
    },
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
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0);
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего состояние тактовой кнопки. Параметр состояния принимает значение 1 при нажатии на кнопку и 0 в случае, если кнопка отпущена. Данное значение можно присваивать только переменной типа boolean.");
    },
    updateButton: function(value) {
        this.removeInput("P", /* no error */ true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключена к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT");
        }
    }
};

Blockly.Blocks.port_limit_switch = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLimitSwitch(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.125 Модуль концевой выключатель.png", 64, 40))
            .appendField("Концевой выключатель");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0);
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего состояние концевого выключателя. Параметр состояния принимает значение 1 при нажатии на контактный датчик выключателя и 0 в случае, если он отпущен. Данное значение можно присваивать только переменной типа boolean.");
    },
    updateLimitSwitch: function(value) {
        this.removeInput("P", /* no error */ true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключена к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT");
        }
    }
};

Blockly.Blocks.classic_two_axis = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateTwoAxis(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.121 Датчик наклона.png", 64, 40))
            .appendField("2-х осевой датчик наклона");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('Блок возвращает логическое значение параметров, описывающих наличие наклонов модуля в ту или иную сторону. Параметры состояния принимают значение 1 или 0 в зависимости от того, в какую сторону наклонен модуль относительно осей, обозначенных СН1 и СН2. Эти значения можно присваивать только переменным типа boolean. Направления наклонов относительно осей СН1 и СН2 промаркированы на модуле стрелочками с указанием логических значений (0 и 1) в зависимости от направления наклона.');
    },
    updateTwoAxis: function(value) {
        this.removeInput("VAL0", /* no error */ true);
        this.removeInput("VAL1", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("VAL0")
                .appendField("Состояние наклона СН1, подключенного к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN0")
                .appendField(", присвоить");
            this.appendValueInput("VAL1")
                .appendField("Состояние наклона СН2, подключенного к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1")
                .appendField(", присвоить");
        }
    }
};

Blockly.Blocks.classic_line_digital = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLineDigital(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-ЦШ Датчик линии ЦШ.png", 64, 40))
            .appendField("Цифровой датчик линии");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего наличие белого или черного цвета под фоточувствительным элементом датчика. Параметр состояния принимает значение 1, если под датчиком находится белый цвет и 0, если цвет черный. Соответственно, можно определять черную линию на белом поле или наоборот. Данное значение можно присваивать только переменной типа boolean. Рекомендуемое расстояние от датчика до поверхности, для которой определяется цвет, от 5 до 15 мм.');
    },
    updateLineDigital: function(value) {
        this.removeInput("P", /* no error */ true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Контакт D подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        }
    }
};

Blockly.Blocks.classic_line_analog = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLineAnalog(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-АШ Датчик линии АШ.png", 64, 40))
            .appendField("Аналоговый датчик линии");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего в градациях серых оттенков цвет поверхности под фоточувствительным элементом датчика. Параметр состояния принимает значения из диапазона от 0 до 1023, в зависимости от фактического цвета. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    },
    updateLineAnalog: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Контакт А подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        }
    }
};

Blockly.Blocks.port_line_digital = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLineDigital(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-ЦР Датчик линии ЦР.png", 64, 40))
            .appendField("Цифровой датчик линии");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего наличие белого или черного цвета под фоточувствительным элементом датчика. Параметр состояния принимает значение 1, если под датчиком находится белый цвет и 0, если цвет черный. Соответственно, можно определять черную линию на белом поле или наоборот. Данное значение можно присваивать только переменной типа boolean. Рекомендуемое расстояние от датчика до поверхности, для которой определяется цвет, от 5 до 15 мм.");
    },
    updateLineDigital: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        }
    }
};

Blockly.Blocks.port_line_analog = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLineAnalog(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-АР Датчик линии АР.png", 64, 40))
            .appendField("Аналоговый датчик линии");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего в градациях серых оттенков цвет поверхности под фоточувствительным элементом датчика. Параметр состояния принимает значения из диапазона от 0 до 1023, в зависимости от фактического цвета. Данные значение можно присваивать переменным следующих типов: unsigned int, int, float, long.");
    },
    updateLineAnalog: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        }
    }
};

Blockly.Blocks.port_sonic = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateSonic(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Ультразвуковой дальномер ВЭЛ10.485.png", 64, 40))
            .appendField("Ультразвуковой дальномер");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего расстояние до препятствия в см. Параметр состояния принимает значение из диапазона от 3 до 120, в зависимости от расстояния до объекта. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    },
    updateSonic: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.sonic), "PORT");
        }
    }
};

Blockly.Blocks.port_dht = {
    helpUrl: "", 
    validator: function(value) {
        this.getSourceBlock().updateDHT(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Датчик температуры и влажности (DHT-11) ВЭЛ10.139.png", 64, 40))
            .appendField("Датчик температуры и влажности (DHT-11)");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Для температуры числовое значение соответствует градусам Цельсия, а влажность выражается в процентах. Указанные числовые значения параметров можно присваивать переменным следующих типов: int, float, long.")
    },
    updateDHT: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT")
                .appendField(new Blockly.FieldDropdown([
                    ["определить влажность", "readHumidity()"], 
                    ["определить температуру", "readTemperature()"]
                ]), "OPTIONS");
        }
    }
};

Blockly.Blocks.port_opt_encoder = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateOptEnc(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.122 Модуль оптический энкодер.png", 64, 40))
            .appendField("Оптический энкодер для мотора");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"]);
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего наличие под фоточувствительным элементом датчика белого или черного сектора диска, вращающегося на валу мотор-редуктора. Параметр состояния принимает значение 1, если под датчиком находится белый цвет, и 0, если цвет черный.\nС одной стороны диска нанесены 36 секторов (18 белых и 18 черных), а с другой — 24 сектора (12 черных и 12 белых). Таким образом, одно переключение с черного на белый цвет соответствует повороту выходного вала мотор-редуктора на 10 или 15 градусов в зависимости от стороны диска. Рекомендуемое расстояние от датчика до поверхности диска от 3 до 5 мм.");
    },
    updateOptEnc: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT");
        }
    }
};

Blockly.Blocks.port_ir_read = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateIR(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.163 ИК приемник.png", 64, 40))
            .appendField("Приемник ИК-сигнала");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовой код, состоящий из нескольких цифр и соответствующий принятому сигналу от инфракрасного пульта дистанционного управления или иного источника инфракрасного сигнала. Данный код имеет разный набор цифр для разных кнопок на ИК-пульте. Полученный числовой код можно присваивать переменным следующих типов:  int, long.");
    },
    updateIR: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT");
        }
    }
};

Blockly.Blocks.port_potentiometer = {
    helpUrl: "", 
    validator: function(value) {
        this.getSourceBlock().updatePotentiometer(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Потенциометр 10 кОм ВЭЛ10.110.png", 64, 40))
            .appendField("Потенциометр");
        this.appendDummyInput()
            .appendField("Подключен через")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего угол поворота ручки потенциометра. Параметр состояния принимает значение из диапазона от 0 до 1023, в зависимости от угла поворота ручки. Значение 0 соответствует углу поворота 0 градусов, а 1023 соответствует углу 270 градусов. Промежуточные значения углов пересчитываются пропорционально. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.")
    },
    updatePotentiometer: function(value) {
        this.removeInput("P", true);
        if (value == "controller") {
            this.appendDummyInput("P")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile.standart.port), "PORT")
        }
    }
};