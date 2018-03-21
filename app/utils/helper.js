const monthsAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getDateString(inputDateString, format='dd/mmm/yyyy') {
  const date = new Date(inputDateString);
  let output = '';
  if (date) {
    if (format === 'dd/mmm/yyyy') {
      const actualMonth = monthsAbbr[date.getMonth()];
      output = `${date.getDate().toString()}-${actualMonth}-${date.getFullYear().toString()}`;
    }
  }
  return output;
}
