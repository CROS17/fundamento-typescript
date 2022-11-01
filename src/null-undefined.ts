(()=>{
	// let myNumber:number = undefined;
	// let myString: string = null;

	let myNull: null = null;
	let myUndefined: undefined = undefined;

	let myNumber:number |null = null;
	myNumber = 25;

	let myString: string | undefined = undefined;
	myString = 'qweas'

	function hi(name: string | null){
		let hello = 'Saludo';
		// if(name){
		// 	hello += 'name'; 
		// }else{
		// 	hello += 'nobody';
		// }
		hello += name?.toLocaleLowerCase() || 'nobody';
		console.log(hello);
	}

	hi('Cros');
	hi(null);
})();