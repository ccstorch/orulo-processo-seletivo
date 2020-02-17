export const formatShortNumber = value => {
  if (value >= 1000000) return value / 1000000 + 'm'
  if (value >= 1000) return value / 1000 + 'k'
  return value
}
