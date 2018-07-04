const fs = require('fs');
const postcss = require('postcss');
const postcssColorMod = require('postcss-color-mod-function');

fs.readFile('styles.css', (err, css) => {
  postcss([postcssColorMod()])
  .process(css, { from: 'styles.css', to: 'styles.processed.css' })
  .then(result => {
    fs.writeFile('styles.processed.css', result.css, () => true);
  });
});
