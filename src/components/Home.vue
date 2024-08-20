<template>
  <div id="app">
    <Navbar></Navbar>
<div class="container-fluid">
  <IntroductionVue class="mt-5"></IntroductionVue>
</div>

  <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import IntroductionVue from './contents/Introduction.vue';
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
export default {
  name: 'Home',
  components:{
    Navbar,
    Footer,
    IntroductionVue
  }
}
</script>

<style>
#app{
  background: #333333;
}


</style>