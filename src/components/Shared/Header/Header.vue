<template>
  <Top />
  <div class="main-header">
    <Logo />
    <Search />
    <Account />
  </div>
</template>

<script>
import Top from "./Top";
import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";
export default {
  name: "Header",
  components : {
    Top,
    Logo,
    Search,
    Account,
  }
}
</script>

<style scoped>

</style>
