let KEYWORD1 = "#a25f2a",
    KEYWORD2 = "#ffa500";

let words = {
    "String": "#30d5c8",
    "boolean": "#30d5c8",
    "bool": "#30d5c8",
    "char": "#30d5c8",
    "uint8_t": "#30d5c8",
    "int8_t": "#30d5c8",
    "byte": "#30d5c8",
    "uint16_t": "#30d5c8",
    "int16_t": "#30d5c8",
    "short": "#30d5c8",
    "unsigned int": "#30d5c8",
    "uint32_t": "#30d5c8",
    "int32_t": "#30d5c8",
    "unsigned long": "#30d5c8",
    "long": "#30d5c8",
    "float": "#30d5c8",
    "double": "#30d5c8",
    "int": "#30d5c8",
    "void": "#30d5c8",
    "HIGH": "#30d5c8",
    "LOW": "#30d5c8",
    "OUTPUT": "#30d5c8",
    "INPUT": "#30d5c8",
    "false": "#30d5c8",
    "true": "#30d5c8",
    "#include": "#bebd7f",
    "setup": "#bebd7f",
    "while": "#bebd7f",
    "for": "#bebd7f",
    "if": "#bebd7f",
    "else": "#bebd7f",
    "return": "#bebd7f",
    "loop": "#bebd7f",
    "Timer3": KEYWORD2,
    "TimerThree": KEYWORD1,
    "initialize": KEYWORD2,
    "start": KEYWORD2,
    "stop":	KEYWORD2,
    "restart": KEYWORD2,
    "resume": KEYWORD2,
    "pwm": KEYWORD2,
    "disablePwm": KEYWORD2,
    "attachInterrupt": KEYWORD2,
    "detachInterrupt": KEYWORD2,
    "setPeriod": KEYWORD2,
    "setPwmDuty": KEYWORD2,
    "isrCallback": KEYWORD2,
    "Timer1":	KEYWORD2,
    "TimerOne": KEYWORD1,
    "pinMode": KEYWORD2,
    "digitalWrite": KEYWORD2,
    "digitalRead": KEYWORD2,
    "begin": KEYWORD2,
    "Serial": KEYWORD1,
    "analogRead": KEYWORD2,
    "analogWrite": KEYWORD2,
    "println": KEYWORD2,
    "print": KEYWORD2,
    "delay": KEYWORD2
}

function color_codes(code) {
    code = code.replaceAll(" ", "&#160;");
    code = code.replaceAll("<", "&lt;");
    code = code.replaceAll(">", "&gt;");
    for (var key in words) {
        code = code.replaceAll(key, "<font color=\"" + words[key] + "\">" + key + "</font>");
    }
    code = code.replaceAll("\n", "<br>");
    while (!code.indexOf("<br>")) {
        code = code.replace("<br>", "");
    }
    return code;
}

function syncScroll(el1, el2) {
    let $el1 = $(el1);
    let $el2 = $(el2);
    let forcedScroll = false;
    $el1.scroll(function() { performScroll($el1, $el2); });
    $el2.scroll(function() { performScroll($el2, $el1); });
    function performScroll($scrolled, $toScroll) {
        if (forcedScroll) return (forcedScroll = false);
        setScrollTopFromPercent($toScroll, $scrolled.scrollTop() / ($scrolled[0].scrollHeight - $scrolled.outerHeight()));
    }
    function setScrollTopFromPercent($el, percent) {
        forcedScroll = true;
        $el.scrollTop(percent * ($el[0].scrollHeight - $el.outerHeight()));
    }
}

function updateFunction(event) {
    let code = null;
    let ta = null;
    let evt = document.createEvent('Event');
    code = Blockly.Arduino.workspaceToCode(workspace);
    var l_lenght = 0;
    let lines = code.split("\n");
    $('.linesNum').empty();
	for (let i = 0; i < lines.length; i++) {
        $( ".linesNum" ).append(i + 1 + "<br>");
        if (l_lenght < lines[i].length) {
            l_lenght = lines[i].length;
        }
    }
    l_lenght = l_lenght * 8;
    code = color_codes(code);
    $('.code-arduino-IDE').html(code);
    document.getElementById('code-duino').style.width = l_lenght + 'px';
    autosize($('.code-arduino-IDE'));
    ta = document.getElementById('code-duino');
    evt.initEvent('autosize:update', true, false);
    // $('.linesNum').style.height = "100px";
    ta.dispatchEvent(evt);
}

syncScroll($('.scrollNumV'), $('.scrollV'));