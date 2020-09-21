<template>
  <div class="mx-auto">
    <div class="w-full max-w-xs mx-auto mt-8">
        <div class="vld-parent">
          <loading :active.sync="isLoading" 
          :can-cancel="true" 
          :on-cancel="onCancel"
          :is-full-page="fullPage"></loading>
        </div>
      <div class="alert" v-if="errorMessage!==''">{{errorMessage}}</div>
      <toast position="ne"></toast>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="sendRequest">
        <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">Login</h1>
        <!-- Login -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
          >Username</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            v-model="username"
          />
        </div>
        <!-- Password -->
        <div class="mb-6">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="password"
          >Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="password"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <!-- <router-link to="/dashboard" class="w-full">
            
          </router-link>-->
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Sign In</button>
        </div>
        <div class="mt-4">
          <p class="text-left inline-block">Belum punya akun?</p>
          <router-link to="/register" class="text-blue-500 pl-2 font-bold">Register</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { Toast, ADD_TOAST_MESSAGE } from 'vuex-toast'

import 'vuex-toast/dist/vuex-toast.css'

export default {
  components: {
    Loading,
    Toast
  },
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    isLoading: false,
    fullPage: true
  }),
  computed: {
    ...mapState("Auth", ["errorMessage"]),
  },
  methods: {
    ...mapActions("Auth", ["reqLogin"]),
        ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    sendNotification(text) {
      this.addToast({
        text,
        type: 'success',
        dismissAfter: 5000
      })
    },
    
    sendRequest(e) {
      e.preventDefault();
      const error = [];
      if (this.username === "") {
        error.push("Username required");
      }
      if (this.password === "") {
        error.push("Password required");
      }

      if (error.length > 0) {
        alert(error.join(",\r\n"));
      } else {
        this.isLoading = true;
        setTimeout(() => {
          this.reqLogin({ username: this.username, password: this.password });
          this.isLoading = false
          this.sendNotification("Login Berhasil");
        },2000)
      }
      return false;
    },
    
  },
};
</script>
