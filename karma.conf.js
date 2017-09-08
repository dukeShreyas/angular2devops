module.exports = function(config) {
  config.set({
    reporters: ['progress', 'junit'],
 
    // the default configuration 
    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
    }
  });
};