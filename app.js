var dualShock = require('dualshock-controller');

//pass options to init the controller.
var controller = dualShock(
    {
        //you can use a ds4 by uncommenting this line.
        //config: "dualshock4-generic-driver",
        //if using ds4 comment this line.
        config : "dualShock3",
        //smooths the output from the acelerometers (moving averages) defaults to true
        accelerometerSmoothing : true,
        //smooths the output from the analog sticks (moving averages) defaults to false
        analogStickSmoothing : false
    });

//make sure you add an error event handler
controller.on('error', function(data) {
  console.log("Error starting PS3 controller");
});

//add event handlers:
controller.on('left:move', function(data) {
  console.log("Drone moving left");
});
controller.on('right:move', function(data) {
  console.log("Drone moving right");
});
controller.on('connected', function(data) {
  console.log("PS3 Connected");
});
controller.on('square:press', function (data) {
  console.log("Drone took off");
});
controller.on('circle:release', function (data) {
  console.log("Drone landing");
});
controller.on('forwardBackward:motion', function (data) {
  console.log("Drone moving forward");
});
controller.on('upDown:motion', function (data) {
  console.log("Drone moving up");
});

controller.connect();
