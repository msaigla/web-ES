// let { PythonShell } = require('python-shell');

// const data = {"uid":"XZsGi9A93NNH4fRYYI5a2Wk4Hfm1","lat":"37.5916983","lng":"127.01206040000001"};

// let options = {
//     mode: 'json',
//     pythonOptions: ['-u'], // get print results in real-time
//     scriptPath: './python/',
//     args: ['value1', 'value2', 'value3']
//   };

//   var pyshell = new PythonShell('test.py',{
//         mode: 'json',
//         scriptPath:"./python/",
//         pythonOptions: ['-u']});

//   pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement) 
//     console.log(message);
  
//   });
  
//   // end the input stream and allow the process to exit 
//   pyshell.end(function (err) {
//     if (err) throw err;
//     console.log('finished');
//   });

// btn_send.addEventListener('click', () => {
//     pyshell.send({ command: "do_stuff", args: [1, 2, 3] });
//     console.log("ok");
// });

// const SerialPort= require('serial-node');
// const serial = new SerialPort();
 
// serial.use('COM7'); 
 
// // wait for 5 seconds to stop reading
// setInterval(() => {
//     let read = serial.read();
//     console.log(read)
// }, 1000);
