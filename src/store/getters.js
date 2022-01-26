const getters = {
  title: state => state.app.title,
  userInfo: state => state.user.userInfo,
  token: state => state.user.token
}

export default getters
