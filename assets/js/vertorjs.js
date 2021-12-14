var selected = 'blocks';

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var codeJavaScript = document.getElementById('codeJavaScript');
var selectPorts = document.getElementById('serialPorts');

profile["default"] = profile.vertorjs;
generator["default"] = generator.vertorjs;

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
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = '62px';
    blocklyDiv.style.top = '45px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight - y + 50 + 'px';
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

function showCodeJavaScript() {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    blocklyArea.style.display = "none";
    blocklyDiv.style.display = "none";
    codeJavaScript.style.display = "block";
    codeJavaScript.innerHTML = "<textarea class=\"lined\" readonly>" + code + "</textarea>";
    $(".lined").linedtextarea();
}

function showBlockly() {
    blocklyArea.style.display = "block";
    blocklyArea.style.display = "block";
    blocklyDiv.style.display = "block";
    codeJavaScript.style.display = "none";
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);
}

function renderContent() {
    console.log(selected);
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
        var blob = new Blob([Blockly.JavaScript.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
        saveAs(blob, fileName + '.js');
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

function restore_blocks_js() {
    if ('localStorage' in window && window.localStorage.js) {
        var xml = Blockly.Xml.textToDom(window.localStorage.js);
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

function backup_blocks_js() {
    if ('localStorage' in window) {
      var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      window.localStorage.setItem('js', Blockly.Xml.domToText(xml));
    }
  }

function auto_save_and_restore_blocks_js() {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(restore_blocks_js, 0);
    // Hook a save function onto unload.
    bindEvent(window, 'unload', backup_blocks_js);
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
    console.log(files)
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
            console.log(err)
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