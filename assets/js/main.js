$('.light-dark-switch').click(function(){
	if ($(".light-dark-switch").is(':checked')) {
        localStorage.setItem('light-dark-switch', 1);
        $('#app').addClass('dark-style');
        $('#app').removeClass('light-style');
    } else {
        localStorage.setItem('light-dark-switch', 0);
        $('#app').removeClass('dark-style');
        $('#app').addClass('light-style');
    }
});

$(document).ready(function() {
    var item = localStorage.getItem('light-dark-switch');
    console.log(item);
    if (item == 1) {
        $(".light-dark-switch").prop('checked', true);
    } else {
        $(".light-dark-switch").prop('checked', false);
    }
    if ($(".light-dark-switch").is(':checked')) {
        $('#app').addClass('dark-style');
        $('#app').removeClass('light-style');
    } else {
        $('#app').removeClass('dark-style');
        $('#app').addClass('light-style');
    }
});

$("#code-scale").change(function() {
    var d = $("#code-scale").val() / 100;
    if (d < Blockly.mainWorkspace.options.zoomOptions.minScale) {
        $("#code-scale").val(Math.floor(Blockly.mainWorkspace.options.zoomOptions.minScale*100));
        d = Blockly.mainWorkspace.options.zoomOptions.minScale
    } else if (d > Blockly.mainWorkspace.options.zoomOptions.maxScale) {
        $("#code-scale").val(Math.floor(Blockly.mainWorkspace.options.zoomOptions.maxScale*100));
        d = Blockly.mainWorkspace.options.zoomOptions.maxScale
    } else {
        $("#code-scale").val(Math.floor(d*100));
    }
    $(".linesNum").css("maxWidth", d*40 + "px")
    $(".resizeCode").css("fontSize", d + "rem");
});

$("#toolbox-scale").change(function() {
    var d = $("#toolbox-scale").val() / 100;
    if (d < Blockly.mainWorkspace.options.zoomOptions.minScale) {
        $("#toolbox-scale").val(Math.floor(Blockly.mainWorkspace.options.zoomOptions.minScale*100));
        d = Blockly.mainWorkspace.options.zoomOptions.minScale
    } else if (d > Blockly.mainWorkspace.options.zoomOptions.maxScale) {
        $("#toolbox-scale").val(Math.floor(Blockly.mainWorkspace.options.zoomOptions.maxScale*100));
        d = Blockly.mainWorkspace.options.zoomOptions.maxScale
    } else {
        $("toolbox-scale").val(Math.floor(d*100));
    }
    Blockly.mainWorkspace.setScale(d);
});

$(window).on('resize', function(){
    if ($("#codeArduino").width() < 250) {
        $("#code-scale-div").hide();
        if ($("#codeArduino").width() < 150) {
            $("#codeArduino").hide();
        } else {
            $("#codeArduino").show();
        }
    } else {
        $("#code-scale-div").show();
        $("#codeArduino").show();
    }
});

function copyButton(id_code) {
    code = id_code;
    navigator.clipboard.writeText(code)
    // copyToClipboard(document.getElementById(id_code));
};