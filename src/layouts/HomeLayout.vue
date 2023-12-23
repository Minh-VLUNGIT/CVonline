<template>
    <div class="hello">
      <div class="md:max-w-6xl mx-auto  top-0 z-50 h-full	">
        <div class="bg-white flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2">
          <h2 class="text-7xl mt-10" v-on:click="reverseMessage('/CVvn/home')"  :style="{cursor: 'pointer' }"> XEM CV NGUYỄN HOÀNG MINH</h2> 
        </div>
      </div>
    </div>
</template>
<script>
export default {

  methods: {
    reverseMessage(link) {
      this.$router.push(link); // Chuyển hướng đến todo.link
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

