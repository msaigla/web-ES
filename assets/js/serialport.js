let port = ""
let speed = "9600"
let wait = 2000

let timerId = setInterval(readSer, 2000);

const SerialPort= require('serial-node');
const serial = new SerialPort();

function sendToPython(message) {     
    // var python = require("child_process").execFile;

    // python("serialport.exe", ["reload"], function(err, results) {  
    //     console.log(results);
    //     console.log(err);
    //     if (message[0] === "reload") {
    //         let result = results.toString('utf8').replace(/[^a-zA-Z0-9,]/g, '');
    //         result = result.split(',');
    //         console.log('results: ', result);
    //         console.log(result.length);
    //         $('#ports').find('option').remove();
    //         let first = true
    //         result.forEach(function (item, i, result) {
    //             if (item === "") {
    //                 $('#ports').prepend('<option value="no" selected>Устройство не найдено</option>');
    //             } else {
    //                 if (first) {
    //                     $('#ports').append('<option value="' + item + '" selected>' + item + '</option>');
    //                     first = false;
    //                 } else {
    //                     $('#ports').append('<option value="' + item + '">' + item + '</option>');
    //                 }
    //             }
    //         });
    //         result.textContent = result;
    //         port = $('#ports option:selected').text();
    //         if (port === "Устройство не найдено") {
    //             $("#read_serial").prop('disabled', true);
    //         } else {
    //             $("#read_serial").prop('disabled', false);
    //             serial.use(port)
    //         }

    //     } else if (message[0] === "send") {
    //         console.log(results.toString('utf8'))
    //     } else if (message[0] === "readline") {
    //         $(".list-serial").append("<li class='list-group-item'>" + results.toString('utf8') + "</li>");
    //     } else if (message[0] === "read_all") {
    //         console.log(results.toString('utf8'));
    //         $(".list-serial").append("<li class='list-group-item'>" + results.toString('utf8') + "</li>");
    //     } else if (message[0] === "clean") {
    //         $("li.list-group-item").remove();
    //     }                      
    // });
    var python = require('child_process').execFile('./python/test.exe', [message])

    // var python = require('child_process').spawn('python', ['./python/test.py', message]);

    python.stdout.on('data', function (results) {
        console.log(results);
        if (message[0] === "reload") {
            let result = results.toString('utf8').replace(/[^a-zA-Z0-9,]/g, '');
            result = result.split(',');
            console.log('results: ', result);
            console.log(result.length);
            $('#ports').find('option').remove();
            let first = true
            result.forEach(function (item, i, result) {
                if (item === "") {
                    $('#ports').prepend('<option value="no" selected>Устройство не найдено</option>');
                } else {
                    if (first) {
                        $('#ports').append('<option value="' + item + '" selected>' + item + '</option>');
                        first = false;
                    } else {
                        $('#ports').append('<option value="' + item + '">' + item + '</option>');
                    }
                }
            });
            result.textContent = result;
            port = $('#ports option:selected').text();
            if (port === "Устройство не найдено") {
                $("#read_serial").prop('disabled', true);
            } else {
                $("#read_serial").prop('disabled', false);
                serial.use(port)
            }

        } else if (message[0] === "send") {
            console.log(results.toString('utf8'))
        } else if (message[0] === "readline") {
            $(".list-serial").append("<li class='list-group-item'>" + results.toString('utf8') + "</li>");
        } else if (message[0] === "read_all") {
            console.log(results.toString('utf8'));
            $(".list-serial").append("<li class='list-group-item'>" + results.toString('utf8') + "</li>");
        } else if (message[0] === "clean") {
            $("li.list-group-item").remove();
        }
    });

    // python.stderr.on('data', (data) => {
    //     console.error('stderr: ${data}');
    // });

    python.on('close', (code) => {
        console.log('child process exited with code ${code}');
    });
}

function readSer() {
    if ("Читать строку" === $('#type_read option:selected').text()) {
        sendToPython(["readline", port, speed]);
    }
    if ("Читать все" === $('#type_read option:selected').text()) {
        sendToPython(["read_all", port, speed]);
    }
}

btn_reload.addEventListener('click', () => {
    if ($('#read_serial').is(':checked')){
        clearInterval(timerId);
    }
    sendToPython(["reload"]);
    if ($('#read_serial').is(':checked')){
        timerId = setInterval(readSer, wait);
    }
});

btn_send.addEventListener('click', () => {
    if ($('#read_serial').is(':checked')){
        clearInterval(timerId);
    }
    let msg = $('#message').val();
    sendToPython(["send", port, speed, msg]);
    if ($('#read_serial').is(':checked')){
        timerId = setInterval(readSer, wait);
    }
});

read_serial.addEventListener('click', () => {
    if ($('#read_serial').is(':checked')){
        wait = Number($('#wait').val());
        console.log(typeof wait);
        console.log(wait);
        sendToPython(["clean", port, speed]);
        readSer();
        timerId = setInterval(readSer, wait);
    } else {
        clearInterval(timerId);
    }
});

btn_clean.addEventListener('click', () => {
    if ($('#read_serial').is(':checked')){
        clearInterval(timerId);
    }
    sendToPython(["clean", port, speed]);
    if ($('#read_serial').is(':checked')){
        timerId = setInterval(readSer, wait);
    }
});

ports.addEventListener('change', function (e) {
    port = e.target.value;
});

speed_serial.addEventListener('change', function (e) {
    speed = e.target.value;
});

sendToPython(["reload"]);

speed = $('select[name=speed] option:selected').text();
btn_reload.dispatchEvent(new Event('click'));
read_serial.dispatchEvent(new Event('click'));