function part5(input_year, input_area) {
	
	
	var area = Number(document.getElementById('areaKrishi').value);
            var year = Number(document.getElementById('year').value);
	
			
			input_area=area;	
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