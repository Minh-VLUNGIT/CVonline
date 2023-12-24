<template>
    <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10" >
        <h1 class="text-4xl text-gray-700 my-5 font-extrabold  text-center"> {{ posts.title }}</h1>
        <div class="text-center font-bold mb-10  text-indigo-500">{{ posts.day }}</div>
        <div class="mx-7  ">
            <div class="my-2 text-gray-600 flex dark:text-blue-100 w-[100%] ">
                <p class="mr-2 font-bold">Số lượng: </p> <p>{{ posts.member }}</p>
            </div>
            <div class="my-2 text-gray-600 flex dark:text-blue-100">
                <p class="mr-2 font-bold">Vị trí: </p> <p>{{ posts.role }}</p>
            </div>
            <div class="my-2 text-gray-600 flex dark:text-blue-100">
                <p class="mr-2 font-bold">Công Nghệ:  </p> <p>{{ posts.tech }}</p>
            </div>
        </div>
        <div class="prose min-w-full p-7 mx-auto nuxt-content">
            <h1 class="text-5xl bold black"> Mô tả</h1>
        </div>
        <div  v-html="posts.decription" class="mb-10 p-7">     </div>
    </div>
</template>
<script>

import datain from "../../../assets/database.js"
export default {
    
  data() {
    return {
      posts: datain.find(item => item.id === this.$route.params.id),
      errors: [],

    }
  },
  // lấy dữ liệu khi component được tạo thành công
 
}
</script>
