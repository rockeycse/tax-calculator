function part71($input_year, $input_area) {
	
	        var area = Number(document.getElementById('areaKrishi').value);
			var year = Number(document.getElementById('year').value);


			input_area=area;
			
			$year=$input_year ;
			$satangso=2;
			$hall_dabi= $input_area * $satangso;
			$bakeya= $hall_dabi*$year;
			$total=$hall_dabi*(pow((1+.0625),($year+1))-1)/0.0625;
			$onnano=0;
			$intarest=$total-($hall_dabi+$bakeya);

			
			return array($hall_dabi,$bakeya,$intarest,$total,$onnano);
			
			}