module.exports = () => {
  return __dirname
    .split("\\")
    .reduce((acc, part) => {
      return acc.includes("drum-machine") ? acc : [...acc, part];
    }, [])
    .join("\\");
};
