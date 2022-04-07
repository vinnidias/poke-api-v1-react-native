export const colorTypesSelector = (type) => {
  switch (type) {
    case "normal":
      return "#efe4f0";

    case "fire":
      return "#ed6815";

    case "fighting":
      return "#bf3753";

    case "water":
      return "#1e90ff";

    case "flying":
      return "#d775fa";

    case "grass":
      return "#26bf33";

    case "poison":
      return "#8422a8";

    case "electric":
      return "#e0cc34";

    case "ground":
      return "#c4b678";

    case "psychic":
      return "#c4789f";

    case "rock":
      return "#9da170";

    case "ice":
      return "#5cd1d1";

    case "bug":
      return "#8fd94e";

    case "dragon":
      return "#792fe0";

    case "ghost":
      return "#663382";

    case "dark":
      return "#3d2f52";

    case "steel":
      return "#d1cfd4";

    case "fairy":
      return "#faafe6";

    default:
      break;
  }
};
