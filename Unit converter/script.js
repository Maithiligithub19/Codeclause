let feet    =document.getElementById("feet");
let meter   =document.getElementById("meter");
let inch    =document.getElementById("inches");
let cm      =document.getElementById("cm");
let yard    =document.getElementById("yards");
let km      =document.getElementById("km");
let mile    =document.getElementById("miles");
let seconds =document.getElementById("seconds");
let miliseconds =document.getElementById("miliseconds");
let minutes =document.getElementById("minutes");
let hours =document.getElementById("hours");
let days =document.getElementById("days");
let weeks =document.getElementById("weeks");
let months =document.getElementById("months");
let years =document.getElementById("years");
let sqm =document.getElementById("sqm");
let sqkm = document.getElementById("sqkm");
let sqcm = document.getElementById("sqcm");
let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");
let cm1 = document.getElementById("cm1");
let ckm = document.getElementById("ckm");
let ccm = document.getElementById("ccm");
let g =document.getElementById("g");
let kg =document.getElementById("kg");
let mg =document.getElementById("mg");

function gToOther(val){
    kg.value =  val/1000; 
    mg.value =  val*1000;          
}
function kgToOther(val){
    g.value =  val*1000; 
    mg.value =  val*1000000;          
}
function mgToOther(val){
    g.value =  val/1000; 
    kg.value =  val/1000000;          
}



function cm1ToOther(val){
    ckm.value =  val*0.000000001; 
    ccm.value =  val*1000000;          
}
function ckmToOther(val){
    cm1.value =  val*1000000000; 
    ccm.value =  val*1000000000000000;          
}
function ccmToOther(val){
    cm1.value =  val*0.000001; 
    ckm.value =  val/1000000000000000;          
}



function sqmToOther(val){
    sqkm.value =  val/1000000; 
    sqcm.value =  val*10000;          
}
function sqcmToOther(val){
    sqm.value =  val/10000; 
    sqkm.value = val/10000000000;          
}
function sqkmToOther(val){
    sqm.value =  val*1000000; 
    sqcm.value = val*10000000000;          
}
function fahrenheitToOther(val){
    kelvin.value =  ((val-32)*5/9)+273.15; 
    celsius.value = (val-32)*5/9;          
}
function kelvinToOther(val){
    fahrenheit.value =  ((val-273.15) *9/5 )+ 32 ; 
    celsius.value = val-273.15;          
}
function celsiusToOther(val){
    kelvin.value =  val+ 273.15; 
    fahrenheit.value = (val*9/5) + 32 ;          
}

function feetToOther(val){
    meter.value =  val/3.2808; 
    inch.value =  val*12;   
    cm.value    =  val/0.032808; 
    yard.value  =  val*0.33333;  
    km.value    =  val/3280.8; 
    mile.value  =  val*0.00018939;       
}
function meterToOther(val){
    feet.value = val*3.2808;
    inch.value = val*39.370;  
    cm.value   = val/0.01;
    yard.value = val*1.0936; 
    km.value   = val/1000;
    mile.value = val*0.00062137;
}
function inchesToOther(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;  
    cm.value = val/0.39370;
    yard.value = val*0.027778; 
    km.value = val/39370;
    mile.value = val*0.000015783;
}
function cmToOther(val){
    feet.value = val*0.032808;
    meter.value = val/100;  
    inch.value = val*0.39370;
    yard.value = val*0.010936; 
    km.value = val/100000 ;
    mile.value = val*0.0000062137;
}
function yardsToOther(val){
    feet.value = val*3;
    inch.value = val*36;  
    cm.value = val/0.010936;
    meter.value = val/1.0936; 
    km.value = val/1093.6;
    mile.value = val*0.00056818;
}
function kmToOther(val){
    feet.value = val*3280.8;
    inch.value = val*39370;  
    cm.value = val*100000;
    yard.value = val*1093.6; 
    meter.value = val*1000;
    mile.value = val*0.62137;
}
function milesToOther(val){
    feet.value = val*5280;
    inch.value = val*63360;  
    cm.value = val/0.0000062137;
    yard.value = val*1760; 
    km.value = val/0.62137;
    meter.value = val/0.00062137;

}
function secondsToOther(val){
    miliseconds.value =  val*1000; 
    minutes.value =  val/60;   
    hours.value    =  val/3600; 
    days.value  =  val/86400;  
    weeks.value    =  val/604800; 
    months.value  =  val/(3.803*10^-7);    
    years.value    =  val/(3.171*10^-8);    
}
function milisecondsToOther(val){
    seconds.value =  val/1000; 
    minutes.value =  val/60000;   
    hours.value    =  val/(2.778*10^-7); 
    days.value  =  val/(1.157*10^-8);  
    weeks.value    =  val/(1.653*10^-9); 
    months.value  =  val/(3.805*10^-10);    
    years.value    =  val/(3.171*10^-11);    
}

function minutesToOther(val){
    seconds.value =  val*60; 
    miliseconds.value =  val*60000;   
    hours.value    =  val/60; 
    days.value  =  val/1440;  
    weeks.value    =  val/10080; 
    months.value  =  val/43800;    
    years.value    =  val/525600;    
}
function hoursToOther(val){
    seconds.value =  val*3600; 
    miliseconds.value =  val*3600000;   
    minutes.value    =  val*60; 
    days.value  =  val/24;  
    weeks.value    =  val/168; 
    months.value  =  val/730;    
    years.value    =  val/8760;    
}

function daysToOther(val){
    seconds.value =  val*86400; 
    miliseconds.value =  val*86400000;   
    minutes.value    =  val*1440; 
    hours.value  =  val*24;  
    weeks.value    =  val/7; 
    months.value  =  val/30.417;    
    years.value    =  val/365;    
}

function weeksToOther(val){
    seconds.value =  val*604800; 
    miliseconds.value =  val*604800000;   
    minutes.value    =  val*10080; 
    hours.value  =  val*168;  
    days.value    =  val*7; 
    months.value  =  val/4.345;    
    years.value    =  val/52.143;    
}
function monthsToOther(val){
    seconds.value =  val*2628002.88; 
    miliseconds.value =  val*2628002880;   
    minutes.value    =  val*43800; 
    hours.value  =  val*730;  
    days.value    =  val*30.417; 
    weeks.value  =  val*4.345;    
    years.value    =  val/12;    
}
function yearsToOther(val){
    seconds.value =  val*31536000; 
    miliseconds.value =  val*31536000000;   
    minutes.value    =  val*525600; 
    hours.value  =  val*87600;  
    days.value    =  val*365; 
    weeks.value  =  val*52.143;    
    months.value    =  val*12;    
}


function convertToOthers(convertFrom,value)
{    
    switch(convertFrom)
    {
        case "feet" : feetToOther (parseFloat(value)); 
        break;
        case "meter": meterToOther(parseFloat(value));
        break;
        case "inch" : inchesToOther(parseFloat(value)); 
        break;
        case "cm"   : cmToOther(parseFloat(value)); 
        break;
        case "yard" : yardsToOther (parseFloat(value)); 
        break;
        case "km"   : kmToOther (parseFloat(value)); 
        break;
        case "mile" : milesToOther(parseFloat(value)); 
        break;
        case "seconds" : secondsToOther(parseFloat(value));
        break;
        case "miliseconds" :milisecondsToOther(parseFloat(value));
        break;
        case "minutes" : minutesToOther(parseFloat(value));
        break;
        case "hours" : hoursToOther(parseFloat(value));
        break;
        case "days" : daysToOther(parseFloat(value));
        break;``
        case "weeks" : weeksToOther(parseFloat(value));
        break;
        case "months" : monthsToOther(parseFloat(value));
        break;
        case "years" : yearsToOther(parseFloat(value));
        break;
        case "celsius" : celsiusToOther(parseFloat(value));
        break;
        case "kelvin" : kelvinToOther(parseFloat(value));
        break;
        case "fahrenheit" : fahrenheitToOther(parseFloat(value));
        break;
        case "sqm" : sqmToOther(parseFloat(value));
        break;
        case "sqcm" : sqcmToOther(parseFloat(value));
        break;
        case "sqkm" : sqkmToOther(parseFloat(value));
        break;
        case "cm1" : cm1ToOther(parseFloat(value));
        break;
        case "ckm" : ckmToOther(parseFloat(value));
        break;
        case "ccm" : ccmToOther(parseFloat(value));
        break;
        case "kg" : kgToOther(parseFloat(value));
        break;
        case "g" : gToOther(parseFloat(value));
        break;
        case "mg" : mgToOther(parseFloat(value));
        break;

        
    }
}

console.log(seconds,10);