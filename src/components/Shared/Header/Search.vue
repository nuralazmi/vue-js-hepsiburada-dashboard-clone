<template>
  <div class="search">
    <div class="search-box"
         :class="{'search-box-orange':getSearchResult}">
      <div class="icon-input" ref="iconinput">
        <div class="icon">
          <svg-icon :fa-icon="Icons.faSearch" :size="21" flip="horizontal"></svg-icon>
        </div>
        <div class="input">
          <input type="text"
                 class="header-search"
                 @keyup="search"
                 @focus="this.$store.commit('general/setSearchResult',true)"
                 placeholder="Ürün, kategori veya marka ara">
        </div>
        <div class="search-result" v-if="getSearchResult">
          <div class="message" v-if="searchBar.resultList.length === 0">
            Aramaya başlamak için <strong>en az 2 karakter</strong> yazmalısınız
          </div>
          <div class="result header-search" v-if="searchBar.resultList.length > 0">
            <div class="result-item header-search" v-for="item in searchBar.resultList" :key="item">
              <div class="text">{{ item.text }}</div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="button"
           :class="{'button-orange':getSearchResult}">ARA
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../../scripts/Icons'
import SvgIcon from 'vue3-icon'
import {mapGetters} from 'vuex'
import HeaderSearchResult from '../../../store/state/static/HeaderSearchResult'

export default {
  name: "Search",
  data() {
    return {
      Icons,
      inputFocus: false,
      searchBar: {
        searchBarWidth: 400,
        resultWidth: 400,
        resultList: []
      }
    }
  },
  methods: {
    search({target}){
      if(target.value.length >= 2){
        this.searchBar.resultList = HeaderSearchResult
      } else this.searchBar.resultList = []
    },
  },
  computed: {
    ...mapGetters({
      getSearchResult: 'general/getSearchResult',
    })
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
  height: auto;
  font-size: 12px;
  border-radius: 0 0 4px 4px;
  border-width: 2px;
  border-style: solid;
  border-color: #ff6000;
  left: -2px;
  border-top: none;
  width: calc(100% + 4px);
  color: #9b9b9b;
}
.search-result strong {
  margin: 0 2px;
}
.search-result .result {
  padding: 8px 16px;
}
.search-result .message {
  padding: 16px 32px;
}
.search-result .result-item{
  padding: 8px 16px;
  font-size: 14px;
  color: black;
  display: flex;
  justify-content: space-between;
}
.search-result .result-item:hover{
  background-color: #f3f3f3;
  border-radius: 20px;
  cursor: pointer;
}
.search-result .result-item .title{
  color: #91939e;
  font-weight: 600;
  font-size: 12px;
}
.icon-input {
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
