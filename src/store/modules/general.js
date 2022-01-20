const store = {
    namespaced: true,
    state: {
        searchResult : false,
    },
    getters: {
        getSearchResult : state => state.searchResult
    },
    mutations: {
        setSearchResult(state,payload){
            state.searchResult = payload
        }
    },
    actions: {}
}

export default store
