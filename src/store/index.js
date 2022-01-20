import {createStore} from 'vuex'
import general from "./modules/general";

const store = createStore({
    state : {},
    modules : {
        general,
    }
})


export default store
