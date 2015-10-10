/**
 * This file calls the code to generate the svg from the network code and then
 * renders it into the webpage we use jsdom to read back from
 */

var btn = document.getElementById("run"),
    cd = document.getElementById("code"),
    canvas = document.getElementById("canvas"),
    chart;
    canvas.innerHTML = "hello";

//return;
var code = cd.value;

if (chart) {
  chart.clean();
}

chart = flowchart.parse(code);

chart.drawSVG('canvas', {
  // 'x': 30,
  // 'y': 50,
  'line-width': 3,
  'line-length': 50,
  'text-margin': 10,
  'font-size': 14,
  'font': 'normal',
  'font-family': 'Helvetica',
  'font-weight': 'normal',
  'font-color': 'black',
  'line-color': 'black',
  'element-color': 'black',
  'fill': 'white',
  'yes-text': 'yes',
  'no-text': 'no',
  'arrow-end': 'block',
  'scale': 1,
  'symbols': {
    'start': {
      'font-color': 'red',
      'element-color': 'green',
      'fill': 'yellow'
    },
    'end':{
      'class': 'end-element'
    }
  },
  'flowstate' : {
    'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
    'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
    'future' : { 'fill' : '#FFFF99'},
    'request' : { 'fill' : 'blue'},
    'invalid': {'fill' : '#444444'},
    'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
    'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
  }
});

canvas.innerHTML = 'hey';
