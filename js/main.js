/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "brah": {
        "strokepath": [
            {
                "path": "M385.862,100.648h-39.048v-4.881   c0-21.477-17.572-39.048-39.048-39.048h-90.592c-21.477,0-39.048,17.572-39.048,39.048v4.881h-37.617v-9.762   c0-4.295-3.514-7.81-7.81-7.81H78.032c-4.295,0-7.81,3.514-7.81,7.81v9.762h-24.08c-17.181,0-31.239,14.057-31.239,31.239v201.098   c0,17.181,14.057,31.239,31.239,31.239h339.719c17.181,0,31.239-14.057,31.239-31.239V131.887   C417.1,114.705,403.043,100.648,385.862,100.648z",
                "duration": 800
            },
            {
                "path": "M262.469,131.236   c58.227,0,105.43,47.203,105.43,105.43s-47.203,105.43-105.43,105.43s-105.43-47.203-105.43-105.43   S204.242,131.236,262.469,131.236",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 432,
            "height": 432
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#brah').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 5,
    "strokeColor": "#ffffff"
}).lazylinepainter('paint'); 
 });