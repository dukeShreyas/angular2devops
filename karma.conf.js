/**
 * @author: @AngularClass
 */

/**
 * Look in ./config for karma.conf.js
 */
module.exports = require('./config/karma.conf.js');
singleRun = true;
reporters = ['dots', 'junit'];
junitReporter = {
  outputFile: 'test-results.xml'
};
