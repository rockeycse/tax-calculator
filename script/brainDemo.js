

function TaxAgriculture() {




    //part 1 method start
    function part1(input_year, input_area) {

        //var input_area = Number(document.getElementById('areaKrishi').value);
        //var input_year = Number(document.getElementById('yearKrishi').value);

        input_area = input_area;

        year = input_year;
        if (input_area <= 200) {
            satangso = 0.03;
            hall_dabi = input_area * satangso;
            bakeya = hall_dabi * year;
            total = hall_dabi * (pow((1 + .0625), (year + 29)) - pow((1 + .0625), 29)) / 0.0625;
            intarest = total - bakeya;
            onnano = 0;

            if (total < 1) {
                total = 1;
            }

            return [hall_dabi, bakeya, intarest, total, onnano];
        }
    }


        function part7(input_year, input_area) {

            //var input_area = Number(document.getElementById('areaKrishi').value);
            //var input_year = Number(document.getElementById('yearKrishi').value);        //
            ////
            input_area=input_area;

            year=input_year ;
            if(input_area<=825)
            {
                hall_dabi= 10;
                intarest= 0;
                bakeya= 10*year;
                total=hall_dabi+bakeya;
                onnano=total;
                hall_dabi=0;
                bakeya=0;


                return [hall_dabi,bakeya,intarest,total,onnano];
            }
            else
            {
                satangso=2;
                hall_dabi= input_area * satangso;
                bakeya= hall_dabi*year;
                total=hall_dabi*(pow((1+.0625),(year+1))-1)/0.0625;
                onnano=0;
                intarest=total-(hall_dabi+bakeya);


                return [hall_dabi,bakeya,intarest,total,onnano];
            }
        }










    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('yearKrishi').value);
    var areaBanijjo = Number(document.getElementById('areaKrishiBanijjo').value);


    var text_msg='';

    var intarest='';
    var bakeya='';
    var total='';
    var satangso='';
    var hall_dabi='';
    var total1='';


    if (input_area > 0) {
        if (input_year == 1422) {
            input_year = 0;
            var pa7 = part7(input_year, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1];
            var intarest = pa7[2];
            var total = pa7[3];
            var onnano = pa7[4];
        }
            }

    //var top = '<div class="col-md-8 col-md-offset-2" style="font-size:15px;"> <div class="table col-xm-12 col-sm-12 col-md-12 col-lg-12"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3"><tr class="danger" style="border:3px solid black"><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">হাল দাবী </th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#235a01; color:white;"">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;"">সুদ</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">অন্যান্য</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">মোট দাবী টাকা</th></tr>'; //rad is radius
    //var top= '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
    //var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</td></tr>';
    //var a2='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
    //var a3='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
    //var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
    //var a5='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td></tr></table></div>';
    //var a6='';
    ////
    //
    //
    var top= '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
    var a1='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+ hall_dabi +'</td></tr>';
    var a2='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ bakeya  +'</td></tr>';
    var a3='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">'+ intarest +'</td></tr>';
    var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+ onnano +'</td></tr>';
    var a5='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">'+ total +'</td></tr></table></div>';
    var a6='';

    //var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  +'</td>';
    //var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td>';
    //var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td>';
    //var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td>';


    var a6='<div style="text-align: center;"><h style=" color: black; font-size: 17px;">'+'</h></div>'

    var a=top+a1+a2+a3+a4+a5;
    result = document.getElementById('result');
    result.innerHTML = a;

    result_text = document.getElementById('result_text');
    result_text.innerHTML = a6;
}