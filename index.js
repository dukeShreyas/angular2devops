var childProcess = require('child_process')

childProcess.exec('npm test', (err, stdout, stderr) => {
	console.log(stdout)
})
