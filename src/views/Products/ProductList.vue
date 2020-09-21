<template>
     <div class="w-full p-3">
        <div class="vld-parent">
          <loading :active.sync="isLoading" 
          :can-cancel="true" 
          :on-cancel="onCancel"
          :is-full-page="fullPage"></loading>
        </div>
    <button
      class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      ADD PRODUCT
    </button>

    <button class="bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"

      type="button"
      style="transition: all .15s ease"
      v-on:click="downloadFile()"
    >
      DOWNLOAD REPORT
    </button>
        <toast position="ne"></toast>
    
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
          <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="checkForm">
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">
              Add Product IN
            </h1>

            <!-- Product Name -->
                        <!-- Total -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="total"
                >Product name</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="total"
                type="text" v-model="product_name"
              />
            </div>

            <!-- stok -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="stock"
                >Stock</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="text" v-model="stock"
              />
            </div>

            <!-- price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
                >Price</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text" v-model="price"
              />
            </div>

                        <!-- price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
                >Image</label
              >
              <input type="file" @change="processFile($event)">
            </div>

            <div class="flex items-center justify-between">
               <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit">
            </div>
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table product</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">PRODUCT NAME</th>
                            <th class="text-left text-blue-900">IMAGE</th>
                            <th class="text-left text-blue-900">STOCK</th>
                            <th class="text-left text-blue-900">PRICE</th>
                            <th class="text-left text-blue-900">SUPPLIER</th>
                            <th class="text-left text-blue-900">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(product, i) in products" :key="i">
                            <td>{{product.name}}</td>
                            <td><img width="100"  v-bind:src="product.photo_url" alt="Sunset in the mountains"></td>
                            <td>{{product.stock}}</td>
                            <td> {{ product.price | currency }}</td>
                            <td>{{product.supplier['full_name']}}</td>
                            <td>
                            <a href=""><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
                            >DETAIL</router-link></a> ||
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="deletePrd(product.id)">Delete</button> 
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
import { Toast, ADD_TOAST_MESSAGE } from 'vuex-toast'

import 'vuex-toast/dist/vuex-toast.css'

export default {

  components: {
    Toast,
    Loading
  },

  name: "ProductList",
    data() {
      return {
        product_name: "",
        stock: "",
        price: "",
        image: "",
        userId: "",
        isLoading: false,
        fullPage: true,
        showModal: false,
      };
    },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.getProduct();
      this.isLoading = false
    },2000)
  },

  methods: {
    deletePrd(id) {
      let Confirm = confirm("Are you sure delete data?");
      if(Confirm) {
          this.deleteProduct(id)
          this.sendNotification("Data Berhasil Dihapus");
      }
    },
    downloadFile() {
      this.downloadAllFile()
    },
    processFile(event) {
        this.dataFile = event.target.files[0].name
    },
    
    toggleModal() {
      this.showModal = !this.showModal;
    },
      checkForm(e) {
      let error = [];
      if (this.product_name === "") error.push("Product name Required");
      if (this.stock === "") error.push("stock Required");
      if (this.price === "") error.push("price Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        
        const payload = {
          name: this.product_name,
          stock: this.stock,
          price: this.price,
          photo: this.dataFile
        };
        
        console.log({"data" : payload})
        this.productAction(payload);
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["getProduct", "downloadAllFile", "productAction", "deleteProduct"]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    sendNotification(text) {
      this.addToast({
        text,
        type: 'success',
        dismissAfter: 2000
      })
    }
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>