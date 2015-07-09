function echo(str){
	console.log('web worker test .ts ' + str);
}

self.onmessage = function(e) {
	let x = e.data.value;
	echo(x);
};
