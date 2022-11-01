// librerias con soporte a typescript
import { subDays, format } from 'date-fns';

const date = new Date(1997,1,27);
const rta = subDays(date,2);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);