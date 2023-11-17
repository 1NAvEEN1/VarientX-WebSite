export const convertToRupees = (value, currency) => {
  if (value) {
    let strNumber = value.toString(); 
    const splitted = strNumber.split("");
    for (let i = splitted.length - 3; i > 0; i -= 3) {
      splitted.splice(i, 0, ",");
    }

    return Number.isInteger(value)
      ? `${currency} ${splitted.join("")}.00 `
      : `${currency} ${Number(value).toFixed(2)} `;
  }
  return `${currency} 0.00`;
};
// export {ConvertToRupees};
