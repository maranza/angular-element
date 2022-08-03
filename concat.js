const concat = require('concat');
(
  async function build() {
    const files = [
      './dist/micro-front-end/runtime.js',
      './dist/micro-front-end/polyfills.js',
      './dist/micro-front-end/main.js',
      // './dist/micro-front-end/styles.css'
    ];
    await concat(files, './dist/micro-front-end/final-app.js');
    console.log("Done");
  })();
