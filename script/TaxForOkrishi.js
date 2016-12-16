/**
 * Created by Swotsystem on 06-May-16.
 */
// function k_dhap() {
//     alert(' (ক) ঢাকা, চট্ট্রগ্রাম, নারায়ণগঞ্জ, গাজীপুর ও সিলেট সিটিকর্পোরেসন ভুক্ত এলাকা');
// }



function part22(input_year, input_area, taxRat) {

    var yearPart22 = input_year;

    var input_areaPart22 = input_area / 33;

    var taxPart22 = taxRat;

    var satangso = taxPart22;
    var hall_dabi = input_areaPart22 * satangso;
    var bakeya = hall_dabi * yearPart22;
    var total = hall_dabi * (Math.pow((1 + .0625), (yearPart22 + 34)) - Math.pow((1 + .0625), 34)) / 0.0625;

    //$total=$hall_dabi*(pow((1+.0625),($year+30))-pow((1+.0625),30))/0.0625;
    //echo
    var interest = total - bakeya;
    var onnanno = 0;

    return [hall_dabi, bakeya, interest, total, onnanno];
}

function part33(input_year, input_area, taxRat) {

    var yearPart33 = input_year;

    var input_areaPart33 = input_area;
    var taxPart33 = taxRat;

    var satangso = taxPart33;
    var hall_dabi = input_areaPart33 * satangso;
    var bakeya = hall_dabi * yearPart33;
    var total = hall_dabi * (Math.pow((1 + .0625), (yearPart33 + 31)) - Math.pow((1 + .0625), 31)) / 0.0625;

    var interest = total - bakeya;
    var onnanno = 0;

    return [hall_dabi, bakeya, interest, total, onnanno];
}

function part44(input_year, input_area, taxRat) {

    var yearPart44 = input_year;

    var input_areaPart44 = input_area;
    var taxPart44 = taxRat;

    var satangso = taxPart44;
    var hall_dabi = input_areaPart44 * satangso;
    var bakeya = hall_dabi * yearPart44;
    var total = hall_dabi * (Math.pow((1 + .0625), (yearPart44 + 22)) - Math.pow((1 + .0625), 22)) / 0.0625;

    var interest = total - bakeya;
    var onnanno = 0;

    return [hall_dabi, bakeya, interest, total, onnanno];
}

function part55(input_year, input_area, taxRat) {

    var yearPart55 = input_year;

    var input_areaPart55 = input_area;
    var taxPart55 = taxRat;

    var satangso = taxPart55;
    var hall_dabi = input_areaPart55 * satangso;
    var bakeya = hall_dabi * yearPart55;
    var total = hall_dabi * (Math.pow((1 + .0625), (yearPart55 + 21)) - Math.pow((1 + .0625), 21)) / 0.0625;

    var interest = total - bakeya;
    var onnanno = 0;

    return [hall_dabi, bakeya, interest, total, onnanno];
}

function part66(input_year, input_area, taxRat) {

    var yearPart66 = input_year;

    var input_areaPart66 = input_area;

    var taxPart66 = taxRat;

    var satangso = taxPart66;
    var hall_dabi = input_areaPart66 * satangso;
    var bakeya = hall_dabi * yearPart66;
    var total = hall_dabi * (Math.pow((1 + .0625), (yearPart66 + 1)) - Math.pow((1 + .0625), 1)) / 0.0625;

    var interest = total - bakeya;
    var onnanno = 0;

    return [hall_dabi, bakeya, interest, total, onnanno];
}

function part77(input_year, input_area, taxRat) {


    var yearPart77 = input_year;

    var input_areaPart77 = input_area;
   if(yearPart77==1)
   {
       var taxPart77 = taxRat;

       var satangso = taxPart77;
       var hall_dabi = input_areaPart77 * satangso;
       var bakeya = hall_dabi * yearPart77;
       var total = hall_dabi * (Math.pow((1 + .0625), (yearPart77 + 1)) - Math.pow((1 + .0625), 1)) / 0.0625;

       var gtotal = total + bakeya;
       var interest = total - bakeya;
       var onnanno = 0;

       return [hall_dabi, bakeya, interest, gtotal, onnanno];
   }
    else if(yearPart77==0)
   {
       var taxPart77 = taxRat;

       var satangso = taxPart77;
       var hall_dabi = input_areaPart77 * satangso;
       var bakeya = hall_dabi * yearPart77;
       var total = hall_dabi + bakeya ;
       var interest = 0;
       var onnanno = 0;

       return [hall_dabi, bakeya, interest, total, onnanno];
   }
}


function TaxNonAgriculture() {
    var input_areaCitysilpo = Number(document.getElementById('AreaCityOdhivuktoShilpo').value);

    var input_areaCityBanijjo = Number(document.getElementById('AreaCityOdhivuktoBanijjo').value);

    var input_areaCityAbasik = Number(document.getElementById('AreaCityOdhivuktoAbashik').value);

    var input_areaShilpoPouro = Number(document.getElementById('AreaZellaSadorShilpo').value);

    var input_areaBanijjoPouro = Number(document.getElementById('AreaZellaSadorBanijjo').value);

    var input_areaAbashikPouro = Number(document.getElementById('AreaZellaSadorPouroAbashik/Onnanno').value);

    var input_areaShilpoPouroOtr = Number(document.getElementById('AreaOutOfZellaPouroShilpo').value);

    var input_areaBanijjoPouroOtr = Number(document.getElementById('AreaOutOfZellaPouroBanijjo').value);

    var input_areaAbashikPouroOtr = Number(document.getElementById('AreaOutOfZellaPouroAbashik/Onnanno').value);

    var input_areaNonPouroShilpo = Number(document.getElementById('AreaNonDeclearedPouroShilpo').value);

    var input_areaNonPouroBanijjo = Number(document.getElementById('AreaNonDeclearedPouroBanijjo').value);

    var input_areaNonPouroAbashik = Number(document.getElementById('AreaNonDeclearedPouroAbashik').value);

    var input_year = Number(document.getElementById('YearOkrishi').value);

    input_year = input_year + 1;

    var hall_dabi1 = 0;
    var bakeya1 = 0;
    var interest1 = 0;
    var total1 = 0;
    var onnanno1 = 0;

    var hall_dabi2 = 0;
    var bakeya2 = 0;
    var interest2 = 0;
    var total2 = 0;
    var onnanno2 = 0;

    var hall_dabi3 = 0;
    var bakeya3 = 0;
    var interest3 = 0;
    var total3 = 0;
    var onnanno3 = 0;


    var hall_dabi4 = 0;
    var bakeya4 = 0;
    var interest4 = 0;
    var total4 = 0;
    var onnanno4 = 0;

    var hall_dabi5 = 0;
    var bakeya5 = 0;
    var interest5 = 0;
    var total5 = 0;
    var onnanno5 = 0;

    var hall_dabi6 = 0;
    var bakeya6 = 0;
    var interest6 = 0;
    var total6 = 0;
    var onnanno6 = 0;

    var hall_dabi7 = 0;
    var bakeya7 = 0;
    var interest7 = 0;
    var total7 = 0;
    var onnanno7 = 0;

    var hall_dabi8 = 0;
    var bakeya8 = 0;
    var interest8 = 0;
    var total8 = 0;
    var onnanno8 = 0;

    var hall_dabi9 = 0;
    var bakeya9 = 0;
    var interest9 = 0;
    var total9 = 0;
    var onnanno9 = 0;

    var hall_dabi10 = 0;
    var bakeya10 = 0;
    var interest10 = 0;
    var total10 = 0;
    var onnanno10 = 0;

    var hall_dabi11 = 0;
    var bakeya11 = 0;
    var interest11 = 0;
    var total11 = 0;
    var onnanno11 = 0;

    var hall_dabi12 = 0;
    var bakeya12 = 0;
    var interest12 = 0;
    var total12 = 0;
    var onnanno12 = 0;

    var grand_hall_dabi = 0;
    var grand_bakeya = 0;
    var grand_interest = 0;
    var grand_total = 0;
    var grand_onnanno = 0;


    //alert(input_year);
    if (input_year > 1423) {
        alert('Year should be less then 1423');
    }
    else {
        if (input_year >= 1423) {
            if (input_areaCitysilpo > 0) {

                var input_area = input_areaCitysilpo;
                var pa777 = part77(0, input_area, 150);
                hall_dabi1 = pa777[0];
                bakeya1 = pa777[1];
                interest1 = pa777[2];
                total1 = pa777[3];
                onnanno1 = pa777[4];
            }

            if (input_areaCityBanijjo > 0) {


                var input_area = input_areaCityBanijjo;
                var pa777 = part77(0, input_area, 300);

                hall_dabi2 = pa777[0];
                bakeya2 = pa777[1]
                interest2 = pa777[2];
                total2 = pa777[3]
                onnanno2 = pa777[4]
            }

            if (input_areaCityAbasik > 0) {


                var input_area = input_areaCityAbasik;
                var pa777 = part77(0, input_area, 60);
                hall_dabi3 = pa777[0];
                bakeya3 = pa777[1];
                interest3 = pa777[2];
                total3 = pa777[3];
                onnanno3 = pa777[4];
            }

            if (input_areaShilpoPouro > 0) {


                var input_area = input_areaShilpoPouro;
                var pa777 = part77(0, input_area, 75);
                hall_dabi4 = pa777[0];
                bakeya4 = pa777[1];
                interest4 = pa777[2];
                total4 = pa777[3];
                onnanno4 = pa777[4];
            }

            if (input_areaBanijjoPouro > 0) {


                var input_area = input_areaBanijjoPouro;
                var pa777 = part77(0, input_area, 100);
                hall_dabi5 = pa777[0];
                bakeya5 = pa777[1];
                interest5 = pa777[2];
                total5 = pa777[3];
                onnanno5 = pa777[4];
            }

            if (input_areaAbashikPouro > 0) {


                var input_area = input_areaAbashikPouro;
                var pa777 = part77(0, input_area, 20);
                hall_dabi6 = pa777[0];
                bakeya6 = pa777[1];
                interest6 = pa777[2];
                total6 = pa777[3];
                onnanno6 = pa777[4];
            }

            if (input_areaShilpoPouroOtr > 0) {

                var input_area = input_areaShilpoPouroOtr;
                var pa777 = part77(0, input_area, 40);
                hall_dabi7 = pa777[0];
                bakeya7 = pa777[1];
                interest7 = pa777[2];
                total7 = pa777[3];
                onnanno7 = pa777[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {


                var input_area = input_areaBanijjoPouroOtr;
                var pa777 = part77(0, input_area, 60);
                hall_dabi8 = pa777[0];
                bakeya8 = pa777[1];
                interest8 = pa777[2];
                total8 = pa777[3];
                onnanno8 = pa777[4];
            }

            if (input_areaAbashikPouroOtr > 0) {


                var input_area = input_areaAbashikPouroOtr;
                var pa777 = part77(0, input_area, 15);
                hall_dabi9 = pa777[0];
                bakeya9 = pa777[1];
                interest9 = pa777[2];
                total9 = pa777[3];
                onnanno9 = pa777[4];
            }

            if (input_areaNonPouroShilpo > 0) {


                var input_area = input_areaNonPouroShilpo;
                var pa777 = part77(0, input_area, 30);
                hall_dabi10 = pa777[0];
                bakeya10 = pa777[1];
                interest10 = pa777[2];
                total10 = pa777[3];
                onnanno10 = pa777[4];
            }

            if (input_areaNonPouroBanijjo > 0) {

                var input_area = input_areaNonPouroBanijjo;
                var pa777 = part77(0, input_area, 40);
                hall_dabi11 = pa777[0];
                bakeya11 = pa777[1];
                interest11 = pa777[2];
                total11 = pa777[3];
                onnanno11 = pa777[4];
            }

            if (input_areaNonPouroAbashik > 0) {


                var input_area = input_areaNonPouroAbashik;
                var pa777 = part77(0, input_area, 10);
                hall_dabi12 = pa777[0];
                bakeya12 = pa777[1];
                interest12 = pa777[2];
                total12 = pa777[3];
                onnanno12 = pa777[4];
            }
        }

       else if (input_year >= 1422) {
            if (input_areaCitysilpo > 0) {

                var input_area = input_areaCitysilpo;
                var pa777 = part77(1, input_area, 150);
                hall_dabi1 = pa777[0];
                bakeya1 = pa777[1];
                interest1 = pa777[2];
                total1 = pa777[3];
                onnanno1 = pa777[4];
            }

            if (input_areaCityBanijjo > 0) {


                var input_area = input_areaCityBanijjo;
                var pa777 = part77(1, input_area, 300);

                hall_dabi2 = pa777[0];
                bakeya2 = pa777[1]
                interest2 = pa777[2];
                total2 = pa777[3]
                onnanno2 = pa777[4]
            }

            if (input_areaCityAbasik > 0) {


                var input_area = input_areaCityAbasik;
                var pa777 = part77(1, input_area, 60);
                hall_dabi3 = pa777[0];
                bakeya3 = pa777[1];
                interest3 = pa777[2];
                total3 = pa777[3];
                onnanno3 = pa777[4];
            }

            if (input_areaShilpoPouro > 0) {


                var input_area = input_areaShilpoPouro;
                var pa777 = part77(1, input_area, 75);
                hall_dabi4 = pa777[0];
                bakeya4 = pa777[1];
                interest4 = pa777[2];
                total4 = pa777[3];
                onnanno4 = pa777[4];
            }

            if (input_areaBanijjoPouro > 0) {


                var input_area = input_areaBanijjoPouro;
                var pa777 = part77(1, input_area, 100);
                hall_dabi5 = pa777[0];
                bakeya5 = pa777[1];
                interest5 = pa777[2];
                total5 = pa777[3];
                onnanno5 = pa777[4];
            }

            if (input_areaAbashikPouro > 0) {


                var input_area = input_areaAbashikPouro;
                var pa777 = part77(1, input_area, 20);
                hall_dabi6 = pa777[0];
                bakeya6 = pa777[1];
                interest6 = pa777[2];
                total6 = pa777[3];
                onnanno6 = pa777[4];
            }

            if (input_areaShilpoPouroOtr > 0) {

                var input_area = input_areaShilpoPouroOtr;
                var pa777 = part77(1, input_area, 40);
                hall_dabi7 = pa777[0];
                bakeya7 = pa777[1];
                interest7 = pa777[2];
                total7 = pa777[3];
                onnanno7 = pa777[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {


                var input_area = input_areaBanijjoPouroOtr;
                var pa777 = part77(1, input_area, 60);
                hall_dabi8 = pa777[0];
                bakeya8 = pa777[1];
                interest8 = pa777[2];
                total8 = pa777[3];
                onnanno8 = pa777[4];
            }

            if (input_areaAbashikPouroOtr > 0) {


                var input_area = input_areaAbashikPouroOtr;
                var pa777 = part77(1, input_area, 15);
                hall_dabi9 = pa777[0];
                bakeya9 = pa777[1];
                interest9 = pa777[2];
                total9 = pa777[3];
                onnanno9 = pa777[4];
            }

            if (input_areaNonPouroShilpo > 0) {


                var input_area = input_areaNonPouroShilpo;
                var pa777 = part77(1, input_area, 30);
                hall_dabi10 = pa777[0];
                bakeya10 = pa777[1];
                interest10 = pa777[2];
                total10 = pa777[3];
                onnanno10 = pa777[4];
            }

            if (input_areaNonPouroBanijjo > 0) {

                var input_area = input_areaNonPouroBanijjo;
                var pa777 = part77(1, input_area, 40);
                hall_dabi11 = pa777[0];
                bakeya11 = pa777[1];
                interest11 = pa777[2];
                total11 = pa777[3];
                onnanno11 = pa777[4];
            }

            if (input_areaNonPouroAbashik > 0) {


                var input_area = input_areaNonPouroAbashik;
                var pa777 = part77(1, input_area, 10);
                hall_dabi12 = pa777[0];
                bakeya12 = pa777[1];
                interest12 = pa777[2];
                total12 = pa777[3];
                onnanno12 = pa777[4];
            }
        }

        else if (input_year <= 1421 && input_year >= 1402) {

            if (input_areaCitysilpo > 0) {

                var input_area = input_areaCitysilpo;
                var pa61 = part66(1421 - input_year + 1, input_area, 125);
                var pa71 = part77(1, input_area, 150);

                hall_dabi1 = pa71[0];

                bakeya1 = pa71[1] + pa61[1];
                interest1 = pa71[2] + pa61[2];
                total1 = pa71[3] + pa61[3];
                onnanno1 = pa71[4] + pa61[4];
            }

            if (input_areaCityBanijjo > 0) {

                var input_area = input_areaCityBanijjo;
                var pa61 = part66(1421 - input_year + 1, input_area, 125);
                var pa71 = part77(1, input_area, 300);
                hall_dabi2 = pa71[0];
                bakeya2 = pa71[1] + pa61[1];
                interest2 = pa71[2] + pa61[2];
                total2 = pa71[3] + pa61[3];
                onnanno2 = pa71[4] + pa61[4];
            }

            if (input_areaCityAbasik > 0) {

                var input_area = input_areaCityAbasik;
                var pa61 = part66(1421 - input_year + 1, input_area, 22);
                var pa71 = part77(1, input_area, 60);
                hall_dabi3 = pa71[0];
                bakeya3 = pa71[1] + pa61[1];
                interest3 = pa71[2] + pa61[2];
                total3 = pa71[3] + pa61[3];
                onnanno3 = pa71[4] + pa61[4];
            }

            if (input_areaShilpoPouro > 0) {

                var input_area = input_areaShilpoPouro;
                var pa61 = part66(1421 - input_year + 1, input_area, 22);
                var pa71 = part77(1, input_area, 75);
                hall_dabi4 = pa71[0];
                bakeya4 = pa71[1] + pa61[1];
                interest4 = pa71[2] + pa61[2];
                total4 = pa71[3] + pa61[3];
                onnanno4 = pa71[4] + pa61[4];
            }

            if (input_areaBanijjoPouro > 0) {

                input_area = input_areaBanijjoPouro;
                var pa61 = part66(1421 - input_year + 1, input_area, 22);
                var pa71 = part77(1, input_area, 100);
                hall_dabi5 = pa71[0];
                bakeya5 = pa71[1] + pa61[1];
                interest5 = pa71[2] + pa61[2];
                total5 = pa71[3] + pa61[3];
                onnanno5 = pa71[4] + pa61[4];
            }

            if (input_areaAbashikPouro > 0) {

                var input_area = input_areaAbashikPouro;
                var pa61 = part66(1421 - input_year + 1, input_area, 7);
                var pa71 = part77(1, input_area, 20);
                hall_dabi6 = pa71[0];
                bakeya6 = pa71[1] + pa61[1];
                interest6 = pa71[2] + pa61[2];
                total6 = pa71[3] + pa61[3];
                onnanno6 = pa71[4] + pa61[4];
            }

            if (input_areaShilpoPouroOtr > 0) {

                var input_area = input_areaShilpoPouroOtr;
                var pa61 = part66(1421 - input_year + 1, input_area, 17);
                var pa71 = part77(1, input_area, 40);
                hall_dabi7 = pa71[0];
                bakeya7 = pa71[1] + pa61[1];
                interest7 = pa71[2] + pa61[2];
                total7 = pa71[3] + pa61[3];
                onnanno7 = pa71[4] + pa61[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {
                var input_area = input_areaBanijjoPouroOtr;
                var pa61 = part66(1421 - input_year + 1, input_area, 17);
                var pa71 = part77(1, input_area, 60);
                hall_dabi8 = pa71[0];
                bakeya8 = pa71[1] + pa61[1];
                interest8 = pa71[2] + pa61[2];
                total8 = pa71[3] + pa61[3];
                onnanno8 = pa71[4] + pa61[4];
            }

            if (input_areaAbashikPouroOtr > 0) {

                var input_area = input_areaAbashikPouroOtr;
                var pa61 = part66(1421 - input_year + 1, input_area, 5);
                var pa71 = part77(1, input_area, 15);
                hall_dabi9 = pa71[0];
                bakeya9 = pa71[1] + pa61[1];
                interest9 = pa71[2] + pa61[2];
                total9 = pa71[3] + pa61[3];
                onnanno9 = pa71[4] + pa61[4];
            }

            if (input_areaNonPouroShilpo > 0) {

                var input_area = input_areaNonPouroShilpo;
                var pa61 = part66(1421 - input_year + 1, input_area, 15);
                var pa71 = part77(1, input_area, 30);
                hall_dabi10 = pa71[0];
                bakeya10 = pa71[1] + pa61[1];
                interest10 = pa71[2] + pa61[2];
                total10 = pa71[3] + pa61[3];
                onnanno10 = pa71[4] + pa61[4];
            }

            if (input_areaNonPouroBanijjo > 0) {

                var input_area = input_areaNonPouroBanijjo;
                var pa61 = part66(1421 - input_year + 1, input_area, 15);
                var pa71 = part77(1, input_area, 40);
                hall_dabi11 = pa71[0];
                bakeya11 = pa71[1] + pa61[1];
                interest11 = pa71[2] + pa61[2];
                total11 = pa71[3] + pa61[3];
                onnanno11 = pa71[4] + pa61[4];
            }

            if (input_areaNonPouroAbashik > 0) {

                var input_area = input_areaNonPouroAbashik;
                var pa61 = part66(1421 - input_year + 1, input_area, 5);
                var pa71 = part77(1, input_area, 10);
                hall_dabi12 = pa71[0];
                bakeya12 = pa71[1] + pa61[1];
                interest12 = pa71[2] + pa61[2];
                total12 = pa71[3] + pa61[3];
                onnanno12 = pa71[4] + pa61[4];
            }
        }

        else if (input_year == 1401) {

            if (input_areaCitysilpo > 0) {
                alert(input_areaCitysilpo);
                var input_area = input_areaCitysilpo;
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 150);
                hall_dabi1 = pa71[0];
                bakeya1 = pa71[1] + pa61[1] + pa51[1];
                interest1 = pa71[2] + pa61[2] + pa51[2];
                total1 = pa71[3] + pa61[3] + pa51[3];
                onnanno1 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaCityBanijjo > 0) {

                var input_area = input_areaCityBanijjo;
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 300);
                hall_dabi2 = pa71[0];
                bakeya2 = pa71[1] + pa61[1] + pa51[1];
                interest2 = pa71[2] + pa61[2] + pa51[2];
                total2 = pa71[3] + pa61[3] + pa51[3];
                onnanno2 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaCityAbasik > 0) {

                var input_area = input_areaCityAbasik;
                var pa51 = part55(1, input_area, 22);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 60);
                hall_dabi3 = pa71[0];
                bakeya3 = pa71[1] + pa61[1] + pa51[1];
                interest3 = pa71[2] + pa61[2] + pa51[2];
                total3 = pa71[3] + pa61[3] + pa51[3];
                onnanno3 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaShilpoPouro > 0) {

                var input_area = input_areaShilpoPouro;
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 75);
                hall_dabi4 = pa71[0];
                bakeya4 = pa71[1] + pa61[1] + pa51[1];
                interest4 = pa71[2] + pa61[2] + pa51[2];
                total4 = pa71[3] + pa61[3] + pa51[3];
                onnanno4 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaBanijjoPouro > 0) {

                var input_area = input_areaBanijjoPouro;
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 100);
                hall_dabi5 = pa71[0];
                bakeya5 = pa71[1] + pa61[1] + pa51[1];
                interest5 = pa71[2] + pa61[2] + pa51[2];
                total5 = pa71[3] + pa61[3] + pa51[3];
                onnanno5 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaAbashikPouro > 0) {

                var input_area = input_areaAbashikPouro;
                var pa51 = part55(1, input_area, 6.5);
                var pa61 = part66(20, input_area, 7);
                var pa71 = part77(1, input_area, 20);
                hall_dabi6 = pa71[0];
                bakeya6 = pa71[1] + pa61[1] + pa51[1];
                interest6 = pa71[2] + pa61[2] + pa51[2];
                total6 = pa71[3] + pa61[3] + pa51[3];
                onnanno6 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaShilpoPouroOtr > 0) {

                var input_area = input_areaShilpoPouroOtr;
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 40);
                hall_dabi7 = pa71[0];
                bakeya7 = pa71[1] + pa61[1] + pa51[1];
                interest7 = pa71[2] + pa61[2] + pa51[2];
                total7 = pa71[3] + pa61[3] + pa51[3];
                onnanno7 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaBanijjoPouroOtr > 0) {

                var input_area = input_areaBanijjoPouroOtr;
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 60);
                hall_dabi8 = pa71[0];
                bakeya8 = pa71[1] + pa61[1] + pa51[1];
                interest8 = pa71[2] + pa61[2] + pa51[2];
                total8 = pa71[3] + pa61[3] + pa51[3];
                onnanno8 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaAbashikPouroOtr > 0) {

                var input_area = input_areaAbashikPouroOtr;
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 6);
                var pa71 = part77(1, input_area, 15);
                hall_dabi9 = pa71[0];
                bakeya9 = pa71[1] + pa61[1] + pa51[1];
                interest9 = pa71[2] + pa61[2] + pa51[2];
                total9 = pa71[3] + pa61[3] + pa51[3];
                onnanno9 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaNonPouroShilpo > 0) {

                var input_area = input_areaNonPouroShilpo;
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 30);
                hall_dabi10 = pa71[0];
                bakeya10 = pa71[1] + pa61[1] + pa51[1];
                interest10 = pa71[2] + pa61[2] + pa51[2];
                total10 = pa71[3] + pa61[3] + pa51[3];
                onnanno10 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaNonPouroBanijjo > 0) {

                var input_area = input_areaNonPouroBanijjo;
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 40);
                hall_dabi11 = pa71[0];
                bakeya11 = pa71[1] + pa61[1] + pa51[1];
                interest11 = pa71[2] + pa61[2] + pa51[2];
                total11 = pa71[3] + pa61[3] + pa51[3];
                onnanno11 = pa71[4] + pa61[4] + pa51[4];

            }

            if (input_areaNonPouroAbashik > 0) {

                var input_area = input_areaNonPouroAbashik;
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 5);
                var pa71 = part77(1, input_area, 10);
                hall_dabi12 = pa71[0];
                bakeya12 = pa71[1] + pa61[1] + pa51[1];
                interest12 = pa71[2] + pa61[2] + pa51[2];
                total12 = pa71[3] + pa61[3] + pa51[3];
                onnanno12 = pa71[4] + pa61[4] + pa51[4];

            }
        }

        else if (input_year <= 1400 && input_year >= 1392) {

            if (input_areaCitysilpo > 0) {

                var input_area = input_areaCitysilpo;
                var pa41 = part44(1400 - input_year + 1, input_area, 100);
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 150);
                hall_dabi1 = pa71[0];
                bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno1 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaCityBanijjo > 0) {

                var input_area = input_areaCityBanijjo;
                var pa41 = part44(1400 - input_year + 1, input_area, 100);
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 300);
                hall_dabi2 = pa71[0];
                bakeya2 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest2 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total2 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno2 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaCityAbasik > 0) {
                var input_area = input_areaCityAbasik;
                var pa41 = part44(1400 - input_year + 1, input_area, 20);
                var pa51 = part55(1, input_area, 22);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 60);
                hall_dabi3 = pa71[0];
                bakeya3 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest3 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total3 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno3 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaShilpoPouro > 0) {
                var input_area = input_areaShilpoPouro;
                var pa41 = part44(1400 - input_year + 1, input_area, 20);
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 75);
                hall_dabi4 = pa71[0];
                bakeya4 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest4 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total4 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno4 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaBanijjoPouro > 0) {
                var input_area = input_areaBanijjoPouro;
                var pa41 = part44(1400 - input_year + 1, input_area, 20);
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 100);
                hall_dabi5 = pa71[0];
                bakeya5 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest5 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total5 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno5 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaAbashikPouro > 0) {
                var input_area = input_areaAbashikPouro;
                var pa41 = part44(1400 - input_year + 1, input_area, 6);
                var pa51 = part55(1, input_area, 6.5);
                var pa61 = part66(20, input_area, 7);
                var pa71 = part77(1, input_area, 20);
                hall_dabi6 = pa71[0];
                bakeya6 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest6 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total6 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno6 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaShilpoPouroOtr > 0) {
                var input_area = input_areaShilpoPouroOtr;
                var pa41 = part44(1400 - input_year + 1, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 40);
                hall_dabi7 = pa71[0];
                bakeya7 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest7 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total7 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno7 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {
                var input_area = input_areaBanijjoPouroOtr;
                var pa41 = part44(1400 - input_year + 1, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 60);

                hall_dabi8 = pa71[0];
                bakeya8 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest8 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total8 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno8 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaAbashikPouroOtr > 0) {
                var input_area = input_areaAbashikPouroOtr;
                var pa41 = part44(1400 - input_year + 1, input_area, 5);
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 6);
                var pa71 = part77(1, input_area, 15);
                hall_dabi9 = pa71[0];
                bakeya9 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest9 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total9 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno9 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaNonPouroShilpo > 0) {
                var input_area = input_areaNonPouroShilpo;
                var pa41 = part44(1400 - input_year + 1, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 30);
                hall_dabi10 = pa71[0];
                bakeya10 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest10 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total10 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno10 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaNonPouroBanijjo > 0) {
                var input_area = input_areaNonPouroBanijjo;
                var pa41 = part44(1400 - input_year + 1, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 40);
                hall_dabi11 = pa71[0];
                bakeya11 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest11 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total11 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno11 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }

            if (input_areaNonPouroAbashik > 0) {

                var input_area = input_areaNonPouroAbashik;
                var pa41 = part44(1400 - input_year + 1, input_area, 5);
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 5);
                var pa71 = part77(1, input_area, 10);
                hall_dabi12 = pa71[0];
                bakeya12 = pa71[1] + pa61[1] + pa51[1] + pa41[1];
                interest12 = pa71[2] + pa61[2] + pa51[2] + pa41[2];
                total12 = pa71[3] + pa61[3] + pa51[3] + pa41[3];
                onnanno12 = pa71[4] + pa61[4] + pa51[4] + pa41[4];
            }
        }

        else if (input_year >= 1389 && input_year <= 1391) {

            if (input_areaCitysilpo > 0) {
                var input_area = input_areaCitysilpo;

                var pa31 = part33(1391 - input_year + 1, input_area, 60);
                var pa41 = part44(9, input_area, 100);
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 150);
                hall_dabi1 = pa71[0];
                bakeya1 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest1 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total1 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno1 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];

            }

            if (input_areaCityBanijjo > 0) {
                var input_area = input_areaCityBanijjo;

                var pa31 = part33(1391 - input_year + 1, input_area, 60);
                var pa41 = part44(9, input_area, 100);
                var pa51 = part55(1, input_area, 125);
                var pa61 = part66(20, input_area, 125);
                var pa71 = part77(1, input_area, 300);
                hall_dabi2 = pa71[0];
                bakeya2 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest2 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total2 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno2 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaCityAbasik > 0) {
                var input_area = input_areaCityAbasik;

                var pa31 = part33(1391 - input_year + 1, input_area, 12);
                var pa41 = part44(9, input_area, 20);
                var pa51 = part55(1, input_area, 22);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 60);
                hall_dabi3 = pa71[0];
                bakeya3 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest3 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total3 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno3 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaShilpoPouro > 0) {
                var input_area = input_areaShilpoPouro;

                var pa31 = part33(1391 - input_year + 1, input_area, 10);
                var pa41 = part44(9, input_area, 20);
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 75);
                hall_dabi4 = pa71[0];
                bakeya4 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest4 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total4 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno4 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaBanijjoPouro > 0) {
                var input_area = input_areaBanijjoPouro;

                var pa31 = part33(1391 - input_year + 1, input_area, 10);
                var pa41 = part44(9, input_area, 20);
                var pa51 = part55(1, input_area, 22.5);
                var pa61 = part66(20, input_area, 22);
                var pa71 = part77(1, input_area, 100);
                hall_dabi5 = pa71[0];
                bakeya5 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest5 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total5 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno5 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaAbashikPouro > 0) {
                var input_area = input_areaAbashikPouro;

                var pa31 = part33(1391 - input_year + 1, input_area, 4);
                var pa41 = part44(9, input_area, 6);
                var pa51 = part55(1, input_area, 6.5);
                var pa61 = part66(20, input_area, 7);
                var pa71 = part77(1, input_area, 20);
                hall_dabi6 = pa71[0];
                bakeya6 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest6 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total6 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno6 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaShilpoPouroOtr > 0) {

                var input_area = input_areaShilpoPouroOtr;
                var pa31 = part33(1391 - input_year + 1, input_area, 8);
                var pa41 = part44(9, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 40);
                hall_dabi7 = pa71[0];
                bakeya7 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest7 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total7 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno7 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {
                var input_area = input_areaBanijjoPouroOtr;

                var pa31 = part33(1391 - input_year + 1, input_area, 8);
                var pa41 = part44(9, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 17);
                var pa71 = part77(1, input_area, 60);
                hall_dabi8 = pa71[0];
                bakeya8 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest8 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total8 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno8 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaAbashikPouroOtr > 0) {
                var input_area = input_areaAbashikPouroOtr;

                var pa31 = part33(1391 - input_year + 1, input_area, 3);
                var pa41 = part44(9, input_area, 5);
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 6);
                var pa71 = part77(1, input_area, 15);
                hall_dabi9 = pa71[0];
                bakeya9 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest9 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total9 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno9 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaNonPouroShilpo > 0) {
                var input_area = input_areaNonPouroShilpo;

                var pa31 = part33(1391 - input_year + 1, input_area, 8);
                var pa41 = part44(9, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 30);
                hall_dabi10 = pa71[0];
                bakeya10 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest10 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total10 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno10 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaNonPouroBanijjo > 0) {
                var input_area = input_areaNonPouroBanijjo;

                var pa31 = part33(1391 - input_year + 1, input_area, 8);
                var pa41 = part44(9, input_area, 15);
                var pa51 = part55(1, input_area, 17);
                var pa61 = part66(20, input_area, 15);
                var pa71 = part77(1, input_area, 40);
                hall_dabi11 = pa71[0];
                bakeya11 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest11 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total11 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno11 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

            if (input_areaNonPouroAbashik > 0) {
                var input_area = input_areaNonPouroAbashik;
                var pa31 = part33(1391 - input_year + 1, input_area, 3);
                var pa41 = part44(9, input_area, 5);
                var pa51 = part55(1, input_area, 5.25);
                var pa61 = part66(20, input_area, 5);
                var pa71 = part77(1, input_area, 10);

                hall_dabi12 = pa71[0];
                bakeya12 = pa71[1] + pa61[1] + pa51[1] + pa41[1] + pa31[1];
                interest12 = pa71[2] + pa61[2] + pa51[2] + pa41[2] + pa31[2];
                total12 = pa71[3] + pa61[3] + pa51[3] + pa41[3] + pa31[3];
                onnanno12 = pa71[4] + pa61[4] + pa51[4] + pa41[4] + pa31[4];
            }

        }

        else {
            if (input_areaCitysilpo > 0) {
                var input_area = input_areaCitysilpo;

                var pa222 = part22(1388 - input_year + 1, input_area, 500);
                var pa333 = part33(3, input_area, 60);
                var pa444 = part44(9, input_area, 100);
                var pa555 = part55(1, input_area, 125);
                var pa666 = part66(20, input_area, 125);
                var pa777 = part77(1, input_area, 150);
                hall_dabi1 = pa777[0];
                bakeya1 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest1 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total1 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno1 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];

            }

            if (input_areaCityBanijjo > 0) {
                var input_area = input_areaCityBanijjo;

                var pa222 = part22(1388 - input_year + 1, input_area, 500);
                var pa333 = part33(3, input_area, 60);
                var pa444 = part44(9, input_area, 100);
                var pa555 = part55(1, input_area, 125);
                var pa666 = part66(20, input_area, 125);
                var pa777 = part77(1, input_area, 300);
                hall_dabi2 = pa777[0];
                bakeya2 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest2 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total2 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno2 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];

            }

            if (input_areaCityAbasik > 0) {
                var input_area = input_areaCityAbasik;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 12);
                var pa444 = part44(9, input_area, 20);
                var pa555 = part55(1, input_area, 22);
                var pa666 = part66(20, input_area, 22);
                var pa777 = part77(1, input_area, 60);
                hall_dabi3 = pa777[0];
                bakeya3 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest3 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total3 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno3 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaShilpoPouro > 0) {
                var input_area = input_areaShilpoPouro;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 10);
                var pa444 = part44(9, input_area, 20);
                var pa555 = part55(1, input_area, 22.5);
                var pa666 = part66(20, input_area, 22);
                var pa777 = part77(1, input_area, 75);
                hall_dabi4 = pa777[0];
                bakeya4 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest4 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total4 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno4 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaBanijjoPouro > 0) {
                var input_area = input_areaBanijjoPouro;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 10);
                var pa444 = part44(9, input_area, 20);
                var pa555 = part55(1, input_area, 22.5);
                var pa666 = part66(20, input_area, 22);
                var pa777 = part77(1, input_area, 100);
                hall_dabi5 = pa777[0];
                bakeya5 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest5 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total5 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno5 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaAbashikPouro > 0) {
                var input_area = input_areaAbashikPouro;

                var pa222 = part22(1388 - input_year + 1, input_area, 50);
                var pa333 = part33(3, input_area, 4);
                var pa444 = part44(9, input_area, 6);
                var pa555 = part55(1, input_area, 6.5);
                var pa666 = part66(20, input_area, 7);
                var pa777 = part77(1, input_area, 20);
                hall_dabi6 = pa777[0];
                bakeya6 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest6 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total6 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno6 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            // Area shilpo pouro o onnanno.
            if (input_areaShilpoPouroOtr > 0) {
                var input_area = input_areaShilpoPouroOtr;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 8);
                var pa444 = part44(9, input_area, 15);
                var pa555 = part55(1, input_area, 17);
                var pa666 = part66(20, input_area, 17);
                var pa777 = part77(1, input_area, 40);
                hall_dabi7 = pa777[0];
                bakeya7 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest7 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total7 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno7 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaBanijjoPouroOtr > 0) {
                var input_area = input_areaBanijjoPouroOtr;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 8);
                var pa444 = part44(9, input_area, 15);
                var pa555 = part55(1, input_area, 17);
                var pa666 = part66(20, input_area, 17);
                var pa777 = part77(1, input_area, 60);
                hall_dabi8 = pa777[0];
                bakeya8 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest8 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total8 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno8 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaAbashikPouroOtr > 0) {
                var input_area = input_areaAbashikPouroOtr;

                var pa222 = part22(1388 - input_year + 1, input_area, 50);
                alert(pa222[0]);
                var pa333 = part33(3, input_area, 3);
                var pa444 = part44(9, input_area, 5);
                var pa555 = part55(1, input_area, 5.25);
                var pa666 = part66(20, input_area, 6);
                var pa777 = part77(1, input_area, 15);
                hall_dabi9 = pa777[0];
                bakeya9 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest9 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total9 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno9 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaNonPouroShilpo > 0) {
                var input_area = input_areaNonPouroShilpo;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 8);
                var pa444 = part44(9, input_area, 15);
                var pa555 = part55(1, input_area, 17);
                var pa666 = part66(20, input_area, 15);
                var pa777 = part77(1, input_area, 30);
                hall_dabi10 = pa777[0];
                bakeya10 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest10 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total10 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno10 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaNonPouroBanijjo > 0) {
                var input_area = input_areaNonPouroBanijjo;

                var pa222 = part22(1388 - input_year + 1, input_area, 100);
                var pa333 = part33(3, input_area, 8);
                var pa444 = part44(9, input_area, 15);
                var pa555 = part55(1, input_area, 17);
                var pa666 = part66(20, input_area, 15);
                var pa777 = part77(1, input_area, 40);
                hall_dabi11 = pa777[0];
                bakeya11 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest11 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total11 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno11 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }

            if (input_areaNonPouroAbashik > 0) {
                var input_area = input_areaNonPouroAbashik;

                var pa222 = part22(1388 - input_year + 1, input_area, 50);
                var pa333 = part33(3, input_area, 3);
                var pa444 = part44(9, input_area, 5);
                var pa555 = part55(1, input_area, 5.25);
                var pa666 = part66(20, input_area, 5);
                var pa777 = part77(1, input_area, 10);

                hall_dabi12 = pa777[0];
                bakeya12 = pa777[1] + pa666[1] + pa555[1] + pa444[1] + pa333[1] + pa222[1];
                interest12 = pa777[2] + pa666[2] + pa555[2] + pa444[2] + pa333[2] + pa222[2];
                total12 = pa777[3] + pa666[3] + pa555[3] + pa444[3] + pa333[3] + pa222[3];
                onnanno12 = pa777[4] + pa666[4] + pa555[4] + pa444[4] + pa333[4] + pa222[4];
            }
        }


        grand_hall_dabi = hall_dabi1 + hall_dabi2 + hall_dabi3 + hall_dabi4 + hall_dabi5 + hall_dabi6 + hall_dabi7 + hall_dabi8 + hall_dabi9 + hall_dabi10 + hall_dabi11 + hall_dabi12;
        grand_bakeya = bakeya1 + bakeya2 + bakeya3 + bakeya4 + bakeya5 + bakeya6 + bakeya7 + bakeya8 + bakeya9 + bakeya10 + bakeya11 + bakeya12;
        grand_interest = interest1 + interest2 + interest3 + interest4 + interest5 + interest6 + interest7 + interest8 + interest9 + interest10 + interest11 + interest12;
        grand_onnanno = onnanno1 + onnanno2 + onnanno3 + onnanno4 + onnanno5 + onnanno6 + onnanno7 + onnanno8 + onnanno9 + onnanno10 + onnanno11 + onnanno12;
        grand_total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12;


        var top = '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
        var a1 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(grand_hall_dabi * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
        var a2 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round(grand_bakeya * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
        var a3 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(grand_interest * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
        var a4 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">' + Math.round(grand_onnanno * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
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
}