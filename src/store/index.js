import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'http://www.balmuda.co.kr/greenfan-s/_img/features/natural_wind.jpg', id: 'test1', title: 'Twice1', date: '2017-09-13', location: 'New York', description: 'New York' },
      { imageUrl: 'https://windowsforum.kr/files/attach/images/2966154/024/338/002/d7765e849c020b0545ff3df4e2d6d0c0.JPG', id: 'test2', title: 'Twice2', date: '2017-09-15', location: 'Paris', description: 'Paris' }
    ],
    user: {
      id: 'test1',
      registeredMeetups: ['test2']
    }
  },
  mutations: {
    createMeetups (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
