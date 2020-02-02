const state = {
  artists: {
    Metallica: {
      albumns: {
        "Ride The Lightning": {
          1: "Fight Fire With Fire ",
          2: "Ride the Lightning ",
          3: "For Whom the Bell Tolls ",
          4: "Fade to Black ",
          5: "Trapped Under Ice ",
          6: "Escape ",
          7: "Creeping Death ",
          8: "The Call of Ktulu "
        },
        "Master of Puppets": {
          1: "Battery ",
          2: "Master Of Puppets ",
          3: "The Thing That Should Not Be ",
          4: "Welcome Home (Sanitarium) ",
          5: "Disposable Heroes ",
          6: "Leper Messiah ",
          7: "Orion ",
          8: "Damage, Inc. "
        }
      },
      url:
        "https://www.metallica.com/dw/image/v2/BCPJ_PRD/on/demandware.static/-/Sites-Metallica-Library/default/dw2dcce125/images/releases/20150807_213928_7549_752891.jpg?sw=372&sh=372&sm=cut&sfrm=jpeg&q=95"
    },
    Grimes: {
      albumns: {
        Visions: {
          1: "Infinite ❤ Without Fulfillment",
          2: "Genesis",
          3: "Oblivion",
          4: "Eight",
          5: "Circumambient",
          6: "Vowels = Space and Time",
          7: "Visiting Statue",
          8: "Be a Body (侘寂)",
          9: "Colour of Moonlight (Antiochus)",
          10: "Symphonia IX (My Wait Is U)",
          11: "Nightmusic",
          12: "Skin",
          13: "Know the Way (Outro)"
        }
      },
      url:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/Grimes_-_Visions_album_cover.png"
    },
    Dreamville: {
      albumns: {
        "Revenge of the Dreamers III": {
          1: "Under the Sun",
          2: "Down Bad",
          3: "LamboTruck",
          4: "Swivel",
          5: "Oh Wow...Swerve",
          6: "Don't Hit Me Right Now",
          7: "Wells Fargo",
          8: "Sleep Deprived",
          9: "Self Love",
          10: "Ladies, Ladies, Ladies",
          11: "Costa Rica",
          12: "1993",
          13: "Rembrandt...Run It Back",
          14: "Sunset",
          15: "Got Me",
          16: "Middle Child",
          17: "PTSD",
          18: "Sacrifices"
        },
        url:
          "https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1024/MTY1MjUwMDUxMzE5Mjc3MTI5/dreamville-rotdiii-album-cover-one-listen-review.webp"
      }
    }
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

const getters = {
  getArtists: state => {
    return Object.keys(state.artists)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
