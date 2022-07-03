algorithm sum_of_elements
var 
	arr1,arr2:arry_of integer[5]
	htab : HASH_TABLE<INTEGER,INTEGER>
begin

	for i from 0 to arr1.length do
		read(arr1[i])
	end-for
	for i from 0 to arr2.length do
		read(arr2[i])
	end-for
	//solution 1
	for i from 0 to arr1.length do
		for j from 0 to arr2.length do
			if (arr1[i]=arr2[j]) then
				count:=count+1
			end-if	
		end-for
		if (count=0) then
			sum1:=sum1+arr1[i]
		else 
			sum2:=sum2+arr1[i]*2
		end-if
	end-for
	write(" problem 1, solution 1 with array: sum1="+sum1+" and sum2="+sum2)
	//solution 2
	for i from 0 to arr1.length do
		read(arr1[i])
	end-for
	for i from 0 to arr2.length do
		read(arr2[i])
	end-for

	sum1:=0;
	for i from 0 to arr1.length do
		for j from 0 to arr2.length do
			count:=1
			if (arr1[i]=arr2[j]) then
				count:=count+1
			end-if	
		end-for
		if (htab.get(arr1[i])<>1) then
		htab.insert(arr1[i],count)
		sum1:=sum1+arr1[i]*htab.get(arr1[i])
		else
			htab.insert(arr1[i],count)
			sum2:=sum2+htab.get(arr1[i])
		end-if
	end-for
	write("problem 1, solution 2 with HASH_TABLE: sum1="+sum1)


	for i from 0 to arr2.length do
		count:=1
		for j from 0 to arr1.length do
			if (arr1[i]<>arr2[j]) then
			count:=count+1	
			end-if
		end-for
		if (htab.get(arr2[i])<>1) {}
		sum1:=sum1+arr1[i]*htab.get(arr1[i])
		else
			sum2:=sum2+htab.get(arr1[i])
		end-if
	end-for


