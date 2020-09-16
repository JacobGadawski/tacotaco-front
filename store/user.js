export const state = () => ({
    type: "student"
  })

export const mutations = {
    setType(state, type) {
        state.type = type
    }
}

export const getters = {
    type: (state) => {
      return state.type
    }
}
