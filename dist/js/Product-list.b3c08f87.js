(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Product-list"],{"16f6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full p-3"},[s("div",{staticClass:"bg-white border rounded shadow"},[t._m(0),s("div",{staticClass:"p-5"},[s("table",{staticClass:"py-5 text-gray-700"},[t.detailProduct?s("thead",[s("img",{attrs:{width:"200",src:t.detailProduct.photo_url,alt:"Sunset in the mountains"}}),s("tr",[s("th",{staticClass:"text-left my-6 text-blue-900"},[t._v("NAME")]),s("th",[t._v(" : ")]),s("th",{staticClass:"text-left text-blue-900"},[t._v(t._s(t.detailProduct.name))])]),s("tr",[s("th",{staticClass:"text-left my-6 text-blue-900"},[t._v("STOCK")]),s("th",[t._v(" : ")]),s("th",{staticClass:"text-left text-blue-900"},[t._v(t._s(t.detailProduct.stock))])]),s("tr",[s("th",{staticClass:"text-left my-6 text-blue-900"},[t._v("PRICE")]),s("th",[t._v(" : ")]),s("th",{staticClass:"text-left text-blue-900"},[t._v(t._s(t.detailProduct.price))])]),s("tr",[s("th",{staticClass:"text-left my-6 text-blue-900"},[t._v("SUPPLIER NAME")]),s("th",[t._v(" : ")]),s("th",{staticClass:"text-left text-blue-900"},[t._v(t._s(t.detailProduct.supplier["full_name"]))])]),s("tr",[s("th",{staticClass:"text-left my-6 text-blue-900"},[t._v("PHONE NUMBER")]),s("th",[t._v(" : ")]),s("th",{staticClass:"text-left text-blue-900"},[t._v(t._s(t.detailProduct.supplier["phone_number"]))])])]):t._e()])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border-b p-3"},[s("h5",{staticClass:"font-bold uppercase text-gray-600"},[t._v(" Detail Table product")])])}],l=s("5530"),i=s("2f62"),n={name:"ProductDetail",props:["id"],created:function(){console.log({id:this.id}),this.getDetailProduct(this.id)},computed:Object(l["a"])({},Object(i["c"])(["detailProduct"])),methods:Object(l["a"])({},Object(i["b"])(["getDetailProduct"]))},c=n,r=s("2877"),u=Object(r["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports},bcaf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full p-3"},[s("div",{staticClass:"vld-parent"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"on-cancel":t.onCancel,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}})],1),s("button",{staticClass:"bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",staticStyle:{transition:"all .15s ease"},attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[t._v(" ADD PRODUCT ")]),s("button",{staticClass:"bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",staticStyle:{transition:"all .15s ease"},attrs:{type:"button"},on:{click:function(e){return t.downloadFile()}}},[t._v(" DOWNLOAD REPORT ")]),s("toast",{attrs:{position:"ne"}}),t.showModal?s("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},[s("div",{staticClass:"mx-auto"},[s("div",{staticClass:"w-full max-w-xs mx-auto mt-8"},[s("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:t.checkForm}},[s("h1",{staticClass:"text-gray-700 font-bold mt-4 mb-8 text-xl"},[t._v(" Add Product IN ")]),s("div",{staticClass:"mb-4"},[s("label",{staticClass:"text-left block text-gray-700 text-base font-bold mb-2",attrs:{for:"total"}},[t._v("Product name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.product_name,expression:"product_name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"total",type:"text"},domProps:{value:t.product_name},on:{input:function(e){e.target.composing||(t.product_name=e.target.value)}}})]),s("div",{staticClass:"mb-4"},[s("label",{staticClass:"text-left block text-gray-700 text-base font-bold mb-2",attrs:{for:"stock"}},[t._v("Stock")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"stock",type:"text"},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})]),s("div",{staticClass:"mb-4"},[s("label",{staticClass:"text-left block text-gray-700 text-base font-bold mb-2",attrs:{for:"price"}},[t._v("Price")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"price",type:"text"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),s("div",{staticClass:"mb-4"},[s("label",{staticClass:"text-left block text-gray-700 text-base font-bold mb-2",attrs:{for:"price"}},[t._v("Image")]),s("input",{attrs:{type:"file"},on:{change:function(e){return t.processFile(e)}}})]),t._m(0),s("div",{staticClass:"mt-4"},[s("button",{staticClass:"text-blue-500 text-center font-bold",staticStyle:{transition:"all .15s ease"},on:{click:function(e){return t.toggleModal()}}},[t._v(" Cancel ")])])])])])]):t._e(),t.showModal?s("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):t._e(),s("div",{staticClass:"bg-white border rounded shadow"},[t._m(1),s("div",{staticClass:"p-5"},[s("table",{staticClass:"w-full p-5 text-gray-700"},[t._m(2),s("tbody",t._l(t.products,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.name))]),s("td",[s("img",{attrs:{width:"100",src:e.photo_url,alt:"Sunset in the mountains"}})]),s("td",[t._v(t._s(e.stock))]),s("td",[t._v(" "+t._s(t._f("currency")(e.price)))]),s("td",[t._v(t._s(e.supplier["full_name"]))]),s("td",[s("a",{attrs:{href:""}},[s("router-link",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded",attrs:{to:{name:"productDetail",params:{id:e.id}}}},[t._v("DETAIL")])],1),t._v(" || "),s("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(s){return t.deletePrd(e.id)}}},[t._v("Delete")])])])})),0)])])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center justify-between"},[s("input",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"submit",value:"Submit"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border-b p-3"},[s("h5",{staticClass:"font-bold uppercase text-gray-600"},[t._v("Table product")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-left text-blue-900"},[t._v("PRODUCT NAME")]),s("th",{staticClass:"text-left text-blue-900"},[t._v("IMAGE")]),s("th",{staticClass:"text-left text-blue-900"},[t._v("STOCK")]),s("th",{staticClass:"text-left text-blue-900"},[t._v("PRICE")]),s("th",{staticClass:"text-left text-blue-900"},[t._v("SUPPLIER")]),s("th",{staticClass:"text-left text-blue-900"},[t._v("ACTION")])])])}],l=(s("b0c0"),s("5530")),i=s("2f62"),n=s("9062"),c=s.n(n),r=(s("e40d"),s("7220")),u=(s("397f"),{components:{Toast:r["Toast"],Loading:c.a},name:"ProductList",data:function(){return{product_name:"",stock:"",price:"",image:"",userId:"",isLoading:!1,fullPage:!0,showModal:!1}},created:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.getProduct(),t.isLoading=!1}),2e3)},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({deletePrd:function(t){var e=confirm("Are you sure delete data?");e&&(this.deleteProduct(t),this.sendNotification("Data Berhasil Dihapus"))},downloadFile:function(){this.downloadAllFile()},processFile:function(t){this.dataFile=t.target.files[0].name},toggleModal:function(){this.showModal=!this.showModal},checkForm:function(t){var e=[];if(""===this.product_name&&e.push("Product name Required"),""===this.stock&&e.push("stock Required"),""===this.price&&e.push("price Required"),console.log({error:e}),e.length>0)this.alert=e;else{var s={name:this.product_name,stock:this.stock,price:this.price,photo:this.dataFile};console.log({data:s}),this.productAction(s)}return t.preventDefault(),!1}},Object(i["b"])(["getProduct","downloadAllFile","productAction","deleteProduct"])),Object(i["b"])({addToast:r["ADD_TOAST_MESSAGE"]})),{},{sendNotification:function(t){this.addToast({text:t,type:"success",dismissAfter:2e3})}}),computed:Object(l["a"])({},Object(i["c"])(["products"]))}),d=u,p=s("2877"),b=Object(p["a"])(d,a,o,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=Product-list.b3c08f87.js.map