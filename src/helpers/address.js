export const formatShortRegion = address => {
  if (!address) return ''
  return `${address.area}, ${address.city}`
}

export const formatFullAddress = address => {
  if (!address) return ''
  return `${address.street_type} ${address.street} ${address.number}, ${address.area}, ${address.city}, ${
    address.state
  }, ${address.zip_code}`
}
