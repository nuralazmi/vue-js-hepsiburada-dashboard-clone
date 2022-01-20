<template>
  <div class="logo">
    <div class="logo-file">
      <a href="">
        <LogoSvg />
      </a>
    </div>
  </div>
</template>

<script>
import LogoSvg from "../../../assets/Svg/Logo";
export default {
  name: "Logo",
  components : {
    LogoSvg,
  }
}
</script>

<style scoped>
.logo-file{
  padding: 18px 0 0 10px;
}
.logo-file svg{
  width: 190px;
  height: 45px;
}
</style>
