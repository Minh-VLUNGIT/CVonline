<template>
    <div class="hello">
      <div class="md:max-w-6xl mx-auto  top-0 z-50 h-1/2	">
        <div class="bg-white flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2">
          <ol class="flex justify-center list-reset m-0 w-full md:w-auto">
            <li  v-for="todo in todos" v-bind:key="todo.id" >
              <h2 class="text-2xl" v-on:click="reverseMessage(todo.link)"  :style="{cursor: 'pointer', color: this.$route.path == todo.link ? '#4F46E5' : 'black' }"> {{ todo.text }} </h2> 
            </li>
          </ol>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  } ,
  data() {
    return {
      todos: [
        { text: 'Giới Thiệu', id: 3 , link:'/CVvn/home'},
        { text: 'Dự Án', id: 2, link:'/CVvn/project' },
      ],
      choose:3

    };
  },
  methods: {
    reverseMessage(link) {
      this.$router.push(link); // Chuyển hướng đến todo.link
    },
    combine(id,choose) {
      if(id===choose){
        return true
      }
      else false
    }
  },
  computed: {
    olStyles() {
      return {
        borderBottom: '1px solid #000',
        position:'fixed',
        width:'85%',
        height: '100px',
        left: '50%',
        top:'50px',
        transform: 'translate(-50%, -50%)',
        zIndex:'1',
        background:'white'
      };
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 0 0 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

