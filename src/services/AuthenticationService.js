import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const login = (user) => http.post('/login', user)
  .then(res => Promise.resolve(res.data));

const doEdit = (user) =>   {
  const data = new FormData();
    Object.keys(user).forEach(prop => {
      data.append(prop, user[prop])
    });
      return http.put('/edit', data)
        .then(res => {
          console.log(res)
          Promise.resolve(res.data)
        })
}

const getProfile = id => http.get(`/user/${id}`)
  .then(res => Promise.resolve(res.data));

const getEdit = id => http.get(`/edit/${id}`)
  .then(res => Promise.resolve(res.data));

const getReviews = () => http.get('/reviews')
  .then(res => Promise.resolve(res.data));

const getUserReviews = (id) => http.get(`reviews/user/${id}`)
  .then(res => Promise.resolve(res.data));

  const getAllReviews = () => http.get('reviews/users')
  .then(res => Promise.resolve(res.data));

const postReviews = (userReview) => http.post('/reviews', userReview)
.then(res => Promise.resolve(res.data));

const getResources = () => http.get('/resources')
  .then(res => Promise.resolve(res.data))

const getFriends = () => http.get('/friends')
  .then(res => Promise.resolve(res.data));

const postFriends = (friendId) => http.post('/friends', friendId)
  .then(res => Promise.resolve(res.data));

const getUsers = () => http.get('/users')
  .then(res => Promise.resolve(res.data));  

const postFavourites = (reviewId) => http.post('/reviews/favourites', reviewId)
  .then(res => Promise.resolve(res.data));

const getFavourites = (reviewId) => http.get('/reviews/favourites', reviewId)
  .then(res => Promise.resolve(res.data));

const logout = () => {
  return http.get('/logout')
    .then(res => Promise.resolve(res.data))
}

  // const logout = () => http.post(`/logout`)
  export default { 
    register, 
    login, 
    getProfile, 
    getReviews,
    getUserReviews,
    getResources, 
    postReviews,
    getFriends,
    getUsers,
    getAllReviews,
    postFriends,
    postFavourites,
    getFavourites,
    doEdit,
    getEdit,
    logout
  }