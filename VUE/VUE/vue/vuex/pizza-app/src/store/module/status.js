const state = {
  isLogin:false
}

const getters = {
  isLogin: state => state.isLogin
}

const mutations = {
    loginStatus(state, status){
      state.isLogin = status
    }
}

const actions = {
  setLogin({commit},status){
    commit("loginStatus",status)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}