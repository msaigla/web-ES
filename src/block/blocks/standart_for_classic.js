'use strict';
Blockly.Blocks.classic_port_photoresistor = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.113 Модуль фоторезистор.png", 64, 40))
            .appendField("Фоторезистор");
        this.appendDummyInput()
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего освещенность датчика на модуле «Фоторезистор». Данный параметр может изменяться в диапазоне от 0 (минимальная освещенность) до 1023 (максимальная освещенность). Числовое значение параметра можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.classic_port_barometer = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Барометр ВЭЛ10.282.png", 64, 40))
            .appendField("Барометр");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["Определить атмосферное давление в паскалях", ".readPressurePascals"], 
                ["Определить атмосферное давление в мм. рт. ст.", ".readPressureMillimetersHg"], 
                ["Определить высоту над уровнем моря в метрах", ".readAltitude"],
                ["Определить температуру воздуха в градусах Цельсия", ".readTemperatureC"]
            ]), "VAL");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Числовое значение параметра можно присваивать переменным следующих типов: int, float, long. Модуль подключается к контроллеру через разъем с интерфейсом i2c.');
    }
};

Blockly.Blocks.classic_port_ir_read = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.163 ИК приемник.png", 64, 40))
            .appendField("Приемник ИК-сигнала");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовой код, состоящий из нескольких цифр и соответствующий принятому сигналу от инфракрасного пульта дистанционного управления или иного источника инфракрасного сигнала. Данный код имеет разный набор цифр для разных кнопок на ИК-пульте. Полученный числовой код можно присваивать переменным следующих типов:  int, long.');
    }
};

Blockly.Blocks.classic_port_button = {
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
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего состояние тактовой кнопки. Параметр состояния принимает значение 1 при нажатии на кнопку и 0 в случае, если кнопка отпущена. Данное значение можно присваивать только переменной типа boolean.');
    }
};

Blockly.Blocks.classic_port_limit_switch = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.125 Модуль концевой выключатель.png", 64, 40))
            .appendField("Концевой выключатель");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего состояние концевого выключателя. Параметр состояния принимает значение 1 при нажатии на контактный датчик выключателя и 0 в случае, если он отпущен. Данное значение можно присваивать только переменной типа boolean.');
    }
};

Blockly.Blocks.classic_port_line_digital = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-ЦР Датчик линии ЦР.png", 64, 40))
            .appendField("Цифровой датчик линии");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего наличие белого или черного цвета под фоточувствительным элементом датчика. Параметр состояния принимает значение 1, если под датчиком находится белый цвет и 0, если цвет черный. Соответственно, можно определять черную линию на белом поле или наоборот. Данное значение можно присваивать только переменной типа boolean. Рекомендуемое расстояние от датчика до поверхности, для которой определяется цвет, от 5 до 15 мм.');
    }
};

Blockly.Blocks.classic_port_line_analog = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-АР Датчик линии АР.png", 64, 40))
            .appendField("Аналоговый датчик линии");
        this.appendDummyInput()
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего в градациях серых оттенков цвет поверхности под фоточувствительным элементом датчика. Параметр состояния принимает значения из диапазона от 0 до 1023, в зависимости от фактического цвета. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.classic_port_sonic = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Ультразвуковой дальномер ВЭЛ10.485.png", 64, 40))
            .appendField("Ультразвуковой дальномер");
        this.appendDummyInput()
            .appendField("Контакт TRIG подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN0");
        this.appendDummyInput()
            .appendField("Контакт ECHO подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего расстояние до препятствия в см. Параметр состояния принимает значение из диапазона от 3 до 120, в зависимости от расстояния до объекта. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.classic_port_charecterDisplay = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateDisplay(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/Символьный ЖК-индикатор 2х16 симоволов ВЭЛ 10.011.png", 64, 40))
            .appendField("Символьный экран 16х2");
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

Blockly.Blocks.classic_port_led = {
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
        this.setTooltip("Блок выполняет управление модулем светодиодного индикатора. В верхнем выдающем меню выбирается цвет используемого индикатора. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень контактов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения светодиода и 1 для его свечения.");
    },
    updateLight: function(value) {
        if (value == "with") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте D, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "PIN")
                .appendField(", установить яркость");
        } else if (value == "without") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Boolean"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте D, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
                .appendField(", установить состояние");
        }
    }
};

Blockly.Blocks.classic_port_ledRGB = {
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

Blockly.Blocks.classic_port_flashlight = {
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
        this.setTooltip("Блок выполняет управление модулем «Фонарь», выполняющим функцию источника освещения. В выпадающем меню режимов выбирается режим с управляемой яркостью или режим без ее регулировки. От этого зависит перечень контактов контроллера, к которым данный модуль может подключаться. В режиме регулировки справа присоединяется блок с числом от 0 до 255, задающим яркость свечения. В нерегулируемом варианте присоединяется блок с логическим значением 0 для выключения фонаря и 1 для его свечения.")
    },
    updateFlashlight: function (value) {
        if (value == "with") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Int", "Float", "Number", "unsigned int", "long", "double", "unsigned char", "Char"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте D, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "PIN")
                .appendField(", установить яркость");
        } else if (value == "without") {
            this.removeInput('LIGHT', /* no error */ true);
            this.appendValueInput("LIGHT", ["Boolean"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте D, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
                .appendField(", установить состояние");
        }
    }
};

Blockly.Blocks.classic_port_potentiometer = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Потенциометр 10 кОм ВЭЛ10.110.png", 64, 40))
            .appendField("Потенциометр");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN")
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, описывающего угол поворота ручки потенциометра. Параметр состояния принимает значение из диапазона от 0 до 1023, в зависимости от угла поворота ручки. Значение 0 соответствует углу поворота 0 градусов, а 1023 соответствует углу 270 градусов. Промежуточные значения углов пересчитываются пропорционально. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.")
    }
};

Blockly.Blocks.classic_port_buzzer = {
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
        this.setTooltip("Блок позволяет организовать управление модулем с пьезокерамическим звукоизлучателем, носящим название «Бузер». Для вывода на бузер сигнала с контроллеров Вертор Классик и Базис должен использоваться Таймер 1 или Таймер 2, выбор между которыми выполняется в выпадающем меню. При выборе состояния «выключен» модуль выключается. В случае выбора состояния «Включен» с помощью дополнительных блоков справа (числовых или переменных) устанавливаются значения частоты (задает тональность звучания) и скважности (влияет на громкость звучания). Частота задается в диапазоне от 0 до 15 000 Гц, скважность — от  0 до 100%")
    },
    updateTimer: function(value) {
        this.removeInput('VALUE', /* no error */ true);
        this.removeInput('HZ', /* no error */ true);
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
                .appendField("На контакт D, подключенный к")
                .appendField(new Blockly.FieldDropdown([
                    ["9", "9"],
                    ["10", "10"]
                ]), "PIN")
                .appendField(", подать сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("Частота в Гц");
            this.appendValueInput('VALUE')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("Скважность");
        } else if (value == "Timer2") {
            this.TIMER = value;
            this.removeInput('TONE', true);
            this.appendDummyInput("TONE")
                .appendField("Состояние звукоизлучателя:")
                .appendField(new Blockly.FieldDropdown([
                    ["включен", "tone"], 
                    ["выключен", "noTone"]
                ], this.validator), "OPTIONS");
            this.appendDummyInput("PINS")
                .appendField("На контакт D, подключенный к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
                .appendField(", подать сигнал");
            this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                .appendField("с частотой, Гц");
        } else if (value == "noTone") {
            if (this.TIMER === "Timer1") {
                this.appendDummyInput("PINS")
                    .appendField("Контакт D подключен к")
                    .appendField(new Blockly.FieldDropdown([
                        ["9", "9"],
                        ["10", "10"]
                    ]), "PIN");
            } else {
                this.appendDummyInput("PINS")
                    .appendField("Контакт D подключен к")
                    .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
            }
        } else if (value == "tone") {
            if (this.TIMER === "Timer1") {
                this.appendDummyInput("PINS")
                    .appendField("На контакт D, подключенный к")
                    .appendField(new Blockly.FieldDropdown([
                        ["9", "9"],
                        ["10", "10"]
                    ]), "PIN")
                    .appendField(", подать сигнал");
                this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("Частота в Гц");
                this.appendValueInput('VALUE')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("Скважность");
            } else {
                this.appendDummyInput("PINS")
                    .appendField("На контакт D, подключенный к")
                    .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
                    .appendField(", подать сигнал");
                this.appendValueInput("HZ", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
                    .appendField("Частота в Гц");
            }
        }
    }
};

Blockly.Blocks.classic_port_dht = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Датчик температуры и влажности (DHT-11) ВЭЛ10.139.png", 64, 40))
            .appendField("Датчик температуры и влажности (DHT-11)");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
            .appendField(new Blockly.FieldDropdown([
                ["Влажность в %", "readHumidity()"], 
                ["Температура в градусах Цельсия", "readTemperature()"]
            ]), "OPTIONS")
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блок возвращает числовое значение параметра, выбранного из выпадающего списка. Для температуры числовое значение соответствует градусам Цельсия, а влажность выражается в процентах. Указанные числовые значения параметров можно присваивать переменным следующих типов: int, float, long.")
    }
};

Blockly.Blocks.classic_port_opt_encoder = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.122 Модуль оптический энкодер.png", 64, 40))
            .appendField("Оптический энкодер для мотора");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        // this.appendValueInput("VAL1", ["Boolean", "Int", "Float", "Number", "unsigned int", "long", "double"])
        //     .appendField("A")
        //     .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1")
        //     .appendField("Положить значение в");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double", "Boolean"]);
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего наличие под фоточувствительным элементом датчика белого или черного сектора диска, вращающегося на валу мотор-редуктора. Параметр состояния принимает значение 1, если под датчиком находится белый цвет, и 0, если цвет черный.\nС одной стороны диска нанесены 36 секторов (18 белых и 18 черных), а с другой — 24 сектора (12 черных и 12 белых). Таким образом, одно переключение с черного на белый цвет соответствует повороту выходного вала мотор-редуктора на 10 или 15 градусов в зависимости от стороны диска. Рекомендуемое расстояние от датчика до поверхности диска от 3 до 5 мм.');
    }
};

Blockly.Blocks.classic_port_bluetooth_read = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Bluetooth на основе НС-05 ВЭЛ10.005.png", 64, 40))
            .appendField("Bluetooth модуль(HC-05)");
        this.appendDummyInput()
            .appendField("Выполнить получение данных");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                    ["От Пульта «Эвольвектор»", ".read()"],
                    ["От Общего источника", ".read_full()"]
                ]), "TYPE")
            .appendField("со скоростью")
            .appendField(new Blockly.FieldDropdown(profile.classic.speed), "SPEED");
        this.setOutput(!0, ["String"]);
        this.setTooltip("С помощью данного блока организовывается работа с модулем Bluetooth по получению данных. Важное значение имеет скорость приема данных, которая также выбирается и должна совпадать со скоростью, настроенной на сопряженном устройстве. При получении данных от пульта «Эвольвектор» автоматически удаляются разделители строки. Данные от других источников принимаются без обработки. Возвращенные блоком данные после их получения модулем, могут быть присвоены переменной типа string.");
    }
};

Blockly.Blocks.classic_port_bluetooth_write = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Bluetooth на основе НС-05 ВЭЛ10.005.png", 64, 40))
            .appendField("Bluetooth модуль (НС-05)")
        this.appendDummyInput()
            .appendField("Выполнить передачу данных");
        this.appendValueInput("MSG", ["String"])
            .appendField(new Blockly.FieldDropdown([
                ["с переносом", ".writeln("],
                ["без переноса", ".write("]
            ]), "LN")
            .appendField("строки и скоростью")
            .appendField(new Blockly.FieldDropdown(profile.classic.speed), "SPEED")
            .appendField("отправить сообщение");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока организовывается работа с модулем Bluetooth по передаче данных. Важное значение имеет скорость передачи данных, которая также выбирается и должна совпадать со скоростью, настроенной на сопряженном устройстве. Отправка данных в виде сообщения может быть выполнена как с разделителем строки, так и без.")
    }
};

Blockly.Blocks.classic_port_RTC_get = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/other/Часы реального времени (RTC) ВЭЛ10.232.png", 64, 40))
            .appendField("Получение данных с часов реального времени (RTC)")
        this.setOutput(!0, ["String"]);
        this.setTooltip("Блок позволяет работать с модулем часов реального времени, а именно получить данные о текущих дате и времени. В этом режиме блок возвращает текстовую строку с датой и временем на момент запроса, которая может быть записана в переменную типа string.")
    }
};

Blockly.Blocks.classic_port_RTC_set = {
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