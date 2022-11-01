
	type TSizes =  "SM" | "ME" | "LA" | "2XL";
	type Product = {
		name: string,
		createdAt: Date,
		stock: number,
		size?: TSizes 
	};

	export {
		TSizes,Product
	}