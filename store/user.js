export const state = () => ({
    type: "teacher"
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
