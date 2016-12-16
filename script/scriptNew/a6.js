function part6(input_year, input_area) {
			var area = Number(document.getElementById('areaKrishi').value);
			var year = Number(document.getElementById('year').value);


			input_area=area;

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