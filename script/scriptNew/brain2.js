function TaxAgriculture() {






    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);
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

            text_msg='আপনার ভূমি উন্নয়ন কর মওকুফ। শুধুমাত্র বার্ষিক ২/- হারে দাখিলা ফি ধরা হয়েছে।';

        }
        else if (input_year <= 1421 && input_year >= 1402) {
            input_year = 1421 - input_year + 1;
            var pa6 = part6(input_year, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1] + pa6[1];
            var intarest = pa7[2] + pa6[2];
            var total = pa7[3] + pa6[3];
            var onnano = pa7[4] + pa6[4];

        }
        else if (input_year==1401){
            input_year=1;
            var pa5 = part5(input_year, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1]+pa6[1]+pa5[1];
            var intarest = pa7[2]+pa6[2]+pa5[2];
            var total = pa7[3]+pa6[3]+pa5[3];
            var onnano = pa7[4]+pa6[4]+pa5[4];

        }
        else if (input_year<=1400 && input_year>=1398 ){
            input_year=1400-input_year+1;
            var pa4 = part4(input_year, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1];
            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2];
            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3];
            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4];

        }
        else if (input_year<=1397 && input_year>=1394 ){
            input_year=1397-input_year+1;
            var pa3 = part3(input_year, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1];
            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2];
            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3];
            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4];

        }
        else if (input_year<=1393 && input_year>=1389 ){
            input_year=1393-input_year+1;
            var pa2 = part2(input_year, input_area);
            var pa3 = part3(4, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);


            var hall_dabi = pa7[0];
            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1]+pa2[1];
            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2]+pa2[2];
            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3]+pa2[3];
            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4]+pa2[4];

        }

        else{

            input_year=1389-input_year+1;
            var pa1 = part1(input_year, input_area);
            var pa2 = part2(5, input_area);
            var pa3 = part3(4, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1]+pa6[1]+pa5[1]+pa4[1]+pa3[1]+pa2[1]+pa1[1];
            var intarest = pa7[2]+pa6[2]+pa5[2]+pa4[2]+pa3[2]+pa2[2]+pa1[2];
            var total = pa7[3]+pa6[3]+pa5[3]+pa4[3]+pa3[3]+pa2[3]+pa1[3];
            var onnano = pa7[4]+pa6[4]+pa5[4]+pa4[4]+pa3[4]+pa2[4]+pa1[4];

            //echo "if if if  working"."<br>";
        }
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



//part 1 method start
function part1() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);

    //input_area=area;
    year=input_year ;
    if(input_area<=200)
    {
        satangso=0.03;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;

        if(total<1)
        {
            total=1;
        }

        return [hall_dabi,bakeya,intarest,total,onnano];
    }



    else if(input_area>=201 && input_area<=500 )
    {
        satangso=0.15;
        input_area=input_area-200;
        hall_dabi= (input_area * satangso)+6;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else if(input_area>=501 && input_area<=1000)
    {
        satangso=0.36;
        input_area=input_area-500;
        hall_dabi=( input_area * satangso)+51;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else if(input_area>=1001 && input_area<=1500)
    {
        satangso=0.6;
        input_area=input_area-1000;
        hall_dabi= (input_area * satangso)+231;
        bakeya= hall_dabi*year;
        total=hall_dabi*( pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else if(input_area>=1501 && input_area<=2500)
    {
        satangso=0.95;
        input_area=input_area-1500;
        hall_dabi= (input_area * satangso)+531;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else
    {
        satangso=1.45;
        input_area=input_area-2500;
        hall_dabi= (input_area * satangso)+1481;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-(hall_dabi+bakeya);
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }

}

//part 1 method end



//part 2 method start

function part2() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;
    year=input_year ;
    if(input_area<=200)
    {
        satangso=0.03;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;

        if(total<1)
        {
            total=1;
        }

        return [hall_dabi,bakeya,intarest,total,onnano];
    }



    else if(input_area>=201 && input_area<=500 )
    {
        satangso=0.15;
        input_area=input_area-200;
        hall_dabi= (input_area * satangso)+6;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else if(input_area>=501 && input_area<=1000)
    {
        satangso=0.36;
        input_area=input_area-500;
        hall_dabi=( input_area * satangso)+51;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else if(input_area>=1001 && input_area<=1500)
    {
        satangso=0.6;
        input_area=input_area-1000;
        hall_dabi= (input_area * satangso)+231;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else if(input_area>=1501 && input_area<=2500)
    {
        satangso=0.95;
        input_area=input_area-1500;
        hall_dabi= (input_area * satangso)+531;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else
    {
        satangso=1.45;
        input_area=input_area-2500;
        hall_dabi= (input_area * satangso)+1481;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+29))-pow((1+.0625),29))/0.0625;
        intarest=total-(hall_dabi+bakeya);
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }

}


//part 2 method end





//part 3 method start



function part3() {
    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;
    year=input_year ;
    if( input_area<=200)
    {
        satangso=0.03;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+25))-pow((1+.0625),25))/0.0625;
        intarest=total-bakeya;
        onnano=0;
        if(total<1)
        {
            total=1;
        }


        return [hall_dabi,bakeya,intarest,total,onnano];


    }

    else if(input_area>=201 && input_area<=500 )
    {
        satangso=0.3;

        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+25))-pow((1+.0625),25))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else if(input_area>=501 && input_area<=1000)
    {
        satangso=0.5;

        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+25))-pow((1+.0625),25))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }

    else
    {
        satangso=2;

        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+25))-pow((1+.0625),25))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }

}

//part 3 method end





//part 4 method start

function part4() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;
    year=input_year ;
    if(input_area<=825)
    {
        hall_dabi= 2;
        intarest= 0;
        bakeya= 2*year;
        total=hall_dabi+bakeya-2;
        hall_dabi=0;
        bakeya=0;
        onnano=total;

        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else if(input_area<=1000 && input_area>=826 )
    {
        satangso=0.5;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+22))-pow((1+.0625),22))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else
    {
        satangso=0.5;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+22))-pow((1+.0625),22))/0.0625;
        intarest=total-bakeya;
        onnano=0;


        return [hall_dabi,bakeya,intarest,total,onnano];
    }

}

//part 4 method end




//part 5 method start

function part5() {


    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;
    year=1 ;
    if(input_area<=825)
    {
        hall_dabi= 2;
        intarest= 0;
        bakeya= 2*year;
        total=hall_dabi+bakeya-2;

        hall_dabi=0;
        bakeya=0;
        onnano=total;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else
    {
        satangso=1;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        total=hall_dabi*(pow((1+.0625),(year+21))-pow((1+.0625),21))/0.0625;
        intarest=total-bakeya;
        onnano=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }
}

//part 5 method end



//part 6 method start

function part6() {
    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;

    year=input_year ;
    if(input_area<=825)
    {
        hall_dabi= 2;
        intarest= 0;
        bakeya= 2*year;
        total=hall_dabi+bakeya-2;
        onnano=total;
        hall_dabi=0;
        bakeya=0;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else if(input_area<=1000 && input_area>=826 )
    {
        satangso=0.5;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        //total=hall_dabi*(pow((1+.0625),(year+1))-1)/0.0625;
        total=hall_dabi*(pow((1+.0625),(year+1))-pow((1+.0625),1))/0.0625;
        //total=hall_dabi*(pow((1+.0625),(year+25))-pow((1+.0625),25))/0.0625;
        onnano=0;
        intarest=total-bakeya;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }
    else
    {
        satangso=1;
        hall_dabi= input_area * satangso;
        bakeya= hall_dabi*year;
        //total=hall_dabi*(pow((1+.0625),(year+1))-1)/0.0625;
        total=hall_dabi*(pow((1+.0625),(year+1))-pow((1+.0625),1))/0.0625;
        onnano=0;
        intarest=total-bakeya;



        return [hall_dabi,bakeya,intarest,total,onnano];
    }
}

//part 6 method end




//part 7 method start
function part7() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;

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

//part 7 method end



//part 71 method start

function part71() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('year').value);        //
    //
    //input_area=area;

    year=input_year ;
    satangso=2;
    hall_dabi= input_area * satangso;
    bakeya= hall_dabi*year;
    total=hall_dabi*(pow((1+.0625),(year+1))-1)/0.0625;
    onnano=0;
    intarest=total-(hall_dabi+bakeya);

    return [hall_dabi,bakeya,intarest,total,onnano];

}

//part 71 method end


