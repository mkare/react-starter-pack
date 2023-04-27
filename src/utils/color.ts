import Color from "chroma-js";

interface TintsAndShades {
  [key: number]: string;
}

function generateTintsAndShades(hexColor: string): TintsAndShades {
  // Define tint and shade multipliers
  const tintMultiplier = 0.5;
  const shadeMultiplier = 1.25;

  // Generate tint and shade variations
  const color = Color(hexColor);
  const tints: TintsAndShades = {
    50: color.brighten(tintMultiplier * 4).hex(),
    100: color.brighten(tintMultiplier * 3).hex(),
    200: color.brighten(tintMultiplier * 2.25).hex(),
    300: color.brighten(tintMultiplier * 1.5).hex(),
    400: color.brighten(tintMultiplier * 1).hex(),
  };

  const shades: TintsAndShades = {
    600: color.darken(shadeMultiplier / 4).hex(),
    700: color.darken(shadeMultiplier / 2.5).hex(),
    800: color.darken(shadeMultiplier / 1.25).hex(),
    900: color.darken(shadeMultiplier * 1.25).hex(),
  };

  // Return object with tint and shade variations, with 500 as default
  return {
    ...tints,
    500: hexColor,
    ...shades,
  };
}

export default generateTintsAndShades;
