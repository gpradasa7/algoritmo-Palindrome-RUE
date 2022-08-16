function Palindromes(str) {
  //Captura el calor ingresado
  const { text } = str;
  let tempText = text;

  //se quita caracterees especiales
  let regExp = /[\W_]/g;
  //Formatea el texto ingresado a minuscula
  let lowStr = tempText.toLowerCase().replace(regExp, "");
  //separa e invierte el orden de las letras
  let reverseStr = lowStr.split("").reverse().join("");

  return reverseStr === lowStr;
}
export default Palindromes;
