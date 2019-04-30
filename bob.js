/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const lastChar = message[message.length-1]

  if (message.toUpperCase() === message) {
    return "Whoa, chill out!"
  } else if (lastChar === '?') {
    return "Sure."
  }

  return "Whatever."
};
