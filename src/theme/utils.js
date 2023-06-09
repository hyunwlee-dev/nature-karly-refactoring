import { tokens } from './tokens';

export const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes('/')) {
    let [colorName, colorVariant] = colorNameAndVariant.split('/');

    return tokens.colors[colorName][colorVariant];
  }

  return tokens.colors[colorNameAndVariant];
};
