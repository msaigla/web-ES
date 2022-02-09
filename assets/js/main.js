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