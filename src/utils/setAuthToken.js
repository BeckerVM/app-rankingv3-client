import request from '../api/request'

const setAuthToken = (token) => {
  if (token) {
    request.defaults.headers.common['Authorization'] = `JWT ${token}`;
  } else {
    request.defaults.headers.common['Authorization'] = `JWT notoken`;
  }
}

export default setAuthToken