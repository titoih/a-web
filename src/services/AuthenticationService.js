import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const login = (user) => http.post('/login', user)
  .then(res => Promise.resolve(res.data));

const getProfile = id => http.get(`/user/${id}`)
  .then(res => Promise.resolve(res.data));

const getReviews = () => http.get('/reviews')
  .then(res => Promise.resolve(res.data));

const getUserReviews = (id) => http.get(`reviews/user/${id}`)
  .then(res => Promise.resolve(res.data));

const postReviews = (userReview) => http.post('/reviews', userReview)
.then(res => Promise.resolve(res.data));

const getResources = () => http.get('/resources')
  .then(res => Promise.resolve(res.data))

const getFriends = () => http.get('/friends')
  .then(res => Promise.resolve(res.data));

const getUsers = () => http.get('/users')
  .then(res => Promise.resolve(res.data));  

  export default { 
    register, 
    login, 
    getProfile, 
    getReviews,
    getUserReviews,
    getResources, 
    postReviews,
    getFriends,
    getUsers
  }