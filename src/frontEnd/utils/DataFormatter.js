export const DataFormatter = (dataString) => {
  //Se le ingresa un tipo Date con zona horaria, y se devuelve una version dia/mes
  if (!dataString) return "xx/xx";
  const date = new Date(dataString);
  return date.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
  });
};
