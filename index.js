var childProcess = require('child_process')
var path = require('path')
var config = {
    distPath: path.join(__dirname, 'dist'),
    tomcat: {
        docRoot: 'C:\\xampp\\tomcat\\webapps\\angular2devops'
    }
}
childProcess.exec('npm install', (err, stdout, stderr) => {
    if (!err) {
        console.log("NPM run was successful.");
    childProcess.exec('npm test', (err, stdout, stderr) => {
		console.log(stdout);
        if (stdout.indexOf('test failed') === -1 || stdout.indexOf('tests failed') === -1) {
            console.log('Test cases passed. Starting build now')
            childProcess.exec('npm run build', (err, stdout, stderr) => {
                if (!err) {
                    console.log('Build successfull. Starting tomcat deployment now')
                    var copyCommand = 'XCOPY "' + config.distPath + '" "' + config.tomcat.docRoot + '" /E /Y'
                    console.log(copyCommand)
                    childProcess.exec(copyCommand, (err, stdout, stderr) => {
                        if (!err) {
                            console.log('Build successfully deployed to tomcat server', stdout)
                        } else {
                            console.log('Failed to deploy to tomcat server. Error:', err)
                        }
                    })
                } else {
                    console.log('Failed to build. Error:', err)
                }
            })
        } else {
            console.log('Aborting build as at least 1 test case(s) are failed')
        }
    })
	}
	})