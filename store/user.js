export const state = () => ({
  role: '',
  email: '',
  first_name: '',
  name: '',
  has_faceid: false,
  access_token: '',
  refresh_token: ''
})

export const mutations = {
    setType(state, type) {
        state.type = type
    },
    setUser(state, { email, first_name, name, role, has_faceid }){
      state.role = role
      state.email = email
      state.first_name = first_name
      state.name = name
      state.has_faceid = has_faceid
    },
    setTokens( state, { access_token, refresh_token } ){
      state.access_token = access_token
      state.refresh_token = refresh_token
    }
}

export const actions = {
  async login( { commit }, data ){
    try {
      const { access_token, refresh_token, user } = await this.$tacoClient.login( data )
      commit('setUser', user)
      commit('setTokens', { access_token, refresh_token })
      return
    } catch (error) {
      throw error
    }
  },
  async fetchList({commit}, { roles, entries, page }){
    try {
      return await this.$tacoClient.users.list( roles, entries, page )
    } catch (error) {
      
    }
  }
}

export const getters = {
    type: (state) => {
      return state.role ? state.role.toLowerCase() : 'test'
    },
    authenticated: (state) => {
      return state.access_token ? true : false
    },
    info: (state) => {
      return state
    },
    bearer: (state) => {
      return state.access_token
    }  
}
