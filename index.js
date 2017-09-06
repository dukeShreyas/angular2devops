var childProcess = require('child_process')

childProcess.exec('npm test', (err, stdout, stderr) => {
	if(stdout.indexOf('test failed') === -1 || stdout.indexOf('tests failed') === -1){
		childProcess.exec('npm run build', (err, stdout, stderr) => {
			console.log(stdout)
		})
	}
	else {
		console.log('Aborting build as at least 1 test case(s) are failed')
	}
})
