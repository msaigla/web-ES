'use strict';

Blockly.Blocks.classic_L298N = {
    validator: function(value) {
        this.getSourceBlock().updatePhotoresistor(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Драйвер двигателей на основе L298N ВЭЛ10.498.png", 96, 64))
            .appendField("Драйвер двигателей L298N");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока выполняется управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. Справа подключаются блоки с логическими значениями или возвращающие их. При значении 0 (LOW) на линию питания мотора, соответствующую своему управляющему контакту, подается напряжение 0 вольт. А в случае 1 (HIGH) на соответствующую линию питания двигателя подается напряжение питания драйвера.")
    },
    updatePhotoresistor: function(value) {
        this.removeInput("SIGNAL1", /* no error */ true);
        this.removeInput("SIGNAL2", /* no error */ true);
        this.removeInput("SIGNAL3", /* no error */ true);
        this.removeInput("SIGNAL4", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("SIGNAL1")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN1, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN1")
                .appendField(", установить");
            this.appendValueInput("SIGNAL2")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN2, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
                .appendField(", установить");
            this.appendValueInput("SIGNAL3")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN3, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN3")
                .appendField(", установить");
            this.appendValueInput("SIGNAL4")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN4, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
                .appendField(", установить");
        }
    }
};

Blockly.Blocks.classic_L298N_speed = {
    validator: function(value) {
        this.getSourceBlock().updatePhotoresistor(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/Драйвер двигателей на основе L298N ВЭЛ10.498.png", 96, 64))
            .appendField("Драйвер двигателей L298N с регулировкой скорости");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. С помощью контактов IN1 и IN3 регулируется скорость вращения моторов посредством подачи на них сигнала с широтно-импульсной модуляцией. Этот сигнал указывается в виде числа от 0 до 255 в присоединяемом справа блоке с числом или переменной. Через контакты IN2 и IN4 задается направление вращения двигателей. Логическое значение 0 приводит к вращению в одном направлении, а логическая 1 вызывает вращение в противоположную сторону.")
    },
    updatePhotoresistor: function(value) {
        this.removeInput("SIGNAL1", /* no error */ true);
        this.removeInput("SIGNAL2", /* no error */ true);
        this.removeInput("SIGNAL3", /* no error */ true);
        this.removeInput("SIGNAL4", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("SIGNAL1")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN1, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN1")
                .appendField(", установить ШИМ-сигнал");
            this.appendValueInput("SIGNAL2")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN2, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
                .appendField(", установить");
            this.appendValueInput("SIGNAL3")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN3, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN3")
                .appendField(", установить ШИМ-сигнал ");
            this.appendValueInput("SIGNAL4")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN4, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
                .appendField(", установить");
        }
    }
};

Blockly.Blocks.classic_L293D = {
    helpUrl: "", 
    validator: function(value) {
        this.getSourceBlock().updateL293D(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.493 Драйвер двигателей L293D.png", 96, 64))
            .appendField("Драйвер двигателей L293D");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("С помощью данного блока выполняется управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. Справа подключаются блоки с логическими значениями или возвращающие их. При значении 0 (LOW) на линию питания мотора, соответствующую своему управляющему контакту, подается напряжение 0 вольт. А в случае 1 (HIGH) на соответствующую линию питания двигателя подается напряжение питания драйвера.")
    },
    updateL293D: function(value) {
        this.removeInput("SIGNAL1", /* no error */ true);
        this.removeInput("SIGNAL2", /* no error */ true);
        this.removeInput("SIGNAL3", /* no error */ true);
        this.removeInput("SIGNAL4", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("SIGNAL1")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN1, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN1")
                .appendField(", установить");
            this.appendValueInput("SIGNAL2")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN2, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
                .appendField(", установить");
            this.appendValueInput("SIGNAL3")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN3, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN3")
                .appendField(", установить");
            this.appendValueInput("SIGNAL4")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
                .appendField(", установить");
        }
    }
};

Blockly.Blocks.classic_L293D_speed = {
    helpUrl: "",
    validator: function(value) {
        this.getSourceBlock().updateL293D(value);
        return value;
    },
    init: function () {
        this.setColour("#4682B4");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("assets/img/components/drivers/ВЭЛ10.493 Драйвер двигателей L293D.png", 96, 64))
            .appendField("Драйвер двигателей L293D с регулировкой скорости");
        this.appendDummyInput()
            .appendField("Читать с")
            .appendField(new Blockly.FieldDropdown([
                ["Контроллер", "controller"],
                ["RPI интерфейс", "RPI"]
            ], this.validator), "TYPE");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Блок выполняет управление линиями драйвера, к которым подключены электродвигатели постоянного тока. В выпадающих меню выбираются номера контактов контроллера, соединенных с управляющими контактами драйвера IN1, IN2, IN3, IN4. С помощью контактов IN1 и IN3 регулируется скорость вращения моторов посредством подачи на них сигнала с широтно-импульсной модуляцией. Этот сигнал указывается в виде числа от 0 до 255 в присоединяемом справа блоке с числом или переменной. Через контакты IN2 и IN4 задается направление вращения двигателей. Логическое значение 0 приводит к вращению в одном направлении, а логическая 1 вызывает вращение в противоположную сторону.")
    },
    updateL293D: function(value) {
        this.removeInput("SIGNAL1", /* no error */ true);
        this.removeInput("SIGNAL2", /* no error */ true);
        this.removeInput("SIGNAL3", /* no error */ true);
        this.removeInput("SIGNAL4", /* no error */ true);
        if (value == "controller") {
            this.appendValueInput("SIGNAL1")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN1, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN1")
                .appendField(", установить ШИМ-сигнал ");
            this.appendValueInput("SIGNAL2")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN2, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN2")
                .appendField(", установить");
            this.appendValueInput("SIGNAL3")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN3, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.pwm), "IN3")
                .appendField(", установить ШИМ-сигнал ");
            this.appendValueInput("SIGNAL4")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("На контакте IN4, подключенном к")
                .appendField(new Blockly.FieldDropdown(profile.classic.digital), "IN4")
                .appendField(", установить");
        }
    }
};