function part3(input_year, input_area) {
	        var area = Number(document.getElementById('areaKrishi').value);
            var year = Number(document.getElementById('year').value);
	
			
			input_area=area;
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