<template>
  <div class="header-top">
    <ul>
      <li v-for="item in menu" :key="item">
        <a :style="{'color':item.color}"
            :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderTop from "../../../store/state/static/HeaderTop"
export default {
  name: "Top",
  data(){
    return {
      menu : HeaderTop,
    }
  }
}
</script>

<style scoped>

</style>
