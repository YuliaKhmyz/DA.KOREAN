export const separateNumbers = (priceToCheck: number): string => {
  const MIN_VALUE_TO_SEPARATE_ZEROS = 1000;
  if (priceToCheck < MIN_VALUE_TO_SEPARATE_ZEROS) {
    return String(priceToCheck);
  }

  // решение взято с ресурса:
  // https://ru.stackoverflow.com/questions/874794/Разделение-числа-на-разряды-js
  const parts = priceToCheck.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
