<template>
  <div id="container">
    <Header />
  </div>
</template>

<script>
import Header from "../components/Shared/Header/Header";
export default {
  name: "Home",
  components : {
    Header,
  },
  methods : {
    pageClick({target}){
      if(!target.classList.contains('search-result') && !target.classList.contains('header-search')) {
        this.$store.commit('general/setSearchResult',false)
      }
    }
  },
  mounted() {
    document.addEventListener('click',this.pageClick)
  }
}
</script>

<style scoped>

</style>
