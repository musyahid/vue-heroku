import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
import Api from "./api";
import createPersistedState from "vuex-persistedstate";
import { createModule } from 'vuex-toast'

import router from "../router/index";

Vue.use(Vuex);


const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {

          const {
            data: { data },
          } = res;
          commit("saveLogin", data);
          localStorage.setItem("token", data.token);
          // Api.defaults.headers.common['Authorization'] = data.token
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          router.push("/");

          // console.log({ res });
        })
        .catch((error) => {
          console.log({ error });
        });
      // const { data } = await Api.post("/auth/login", { data: payload });
      console.log({ commit });
    },
  },
};

export default new Vuex.Store({
  state: {
    score: 0,
    name: "",
    users: [],
    products: [],
    productsIn: [],
    productsOut: [],
    detailUser: null,
    detailProduct: null,
    detailProductIn: null,
    downloadAllFile: [],
    downloadInFile: [],
    downloadOutFile: [],
    posts: [],
    postLoading: false,
    post: null,
    notifications: []
  },
  mutations: {

    getUsersList(state, payload) {
      state.users = payload.data;
    },
    getProductsList(state, payload) {
      state.products = payload.data;
    },
    getProductsInList(state, payload) {
      state.productsIn = payload.data;
    },
    getProductsOutList(state, payload) {
      state.productsOut = payload.data;
    },
    getDownloadAllFile(state, payload) {
      state.downloadAllFile = payload.data;
    },
    getDownloadInFile(state, payload) {
      state.downloadInFile = payload.data;
    },
    getDownloadOutFile(state, payload) {
      state.downloadOutFile = payload.data;
    },
    setDetailUser(state, payload) {
      state.detailUser = payload.data;
    },
    setDetailProduct(state, payload) {
      state.detailProduct = payload.data;
    },
    setDetailProductIn(state, payload) {
      state.detailProductIn = payload.data;
    },
    setBoolean(state, payload) {
      console.log({ payload });
      state[payload.key] = payload.value;
    },
    setDataPost(state, payload) {
      console.log({ state, payload });
      state.posts = payload.data;
    },
    setPost(state, payload) {
      state.post = payload;
    },
  },
  actions: {
    // USER
    async getUser({ commit }) {
      const { data } = await Api.get('/user')
      commit("getUsersList", data.data);
    },
    async getDetailUser({ commit }, id) {
      // console.log({ detailuser: id });
      try {
        const { data } = await Api.get(`/user/${id}`);
        // console.log(data);
        commit("setDetailUser", data);
      } catch (error) {
        console.log({ error: error.message });
      }
    },
    // END USER

    //PRODUCT
    async getProduct({ commit }) {
      const { data } = await Api.get('/product')
      commit("getProductsList", data.data);
    },
    async getDetailProduct({ commit }, id) {
      // console.log({ detailuser: id });
      try {
        const { data } = await Api.get(`/product/${id}`);
        console.log(data.data);
        commit("setDetailProduct",  data);
      } catch (error) {
        console.log({ error: error.message });
      }
    },
    async getDetailProductIn({ commit }, id) {
      console.log(commit)
      try {
        const { data } = await Api.get(`/in/${id}`);
        console.log(data.data);
        commit("setDetailProductIn",  data);
      } catch (error) {
        console.log({ error: error.message });
      }
    },
    async getProductIn({ commit }) {
      const { data } = await Api.get('/in')
      commit("getProductsInList", data.data);
    },
    
    async getProductOut({ commit }) {
      const { data } = await Api.get('/out')
      commit("getProductsOutList", data.data);
    },

    //DOWNLOAD FILE
    async downloadAllFile({ commit }) {
      const { data } = await Api.get('/print/?type=all')
      commit("getDownloadAllFile", data.data);
    },

    async downloadInFile({ commit }) {
      const { data } = await Api.get('/print/?type=in')
      commit("getDownloadInFile", data.data);
    },

    async downloadOutFile({ commit }) {
      const { data } = await Api.get('/print/?type=out')
      commit("getDownloadOutFile", data.data);
    },
    //END PRODUCT


    //REGISTRASI
    async registerAction({ commit }, payload) {
      console.log({"dahaha": payload})
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup", JSON.stringify({
        "data" : {
          "full_name" : payload.full_name,
          "username" : payload.username,
          "email" : payload.email,
          "password" : payload.password,
          "phone_number" : payload.phone_number 
        }
      }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", { key: "postLoading", value: false });
    },
    //END REGISTRASI

    //========== POST DATA =============================
    async productAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      const formData = new FormData();
      formData.append("photo", payload.photo)
      formData.append("name",  payload.name)
      formData.append("stock", payload.stock)
      formData.append("price", payload.price)
      Api.post("/product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      })
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", { key: "postLoading", value: false });
    },

    async productOutAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/out", JSON.stringify({
        "data" : {
          "product_id" : payload.product_id,
          "total" : payload.total
        }
      }))
        .then((res) => {
          console.log({ res });
          window.location.reload(true);
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", { key: "postLoading", value: false });
    },

    async productInAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/in", JSON.stringify({
        "data" : {
          "product_id" : payload.product_id,
          "total" : payload.total
        }
      }))
        .then((res) => {
          console.log({ res });
          window.location.reload(true);
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", { key: "postLoading", value: false });
    },

    // ========== DELETE DATA =============================
    async deleteProduct({ commit }, id) {
      console.log({"commit" : commit, "id" : id})
      Api.delete("/product/" + id)
        .then((res) => {
          console.log({ res });
          window.location.reload(true);
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
    },
    async deleteProductIn({ commit }, id) {
      console.log({"commit" : commit, "id" : id})
      Api.delete("/in/" + id)
        .then((res) => {
          console.log({ res });
          window.location.reload(true);
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
    },
    async deleteProductOut({ commit }, id) {
      console.log({"commit" : commit, "id" : id})
      Api.delete("/out/" + id)
        .then((res) => {
          console.log({ res });
          window.location.reload(true);
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
    },

  },
  getters: {
    // untuk memanipulasi data state
    // eventUser(state) {},
    // oddUser(state) {},
  },
  modules: {
    Auth,
    toast: createModule({
      dismissInterval: 8000
    })
  },
  plugins: [createPersistedState()],
});
