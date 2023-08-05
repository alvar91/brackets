module.exports = function check(str, bracketsConfig) {
  const bracketsPair = bracketsConfig.map((item) => item.join(""));

  let i = 0;
  while (i < bracketsPair.length) {
    if (str.includes(bracketsPair[i])) {
      str = str.replace(bracketsPair[i], "");
      i = 0;
    } else i++;
  }

  return str.length ? false : true;
};
