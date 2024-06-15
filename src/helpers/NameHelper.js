export const getAvatarLetters = (userName) => {
  
  if (userName?.trim().split(" ").length >= 2) {
    let firstLetter = userName.split(" ")[0][0];
    let secondLetter = userName.split(" ")[1][0];

    return firstLetter + secondLetter;
  } else {
    let firstLetter = userName[0];
    let secondLetter = userName[1];

    return firstLetter + secondLetter;
  }
};
