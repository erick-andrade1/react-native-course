// Transforma a primeira letra de  uma palavra em maiúsculo
export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};
