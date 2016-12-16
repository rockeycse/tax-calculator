function part2(input_year,input_area) {

              //area = Number(document.getElementById('areaKrishi').value);
              //year = Number(document.getElementById('year').value);

			 year=input_year ;
	if(input_area > 200) {

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
			 var input_area=input_area-1000;
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