<template>
  <NavigationVue/>
  <router-view/>
  <FooterVue/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@200;300;500;600;700;900&display=swap');

  :root {
    --font:'Exo', sans-serif;
    --color-dark-bold:#393939;
    --color-dark-normal:#666666;
  }

  * {
    font-family: var(--font);
  }
</style>
<script>
import NavigationVue from './components/NavigationVue.vue'
import FooterVue from './components/FooterVue.vue'

export default {
  components:{
    NavigationVue,
    FooterVue
  }
}
</script>
