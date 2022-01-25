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
        this.appendDummyInput()
            .appendField("миллисекунд выполнять");
        this.appendStatementInput('DO', "input_statement")
            .appendField('Действия');
        this.setOutput(!0, null);
        this.setTooltip("");
    }
};

// Blockly.Blocks.vertorjs_print = {
//     helpUrl: "",
//     init: function () {
//         this.setColour("#a5995b");
//         this.appendValueInput("VALUE")
//             .appendField("Вывести в консоль текст");
//         this.setPreviousStatement(!0, null);
//         this.setNextStatement(!0, null);
//         this.setTooltip("");
//     }
// };

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
        this.appendValueInput("NAMEFUNC")
            .appendField("Изменить период выполнения");
        this.appendValueInput("VALUE")
            .appendField("на");
        this.appendDummyInput()
            .appendField("миллисекунд");
        this.setInputsInline(true);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.vertorjs_clearInterval = {
    helpUrl: "",
    init: function () {
        this.setColour("#a5995b");
        this.appendValueInput("NAMEFUNC")
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

// Blockly.Blocks.classic_port_ledRGB = {
//     helpUrl: "", init: function () {
//         this.setColour("#4682B4");
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("assets/img/components/indicators/Светодиод RGB ВЭЛ10.136.png", 64, 40))
//             .appendField("RGB светодиод");
//         this.appendValueInput("R", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Градация красного");
//         this.appendValueInput("G", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Градация зеленого");
//         this.appendValueInput("B", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Градация синего");
//         this.setPreviousStatement(!0, null);
//         this.setNextStatement(!0, null);
//         this.setTooltip("Блок позволяет задать градации красного, зеленого и синего цветов с целью получения нужного итогового цвета свечения RGB светодиода. Градации задаются с помощью числа из диапазона от 0 до 255. Число 0 соответствует выключенному состоянию, а число 255 означает свечение с максимальной яркостью. Данные числа устанавливаются путем присоединения справа блока в виде числа или переменной следующих типов:  int, unsigned int, unsigned char.")
//     }
// };

// Blockly.Blocks.classic_port_flashlight = {
//     validator: function(value) {
//         this.getSourceBlock().updateFlashlight(value);
//         return value;
//     },
//     helpUrl: "", init: function () {
//         this.setColour("#4682B4");
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("assets/img/components/indicators/ВЭЛ10.161 Модуль фонарь_2.png", 64, 40))
//             .appendField("Фонарь")
//             .appendField(new Blockly.FieldDropdown([
//                 ["с регулировкой яркости", "with"],
//                 ["без регулировки яркости", "without"]
//             ], this.validator), "TYPE");
//         this.setPreviousStatement(!0,
//             null);
//         this.setNextStatement(!0, null);
//         this.setTooltip("Блок выполняет управление модулем «Фонарь», выполняющим функцию источника освещения. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень контактов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения фонаря и 1 для его свечения.")
//     },
//     updateFlashlight: function (value) {
//         if (value == "with") {
//             this.removeInput('LIGHT', /* no error */ true);
//             this.appendValueInput("LIGHT", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
//                 .setAlign(Blockly.ALIGN_RIGHT)
//                 .appendField("На контакте D, подключенном к")
//                 .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "PIN")
//                 .appendField(", установить яркость");
//         } else if (value == "without") {
//             this.removeInput('LIGHT', /* no error */ true);
//             this.appendValueInput("LIGHT", ["Boolean"])
//                 .setAlign(Blockly.ALIGN_RIGHT)
//                 .appendField("На контакте D, подключенном к")
//                 .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
//                 .appendField(", установить состояние");
//         }
//     }
// };

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

Blockly.Blocks.vertorjs_button = {
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
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendDummyInput()
            .appendField("Если кнопка")
            .appendField(new Blockly.FieldDropdown([
                ["нажата", "tap"],
                ["отпущена", "let"]
            ]), "TYPE");
        this.appendStatementInput('DO', "input_statement")
            .appendField('');
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('');
    }
};

Blockly.Blocks.vertorjs_potentiometer = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Потенциометр 10 кОм ВЭЛ10.110.png", 64, 40))
            .appendField("Потенциометр");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.default.analogRead), "PIN")
        this.setOutput(!0, null);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего угол поворота ручки потенциометра. Параметр состояния принимает значение из диапазона от 0 до 1023, в зависимости от угла поворота ручки. Значение 0 соответствует углу поворота 0 градусов, а 1023 соответствует углу 270 градусов. Промежуточные значения углов пересчитываются пропорционально. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.")
    }
};

Blockly.Blocks.vertorjs_photorezistor = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, null);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.vertorjs_led = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLight(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [{'src': "assets/img/components/indicators/ВЭЛ10.131 Модуль белый светодиод.png", 'width': 64, 'height': 34, 'alt': 'Белый'}, "white"], 
                [{'src': "assets/img/components/indicators/ВЭЛ10.132 Модуль красный светодиод.png", 'width': 64, 'height': 34, 'alt': 'Красный'}, "red"],
                [{'src': "assets/img/components/indicators/ВЭЛ10.133 Модуль желтый светодиод.png", 'width': 64, 'height': 34, 'alt': 'Желтый'}, "yellow"],
                [{'src': "assets/img/components/indicators/ВЭЛ10.134 Модуль зеленый светодиод.png", 'width': 64, 'height': 34, 'alt': 'Зеленый'}, "green"],
                [{'src': "assets/img/components/indicators/ВЭЛ10.135 Модуль синий светодиод.png", 'width': 64, 'height': 34, 'alt': 'Синий'}, "blue"]
            ]), "COLOR")
            .appendField("Светодиод");
        this.appendDummyInput()
            .appendField("На контакте D, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            .appendField(new Blockly.FieldDropdown([
                ["Включить светодиод", ".turnOff();\n"],
                ["Выключить светодиод", ".turnOn();\n"],
                ["Мигать светодиодом", ".blink("],
                ["Включить светодиод с яркостью", ".brightness("]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление модулем светодиодного индикатора. В верхнем выдающем меню выбирается цвет используемого индикатора. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень контактов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения светодиода и 1 для его свечения.");
    },
    updateLight: function(value) {
        this.removeInput('LIGHT', /* no error */ true);
        this.removeInput('LIGHT_ON', /* no error */ true);
        this.removeInput('LIGHT_OFF', /* no error */ true);
        if (value == ".blink(") {
            this.appendValueInput("LIGHT_ON")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Включить на (секунд)")
            this.appendValueInput("LIGHT_OFF")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Выключить на (секунд)");
        } else if (value == ".brightness(") {
            this.appendValueInput("LIGHT")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Включить светодиод с яркостью");
        }
    }
};

Blockly.Blocks.vertorjs_flashlight = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateLight(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/ВЭЛ10.161 Модуль фонарь_2.png", 64, 40))
            .appendField("Фонарь");
        this.appendDummyInput()
            .appendField("На контакте D, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            .appendField(new Blockly.FieldDropdown([
                ["Включить светодиод", ".turnOff();\n"],
                ["Выключить светодиод", ".turnOn();\n"],
                ["Мигать светодиодом", ".blink("],
                ["Включить светодиод с яркостью", ".brightness("]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление модулем светодиодного индикатора. В верхнем выдающем меню выбирается цвет используемого индикатора. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень контактов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения светодиода и 1 для его свечения.");
    },
    updateLight: function(value) {
        this.removeInput('LIGHT', /* no error */ true);
        this.removeInput('LIGHT_ON', /* no error */ true);
        this.removeInput('LIGHT_OFF', /* no error */ true);
        if (value == ".blink(") {
            this.appendValueInput("LIGHT_ON")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Включить на (секунд)")
            this.appendValueInput("LIGHT_OFF")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Выключить на (секунд)");
        } else if (value == ".brightness(") {
            this.appendValueInput("LIGHT")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Включить светодиод с яркостью");
        }
    }
};