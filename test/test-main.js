var tests = [];
var TEST_REGEXP = /\.spec\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    tests.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src',

  paths: {
    Phaser: "../node_modules/phaser/build/phaser.min",
    constants: "constants",
    groups: "groups",
    background: "components/background",
    player: "components/player",
    bullet: "components/bullet",

    //mocked components
    mock: "../test/mock",
    base: "../test/mock/base"
  },

  // dynamically load all test files
  deps: tests,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
