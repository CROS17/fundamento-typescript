(()=>{

	const calcTotal = (prices: number[]): string => {
		// return prices.reduce((total, price) => total + price, 0);
		let total = 0;
			prices.forEach((item)=>{
				total += item;
			});
		return total.toString();
	  }

	  const printTotal = (prices: number[]): void =>{
			const rta = calcTotal(prices);
			console.log(`El Total es: ${rta}`);
	  }

	  printTotal([10, 20, 30]);
	//   const rta = calcTotal([10, 20, 30]);
	//   console.log(rta); // 60
})();