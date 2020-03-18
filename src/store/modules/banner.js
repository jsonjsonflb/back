import { getBannerList } from "@/api/banner";

const state = {
  bannerList: []
};

const mutations = {
  BANNER_LIST: state => {}
};

const actions = {
  getBannerList({ commit }) {
    return new Promise((resolve, reject) => {
      getBannerList()
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
