import { addProduct,calcStock, products } from "./product.service"; './product.service';

addProduct({
	name: 'Sporade',
	createdAt: new Date(),
	stock: 45
})

addProduct({
	name: 'Red Bull',
	createdAt: new Date(),
	stock: 65,
	size: '2XL'
})

console.log(products);
const total = calcStock();
console.log(total);
