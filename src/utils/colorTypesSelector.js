export const colorTypesSelector = (type) => {
  let colors = "";
  const allColorsAvaliable = {
    normal: "#efe4f0",
    fire: "#ed6815",
    fighting: "#bf3753",
    water: "#1e90ff",
    flying: "#d775fa",
    grass: "#26bf33",
    poison: "#8422a8",
    electric: "#e0cc34",
    ground: "#c4b678",
    psychic: "#c4789f",
    rock: "#9da170",
    ice: "#5cd1d1",
    yellow: "#eed535",
    pink: "#f355b9",
    ice: "#51c4e7",
    bug: "#8fd94e",
    dragon: "#792fe0",
    ghost: "#695d9e",
    dark: "#666666",
    steel: "#d1cfd4",
    fairy: "#faafe6",
  };
  if (type.length === 0) {
    colors = "#DFEAC1";
  } else {
    colors = allColorsAvaliable?.[type];
  }
  return colors;
};
