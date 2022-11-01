	import {Product} from './product.model'
	const products: Product[] = [];
	const addProduct = (data: Product) => {
		products.push(data)
	}
	const calcStock = ():number => {
		// products.reduce((acc, product) => 
		// 	acc + product.stock, 0)
		let total: number = 0

		products.forEach(el => {
		  total += el.stock
		})
	  
		return total
	}

	export {
		products,
		addProduct,
		calcStock,
	}

	