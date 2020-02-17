export const formatOptionsFromObject = obj => Object.keys(obj).map(key => ({label: obj[key], value: key}))
