import {
  getAnalystList,
  getAnalystPage,
  addAnalyst,
  delAnalyst,
  updateAnalyst
} from "@/api/analyst";

const state = {
  analystList: []
};

const mutations = {
  ANALYST_LIST: (state, lsit) => {
    state.analystList = lsit;
  }
};

const actions = {
  getAnalystList({ commit }) {
    return new Promise((resolve, reject) => {
      getAnalystList()
        .then(data => {
          const list = data.data ? data.data : [];
          commit("ANALYST_LIST", list);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getAnalystPage({ commit }, param) {
    return new Promise((resolve, reject) => {
      getAnalystPage(param)
        .then(data => {
          const list = data.data ? data.data : {};
          commit("ANALYST_LIST", list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  addAnalyst({ commit }, param) {
    return new Promise((resolve, reject) => {
      addAnalyst(param)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  delAnalyst({ commit }, param) {
    return new Promise((resolve, reject) => {
      delAnalyst(param)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateAnalyst({ commit }, param) {
    return new Promise((resolve, reject) => {
      updateAnalyst(param)
        .then(() => {
          resolve();
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
