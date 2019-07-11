import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const login = (user) => http.post('/login', user)
  .then(res => Promise.resolve(res.data));

const getProfile = id => http.get(`/user/${id}`)
  .then(res => Promise.resolve(res.data));

  export default { register, login, getProfile }