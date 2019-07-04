function randomSelect(array, amount) {
	console.log(array);
	let entry = [];
	let ret = [];
	//We can't give out more results than what we get. Prevent incorrect arguments from breaking things
	//Also prevent 0 or negative values from breaking the function
	if(amount > array.length || amount === 0) {
		amount = array.length;
	} //If we somehow get negative values, turn them into positives.
	else if(amount <= -1) {
		amount *= -1;
	}
	//Make sure amount is rounded off.
	amount = Math.floor(amount);
	//duplicate the array by copying references to prevent modifying the original
	for(let e of array) {
		console.log(e);
		entry.push(e);
	}
	//Add as many entries as requested to the return array
	for(amount; amount > 0; amount--) {
		let num = Math.floor(Math.random() * entry.length);
		//Remove from entries to prevent duplicate results
		ret.push(entry.pop(num));
	}
	alert("HODOR");
	console.log(ret);
	return ret;
}

function randomSelectOne(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

//Give this function at least a Firebase documentReference to a Role.
//Selects all matching questions by default
async function getRandomQuestions(roleReference, amount = 0) {
	let docArray = [];
	let ret = [];
	await db.collection('Questions').where('Categories', 'array-contains', roleReference).onSnapshot(snapshot => {
		snapshot.forEach(doc => {
			docArray.push(doc.data());
		});
	let entry = [];
	//We can't give out more results than what we get. Prevent incorrect arguments from breaking things
	//Also prevent 0 or negative values from breaking the function
	if(amount > docArray.length || amount === 0) {
		amount = docArray.length;
	} //If we somehow get negative values, turn them into positives.
	else if(amount <= -1) {
		amount *= -1;
	}
	//Make sure amount is rounded off.
	amount = Math.floor(amount);
	//duplicate the array by copying references to prevent modifying the original
	for(let e of docArray) {
		entry.push(e);
	}
	//Add as many entries as requested to the return array
	for(amount; amount > 0; amount--) {
		let num = Math.floor(Math.random() * entry.length);
		//Remove from entries to prevent duplicate results
		ret.push(entry.pop(num));
	}
	});
	return ret;
}
