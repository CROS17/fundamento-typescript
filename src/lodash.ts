// libreria sin soporte a typescript @types/
import _ from 'lodash';

const data = [
	{
		username: 'rola',
		role: 'admin'
	},
	{
		username: 'juan',
		role: 'seller'
	},
	{
		username: 'luz',
		role: 'seller'
	},
	{
		username: 'santi',
		role: 'supplier'
	}
];
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

