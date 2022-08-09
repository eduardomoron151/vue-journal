import { createStore } from 'vuex';

import journal from '@/modules/datebook/store/journal';

const store = createStore({
    modules : {
        journal
    }
});

export default store;