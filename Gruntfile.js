module.exports = function (grunt) {
  var browsers = [ {
    browserName: 'googlechrome',
    version: 'latest',
    platform: 'linux'
  }];
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
    connect: {
      server: {
        options: {
          base: '',
         port: 9999
        }
      }
    },     
    'saucelabs-mocha': {
      all: {
        options: {
          username: process.env.SAUCE_USERNAME,
          key: function () { return process.env.SAUCE_ACCESS_KEY; },
          urls: [
            'http://127.0.0.1:9999/browser/index.html?env=' + process.env.ENV + '&basic=' + process.env.BASIC
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          statusCheckAttempts: -1,
          testname: 'Marketplace API Tests',
          //throttled: 3,
          "max-duration": 600,
          tunnelArgs: ['--verbose'],
          sauceConfig: {
            //"max-duration": 600
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');  
  
  grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};