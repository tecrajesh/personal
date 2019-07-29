
console.log('started...') //eslint-disable-line no-console
include("../js/designPattern/singleton.js");
include("../js/designPattern/observer.js");


function include(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = jsFilePath;
  document.body.appendChild(js);

}


console.log('Completed...') //eslint-disable-line no-console