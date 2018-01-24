process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

	var input = process.stdin.read();
	
	if (input !== null) {

	 	var instruction = input.toString().trim();
	
		switch (instruction) {
			
			case 'env':
				console.log(process.env);
				break;

			case 'ver':
				console.log(process.versions);
				break;

			case 'exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			
			default:
				process.stderr.write('Wrong instruction!\n');
				break;

		}

	}

});