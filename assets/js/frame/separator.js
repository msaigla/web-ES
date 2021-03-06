$('.separator').on('mousedown', function(e) {
    var $this        = $(this);
    var $firstCol    = $(this).closest('.resizeBlock');
    var $secontCol   = $firstCol.next('.resizeCode');
    var $wrapper     = $this.closest('.resize');
    var wrapperWidth = $wrapper.outerWidth(true);
  
    function resize(e) {
        let newX = e.pageX - $wrapper.offset().left,
            newWidth = newX / wrapperWidth * 100;
        $firstCol.css({
            width: newWidth + '%'
        });
        $secontCol.css({
            width: (100 - newWidth) + '%'
        });
        if ($("#codeArduino").width() < 250) {
            $("#code-scale-div").hide();
            $("#copy-button").hide();
            if ($("#codeArduino").width() < 150) {
                $("#codeArduino").hide();
            } else {
                $("#codeArduino").show();
            }
        } else {
            $("#code-scale-div").show();
            $("#copy-button").show();
            $("#codeArduino").show();
        }
        console.log($("#resizeBlock").width())
        if ($("#resizeBlock").width() < 250) {
            $("#toolbox-scale-div").hide();
        } else {
            $("#toolbox-scale-div").show();
        }
        onresize();
    }
  
    function finishResize(e) {
        $(document).off('mousemove', resize);
        $(document).off('mouseup', finishResize);
    }
    $(document).on('mousemove', resize);
    $(document).on('mouseup', finishResize);
});