export const state = () => ({
    type: "admin"
  })
  
export const mutations = {
    setType(state, type) {
        state.type = type
    }
}

export const getters = {
    getType: (state) => {
      return state.type
    }
}