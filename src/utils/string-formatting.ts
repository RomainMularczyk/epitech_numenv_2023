export const formatSpeaker = (str: string) => {
  const replaced = str.replace("-", " ")
  const parts = replaced.split(" ");
  let result = "";

  parts.forEach((part) => {
    result += part.charAt(0).toUpperCase() + part.slice(1) + " ";
  });

  return result.trimEnd()
};

export const lowerCaseFirstLetters = (str: string) => {
  const parts = str.split(" ");
  let result = "";

  parts.forEach((part) => {
    result += part.charAt(0).toLowerCase() + part.slice(1) + " ";
  });

  return result.trimEnd().replace(" ", "-")
};

export const removeTrailingSlash = (str: string) => {
  if (str.charAt(str.length - 1) === "/") {
    return str.slice(0, -1)
  } else {
    return str
  }
};

