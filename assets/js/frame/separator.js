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
        onresize();
    }
  
    function finishResize(e) {
        $(document).off('mousemove', resize);
        $(document).off('mouseup', finishResize);
    }
    $(document).on('mousemove', resize);
    $(document).on('mouseup', finishResize);
});