const reverseString = (str: string): string => {
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str.charAt(i);
  }

  return word;
};

export {};
