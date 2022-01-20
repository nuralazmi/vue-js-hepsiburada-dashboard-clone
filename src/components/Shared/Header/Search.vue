<template>
  <div class="search">
    <div class="search-box"
         :class="{'search-box-orange':inputFocus}">
      <div class="icon-input" ref="iconinput">
        <div class="icon">
          <svg-icon :fa-icon="Icons.faSearch" :size="21" flip="horizontal"></svg-icon>
        </div>
        <div class="input">
          <input type="text"
                 @focus="inputFocus = true"
                 @focusout="inputFocus = false"
                 placeholder="Ürün, kategori veya marka ara">
        </div>
        <div class="search-result">
          Aramaya başlamak için en az 2 karakter yazmalısınız
        </div>
      </div>
      <div class="button"
           :class="{'button-orange':inputFocus}">ARA</div>
    </div>
  </div>
</template>

<script>
import Icons from '../../../scripts/Icons'
import SvgIcon from 'vue3-icon'

export default {
  name: "Search",
  data() {
    return {
      Icons,
      inputFocus: false,
      searchBar : {
        searchBarWidth : 400,
        resultWidth : 400,
      }
    }
  },
  methods : {

  },
  computed : {
  },
  components: {
    SvgIcon,
  },
  mounted() {
  }
}
</script>

<style scoped>
.search {
  padding-top: 16px;
}
.search-box {
  height: 48px;
  display: flex;
  border: 2px solid #919191;
  border-radius: 4px;
}
.search-box-orange {
  border-color: #ff6000 !important;
  border-bottom-left-radius: 0;
}
.search-box .icon {
  color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
}
.search-box .input {
  flex: 1;
  width: 100%;
  height: 100%;
}
.search-box .input input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
}
.search-box .button {
  width: 65px;
  height: 100%;
  background-color: #919191;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.button-orange {
  background-color: #ff6000 !important;
}
.search-result {
  position: absolute;
  top: 100%;
  height: 60px;
  border-radius: 0 0 4px 4px;
  border-width: 2px;
  border-style: solid;
  border-color: #ff6000;
  left: -2px;
  border-top: none;
  width: calc(100% + 4px);
  display: none;
}
.icon-input{
display: flex;
flex: 1;
position: relative;
}
::placeholder {
font-weight: bold;
color: #cccccc;
font-size: 14px;
}
</style>
