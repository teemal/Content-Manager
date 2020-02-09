const state = {
  artists: {
  
  }
}

const mutations = {
  SET_ARTISTS (state, artists) {
    state.artists = artists;
    console.log("butt")
  },
}

const actions = {
  setArtists (context, artists) {
    // do something async
    context.commit('SET_ARTISTS', artists)
    console.log("artists")
  }
}

const getters = {
  getArtists: state => {
    return state.artists
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
