const numberFormat = (value, separator = '.') => {
  if (!value) return 0
  return String(Math.abs(value)).replace(/(.)(?=(\d{3})+$)/g, '$1' + separator)
}
const useCurrencyFormat = (value) => {
  if (!value) return 'Rp' + 0
  if (typeof value === 'number') {
    const formatCurrency = value < 0 ? '- Rp' : 'Rp'
    return formatCurrency + numberFormat(value)
  } else if (typeof value !== 'undefined') {
    const index = value.search(/Rp/i)
    if (index < 0) return 'Rp' + 0
    const price = parseFloat((String(value).replace('Rp', '')).replace(/[.,\s]/g, ''))
    const formatCurrency = price < 0 ? '- Rp' : 'Rp'
    return formatCurrency + numberFormat(price)
  }
}
export {
  useCurrencyFormat,
  numberFormat
}