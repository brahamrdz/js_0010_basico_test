export function mayorDeTresNumeros(a, b, c) {
	return Math.max(a, b, c);  
}
export function ceroIfNull(a) {
	return a ?? 0; 
}

export function numerosParesCount(desde, hasta) {
	let count = 0;
	for (let i = desde; i <= hasta; i++) {
        	if (i % 2 === 0) {
            		count++;
        	}
    	}
    	return count;
}

export function ifCadenaMasLargaDeN(cadena, n) {
	const length = cadena.length;
    
    if (length > n) {
        return true;
    } else {
        return false;
    } 

}
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
	return (a + b + c) === n; 

}
// que devuelva en centimos redondeado
// el producto de cantidad por precio
export function importe(cantidad, precio) {
	return Math.round(cantidad * precio * 100);  
}
