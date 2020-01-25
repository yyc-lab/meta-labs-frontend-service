// const [login, err, loading, data] = useLogin();

// const CRUD_TO_METHOD = {
//   GET: 'get',
//   UPDATE: 'put',
//   CREATE: 'create',
//   DELETE: 'delete'
// }

// const defaultApiCall = ({ crudType, resource, body, filter }) => {
//   const inputCrudType = crudType.split('_')[0];
//   const method = CRUD_TO_METHOD[inputCrudType];
//   const idRequiredMethods = ['PUT', 'DELETE', 'GET_ONE'];

//   let url = `/${resource}`;

//   if (idRequiredMethods.includes(crudType)) {
//     if (!body.id) throw new Error('id not provided');
//     url += `/${body.id}`
//   }

//   if (crudType === 'GET_MANY' && filter) {
//     // url += `?filter=${filter}`
//   }  

//   return {
//     url,
//     method,
//     body,
//   }
// }

export { useLogin } from './auth';



