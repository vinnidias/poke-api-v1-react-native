export const changeSpecialChracterToSpace = (string) => {
  if(string) return string.replace(/[-"]/, " ")
  else return ""
}
