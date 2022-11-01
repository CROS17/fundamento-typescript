(()=>{
	type Sizes = 'L'|'XL'|'M';

	function createProductToJson(
		title: string,
		createdAt: Date,
		stock: number,
		size: Sizes
	){
		return{
			title,
			createdAt,
			stock,
			size
		}
	}

	const prod = createProductToJson('Item',new Date(), 15, 'L');
	console.log(prod);
	console.log(prod.title);
	console.log(prod.size);



	const createProductToJsonV2 =  (
		title: string,
		createdAt: Date,
		stock: number,
		size?: Sizes  //optional
	)=>{
		return{
			title,
			createdAt,
			stock,
			size
		}
	}

	const prod2 = createProductToJsonV2('Item',new Date(), 15);
	console.log(prod2);
	console.log(prod2.title);
	console.log(prod2.size);
})();