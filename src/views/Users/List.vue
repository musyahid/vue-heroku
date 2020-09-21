<template>
     <div class="w-full p-3">
        <div class="vld-parent">
          <loading :active.sync="isLoading" 
          :can-cancel="true" 
          :on-cancel="onCancel"
          :is-full-page="fullPage"></loading>
        </div>
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table user</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">FULL NAME</th>
                            <th class="text-left text-blue-900">USERNAME</th>
                            <th class="text-left text-blue-900">EMAIL</th>
                            <th class="text-left text-blue-900">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(user, i) in users" :key="i">
                            <td>{{user.full_name}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td>
                                                             <a href=""><router-link
                            :to="{name:'userDetail',params:{id:user.id}}"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                            >DETAIL</router-link></a>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--/table Card-->
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    Loading
  },

  name: "UserList",
    data() {
      return {
        isLoading: false,
        fullPage: true
      };
    },
  created() {
    this.isLoading = true;
    setTimeout(() => {
        this.getUser();
      this.isLoading = false
    },2000)
  },

  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>