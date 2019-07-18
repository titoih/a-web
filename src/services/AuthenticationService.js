import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const login = (user) => http.post('/login', user)
  .then(res => Promise.resolve(res.data));

const getProfile = id => http.get(`/user/${id}`)
  .then(res => Promise.resolve(res.data));

const getReviews = () => http.get('/reviews')
  .then(res => Promise.resolve(res.data));

const postReviews = (userReview) => http.post('/reviews', userReview)
.then(res => Promise.resolve(res.data));

const getResources = () => http.get('/resources')
  .then(res => Promise.resolve(res.data))

const getFriends = id => http.get('/friends')
  .then(res => Promise.resolve(res.data));


  export default { 
    register, 
    login, 
    getProfile, 
    getReviews, 
    getResources, 
    postReviews,
    getFriends 
  }