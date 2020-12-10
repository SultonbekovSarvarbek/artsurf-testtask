import Vue from "vue";
import Vuex from "vuex";
// register axios
import axios from "axios";
axios.defaults.baseURL = "https://api.punkapi.com/v2/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { allBeers: { results: [] }, loadingStatus: false },
  mutations: {
    SET_BEERS(state, payload) {
      state.allBeers.results.push(...payload);
      state.allBeers.arrLength = payload.length;
    },
    SET_LOADING_STATUS(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus;
    },
    REMOVE_BEER_ITEM: (state, payload) => {
      const i = state.allBeers.results.map(item => item.id).indexOf(payload);
      state.allBeers.results.splice(i, 1);
    },
    UPDATE_BEER_ITEM: (state, payload) => {
      const item = state.allBeers.results.find(item => item.id === payload.id);
      Object.assign(item, payload);
    }
  },
  actions: {
    async getBeers(context, payload) {
      try {
        context.commit("SET_LOADING_STATUS", true);
        const res = await axios.get("beers", {
          params: {
            page: payload
          }
        });
        context.commit("SET_BEERS", res.data);
        context.commit("SET_LOADING_STATUS", false);
      } catch (error) {
        console.log(error);
      }
    },
    removeBeer(context, payload) {
      context.commit("REMOVE_BEER_ITEM", payload);
    },
    editBeer(context, payload) {
      context.commit("UPDATE_BEER_ITEM", payload);
    }
  },
  getters: {
    getLoadingStatus(state) {
      return state.loadingStatus;
    },
    getBeers(state) {
      return state.allBeers;
    }
  }
});
