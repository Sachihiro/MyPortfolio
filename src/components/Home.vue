<template>
  <div id="app">
    <Navbar></Navbar>
<div class="container-fluid mb-3">
  <IntroductionVue class="mt-5"></IntroductionVue>
</div>
<Language style="height: 100rem;"></Language>
  <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import IntroductionVue from './contents/Introduction.vue';
// import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import Language from './contents/Language.vue';
export default {
  name: 'Home',
  components:{
    Navbar,
    IntroductionVue,
    Language
  }
}
</script>

<style>
#app{
  background: #333333;
}


</style>