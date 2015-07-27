function echo(str){
	console.log('web worker .ts ' + str);
}

self.onmessage = function(e) {
	var x = e.data.value;
	echo(x);
};
