(()=>{
	type Data = {
        email: string;
        password: string;
    }
    const login = (data: Data) => {
        const { email, password } = data;
        console.log(email, password);
    }
    login({ email:'test@test', password: '12131'});


	type TSizes =  "SM" | "ME" | "LA" | "2XL";

	const products: any[] = [];
	const  addProduct = (dto: {
		title: string,
		createdAt: Date,
		stock: number,
		size?: TSizes 
	}) => {
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