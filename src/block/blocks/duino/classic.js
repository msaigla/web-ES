'use strict';
Blockly.Blocks.classics = {};
Blockly.Constants.Classic = {};
Blockly.Constants.Classic.HUE = 60;

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
            .appendField("Кнопка подключена к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
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

Blockly.Blocks.classic_two_axis = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.121 Датчик наклона.png", 64, 40))
            .appendField("2-х осевой датчик наклона");
        this.appendValueInput("VAL0", "Boolean")
            .appendField("Состояние наклона СН1, подключенного к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN0")
            .appendField(", присвоить");
        this.appendValueInput("VAL1", "Boolean")
            .appendField("Состояние наклона СН2, подключенного к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN1")
            .appendField(", присвоить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip('Блок возвращает логическое значение параметров, описывающих наличие наклонов модуля в ту или иную сторону. Параметры состояния принимают значение 1 или 0 в зависимости от того, в какую сторону наклонен модуль относительно осей, обозначенных СН1 и СН2. Эти значения можно присваивать только переменным типа boolean. Направления наклонов относительно осей СН1 и СН2 промаркированы на модуле стрелочками с указанием логических значений (0 и 1) в зависимости от направления наклона.');
    }
};

Blockly.Blocks.classic_line_digital = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-ЦШ Датчик линии ЦШ.png", 64, 40))
            .appendField("Цифровой датчик линии");
        this.appendDummyInput()
            .appendField("Контакт D подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip('Блок возвращает логическое значение параметра, описывающего наличие белого или черного цвета под фоточувствительным элементом датчика. Параметр состояния принимает значение 1, если под датчиком находится белый цвет и 0, если цвет черный. Соответственно, можно определять черную линию на белом поле или наоборот. Данное значение можно присваивать только переменной типа boolean. Рекомендуемое расстояние от датчика до поверхности, для которой определяется цвет, от 5 до 15 мм.');
    }
};

Blockly.Blocks.classic_line_analog = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/ВЭЛ10.155-АШ Датчик линии АШ.png", 64, 40))
            .appendField("Аналоговый датчик линии");
        this.appendDummyInput()
            .appendField("Контакт А подключен к")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip('Блок возвращает числовое значение параметра, описывающего в градациях серых оттенков цвет поверхности под фоточувствительным элементом датчика. Параметр состояния принимает значения из диапазона от 0 до 1023, в зависимости от фактического цвета. Данное значение можно присваивать переменным следующих типов: unsigned int, int, float, long.');
    }
};

Blockly.Blocks.classic_L298N = {
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Драйвер двигателей на основе L298N ВЭЛ10.498.png", 96, 64))
            .appendField("Драйвер двигателей L298N");
        this.appendValueInput("SIGNAL1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN1, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN1")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL2")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN2, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL3")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN3, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN3")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL4")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN4, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока выполняется управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. Справа подключаются блоки с логическими значениями или возвращающие их. При значении 0 (LOW) на линию питания мотора, соответствующую своему управляющему контакту, подается напряжение 0 вольт. А в случае 1 (HIGH) на соответствующую линию питания двигателя подается напряжение питания драйвера.")
    }
};

Blockly.Blocks.classic_L298N_speed = {
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Драйвер двигателей на основе L298N ВЭЛ10.498.png", 96, 64))
            .appendField("Драйвер двигателей L298N с регулировкой скорости");
        this.appendValueInput("SIGNAL1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN1, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN1")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField(", установить ШИМ-сигнал");
        this.appendValueInput("SIGNAL2")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN2, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL3")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN3, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN3")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField(", установить ШИМ-сигнал ");
        this.appendValueInput("SIGNAL4")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN4, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. С помощью контактов IN1 и IN3 регулируется скорость вращения моторов посредством подачи на них сигнала с широтно-импульсной модуляцией. Этот сигнал указывается в виде числа от 0 до 255 в присоединяемом справа блоке с числом или переменной. Через контакты IN2 и IN4 задается направление вращения двигателей. Логическое значение 0 приводит к вращению в одном направлении, а логическая 1 вызывает вращение в противоположную сторону.")
    }
};

Blockly.Blocks.classic_L293D = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.493 Драйвер двигателей L293D.png", 96, 64))
            .appendField("Драйвер двигателей L293D");
        this.appendValueInput("SIGNAL1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN1, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN1")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL2")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN2, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL3")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN3, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN3")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL4")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN4, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока выполняется управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. Справа подключаются блоки с логическими значениями или возвращающие их. При значении 0 (LOW) на линию питания мотора, соответствующую своему управляющему контакту, подается напряжение 0 вольт. А в случае 1 (HIGH) на соответствующую линию питания двигателя подается напряжение питания драйвера.")
    }
};

Blockly.Blocks.classic_L293D_speed = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.493 Драйвер двигателей L293D.png", 96, 64))
            .appendField("Драйвер двигателей L293D с регулировкой скорости");
        this.appendValueInput("SIGNAL1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN1, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN1")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField(", установить ШИМ-сигнал ");
        this.appendValueInput("SIGNAL2")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN2, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.appendValueInput("SIGNAL3")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN3, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN3")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField(", установить ШИМ-сигнал ");
        this.appendValueInput("SIGNAL4")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("На контакте IN4, подключенном к")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
            .setCheck(["Boolean", "unsigned char", "Char"])
            .appendField(", установить");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. С помощью контактов IN1 и IN3 регулируется скорость вращения моторов посредством подачи на них сигнала с широтно-импульсной модуляцией. Этот сигнал указывается в виде числа от 0 до 255 в присоединяемом справа блоке с числом или переменной. Через контакты IN2 и IN4 задается направление вращения двигателей. Логическое значение 0 приводит к вращению в одном направлении, а логическая 1 вызывает вращение в противоположную сторону.")
    }
};

Blockly.Blocks.classic_relay = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/sensor/relay.png", 96, 64))
            .appendField("Реле");
        this.appendValueInput("SIGNAL", "Boolean")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN#")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN")
            .setCheck("Boolean")
            .appendField("Signal");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("");
    }
};

Blockly.Blocks.classic_indicator = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateIndicator(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage("assets/img/components/indicators/ВЭЛ10.274-i2c 4-x разрядный 7-сегментный индикатор.png", 64, 40))
            .appendField("Цифровой индикатор (4 разряда)")
            .appendField(new Blockly.FieldDropdown([
                    ["Инициализация", "init"], 
                    ["Вывод", "write"]
                ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок предназначен для работы с цифровым 4-х разрядным 7- сегментным индикатором. Каждый разряд — отдельная цифра. Поэтому данный индикатор позволяет выводить на него числа, состоящие из 1-й, 2-х, 3-х или 4-х цифр. Другими словами, можно вывести любое целое число от -999 до 9999 и любое вещественное число, количество знаков которого не превышает 4-х . Выводимое число присоединяется справа в виде числового блока или численной переменной. Переменная может иметь один из следующих типов: int, unsigned int, long, float.");
    },updateIndicator: function(value) {
        if (value == "init") {
            this.removeInput('VALUE', /* no error */ true);
            this.removeInput('T', /* no error */ true);
            this.removeInput('SIGNAL_A', /* no error */ true);
            this.removeInput('SIGNAL_F', /* no error */ true);
            this.removeInput('SIGNAL_B', /* no error */ true);
            this.removeInput('SIGNAL_G', /* no error */ true);
            this.removeInput('SIGNAL_C', /* no error */ true);
            this.removeInput('SIGNAL_D', /* no error */ true);
            this.removeInput('SIGNAL_E', /* no error */ true);
            this.removeInput('SIGNAL_DP', /* no error */ true);
            this.removeInput('SIGNAL_DIG1', /* no error */ true);
            this.removeInput('SIGNAL_DIG2', /* no error */ true);
            this.removeInput('SIGNAL_DIG3', /* no error */ true);
            this.removeInput('SIGNAL_DIG4', /* no error */ true);
            this.appendDummyInput("T")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Использовать таймер контроллера")
                .appendField(new Blockly.FieldDropdown([["Timer1", "T1"], ["Timer3", "T3"]]), "TIMER");
            this.appendDummyInput("SIGNAL_A")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт A подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "A");
            this.appendDummyInput("SIGNAL_F")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт F подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "F");
            this.appendDummyInput("SIGNAL_B")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт B подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "B");
            this.appendDummyInput("SIGNAL_G")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт G подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "G");
            this.appendDummyInput("SIGNAL_C")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт C подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "C");
            this.appendDummyInput("SIGNAL_D")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт D подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "D");
            this.appendDummyInput("SIGNAL_E")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт E подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "E");
            this.appendDummyInput("SIGNAL_DP")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт DP подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "DP");
            this.appendDummyInput("SIGNAL_DIG1")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт DIG1 подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "DIG1");
            this.appendDummyInput("SIGNAL_DIG2")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт DIG2 подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "DIG2");
            this.appendDummyInput("SIGNAL_DIG3")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт DIG3 подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "DIG3");
            this.appendDummyInput("SIGNAL_DIG4")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Контакт DIG4 подключен к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "DIG4");
        } else if (value == "write") {
            this.removeInput('VALUE', /* no error */ true);
            this.removeInput('T', /* no error */ true);
            this.removeInput('SIGNAL_A', /* no error */ true);
            this.removeInput('SIGNAL_F', /* no error */ true);
            this.removeInput('SIGNAL_B', /* no error */ true);
            this.removeInput('SIGNAL_G', /* no error */ true);
            this.removeInput('SIGNAL_C', /* no error */ true);
            this.removeInput('SIGNAL_D', /* no error */ true);
            this.removeInput('SIGNAL_E', /* no error */ true);
            this.removeInput('SIGNAL_DP', /* no error */ true);
            this.removeInput('SIGNAL_DIG1', /* no error */ true);
            this.removeInput('SIGNAL_DIG2', /* no error */ true);
            this.removeInput('SIGNAL_DIG3', /* no error */ true);
            this.removeInput('SIGNAL_DIG4', /* no error */ true);
            this.appendValueInput("VALUE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown([
                    ["Вывод целого числа", "indicator_set"], 
                    ["Вывод дробного числа", "indicator_set_float"]
                ], this.validator), "NUM");
        } else if (value == "indicator_set_float") {
            this.removeInput('VALUE', /* no error */ true);
            this.appendValueInput("VALUE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown([
                    ["Вывод дробного", "indicator_set_float"],
                    ["Вывод целого", "indicator_set"]
                ], this.validator), "NUM")
                .appendField("числа c")
                .appendField(new Blockly.FieldDropdown([
                    ["1", "1"], 
                    ["2", "2"],
                    ["3", "3"]
                ], this.validator), "F")
                .appendField("знаками после запятой");
        } else if (value == "indicator_set") {
            this.removeInput('VALUE', /* no error */ true);
            this.appendValueInput("VALUE", ["Int", "Float", "Number", "unsigned int", "long", "double"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown([
                    ["Вывод целого", "indicator_set"],
                    ["Вывод дробного", "indicator_set_float"]
                ], this.validator), "NUM")
                .appendField("числа");
        }
    }
};

Blockly.Blocks.classic_led = {
    helpUrl: "", init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/sensor/RGB Светодиод ПЭМ 10.136.png", 64, 40))
            .appendField("Светодиод");
        this.appendValueInput("LIGHT", "Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("PIN#")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"])
            .appendField("Яркость");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};

Blockly.Blocks.classic_rotateServo360 = {
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
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "SERVO")
            .appendField(", вращать со скоростью");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок позволяет управлять сервоприводами непрерывного вращения, для которых задается только скорость и направление постоянного вращения без удерживания конкретного угла. В соотвествующем меню выбирается номер контакта контроллера, к которому подключен сервопривод. Посредством присоединяемого справа блока с числом или переменной задается скорость вращения. Скорость может быть указана в процентах от максимальной (в диапазоне от 0 до 100%). Ее отрицательное (с минусом) или положительное значение указывает на вращению в одну или другую сторону. Нулевое значение обеспечивает неподвижность вала сервопривода. При использовании переменной для указания скорости, она должна иметь исключительно тип int.")
    }
};

Blockly.Blocks.classic_servo = {
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
            .appendField("Сервомотор стандартный");
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
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "SERVO");
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
                .appendField("Подключен к контакту")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "SERVO");
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
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "SERVO");
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
            .appendField("Вывести на цифровой контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN")
            this.appendValueInput("STAT")
            .appendField("сигнал")
            .setCheck("Boolean");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка сигнала на цифровом контакте. Сигнал представляет собой постоянное напряжение с уровнем 5 вольт (HIGH) или 0 вольт (LOW). Уровень может определяться помещаемым в правое поле блоком: HIGH/LOW, логическим выражением, любым другим, результатом выполнения которого является логическое значение.\nНомер контакта для вывода сигнала выбирается в выпадающем меню.")
    }
};
Blockly.Blocks.inout_digital_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с цифрового контакта (пина)")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Блоком выполняется считывание сигнала с цифрового контакта. Номер контакта указывается в выпадающем меню. Блок возвращает логическое значение, которое может быть присвоено логической переменной. Также оно может быть использовано в других логических выражениях и блоках.")
    }
};
Blockly.Blocks.inout_analog_write = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Вывести на контакт (пин) ~")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "PIN");
        this.appendValueInput("NUM")
            .appendField("аналоговый сигнал")
            .setCheck(["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блоком выполняется установка аналогового сигнала на контакте с номером, выбранном из выпадающего списка. Сигнал формируется с помощью широтно-импульсной модуляции (ШИМ) и представляет собой псевдоаналоговый сигнал. Уровень напряжения такого сигнала задается числовым значением, помещенным в виде блока в правое поле. Оно может находится в диапазоне от 0 (0 вольт) до 255 (5 вольт).")
    }
};
Blockly.Blocks.inout_analog_read = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Сигнал с аналогового контакта (пина)")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "long", "double"]);
        this.setTooltip("Блоком выполняется считывание сигнала с аналогового контакта, номер которого указывается в выпадающем меню. Блок возвращает число, соответствующее уровню напряжения на контакте. Данное число находится в пределах от 0 (0 вольт) до 1023 (5 вольт). Оно может может быть присвоено любой числовой переменной или использоваться в других арифметических выражениях и блоках.")
    }
};
Blockly.Blocks.inout_tone = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("tone PIN#")
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
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
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
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
            .appendField(new Blockly.FieldDropdown(profile.classic.digital), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "unsigned char", "Char"]);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_pinsAnalog = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Аналоговый контакт (пин)")
            .appendField(new Blockly.FieldDropdown(profile.classic.analog), "PIN");
        this.setOutput(!0, ["Int", "Float", "Number", "unsigned int", "unsigned char", "Char"]);
        this.setTooltip("Блок для задания сигнала на цифровом контакте (пине) контроллера в виде постоянного напряжения с высоким уровнем 5 вольт (HIGH) или низким 0 вольт (LOW).")
    }
};
Blockly.Blocks.inout_pinsPWM = {
    init: function () {
        this.setColour("#964b00");
        this.appendDummyInput()
            .appendField("Контакт(пин) с ШИМ")
            .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "PIN");
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
            .appendField(new Blockly.FieldDropdown(profile.classic.serial), "SERIAL")
            .appendField("со скоростью")
            .appendField(new Blockly.FieldDropdown(profile.classic.speed), "SPEED")
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
            .appendField(new Blockly.FieldDropdown(profile.classic.serial), "SERIAL")
            .appendField(new Blockly.FieldDropdown(profile.classic.speed), "SPEED");
        this.setOutput(!0, ["String", "Char", "unsigned char"]);
        this.setTooltip("Блок возвращает данные, полученные с каналов Serial (получил название «Монитор порта»), либо Serial1 (UART) в зависимости от того, какой из них выбран в выпадающем меню. Скорость канала, с которой будет выполняться прием данных, также выбирается из выпадающего списка. Полученные данные могут присваиваться переменным типа: string, char, unsigned char.");
    }
};

Blockly.Blocks.classic_sonic = {
    helpUrl: "",
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/sensors/Дальномер HC-SR04.png", 64, 40))
            .appendField("Ультразвуковой дальномер HC-SR04");
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