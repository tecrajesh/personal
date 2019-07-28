
console.log('index') //eslint-disable-line no-console
include("../js/designPattern/singleton.js");


function include(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = jsFilePath;
  document.body.appendChild(js);

}
