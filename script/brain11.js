function part1(input_year, input_area) {

    // var input_area = Number(document.getElementById('areaKrishi').value);
    // var input_year = Number(document.getElementById('yearKrishi').value);

    var year_part1 = input_year;
    var input_area_part1 = input_area * 0.0303;
    if (input_area_part1 <= 25) {
        var satangso = 0.9;
        var hall_dabi = input_area_part1 * satangso;
        var bakeya = hall_dabi * year_part1;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part1 + 34)) - Math.pow((1 + .0625), 34))) / 0.0625;

        var intarest = total - bakeya;
        var onnano = 0;
        alert(intarest);
        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        alert('year' + year_part1);
        var satangso = 5;
        var hall_dabi = input_area_part1 * satangso;
        var bakeya = hall_dabi * year_part1;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part1 + 34)) - Math.pow((1 + .0625), 34))) / 0.0625;

        var intarest = total - bakeya;
        var onnano = 0;
        alert('hall_dabi' + hall_dabi);
        alert(bakeya);
        alert(total);
        alert(intarest);
        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part2(input_year, input_area) {
    var year_part2 = input_year;
    var input_area_part2 = input_area;
    if (input_area_part2 <= 200) {
        var satangso = 0.03;
        var hall_dabi = input_area_part2 * satangso;
        var bakeya = hall_dabi * year_part2;
        var total = hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29)) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;

        if (total < 1) {
            total = 1;
        }
        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else if (input_area_part2 >= 201 && input_area_part2 <= 500) {
        var satangso = 0.15;
        var input_area_part2 = input_area_part2 - 200;
        var hall_dabi = (input_area_part2 * satangso) + 6;
        var bakeya = hall_dabi * year_part2;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;

        return [hall_dabi, bakeya, intarest, total, onnano];

    }
    else if (input_area_part2 >= 501 && input_area_part2 <= 1000) {
        var satangso = 0.36;
        var input_area_part2 = input_area_part2 - 500;
        var hall_dabi = ( input_area_part2 * satangso) + 51;
        var bakeya = hall_dabi * year_part2;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else if (input_area_part2 >= 1001 && input_area_part2 <= 1500) {
        var satangso = 0.6;
        var input_area_part2 = input_area_part2 - 1000;
        var hall_dabi = (input_area_part2 * satangso) + 231;
        var bakeya = hall_dabi * year_part2;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }

    else if (input_area_part2 >= 1501 && input_area_part2 <= 2500) {
        var satangso = 0.95;
        var input_area_part2 = input_area_part2 - 1500;
        var hall_dabi = (input_area_part2 * satangso) + 531;
        var bakeya = hall_dabi * year_part2;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }

    else {
        var satangso = 1.45;
        var input_area_part2 = input_area_part2 - 2500;
        var hall_dabi = (input_area_part2 * satangso) + 1481;
        var bakeya = hall_dabi * year_part2;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_part2 + 29)) - Math.pow((1 + .0625), 29))) / 0.0625;
        var intarest = total - (hall_dabi + bakeya);
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part3(input_year, input_area) {

    var year_Part3 = input_year;
    var input_area_Part3 = input_area;
    if (input_area_Part3 <= 200) {
        var satangso = 0.03;
        var hall_dabi = input_area_Part3 * satangso;
        var bakeya = hall_dabi * year_Part3;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part3 + 25)) - Math.pow((1 + .0625), 25))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        if (total < 1) {
            total = 1;
        }
        // alert(hall_dabi);
        // alert(bakeya);
        // alert(intarest);
        // alert(total);

        return [hall_dabi, bakeya, intarest, total, onnano];
    }

    else if (input_area_Part3 >= 201 && input_area_Part3 <= 500) {
        var satangso = 0.03;
        var hall_dabi = input_area_Part3 * satangso;
        var bakeya = hall_dabi * year_Part3;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part3 + 25)) - Math.pow((1 + .0625), 25))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else if (input_area_Part3 >= 501 && input_area_Part3 <= 1000) {
        var satangso = 0.5;
        var hall_dabi = input_area_Part3 * satangso;
        var bakeya = hall_dabi * year_Part3;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part3 + 25)) - Math.pow((1 + .0625), 25))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;

        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        var satangso = 2;
        var hall_dabi = input_area_Part3 * satangso;
        var bakeya = hall_dabi * year_Part3;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part3 + 25)) - Math.pow((1 + .0625), 25))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;

        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part4(input_year, input_area) {

    var year_Part4 = input_year;
    var input_area_Part4 = input_area;
    if (input_area_Part4 <= 825) {
        var hall_dabi = 2;
        var intarest = 0;
        var bakeya = 2 * year_Part4;
        var total = hall_dabi + bakeya - 2;
        var hall_dabi = 0;
        var bakeya = 0;
        var onnano = total;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }

    else if (input_area_Part4 <= 1000 && input_area_Part4 >= 826) {
        var satangso = 0.5;
        var hall_dabi = input_area_Part4 * satangso;
        var bakeya = hall_dabi * year_Part4;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part4 + 22)) - Math.pow((1 + .0625), 22))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        var satangso = 0.5;
        var hall_dabi = input_area_Part4 * satangso;
        var bakeya = hall_dabi * year_Part4;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part4 + 22)) - Math.pow((1 + .0625), 22))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part5(input_year, input_area) {
    var year_Part5 = 1;
    var input_area_Part5 = input_area;
    if (input_area_Part5 <= 825) {
        var hall_dabi = 2;
        var intarest = 0;
        var bakeya = 2 * year_Part5;
        var total = hall_dabi + bakeya - 2;
        var hall_dabi = 0;
        var bakeya = 0;
        var onnano = total;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        var satangso = 1;
        var hall_dabi = input_area_Part5 * satangso;
        var bakeya = hall_dabi * year_Part5;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part5 + 21)) - Math.pow((1 + .0625), 21))) / 0.0625;
        var intarest = total - bakeya;
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part6(input_year, input_area) {

    var year_Part6 = input_year;
    var input_area_Part6 = input_area;
    if (input_area_Part6 <= 825) {
        var hall_dabi = 2;
        var intarest = 0;
        var bakeya = 2 * year_Part6;
        var total = hall_dabi + bakeya - 2;
        var onnano = total;
        var hall_dabi = 0;
        var bakeya = 0;

        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else if (input_area_Part6 <= 1000 && input_area_Part6 >= 826) {
        var satangso = 0.5;
        var hall_dabi = input_area_Part6 * satangso;
        var bakeya = hall_dabi * year_Part6;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part6 + 1)) - Math.pow((1 + .0625), 1))) / 0.0625;
        var onnano = 0;
        var intarest = total - bakeya;

        alert(hall_dabi);
        alert(bakeya);
        alert(intarest);
        alert(total);
        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        var satangso = 1;
        var hall_dabi = input_area_Part6 * satangso;
        var bakeya = hall_dabi * year_Part6;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part6 + 1)) - Math.pow((1 + .0625), 1))) / 0.0625;
        var onnano = 0;
        var intarest = total - bakeya;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part7(input_year, input_area) {
    var year_Part7 = input_year;
    var input_area_Part7 = input_area;
    if (input_area_Part7 <= 825) {
        var hall_dabi = 10;
        var intarest = 0;
        var bakeya = 10 * year_Part7;
        var total = hall_dabi + bakeya;
        var onnano = total;
        var hall_dabi = 0;
        var bakeya = 0;

        return [hall_dabi, bakeya, intarest, total, onnano];
    }
    else {
        var satangso = 2;
        var hall_dabi = input_area_Part7 * satangso;
        var bakeya = hall_dabi * year_Part7;
        var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part7 + 1)) - 1)) / 0.0625;
        var intarest = total - (bakeya + hall_dabi);
        var onnano = 0;


        return [hall_dabi, bakeya, intarest, total, onnano];
    }
}

function part71(input_year, input_area) {

    var year_Part71 = input_year;
    var area_Part71 = input_area;
    var satangso = 2;
    var hall_dabi = area_Part71 * satangso;
    var bakeya = hall_dabi * year_Part71;
    var total = (hall_dabi * (Math.pow((1 + .0625), (year_Part71 + 1)) - 1)) / 0.0625;
    var onnano = 0;
    var intarest = total - (hall_dabi + bakeya);


    return [hall_dabi, bakeya, intarest, total, onnano];


}

function TaxAgriculture() {

    var input_area = Number(document.getElementById('areaKrishi').value);
    var input_year = Number(document.getElementById('yearKrishi').value);
    var areaBanijjo = Number(document.getElementById('areaBanijjo').value);
    input_year = input_year + 1;
    
    var total_hall_dabi = 0;
    var total_bakeya = 0;
    var total_intarest = 0;
    var total_onnanno = 0;
    var grand_total = 0;

    var hall_dabi = 0;
    var bakeya = 0;
    var intarest = 0;
    var total = 0;
    var onnano = 0;

    var hall_dabi1 = 0;
    var bakeya1 = 0;
    var intarest1 = 0;
    var onnano1 = 0;
    var total1 = 0;


    if (input_area > 0 && input_area !== null) {
        if (input_year == 1422) {
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1];
            var intarest = pa7[2];
            var total = pa7[3];
            var onnano = pa7[4];

        }
        else if (input_year <= 1421 && input_year >= 1402) {
            var pa6 = part6(1421 - input_year + 1, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1] + pa6[1];
            var intarest = pa7[2] + pa6[2];
            var total = pa7[3] + pa6[3];
            var onnano = pa7[4] + pa6[4];

        }
        else if (input_year == 1401) {
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            var hall_dabi = pa7[0];
            var bakeya = pa7[1] + pa6[1] + pa5[1];
            var intarest = pa7[2] + pa6[2] + pa5[2];
            var total = pa7[3] + pa6[3] + pa5[3];
            var onnano = pa7[4] + pa6[4] + pa5[4];

        }
        else if (input_year <= 1400 && input_year >= 1398) {
            var pa4 = part4(1400 - input_year + 1, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            hall_dabi = pa7[0];
            bakeya = pa7[1] + pa6[1] + pa5[1] + pa4[1];
            intarest = pa7[2] + pa6[2] + pa5[2] + pa4[2];
            total = pa7[3] + pa6[3] + pa5[3] + pa4[3];
            onnano = pa7[4] + pa6[4] + pa5[4] + pa4[4];

        }
        else if (input_year <= 1397 && input_year >= 1394) {
            var pa3 = part3(1397 - input_year + 1, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            hall_dabi = pa7[0];
            bakeya = pa7[1] + pa6[1] + pa5[1] + pa4[1] + pa3[1];
            intarest = pa7[2] + pa6[2] + pa5[2] + pa4[2] + pa3[2];
            total = pa7[3] + pa6[3] + pa5[3] + pa4[3] + pa3[3];
            onnano = pa7[4] + pa6[4] + pa5[4] + pa4[4] + pa3[4];

        }
        else if (input_year <= 1393 && input_year >= 1389) {
            var pa2 = part2(1393 - input_year + 1, input_area);
            var pa3 = part3(4, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);


            hall_dabi = pa7[0];
            bakeya = pa7[1] + pa6[1] + pa5[1] + pa4[1] + pa3[1] + pa2[1];
            intarest = pa7[2] + pa6[2] + pa5[2] + pa4[2] + pa3[2] + pa2[2];
            total = pa7[3] + pa6[3] + pa5[3] + pa4[3] + pa3[3] + pa2[3];
            onnano = pa7[4] + pa6[4] + pa5[4] + pa4[4] + pa3[4] + pa2[4];

        }

        else {
            var pa1 = part1(1389 - input_year + 1, input_area);
            var pa2 = part2(5, input_area);
            var pa3 = part3(4, input_area);
            var pa4 = part4(3, input_area);
            var pa5 = part5(1, input_area);
            var pa6 = part6(20, input_area);
            var pa7 = part7(0, input_area);
            hall_dabi = pa7[0];
            bakeya = pa7[1] + pa6[1] + pa5[1] + pa4[1] + pa3[1] + pa2[1] + pa1[1];
            intarest = pa7[2] + pa6[2] + pa5[2] + pa4[2] + pa3[2] + pa2[2] + pa1[2];
            total = pa7[3] + pa6[3] + pa5[3] + pa4[3] + pa3[3] + pa2[3] + pa1[3];
            onnano = pa7[4] + pa6[4] + pa5[4] + pa4[4] + pa3[4] + pa2[4] + pa1[4];

        }
    }

    if (areaBanijjo > 0) {

        input_area = areaBanijjo;

        if (input_year == 1422) {

            var pa71 = part71(0, input_area);
            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1];
            intarest1 = pa71[2];
            total1 = pa71[3];
            onnano1 = pa71[4];

        }

        else if (input_year <= 1421 && input_year >= 1402) {
            var pa61 = part6(1421 - input_year + 1, input_area);
            var pa71 = part71(0, input_area);
            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1];
            intarest1 = pa71[2] + pa61[2];
            total1 = pa71[3] + pa61[3];
            onnano1 = pa71[4] + pa61[4];

        }

        else if (input_year == 1401) {
            var pa51 = part5(1, input_area);
            var pa61 = part6(20, input_area);
            var pa71 = part71(0, input_area);
            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1] + pa51[1];
            intarest1 = pa71[2] + pa61[2] + pa51[2];
            total1 = pa71[3] + pa61[3] + pa51[3];
            onnano1 = pa71[4] + pa61[4] + pa51[4];

        }

        else if (input_year <= 1400 && input_year >= 1398) {
            var pa41 = part4(1400 - input_year + 1, input_area);
            var pa51 = part5(1, input_area);
            var pa61 = part6(20, input_area);
            var pa71 = part71(0, input_area);
            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
            intarest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
            total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
            onnano1 = pa71[4] + pa61[4] + pa51[4] + pa41[4];

        }

        else if (input_year <= 1397 && input_year >= 1394) {
            var pa31 = part3(1397 - input_year + 1, input_area);
            var pa41 = part4(3, input_area);
            var pa51 = part5(1, input_area);
            var pa61 = part6(20, input_area);
            var pa71 = part71(0, input_area);
            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
            intarest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
            total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
            onnano1 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];

        }

        else if (input_year <= 1393 && input_year >= 1389) {
            var pa21 = part2(1393 - input_year + 1, input_area);
            var pa31 = part3(4, input_area);
            var pa41 = part4(3, input_area);
            var pa51 = part5(1, input_area);
            var pa61 = part6(20, input_area);
            var pa71 = part71(0, input_area);


            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1] + pa21[1];
            intarest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2] + pa21[2];
            total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3] + pa21[3];
            onnano1 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4] + pa21[4];

        }

        else {

            var pa11 = part1(1389 - input_year + 1, input_area);
            var pa21 = part2(5, input_area);
            var pa31 = part3(4, input_area);
            var pa41 = part4(3, input_area);
            var pa51 = part5(1, input_area);
            var pa61 = part6(20, input_area);
            var pa71 = part71(0, input_area);

            hall_dabi1 = pa71[0];
            bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1] + pa21[1] + pa11[1];
            intarest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2] + pa21[2] + pa11[2];
            total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3] + pa21[3] + pa11[3];
            onnano1 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4] + pa21[4] + pa11[4];

            // alert(pa71[2]);
            // alert(pa61[2]);
            // alert(pa51[2]);
            // alert(pa41[2]);
            // alert(pa31[2]);
            // alert(pa21[2]);
            // alert(pa11[2]);
        }
    }

    total_hall_dabi = hall_dabi + hall_dabi1;
    total_bakeya = bakeya + bakeya1;
    total_intarest = intarest + intarest1;
    total_onnanno = onnano + onnano1;
    grand_total = total + total1;
    //var Grand_total = total + total_onnanno + total_intarest;


    var top = '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
    var a1 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(total_hall_dabi * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a2 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round(total_bakeya * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a3 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(total_intarest * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a4 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">' + Math.round(total_onnanno * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a5 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round(grand_total * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr></table></div>';
    var a6 = '';

    // var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+'</td>';
    // var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+'</td>';
    // var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ '</td>';
    // var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ '</td>';
    //

    a6 = '<div style="text-align: center;"><h style=" color: black; font-size: 17px;">' + '</h></div>';

    var a = top + a1 + a2 + a3 + a4 + a5;
    var result = document.getElementById('result');
    result.innerHTML = a;

    var result_text = document.getElementById('result_text');
    result_text.innerHTML = a6;
}