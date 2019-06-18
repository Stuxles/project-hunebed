function randomSelect(arr, amount) {
	let entry = [];
	let ret = [];
	//We can't give out more results than what we get. Prevent incorrect arguments from breaking things
	//Also prevent 0 or negative values from breaking the function
	if(amount > arr.length || amount === 0) {
		amount = arr.length;
	} //If we somehow get negative values, turn them into positives.
	else if(amount <= -1) {
		amount *= -1;
	}
	//Make sure amount is rounded off.
	amount = Math.floor(amount);
	//duplicate the array by copying references to prevent modifying the original
	for(let e of arr) {
		entry.push(e);
	}
	//Add as many entries as requested to the return array
	for(amount; amount > 0; amount--) {
		let num = Math.floor( Math.random() * entry.length );
		//Remove from entries to prevent duplicate results
		ret.push(entry.pop(num));
	}
	return ret;
}
