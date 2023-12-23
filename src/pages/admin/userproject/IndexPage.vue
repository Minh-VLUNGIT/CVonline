<template>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Dự Án
            </h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Một số dự án mà tôi đã xây dựng hoặc tham gia!
            </p>
            
        </div>

        <div class="relative mb-auto" v-if="load">
            <div>
                <div class="container py-12">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/2 md" style="max-width:544px ;" v-for="todo in listproject" v-bind:key="todo.id">
                            <div class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
                                <div class="p-6">
                                    <div class="flex flex-row justify-between items-center">
                                        <div class="my-2">
                                            <h2 class="text-2xl font-bold leading-8 tracking-tight ">{{ todo.title }}</h2>
                                        </div>
                                        <div class="flex flex-row justify-between" :style="{cursor:'pointer'}">
                                            <a  v-on:click="reverseMessage('/CVvn/project/'+todo.id)" class="text-sm text-gray-500 transition hover:text-gray-600"  >                  
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <p class="mr-2 mb-4">  Số lượng thành viên: {{ todo.member }}</p>
                                    <p class="mr-2 mb-4">Vị trí: {{ todo.role }}</p> 

                                    <div class="flex flex-row justify-between">
                                        <div class="text-gray-400 text-sm font-extralight">{{ todo.tech }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            listproject:[],
            load:false
        };
    },
    methods: {
        reverseMessage(link) {
        this.$router.push(link); // Chuyển hướng đến todo.link
        },
    },
    created() {
    axios.get(`http://localhost:5000/cv/project`)
    .then(response => {
      this.listproject = response.data.data
      this.load=true
    })
    },
}
</script>