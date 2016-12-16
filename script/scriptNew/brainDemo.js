function TaxAgriculture() {






    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);
    var areaBanijjo = Number(document.getElementById('areaKrishiBanijjo').value);

    document.write(input_area);

//    var text_msg='';
//
//    var intarest='';
//    var bakeya='';
//    var total='';
//    var satangso='';
//    var hall_dabi='';
//    var total1='';
//
//
//    if (input_area > 0) {
//        if (input_year == 1422) {
//            input_year = 0;
//            var pa7 = part7(input_year, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1];
//            var intarest = pa7[2];
//            var total = pa7[3];
//            var onnano = pa7[4];
//
//            text_msg='আপনার ভূমি উন্নয়ন কর মওকুফ। শুধুমাত্র বার্ষিক ২/- হারে দাখিলা ফি ধরা হয়েছে।';
//
//        }
//        else if (input_year <= 1421 && input_year >= 1402) {
//            input_year = 1421 - input_year + 1;
//            var pa6 = part6(input_year, input_area);
//            var pa7 = part7(0, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1] + pa6[1];
//            var intarest = pa7[2] + pa6[2];
//            var total = pa7[3] + pa6[3];
//            var onnano = pa7[4] + pa6[4];
//
//        }
//        else if (input_year==1401){
//            input_year=1;
//            var pa5 = part5(input_year, input_area);
//            var pa6 = part6(20, input_area);
//            var pa7 = part7(0, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1]+pa6[1]+pa5[1];
//            var intarest = pa7[2]+pa6[2]+pa5[2];
//            var total = pa7[3]+pa6[3]+pa5[3];
//            var onnano = pa7[4]+pa6[4]+pa5[4];
//
//        }
//        else if (input_year<=1400 && input_year>=1398 ){
//            input_year=1400-input_year+1;
//            var pa4 = part4(input_year, input_area);
//            var pa5 = part5(1, input_area);
//            var pa6 = part6(20, input_area);
//            var pa7 = part7(0, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1];
//            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2];
//            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3];
//            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4];
//
//        }
//        else if (input_year<=1397 && input_year>=1394 ){
//            input_year=1397-input_year+1;
//            var pa3 = part3(input_year, input_area);
//            var pa4 = part4(3, input_area);
//            var pa5 = part5(1, input_area);
//            var pa6 = part6(20, input_area);
//            var pa7 = part7(0, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1];
//            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2];
//            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3];
//            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4];
//
//        }
//        else if (input_year<=1393 && input_year>=1389 ){
//            input_year=1393-input_year+1;
//            var pa2 = part2(input_year, input_area);
//            var pa3 = part3(4, input_area);
//            var pa4 = part4(3, input_area);
//            var pa5 = part5(1, input_area);
//            var pa6 = part6(20, input_area);
//            var pa7 = part7(0, input_area);
//
//
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1]+pa2[1];
//            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2]+pa2[2];
//            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3]+pa2[3];
//            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4]+pa2[4];
//
//        }
//
//        else{
//
//            input_year=1389-input_year+1;
//            var pa1 = part1(input_year, input_area);
//            var pa2 = part2(5, input_area);
//            var pa3 = part3(4, input_area);
//            var pa4 = part4(3, input_area);
//            var pa5 = part5(1, input_area);
//            var pa6 = part6(20, input_area);
//            var pa7 = part7(0, input_area);
//            var hall_dabi = pa7[0];
//            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1]+pa2[1]+pa1[1];
//            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2]+pa2[2]+pa1[2];
//            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3]+pa2[3]+pa1[3];
//            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4]+pa2[4]+pa1[4];
//
//            //echo "if if if  working"."<br>";
//        }
//    }
//
//    //var top = '<div class="col-md-8 col-md-offset-2" style="font-size:15px;"> <div class="table col-xm-12 col-sm-12 col-md-12 col-lg-12"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3"><tr class="danger" style="border:3px solid black"><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">হাল দাবী </th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#235a01; color:white;"">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;"">সুদ</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">অন্যান্য</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">মোট দাবী টাকা</th></tr>'; //rad is radius
//    var top= '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
//    var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</td></tr>';
//    var a2='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
//    var a3='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
//    var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
//    var a5='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td></tr></table></div>';
//    var a6='';
//
//    //var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td>';
//    //var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td>';
//    //var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td>';
//    //var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td>';
//
//
//    var a6='<div style="text-align: center;"><h style=" color: black; font-size: 17px;">'+text_msg+'</h></div>'
//
//    var a=top+a1+a2+a3+a4+a5;
//    result = document.getElementById('result');
//    result.innerHTML = a;
//
//    result_text = document.getElementById('result_text');
//    result_text.innerHTML = a6;
}
