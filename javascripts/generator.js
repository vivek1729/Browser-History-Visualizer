var gui = window.require('nw.gui');
var win = gui.Window.open('http://www.google.co.in',{
  show: true, // make it false to make window hidden
  title: "Browser",
  "inject-js-end": "checker.js"
});

win.on('loaded', function () {
  win.window.myChecker.done(function (result) {
    console.log("Result is", result);
  });
});