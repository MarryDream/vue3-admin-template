import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

const store = createStore({
  modules: {
    app,
    user
  },
  getters
})

export default store
