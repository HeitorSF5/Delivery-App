export default snakeToCamelString = (snakeWord) => {
  const SECONDWORDSLICE = -1;
  const camelWord = snakeWord
    .toLowerCase()
    .replace(/[-_][a-z]/g, (group) => group.slice(SECONDWORDSLICE).toUpperCase());
  return camelWord;
};

// https://stackoverflow.com/questions/40710628/how-to-convert-snake-case-to-camelcase-in-my-app
