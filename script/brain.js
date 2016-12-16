
function TaxAgriculture() {
  var area = Number(document.getElementById('area').value);
  var year = Number(document.getElementById('year').value);
  var text_msg='';
  //var z = square(x) + square(y);
  //var rad = Math.sqrt(z).toPrecision(3);
  //now start working on the Angel!
  //var theta = Math.atan(y / x) * (180 / Math.PI);
  
  var intarest='';
	var bakeya='';
	var total='';
	var satangso='';
	var hall_dabi='';
	var total1='';
  
  //var angel; //This will hold the actula angel in Degrees 
  if (area <= 825) {
    var hall_dabi= 2;
	var intarest= 0;
	var bakeya= 2*year;
	var total1=hall_dabi+bakeya;
	var total3=total1;
	var hall_dabi=0;
	var bakeya=0;
	text_msg='আপনার ভূমি উন্নয়ন কর মওকুফ। শুধুমাত্র বার্ষিক ২/- হারে দাখিলা ফি ধরা হয়েছে।';
  } else if (area > 825 && area <= 1000) {
    var satangso=0.5;
	var hall_dabi= area * satangso;
	var intarest= (hall_dabi*0.0625+hall_dabi*0.0625*year)*year/2;
	var bakeya= hall_dabi*year;
	var total3= hall_dabi+bakeya+intarest;
  } else {
    var satangso=1.0;
	var hall_dabi= area * satangso;
	var intarest= (hall_dabi*0.0625+hall_dabi*0.0625*year)*year/2;
	var bakeya= hall_dabi*year;
	var total3=hall_dabi+bakeya+intarest;
  } 
  //var top = '<div class="col-md-8 col-md-offset-2" style="font-size:15px;"> <div class="table col-xm-12 col-sm-12 col-md-12 col-lg-12"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3"><tr class="danger" style="border:3px solid black"><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">হাল দাবী </th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#235a01; color:white;"">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;"">সুদ</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">অন্যান্য</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">মোট দাবী টাকা</th></tr>'; //rad is radius
  var top= '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
  var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</td></tr>';
  var a2='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  var a3='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  var a5='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td></tr></table></div>';
  var a6='';
  
  //var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  
  
  var a6='<div style="text-align: center;"><h style=" color: black; font-size: 17px;">'+text_msg+'</h></div>'
  
  var a=top+a1+a2+a3+a4+a5;
  result = document.getElementById('result');
  result.innerHTML = a;
  
  result_text = document.getElementById('result_text');
  result_text.innerHTML = a6;
}


function TaxNonAgriculture() {
 var area = Number(document.getElementById('area1').value);
 var year = Number(document.getElementById('year1').value);
  
var satangso=125.00;
var hall_dabi1= area * satangso;
var intarest1= (hall_dabi1*0.0625+hall_dabi1*0.0625*year)*year/2;
var bakeya1= hall_dabi1*year;
var total1=hall_dabi1+bakeya1+intarest1;
  
  

var area = Number(document.getElementById('area2').value);
var year = Number(document.getElementById('year2').value);  


var satangso=22.00;
var hall_dabi2= area * satangso;
var intarest2= (hall_dabi2*0.0625+hall_dabi2*0.0625*year)*year/2;
var bakeya2= hall_dabi2*year;
var total2=hall_dabi2+bakeya2+intarest2;


var area = Number(document.getElementById('area3').value);
var year = Number(document.getElementById('year3').value);    
  
var satangso=22.00;
var hall_dabi3= area * satangso;
var intarest3= (hall_dabi3*0.0625+hall_dabi3*0.0625*year)*year/2;
var bakeya3= hall_dabi3*year;
var total3=hall_dabi3+bakeya3+intarest3;  
  

var area = Number(document.getElementById('area4').value);
var year = Number(document.getElementById('year4').value);  

var satangso=7.00;
var hall_dabi4= area * satangso;
var intarest4= (hall_dabi4*0.0625+hall_dabi4*0.0625*year)*year/2;
var bakeya4= hall_dabi4*year;
var total4=hall_dabi4+bakeya4+intarest4;

var area = Number(document.getElementById('area5').value);
var year = Number(document.getElementById('year5').value);

var satangso=17.00;
var hall_dabi5= area * satangso;
var intarest5= (hall_dabi5*0.0625+hall_dabi5*0.0625*year)*year/2;
var bakeya5= hall_dabi5*year;
var total5=hall_dabi5+bakeya5+intarest5;

var area = Number(document.getElementById('area6').value);
var year = Number(document.getElementById('year6').value); 

var satangso=6.00;
var hall_dabi6= area * satangso;
var intarest6= (hall_dabi6*0.0625+hall_dabi6*0.0625*year)*year/2;
var bakeya6= hall_dabi6*year;
var total6=hall_dabi6+bakeya6+intarest6; 

var area = Number(document.getElementById('area7').value);
var year = Number(document.getElementById('year7').value); 

var satangso=15.00;
var hall_dabi7= area * satangso;
var intarest7= (hall_dabi7*0.0625+hall_dabi7*0.0625*year)*year/2;
var bakeya7= hall_dabi7*year;
var total7=hall_dabi7+bakeya7+intarest7;

var area = Number(document.getElementById('area7').value);
var year = Number(document.getElementById('year7').value); 

var satangso=5.00;
var hall_dabi8= area * satangso;
var intarest8= (hall_dabi8*0.0625+hall_dabi8*0.0625*year)*year/2;
var bakeya8= hall_dabi8*year;
var total8=hall_dabi8+bakeya8+intarest8;


var area = Number(document.getElementById('area8').value);
var year = Number(document.getElementById('year8').value); 

var grand_total=total1+total2 +total3 + total4+ total5+ total6+ total7+ total8; 
var grand_hall_dabi= hall_dabi1+hall_dabi2+hall_dabi3+hall_dabi4+hall_dabi5+hall_dabi6+hall_dabi7+hall_dabi8;
var grand_bakeya=bakeya1+bakeya2+bakeya3+bakeya4+bakeya5+bakeya6+bakeya7+bakeya8;
var grand_intarest=intarest1+intarest2+intarest3+intarest4+intarest5+intarest6+intarest7+intarest8;
  //var z = square(x) + square(y);
  //var rad = Math.sqrt(z).toPrecision(3);
  //now start working on the Angel!
  //var theta = Math.atan(y / x) * (180 / Math.PI);
    
  //var top = '<div class="col-md-8 col-md-offset-2" style="font-size:15px;"> <div class="table col-xm-12 col-sm-12 col-md-12 col-lg-12"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3"><tr class="danger" style="border:3px solid black"><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">হাল দাবী </th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">বকেয়া</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">সুদ</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">মোট দাবী টাকা</th></tr>'; //rad is radius
  //var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235a01; color:white;">'+ Math.round(grand_hall_dabi*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(grand_bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(grand_intarest*Math.pow(10,2))/Math.pow(10,2) +'</td>';
  //var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+ total1 +'</td>';
  //var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+ Math.round(grand_total*Math.pow(10,2))/Math.pow(10,2)+'</td>';
  //var a6='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-admin" style="margin-left:15px;"><h style=" color: black; font-size: 17px;">'+text_msg+'</h></div>'
  var top= '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
  var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#002256; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(grand_hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</td></tr>';
  var a2='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#005416; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+  Math.round(grand_bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  var a3='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#563D11; color:white;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(grand_intarest*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  //var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#FF0000; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
  var a5='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবী টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(grand_total*Math.pow(10,2))/Math.pow(10,2) +'</td></tr></table></div>';
  var a6='';
  
  
  var a=top+a1+a2+a3+a5;
  result = document.getElementById('result');
  result.innerHTML = a;
}
