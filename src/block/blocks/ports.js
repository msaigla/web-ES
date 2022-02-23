'use strict';

Blockly.Blocks.port_photoresistor = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.");
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
            .appendField(new Blockly.FieldDropdown([
                ["Определить атмосферное давление в Паскалях", ".readPressurePascals"], 
                ["Определить атмосферное давление в мм рт.ст.", ".readPressureMillimetersHg"], 
                ["Определить высоту над уровнем море", ".readAltitude"],
                ["Определить температуру окружающей среды", ".readTemperatureC"]
            ]), "VAL");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Числовое значение параметра можно присваивать переменным следующих типов: int, float, long. Модуль подключается к контроллеру через разъем с интерфейсом i2c.");
    }
};

Blockly.Blocks.port_ir_read = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.163 ИК приемник.png", 64, 40))
            .appendField("Приемник ИК-сигнала");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовой код, состоящий из нескольких цифр и соответствующий принятому сигналу от инфракрасного пульта дистанционного управления или иного источника инфракрасного сигнала. Данный код имеет разный набор цифр для разных кнопок на ИК-пульте. Полученный числовой код можно присваивать переменным следующих типов:  int, long.");
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
            .appendField("Подключена к порту ")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
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
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего состояние концевого выключателя. Параметр состояния принимает значение 1 при нажатии на контактный датчик выключателя и 0 в случае, если он отпущен. Данное значение можно присваивать только переменной типа boolean.");
    }
};

Blockly.Blocks.port_line_digital = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-ЦР Датчик линии ЦР.png", 64, 40))
            .appendField("Цифровой датчик линии");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего наличие белого или черного цвета под фоточувствительным элементом датчика. Параметр состояния принимает значение 1, если под датчиком находится белый цвет и 0, если цвет черный. Соответственно, можно определять черную линию на белом поле или наоборот. Данное значение можно присваивать только переменной типа boolean. Рекомендуемое расстояние от датчика до поверхности, для которой определяется цвет, от 5 до 15 мм.");
    }
};

Blockly.Blocks.port_line_analog = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-АР Датчик линии АР.png", 64, 40))
            .appendField("Аналоговый датчик линии");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего в градациях серых оттенков цвет поверхности под фоточувствительным элементом датчика. Параметр состояния принимает значения из диапазона от 0 до 1023, в зависимости от фактического цвета. Данные значение можно присваивать переменным следующих типов: unsigned int, int, float, long.");
    }
};

Blockly.Blocks.port_sonic = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Ультразвуковой дальномер ВЭЛ10.485.png", 64, 40))
            .appendField("Ультразвуковой дальномер");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].sonic), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего расстояние до препятствия в см. Параметр состояния принимает значение из диапазона от 3 до 120, в зависимости от расстояния до объекта. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.port_charecterDisplay = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateDisplay(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/Символьный ЖК-индикатор 2х16 симоволов ВЭЛ 10.011.png", 64, 40))
            .appendField("Символьный экран 16х2")
        this.appendDummyInput()
            .appendField("Выполнить")
            .appendField(new Blockly.FieldDropdown([
                ["вывод текста", "text"],
                ["настройку подсветки", "light"],
                ["очистку", "clear"],
                ["сдвиг текста на один символ вправо", "moveRight"],
                ["сдвиг текста на один символ влево", "moveLeft"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет вывод текста на символьный жидкокристаллический экран (2 строки по 16 символов), очистку экрана от текста, настройку его подсветки или же сдвиг текста на один символ вправо или влево (режим выбирается в выпадающем меню сверху). Вывод текста возможен на английском и русском языках. При этом поддерживается выбор места на экране, с которого должен начинаться текст (осуществляется с помощью меню выбора строки и номера символа, с которого начинается вывод). Выводимый текст присоединяется справа отдельным блоком. Он может быть в формате переменной с типами: int, unsigned int, string.")
    },
    updateDisplay: function(value) {
        this.removeInput("TEXT", /* no error */ true);
        this.removeInput("LIGHT", /* no error */ true);
        if (value == "text") {
            this.appendValueInput("TEXT", ["String"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Вывести в строке")
                .appendField(new Blockly.FieldDropdown([
                    ["1", "0"],
                    ["2", "1"]
                ]), "ROW")
                .appendField("с символа №")
                .appendField(new Blockly.FieldDropdown([
                    ["1", "0"],
                    ["2", "1"],
                    ["3", "2"],
                    ["4", "3"],
                    ["5", "4"],
                    ["6", "5"],
                    ["7", "6"],
                    ["8", "7"],
                    ["9", "8"],
                    ["10", "9"],
                    ["11", "10"],
                    ["12", "11"],
                    ["13", "12"],
                    ["14", "13"],
                    ["15", "14"],
                    ["16", "15"]
                ]), "COL")
                .appendField(new Blockly.FieldDropdown([
                    ["русский", "ru"],
                    ["английский", "en"],
                ]), "LANG")
                .appendField("текст");
        } else if (value == "light") {
            this.appendValueInput("LIGHT", ["Boolean"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("состояние");
        }
    }
};

Blockly.Blocks.port_led = {
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
            .appendField("Светодиод")
            .appendField(new Blockly.FieldDropdown([
                ["с регулировкой яркости", "with"],
                ["без регулировки яркости", "without"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление модулем светодиодного индикатора. В верхнем выдающем меню выбирается цвет используемого индикатора. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень портов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения светодиода и 1 для его свечения.");
    },
    updateLight: function(value) {
        if (value == "with") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile["default"].portPWM), "PORT")
                .appendField(", установить яркость");
        } else if (value == "without") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Boolean"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField(", установить состояние");
        }
    }
};

Blockly.Blocks.port_ledRGB = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/Светодиод RGB ВЭЛ10.136.png", 64, 40))
            .appendField("RGB светодиод");
        this.appendValueInput("R", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Градация красного");
        this.appendValueInput("G", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Градация зеленого");
        this.appendValueInput("B", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Градация синего");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет задать градации красного, зеленого и синего цветов с целью получения нужного итогового цвета свечения RGB светодиода. Градации задаются с помощью числа из диапазона от 0 до 255. Число 0 соответствует выключенному состоянию, а число 255 означает свечение с максимальной яркостью. Данные числа устанавливаются путем присоединения справа блока в виде числа или переменной следующих типов:  int, unsigned int, unsigned char.")
    }
};

Blockly.Blocks.port_flashlight = {
    validator: function(value) {
        this.getSourceBlock().updateFlashlight(value);
        return value;
    },
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/ВЭЛ10.161 Модуль фонарь_2.png", 64, 40))
            .appendField("Фонарь")
            .appendField(new Blockly.FieldDropdown([
                ["с регулировкой яркости", "with"],
                ["без регулировки яркости", "without"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление модулем «Фонарь», выполняющим функцию источника освещения. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень портов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения фонаря и 1 для его свечения.")
    },
    updateFlashlight: function (value) {
        if (value == "with") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подключен к порту ")
                .appendField(new Blockly.FieldDropdown(profile["default"].portPWM), "PORT")
                .appendField(", установить яркость");
        } else if (value == "without") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Boolean"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подключен к порту ")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField(", установить состояние");
        }
    }
};

Blockly.Blocks.port_potentiometer = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Потенциометр 10 кОм ВЭЛ10.110.png", 64, 40))
            .appendField("Потенциометр");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего угол поворота ручки потенциометра. Параметр состояния принимает значение из диапазона от 0 до 1023, в зависимости от угла поворота ручки. Значение 0 соответствует углу поворота 0 градусов, а 1023 соответствует углу 270 градусов. Промежуточные значения углов пересчитываются пропорционально. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.")
    }
};

Blockly.Blocks.port_buzzer = {
    TIMER: "",
    validator: function(value) {
        this.getSourceBlock().updateTimer(value);
        return value;
    },
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sound/ВЭЛ10.150 Модуль пассивный бузер.png", 64, 40))
            .appendField("Бузер пассивный");
        this.appendDummyInput()
            .appendField("Для вывода сигнала использовать таймер")
            .appendField(new Blockly.FieldDropdown([
                ["1", "Timer1"], 
                ["2", "Timer2"]
            ], this.validator), "TIMER");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет организовать управление модулем с пьезокерамическим звукоизлучателем, носящим название «Бузер пассивный». Для вывода на бузер сигнала с контроллера Вертор Стандарт должен использоваться Таймер 1 или Таймер 2, выбор между которыми выполняется в выпадающем меню. При выборе состояния «выключен» модуль выключается. В случае выбора состояния «Включен» с помощью дополнительных блоков справа (числовых или переменных) устанавливаются значения частоты (задает тональность звучания) и скважности (влияет на громкость звучания). Частота задается в диапазоне от 0 до 15 000 Гц, скважность — от  0 до 100%.")
    },
    updateTimer: function(value) {
        console.log(value);
        this.removeInput('VALUE', /* no error */ true);
        this.removeInput('HZ', /* no error */ true);
        this.removeInput('MS', /* no error */ true);
        this.removeInput('PINS', /* no error */ true);
        if (value == 'Timer1') {
            this.TIMER = value;
            this.removeInput('TONE', /* no error */ true);
            this.appendDummyInput("TONE")
                .appendField("Состояние звукоизлучателя:")
                .appendField(new Blockly.FieldDropdown([
                    ["включен", "tone"], 
                    ["выключен", "noTone"]
                ], this.validator), "OPTIONS");
            this.appendDummyInput("PINS")
                .appendField("С порта")
                .appendField(new Blockly.FieldDropdown(profile["default"].portTimer), "PORT")
                .appendField("подать на бузер сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
            this.appendValueInput('VALUE')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("и скважностью, %");
        } else if (value == "Timer2") {
            this.TIMER = value;
            this.removeInput('TONE', true);
            this.appendDummyInput("TONE")
                .appendField("Состояние звукоизлучателя:")
                .appendField(new Blockly.FieldDropdown([
                    ["включен", "tone"],
                    ["включить на время", "toneTime"],
                    ["выключен", "noTone"]
                ], this.validator), "OPTIONS");
            this.appendDummyInput("PINS")
                .appendField("С порта")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField("подать на бузер сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
        } else if (value == "noTone") {
            console.log("noTone")
            if (this.TIMER === "Timer1") {
                this.appendDummyInput("PINS")
                    .appendField("Подключен к порту")
                    .appendField(new Blockly.FieldDropdown(profile["default"].portTimer), "PORT");
            } else {
                this.appendDummyInput("PINS")
                    .appendField("Подключен к порту")
                    .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
            }
        } else if (value == "tone") {
            if (this.TIMER === "Timer1") {
                this.appendDummyInput("PINS")
                    .appendField("С порта")
                    .appendField(new Blockly.FieldDropdown(profile["default"].portPWM), "PORT")
                    .appendField("подать на бузер сигнал");
                this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("с частотой, Гц");
                this.appendValueInput('VALUE')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("и скважностью, %");
            } else {
                this.appendDummyInput("PINS")
                    .appendField("С порта")
                    .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                    .appendField("подать на бузер сигнал");
                this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("с частотой, Гц");
            }
        } else if (value == "toneTime") {
            this.appendValueInput("MS", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("мс");
            this.appendDummyInput("PINS")
                .appendField("С порта")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField("подать на бузер сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
        }
    }
};

Blockly.Blocks.port_controller_buzzer = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateBuzzer(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sound/Бузер-контроллера.png", 64, 40))
            .appendField("Бузер контроллера")
            .appendField(new Blockly.FieldDropdown([
                ["включить", "tone"],
                ["включить на время", "toneTime"],
                ["выключить", "noTone"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет организовать управление звуковым излучателем, смонтированным на контроллер Вертор Стандарт. Для вывода сигнала используется Таймер 2. При выборе состояния \"Выключен\" бузер выключается. В случае выбора состояния \"Включен\" с помощью дополнительного блока справа (числового или переменного) устанавливается значение частоты (задает тональность звучания), величина которой задается в диапазоне от 0 до 15000 Гц.")
    },
    updateBuzzer: function(value) {
        this.removeInput('HZ', /* no error */ true);
        this.removeInput('MS', /* no error */ true);
        if (value == "tone") {
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подать на бузер сигнал с частотой, Гц");
        } if (value == "toneTime") {
            this.appendValueInput("MS", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("мс");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Подать на бузер сигнал с частотой, Гц");
        }
    }
};

Blockly.Blocks.portMega_buzzer = {
    TIMER: "",
    validator: function(value) {
        this.getSourceBlock().updateTimer(value);
        return value;
    },
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sound/ВЭЛ10.150 Модуль пассивный бузер.png", 64, 40))
            .appendField("Бузер пассивный");
        this.appendDummyInput()
            .appendField("Для вывода сигнала использовать")
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
            ], this.validator), "TIMER");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет организовать управление модулем с пьезокерамическим звукоизлучателем, носящим название «Бузер». Для вывода на бузер сигнала с контроллера Вертор Мега должен использоваться один из пяти доступных таймеров: Таймер 1 - Таймер 5, выбор которого выполняется в выпадающем меню. При выборе состояния «выключен» модуль выключается. В случае выбора состояния «Включен» с помощью дополнительных блоков справа (числовых или переменных) устанавливается значение частоты, задающее тональность звучания. Частота задается в диапазоне от 0 до 15 000 Гц.")
    },
    updateTimer: function(value) {
        this.removeInput('HZ', /* no error */ true);
        this.removeInput('PINS', /* no error */ true);
        if (value == "noTone") {
            this.appendDummyInput("PINS")
                .appendField("Подключен к порту")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        } else if (value == "tone") {
            this.appendDummyInput("PINS")
                .appendField("С порта")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField("подать на бузер сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
        } else {
            this.TIMER = value;
            this.removeInput('TONE', /* no error */ true);
            this.appendDummyInput("TONE")
                .appendField("Состояние звукоизлучателя:")
                .appendField(new Blockly.FieldDropdown([
                    ["включен", "tone"], 
                    ["выключен", "noTone"]
                ], this.validator), "OPTIONS");
            this.appendDummyInput("PINS")
                .appendField("С порта")
                .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
                .appendField("подать на бузер сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
        }
    }
};

Blockly.Blocks.port_dht = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Датчик температуры и влажности (DHT-11) ВЭЛ10.139.png", 64, 40))
            .appendField("Датчик температуры и влажности (DHT-11)");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
            .appendField(new Blockly.FieldDropdown([
                ["определить влажность", "readHumidity()"], 
                ["определить температуру", "readTemperature()"]
            ]), "OPTIONS")
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Для температуры числовое значение соответствует градусам Цельсия, а влажность выражается в процентах. Указанные числовые значения параметров можно присваивать переменным следующих типов: int, float, long.")
    }
};

Blockly.Blocks.port_opt_encoder = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.122 Модуль оптический энкодер.png", 64, 40))
            .appendField("Оптический энкодер для мотора");
        this.appendDummyInput()
            .appendField("Подключен к порту")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"]);
        this.setTooltip("Блок возвращает логическое значение параметра, описывающего наличие под фоточувствительным элементом датчика белого или черного сектора диска, вращающегося на валу мотор-редуктора. Параметр состояния принимает значение 1, если под датчиком находится белый цвет, и 0, если цвет черный.\nС одной стороны диска нанесены 36 секторов (18 белых и 18 черных), а с другой — 24 сектора (12 черных и 12 белых). Таким образом, одно переключение с черного на белый цвет соответствует повороту выходного вала мотор-редуктора на 10 или 15 градусов в зависимости от стороны диска. Рекомендуемое расстояние от датчика до поверхности диска от 3 до 5 мм.");
    }
};

Blockly.Blocks.port_bluetooth_read = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Bluetooth на основе НС-05 ВЭЛ10.005.png", 64, 40))
            .appendField("Bluetooth модуль(HC-05)");
        this.appendDummyInput()
            .appendField("Выполнить получение данных")
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                    ["От Пульта «Эвольвектор»", ".read()"],
                    ["От Общего источника", ".read_full()"]
                ]), "TYPE")
            .appendField("со скоростью")
            .appendField(new Blockly.FieldDropdown(profile["default"].speed), "SPEED");
        this.setOutput(!0, ["String"]);
        this.setTooltip("С помощью данного блока организовывается работа с модулем Bluetooth по получению данных. Важное значение имеет скорость приема данных, которая также выбирается и должна совпадать со скоростью, настроенной на сопряженном устройстве. При получении данных от пульта «Эвольвектор» автоматически удаляются разделители строки. Данные от других источников принимаются без обработки. Возвращенные блоком данные после их получения модулем, могут быть присвоены переменной типа string.");
    }
};

Blockly.Blocks.port_bluetooth_write = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Bluetooth на основе НС-05 ВЭЛ10.005.png", 64, 40))
            .appendField("Bluetooth модуль (НС-05)")
        this.appendDummyInput()
            .appendField("Выполнить передачу данных")
        this.appendValueInput("MSG", ["String"])
            .appendField(new Blockly.FieldDropdown([
                ["с переносом", ".writeln("],
                ["без переноса", ".write("]
            ]), "LN")
            .appendField("строки и скоростью")
            .appendField(new Blockly.FieldDropdown(profile["default"].speed), "SPEED")
            .appendField("отправить сообщение");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока организовывается работа с модулем Bluetooth по получению  данных. Важное значение имеет скорость приема информации, которая также выбирается и должна совпадать со скоростью, настроенной на сопряженном устройстве. При получении данных от пульта «Эвольвектор» автоматически удаляются разделители строки. Данные от других источников принимаются без обработки. Возвращенные блоком данные после их получения модулем, могут быть присвоены переменной типа string.")
    }
};

Blockly.Blocks.port_RTC_get = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Часы реального времени (RTC) ВЭЛ10.232.png", 64, 40))
            .appendField("Получение данных с часов реального времени (RTC)")
        this.setOutput(!0, ["String"]);
        this.setTooltip("С помощью данного блока организовывается работа с модулем Bluetooth по передаче данных. Важное значение имеет скорость передачи данных, которая также выбирается и должна совпадать со скоростью, настроенной на сопряженном устройстве. Отправка данных в виде сообщения может быть выполнена как с разделителем строки, так и без.")
    }
};

Blockly.Blocks.port_RTC_set = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Часы реального времени (RTC) ВЭЛ10.232.png", 64, 40))
            .appendField("Настройка часов реального времени (RTC)");
        this.appendValueInput("SEC", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить секунды");
        this.appendValueInput("MIN", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить минуты");
        this.appendValueInput("HOUR", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить час");
        this.appendValueInput("DAY", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить день месяца");
        this.appendValueInput("MONTH", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить месяц");
        this.appendValueInput("YEAR", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить год");
        this.appendValueInput("WEEK", ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"])
            .appendField("Установить день недели");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет выполнить настройку модуля часов реального времени, а именно установить время и дату. С этой целью пишется отдельная программа с использованием данного блока с установленными в пазы значениями даты и времени. После загрузки в контроллер она производит настройку подключенного к нему модуля.")
    }
};

Blockly.Blocks.port_rotateServo360 = {
    helpUrl: "", init: function () {
        Blockly.FieldAngle.ROUND = 1;
        Blockly.FieldAngle.CLOCKWISE = true;
        Blockly.FieldAngle.OFFSET = 90;
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/motors/Сервопривод. Вид сбоку-01.png", 64, 40))
            .appendField("Сервомотор непрерывного вращения");
        this.appendValueInput("SPEED", ["Int", "Number", "unsigned int"])
            .appendField("Вал привода, подключенного к")
            .appendField(new Blockly.FieldDropdown(profile.default.servo), "SERVO")
            .appendField(", вращать со скоростью");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет управлять сервоприводами непрерывного вращения, для которых задается только скорость и направление постоянного вращения без удерживания конкретного угла. В соотвествующем меню выбирается контакт контроллера, к которому подключен сервопривод. Посредством присоединяемого справа блока с числом или переменной задается скорость вращения. Скорость может быть указана в процентах от максимальной (в диапазоне от 0 до 100%). Ее отрицательное (с минусом) или положительное значение указывает на вращению в одну или другую сторону. Нулевое значение обеспечивает неподвижность вала сервопривода. При использовании переменной для указания скорости, она должна иметь исключительно тип int.")
    }
};

Blockly.Blocks.port_servo = {
    helpUrl: "", 
    validator: function(value) {
        this.getSourceBlock().updateServo(value);
        return value;
    },
    init: function () {
        Blockly.FieldAngle.ROUND = 1;
        Blockly.FieldAngle.CLOCKWISE = true;
        Blockly.FieldAngle.OFFSET = 90;
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [{'src': "assets/img/components/motors/Сервопривод. Вид сбоку-01.png", 'width': 64, 'height': 34, 'alt': 'Белый'}, "white"], 
                [{'src': "assets/img/components/motors/Серво_1-01.png", 'width': 64, 'height': 34, 'alt': 'Красный'}, "red"],
                [{'src': "assets/img/components/motors/Серва с графиком.png", 'width': 64, 'height': 34, 'alt': 'Желтый'}, "yellow"],
            ]), "IMAGE_TYPE")
            .appendField("Сервомотор стандартный")
        this.appendDummyInput()
            .appendField("Выполнить")
            .appendField(new Blockly.FieldDropdown([
                ["Инициализацию", "init"],
                ["Управление", "rotate"],
                ["Прямое управление", "rotateWithoutTimer"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет выполнять настройку и управление стандартными сервоприводами с задаваемым и удерживаемым углом поворота выходного вала. Настройка выполняется при выборе пункта «Инициализация» в соответствующем меню. Далее указывается контакт, к которому подключен привод, угол установки вала привода при его включении, максимальный угол, на который он может поворачиваться, и частота подаваемого на него сигнала. В режиме «Управление» задается номер сигнального контакта контроллера и угол, на который должен повернутся вал. Значение угла задается путем присоединения справа блока с переменной или числом. Допустимые типы переменных: int, unsigned int. Дополнительно поддерживается выбор скорости перемещения вала в заданное угловое положение в процентном выражении от максимально возможной скорости.")
    },
    updateServo: function(value) {
        this.removeInput('T', /* no error */ true);
        this.removeInput('T2', /* no error */ true);
        this.removeInput('T3', /* no error */ true);
        this.removeInput('ANGLE', /* no error */ true);
        this.removeInput('START', true)
        if (value == "init") {
            this.appendDummyInput("T")
                .appendField("Подключен к контакту")
                .appendField(new Blockly.FieldDropdown(profile.default.servo), "SERVO");
            this.appendDummyInput("T2")
                .appendField("Работает на частоте 50 Гц");
            this.appendDummyInput("START")
                .appendField("При включении установить вал в положение")
                .appendField(new Blockly.FieldAngle(90), 'START_ANGLE');
            this.appendDummyInput("T3")
                .appendField("С максимальным  углом")
                .appendField(new Blockly.FieldDropdown([
                    ["180", "180"]
                ]), "MAX_ANGLE")
                .appendField("градусов");
                // .appendField(new Blockly.FieldAngle(90), 'START_ANGLE');
        } else if (value == "rotate") {
            this.appendDummyInput("T")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Вал привода, подключенного к")
                .appendField(new Blockly.FieldDropdown(profile.default.servo), "SERVO");
            this.appendValueInput("ANGLE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Со скоростью")
                .appendField(new Blockly.FieldDropdown([
                    ["10%", "1"],
                    ["20%", "2"],
                    ["30%", "3"], 
                    ["40%", "4"],
                    ["50%", "5"],
                    ["60%", "6"], 
                    ["70%", "7"],
                    ["80%", "8"],
                    ["90%", "9"],
                    ["100%", "10"]
                ]), "SPEED")
                .appendField("повернуть на угол");
        } else if (value == "rotateWithoutTimer") {
            this.appendDummyInput("T")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Вал привода, подключенного к")
                .appendField(new Blockly.FieldDropdown(profile.default.servo), "SERVO");
            this.appendValueInput("ANGLE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("повернуть на угол");
        }
    }
};

Blockly.Blocks.inout_digital_write = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Вывести на цифровой контакт порта")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT")
            this.appendValueInput("STAT")
            .appendField("сигнал")
            .setCheck("Boolean");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка сигнала на цифровом контакте порта. Сигнал представляет собой постоянное напряжение с уровнем 5 вольт (HIGH) или 0 вольт (LOW). Уровень может определяться помещаемым в правое поле блоком: HIGH/LOW, логическим выражением, любым другим, результатом выполнения которого является логическое значение. Номер порта  для вывода сигнала выбирается в выпадающем меню.")
    }
};
Blockly.Blocks.inout_digital_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с цифрового контакта порта")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блоком выполняется считывание сигнала с цифрового контакта порта. Номер порта указывается в выпадающем меню. Блок возвращает логическое значение, которое может быть присвоено логической переменной. Также оно может быть использовано в других логических выражениях и блоках.")
    }
};
Blockly.Blocks.inout_analog_write = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Вывести на цифровой контакт порта")
            .appendField(new Blockly.FieldDropdown(profile["default"].portPWM), "PORT");
        this.appendValueInput("NUM")
            .appendField("аналоговый сигнал")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка аналогового сигнала на цифровом контакте порта с номером, выбранном из выпадающего списка. Сигнал формируется с помощью широтно-импульсной модуляции (ШИМ) и представляет собой псевдоаналоговый сигнал. Уровень напряжения такого сигнала задается числовым значением, помещенным в виде блока в правое поле. Оно может находится в диапазоне от 0 (0 вольт) до 255 (5 вольт).")
    }
};
Blockly.Blocks.inout_analog_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с аналогового контакта порта")
            .appendField(new Blockly.FieldDropdown(profile["default"].port), "PORT");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блоком выполняется считывание сигнала с аналогового контакта порта, номер которого указывается в выпадающем меню. Блок возвращает число, соответствующее уровню напряжения на аналоговом контакте порта. Данное число находится в пределах от 0 (0 вольт) до 1023 (5 вольт). Оно может может быть присвоено любой числовой переменной или использоваться в других арифметических выражениях и блоках.")
    }
};
Blockly.Blocks.inout_tone = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("tone PIN#")
            .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("NUM")
            .appendField("frequency")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Generate audio tones on a pin")
    }
};
Blockly.Blocks.inout_notone = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("no tone PIN#")
            .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Stop generating a tone on a pin")
    }
};
Blockly.Blocks.inout_highlow = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "BOOL");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_pinsDigital = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Цифровой контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "unsigned char", "Char"]);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_pinsAnalog = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Аналоговый контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "unsigned char", "Char"]);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_pinsPWM = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Контакт(пин) с ШИМ")
            .appendField(new Blockly.FieldDropdown(profile["default"].portPWM), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "unsigned char", "Char"]);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_printHID= {
    init: function () {
        this.setColour("#964b00");
        this.appendValueInput("TEXT", ["Int", "Float", "Number", "unsigned int", "long", "double", "String", "unsigned char", "Char"])
            .appendField("С виртуальной клавиатуры контроллера напечатать");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок относится к блокам работы с виртуальной клавиатурой контроллера. Это когда подключенный к компьютеру через USB-кабель контроллер дает команды персональному компьютеру, как будто происходит нажатие клавиш на клавиатуре. Данный блок выполняет вывод указанного текста (присоединенный справа в блоке) на экран (монитор) персонального компьютера. Вывод текста производится в место, куда указывает активный курсор. То есть это может быть любой открытый текстовый или табличный файл.")
    }
};
Blockly.Blocks.inout_writeHID= {
    validator: function(value) {
        this.getSourceBlock().updateKey(value);
        return value;
    },
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("В виртуальной клавиатуре контроллера")
            .appendField(new Blockly.FieldDropdown([
                ["нажать и удерживать", "press"], 
                ["отпустить", "release"],
                ["единичное нажатие", "write"]
            ], this.validator), "FUNCTION");
        this.setInputsInline(true);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок реализует функцию виртуальной клавиатуры, работающей на контроллере Вертор Классик или Вертор Базис. Он через USB-подключение выполняет отправку с контроллера на компьютер такой же команды, что и при нажатии на клавиатурную клавишу, указанную в выпадающем меню.")
    },
    updateKey: function(value) {
        if (value == 'press') {
            this.removeInput('TRUE_KEY', /* no error */ true);
            this.appendDummyInput("TRUE_KEY")
                .appendField(new Blockly.FieldDropdown([
                    ["левый ctrl", "KEY_LEFT_CTRL"], 
                    ["левый SHIFT", "KEY_LEFT_SHIFT"], 
                    ["левый alt", "KEY_LEFT_ALT"],
                    ["правый ctrl", "KEY_RIGHT_CTRL"], 
                    ["правый SHIFT", "KEY_RIGHT_SHIFT"], 
                    ["правый alt", "KEY_RIGHT_ALT"],
                    ["стрелка верх", "KEY_UP_ARROW"], 
                    ["стрелка вниз", "KEY_DOWN_ARROW"], 
                    ["стрелка влево", "KEY_LEFT_ARROW"], 
                    ["стрелка вправо", "KEY_RIGHT_ARROW"], 
                    ["BACKSPACE", "KEY_BACKSPACE"], 
                    ["TAB", "KEY_TAB"], 
                    ["RETURN", "KEY_RETURN"],
                    ["ESC", "KEY_ESC"], 
                    ["insert", "KEY_INSERT"], 
                    ["delete", "KEY_DELETE"], 
                    ["pgup", "KEY_PAGE_UP"], 
                    ["pgdn", "KEY_PAGE_DOWN"], 
                    ["home", "KEY_HOME"], 
                    ["end", "KEY_END"], 
                    ["caps lock", "KEY_CAPS_LOCK"]
                ]), "KEY");
        } else if (value == 'release') {
            this.removeInput('TRUE_KEY', /* no error */ true);
            this.appendDummyInput("TRUE_KEY")
                .appendField(new Blockly.FieldDropdown([
                    ["стрелка верх", "KEY_UP_ARROW"], 
                    ["стрелка вниз", "KEY_DOWN_ARROW"], 
                    ["стрелка влево", "KEY_LEFT_ARROW"], 
                    ["стрелка вправо", "KEY_RIGHT_ARROW"], 
                    ["BACKSPACE", "KEY_BACKSPACE"], 
                    ["TAB", "KEY_TAB"],
                    ["RETURN", "KEY_RETURN"], 
                    ["ESC", "KEY_ESC"], 
                    ["insert", "KEY_INSERT"], 
                    ["delete", "KEY_DELETE"], 
                    ["pgup", "KEY_PAGE_UP"], 
                    ["pgdn", "KEY_PAGE_DOWN"], 
                    ["home", "KEY_HOME"], 
                    ["end", "KEY_END"], 
                    ["caps lock", "KEY_CAPS_LOCK"]
                ]), "KEY");
        } else if (value == 'write') {
            this.removeInput('TRUE_KEY', /* no error */ true);
            this.appendDummyInput("TRUE_KEY")
                .appendField(new Blockly.FieldDropdown([
                    ["левый ctrl", "KEY_LEFT_CTRL"], 
                    ["левый SHIFT", "KEY_LEFT_SHIFT"], 
                    ["левый alt", "KEY_LEFT_ALT"],
                    ["правый ctrl", "KEY_RIGHT_CTRL"], 
                    ["правый SHIFT", "KEY_RIGHT_SHIFT"], 
                    ["правый alt", "KEY_RIGHT_ALT"],
                    ["стрелка верх", "KEY_UP_ARROW"], 
                    ["стрелка вниз", "KEY_DOWN_ARROW"], 
                    ["стрелка влево", "KEY_LEFT_ARROW"], 
                    ["стрелка вправо", "KEY_RIGHT_ARROW"], 
                    ["BACKSPACE", "KEY_BACKSPACE"], 
                    ["TAB", "KEY_TAB"], 
                    ["RETURN", "KEY_RETURN"],
                    ["ESC", "KEY_ESC"], 
                    ["insert", "KEY_INSERT"], 
                    ["delete", "KEY_DELETE"], 
                    ["pgup", "KEY_PAGE_UP"], 
                    ["pgdn", "KEY_PAGE_DOWN"], 
                    ["home", "KEY_HOME"], 
                    ["end", "KEY_END"], 
                    ["caps lock", "KEY_CAPS_LOCK"]
                ]), "KEY");
        }
    }
};

Blockly.Blocks.serial_print = {
    init: function () {
        this.setColour("#964b00");
        this.appendValueInput("CONTENT", ["Boolean", "Int", "unsigned int", "Float", "Char", "unsigned char", "String", "Number"])
            .appendField("Через")
            .appendField(new Blockly.FieldDropdown(profile["default"].serial), "SERIAL")
            .appendField("со скоростью")
            .appendField(new Blockly.FieldDropdown(profile["default"].speed), "SPEED")
            .appendField("передать")
            .appendField(new Blockly.FieldDropdown([["без переноса строки", "WITHOUT"], ["с переносом строки", "WITH"]]), "LN");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет передачу данных через каналы Serial (получил название «Монитор порта»), либо Serial1 (UART) в зависимости от того, какой из них выбран в выпадающем меню. Для передачи данных указывается скорость из списка, необходимость переноса строки и сама передаваемая символьная строка данных.")
    }
};

Blockly.Blocks.serial_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Получить данные с")
            .appendField(new Blockly.FieldDropdown(profile["default"].serial), "SERIAL")
            .appendField(new Blockly.FieldDropdown(profile["default"].speed), "SPEED");
        this.setOutput(!0, ["String", "Char", "unsigned char"]);
        this.setTooltip("Блок возвращает данные, полученные с каналов Serial (получил название «Монитор порта»), либо Serial1 (UART) в зависимости от того, какой из них выбран в выпадающем меню. Скорость канала, с которой будет выполняться прием данных, также выбирается из выпадающего списка. Полученные данные могут присваиваться переменным типа: string, char, unsigned char.");
    }
};

Blockly.Blocks.gearMotor = {
    validator: function(value) {
        this.getSourceBlock().updateGearMotor(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [{'src': "assets/img/components/motors/мотор-косилка.png", 'width': 64, 'height': 40, 'alt': 'мотор-косилка'}, "white"], 
                [{'src': "assets/img/components/motors/мотор-левок-колесо.png", 'width': 64, 'height': 64, 'alt': 'мотор-левок-колесо'}, "red"],
                [{'src': "assets/img/components/motors/мотор-правое колесо.png", 'width': 64, 'height': 64, 'alt': 'мотор-правое колесо'}, "yellow"],
                [{'src': "assets/img/components/motors/мотор-пропеллер.png", 'width': 64, 'height': 64, 'alt': 'мотор-пропеллер'}, "red2"],
                [{'src': "assets/img/components/motors/мотор-щетка.png", 'width': 64, 'height': 64, 'alt': 'мотор-щетка'}, "yellow2"]
            ]), "IMAGE_TYPE")
            .appendField("Мотор-редуктор");
        this.appendDummyInput()
            .appendField("С номинальной частотой вращения")
            .appendField(new Blockly.FieldDropdown([
                ["80 об/мин", "80"],
                ["220 об/мин", "220"]
            ]), "TURN");
        this.appendDummyInput()
            .appendField("Подключенный")
            .appendField(new Blockly.FieldDropdown([
                ["прямо", "true"],
                ["инвертировано", "false"]
            ]), "ROTATION_TYPE")
            .appendField("к разъему")
            .appendField(new Blockly.FieldDropdown(profile["default"].motor), "PORT");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Вращать в прямом направлении", ".motorForward("],
                ["Вращать в обратном направлении", ".motorBackward("],
                ["Остановить", ".motorStop()"]
            ], this.validator), "FUNC");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление мотор-редуктором с заданными параметрами. В блоке выбирается частота вращения выходного вала мотор-редуктора и разъем контроллера, к которому подключен мотор. Поддерживается управление режимами работы мотора: остановкой, направлением (выбирается в соответствующем выпадающем меню) и скоростью вращения мотора. Скорость задается в виде присоединяемого блока с числом или переменной. Они должны содержать значения из диапазона от 0 до 100. Если используется переменная, то допускаются следующие ее типы: unsigned int, int.");
    },
    updateGearMotor: function(value) {
        this.removeInput('SPEED', /* no error */ true);
        if (value == ".motorForward(" || value == ".motorBackward(") {
            this.appendValueInput("SPEED", ["Int", "Number", "unsigned int"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Со скоростью в %");
        }
    }
}  