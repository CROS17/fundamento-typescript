(()=>{
	type TSizes =  "SM" | "ME" | "LA" | "2XL";
	type Product = {
		title: string,
		createdAt: Date,
		stock: number,
		size?: TSizes 
	}
	const products: Product[] = [];
	const  addProduct = (dto: Product) => {
		products.push(dto);
	}

	addProduct({
		title: 'Sporade',
		createdAt: new Date(),
		stock: 45
	})

	addProduct({
		title: 'Red Bull',
		createdAt: new Date(),
		stock: 65,
		size: '2XL'
	})

	console.log(products);

})()