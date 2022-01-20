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
      console.log(target)
    }
  },
  mounted() {
    document.addEventListener('click',this.pageClick)
  }
}
</script>

<style scoped>

</style>
