const resource = (name, path) => ({
  ['get' + name + 'List']: {path: `/${path}`, method: 'GET'},
  ['get' + name]: {path: `/${path}/:id`, method: 'GET'},
  ['create' + name]: {path: `/${path}`, method: 'POST'},
  ['update' + name]: {path: `/${path}/:id`, method: 'PUT'},
  ['delete' + name]: {path: `/${path}/:id`, method: 'DELETE'},
})

const paths = {
  ...resource('Buildings', 'buildings'),
  ...resource('BuildingTypes', 'buildings/types/list'),
}

export default paths
