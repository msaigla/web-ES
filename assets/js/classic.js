var selected = 'blocks';

profile["default"] = profile.classic;
generator["default"] = generator.classic;

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var codeArduino = document.getElementById('codeArduino');
var selectPorts = document.getElementById('serialPorts');

var workspace = Blockly.inject(blocklyDiv,
    {
        media: 'src/block/media/',
        toolbox: document.getElementById('toolbox'),
        grid:
            {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true
            },
        zoom:
            {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
                pinch: false
            },
        trashcan: true
    });

var onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    console.log(x + " " + y);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = '0';
    blocklyDiv.style.top = '0';
    blocklyDiv.style.width = blocklyArea.offsetWidth - 15 + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight - y + 48 + 'px';
    
    Blockly.svgResize(workspace);
};

window.addEventListener('resize', onresize, false);
onresize();

const createFlyout = function(workspace) {
    let xmlList = [];
    // Add your button and give it a callback name.
    const button = document.createElement('button');
    button.setAttribute('text', 'Создать переменную');
    button.setAttribute('callbackKey', 'callbackName');

    xmlList.push(button);

    // This gets all the variables that the user creates and adds them to the
    // flyout.
    const blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);
    xmlList = xmlList.concat(blockList);
    return xmlList;
};

workspace.registerToolboxCategoryCallback('CREATE_TYPED_VARIABLE', createFlyout);

const typedVarModal = new TypedVariableModal(
    workspace, 
    'callbackName', 
    [
        ["boolean (логический, содержит значения 0 (false, ложь), 1 (true, истина));", "Boolean"],
        ["int (целочисленный, знаковый, содержит значения от -32768 до 32767);", "Int"],
        ["unsigned int (целочисленный, беззнаковый, содержит значения от 0 до 65535);", "unsigned int"],
        ["float (вещественный (с плавающей запятой), знаковый, содержит значения от -3.4028235E+38 до 3.4028235E+38);", "Float"],
        ["long (целочисленный, знаковый, содержит значения от -2147483,648 до 2147483647 );", "long"],
        ["char (целочисленный, знаковый, символьный, содержит значения от -128 до 127);", "Char"], 
        ["unsigned char (целочисленный, беззнаковый, символьный, содержит значения от 0 до 255);", "unsigned char"],
        ["string (строковый тип данных (массив символов))", "String"]
    ]
);

typedVarModal.init();

Blockly.svgResize(workspace);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
function tabClick(clickedName) {

}

function showCodeArduino() {
    // Generate JavaScript code and display it.
    Blockly.Arduino.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Arduino.workspaceToCode(workspace);
    blocklyArea.style.display = "none";
    blocklyDiv.style.display = "none";
    codeArduino.style.display = "block";
    codeArduino.innerHTML = "<textarea class=\"lined\" readonly>" + code + "</textarea>";
    $(".lined").linedtextarea();
}

function showBlockly() {
    blocklyArea.style.display = "block";
    blocklyArea.style.display = "block";
    blocklyDiv.style.display = "block";
    codeArduino.style.display = "none";
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);
}

function renderContent() {
    var content = document.getElementById('blocklyDiv');
    if (content.id == 'blocklyDiv') {
      Blockly.mainWorkspace.render();
    }
}

function discard() {
    if (window.confirm('Удалить все блоки?')) {
        Blockly.mainWorkspace.clear();
        renderContent();
    }
}

function saveCode() {
    var fileName = window.prompt('Как бы вы хотели назвать свой файл?', 'Evolvector')

    if(fileName){
        var blob = new Blob([Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
        saveAs(blob, fileName + '.ino');
    }
}

function save() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var data = Blockly.Xml.domToText(xml);
    var fileName = window.prompt('Как бы вы хотели назвать свой файл?', 'Evolvector');
    if(fileName){
        var blob = new Blob([data], {type: 'text/xml'});
        saveAs(blob, fileName + ".xml");
    } 
}

function restore_blocks_classic() {
    if ('localStorage' in window && window.localStorage.classic) {
        var xml = Blockly.Xml.textToDom(window.localStorage.classic);
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
}

function bindEvent(element, name, func) {
    if (element.addEventListener) {  // W3C
        element.addEventListener(name, func, false);
    } else if (element.attachEvent) {  // IE
        element.attachEvent('on' + name, func);
    }
}

function backup_blocks_classic() {
    if ('localStorage' in window) {
        var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        window.localStorage.setItem('classic', Blockly.Xml.domToText(xml));
    }
}

function auto_save_and_restore_blocks_classic() {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(restore_blocks_classic, 0);
    // Hook a save function onto unload.
    bindEvent(window, 'unload', backup_blocks_classic);
    tabClick(selected);
  
    // Init load event.
    var loadInput = document.getElementById('load');
    loadInput.addEventListener('change', load, false);
    document.getElementById('fakeload').onclick = function() {
      loadInput.click();
    };
}

function load(event) {
    var files = event.target.files;
    // Only allow uploading one file.
    if (files.length != 1) {
      return;
    }
    // FileReader
    var reader = new FileReader();
    reader.onloadend = function(event) {
      var target = event.target;
      // 2 == FileReader.DONE
      if (target.readyState == 2) {
        try {
          var xml = Blockly.Xml.textToDom(target.result);
        } catch (e) {
          alert('Ошибка при анализе XML:\n' + e);
          return;
        }
        var count = Blockly.mainWorkspace.getAllBlocks().length;
        if (count && confirm('Заменить существующие блоки?\n"Отмена" сольется.')) {
          Blockly.mainWorkspace.clear();
        }
        try {
            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
        } catch(err) {
            alert("Ошибка\n Проверьте правильность выбранной Системы Вертор!")
            return;
        }
      }
      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      document.getElementById('load').value = '';
    };
    reader.readAsText(files[0]);
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
    

workspace.addChangeListener(updateFunction);