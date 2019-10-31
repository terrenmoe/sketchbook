'use strict';

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const jsExtRegex = /\.(js|mjs|jsx|ts|tsx)$/;
const imgExtRegex = /\.bmp|gif|jpe?g|png$/;
const htmlExtRegex = /\.html$/;
const jsonExtRegex = /\.json$/;
const rcRegex = /rc\.?j?s?$/;
const trueRegex = /true/;
const falseRegex = /false/;
const REACT_APP = /^REACT_APP_/i;

const allRegex = function allRegex(string, yayOrNay) {
  let output = [];
  for (const [i, j] of Object.entries({
    cssRegex,
    cssModuleRegex,
    sassRegex,
    sassModuleRegex,
    jsExtRegex,
    imgExtRegex,
    htmlExtRegex,
    jsonExtRegex,
    rcRegex,
    REACT_APP,
  })) {
    output = [...output, [i, j.test(string)]];
  }
  return (output
    .join(' ')
    .split(' ')
    .filter((str) => {
      const out = (yayOrNay) ? falseRegex.test(str) : trueRegex.test(str);
      return out;
    })
  );
};

module.exports = {
  cssRegex,
  cssModuleRegex,
  sassRegex,
  sassModuleRegex,
  jsExtRegex,
  imgExtRegex,
  htmlExtRegex,
  jsonExtRegex,
  rcRegex,
  allRegex,
};
